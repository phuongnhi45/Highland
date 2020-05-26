import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="/" className="btn btn-info" role="button"><i className="fa fa-map-marker" aria-hidden="true" /></a><br/>
        <ul className="icons">
          <li className="icon"><a href="/"><i className="fa fa-facebook" aria-hidden="true" /> </a></li>
          <li className="icon"><a href="/"><i className="fa fa-youtube" aria-hidden="true" /> </a></li>
          <li className="icon"><a href="/"><i className="fa fa-instagram" aria-hidden="true" /> </a></li>
        </ul>
        <div className="copyRight">© 2018 Highlands Coffee. All rights reserved</div>
        <a href="/" className="plane"><i className="fa fa-envelope-o" aria-hidden="true" /> </a>
        <a href="/" className="envelope"><i className="fa fa-paper-plane-o" aria-hidden="true" /> </a>
      </div>
    );
  }
}

export default Footer;