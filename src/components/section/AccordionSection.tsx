import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordion } from "@/data/AccordionData";
import TitleSeeAll from "../Common/TitleSeeAll";
export default function AccordionSection() {
  return (
    <section className="container pb-36 font-plusJakarta lg:pb-40">
      <div className="flex flex-col gap-12 md:gap-16">
        <TitleSeeAll
          title="🤔• Pertanyaan yang Sering Diajukan"
          subtitle="FREQUENTLY ASKED QUESTION"
          link="#"
        />
        <Accordion type="single" collapsible className="shadow-lg">
          {accordion.map((accordion, index) => (
            <AccordionItem
              value={`item-${index}`}
              className="border border-black/10"
              key={index}
            >
              <AccordionTrigger className="px-4 text-left sm:px-6">
                {accordion.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 leading-[1.8] sm:px-6">
                {accordion.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
