import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Registration } from "./components/authorization/Registration";
import { Authorization } from "./components/authorization/Authorization";
import { NavBar } from "./components/NavBar";
import { UserPage } from "./components/UserPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      {/* <NavBar /> */}
        <Routes>
          <Route path='/authorization'element={<Authorization/>}/>
          <Route path='/registration'element={<Registration/>}/>
          <Route path='/user'element={<UserPage/>}/>
        </Routes>
          
      </div>
    </BrowserRouter>
  );
}

export default App;
