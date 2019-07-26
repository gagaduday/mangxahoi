import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./header/Header";
import PostShare from "./newsfeed/PostShare";
import PostList from "./newsfeed/PostList";
import PostEdit from "./newsfeed/PostEdit";
import PostDelte from "./newsfeed/PostDelete";
import PostShow from "./newsfeed/PostShow";
import Register from "./register/Register";
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/posts/share" exact component={PostShare} />
          <Route path="/posts/edit/:id" component={PostEdit} />
          <Route path="/posts/delete/:id" component={PostDelte} />
          <Route path="/posts/:id" component={PostShow} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
