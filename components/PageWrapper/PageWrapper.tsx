import React from 'react';
import { Wrapper, Title } from './styles';

const PageWrapper = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default PageWrapper;
