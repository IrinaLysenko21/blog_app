import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions';
import { Form, Input, Textarea, SubmitButton, Message, AlertMessage } from './CreatePostFormStyles';

const CreatePostForm = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isAlertShowing, setIsAlertShowing] = useState(false);

  const dispatch = useDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.name === 'title' ? setTitle(event.target.value) : setDescription(event.target.value);
  };

  const showAlert = (): void => {
    setIsAlertShowing(true);
    setTimeout(() => {
      setIsAlertShowing(false);
    }, 2000);
  };

  const submitHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    const post = {
      title,
      body: description,
    };

    if (post.title.trim() === '' || post.body.trim() === '') {
      showAlert();
      return;
    }

    dispatch(createPost(post));

    setTitle('');
    setDescription('');
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
      {isAlertShowing ? (
        <AlertMessage>Don't leave empty fields</AlertMessage>
      ) : (
        <Message>You shoul fill all the form fields</Message>
      )}
      <SubmitButton type="submit">Create post</SubmitButton>
    </Form>
  );
};

export default CreatePostForm;
