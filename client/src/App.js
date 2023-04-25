import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PetList from './components/DisplayAll';
import Pet from './components/Detail';
import NewPet from './components/Create';
import EditPet from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1 className='display-1'>Hello Brian</h1>
      <Routes>
        <Route element = {<PetList/>} exact path = "/" default/>
        <Route element = {<Pet/>}  path = "/pets/:id"/>
        <Route element = {<NewPet/>}  path = "/pets/new"/>
        <Route element = {<EditPet/>}  path = "/pets/:id/edit"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
