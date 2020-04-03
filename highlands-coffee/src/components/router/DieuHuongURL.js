import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route,} from "react-router-dom";
import Menu from '../Menu/Menu';
import Nav from '../Nav/Nav';
import Tintuc from '../News/Tintuc';
import '../Menu/thucdon.css';
import '../Nav/nav.css';
import '../System/system.css';
import '../News/tintuc.css';
import system from '../System/system';
import trachnhiem from '../Community/trachnhiem';

class DieuHuongURL extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Nav}/>
          <Route exact path="/san-pham" component={Menu}/>
          <Route exact path="/he-thong-cua-hang" component={system}/>
          <Route exact path="/tin-tuc" component={Tintuc}/>
          <Route exact path="/trach-nhiem-cong-dong" component={trachnhiem}/>
      </Router>
    );
  }
}

export default DieuHuongURL;