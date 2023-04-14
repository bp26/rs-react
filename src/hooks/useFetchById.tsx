import { useEffect, useState } from 'react';
import { ICard } from 'types/interfaces';

const useFetchById = <T extends ICard>(link: string, id: number) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const res = await fetch(link + id);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    };
    loadData();
  }, [link, id]);

  return {
    data,
    isLoading,
  };
};

export default useFetchById;
