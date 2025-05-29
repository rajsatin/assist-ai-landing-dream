
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 text-center bg-blue-50/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-blue-600 text-sm">
          © 2025 SA Assist. Built with ♥️ and AI.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
