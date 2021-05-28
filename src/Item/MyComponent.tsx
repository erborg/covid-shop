import React, { Suspense } from 'react';
import { useImage } from 'react-image';
import Spinner from '../Loader';

type props = {
  image: string;
};

function MyImageComponent(props: props) {
  const { src } = useImage({
    srcList: props.image,
  });

  return <img src={src} alt="respirator" />;
}

export default function MyComponent(props: props) {
  return (
    <Suspense fallback={<Spinner type={'Puff'} />}>
      <MyImageComponent image={props.image} />
    </Suspense>
  );
}
