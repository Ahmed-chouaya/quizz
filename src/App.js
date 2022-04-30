import React from 'react';
import './App.css';
import Quizz from './components/Quizz';
import Start from './components/Start';

function App() {
  const [startQuizz, setStartQuizz] = React.useState(false)

  function handleClick() {
    setStartQuizz(true)
  }

  return (
    <div className="App">
      {startQuizz ? <Quizz /> :
        <Start click={handleClick} />}
    </div>
  );
}

export default App;
