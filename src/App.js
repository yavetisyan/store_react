import React from 'react';
import './App.css';
import Main from "./Components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FilteredProducts from "./Components/FilteredProduct/FilteredProducts";
import SingleProduct from "./Components/FilteredProduct/SingleProduct";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='filteredProducts/:type' element={<FilteredProducts/>}/>
          <Route path='filteredProducts/:type/:id' element={<SingleProduct/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
