import React, { useState } from 'react';
import './App.css';
import { sorular } from './sorular';

function App() {

  const [finalPage, setFinalpage] = useState(false)
  const [score, setScore] = useState(0)
  const [currentSoru, setCurrentSoru] = useState(0)

  const selectoption = (cevap) => {

    if (cevap === true) {
      setScore(score + 1);
    }
    setCurrentSoru(currentSoru + 1)
    if (currentSoru === 6) {
      setFinalpage(true)
    }
  }

  const resetTest = () => {
    setCurrentSoru(0);
    setScore(0);
    setFinalpage(false)
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>kişilik testi</h1>
        {finalPage ? <div className='final'>
          <h3>{sorular.length}'nun {score}'i doğru</h3>
          <button onClick={resetTest}>yeniden başlat</button>
        </div>
          :

          <div className="sorucontainer">
            <h3>şimdiki skorun {score}</h3>
            <h3>{sorular.length}'nun {currentSoru + 1}'isi</h3>
            <h2>{sorular[currentSoru].text}</h2>
            <ul>
              {
                sorular[currentSoru].options.map((option) => (
                  <li key={option.id} onClick={() => { selectoption(option.isCorrect) }}>{option.text}</li>
                ))

              }
            </ul>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
