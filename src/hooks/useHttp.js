import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useHttp = (func, parametr) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    func(parametr)
      .then(data => setData(data))
      .catch(err => setError(err));
  }, [func, parametr]);
  if (error) {
    toast.error(error.message);
  }
  return [data, setData, error];
};

export default useHttp;
