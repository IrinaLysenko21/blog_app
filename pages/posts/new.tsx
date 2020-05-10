import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import CreatePostForm from '../../components/CreatePostForm';

const NewPostPage = (): JSX.Element => {
  return (
    <PageWrapper title="Create your oun post">
      <CreatePostForm />
    </PageWrapper>
  );
};

export default NewPostPage;
