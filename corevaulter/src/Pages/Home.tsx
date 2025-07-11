import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Header from "../components/header/header";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { MdOutlineSecurity } from "react-icons/md";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdOutlineAccessAlarms } from "react-icons/md";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [emblaRef] = useEmblaCarousel();
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Data arrays
  const features = [
    {
      title: "All-in-One Investment and Digital Treasury",
      desc: "Monitor your portfolio, manage your wallet, and trade seamlessly under one roof.",
      icon: <LiaCoinsSolid className="text-6xl text-[#D71E28]" />,
      action: "Get started >",
    },
    {
      title: "Rock-Solid Security",
      desc: "Enterprise-grade encryption and 2FA ensure peace of mind.",
      icon: <MdOutlineSecurity className="text-6xl text-[#D71E28]" />,
      action: "Learn More >",
    },
    {
      title: "Anytime Access",
      desc: "Log in from anywhere and manage your vaults 24/7.",
      icon: <MdOutlineAccessAlarms className="text-6xl text-[#D71E28]" />,
      action: "Explore >",
    },
  ];

  const vaults = [
    {
      name: "Core Reserve",
      desc: "Foundational liquidity vault, always available when needed.",
      icon: "🛡️",
    },
    {
      name: "Growth Vault",
      desc: "Long-term or high-yield investment strategy vault.",
      icon: "📈",
    },
    {
      name: "Flexible Funds",
      desc: "Accessible capital for planned movement and quick actions.",
      icon: "💎",
    },
    {
      name: "Crypto Vault",
      desc: "Secure storage and staking for digital assets.",
      icon: "🔐",
    },
    {
      name: "Legacy Trust",
      desc: "Multi-generational wealth preservation solutions.",
      icon: "🏛️",
    },
  ];
  const options = [
    {
      title: "Open a savings account",
      description:
        "Explore our savings accounts and find the right fit for you",
      icon: "💰",
    },
    {
      title: "Interest rates today",
      description: "Check current rates for all our savings products",
      icon: "📈",
    },
    {
      title: "Investment options",
      description: "Discover tailored investment strategies for your goals",
      icon: "📊",
    },
    {
      title: "Financial planning",
      description: "Get expert advice for your financial future",
      icon: "🧑‍💼",
    },
  ];
  return (
    <main className="font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl text-center px-6 py-12 backdrop-blur-sm bg-white/10 rounded-xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Investments, <br className="hidden sm:block" />
              <motion.span
                className="text-[#FFD700]"
                animate={{
                  textShadow: [
                    "0 0 8px rgba(255,215,0,0)",
                    "0 0 8px rgba(255,215,0,0.8)",
                    "0 0 8px rgba(255,215,0,0)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  repeatType: "reverse",
                }}>
                Your Treasure
              </motion.span>
              , Your Way.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Securely store, invest, and grow your digital assets—all from one
              intuitive dashboard.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}>
              <button
                onClick={() => navigate("/register")}
                className="relative overflow-hidden bg-[#D71E28] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#bb1923] transition-all duration-300 cursor-pointer text-lg group">
                <span className="relative z-10">Get Started</span>
                <motion.span
                  className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7 }}
                />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scrolling indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why CoreVault?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
                <a href="/" className="text-black text-1xl font-semibold">
                  {f.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-lg p-8 shadow-lg border border-gray-200 mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-green-100 text-green-800 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🆕</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">
                  New customer? Say hello to a $125 bonus
                </h3>
                <p className="text-gray-600 text-base">
                  Open a Clear Access Banking account, great for students &
                  more. Complete offer requirements to get your bonus deposited
                  directly into your new account within 30 days.
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[#D71E28] font-medium flex items-center gap-1 mt-6 text-lg">
                  See full offer details <FiArrowRight className="text-sm" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 cursor-pointer h-full flex flex-col">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="font-semibold text-xl mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {option.description}
                </p>
                <div className="text-[#D71E28] font-medium flex items-center">
                  Get started <FiArrowRight className="ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vault Slider Section */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Explore Your <span className="text-[#D71E28]">Vaults</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Secure compartments tailored for every financial need with
              institutional-grade protection.
            </p>
          </motion.div>

          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {vaults.map((vault, index) => (
                <motion.div
                  key={vault.name}
                  className="embla__slide min-w-[300px]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 h-full transition-all duration-300 hover:shadow-md hover:border-[#D71E28]">
                    <div className="flex items-center mb-6">
                      <span className="text-3xl mr-4">{vault.icon}</span>
                      <h3 className="text-xl font-bold text-black">
                        {vault.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-8">{vault.desc}</p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full text-[#D71E28] font-medium">
                      Explore Vault
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-16">
            <div className="flex space-x-4">
              <button className="embla__prev border border-gray-300 text-gray-700 hover:bg-gray-50 p-3 rounded-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="border-2 border-[#D71E28] text-[#D71E28] hover:bg-[#D71E28] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                View All Vault Options
              </button>
              <button className="embla__next border border-gray-300 text-gray-700 hover:bg-gray-50 p-3 rounded-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="relative h-[500px] overflow-hidden mb-14">
        {/* New image featuring people */}
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center p-8">
          <div className="text-center text-white max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join over 2 million customers building their future with us
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Real people achieving real financial growth with our personalized
              solutions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-2xl font-bold mb-1">$200</p>
                <p className="text-sm">Welcome bonus</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-2xl font-bold mb-1">24/7</p>
                <p className="text-sm">Customer support</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-2xl font-bold mb-1">0%</p>
                <p className="text-sm">Monthly fees</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D71E28] text-white px-8 py-4 font-medium flex items-center gap-2 mx-auto text-lg">
              Start Banking With Us <FiArrowRight />
            </motion.button>

            <p className="text-gray-300 text-sm mt-8">
              Offer valid until December 31, 2023. Terms and conditions apply.
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
