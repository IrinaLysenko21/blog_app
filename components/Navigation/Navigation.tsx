import React from 'react';
import Link from 'next/link';
import { Wrapper, Logo, NavList, NavListItem } from './NavigationStyles';

const Navbar = (): JSX.Element => {
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
