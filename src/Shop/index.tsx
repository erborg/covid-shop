import React, { useEffect, useState } from 'react';
import Item from '../Item';

export default function Shop() {
  const [items, setItems] = useState<any[]>([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://covid-shop-mcs.herokuapp.com/');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    })();
  }, []);

  const item = items.map((object, index) => {
    return <Item key={index} name={object.name} desc={object.desc} src={object.image} />;
  });

  return <div className="shop">{item}</div>;
}
