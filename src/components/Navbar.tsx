import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="text-sm font-bold uppercase tracking-widest">
          Rita Barracha
        </Link>
        <div className="flex gap-4 md:gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => window.scrollTo(0, 0)}
              className={`link-underline text-xs uppercase tracking-widest pb-1 ${
                location.pathname === link.to
                  ? "after:scale-x-100 after:origin-left"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
