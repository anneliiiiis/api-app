import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from './views/Home';
import PostWithComments from './views/PostWithComments';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    const history = createHistory();
    return (
      <Router  history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route history={history} path="/posts/:id" component={PostWithComments}/>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
