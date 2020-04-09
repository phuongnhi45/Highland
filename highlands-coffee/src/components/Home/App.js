import React, {Component} from 'react';
import './App.css';
import '../Header/hl.css';
import '../Footer/footer.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DieuHuongURL from '../router/DieuHuongURL';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <DieuHuongURL/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
