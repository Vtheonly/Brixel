import { serviceData } from "@/content/services";
import AnimatedSVG from "../shared/AnimatedSVG";

const illustrationMap: { [key: string]: string } = {
  AnalysisIllustration: "/images/pink images/svg/Layer_1.svg",
  StrategyIllustration: "/images/pink images/svg/Layer_2.svg",
  DesignIllustration: "/images/pink images/svg/Layer_3.svg",
  MarketingIllustration: "/images/pink images/svg/Layer_4.svg",
};

const Services = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#F3F6FF]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6 md:gap-0">
          <h1 className="text-6xl font-bold">Services</h1>
          <p className="text-lg max-w-md text-gray-600 mt-4 md:mt-0">
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
                  <AnimatedSVG 
                    url={illustrationMap[category.illustration]} 
                    className="w-[300px] h-[300px]"
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
