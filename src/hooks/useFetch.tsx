import { useEffect, useState } from 'react';
import { ICard } from 'types/interfaces';

const useFetch = <T extends ICard>(link: string, query: string) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          link +
            new URLSearchParams({
              name: query,
            })
        );
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
        setData(data.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    setIsError(false);
    setIsLoading(true);
    loadData();
  }, [query, link]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
