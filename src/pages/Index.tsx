
import Navigation from '@/components/Navigation';
import HeroCards from '@/components/HeroCards';
import AIChatbot from '@/components/AIChatbot';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 font-inter">
      <Navigation />
      
      <main className="pt-20">
        <HeroCards />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white/70 backdrop-blur-sm border-t border-blue-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              About SA Assist
            </h2>
            <p className="text-lg text-blue-700 leading-relaxed mb-6">
              SA Assist is your comprehensive AI-powered business platform designed to streamline operations 
              across all departments. From HR management with Pulse HR to financial operations with Finance GPT, 
              our suite of AI tools empowers your team to work smarter, not harder.
            </p>
            <p className="text-md text-blue-600 leading-relaxed">
              Built with cutting-edge artificial intelligence, our platform integrates seamlessly with your 
              existing workflows to provide intelligent automation, data-driven insights, and exceptional 
              user experiences across every aspect of your business.
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
