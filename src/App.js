import Header from "./containers/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/productListing";
import ProductDetails from "./containers/productDetails";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <ProductListing />
          </Route>
          <Route path="/product/:id" exact>
            <ProductDetails />
          </Route>
          <Router>404 Not Found</Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
