import { useEffect, useRef, useState } from 'react';
import s from './Search.module.sass';
import { SetCards } from '../../Types/type';
import { baseUrl } from '../../modules/constants';

const storeKEY = 'module1';

interface IProps {
  switchHaveData: (haveData: boolean) => void;
  setCards: SetCards;
}

function Search(props: IProps) {
  const [findWord, setFindWord] = useState<string>('');
  const refFindWord = useRef('');

  useEffect(() => {
    const LocStor = localStorage.getItem(storeKEY);
    if (!LocStor || LocStor === '{}') {
      setFindWord('');
      refFindWord.current = '';
    } else {
      const findWord = JSON.parse(LocStor).findWord;
      setFindWord(findWord);
      refFindWord.current = findWord;
    }
    return () => {
      localStorage.setItem(storeKEY, JSON.stringify({ findWord: refFindWord.current }));
    };
  }, []);

  const findHandler = () => {
    localStorage.setItem(storeKEY, JSON.stringify({ findWord: findWord }));
    props.switchHaveData(false);
    fetch(baseUrl + '/?search=' + findWord)
      .then((response) => response.json())
      .then((data) => {
        props.setCards(data);
      });
  };

  return (
    <div className={s.search}>
      <input
        className={s.searchInput}
        type="text"
        value={findWord}
        onChange={(event) => {
          setFindWord(event.target.value.trim());
        }}
      />
      <button className={s.findButton} onClick={findHandler}></button>
    </div>
  );
}

export default Search;
