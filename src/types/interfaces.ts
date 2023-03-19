export interface IHeaderState {
  page: string;
}

export interface ISearchState {
  query: string;
}

export interface ICardsListProps {
  data: ICharacter[];
}

export interface ICardProps {
  item: ICharacter;
}

export interface ICharacter {
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
