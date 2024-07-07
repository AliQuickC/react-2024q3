import React from 'react';
import s from './Search.module.sass';
import { IStarShip } from '../../Types/type';

const storeKEY = 'module1';

interface IProps {
  switchHaveData: (haveData: boolean) => void;
  setCards: (cards: IStarShip[]) => void;
}

interface IState {
  findWord: string;
}

class Search extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { findWord: '' };
  }

  componentDidMount() {
    const LocStor = localStorage.getItem(storeKEY);
    if (!LocStor || LocStor === '{}') {
      this.setState({ findWord: '' });
    } else {
      this.setState(JSON.parse(LocStor));
    }
  }

  findHandler = () => {
    localStorage.setItem(storeKEY, JSON.stringify({ findWord: this.state.findWord }));
    this.props.switchHaveData(false);
    fetch('https://swapi.dev/api/starships/?search=' + this.state.findWord)
      .then((response) => response.json())
      .then((data) => {
        this.props.setCards(data.results);
      });
  };

  render() {
    return (
      <div className={s.search}>
        <input
          className={s.searchInput}
          type="text"
          value={this.state.findWord}
          onChange={(event) => {
            this.setState({ findWord: event.target.value.trim() });
          }}
        />
        <button className={s.findButton} onClick={this.findHandler}></button>
      </div>
    );
  }
}

export default Search;
