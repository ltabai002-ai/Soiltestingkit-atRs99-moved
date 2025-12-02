import { CheckCircle, Shield, TrendingUp, Clock, Award, Users } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Prevent Foundation Issues',
    description: 'Identify soil problems before construction begins',
  },
  {
    icon: TrendingUp,
    title: 'Save Money Long-term',
    description: 'Avoid expensive repairs and structural modifications',
  },
  {
    icon: Clock,
    title: 'Quick Results',
    description: 'Get comprehensive soil analysis within 48 hours',
  },
  {
    icon: Award,
    title: 'Professional Analysis',
    description: 'Expert recommendations from certified soil engineers',
  },
  {
    icon: Users,
    title: 'Free Consultation',
    description: 'Discuss your results with our construction experts',
  },
  {
    icon: CheckCircle,
    title: 'Peace of Mind',
    description: 'Build with confidence on solid foundation',
  },
];

export default function SolutionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-green mb-6">
            You can prevent yourself from these consequences at just{' '}
            <span className="text-warm-yellow">Rs 49</span> by taking a Soil Test
          </h2>
          <button className="bg-deep-green text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-deep-green/90 transition-colors duration-300 shadow-lg min-h-[52px]">
            How This Test Helps You
          </button>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-soft-grey p-5 rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-warm-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-deep-green mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full space-y-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              <img
                src="/WhatsApp Image 2025-12-02 at 4.59.56 PM.jpeg"
                alt="Free Hammers - Your Soil Testing Kit"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-soft-grey rounded-lg overflow-hidden shadow-xl">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="How Soil Testing Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-deep-green mb-2">
                  Watch: Complete Soil Testing Process
                </h3>
                <p className="text-gray-600">
                  See how our comprehensive soil testing kit works and what insights you'll receive
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
