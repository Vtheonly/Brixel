import { Button } from "@/components/ui/Button";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#062352] text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          wanna collaborate and work with us<br className="hidden md:inline" /> on your brand together!
        </h2>
        <Button variant="primary" className="bg-[#F84F0E] hover:bg-[#F84F0E]/90">Start a brand</Button>
      </div>
    </section>
  );
};

export default CTA;
