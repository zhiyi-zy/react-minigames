import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const strs = [
  'the fat cats',
  'larger frogs',
  'banana cakes',
  'unsw vs usyd',
  'french toast',
  'hawaii pizza',
  'barack obama',
];

const TextInput = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  outline: none;
  border-bottom: 2px solid transparent;

  &:focus {
    border-bottom: 2px solid #000;
  }
`;

const Blanko = () => {
  const [currentString, setCurrentString] = useState('');
  const [inputValues, setInputValues] = useState(['', '', '']);
  const [gameWins, setGameWins] = useState(0);

  useEffect(() => {
    const randomString = strs[Math.floor(Math.random() * strs.length)];
    setCurrentString(randomString);

    // Replace three random non-space characters with input fields
    const nonSpaceChars = randomString.replace(/\s/g, '').split('');
    const inputIndices = [];
    while (inputIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * nonSpaceChars.length);
      if (!inputIndices.includes(randomIndex)) {
        inputIndices.push(randomIndex);
      }
    }

    const updatedString = randomString.split('').map((char, index) => {
      if (char !== ' ') {
        return (
          <div key={index} style={{ width: '50px', height: '50px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {inputIndices.includes(index) ? (
              <TextInput type="text" maxLength={1} value={inputValues[inputIndices.indexOf(index)]} onChange={(e) => handleInputChange(e, index)} />
            ) : (
              char
            )}
          </div>
        );
      }
      return char;
    });

    setCurrentString(updatedString);
  }, [gameWins]); // Re-generate the game when a game is won

  const handleInputChange = (e, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = e.target.value;
    setInputValues(newInputValues);
  };

  const checkValues = () => {
    const correctAnswer = inputValues.join('').toLowerCase().replace(/\s/g, '') === currentString.replace(/\s/g, '').toLowerCase().replace(/\s/g, '');
    if (correctAnswer) {
      alert('Correct!');
      setGameWins(gameWins + 1);
      setInputValues(['', '', '']);
    }
  };

  const resetGame = () => {
    setInputValues(['', '', '']);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        {currentString}
      </div>
      <button onClick={checkValues} style={{ display: 'none'}}>Check Values</button>
      <button onClick={resetGame} style={{ display: 'none'}}>Reset</button>
    </div>
  );
};

export default Blanko;