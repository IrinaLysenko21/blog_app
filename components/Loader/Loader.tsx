import React from 'react';
import LoaderComponent from 'react-loader-spinner';

const Loader = (): JSX.Element => {
  return <LoaderComponent type="ThreeDots" color="#70d4ff" height={26} width={50} />;
};

export default Loader;
