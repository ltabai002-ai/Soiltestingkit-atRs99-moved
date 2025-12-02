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
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between bg-soft-grey hover:bg-gray-200 transition-colors duration-300 min-h-[60px]"
      >
        <div className="flex items-center gap-3">
          <AlertTriangle className="text-warm-yellow w-6 h-6" />
          <h3 className="text-xl md:text-2xl font-bold text-deep-green text-left">
            {title}
          </h3>
        </div>
        {isOpen ? (
          <ChevronUp className="text-deep-green w-6 h-6 flex-shrink-0" />
        ) : (
          <ChevronDown className="text-deep-green w-6 h-6 flex-shrink-0" />
        )}
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-6 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>

          <div className={`grid ${images.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
            {images.map((image, index) => (
              <div key={index} className="space-y-3">
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>

          <button className="bg-warm-yellow text-deep-green font-bold px-6 py-3 rounded-lg hover:bg-gold transition-colors duration-300 shadow-md min-h-[48px]">
            Learn More
          </button>
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

        <div className="max-w-5xl mx-auto space-y-6">
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
