import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { ICardState, IStarshipsResponse } from '../../Types/type';
import Cards from '../../components/Cards/Cards';
import Pagination from '../../components/Pagination/Pagination';
import { baseUrl } from '../../modules/constants';
import { useLocation } from 'react-router-dom';

export default function CardsPage() {
  const location = useLocation();
  const pageNumber = new URLSearchParams(location.search).get('page') || '1';
  const searchWord = new URLSearchParams(location.search).get('search');

  const url = searchWord ? baseUrl + `?search=${searchWord}&page=${pageNumber}` : baseUrl + `?page=${pageNumber}`;

  const [starShipsData, setStarShipsData] = useState<ICardState>({
    haveData: false,
    shipsTotal: 0,
    starships: [],
    currentPage: 1,
  });

  function getCardsAPI(url: string, pageNumber: number = 1) {
    fetch(url)
      .then((response: Response) => response.json())
      .then((data: IStarshipsResponse) => {
        setCards(data, pageNumber);
      });
  }

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
    getCardsAPI(url, +pageNumber);
  }, [starShipsData.haveData]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    switchHaveData(false);
  }, [url, pageNumber, searchWord]); // eslint-disable-line react-hooks/exhaustive-deps

  const switchHaveData = (haveData: boolean) => {
    setStarShipsData({ ...starShipsData, haveData });
  };

  const cardsContent: JSX.Element = starShipsData.haveData ? (
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
        <div className="container">{cardsContent}</div>
      </main>
    </>
  );
}
