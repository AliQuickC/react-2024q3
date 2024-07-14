import s from './Card.module.sass';
import Card from './Card';
import { ICardState, SetCards } from '../../Types/type';

interface IProps {
  cardsState: ICardState;
  setCards: SetCards;
}

function Cards(props: IProps) {
  if (props.cardsState.haveData) {
    const cards = props.cardsState.starships.map((starship, index) => {
      return <Card key={index} starship={starship} />;
    });

    return <div className={s.cards}>{cards.length === 0 ? 'Starships not found!' : cards}</div>;
  }
  return <img src="/loader.gif" alt="loader..." />;
}

export default Cards;
