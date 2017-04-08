import React, {Component} from 'react';
import SearchPage from './pages/SearchPage';
import ResultsPage from './pages/ResultsPage';

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
