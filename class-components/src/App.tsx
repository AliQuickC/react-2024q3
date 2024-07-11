import { useState } from 'react';
import './App.sass';
import Cards from './components/Cards/Cards';
import { ICardState, IStarShip } from './Types/type';
import Header from './components/Header/Header';

export default function App() {
  const [starShipsData, setStarShipsData] = useState<ICardState>({ haveData: false, starships: [] });

  const setCards = (starships: IStarShip[]) => {
    setStarShipsData({
      haveData: true,
      starships,
    });
  };

  const switchHaveData = (haveData: boolean) => {
    setStarShipsData({ ...starShipsData, haveData });
  };

  return (
    <>
      <Header switchHaveData={switchHaveData} setCards={setCards} />
      <main className="main">
        <div className="container">
          <Cards cardsState={starShipsData} setCards={setCards} />
        </div>
      </main>
    </>
  );
}
