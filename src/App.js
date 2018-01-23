import React, { Component } from 'react';
import SearchPage from './modules/Search/SearchPage';
import ResultsPage from './modules/Results/ResultsPage';

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={SearchPage} />
          <Route path="/results" component={ResultsPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
