import React, { Component } from 'react';
import './App.css';

import {
  Button,
} from './components';
import {
  Header,
} from './containers';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
  }

  handleClick = (id) => {
    // console.log('handleClick: ', id);
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h1>progressive web app.</h1>
        <section>
          <Button action={this.handleClick} id="appButton" text="click me" />
        </section>
        <p className="App-intro">
          Button clicked <strong>{this.state.clicks}</strong> times.
        </p>
      </div>
    );
  }
}

export default App;
