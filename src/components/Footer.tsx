
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 text-center"
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-gray-500 text-sm">
          © 2025 SA Assist.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
