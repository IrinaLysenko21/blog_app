import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import { Wrapper, PageHeader, Title } from './PageWrapperStyles';

interface PageWrapperProps {
  title?: string;
  children: React.ReactNode;
}

const PageWrapper = ({ title, children }: PageWrapperProps): JSX.Element => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <Wrapper>
      <PageHeader>
        <Title>{title}</Title>
        {isLoading && <Loader />}
      </PageHeader>
      {children}
    </Wrapper>
  );
};

export default PageWrapper;
