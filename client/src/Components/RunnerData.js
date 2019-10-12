import React, { useState, useEffect } from "react";
import axios from "axios";
import RunnerCard from './RunnerCard'

function RunnerData(){
    const [runners, setRunner] =useState([]);
 

  useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
    const getRunnerData = () => {
      axios
        .get("http://localhost:5000/api/players")
        .then(response => {
          setRunner(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }

    getRunnerData();
  }, []);

    return (
     <section className="character-list grid-view">
      {runners.map(runner => (
        <RunnerCard key={runner.name} runner={runner} />
      ))}
    </section>
    );
}

export default RunnerData;
