import React, { useState } from 'react';
import { IStarShip } from '../../Types/type';
import Search from '../Search/Search';
import s from './Header.module.sass';

interface IProps {
  switchHaveData: (haveData: boolean) => void;
  setCards: (cards: IStarShip[]) => void;
}

function Header(props: IProps) {
  const [isError, setIsError] = useState<boolean>(false);

  if (isError) {
    throw new Error('Wrong!!!');
  }

  return (
    <header className={s.header}>
      <div className={`container ${s.headerContainer} `}>
        <Search switchHaveData={props.switchHaveData} setCards={props.setCards} />
        <button
          className={s.trowButton}
          onClick={() => {
            setIsError(true);
          }}
        >
          generate throw
        </button>
      </div>
    </header>
  );
}

export default Header;
