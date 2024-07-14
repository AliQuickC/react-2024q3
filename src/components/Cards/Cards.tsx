import { useEffect } from 'react';
import s from './Card.module.sass';
import Card from './Card';
import { ICardState, IStarshipsResponse, SetCards } from '../../Types/type';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../modules/constants';

interface IProps {
  cardsState: ICardState;
  setCards: SetCards;
}

function Cards(props: IProps) {
  const match = { params: useParams() };
  const pageFromUrl = match.params.page || '1';
  const url = baseUrl + `?page=${pageFromUrl}`;

  useEffect(() => {
    fetch(url)
      .then((response: Response) => response.json())
      .then((data: IStarshipsResponse) => {
        props.setCards(data, +pageFromUrl);
      });
  }, [pageFromUrl]); // eslint-disable-line react-hooks/exhaustive-deps

  if (props.cardsState.haveData) {
    const cards = props.cardsState.starships.map((starship, index) => {
      return <Card key={index} starship={starship} />;
    });

    return <div className={s.cards}>{cards.length === 0 ? 'Starships not found!' : cards}</div>;
  }
  return <img src="/loader.gif" alt="loader..." />;
}

export default Cards;
