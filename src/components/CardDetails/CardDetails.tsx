import { useSearchParams } from 'react-router-dom';
import s from './CardDetails.module.sass';
import { IStarShipState } from '../../Types/type';

interface IProps {
  starShipDetails: IStarShipState;
}

function CardDetails(props: IProps) {
  const [, setDetailsParam] = useSearchParams();
  const starship = props.starShipDetails.starship;

  return (
    <div className={s.cardDetailSide}>
      <button
        className={s.closeButton}
        onClick={() => {
          setDetailsParam((params) => {
            params.delete('item');
            return params;
          });
        }}
      >
        close
      </button>
      {props.starShipDetails.haveData && starship ? (
        <div className={s.cardDetailProperties}>
          <h4 className={s.detailTitle}>Star Ship Info:</h4>
          <div className={s.cardBody}>
            <div className="starships-model">model: {starship.model}</div>
            <div className="starships-starship-class">starship class: {starship.starship_class}</div>
            <div className="starships-passengers">passengers: {starship.passengers}</div>
            <div className="starships-cargo-capacity">cargo capacity: {starship.cargo_capacity}</div>
            <div className="starships-length">length: {starship.length}</div>
            <div className="starships-manufacturer">manufacturer: {starship.manufacturer}</div>
            <div className="starships-atmosphering-speed">
              max atmosphering speed: {starship.max_atmosphering_speed}
            </div>
          </div>
        </div>
      ) : (
        <img style={{ maxWidth: '100%' }} src="/loader.gif" alt="loader..." />
      )}
    </div>
  );
}

export default CardDetails;
