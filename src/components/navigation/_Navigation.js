import React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: auto;
`;

const StyledButton = styled.button`
  background: rgb(191, 191, 191);
  border-radius: 3px;
  border: 2px solid cyan;
  margin: 1em 1em;
  padding: 0.25em 1em;
  font-family: monospace;
  font-size: 18px;
  text-shadow: -1px 0 1px black, 0 1px 1px black, 1px 0 1px black, 0 -1px 1px black;
  color: cyan;
  outline: none;
  cursor: pointer;
`;

const Navigation = ({startSort, stepSort, stopSort}) => {
  // console.log("navigation re-render");
  return (
    <StyledNavigation>
      <StyledButton onClick={startSort} >Start</StyledButton>
      <StyledButton onClick={stepSort} >Step</StyledButton>
      <StyledButton onClick={stopSort} >Stop</StyledButton>
    </StyledNavigation>
  )
}

export default Navigation;