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
}

export interface ICardState {
  haveData: boolean;
  starships: IStarShip[] | [];
}
