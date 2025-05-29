
import Navigation from '@/components/Navigation';
import HeroCards from '@/components/HeroCards';
import AIChatbot from '@/components/AIChatbot';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 font-inter">
      <Navigation />
      
      <main className="pt-20">
        <HeroCards />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
              About SA Assist
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              SA Assist is your comprehensive AI-powered business platform designed to streamline operations 
              across all departments. From HR management with Pulse HR to financial operations with Finance GPT, 
              our suite of AI tools empowers your team to work smarter, not harder.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
