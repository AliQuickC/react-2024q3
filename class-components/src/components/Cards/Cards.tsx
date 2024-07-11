import { useEffect } from 'react';
import s from './Card.module.sass';
import Card from './Card';
import { ICardState, IStarShip } from '../../Types/type';

interface IProps {
  cardsState: ICardState;
  setCards: (cards: IStarShip[]) => void;
}

function Cards(props: IProps) {
  useEffect(() => {
    fetch('https://swapi.dev/api/starships')
      .then((response: Response) => response.json())
      .then((data: { results: IStarShip[] }) => {
        props.setCards(data.results);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (props.cardsState.haveData) {
    const cards = props.cardsState.starships.map((starship, index) => {
      return <Card key={index} starship={starship} />;
    });

    return <div className={s.cards}>{cards.length === 0 ? 'Starships not found!' : cards}</div>;
  }
  return <img src="/loader.gif" alt="loader..." />;
}

export default Cards;
