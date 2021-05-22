import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Products from "./products";

const ProductListing = () => {
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
      <Products />
    </div>
  );
};

export default ProductListing;
