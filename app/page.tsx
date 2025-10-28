import { PresentationContainer, Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16, Slide17, Slide18 } from '@/components/slides';

export default function Home() {
  return (
    <PresentationContainer>
      {/* Slide 1: Why LCA matter: 2026 Regulatory Landscape */}
      <Slide1 />

      {/* Slide 2: What is the digital passport: DPP */}
      <Slide2 />

      {/* Slide 3: Digital Product Passport: What Data You'll Need */}
      <Slide3 />

      {/* Slide 4: The four steps of LCA maturity */}
      <Slide4 />

      {/* Slide 5: Step 1: WHAT IS A LCA? */}
      <Slide5 />

      {/* Slide 6: Step 1: LCA - FROM MODULE A TO MODULE D */}
      <Slide6 />

      {/* Slide 7: Step 1: Identifying hotspots - case study */}
      <Slide7 />

      {/* Slide 8: Step 1: Identifying hotspots - case study (aluminum comparison) */}
      <Slide8 />

      {/* Slide 9: 3 ways to present LCA data */}
      <Slide9 />

      {/* Slide 10: Step 2: EPDs */}
      <Slide10 />

      {/* Slide 11: Step 3: ERP-PLM-LCA Integration Ecosystem - For New Products */}
      <Slide11 />

      {/* Slide 12: Step 3: ERP-PLM-LCA Benefits */}
      <Slide12 />

      {/* Slide 13: Step 3: Portfolio Carbon Impact Analysis */}
      <Slide13 />

      {/* Slide 14: Step 3: Portfolio Carbon or Single Score Matrix */}
      <Slide14 />

      {/* Slide 15: Step 4: Sustainability KPIs - Product Performance */}
      <Slide15 />

      {/* Slide 16: Step 4: Sustainability KPIs - Supply Chain & Circularity */}
      <Slide16 />

      {/* Slide 17: Next Steps: From Insight to Action? */}
      <Slide17 />

      {/* Slide 18: Final Contact Slide */}
      <Slide18 />
    </PresentationContainer>
  );
}
