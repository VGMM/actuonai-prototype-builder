
import React from 'react';
import { motion } from 'framer-motion';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

const InteractiveCard = ({ children, className = "" }: InteractiveCardProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5
      }}
    >
      {children}
    </motion.div>
  );
};

export default InteractiveCard;
