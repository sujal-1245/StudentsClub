import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/contact.json"; // update this path if needed

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const location = useLocation();

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <motion.div
      className="container mt-10 mx-auto px-4 py-16 max-w-7xl flex flex-col md:flex-row items-center gap-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Lottie Animation */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        variants={childVariants}
      >
        <div className="w-full h-64 md:h-96 bg-white/10 rounded-xl backdrop-blur-md flex items-center justify-center shadow-lg">
          <Lottie animationData={animationData} loop />
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 text-white"
        variants={childVariants}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <motion.form className="space-y-5" variants={containerVariants}>
          <motion.div variants={childVariants}>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu_de_france-500 text-white placeholder-white/60"
            />
          </motion.div>

          <motion.div variants={childVariants}>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu_de_france-500 text-white placeholder-white/60"
            />
          </motion.div>

          <motion.div variants={childVariants}>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-bleu_de_france-500 text-white placeholder-white/60"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-dodger_blue-500 hover:bg-dodger_blue-600 text-white py-3 rounded-lg font-semibold transition shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
