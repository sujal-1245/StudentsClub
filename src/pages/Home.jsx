import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaLightbulb,
  FaCalendarAlt,
  FaCameraRetro,
  FaHandsHelping,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const MotionLink = motion(Link);

  const highlights = [
    {
      icon: (
        <FaChalkboardTeacher size={40} className="text-dodger_blue-400 mb-4" />
      ),
      title: "Workshops",
      desc: "Expert-led hands-on workshops.",
    },
    {
      icon: <FaUsers size={40} className="text-dodger_blue-400 mb-4" />,
      title: "Community Events",
      desc: "Networking meetups & cultural mixers.",
    },
    {
      icon: <FaLightbulb size={40} className="text-dodger_blue-400 mb-4" />,
      title: "Projects",
      desc: "Collaborative campus-impact projects.",
    },
  ];

  const events = [
    {
      icon: <FaCalendarAlt className="text-dodger_blue-400 text-xl mb-2" />,
      title: "Theatre Night",
      date: "Jul 15, 2025",
      image: "/images/theatre_night.jfif",
    },
    {
      icon: <FaCameraRetro className="text-dodger_blue-400 text-xl mb-2" />,
      title: "Photography Walk",
      date: "Jul 28, 2025",
      image: "/images/photowalk.webp",
    },
    {
      icon: <FaHandsHelping className="text-dodger_blue-400 text-xl mb-2" />,
      title: "Psychology & Expression Workshop",
      date: "Aug 10, 2025",
      image: "/images/psychology_workshop.jfif",
    },
    {
      icon: <FaLightbulb className="text-dodger_blue-400 text-xl mb-2" />,
      title: "Music & Meditation Evening",
      date: "Aug 20, 2025",
      image: "/images/music_evening.jpg",
    },
    {
      icon: <FaUsers className="text-dodger_blue-400 text-xl mb-2" />,
      title: "Cultural Fusion Fest",
      date: "Sep 1, 2025",
      image: "/images/cultural_fest.jpg",
    },
  ];

  const gallery = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
  ];
  const partners = [
    "/images/red bull.png",
    "/images/odoo.jfif",
    "/images/Monstor.png",
    "/images/pizza hut.jpg",
  ];

  return (
    <div className="bg-gradient-to-b from-black to-black/90 text-white overflow-x-hidden space-y-24">
      {/* Hero Carousel */}
      <section>
        <div className="relative rounded-xl mt-14">
          <Carousel
            className="rounded-xl"
            images={[
              "/images/slide1.jpg",
              "/images/slide2.jpg",
              "/images/slide3.jpg",
            ]}
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg"
            >
              Welcome to the Students Club
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 max-w-2xl mb-6"
            >
              We bring students together through exciting events, impactful
              projects, and lifelong friendships.
            </motion.p>
            <MotionLink
              to="/about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-orange-500 hover:bg-orange-600 mb-2 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition"
            >
              Learn More
            </MotionLink>
          </div>
        </div>

        {/* Highlights */}
        <div className="container mt-10 mx-auto grid md:grid-cols-3 gap-8 px-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gradient-to-tr from-bleu_de_france-100 to-bleu_de_france-200 p-8 rounded-xl shadow-xl hover:shadow-2xl border border-bleu_de_france-300 text-center"
            >
              {item.icon}
              <h3 className="text-2xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-blue-100">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gradient-to-tr from-selective_yellow via-princeton_orange-400 to-orange-300 p-6 rounded-lg hover:shadow-lg border border-selective_yellow-700"
            >
              <img
                className="rounded-2xl mb-4 mx-auto h-40 object-cover"
                src={e.image}
                alt={e.title}
              />
              <div className="flex items-start gap-3">
                <div>{e.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {e.title}
                  </h3>
                  <time className="text-blue-100">{e.date}</time>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/events"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
          >
            See All Events
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Photo Gallery</h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-4 pb-2"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...gallery, ...gallery].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-64 h-40 object-cover rounded-lg flex-shrink-0 shadow-md"
              />
            ))}
          </motion.div>
        </div>
        <div className="text-center mt-6">
          <MotionLink
            to="/gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition"
          >
            View Full Gallery
          </MotionLink>
        </div>
      </section>

      {/* Promo Video */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Club in Action</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="aspect-video rounded-lg overflow-hidden shadow-xl container mx-auto px-4 max-w-5xl"
        >
          <div className="flex justify-center items-center">
            <iframe
              className="rounded-xl shadow-lg w-full aspect-video"
              src="https://www.youtube.com/embed/8FBXC4thAOY?si=yzlNNbVuioHBNYuU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 text-white bg-gradient-to-r from-bleu_de_france-600/90 to-bleu_de_france-600/50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { num: "300+", label: "Members" },
            { num: "20+", label: "Events" },
            { num: "5+", label: "Projects" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="py-8"
            >
              <h3 className="text-5xl font-extrabold">{s.num}</h3>
              <p className="text-xl mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-8 container mx-auto px-4"
        >
          {partners.map((src, i) => (
            <div
              key={i}
              className="w-36 h-20 bg-white/10 rounded-xl flex items-center justify-center p-3 shadow-md hover:scale-105 transition duration-300 backdrop-blur-md border border-white/10"
            >
              <img
                src={src}
                alt={`Partner ${i}`}
                className="h-full object-contain rounded-md grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-dodger_blue-600 to-dodger_blue-400">
        <div className="container mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Ready to Join?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white text-lg max-w-lg mx-auto mb-6"
          >
            Become part of our vibrant community & start making an impact.
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white text-dodger_blue-600 px-8 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </div>
  );
}
