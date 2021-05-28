import React, { Suspense } from 'react';
import { useImage } from 'react-image';
import Loader from 'react-loader-spinner';

type props = {
  image: string;
};

function MyImageComponent(props: props) {
  const { src } = useImage({
    srcList: props.image,
  });

  return <img src={src} alt="respirator" />;
}

const loading = <Loader type="Puff" color="#00BFFF" height={100} width={100} />;

export default function MyComponent(props: props) {
  return (
    <Suspense fallback={loading}>
      <MyImageComponent image={props.image} />
    </Suspense>
  );
}
