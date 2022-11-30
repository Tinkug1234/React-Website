import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Employee from "./Component/Employee";
import axios from "axios";



class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employee" element={<Employee />} />


        </Routes>
      </BrowserRouter>

    )
  }
}

export default App;