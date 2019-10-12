import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import RunnerCard from './Components/RunnerCard';


function App() {
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
