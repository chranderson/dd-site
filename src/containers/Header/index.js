import React, { Component } from 'react';

// import {
//   Button
// } from '../../components';

import logo from '../../touch-icon.png';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>digital dept.</h2>
      </div>
    );
  }
}

export default Header;
