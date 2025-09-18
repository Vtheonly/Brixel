import { serviceData } from "@/content/services";
import Image from "next/image";

const illustrationMap: { [key: string]: string } = {
  AnalysisIllustration: "/images/pink images/Layer_1.png",
  StrategyIllustration: "/images/pink images/Layer_1_2.png",
  DesignIllustration: "/images/pink images/Layer_1_3.png",
  MarketingIllustration: "/images/pink images/Layer_1_4.png",
};

const Services = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex justify-between items-start mb-16">
          <h1 className="text-6xl font-bold">Services</h1>
          <p className="text-lg max-w-md text-gray-600">
            You feel like your brand is empty and doesn’t have a soul ! just a pretty facade with nothing to stand out ? don’t worry, because we got your back.
          </p>
        </div>
        <div className="space-y-24">
          {serviceData.map((category, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-3xl font-semibold">{category.category}</h2>
              </div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="mb-6">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-gray-500">{service.description}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={illustrationMap[category.illustration]}
                    alt={category.category}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
