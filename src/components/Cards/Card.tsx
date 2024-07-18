import s from './Card.module.sass';
import { IStarShip } from '../../Types/type';
import { useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import { starShipDataContext } from '../../modules/constants';

interface IProps {
  starship: IStarShip;
  id: string;
}

function Card(props: IProps) {
  const [, setDetailsParam] = useSearchParams();

  const starShips = useContext(starShipDataContext);

  return (
    <div
      className={s.card}
      onClick={() => {
        if (!starShips.starShipId) {
          setDetailsParam((params) => {
            params.set('item', props.id);
            return params;
          });
        }
      }}
    >
      <div className={s.cardBody}>
        <div className="starships-model">model: {props.starship.model}</div>
        <div className="starships-manufacturer">manufacturer: {props.starship.manufacturer}</div>
      </div>
    </div>
  );
}

export default Card;
