import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Events", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-bleu_de_france/40 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-white">College Club</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((l) => (
            <NavLink
              key={l}
              to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold underline"
                  : "text-white hover:text-orange-300 transition"
              }
            >
              {l}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-bleu_de_france/40 backdrop-blur-md shadow-md px-6 pt-4 pb-6 space-y-4 text-center">
          {links.map((l) => (
            <NavLink
              key={l}
              to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-white font-semibold underline"
                  : "block text-white hover:text-orange-300 transition"
              }
            >
              {l}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
