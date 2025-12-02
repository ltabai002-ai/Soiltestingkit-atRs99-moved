import { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

interface DropdownProps {
  title: string;
  description: string;
  images: { url: string; caption: string }[];
  isOpen: boolean;
  onToggle: () => void;
}

function Dropdown({ title, description, images, isOpen, onToggle }: DropdownProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-soft-grey p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-deep-green rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="text-warm-yellow w-8 h-8" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-deep-green">
            {title}
          </h3>
        </div>
        <button
          onClick={onToggle}
          className="w-full bg-warm-yellow text-deep-green font-bold px-6 py-4 rounded-lg hover:bg-gold transition-colors duration-300 shadow-md min-h-[52px] flex items-center justify-center gap-2"
        >
          <span>{isOpen ? 'Hide Details' : 'View Details'}</span>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="w-full py-12 px-4 md:px-8 lg:px-12 bg-white">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              {description}
            </p>

            <div className={`grid ${images.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8`}>
              {images.map((image, index) => (
                <div key={index} className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-base md:text-lg text-gray-600 font-medium">
                    {image.caption}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-6">
              <button className="bg-deep-green text-white font-bold px-8 py-4 rounded-lg hover:bg-deep-green/90 transition-colors duration-300 shadow-lg min-h-[56px] text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConsequencesSection() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const soilTestData = {
    title: 'Soil Test',
    description:
      'Conducting a soil test before construction is crucial to understand the load-bearing capacity and composition of your land. Ignoring this step can lead to severe structural issues.',
    images: [
      {
        url: 'https://images.pexels.com/photos/3894378/pexels-photo-3894378.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Foundation Failure: Weak soil can cause your building foundation to crack and settle unevenly',
      },
      {
        url: 'https://images.pexels.com/photos/4792490/pexels-photo-4792490.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Structural Damage: Poor soil quality leads to wall cracks and compromised building integrity',
      },
    ],
  };

  const backfillData = {
    title: 'Bad Backfill',
    description:
      'Using improper backfill material or techniques can create voids and cause settling around your foundation, leading to expensive repairs and structural problems.',
    images: [
      {
        url: 'https://images.pexels.com/photos/5913391/pexels-photo-5913391.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Settlement Issues: Improper backfill causes ground to sink around foundation',
      },
      {
        url: 'https://images.pexels.com/photos/8961170/pexels-photo-8961170.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Water Damage: Poor drainage from bad backfill leads to moisture problems',
      },
      {
        url: 'https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Foundation Movement: Unstable backfill causes foundation shifting and cracks',
      },
    ],
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-soft-grey">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-green mb-4">
            You can face{' '}
            <span className="text-warm-yellow">5 major consequences</span> if you
            ignore these two things
          </h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-6">
          <Dropdown
            title={soilTestData.title}
            description={soilTestData.description}
            images={soilTestData.images}
            isOpen={openDropdown === 0}
            onToggle={() => toggleDropdown(0)}
          />

          <Dropdown
            title={backfillData.title}
            description={backfillData.description}
            images={backfillData.images}
            isOpen={openDropdown === 1}
            onToggle={() => toggleDropdown(1)}
          />
        </div>
      </div>
    </section>
  );
}
