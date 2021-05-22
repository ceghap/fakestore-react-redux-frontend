import { Link } from "react-router-dom";

const Products = (props) => {
  const { products } = props;

  const renderProductList = products.map((product) => {
    return (
      <Link key={product.id} to={`/products/${product.id}`}>
        <div
          key={product.id}
          className="bg-white hover:shadow-xl hover:border hover:border-gray-500 rounded-lg overflow-hidden cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-center p-4">
            <img
              className="h-40 w-auto"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="p-4 space-y-2">
            <p className="uppercase tracking-wide text-sm font-bold text-gray-700 line-clamp-1">
              {product.title}
            </p>
            <p className="text-gray-700 line-clamp-3">{product.description}</p>
            <p className="text-3xl text-gray-900 font-bold">
              {" "}
              ${product.price}
            </p>
            <p className="text-gray-500 "> {product.category}</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <>
      <h2 className="font-bold text-2xl uppercase mb-10">Fake Products</h2>
      <div className="container mx-auto grid grid-cols-4 grid-rows-4 gap-4">
        {renderProductList}
      </div>
    </>
  );
};

export default Products;
