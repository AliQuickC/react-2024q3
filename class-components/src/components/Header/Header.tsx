import React from 'react';
import { IStarShip } from '../../Types/type';
import Search from '../Search/Search';
import s from './Header.module.sass';

interface IProps {
  switchHaveData: (haveData: boolean) => void;
  setCards: (cards: IStarShip[]) => void;
}

interface IState {
  isError: boolean;
}

class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { isError: false };
  }

  render() {
    if (this.state.isError) {
      throw new Error('Wrong!!!');
    }

    return (
      <header className={s.header}>
        <div className={`container ${s.headerContainer} `}>
          <Search switchHaveData={this.props.switchHaveData} setCards={this.props.setCards} />
          <button
            className={s.trowButton}
            onClick={() => {
              this.setState({ isError: true });
            }}
          >
            generate throw
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
