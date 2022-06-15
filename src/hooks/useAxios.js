import axios from '../api/axios';
import { useEffect } from 'react';
import useAuth from './useAuth';

const useAxios = () => {
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axios.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Token ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axios.interceptors.request.eject(requestIntercept);
    };
  }, [auth]);

  return axios;
};

export default useAxios;
