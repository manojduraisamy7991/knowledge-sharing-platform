import React from 'react';
import './App.css';

const MyProfileLink = 'https://master--manoj-frontend-engineer-portfolio.netlify.app/'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        knowledge sharing platform
        </p>
        <a
          className="App-link"
          href={MyProfileLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          My Profile ....
        </a>
      </header>
    </div>
  );
}

export default App;
