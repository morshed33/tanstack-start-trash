import { Link } from "@tanstack/react-router";

type Props = {
  isLoggedIn?: boolean;
};

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/chat", label: "Chat" },
];

export default function Navbar({ isLoggedIn }: Props) {
  return (
    <div className="flex justify-around items-center sticky top-0 bg-white dark:bg-gray-800  h-14 ">
      <div className="max-w-4xl mx-auto flex items-center justify-between w-full">
        <div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="mr-2 px-2 py-1 rounded"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <img
            loading="lazy"
            className="w-10 h-10 rounded-full"
            src="https://loremflickr.com/320/240"
            alt="dummy"
          />
        </div>
      </div>
    </div>
  );
}
