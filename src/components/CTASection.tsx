export default function CTASection() {
  const handleBuyNow = () => {
    window.location.href = '#payment';
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-deep-green to-deep-green/90">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-6">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-green leading-tight">
                  Prevent your future investment at just{' '}
                  <span className="text-warm-yellow">Rs 99</span>
                </h2>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={handleBuyNow}
                  className="bg-warm-yellow text-deep-green font-bold px-10 py-5 rounded-full text-xl hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[180px]"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
