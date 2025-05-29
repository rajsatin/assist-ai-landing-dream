
import { motion } from 'framer-motion';

interface Division {
  title: string;
  emoji: string;
  url: string;
  gradient: string;
}

const divisions: Division[] = [
  {
    title: "Pulse HR",
    emoji: "👨‍💼",
    url: "https://placeholder-pulse-hr.com",
    gradient: "from-slate-700 via-slate-600 to-slate-700"
  },
  {
    title: "Finance GPT",
    emoji: "💰",
    url: "https://placeholder-finance-gpt.com",
    gradient: "from-slate-700 via-blue-800 to-slate-700"
  },
  {
    title: "Payroll GPT",
    emoji: "🧾",
    url: "https://placeholder-payroll-gpt.com",
    gradient: "from-blue-800 via-slate-700 to-blue-800"
  },
  {
    title: "Clients GPT",
    emoji: "🧑‍💼",
    url: "https://placeholder-clients-gpt.com",
    gradient: "from-slate-600 via-slate-700 to-slate-600"
  },
  {
    title: "Security Policies GPT",
    emoji: "🔐",
    url: "https://placeholder-security-gpt.com",
    gradient: "from-slate-700 via-slate-800 to-slate-700"
  },
  {
    title: "Helpdesk GPT",
    emoji: "💬",
    url: "https://placeholder-helpdesk-gpt.com",
    gradient: "from-blue-800 via-slate-800 to-blue-800"
  }
];

const HeroCards = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Welcome to SA Assist
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Your comprehensive AI-powered platform for streamlined business operations
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {divisions.map((division, index) => (
          <motion.a
            key={division.title}
            href={division.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 100, rotate: index % 2 === 0 ? -5 : 5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100 
            }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              z: 50,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative group cursor-pointer block
              bg-gradient-to-br ${division.gradient}
              rounded-3xl p-8 h-64
              backdrop-blur-lg bg-opacity-60
              border border-slate-600/30
              shadow-xl hover:shadow-2xl
              transition-all duration-300
              transform-gpu perspective-1000
            `}
            style={{
              backdropFilter: 'blur(20px)',
              background: `linear-gradient(135deg, rgba(71, 85, 105, 0.8), rgba(51, 65, 85, 0.6))`,
            }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
              <motion.div 
                className="text-6xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {division.emoji}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {division.title}
              </h3>
              
              <motion.div 
                className="w-12 h-0.5 bg-white/50 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              />
            </div>

            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default HeroCards;
