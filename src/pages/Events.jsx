import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const events = [
  {
    title: "Theatre Night: Express & Impress",
    date: "2025-07-12",
    desc: "An evening of stage plays and dramatic expression.",
    image: "/images/theatre_night.jfif",
  },
  {
    title: "Workshop: Art Therapy",
    date: "2025-07-18",
    desc: "Discover emotions through creative art and painting.",
    image: "/images/art_therapy.jpg",
  },
  {
    title: "Open Mic & Music Jam",
    date: "2025-07-22",
    desc: "Sing, play or recite—share your voice on stage!",
    image: "/images/open_mic.jpg",
  },
  {
    title: "Photography Walk",
    date: "2025-07-28",
    desc: "Explore the campus through your camera’s lens.",
    image: "/images/photowalk.webp",
  },
  {
    title: "Workshop: Dance Your Energy",
    date: "2025-08-01",
    desc: "Move freely with guided expressive dance sessions.",
    image: "/images/gallery4.jpg",
  },
  {
    title: "Film Screening: Indie Shorts",
    date: "2025-08-05",
    desc: "Watch and discuss meaningful short films.",
    image: "/images/gallery3.jpg",
  },
  {
    title: "Creative Writing Circle",
    date: "2025-08-10",
    desc: "Share stories, poems, and sparks of imagination.",
    image: "/images/writing_circle.jpg",
  },
  {
    title: "Psych Talk: Mind Unplugged",
    date: "2025-08-15",
    desc: "Interactive session on self-awareness & psychology.",
    image: "/images/psychology_workshop.jfif",
  },
  {
    title: "Cultural Fusion Fest",
    date: "2025-08-25",
    desc: "Celebrate diverse cultures with food, fashion & art.",
    image: "/images/cultural_fest.jpg",
  },
  {
    title: "Night Under the Stars",
    date: "2025-08-30",
    desc: "Chill-out with acoustic music and creative vibes.",
    image: "/images/starry_night.jpg",
  },
];

export default function Events() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <motion.div
      className="container mx-auto py-12 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl font-extrabold my-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-dodger_blue-400 via-bleu_de_france-500 to-cobalt_blue-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Upcoming Events
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {events.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-md p-4 transition transform hover:scale-[1.02]"
          >
            <img
              src={e.image}
              alt={e.title}
              className="mx-auto w-64 h-40 object-cover rounded-lg"
            />
            <div className="mt-5 space-y-2 text-left">
              <h3 className="text-[1.65rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff6ec4] via-[#7873f5] to-[#4ADEDE]">
                {e.title}
              </h3>

              <time
                dateTime={e.date}
                className="text-sm text-gray-300/80 italic flex items-center gap-2"
              >
                <span className="text-xl">📅</span>
                {new Date(e.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>

              <p className="text-base leading-relaxed text-gray-200 tracking-wide">
                {e.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
