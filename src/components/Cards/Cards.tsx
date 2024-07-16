import s from './Card.module.sass';
import Card from './Card';
import { ICardState, SetCards } from '../../Types/type';
import Pagination from '../Pagination/Pagination';

interface IProps {
  cardsState: ICardState;
  setCards: SetCards;
  pageNumber: number;
  cardsTotal: number;
  currentPage: number;
}

function Cards(props: IProps) {
  if (props.cardsState.haveData) {
    const cards: JSX.Element[] = props.cardsState.starships.map((starship, index) => {
      const url = new URL(starship.url);
      const urlPath: string[] = url.pathname.split('/');

      return <Card key={index} id={urlPath[urlPath.length - 2]} starship={starship} />;
    });

    return (
      <>
        <div className={s.cardsSide}>
          <Pagination cardsTotal={props.cardsTotal} currentPage={props.currentPage} />
          <div className={s.cards}>{cards.length === 0 ? 'Starships not found!' : cards}</div>
        </div>
      </>
    );
  }
  return <img src="/loader.gif" alt="loader..." />;
}

export default Cards;
