import React from 'react';
import s from './Card.module.sass';
import Card from './Card';
import { ICardState, IStarShip } from '../../Types/type';

interface IProps {
  cardsState: ICardState;
  setCards: (cards: IStarShip[]) => void;
}

class Cards extends React.Component<IProps, ICardState> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/starships')
      .then((response) => response.json())
      .then((data) => {
        this.props.setCards(data.results);
      });
  }

  render() {
    if (this.props.cardsState.haveData) {
      const cards = this.props.cardsState.starships.map((starship, index) => {
        return <Card key={index} starship={starship} />;
      });

      return <div className={s.cards}>{cards.length === 0 ? 'Starships not found!' : cards}</div>;
    }
    return <img src="/loader.gif" alt="loader..." />;
  }
}

export default Cards;
