import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import HomepageDark from "./pages/HomepageDark";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/dark" exact>
          <HomepageDark />
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
