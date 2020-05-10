import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import { Wrapper, Title } from './PageWrapperStyles';

interface PageWrapperProps {
  title?: string;
  children: React.ReactNode;
}

const PageWrapper = ({ title, children }: PageWrapperProps): JSX.Element => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default PageWrapper;
