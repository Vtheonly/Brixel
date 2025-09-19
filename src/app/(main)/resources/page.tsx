
import ContactForm from "@/components/sections/shared/ContactForm";
import Image from "next/image";

const ResourcesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        {/* Left Side: Text and Graphic */}
        <div className="md:w-1/2">
          <div className="relative w-64 h-64">
            <Image
              src="/images/layers_/Clip path group.png"
              alt="Resources"
              width={256}
              height={256}
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mt-8 leading-tight">
            Wanna <span className="highlight-pink">build</span> a brand !
          </h1>
          <p className="text-5xl md:text-6xl font-bold text-brand-secondary mt-2">
            Let&apos;s talk
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 flex justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
