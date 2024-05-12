import React from 'react';
import './App.css';
import { sampleMock, SampleMack } from './const'

const MyProfileLink = 'https://master--manoj-frontend-engineer-portfolio.netlify.app/'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        knowledge sharing platform - (development In Progress)
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
      <div className='sample-knowlege'>
{sampleMock.map((item:SampleMack)=>{
        return <>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
               </>
})}
      </div>
    </div>
  );
}

export default App;
