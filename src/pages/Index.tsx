
import Navigation from '@/components/Navigation';
import HeroCards from '@/components/HeroCards';
import AIChatbot from '@/components/AIChatbot';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 font-inter">
      <Navigation />
      
      <main className="pt-20">
        <HeroCards />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              About SA Assist
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
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
