import React from 'react';
import './App.css'
import InstagramCaptionFormatter from './components/InstagramCaptionFormatter/InstagramCaptionFormatter';
import Credits from './components/Credits/Credits';
// import SpecialCharactersCreator from './components/SpecialCharactersCreator/SpecialCharactersCreator';

function App() {
  return (
    <div className="App">
      <InstagramCaptionFormatter />

      <div style={{textAlign: 'center', fontSize: '12px', paddingTop: '30px'}}>
          <a href="https://github.com/juzdepom/instagram-caption-formatter" target="_blank" rel="noopener noreferrer">See On Github</a>
          <br/>
          <a href="https://lingojam.com/FancyTextGenerator" target="_blank" rel="noopener noreferrer">Fancy Text Generator</a>
      </div>

      <Credits />
      {/* <SpecialCharactersCreator /> */}
    </div>
  );
}

export default App;
