import React from 'react';
import profileImage from './profile-image.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>This is my portfolio.</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
