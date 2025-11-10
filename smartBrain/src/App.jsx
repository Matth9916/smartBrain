import React from "react";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticulesBG from './components/ParticulesBG/ParticulesBG';
import './App.css';

const App = () => {
  return (
    <div>
      <ParticulesBG />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
};

export default App;