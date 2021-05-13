import React, { useState } from 'react';

type props = {
  image: string;
  name: string;
  desc: string;
  children?: React.ReactNode;
};

export default function Item(props: { info: props }) {
  const { info } = props;
  const [count, setCount] = useState(0);

  function handleAddClick() {
    setCount(count + 1);
  }

  function handleMinusClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="item">
      <img src={info.image} />
      <div className="item-info">
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button disabled={count === 0} onClick={handleMinusClick} className="item-less">
          -
        </button>
        <h3 className="item-total">{count}</h3>
        <button onClick={handleAddClick} className="item-more">
          +
        </button>
      </div>
    </div>
  );
}
