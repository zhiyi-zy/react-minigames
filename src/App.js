import './App.css';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.png'

const NavBar = styled.div`
  width: 100%;
  height: 80px;
  background-color: #eeeeee;
  position: fixed;
  flex-direction: row
`

const NavDisplay = styled.div`
  display: flex;
  alignItems: center;
  justify-content: space-between;
  padding: 15px;
`

const PageButtons = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    display: none;
  }
`

const Page = styled.li`
  margin: 0 8px 0 8px;
`

const ResponsiveNav = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function App() {
  return (
    <BrowserRouter>
        <NavBar>
          <NavDisplay>
            <img src={logo} alt="Logo" style={{ width: 50, height: 50 }} />
            <PageButtons>
              <Page><StyledLink to="/">Home</StyledLink></Page>|
              <Page><StyledLink to="/blanko">Blanko</StyledLink></Page>|
              <Page><StyledLink to="/slido">Slido</StyledLink></Page>|
              <Page><StyledLink to="/tetro">Tetro</StyledLink></Page>
            </PageButtons>
            <ResponsiveNav>
              <Page><StyledLink to="/">H</StyledLink></Page>|
              <Page><StyledLink to="/blanko">B</StyledLink></Page>|
              <Page><StyledLink to="/slido">S</StyledLink></Page>|
              <Page><StyledLink to="/tetro">T</StyledLink></Page>
            </ResponsiveNav>
          </NavDisplay>
        </NavBar>
    </BrowserRouter>
  );
}

export default App;
