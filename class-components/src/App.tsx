import React from 'react';
import './App.sass';
import Cards from './components/Cards/Cards';
import { ICardState, IStarShip } from './Types/type';
import Header from './components/Header/Header';

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
      <>
        <Header switchHaveData={this.switchHaveData} setCards={this.setCards} />
        <main className="main">
          <div className="container">
            <Cards cardsState={this.state} setCards={this.setCards} />
          </div>
        </main>
      </>
    );
  }
}

export default App;
