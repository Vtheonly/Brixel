
import ContactForm from "@/components/sections/shared/ContactForm";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="bg-[#f8f9ff] min-h-screen py-20 sm:py-28">
      <div className="container mx-auto px-4 max-w-[1600px]">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-2">
            Wanna <span className="relative inline-block mx-2">
              <span className="relative z-10">build a brand</span>
              <span className="absolute inset-0 bg-pink-400 rotate-[-2deg] scale-110 -z-0"></span>
            </span> !
          </h1>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff5722]">
            Let&apos;s talk
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Left Column: Animated Graphic */}
          <div className="relative w-full lg:w-4/12 overflow-hidden bg-white min-h-[300px] lg:min-h-auto flex items-center">
             <div className="absolute -left-[50px] w-[400px] h-[400px] select-none pointer-events-none">
                 <Image 
                    src="/images/layers_/Clip path group.png" 
                    alt="Decorative flower" 
                    fill
                    className="object-contain scale-125"
                 />
             </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-8/12 p-8 md:p-12 lg:p-16 flex items-center">
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
