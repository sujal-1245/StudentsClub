import { motion } from "framer-motion";
import Members from "./Members";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <motion.div
      className="container mx-auto py-16 px-4 max-w-6xl text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center text-dodger_blue-400"
        variants={childVariants}
      >
        About Our Club
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <motion.div className="md:w-1/2" variants={childVariants}>
          <img
            src="/images/about-club.avif"
            alt="Our Club"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div className="md:w-1/2" variants={childVariants}>
          <motion.p
            className="text-lg text-gray-300 mb-6 leading-relaxed"
            variants={childVariants}
          >
            Welcome to a space where ideas thrive, passions ignite, and students
            come together to create something meaningful. Founded in{" "}
            <span className="text-white font-semibold">2019</span>, our club is
            a diverse family of curious minds and creative spirits.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-6 leading-relaxed"
            variants={childVariants}
          >
            From cultural fests to design jams, psychology circles to dance
            battles — there's a place for everyone. Our events celebrate
            individuality while fostering unity and personal growth.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-6 leading-relaxed"
            variants={childVariants}
          >
            Join us as we turn campus moments into memories, and passions into
            projects. Here, you’ll find more than just events — you'll find
            belonging.
          </motion.p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-dodger_blue-500 hover:bg-dodger_blue-600 text-white px-6 py-3 rounded-full font-semibold shadow transition"
            variants={childVariants}
          >
            Join the Club
          </motion.a>
        </motion.div>
      </div>

      <Members />
    </motion.div>
  );
}
