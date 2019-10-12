import React, { useState, useEffect } from "react";
import axios from "axios";

export function useRunnerData(name, count){
    const [runner, setRunner] =useState([]);

useEffect(() => {
  axios
      .get('http://localhost:5000/api/players')
      .then(res => setRunner(res.data))
      .catch(err => console.log(err));
  

}, [name, count])

    return [runner, setRunner]
}