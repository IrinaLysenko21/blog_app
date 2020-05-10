import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  font-family: Geneva, Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 24px;
  color: #cc2e2b;
`;

type ErrorPropsType = {
  statusCode: number;
};

const Error = ({ statusCode }: ErrorPropsType): JSX.Element => {
  return (
    <ErrorMessage>
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </ErrorMessage>
  );
};

Error.getInitialProps = ({ res, err }): any => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
