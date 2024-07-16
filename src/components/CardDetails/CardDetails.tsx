import s from './CardDetails.module.sass';

interface IProps {
  isShowCardDetail: boolean;
  switchShowDetail: (isShowCardDetail: boolean) => void;
}

function CardDetails(props: IProps) {
  return (
    <div className={s.cardDetailSide}>
      <button
        className={s.closeButton}
        onClick={() => {
          props.switchShowDetail(false);
          // !!!
        }}
      >
        close
      </button>
      <img style={{ maxWidth: '100%' }} src="/loader.gif" alt="loader..." />

      <div className={s.cardDetailProperties}>
        <h4>Star Ship Info:</h4>
        <div className={s.cardBody}>
          {/* <div className="starships-model">model: {props.starship.model}</div>
          <div className="starships-starship-class">starship class: {props.starship.starship_class}</div>
          <div className="starships-passengers">passengers: {props.starship.passengers}</div>
          <div className="starships-cargo-capacity">cargo capacity: {props.starship.cargo_capacity}</div>
          <div className="starships-length">length: {props.starship.length}</div>
          <div className="starships-manufacturer">manufacturer: {props.starship.manufacturer}</div>
          <div className="starships-atmosphering-speed">
            max atmosphering speed: {props.starship.max_atmosphering_speed}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
