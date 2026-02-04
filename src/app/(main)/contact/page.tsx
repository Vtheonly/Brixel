
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
        <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-xl overflow-hidden relative flex flex-col lg:flex-row lg:min-h-[600px]">
          
          {/* Decorative Graphic - Absolute positioned to not push the form */}
          <div className="absolute -left-[180px] sm:-left-[220px] lg:-left-[280px] top-1/2 -translate-y-1/2 w-[360px] sm:w-[440px] lg:w-[560px] h-[360px] sm:h-[440px] lg:h-[560px] select-none pointer-events-none z-0 opacity-50 sm:opacity-100">
              <Image 
                src="/images/layers_/flower.svg" 
                alt="Decorative flower" 
                fill
                className="object-contain"
              />
          </div>

          {/* Form Container: Now centered across the available space */}
          <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16 flex items-center justify-center relative z-10">
             <div className="w-full max-w-2xl">
                <ContactForm />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
