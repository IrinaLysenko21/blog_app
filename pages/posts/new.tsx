import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm';

const NewPostPage = (): JSX.Element => {
  return (
    <PageWrapper>
      <CreatePostForm />
    </PageWrapper>
  );
};

export default NewPostPage;
