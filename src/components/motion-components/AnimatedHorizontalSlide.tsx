import React from "react";
import { motion } from "motion/react";

interface AnimatedHorizontalSlideProps {
  children: React.ReactNode;
  initialTranslateX: string;
  styles?: string;
}

const AnimatedHorizontalSlide: React.FC<AnimatedHorizontalSlideProps> = ({
  initialTranslateX,
  styles,
  children,
}) => {
  return (
    <motion.div
      className={`${styles}`}
      initial={{ translateX: initialTranslateX, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 0.5 }}
      whileHover={{ opacity: 0.75 }}
      transition={{ duration: 0.5, ease: "linear" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedHorizontalSlide;
