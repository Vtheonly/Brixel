import ContactForm from "@/components/sections/shared/ContactForm";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="w-full mx-auto text-left lg:text-left ml-0 lg:ml-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Wanna <span className="bg-pink-500 text-white px-2 py-1 rounded">build</span> a brand !
          </h1>
          <p className="text-5xl md:text-6xl font-bold text-orange-500 mt-2">
            Let's talk
          </p>
        </div>

        <div className="mt-12 bg-white shadow-lg rounded-lg p-8 md:p-12 mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8">
            {/* Left Side: Image */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
              <Image
                src="/images/layers_/Clip path group.png"
                alt="Decorative graphic"
                width={400}
                height={400}
                className="w-auto h-auto"
              />
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-4/5 flex justify-center lg:justify-end">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
