import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import initialStore from '../redux/store';
import Navigation from '../components/Navigation';
import 'normalize.css';

const MyApp = (props: any): any => {
  const { Component, pageProps, store } = props;

  return (
    <Provider store={store}>
      <Navigation />
      <Component {...pageProps} />
    </Provider>
  );
};

export default withRedux(initialStore)(MyApp);
