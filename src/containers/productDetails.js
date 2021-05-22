import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();

  let product = useSelector((state) => state.allProducts.product);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => console.log(err));

      dispatch(selectedProduct(res.data));
    };

    if (id && id !== "") fetchProduct();

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id, dispatch]);

  return (
    <div className="container mx-auto">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="bg-white w-full shadow-lg rounded-3xl space-x-14 p-14 grid grid-cols-2">
          <div className="overflow-hidden flex justify-center items-center max-w-xl">
            <img alt={product.title} className="w-full" src={product.image} />
          </div>
          <div className="space-y-4">
            <div className="w-1/2">
              <p className="text-gray-300">{product.category}</p>
              <h2 className="font-bold text-2xl text-gray-700">
                {product.title}
              </h2>
            </div>

            <p className="text-4xl text-gray-900">{`$${product.price}`}</p>
            <p className="text-gray-500">{product.description}</p>

            <button className="flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded uppercase">
              add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
