import "./App.css";
import HomeCus from "customers/pages/home";
import UpdatePageCus from "customers/pages/update";
import HomeCate from "categories/pages/home";
import UpdatePageCate from "categories/pages/update";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/customers" exact>
          <HomeCus />
        </Route>
        <Route path="/customers/update/:id">
          <UpdatePageCus />
        </Route>
        <Route path="/categories" exact>
          <HomeCate />
        </Route>
        <Route path="/categories/update/:id">
          <UpdatePageCate />
        </Route>
        <Route path="/" exact>
          <ul>
            <Link to="/customers">
              <li>customers</li>
            </Link>
            <Link to="/categories">
              <li>categories</li>
            </Link>
          </ul>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
