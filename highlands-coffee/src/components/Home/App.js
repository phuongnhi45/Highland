import React, {Component} from 'react';
import './App.css';
import '../Header/hl.css';
import '../Footer/footer.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DieuHuongURL from '../router/DieuHuongURL';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <DieuHuongURL/>
        <Footer/>
      </div>
    );
  }
}

export default App;
