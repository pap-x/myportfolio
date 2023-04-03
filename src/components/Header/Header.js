import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaFlickr } from 'react-icons/fa';
import { DiBackbone } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <DiBackbone size="3rem"/><Span>Chris Papadopoulos</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/pap-x" target='_blank'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/chrispapadop/" target='_blank'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://flickr.com/photos/pap-x" target='_blank'>
        <FaFlickr size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
