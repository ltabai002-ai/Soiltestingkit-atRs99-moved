import { useState } from 'react';
import { Sparkles, Phone, Mail, User } from 'lucide-react';

interface FinalOfferSectionProps {
  onSubmit: (data: { name: string; email: string; phone: string }) => Promise<void>;
}

export default function FinalOfferSection({ onSubmit }: FinalOfferSectionProps) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '' });
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowForm(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="payment" className="py-16 md:py-24 bg-gradient-to-br from-deep-green to-deep-green/90 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-warm-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-warm-yellow animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Get the Soil Testing Kit for just{' '}
            <span className="text-warm-yellow text-5xl md:text-6xl">Rs 49</span>
          </h2>

          <div className="bg-warm-yellow/20 backdrop-blur-sm border-2 border-warm-yellow rounded-lg p-6 mb-8">
            <p className="text-xl md:text-2xl text-white font-semibold">
              + FREE consultation for the{' '}
              <span className="text-warm-yellow font-bold">first 50 customers</span>
            </p>
          </div>

          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="bg-warm-yellow text-deep-green font-bold px-12 py-5 rounded-lg text-xl hover:bg-gold transition-all duration-300 shadow-2xl hover:scale-105 min-h-[60px] min-w-[200px]"
            >
              Buy Now
            </button>
          ) : (
            <div className="max-w-md mx-auto bg-white rounded-lg p-8 shadow-2xl">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-deep-green mb-2">
                    Order Confirmed!
                  </h3>
                  <p className="text-gray-600">
                    We'll contact you shortly with the next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-deep-green mb-6">
                    Complete Your Order
                  </h3>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-warm-yellow focus:outline-none"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-warm-yellow focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-warm-yellow focus:outline-none"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-warm-yellow text-deep-green font-bold py-4 rounded-lg text-lg hover:bg-gold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[52px]"
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm Order - Rs 49'}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="w-full text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Cancel
                  </button>
                </form>
              )}
            </div>
          )}

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-warm-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-warm-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-warm-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span>Money-back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
