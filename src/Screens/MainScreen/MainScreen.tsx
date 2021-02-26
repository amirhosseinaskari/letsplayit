import React from 'react';
import StartQuiz from '../../Components/StartQuiz/StartQuiz';
import ButtonAppBar from '../../UI/Appbar/AppBar';

export default function MainScreen() {
  return (
    <>
      <ButtonAppBar />
      <StartQuiz />
    </>
  );
}
