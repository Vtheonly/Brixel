
import ContactForm from "@/components/sections/shared/ContactForm";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-5/12 pt-12">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Wanna <span className="bg-pink-500 text-white px-2 py-1 rounded">build</span> a brand !
            </h1>
            <p className="text-5xl md:text-6xl font-bold text-orange-500 mt-2">
              Let&apos;s talk
            </p>
            <div className="mt-8 text-lg text-gray-600">
               <p>Have a project in mind? We&apos;d love to hear from you. Let&apos;s create something amazing together.</p>
            </div>
          </div>

          {/* Right Column: Form with Decorative Image */}
          <div className="w-full lg:w-7/12 relative">
            
            {/* Decorative Image - Behind the card */}
            <div className="hidden lg:block absolute left-[-80px] top-[60%] -translate-y-1/2 w-[300px] h-auto z-0 select-none pointer-events-none">
                <Image 
                    src="/images/layers_/Clip path group.png" 
                    alt="Decorative flower" 
                    width={500}
                    height={800}
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Contact Card */}
            <div className="relative z-10 bg-white shadow-lg rounded-lg p-8 md:p-12 w-full">
              <div className="w-full flex justify-center">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
