import React from 'react';
import './App.sass';
import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';
import { ICardState, IStarShip } from './Types/type';

interface IProps {}

class App extends React.Component<IProps, ICardState> {
  constructor(props: IProps) {
    super(props);
    this.state = { haveData: false, starships: [] };
  }

  setCards = (starships: IStarShip[]) => {
    this.setState({
      haveData: true,
      starships,
    });
  };

  switchHaveData = (haveData: boolean) => {
    this.setState({ ...this.state, haveData });
  };

  render() {
    return (
      <main className="main">
        <div className="container">
          <Search switchHaveData={this.switchHaveData} setCards={this.setCards} />
          <Cards cardsState={this.state} setCards={this.setCards} />
        </div>
      </main>
    );
  }
}

export default App;
