import { useState } from 'react';
import Header from '../../components/Header/Header';
import { ICardState, IStarshipsResponse } from '../../Types/type';
import Cards from '../../components/Cards/Cards';
import Pagination from '../../components/Pagination/Pagination';

export default function CardsPage() {
  const [starShipsData, setStarShipsData] = useState<ICardState>({
    haveData: false,
    shipsTotal: 0,
    starships: [],
    currentPage: 1,
  });

  const setCards = (starships: IStarshipsResponse, currentPage: number = 1) => {
    setStarShipsData({
      ...starShipsData,
      haveData: true,
      starships: starships.results,
      shipsTotal: starships.count,
      currentPage,
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
          <Pagination cardsTotal={starShipsData.shipsTotal} currentPage={starShipsData.currentPage} />
          <Cards cardsState={starShipsData} setCards={setCards} />
        </div>
      </main>
    </>
  );
}
