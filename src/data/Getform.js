import formModel from './getModel';
import useAxios from '../hooks/useAxios';
import { useEffect } from 'react';

const Getform = () => {
  const axios = useAxios();

  useEffect(() => {
    const getData = async () => {
      const option = await axios.get('getoptions');
      console.log(option);
      const data = await formModel(option);
      console.log(data);
      console.log(JSON.stringify(data, null, 2));
      // console.log(JSON.parse(strabism));
    };

    getData();
  }, []);

  return <div>s</div>;
};

export default Getform;
