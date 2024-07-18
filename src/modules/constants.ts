import { createContext } from 'react';
import { ICardState } from '../Types/type';

export const baseUrl = 'https://swapi.dev/api/starships';

export const MAX_CARDS = 10;

export const initialStarShipsState: ICardState = {
  haveData: false,
  shipsTotal: 0,
  starships: [],
  currentPage: 1,
};

export const starShipDataContext = createContext<{ starShipId: null | string; starShipsState: ICardState }>({
  starShipId: null,
  starShipsState: initialStarShipsState,
});
