import { AnimatedContainer } from "../ui/AnimatedContainer";

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenContact();
  };

  return (
    <footer id="contact" className="w-full bg-[#F9F9F9] px-6 md:px-16 pt-24 pb-12 flex flex-col justify-between items-start border-t border-black/5 relative overflow-hidden">
      {/* Perfectly Centered Subtle Background Watermark */}
      <img
        src="/logofotter.png"
        alt="Unique Footer Background Logo"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[750px] lg:w-[900px] h-auto object-contain opacity-[0.10] pointer-events-none z-0"
      />

      <AnimatedContainer className="w-full mb-24 relative z-10">
        <div className="max-w-[850px]">
          <h2 className="font-display text-[70px] md:text-[140px] leading-[0.85] text-cacao tracking-tighter mb-8">
            Let's Plan<br />Your Event
          </h2>

          <p className="font-body italic text-cacao text-2xl md:text-[28px] leading-snug mb-12">
            Get in touch with Chef Patricia for catering menus and custom bakery orders.
          </p>

          <button
            type="button"
            onClick={onOpenContact}
            className="bg-cacao text-offwhite font-ui uppercase tracking-wider font-semibold px-10 py-4 rounded-full hover:scale-95 transition-transform text-sm md:text-base shadow-lg active:scale-95"
          >
            Get a Quote / Contact Us
          </button>
        </div>
      </AnimatedContainer>

      {/* Bottom Links Grid */}
      <AnimatedContainer delay={0.2} className="w-full grid grid-cols-2 md:grid-cols-5 gap-8 text-cacao font-ui text-xs md:text-sm uppercase tracking-widest font-semibold">
        <div className="flex flex-col gap-4">
          <a href="#home" className="hover:opacity-70">Home</a>
          <a href="#story" className="hover:opacity-70">Our Story</a>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#menu" className="hover:opacity-70">Catering</a>
          <a href="#bakery" className="hover:opacity-70">Bakery</a>
        </div>
        <div className="flex flex-col gap-4">
          <a href="https://www.instagram.com/uniquepastriescakes?igsh=dWJuYWRhcWt1MnFx" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">Instagram</a>
          <a href="https://www.facebook.com/patricia.barrientos.522?rdid=QlK409MgocrTYnIH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AsES4dZvK%2F#" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">Facebook</a>
        </div>
        <div className="flex flex-col gap-4">
          <p className="normal-case tracking-normal font-body font-normal">Austin, TX<br />Local Delivery & Setup</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="normal-case tracking-normal font-body font-normal">
            <a href="mailto:patriciabarrientos1205@gmail.com" className="hover:opacity-70">patriciabarrientos1205@gmail.com</a>
            <br />
            Tel. (512) 203-3079
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <a href="https://www.addstrategic.com/en/how-we-work" className="hover:opacity-70">Built By ADDSTRATEGIC</a>
        </div>
      </AnimatedContainer>
    </footer>
  );
}
