import React from 'react';
import { Wrapper, Title } from './PageWrapperStyles';

interface PageWrapperProps {
  title?: string;
  children: React.ReactNode;
}

const PageWrapper = ({ title, children }: PageWrapperProps): JSX.Element => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default PageWrapper;
