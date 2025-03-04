import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useHttp = (func, parametr) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await func(parametr);
        setData(response);
      } catch (err) {
        setError(err);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [func, parametr]);

  return [data, error, loading];
};

export default useHttp;
