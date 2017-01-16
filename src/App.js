import React, {Component} from 'react';
import SearchPage from './pages/SearchPage';
import ResultsPage from './pages/ResultsPage';

import { BrowserRouter, Match, Miss, Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={SearchPage} />
          <Match exactly pattern="/results" component={ResultsPage} />
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
