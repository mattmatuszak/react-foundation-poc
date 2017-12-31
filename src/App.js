import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (<div className="App">
      <h1>Hello from react!</h1>
      <blockquote>
        Those people who think they know everything are a great annoyance to those of us who do.
        <cite>Isaac Asimov</cite>
      </blockquote>
      <ul className="menu">
        <li>
          <a href="#">One</a>
        </li>
        <li>
          <a href="#">Two</a>
        </li>
        <li>
          <a href="#">Three</a>
        </li>
        <li>
          <a href="#">Four</a>
        </li>
      </ul>

    </div>);
  }
}

export default App;
