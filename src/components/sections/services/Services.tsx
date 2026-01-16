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
    <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-[#F3F6FF]">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16 gap-4 md:gap-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Services</h1>
          <p className="text-base sm:text-lg max-w-md text-gray-600 mt-2 md:mt-0">
            You feel like your brand is empty and doesn&apos;t have a soul ! just a pretty facade with nothing to stand out ? don&apos;t worry, because we got your back.
          </p>
        </div>
        
        {/* Service Categories - Card Based Layout */}
        <div className="space-y-8 sm:space-y-12 md:space-y-24">
          {serviceData.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-0 md:bg-transparent shadow-lg md:shadow-none"
            >
              {/* Mobile/Tablet: Card Layout | Desktop: Original Grid */}
              <div className="md:grid md:grid-cols-3 md:gap-8 md:items-start">
                
                {/* Category Title */}
                <div className="md:col-span-1 mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <div className="w-1 h-8 bg-gradient-to-b from-pink-400 to-orange-400 rounded-full md:hidden"></div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{category.category}</h2>
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="md:col-span-2 md:grid md:grid-cols-2 md:gap-8 md:items-start">
                  
                  {/* Mobile: Illustration floating on top right */}
                  <div className="float-right ml-4 mb-2 md:hidden">
                    <AnimatedSVG 
                      url={illustrationMap[category.illustration]} 
                      className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px]"
                    />
                  </div>
                  
                  {/* Service Items */}
                  <div className="md:order-1">
                    {category.services.map((service, serviceIndex) => (
                      <div 
                        key={serviceIndex} 
                        className="mb-5 sm:mb-6 pl-0 md:pl-0"
                      >
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Desktop: Illustration */}
                  <div className="hidden md:flex items-center justify-center md:order-2">
                    <AnimatedSVG 
                      url={illustrationMap[category.illustration]} 
                      className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]"
                    />
                  </div>
                  
                  {/* Clear float */}
                  <div className="clear-both md:hidden"></div>
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
