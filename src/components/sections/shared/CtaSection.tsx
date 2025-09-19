import { Button } from "@/components/ui/Button";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="bg-brand-primary py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Have a project in mind?</h2>
        <p className="text-lg mb-8">Let&apos;s build something amazing together.</p>
        <Button variant="secondary" size="lg" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
