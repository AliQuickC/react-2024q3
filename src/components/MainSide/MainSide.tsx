import s from './MainSide.module.sass';
import Card from '../Cards/Card';
import { SetCards } from '../../Types/type';
import Pagination from '../Pagination/Pagination';
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { starShipDataContext } from '../../modules/constants';

interface IProps {
  setCards: SetCards;
  pageNumber: number;
  cardsTotal: number;
  currentPage: number;
}

function MainSide(props: IProps) {
  const starShips = useContext(starShipDataContext);

  const [, setDetailsParam] = useSearchParams();

  const cards: JSX.Element[] = starShips.starShipsState.starships.map((starship, index) => {
    const url = new URL(starship.url);
    const urlPath: string[] = url.pathname.split('/');

    return <Card key={index} id={urlPath[urlPath.length - 2]} starship={starship} />;
  });

  return (
    <>
      <div
        className={s.cardsSide}
        onClick={() => {
          if (starShips.starShipsState.haveData && starShips.starShipId) {
            setDetailsParam((params) => {
              params.delete('item');
              return params;
            });
          }
        }}
      >
        <Pagination cardsTotal={props.cardsTotal} currentPage={props.currentPage} />
        <div className={s.cards}>{cards.length === 0 ? 'Starships not found!' : cards}</div>
      </div>
    </>
  );
}

export default MainSide;
