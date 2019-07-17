import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./header/Header";
import PostShare from "./newsfeed/PostShare";
import Register from "./register/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <PostShare />
        <Route path="/register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
};

export default App;
