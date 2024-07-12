import { useState } from 'react';
import Header from '../../components/Header/Header';
import { ICardState, IStarShip } from '../../Types/type';
import Cards from '../../components/Cards/Cards';

export default function CardsPage() {
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
