import React from 'react';
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const CardAnimation = ({ children, className = "" }) => {
    return (
        <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
    );
};

export default CardAnimation;