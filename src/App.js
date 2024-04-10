
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import { Fragment } from 'react';

function App() {
  return (
    <BrowserRouter>

      <Fragment>
        <Routes>
     
        <Route exact path="/" element={<Home />} />
     
        </Routes>
        </Fragment>
    </BrowserRouter>
  );
}

export default App;
