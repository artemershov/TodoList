import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks';

const LogoLink = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0.2rem 0.25rem 0.3rem;
  span {
    margin-left: 0.25rem;
    font-size: 120%;
    font-weight: bold;
  }
`;

const Logo = () => (
  <LogoLink href="/">
    <FontAwesomeIcon icon={faTasks} />
    <span>Organizello</span>
  </LogoLink>
);

export default Logo;
