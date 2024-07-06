import React from 'react';
import s from './Card.module.sass';
import { IStarShip } from '../../Types/type';
import Card from './Card';

interface IProps {}

interface IState {
  haveData: boolean;
  starships: IStarShip[] | [];
}

class Cards extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { haveData: false, starships: [] };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/starships/?page=1')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          haveData: true,
          starships: data.results,
        });
      });
  }

  render() {
    if (this.state.haveData) {
      return (
        <div className={s.cards}>
          {this.state.starships.map((starship, index) => {
            return <Card key={index} starship={starship} />;
          })}
        </div>
      );
    }
    return (
      <>
        <img src="/loader.gif" alt="" />
      </>
    );
  }
}

export default Cards;
