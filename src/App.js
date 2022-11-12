import React from 'react'
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Study Deck App</h1>
        <h2>React App : Code Along</h2>
      </header>
      <main>
        <h3>Flashcards</h3>
        <div>
          <div>
            <h4>Term goes here</h4>
            <div>
              <button type="button">Show Back</button>
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </div>                                                                                                                    
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
