import React from "react";
import { motion } from "motion/react";

interface SectionTitleProps {
  mainTitle: string;
  highlightedText?: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  mainTitle,
  highlightedText,
  subtitle,
}) => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <motion.h3
        className="py-4 text-4xl md:text-6xl"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {mainTitle}
        <span className="pl-2 text-red-700">{highlightedText}</span>
      </motion.h3>
      <motion.p
        className="w-full text-center sm:w-3/4 lg:w-4/6"
        variants={subtitleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {subtitle}
      </motion.p>
    </>
  );
};

export default SectionTitle;
