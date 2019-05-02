import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: #f57011;
  height: 60px;
`

const StyledTitle = styled.h1`
  display: inline-block;
  font-size: 28px;
  font-weight: 500;
  color: white;
  padding: 14px 5%;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Header = () => (
    <StyledHeader>
        <StyledTitle>Media Manager</StyledTitle>
    </StyledHeader>
);

export default Header;
