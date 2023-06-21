import './App.css';
import React, { useEffect, useState } from "react";
import Route from "./components/Route"
import axios from 'axios';
import Navbar from './components/navbar';
import Push from './components/push';
import Get from './components/get';
import Home from './components/home';
import Delete from './components/delete';
import Put from './components/put';


function App() {


  const [list, setList] = useState([]);

  useEffect(() => {
    reload();
  }, [])

  const reload = () => {
    axios.get(`http://localhost:5000/api/gamestore/games/`)
      .then(res => {
        console.log(res.data);
        setList(res.data);
      })
      .catch(error => console.log(error));
  }


  return (
    <div className="container">
      <Navbar />
      <Route path="/"><Home /></Route>
      <Route path="/post"><Push reload={reload} /></Route>
      <Route path="/get"><Get list={list} /></Route>
      <Route path="/delete"><Delete list={list} reload={reload} /></Route>
      <Route path="/put"><Put list={list} reload={reload} /></Route>
    </div>
  );
}

export default App;
