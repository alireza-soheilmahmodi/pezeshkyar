import useAxios from './useAxios';
import { useState, useEffect, useDeferredValue } from 'react';

export const usePatientSearch = (name) => {
  const deferredName = useDeferredValue(name);
  const [result, setResult] = useState([]);
  const axios = useAxios();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let componentMounted = true;
    setLoading(true);
    const getPatients = async () => {
      if (deferredName.length === 0) {
        setResult([]);
        return;
      }
      try {
        const responseResult = await axios.get(
          'patients/?search=' + deferredName
        );
        if (componentMounted) {
          setResult(responseResult?.data?.results);
          setLoading(false);
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    };

    getPatients();

    return () => {
      componentMounted = false;
    };
  }, [deferredName]);
  return [result, loading];
};
