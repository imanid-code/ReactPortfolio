// import React from "react";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import './App.css';


function App () {
  return  (
    
    
    <Router>
      <Navbar />
      <Wrapper>
     <Switch>
     <Route exact path="/" component={Home} />
       <Route exact path="/About" component={About} />
      <Route exact path="/contact" component={Contact} />
       
    
     </Switch>
     </Wrapper>
     <Footer />
     </Router>
     
  )
}

export default App; 


