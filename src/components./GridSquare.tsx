import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlowingBorder } from './GlowingBorder';
import { ReactNode } from 'react';

interface Framework {
  id: number;
  title: string;
  description: string;
  url: string;
  externalUrl?: string;
  icon: ReactNode;
}

interface Props {
  framework: Framework;
}

export function GridSquare({ framework }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      whileTap={{ scale: 0.95 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlowingBorder isActive={isHovered} />

      <div className="relative bg-black bg-opacity-80 p-6 cursor-pointer h-64 flex flex-col justify-between z-10">
        <div>
          <div className="mb-4 flex justify-start">
            {framework.icon}
          </div>
          <h3 className="text-primary text-xl font-mono mb-2">{framework.title}</h3>
          <p className="text-muted-foreground font-mono text-sm">
            {framework.description}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0.6 }}
          animate={{
            opacity: isHovered ? 1 : 0.6
          }}
          transition={{ duration: 0.15 }}
          className="text-xs font-mono text-primary text-center"
        >
          [ CLICK TO ACCESS ]
        </motion.div>
      </div>
    </motion.div>
  );
}