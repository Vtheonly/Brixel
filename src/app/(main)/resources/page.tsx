import ContactForm from "@/components/sections/shared/ContactForm";
import Image from "next/image";

const ResourcesPage = () => {
  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Wanna <span className="highlight-pink">build</span> a brand !
          </h1>
          <p className="text-5xl md:text-6xl font-bold text-brand-secondary mt-2">
            Let&apos;s talk
          </p>
        </div>

        <div className="mt-16 bg-white shadow-lg rounded-lg p-8 md:p-12 lg:flex lg:items-center lg:gap-16">
          {/* Left Side: Image */}
          <div className="hidden lg:block lg:w-1/2">
            <Image
              src="/images/layers_/Clip path group.png"
              alt="Decorative graphic"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;