import React, { useEffect, useState } from 'react';
import Item from '../Item';

export default function Shop() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://covid-shop-mcs.herokuapp.com/');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const item = items.map((object, index) => {
    return <Item key={index} info={object} />;
  });

  return <div className="shop">{item}</div>;
}
