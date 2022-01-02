import React from 'react';
import BackgroundPerspective from './components/BackgroundPerspective/BackgroundPerspective';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BackgroundPerspective />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
