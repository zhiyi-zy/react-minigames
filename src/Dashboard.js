import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DashboardText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const RedText = styled.div`
    color: red;
    font-size: 2em;
    text-align: center;
`

const GamesWon = styled.div`
    font-size: 1.5em;
    text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  
  &:hover {
    text-decoration: underline;
  }

`;

const Dashboard = () => {
  const [gamesWon, setGamesWon] = useState(0);

  useEffect(() => {
    const fetchInitialValue = async () => {
      try {
        const response = await fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json');
        const data = await response.json();
        setGamesWon(data.score);
        localStorage.setItem('gamesWon', data.score.toString());
      } catch (error) {
        console.error('Error fetching initial value:', error);
      }
    };

    const storedValue = localStorage.getItem('gamesWon');
    if (storedValue) {
      setGamesWon(parseInt(storedValue));
    } else {
      fetchInitialValue();
    }
  }, []);

  const handleReset = () => {
    setGamesWon(0);
    localStorage.setItem('gamesWon', '0');
  };

  return (
    <DashboardText>
      <RedText>Please choose an option from the navbar.</RedText>
      <GamesWon>Games won: {gamesWon} <StyledLink onClick={handleReset}>(reset)</StyledLink></GamesWon>
    </DashboardText>
  );
};

export default Dashboard;