import React from 'react';
import Link from 'next/link';
import { Wrapper, Logo, NavList, NavListItem } from './styles';

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>Blog</Logo>
      <NavList>
        <Link href="/">
          <NavListItem>Latest</NavListItem>
        </Link>
        <Link href="/posts/new">
          <NavListItem>Create post</NavListItem>
        </Link>
      </NavList>
    </Wrapper>
  );
};

export default Navbar;
