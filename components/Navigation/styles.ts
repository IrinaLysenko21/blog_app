import styled from 'styled-components';

export const Wrapper = styled.nav`
  font-family: Geneva, Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  padding: 20px;
  background: #287799;
`;

export const Logo = styled.h1`
  margin: 0 100px 0 0;
  font-size: 28px;
  text-align: left;
  color: #fff;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavListItem = styled.a`
  text-decoration: none;
  margin-right: 25px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
`;
