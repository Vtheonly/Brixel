
import ContactForm from "@/components/sections/shared/ContactForm";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="bg-[#f8f9ff] min-h-screen py-16 sm:py-28">
      <div className="container mx-auto px-4 max-w-[1600px]">
        
        {/* Header Section */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-2">
            Wanna <span className="relative inline-block mx-1 sm:mx-2">
              <span className="relative z-10">build a brand</span>
              <span className="absolute inset-0 bg-[#F377DE] rotate-[-2deg] scale-110 -z-0"></span>
            </span> !
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff5722]">
            Let&apos;s talk
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-xl overflow-hidden flex flex-col lg:flex-row lg:min-h-[600px]">
          
          {/* Left Column: Animated Graphic - Hidden on mobile, shown on tablet+ */}
          <div className="relative w-full lg:w-4/12 overflow-hidden bg-white hidden sm:flex items-center min-h-[200px] md:min-h-[300px] lg:min-h-auto">
             <div className="absolute -left-[200px] sm:-left-[250px] lg:-left-[300px] w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] select-none pointer-events-none">
                 <Image 
                    src="/images/layers_/flower.svg" 
                    alt="Decorative flower" 
                    fill
                    className="object-contain scale-110 lg:scale-125"
                 />
             </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-8/12 p-6 sm:p-8 md:p-12 lg:p-16 flex items-center">
             <div className="w-full">
                <ContactForm />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
