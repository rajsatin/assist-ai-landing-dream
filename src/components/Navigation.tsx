
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            SA Assist
          </motion.div>
          <motion.a 
            href="#about"
            className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
