import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[999] bg-[#D71E28] text-white">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <img src="/Logo.png" alt="Logo" className="w-[150px]" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/dashboard" className="font-medium">
            Home
          </a>
          <a href="/about" className="font-medium">
            About
          </a>
          <a href="/services" className="font-medium">
            Services
          </a>
          <a href="/contact" className="font-medium">
            Contact
          </a>
          <div className="flex items-center gap-5">
            <Link
              to="/login"
              className="text-lg font-medium text-white hover:text-gray-200 transition">
              Login
            </Link>
            <button
              onClick={() => navigate("/register")}
              className="bg-white text-[#D71E28] border border-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-80 transition cursor-pointer">
              Get Started
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu">
          <HiMenu />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-[#D71E28] z-[1000] text-white flex flex-col p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu">
                <IoMdClose className="text-2xl" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <a
                href="/"
                className="font-medium"
                onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a
                href="/about"
                className="font-medium"
                onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a
                href="/services"
                className="font-medium"
                onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a
                href="/contact"
                className="font-medium"
                onClick={() => setMenuOpen(false)}>
                Contact
              </a>
              <button
                className="mt-4 bg-white text-[#D71E28] border border-white px-4 py-2 rounded text-sm font-medium hover:bg-opacity-80 transition"
                onClick={() => setMenuOpen(false)}>
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
