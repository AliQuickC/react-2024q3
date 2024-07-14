import s from './Pagination.module.sass';

interface IProps {
  cardsTotal: number;
  currentPage: number;
}

const MAX_CARDS = 10;

export default function Pagination(props: IProps) {
  const pages = Array(Math.ceil(props.cardsTotal / MAX_CARDS))
    .fill(null)
    .map((_, index) => (
      <span className={(props.currentPage === index + 1 ? s.selectedPage : '') + ' ' + s.pageNumber} key={index + 1}>
        {index + 1}
      </span>
    ));

  return <div className={s.numbersList}>{pages}</div>;
}
