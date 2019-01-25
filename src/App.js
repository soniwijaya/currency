import React, { Component } from 'react';
import './App.css';
import TableCurrency from './components/TableCurrency';

class App extends Component {
  render() {
    return (
      <div className="container top-down">
        <div className="row">
          <div className="col-sm-12">
            <TableCurrency />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
