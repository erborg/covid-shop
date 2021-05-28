import Loader from 'react-loader-spinner';
import React from 'react';

export default function Spinner(props: { type: any }) {
  return (
    <Loader
      type={props.type}
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}
