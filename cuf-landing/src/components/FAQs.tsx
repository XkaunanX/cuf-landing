import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQAccordion = () => {
  return (
    <section id="faqs" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">Preguntas Frecuentes🤔</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b">
              <AccordionTrigger className="flex justify-between py-4 text-lg font-medium hover:underline">
                ¿Quiénes pueden aplicar a la beca?
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden text-sm py-4">
                <p>Respuesta a la pregunta sobre la beca.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b">
              <AccordionTrigger className="flex justify-between py-4 text-lg font-medium hover:underline">
                ¿Qué Donaciones aceptamos?
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden text-sm py-4">
                <p>Respuesta a la pregunta sobre las donaciones.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b">
              <AccordionTrigger className="flex justify-between py-4 text-lg font-medium hover:underline">
                ¿Ubicación de las casas?
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden text-sm py-4">
                <p>Respuesta a la pregunta sobre la ubicación.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b">
              <AccordionTrigger className="flex justify-between py-4 text-lg font-medium hover:underline">
                ¿Horarios de atención?
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden text-sm py-4">
                <p>Respuesta a la pregunta sobre los horarios de atención.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
