import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your assistant. Ask me anything about Pulse HR, Finance GPT, Payroll, Clients, or Security.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'SA Assist'
        },
        body: JSON.stringify({
          model: 'openrouter/auto',
          messages: [
            {
              role: 'system',
              content: 'You are SA Assist AI, a helpful assistant for a business platform that includes Pulse HR, Finance GPT, Payroll GPT, Clients GPT, Security Policies GPT, and Helpdesk GPT. Provide helpful, professional responses about these business tools and general business questions.'
            },
            {
              role: 'user',
              content: inputMessage
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.choices[0].message.content,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-800 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(255, 255, 255, 0.3)",
            "0 0 40px rgba(255, 255, 255, 0.6)",
            "0 0 20px rgba(255, 255, 255, 0.3)"
          ]
        }}
        transition={{ 
          boxShadow: { duration: 2, repeat: Infinity },
          scale: { duration: 0.2 }
        }}
      >
        <Bot size={24} />
      </motion.button>

      {/* Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-end p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: 400, y: 100, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: 400, y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-96 h-[600px] bg-slate-900/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-700/30 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-slate-800" />
                  </div>
                  <h3 className="font-semibold text-white">SA Assist AI Assistant</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!message.isUser && (
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot size={12} className="text-slate-800" />
                      </div>
                    )}
                    <div
                      className={`max-w-xs px-3 py-2 rounded-2xl ${
                        message.isUser
                          ? 'bg-white text-slate-800'
                          : 'bg-slate-800/60 text-white border border-slate-700/30'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    {message.isUser && (
                      <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User size={12} className="text-white" />
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 justify-start"
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <Bot size={12} className="text-slate-800" />
                    </div>
                    <div className="bg-slate-800/60 border border-slate-700/30 rounded-2xl px-3 py-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-slate-700/20">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 bg-slate-800/60 border border-slate-700/30 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-slate-400"
                    disabled={isLoading}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className="px-3 py-2 bg-white text-slate-800 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
