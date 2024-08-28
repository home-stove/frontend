import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {};

const phrases: string[] = [
  "for Every Sweet Occasion",
  "and Indulge in Delectable Creations",
  "for Unforgettable Sweet Moments",
  "and Taste the Difference",
  "and Sweeten Your Celebrations",
  "for Breathtaking Baked Goods",
  "and Let Your Taste Buds Dance",
  "and Elevate Your Dessert Experience",
  "and Make Every Bite Magical",
];

// Changing Headline Home
function ChangingHeadline({}: Props) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mb-5 lg:mb-8">
      <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl 3xl:text-4xl opacity-[.99]">
        Find Your Perfect Baker
        <AnimatePresence mode="wait">
          <motion.span
            key={currentPhraseIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              ease: [0.64, 0, 0.78, 0],
            }}
            className="font-playfairDisplay"
          >
            {" "}
            {phrases[currentPhraseIndex]}{" "}
          </motion.span>
        </AnimatePresence>
      </h1>
    </div>
  );
}

export default ChangingHeadline;
