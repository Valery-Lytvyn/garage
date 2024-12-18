import React from "react";
import { motion } from "motion/react";

interface AnimatedVerticalSlideProps {
  children: React.ReactNode;
  initialTranslateY: string;
  styles?: string;
}

const AnimatedVerticalSlide: React.FC<AnimatedVerticalSlideProps> = ({
  initialTranslateY,
  styles,
  children,
}) => {
  return (
    <motion.div
      className={`${styles}`}
      initial={{ translateY: initialTranslateY, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "linear" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedVerticalSlide;
