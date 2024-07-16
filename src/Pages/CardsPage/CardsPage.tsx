import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { ICardState, IStarshipsResponse } from '../../Types/type';
import Cards from '../../components/Cards/Cards';
import { baseUrl } from '../../modules/constants';
import { useLocation } from 'react-router-dom';
import CardDetails from '../../components/CardDetails/CardDetails';
import s from './CardsPage.module.sass';

// const initialDetailState = { haveData: false, starship: null };

export default function CardsPage() {
  const location = useLocation();
  const pageNumber = new URLSearchParams(location.search).get('page') || '1';
  const searchWord = new URLSearchParams(location.search).get('search');

  const url = searchWord ? baseUrl + `?search=${searchWord}&page=${pageNumber}` : baseUrl + `?page=${pageNumber}`;

  const [starShipsData, setStarShipsData] = useState<ICardState>({
    haveData: false,
    isShowCardDetail: false,
    shipsTotal: 0,
    starships: [],
    currentPage: 1,
  });

  // const [starShipDetails, setStarShipDetails] = useState<IStarShipState>(initialDetailState);

  function getCardsAPI(url: string, pageNumber: number = 1) {
    fetch(url)
      .then((response: Response) => response.json())
      .then((data: IStarshipsResponse) => {
        setCards(data, pageNumber);
      });
  }

  // function getStarShipAPI(id: string) {
  //   fetch(baseUrl + '/' + id)
  //     .then((response: Response) => response.json())
  //     .then((data: IStarShip) => {
  //       // !!!
  //     });
  // }

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

  const switchShowDetail = (isShowCardDetail: boolean) => {
    setStarShipsData({ ...starShipsData, isShowCardDetail });
  };

  return (
    <>
      <Header switchHaveData={switchHaveData} setCards={setCards} />
      <main className="main">
        <div
          className={
            'container ' +
            s.cardsContainer +
            ' ' +
            (starShipsData.haveData && starShipsData.isShowCardDetail ? s.cardsContainerDetailsShow : '')
          }
        >
          <Cards
            cardsState={starShipsData}
            setCards={setCards}
            pageNumber={+pageNumber}
            switchShowDetail={switchShowDetail}
            cardsTotal={starShipsData.shipsTotal}
            currentPage={starShipsData.currentPage}
          />

          {starShipsData.haveData && starShipsData.isShowCardDetail ? (
            <CardDetails switchShowDetail={switchShowDetail} isShowCardDetail={starShipsData.isShowCardDetail} />
          ) : (
            ''
          )}
        </div>
      </main>
    </>
  );
}
