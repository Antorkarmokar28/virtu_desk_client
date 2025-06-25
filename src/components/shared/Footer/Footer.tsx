"use client";
import Link from "next/link";
import { CiPhone } from "react-icons/ci";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { motion } from "motion/react";
import { slideInFromBottom } from "@/utils/motion";
const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      className="bg-[#1c1c22] text-gray-300 py-12 mt-20"
    >
      <motion.div
        variants={slideInFromBottom(0.2)}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            {/* logo */}
            <Link href="/">
              <h2 className="text-3xl font-semibold text-white">
                <span className="text-orange-500 hover:text-orange-600">
                  Virtu
                </span>
                Desk
              </h2>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Virtual assistant solutions that empower businesses to scale
              efficiently and focus on what matters most.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:text-orange-500 transition"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-500 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-500 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <CiPhone className="text-orange-500 text-xl" />
                <span>+21055155023</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-orange-500 text-xl" />
                <span>virtuOfficial@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MdLocationOn className="text-orange-500 text-xl" />
                <span>
                  325 118th Ave SE, Suite 200, Bellevue, WA 98005, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Virtu Desk. All rights reserved.
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
