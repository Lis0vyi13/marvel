import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import AppMain from '../appMain/AppMain';
import RandomChar from '../randomChar/RandomChar';
import AppMainList from '../appMainList/AppMainList';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import Marvel from '../../services/Marvel';

const CharactersPage = () => {
  const [activeChar, setChar] = useState(null);
  const [totalCharAmount, setCharAmount] = useState(null);
  const [randomCharBlock, setRandomCharBlock] = useState(null);
  const [charInfoBlock, setCharInfoBlock] = useState(null);

  const marvel = new Marvel();

  useEffect(() => {
    const fetchData = async () => {
      await getTotalCharAmount();
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getActiveChar = (id) => {
    setChar(id);
  };

  const getCharInfoBlock = (block) => {
    setCharInfoBlock(block);
  };

  const getTotalCharAmount = async () => {
    const totalChar = await marvel.getAllCharacters(1);
    const total = totalChar.data.total;
    setCharAmount(total);
  };

  const handleRandomCharBlock = (char) => {
    setRandomCharBlock(char);
  };

  return (
    <>
      <Helmet>
        <title>Characters</title>
        <meta name='description' content='Characters Page' />
      </Helmet>
      <AppMain randomCharBlock={randomCharBlock} />
      <RandomChar
        setRandomChar={handleRandomCharBlock}
        title='Random character'
      />
      <AppMainList>
        <CharList
          charInfoBlock={charInfoBlock}
          total={totalCharAmount}
          getActiveChar={getActiveChar}
        />
        <CharInfo getCharInfoBlock={getCharInfoBlock} activeChar={activeChar} />
      </AppMainList>
    </>
  );
};

export default CharactersPage;
