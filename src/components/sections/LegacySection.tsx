import { AnimatedContainer } from "../ui/AnimatedContainer";

interface LegacySectionProps {
  onOpenContact: () => void;
}

export function LegacySection({ onOpenContact }: LegacySectionProps) {
  return (
    <section id="story" className="w-full relative min-h-[600px] md:min-h-[800px] flex items-center justify-end">
      {/* Background Image - Full width */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop" 
          alt="Event Catering Setup" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pink Card - Floating on right */}
      <AnimatedContainer 
        className="relative z-10 w-full md:w-[45%] max-w-[550px] bg-pink p-12 md:p-16 rounded-none shadow-2xl flex flex-col items-start md:mr-32"
      >
        <h2 className="font-display text-[50px] md:text-[75px] leading-[0.9] text-cacao tracking-tight mb-8">
          Experience<br />
          Exceptional.
        </h2>
        
        <p className="font-body text-cacao/90 text-sm md:text-base leading-relaxed mb-10">
          Transforming special events and moments into memorable culinary experiences, fusing operational catering precision with artisanal delicacy.
        </p>

        <button 
          onClick={onOpenContact}
          className="bg-cacao text-offwhite font-ui uppercase tracking-wider text-sm px-6 py-3 rounded-full hover:scale-95 transition-transform shadow-md"
        >
          Book Your Event
        </button>
      </AnimatedContainer>
    </section>
  );
}
