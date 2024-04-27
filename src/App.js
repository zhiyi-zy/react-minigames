import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from './Dashboard';
import NavFunction from './NavControl';
import Blanko from './Blanko';

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

const FooterBar = styled.div`
  height: 50px;
  width: 100vw;
  position: absolute;
  bottom: 0;
  background-color: #999999;
`;

function App() {
  return (
    <BrowserRouter>
        <NavFunction></NavFunction>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/blanko" element={<Blanko />}></Route>
          <Route path="/slido" ></Route>
          <Route path="/tetro" ></Route>
        </Routes>
        <FooterBar></FooterBar>
    </BrowserRouter>
  );
}

export default App;
