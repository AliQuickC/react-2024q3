import React from 'react';
import s from './Card.module.sass';
import { IStarShip } from '../../Types/type';

function Card(props: { starship: IStarShip }) {
  return (
    <div className={s.card}>
      <div className={s.cardBody}>
        <div className="starships-model">model: {props.starship.model}</div>
        <div className="starships-starship-class">starship_class: {props.starship.starship_class}</div>
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
