import { motion } from 'motion/react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[15%] w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-blue-400/20 rounded-full blur-3xl"
      />

      {/* Floating 3D-like Elements */}
      
      {/* Message Bubble 1 */}
      <motion.div
        initial={{ y: 0, rotate: -10 }}
        animate={{
          y: [-20, 20, -20],
          rotate: [-10, -5, -10],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] md:top-[20%] md:left-[10%] flex items-center gap-2 md:gap-3 bg-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 backdrop-blur-sm scale-75 md:scale-100"
        style={{ transformPerspective: 1000, rotateX: 10, rotateY: -15 }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-inner">
          JD
        </div>
        <div>
          <div className="w-16 md:w-24 h-1.5 md:h-2 bg-gray-200 rounded-full mb-1.5 md:mb-2"></div>
          <div className="w-10 md:w-16 h-1.5 md:h-2 bg-gray-100 rounded-full"></div>
        </div>
      </motion.div>

      {/* File Attachment */}
      <motion.div
        initial={{ y: 0, rotate: 15 }}
        animate={{
          y: [20, -20, 20],
          rotate: [15, 20, 15],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[15%] right-[5%] md:top-[30%] md:right-[15%] flex flex-col items-center bg-white p-2 md:p-3 rounded-lg md:rounded-xl shadow-xl border border-gray-100 backdrop-blur-sm scale-75 md:scale-100"
        style={{ transformPerspective: 1000, rotateX: -10, rotateY: 20 }}
      >
        <div className="w-8 h-12 md:w-12 md:h-16 bg-blue-50 rounded-md md:rounded-lg border border-blue-100 flex flex-col items-center justify-center mb-1.5 md:mb-2">
          <div className="w-4 md:w-6 h-0.5 md:h-1 bg-blue-200 rounded-full mb-1"></div>
          <div className="w-3 md:w-4 h-0.5 md:h-1 bg-blue-200 rounded-full mb-1"></div>
          <div className="w-4 md:w-6 h-0.5 md:h-1 bg-blue-200 rounded-full"></div>
        </div>
        <div className="w-10 md:w-16 h-1.5 md:h-2 bg-gray-200 rounded-full"></div>
      </motion.div>

      {/* Notification Pill */}
      <motion.div
        initial={{ y: 0, scale: 0.9 }}
        animate={{
          y: [-15, 15, -15],
          scale: [0.9, 1, 0.9],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] left-[5%] md:bottom-[35%] md:left-[20%] flex items-center gap-1.5 md:gap-2 bg-gray-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-2xl scale-75 md:scale-100"
        style={{ transformPerspective: 1000, rotateZ: -5 }}
      >
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse"></div>
        <span className="text-[10px] md:text-xs font-medium tracking-wide">Project launched</span>
      </motion.div>

      {/* Emoji Reaction */}
      <motion.div
        initial={{ y: 0, rotate: 0 }}
        animate={{
          y: [15, -15, 15],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[30%] right-[10%] md:bottom-[40%] md:right-[25%] flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-100 text-lg md:text-2xl scale-75 md:scale-100"
        style={{ transformPerspective: 1000, rotateX: 15, rotateY: -10 }}
      >
        🚀
      </motion.div>
      
      {/* Abstract 3D Shape */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[5%] right-[20%] md:top-[15%] md:right-[30%] block w-10 h-10 md:w-16 md:h-16 rounded-2xl md:rounded-3xl border-2 md:border-4 border-primary/20 backdrop-blur-md scale-75 md:scale-100"
        style={{ transformStyle: 'preserve-3d' }}
      />
    </div>
  );
}
