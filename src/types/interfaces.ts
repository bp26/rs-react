export interface ICard {
  id: number;
}

export interface IMainCard extends ICard {
  name: string;
  gender: string;
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
