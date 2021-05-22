import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full ring-1 ring-black ring-opacity-5 p-4 mb-10 shadow-xl">
      <div className="container mx-auto">
        <h2 className="font-bold text-xl">
          <Link to="/">
            <span className="transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer uppercase">
              Fake Shop
            </span>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Header;
