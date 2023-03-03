import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import HomePages from "./Components/HomePages";
import ListGenre from "./Components/ListGenre";
import Detail from "./Components/Detail";
import Games from "./Components/Games";

function App() {
  return (
    <div>
      {/* <Games /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePages />} />
          <Route path="/category/:genre" element={<ListGenre />} />
          <Route path="/:title/:id" element={<Detail />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
