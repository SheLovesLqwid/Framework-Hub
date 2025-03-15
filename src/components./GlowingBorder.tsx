import { motion } from 'framer-motion';

interface Props {
  isActive: boolean;
}

export function GlowingBorder({ isActive }: Props) {
  return (
    <motion.div
      animate={{
        opacity: isActive ? 1 : 0.3,
        scale: isActive ? 1.02 : 1
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="absolute inset-0 -z-10"
    >
      {/* Top border */}
      <motion.div
        animate={{
          x: isActive ? ["-100%", "100%"] : "0%"
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
      />

      {/* Right border */}
      <motion.div
        animate={{
          y: isActive ? ["-100%", "100%"] : "0%"
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary to-transparent"
      />

      {/* Bottom border */}
      <motion.div
        animate={{
          x: isActive ? ["100%", "-100%"] : "0%"
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
      />

      {/* Left border */}
      <motion.div
        animate={{
          y: isActive ? ["100%", "-100%"] : "0%"
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary to-transparent"
      />
    </motion.div>
  );
}