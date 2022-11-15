import React from 'react'
import './normalize.css'
import './App.css';
import { CardPreview } from './components/cardPreview'

function App() {
  return (
    <div>
      <header>
        <h1>Study<span className="titleHighlight">Deck</span></h1>
        <h2>React App : Code Along</h2>
      </header>
      <main>
        <h3>Flashcards</h3>
        <div className="gridContainer">
          < CardPreview definition="quack" term="What does a duck say?"/>
          < CardPreview definition="woof" term="What does a dog say?"/>
          < CardPreview definition="moo" term="What does a cow say?"/>

        </div>
      </main>
    </div>
  );
}

export default App;
