// src/content/services.ts
import { ServiceCategory } from "@/types";

export const serviceData: ServiceCategory[] = [
  {
    category: "Analysis",
    illustration: "AnalysisIllustration",
    services: [
      { title: "Brand DNA", description: "Comprehensive evaluation of your brand's current positioning and performance." },
      { title: "Brand & Design Benchmark", description: "Comparative analysis of brand and design standards within the industry." },
      { title: "Market Research & Consumer...", description: "In-depth research to understand market dynamics and consumer behaviour." },
    ],
  },
  {
    category: "Brand Strategy",
    illustration: "StrategyIllustration",
    services: [
      { title: "Brand Narrative", description: "Crafting a compelling story that encapsulates your brand's essence." },
      { title: "Brand Architecture", description: "Structuring your brand's portfolio for clarity and strategic alignment." },
      { title: "Brand Voice", description: "Defining the tone and personality of your brand's verbal communication." },
    ],
  },
  {
    category: "Design",
    illustration: "DesignIllustration",
    services: [
        { title: "Naming & Tagline", description: "Creating memorable and impactful brand names and taglines." },
        { title: "Brand Identity & Brand Core", description: "Developing the core of your brand with key elements such as name, logo, symbol, core typography or brand colour palette." },
        { title: "Brand Behavior", description: "Developing the visual system or elements that will express your brand essence and narrative compellingly." },
    ],
  },
    {
    category: "Digital Marketing & Growth Services",
    illustration: "MarketingIllustration",
    services: [
        { title: "Media Buying & Ad Management", description: "Strategically placing and managing paid ads." },
        { title: "Content Marketing Strategy", description: "Creating valuable content to attract and engage your audience." },
        { title: "Analytics & Reporting", description: "Tracking key data to measure success and inform strategy." },
    ],
  },
];