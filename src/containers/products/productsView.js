import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./productActions";
import ProductsList from "./components/productsList";

const ProductsView = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => console.log(err));

      dispatch(setProducts(res.data));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      <ProductsList products={products} />
    </div>
  );
};

export default ProductsView;
