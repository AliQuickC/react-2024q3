import React from 'react';
import s from './Card.module.sass';
import { IStarShip } from '../../Types/type';

interface IProps {
  starship: IStarShip;
  id: string;
  switchShowDetail: (isShowCardDetail: boolean) => void;
}

function Card(props: IProps) {
  return (
    <div
      className={s.card}
      onClick={() => {
        props.switchShowDetail(true);
        console.log('click', props.id);
      }}
    >
      <div className={s.cardBody}>
        <div className="starships-model">model: {props.starship.model}</div>
        <div className="starships-starship-class">starship class: {props.starship.starship_class}</div>
        <div className="starships-passengers">passengers: {props.starship.passengers}</div>
        <div className="starships-cargo-capacity">cargo capacity: {props.starship.cargo_capacity}</div>
        <div className="starships-length">length: {props.starship.length}</div>
        <div className="starships-manufacturer">manufacturer: {props.starship.manufacturer}</div>
        <div className="starships-atmosphering-speed">
          max atmosphering speed: {props.starship.max_atmosphering_speed}
        </div>
      </div>
    </div>
  );
}

export default Card;
