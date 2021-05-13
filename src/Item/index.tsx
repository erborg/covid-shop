import React, { useState } from 'react';

export default function Item(props: { name: string; desc: string; src: string }) {
  const { name, desc, src } = props;
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
      <img src={src} />
      <div className="item-info">
        <h2>{name}</h2>
        <p>{desc}</p>
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
