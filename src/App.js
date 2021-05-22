import Header from "./containers/common/components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsView from "./containers/products/productsView";
import ProductDetails from "./containers/products/productDetails";
import HomeView from "./public/HomeView";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/products" exact>
            <ProductsView />
          </Route>
          <Route path="/products/:id" exact>
            <ProductDetails />
          </Route>
          <Router>404 Not Found</Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
