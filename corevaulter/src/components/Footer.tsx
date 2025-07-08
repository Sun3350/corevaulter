import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#D71E28] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4">
            <div className="flex items-center">
              <img
                src="/Logo.png"
                alt="CoreVaulter Logo"
                className="w-[150px]"
              />
            </div>
            <p className="text-white">
              Empowering your financial future with secure, intuitive investment
              solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -3, color: "#3B82F6" }}
                    className="text-white hover:text-blue-500 text-xl">
                    <Icon />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Pricing", "Contact"].map(
                (item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href="#"
                      className="text-white hover:text-white transition">
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Investment",
                "Wealth Management",
                "Retirement",
                "Tax Planning",
                "Consulting",
              ].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href="#"
                    className="text-white hover:text-white transition">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="flex items-start space-x-3">
              <HiLocationMarker className="text-[#D71E28] mt-1 text-xl" />
              <p>123 Financial District, San Francisco, CA 94103</p>
            </div>
            <div className="flex items-center space-x-3">
              <HiPhone className="text-[#D71E28] text-xl" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-3">
              <HiMail className="text-[#D71E28] text-xl" />
              <p>info@corevaulter.com</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="border-t border-white my-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CoreVaulter. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white hover:text-white text-sm transition">
                  {item}
                </a>
              )
            )}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
