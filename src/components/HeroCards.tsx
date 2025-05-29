
import { motion } from 'framer-motion';

interface Division {
  title: string;
  emoji: string;
  url: string;
  description: string;
}

const divisions: Division[] = [
  {
    title: "Pulse HR",
    emoji: "👨‍💼",
    url: "https://placeholder-pulse-hr.com",
    description: "Streamline HR operations with AI-powered employee management"
  },
  {
    title: "Finance GPT",
    emoji: "💰",
    url: "https://placeholder-finance-gpt.com",
    description: "Smart financial analysis and automated reporting solutions"
  },
  {
    title: "Payroll GPT",
    emoji: "🧾",
    url: "https://placeholder-payroll-gpt.com",
    description: "Automated payroll processing with intelligent calculations"
  },
  {
    title: "Clients GPT",
    emoji: "🧑‍💼",
    url: "https://placeholder-clients-gpt.com",
    description: "Enhanced client relationship management and communication"
  },
  {
    title: "Security Policies GPT",
    emoji: "🔐",
    url: "https://placeholder-security-gpt.com",
    description: "Comprehensive security policy management and compliance"
  },
  {
    title: "Helpdesk GPT",
    emoji: "💬",
    url: "https://placeholder-helpdesk-gpt.com",
    description: "Intelligent customer support and ticket resolution system"
  }
];

const HeroCards = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
          Welcome to <span className="text-blue-600">SA Assist</span>
        </h1>
        <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
          Your comprehensive AI-powered platform for streamlined business operations. 
          Transform your workflow with intelligent automation and data-driven insights.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {divisions.map((division, index) => (
          <motion.a
            key={division.title}
            href={division.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="
              relative group cursor-pointer block
              bg-white/80 backdrop-blur-lg
              rounded-3xl p-8 h-72
              border border-blue-200/50
              shadow-xl hover:shadow-2xl
              transition-all duration-500
              hover:border-blue-300/70
            "
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
              <motion.div 
                className="text-6xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {division.emoji}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {division.title}
              </h3>
              
              <p className="text-sm text-blue-600 mb-4 leading-relaxed">
                {division.description}
              </p>
              
              <motion.div 
                className="w-12 h-0.5 bg-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            </div>

            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent via-blue-50/20 to-transparent" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default HeroCards;
