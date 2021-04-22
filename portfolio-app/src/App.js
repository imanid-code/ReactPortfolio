// import React from "react";
import React, { Component } from "react";
import ProjectCard from "./components/ProjectCard";
import portfolio from "./portfolio.json";
import Wrapper from "./components/Wrapper"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import './App.css';

class App extends Component  {
  //setting this.state.portfolio to the  portfolio json arra
  state = {
    portfolio
  };
  
  //Map over this.state.portfolio and render a PorttfolioCard component for each portfolio object 
  render() {
  return (
   
   <Wrapper>
<Header/>
<Router>
  <div>
  <Route exact path="/" component={Home} />
  <Route exact path="/About" component={About} />
  <Route exact path="/contact" component={Contact} />
  <Route exact path="/Portfolio" component={Portfolio} />

  </div>
</Router>



{this.state.portfolio.map(portfolio => (
  <ProjectCard
  id={portfolio.id}
  key={portfolio.id}
  name={portfolio.projectname}
  image={portfolio.image}
  description={portfolio.description}
  repository={portfolio.repo}
  livedeployment={portfolio.livedeployment}
  />
))}
<Footer/>
   </Wrapper>
  );
}
}
export default App;
