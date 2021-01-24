import "./App.css";
import HomeCus from "customers/pages/home";
import UpdatePageCus from "customers/pages/update";
import HomeCate from "categories/pages/home";
import UpdatePageCate from "categories/pages/update";
import HomeEmp from "employees/pages/home";
import UpdatePageEmp from "employees/pages/update";
import HomeOrderdetails from "orderdetails/pages/home";
import UpdatePageOrderdetails from "orderdetails/pages/update";
import HomeOrders from "orders/pages/home";
import UpdatePageOrders from "orders/pages/update";
import HomePro from "products/pages/home";
import UpdatePagePro from "products/pages/update";
import HomeShip from "shippers/pages/home";
import UpdatePageShip from "shippers/pages/update";
import HomeSup from "suppliers/pages/home";
import UpdatePageSup from "suppliers/pages/update";
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
        <Route path="/employees" exact>
          <HomeEmp />
        </Route>
        <Route path="/employees/update/:id">
          <UpdatePageEmp />
        </Route>
        <Route path="/orderdetails" exact>
          <HomeOrderdetails />
        </Route>
        <Route path="/orderdetails/update/:id">
          <UpdatePageOrderdetails />
        </Route>
        <Route path="/orders" exact>
          <HomeOrders />
        </Route>
        <Route path="/orders/update/:id">
          <UpdatePageOrders />
        </Route>
        <Route path="/products" exact>
          <HomePro />
        </Route>
        <Route path="/products/update/:id">
          <UpdatePagePro />
        </Route>
        <Route path="/shippers" exact>
          <HomeShip />
        </Route>
        <Route path="/shippers/update/:id">
          <UpdatePageShip />
        </Route>
        <Route path="/suppliers" exact>
          <HomeSup />
        </Route>
        <Route path="/suppliers/update/:id">
          <UpdatePageSup />
        </Route>
        <Route path="/" exact>
          <ul>
            <Link to="/customers">
              <li>customers</li>
            </Link>
            <Link to="/categories">
              <li>categories</li>
            </Link>
            <Link to="/employees">
              <li>employees</li>
            </Link>
            <Link to="/orderdetails">
              <li>orderdetails</li>
            </Link>
            <Link to="/orders">
              <li>orders</li>
            </Link>
            <Link to="/products">
              <li>products</li>
            </Link>
            <Link to="/shippers">
              <li>shippers</li>
            </Link>
            <Link to="/suppliers">
              <li>suppliers</li>
            </Link>
          </ul>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
