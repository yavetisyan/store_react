import React from 'react';
import './App.css';
import Main from "./Components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FilteredProducts from "./Components/FilteredProduct/FilteredProducts";
import SingleProduct from "./Components/FilteredProduct/SingleProduct";
import Login from "./Components/Login/Login";
import {useSelector} from "react-redux";

function App() {
  const user = useSelector(state => state.auth.user)
  const {authUser} = user

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={authUser ? <Main/> : <Login/>}/>
          <Route path='filteredProducts/:type' element={<FilteredProducts/>}/>
          <Route path='filteredProducts/:type/:id' element={<SingleProduct/>}/>
          {/*<Route path={'/login'} element={<Login/>}/>*/}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
