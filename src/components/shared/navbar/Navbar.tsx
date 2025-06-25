"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "./Navlinks";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathName = usePathname();
  const [nav, setNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollNavbar = () => {
    if (window.scrollY >= 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
    return () => window.removeEventListener("scroll", scrollNavbar);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`sticky top-0 z-40 bg-white py-4 ${
        nav ? "border-b-2 border-orange-500" : "border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          {/* Menu items */}
          <ul className="hidden xl:flex gap-6">
            {navLinks.map(({ href, key, title }) => (
              <li key={key} className="text-lg">
                <Link
                  href={href}
                  className={`${
                    pathName === href
                      ? "text-orange-500 font-bold border-b-2 border-orange-500 pb-2"
                      : "text-black hover:text-orange-500"
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hire me button (desktop) */}
          <div className="hidden xl:block">
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="xl:hidden">
            <button onClick={toggleMenu} className="text-black text-2xl">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="xl:hidden mt-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ href, key, title }) => (
                <li key={key}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`${
                      pathName === href
                        ? "text-orange-500 font-bold border-b-2 border-orange-500 pb-2"
                        : "text-black hover:text-orange-500"
                    } block text-lg`}
                  >
                    {title}
                  </Link>
                </li>
              ))}

              {/* Hire me button (mobile) */}
              <li>
                <Link href="/login">
                  <Button>Login</Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
