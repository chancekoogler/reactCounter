import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom'

import './index.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  increaseCount() {
    this.setState({count: this.state.count + 1})
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.increaseCount()}>Increase</button>
        </div>
        <h2>{this.state.count} </h2>
      </div>
    )
  }
} 
let count = 0
render(<App count={count} />, document.getElementById('root'))