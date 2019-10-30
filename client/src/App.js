import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import RunnerCard from './Components/RunnerCard';
import { useLocalStorage} from "./utils/localeStorage";
import { useRunnerData } from "./utils/api";
import Navbar from './Components/Navbar';
import RunnerData from './Components/RunnerData';
import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
  // const [player, setPlayer ] = useLocalStorage('player', 'United States')
//   const [runner, setRunner] =useState([]);

// useEffect(() => {
//   axios
//       .get('http://localhost:5000/api/players')
//       .then(res => setRunner(res.data))
//       .catch(err => console.log(err));
  

// }, [])

  return (
    <div className='App'>
      <Navbar />
    {/* {runner.map(runner => (
      <RunnerCard name={runner.name} 
      country={runner.country} 
      searches={runner.searches} 
      id={runner.id} />
    ))} */}
    <Route exact path="/" component={RunnerData}/>

   
    </div>
  );
}

export default App;
