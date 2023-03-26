export interface IMainCard {
  id: number;
  name: string;
  status: string;
  species: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: string[];
}

export interface IFormsCard {
  name: string;
  email: string;
  date: string;
  language: string;
  gender: string;
  avatar: string;
}

export interface ISwitcherRef {
  firstOption: React.RefObject<HTMLInputElement>;
  secondOption: React.RefObject<HTMLInputElement>;
}
