import HeroSection from './components/HeroSection';
import ConsequencesSection from './components/ConsequencesSection';
import SolutionSection from './components/SolutionSection';
import FinalOfferSection from './components/FinalOfferSection';
import { createOrder } from './lib/supabase';

function App() {
  const handleOrderSubmit = async (data: {
    name: string;
    email: string;
    phone: string;
  }) => {
    try {
      const order = await createOrder(data);
      console.log('Order created successfully:', order);
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ConsequencesSection />
      <SolutionSection />
      <FinalOfferSection onSubmit={handleOrderSubmit} />
    </div>
  );
}

export default App;
