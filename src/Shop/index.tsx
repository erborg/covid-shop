import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Item from '../Item';
import useFetch from './useFetch';

export default function Shop() {
  const { get, loader, items } = useFetch();

  useEffect(() => {
    get('https://covid-shop-mcs.herokuapp.com/')
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  const item = items.map((object, index) => {
    return <Item key={index} info={object} />;
  });
  const loading = <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
  return <div className="shop">{loader ? loading : item}</div>;
}
