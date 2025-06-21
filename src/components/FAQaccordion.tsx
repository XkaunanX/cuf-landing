import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="border-b">
        <AccordionTrigger className="flex justify-between py-4 text-lg font-medium hover:underline">
          Quienes pueden aplicar a la beca
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden text-sm py-4">
          <p>Respuesta a la pregunta sobre la beca.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border-b">
        <AccordionTrigger className="flex justify-between py-4 text-lg font-medium hover:underline">
          Que donaciones aceptamos
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden text-sm py-4">
          <p>Respuesta a la pregunta sobre las donaciones.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border-b">
        <AccordionTrigger className="flex justify-between py-4 text-lg font-medium hover:underline">
          Ubicacion de las casas
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden text-sm py-4">
          <p>Respuesta a la pregunta sobre la ubicacion.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="border-b">
        <AccordionTrigger className="flex justify-between py-4 text-lg font-medium hover:underline">
          Horarios de atencion
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden text-sm py-4">
          <p>Respuesta a la pregunta sobre los horarios de atencion.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQAccordion;
