import React from 'react';
import LoaderComponent from 'react-loader-spinner';
import styled from 'styled-components';

const StyledLoader = styled(LoaderComponent)`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(115, 202, 240, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = (): JSX.Element => {
  return <StyledLoader type="ThreeDots" color="#287799" height={100} width={100} />;
};

export default Loader;
