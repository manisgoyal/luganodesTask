import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import fetchTotalStakes from './hooks/fetchTotalStakes';
import './App.css';
import CardSegment from './components/CardSegment';
import HeaderBar from './components/HeaderBar';
const App = () => {
  const [totalStakes, setTotalStakes] = useState({});
  const [unTrackedChain,  setUntrackedChain] = useState([]);
  useEffect(() => {
    fetchTotalStakes(setTotalStakes);
  }, []);

  

  return (
    <div className="App">
      <HeaderBar/>
      <CardSegment totalStakes={totalStakes} unTrackedChain={unTrackedChain} setUntrackedChain={setUntrackedChain} setTotalStakes={setTotalStakes}/>
    </div>
  );
};

export default App;
