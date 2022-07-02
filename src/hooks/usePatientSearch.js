import useAxios from './useAxios';
import { useState, useEffect } from 'react';
export const usePatientSearch = (name) => {
  const [result, setResult] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    let componentMounted = true;
    const getPatients = async () => {
      if (name.length === 0) {
        setResult([]);
        return;
      }
      try {
        const responseResult = await axios.get('patients/?search=' + name);
        if (componentMounted) {
          setResult(responseResult?.data?.results);
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
  }, [name]);
  return result;
};
