
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Lightbulb, Smile } from 'lucide-react';

const JokesFactsGenerator = () => {
  const [currentItem, setCurrentItem] = useState('');
  const [itemType, setItemType] = useState<'joke' | 'fact'>('joke');
  const [isLoading, setIsLoading] = useState(false);

  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the developer go broke? Because he used up all his cache!",
    "How do you organize a space party? You planet!",
    "Why don't programmers like nature? It has too many bugs!",
    "What do you call a fake noodle? An impasta!",
    "Why did the AI go to therapy? It had deep learning issues!",
    "What's a computer's favorite snack? Microchips!",
    "Why do Java developers wear glasses? Because they can't C#!"
  ];

  const facts = [
    "AI can now generate human-like text, images, and even code!",
    "The first computer bug was an actual bug found in a computer in 1947.",
    "Over 90% of the world's data was created in the last two years.",
    "AI algorithms can detect diseases from medical images with 95% accuracy.",
    "The average person checks their phone 96 times per day.",
    "Machine learning models can predict weather patterns 10 days in advance.",
    "AI chatbots handle over 80% of customer service inquiries today.",
    "Quantum computers could solve certain problems millions of times faster than classical computers."
  ];

  const generateRandomItem = () => {
    setIsLoading(true);
    const newType = Math.random() > 0.5 ? 'joke' : 'fact';
    const items = newType === 'joke' ? jokes : facts;
    const randomItem = items[Math.floor(Math.random() * items.length)];
    
    setTimeout(() => {
      setItemType(newType);
      setCurrentItem(randomItem);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    generateRandomItem();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-emerald-100 shadow-lg max-w-2xl mx-auto"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {itemType === 'joke' ? (
            <Smile className="w-5 h-5 text-emerald-600" />
          ) : (
            <Lightbulb className="w-5 h-5 text-blue-600" />
          )}
          <span className="font-semibold text-gray-700 capitalize">
            Random {itemType}
          </span>
        </div>
        <motion.button
          onClick={generateRandomItem}
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          New {itemType === 'joke' ? 'Joke' : 'Fact'}
        </motion.button>
      </div>
      
      <motion.div 
        key={currentItem}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="text-gray-600 text-center italic leading-relaxed"
      >
        {isLoading ? (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-500"></div>
          </div>
        ) : (
          currentItem
        )}
      </motion.div>
    </motion.div>
  );
};

export default JokesFactsGenerator;
