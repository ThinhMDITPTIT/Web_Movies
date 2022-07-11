import { useCallback, useEffect, useState } from 'react';
import getMovies from '../apis/getMovies';

export default function useMovies() {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const fetched = await getMovies();
      setData(fetched);
      setLoading(false);
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, errorMessage, fetchData };
}
