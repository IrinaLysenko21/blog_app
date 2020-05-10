import styled from 'styled-components';

export const StyledPostsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Post = styled.li`
  box-sizing: border-box;
  margin-bottom: 15px;
  padding: 10px 5px;
  width: 33%;
`;

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  height: 100%;
  border: 1px solid #b5b5b5;
  border-radius: 5px;
  box-shadow: 1px 1px 12px -6px #000;
`;

export const PostLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
  color: #fff;
  background-color: #287799;
  border-radius: 3px;
  box-shadow: 1px 1px 12px -6px #000;
  cursor: pointer;
`;
