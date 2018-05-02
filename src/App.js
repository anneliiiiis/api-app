import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './views/Home';
import PostWithComments from './views/PostWithComments';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/posts/:id" component={PostWithComments}/>
        </Switch>
      </Router>
    );
  }

}

export default App;
