
import Navigation from '@/components/Navigation';
import HeroCards from '@/components/HeroCards';
import AIChatbot from '@/components/AIChatbot';
import Footer from '@/components/Footer';
import JokesFactsGenerator from '@/components/JokesFactsGenerator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-50 font-inter">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section with Jokes/Facts Generator */}
        <section className="py-20 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              SA Assist
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive AI-powered platform for streamlined business operations across all departments
            </p>
            
            <JokesFactsGenerator />
          </div>
        </section>

        <HeroCards />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-8">
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
