import './App.css';
import * as React from 'react';
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import { Teams_stats } from './pages/Teams_stats';
import { Drivers_stats } from './pages/Drivers_stats'





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route index element={<Home />} />
          <Route path="/Teams" element={<Teams_stats/>}></Route>
          <Route path="/Drivers" element={<Drivers_stats/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
