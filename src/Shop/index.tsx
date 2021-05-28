import React, { useEffect } from 'react';
import Item from '../Item';
import useFetch from './useFetch';
import Spinner from '../Loader';

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

  return <div className="shop">{loader ? <Spinner type={'ThreeDots'} /> : item}</div>;
}
