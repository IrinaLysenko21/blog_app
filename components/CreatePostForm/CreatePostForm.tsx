import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions';
import { Form, Input, Textarea, SubmitButton } from './CreatePostFormStyles';

const CreatePostForm = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.name === 'title' ? setTitle(event.target.value) : setDescription(event.target.value);
  };

  const submitHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    const post = {
      title,
      body: description,
    };

    dispatch(createPost(post));
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input type="text" name="title" value={title} onChange={changeHandler} placeholder="Enter title" />
      <Textarea
        name="description"
        value={description}
        onChange={changeHandler}
        placeholder="Enter description"
      ></Textarea>
      <SubmitButton type="submit">Create post</SubmitButton>
    </Form>
  );
};

export default CreatePostForm;
