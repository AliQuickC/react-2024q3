import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { ICardState, IStarshipsResponse } from '../../Types/type';
import Cards from '../../components/Cards/Cards';
import Pagination from '../../components/Pagination/Pagination';
import { baseUrl } from '../../modules/constants';
import { useParams } from 'react-router-dom';

export default function CardsPage() {
  const match = { params: useParams() };
  const pageFromUrl = match.params.page || '1';
  const url = baseUrl + `?page=${pageFromUrl}`;

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

  useEffect(() => {
    fetch(url)
      .then((response: Response) => response.json())
      .then((data: IStarshipsResponse) => {
        setCards(data, +pageFromUrl);
      });
  }, [pageFromUrl]); // eslint-disable-line react-hooks/exhaustive-deps

  const switchHaveData = (haveData: boolean) => {
    setStarShipsData({ ...starShipsData, haveData });
  };

  const content: JSX.Element = starShipsData.haveData ? (
    <>
      <Pagination cardsTotal={starShipsData.shipsTotal} currentPage={starShipsData.currentPage} />
      <Cards cardsState={starShipsData} setCards={setCards} />
    </>
  ) : (
    <img src="/loader.gif" alt="loader..." />
  );

  return (
    <>
      <Header switchHaveData={switchHaveData} setCards={setCards} />
      <main className="main">
        <div className="container">{content}</div>
      </main>
    </>
  );
}
