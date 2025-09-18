// src/app/(main)/contact/page.tsx
import ContactForm from "@/components/sections/shared/ContactForm";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        {/* Left Side: Text and Graphic */}
        <div className="md:w-1/2">
           <div className="relative w-64 h-64">
             {/* This would be an SVG or an animated component */}
             <div className="absolute inset-0 bg-brand-primary/20 rounded-full animate-pulse"></div>
             <div className="absolute inset-4 bg-brand-primary/40 rounded-full animate-pulse delay-150"></div>
             <div className="absolute inset-8 bg-brand-primary/60 rounded-full animate-pulse delay-300"></div>
           </div>
           <h1 className="text-5xl md:text-6xl font-bold mt-8 leading-tight">
             Wanna <span className="highlight-pink">build</span> a brand !
           </h1>
           <p className="text-5xl md:text-6xl font-bold text-brand-secondary mt-2">Let's talk</p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 flex justify-center">
           <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;