import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  padding: 20px;
  border: 1px solid #b5b5b5;
  border-radius: 5px;
  box-shadow: 1px 1px 12px -6px #000;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #b5b5b5;
`;

export const Textarea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  max-width: calc(100% - 20px);
  min-width: calc(100% - 20px);
  min-height: 150px;
  border-radius: 3px;
  border: 1px solid #b5b5b5;
`;

export const SubmitButton = styled.button`
  margin: 0 auto;
  padding: 10px;
  width: 150px;
  height: 40px;
  color: #fff;
  background-color: #287799;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 12px -6px #000;
  cursor: pointer;
`;
