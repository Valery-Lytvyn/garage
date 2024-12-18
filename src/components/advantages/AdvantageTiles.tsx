import React from "react";
import { motion } from "motion/react";
import AdvantageTile from "./AdvantageTile";
import { advantagesData } from "../../data/advantagesData";

const AdvantageTiles: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };
  return (
    <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2 lg:grid-cols-3">
      {advantagesData.map(({ title, description, icon }, index) => (
        <motion.div
          key={title}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          custom={index}
          viewport={{ once: false }}
        >
          <AdvantageTile title={title} description={description} icon={icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default AdvantageTiles;
