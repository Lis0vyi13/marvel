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
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=333d74a765f835dd4bccc16126e65eaa`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch character');
    }
    return await response.json();
  };
  getCharInfo = async (id) => {
    const response = await this.getCharacter(id);
    const char = response.data.results;

    return char.map(this._transformCharacter);
  };
  _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : 'There is no description for this character',
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items.slice(0, 9),
    };
  };
}
export default Marvel;
