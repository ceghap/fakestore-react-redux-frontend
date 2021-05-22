import { Link } from "react-router-dom";
const links = [
  {
    id: 1,
    url: "/",
    name: "Home",
  },
  {
    id: 2,
    url: "/products",
    name: "Products",
  },
];
const Header = () => {
  return (
    <div className="w-full ring-1 ring-black ring-opacity-5 p-4 mb-10 shadow-xl">
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="font-bold text-xl">
            <Link to="/">
              <span className="transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer uppercase">
                Fake Shop
              </span>
            </Link>
          </h2>
        </div>
        <div className="space-x-4 font-medium">
          {links.map((link) => {
            return (
              <Link key={link.id} to={link.url}>
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
