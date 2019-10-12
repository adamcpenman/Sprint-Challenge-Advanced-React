import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import RunnerCard from './Components/RunnerCard';
import { useLocalStorage} from "./utils/localeStorage";
import { useRunnerData } from "./utils/api";


function App() {
  // const [player, setPlayer ] = useLocalStorage('player', 'United States')
  const [runner, setRunner] =useState([]);

useEffect(() => {
  axios
      .get('http://localhost:5000/api/players')
      .then(res => setRunner(res.data))
      .catch(err => console.log(err));
  

}, [])

  return (
    <div className='App'>
      
    {runner.map(runner => (
      <RunnerCard name={runner.name} 
      country={runner.country} 
      searches={runner.searches} 
      id={runner.id} />
    ))}
   
    </div>
  );
}

export default App;
