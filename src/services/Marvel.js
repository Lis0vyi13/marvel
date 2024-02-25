class Marvel {
  key = '333d74a765f835dd4bccc16126e65eaa';
  _baseOffset = 1253;

  getAllCharacters = async (offset) => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset}&apikey=${this.key}`,
    );
    if (!response.ok) console.error('Fetch error');

    return await response.json();
  };

  getCharactersList = async (offset) => {
    const response = await this.getAllCharacters(offset);
    const chars = response.data.results;

    return chars.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${this.key}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch character');
    }
    return await response.json();
  };
  getCharInfoByName = async (name) => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=${this.key}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch character');
    }
    const char = await response.json();
    if (char.data.results.length === 0)
      throw new Error('Failed to fetch character');

    return char.data.results[0];
  };
  getCharInfo = async (id) => {
    const response = await this.getCharacter(id);
    const char = response.data.results;

    return char.map(this._transformCharacter);
  };

  getComics = async (offset = 2) => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics?offset=${offset}&apikey=${this.key}`,
    );
    const comics = await response.json();
    return comics.data.results;
  };

  getComic = async (id) => {
    const data = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${this.key}`,
    );

    const response = await data.json();
    const comic = response.data.results;
    return comic.map(this._transformComics)[0];
  };

  _transformCharacter = (char, slice = true) => {
    return {
      id: char.id,
      name: char.name,
      description: slice
        ? char.description
          ? `${char.description.slice(0, 210)}...`
          : 'There is no description for this character'
        : char.description,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items.slice(0, 9),
    };
  };
  _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || 'There is no description',
      pageCount: comics.pageCount
        ? `${comics.pageCount} p.`
        : 'No information about the number of pages',
      thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
      language: comics.textObjects[0]?.language || 'en-us',
      price: comics.prices[0].price
        ? `${comics.prices[0].price}$`
        : 'Not available',
    };
  };
}
export default Marvel;
