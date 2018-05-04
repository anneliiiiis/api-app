import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from './views/Home';
import Posts from './views/Posts';
import Users from './views/Users';
import PostWithComments from './views/PostWithComments';

class App extends Component {
  render() {
    const history = createHistory();
    return (
      <Router  history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/posts" exact component={Posts}/>
            <Route path="/users" exact component={Users}/>
            <Route history={history} path="/posts/:id" component={PostWithComments}/>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
