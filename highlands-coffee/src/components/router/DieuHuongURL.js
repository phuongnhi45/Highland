import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route,} from "react-router-dom";
import Menu from '../Menu/Menu';
import Nav from '../Nav/Nav';
import '../Menu/thucdon.css';
import '../Nav/nav.css';
import '../System/system.css';
import system from '../System/system';

class DieuHuongURL extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Nav}/>
          <Route exact path="/san-pham" component={Menu}/>
          <Route exact path="/he-thong-cua-hang" component={system}/>
      </Router>
    );
  }
}

export default DieuHuongURL;