import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Header from "../components/header/header";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [emblaRef] = useEmblaCarousel();
  const navigate = useNavigate();

  const features = [
    {
      title: "All-in-One Investment and Digital Treasury",
      desc: "Monitor your portfolio, manage your wallet, and trade seamlessly under one roof.",
    },
    {
      title: "Rock-Solid Security",
      desc: "Enterprise-grade encryption and 2FA ensure peace of mind.",
    },
    {
      title: "Anytime Access",
      desc: "Log in from anywhere and manage your vaults 24/7.",
    },
  ];

  const categories = [
    "Banking",
    "Investment",
    "Cryptocurrency",
    "Wallet: Savings & Withdraw",
    "Short & Long-Term",
    "Convert Fiat to Crypto",
  ];

  const vaults = [
    {
      name: "Core Reserve",
      desc: "Foundational liquidity vault, always available when needed.",
    },
    {
      name: "Growth Vault",
      desc: "Long-term or high-yield investment strategy vault.",
    },
    {
      name: "Flexible Funds",
      desc: "Accessible capital for planned movement and quick actions.",
    },
  ];

  return (
    <main className="font-sans">
      <Header />
      <section className="bg-[#F9F9F9] py-20 px-6 items-center justify-center w-full h-screen">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full items-center text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Your Investments, Your Treasure, YourWay.
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Securely store, invest, and grow your digital assets—all from one
            intuitive dashboard.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#D71E28] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#bb1923] transition cursor-pointer">
            Get Started
          </button>
        </motion.div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why CoreVault?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Animated Boxes */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border p-6 rounded-lg shadow text-center font-medium text-gray-800 bg-gray-50">
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vault Slider Section */}
      <section id="vaults" className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Your Vaults
        </h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 px-6">
            {vaults.map((v, i) => (
              <div
                key={i}
                className="min-w-[300px] p-6 bg-white shadow rounded-lg">
                <h3 className="font-semibold mb-2 text-lg">{v.name}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Teaser */}
      <section id="dashboard" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Dashboard Snapshot</h2>
          <p className="text-gray-600 mb-6">
            View your balance, track performance, and see detailed logs with a
            clean UI.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-100 p-4 rounded">
              💼 Total Balance: $6.3M
            </div>
            <div className="bg-gray-100 p-4 rounded">📉 Withdraw Fee: 10%</div>
            <div className="bg-gray-100 p-4 rounded">
              🚀 Daily Transfer Limit: $500K
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#D71E28] text-white py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-lg font-semibold mb-2">About CoreVault</h4>
          <p className="text-sm">
            CoreVault is a mini-banking and digital treasury platform for
            individuals and small teams to structure, monitor, and secure their
            financial assets with clarity and control.
          </p>
        </div>
      </footer>
    </main>
  );
}
