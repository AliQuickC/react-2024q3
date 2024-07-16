export interface IStarShip {
  name: string;
  model: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  passengers: string;
  starship_class: string;
  url: string;
}

export interface IStarshipsResponse {
  count: number;
  results: IStarShip[];
}

export interface ICardState {
  haveData: boolean;
  isShowCardDetail: boolean;
  shipsTotal: number;
  starships: IStarShip[];
  currentPage: number;
}

export interface IStarShipState {
  haveData: boolean;
  starship: IStarShip | null;
}

export type SetCards = (cards: IStarshipsResponse, currentPage?: number) => void;
