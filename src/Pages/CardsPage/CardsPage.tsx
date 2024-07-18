import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { ICardState, IStarShip, IStarshipsResponse, IStarShipState } from '../../Types/type';
import MainSide from '../../components/MainSide/MainSide';
import { baseUrl } from '../../modules/constants';
import { useLocation } from 'react-router-dom';
import CardDetails from '../../components/CardDetails/CardDetails';
import s from './CardsPage.module.sass';
import Loader from '../../components/Loader/Loader';

const initialDetailState = { haveData: false, starship: null };

export default function CardsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageNumber = searchParams.get('page') || '1';
  const searchWord = searchParams.get('search');
  const starShipId = searchParams.get('item');

  const url = searchWord ? baseUrl + `?search=${searchWord}&page=${pageNumber}` : baseUrl + `?page=${pageNumber}`;

  const [starShipsData, setStarShipsData] = useState<ICardState>({
    haveData: false,
    shipsTotal: 0,
    starships: [],
    currentPage: 1,
  });

  const [starShipDetails, setStarShipDetails] = useState<IStarShipState>(initialDetailState);

  function getCardsAPI(url: string, pageNumber: number = 1) {
    fetch(url)
      .then((response: Response) => response.json())
      .then((data: IStarshipsResponse) => {
        setCards(data, pageNumber);
      });
  }

  function getStarShipAPI(url: string) {
    fetch(url)
      .then((response: Response) => response.json())
      .then((data: IStarShip) => {
        setStarShipDetails({ haveData: true, starship: data });
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

  useEffect(() => {
    if (starShipId) {
      setStarShipDetails({ ...starShipDetails, haveData: false });
      getStarShipAPI(baseUrl + '/' + starShipId);
    }
  }, [starShipId]); // eslint-disable-line react-hooks/exhaustive-deps

  const switchHaveData = (haveData: boolean) => {
    setStarShipsData({ ...starShipsData, haveData });
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
            (starShipsData.haveData && starShipId ? s.cardsContainerDetailsShow : '')
          }
        >
          {starShipsData.haveData ? (
            <MainSide
              cardsState={starShipsData}
              setCards={setCards}
              pageNumber={+pageNumber}
              cardsTotal={starShipsData.shipsTotal}
              currentPage={starShipsData.currentPage}
            />
          ) : (
            <Loader />
          )}

          {starShipsData.haveData && starShipId ? <CardDetails starShipDetails={starShipDetails} /> : ''}
        </div>
      </main>
    </>
  );
}
