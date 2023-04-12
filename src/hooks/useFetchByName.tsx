import { useEffect, useState } from 'react';
import { ICard } from 'types/interfaces';

const useFetchByName = <T extends ICard>(link: string, query: string) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          link +
            '?' +
            new URLSearchParams({
              name: query,
            })
        );
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
        setData(data.results);
      } catch (error) {
        setData([]);
        setIsError(true);
      } finally {
        setIsLoading(false);
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

export default useFetchByName;
