"use client";

import { useId, useState } from "react";

import {
  AccordionAnswer,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionQuestion,
} from "./faq.styles";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <AccordionItem>
      <AccordionButton
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <AccordionQuestion>{question}</AccordionQuestion>

        <AccordionIcon aria-hidden="true">
          {isOpen ? "−" : "+"}
        </AccordionIcon>
      </AccordionButton>

      {isOpen && (
        <AccordionAnswer
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
        >
          {answer}
        </AccordionAnswer>
      )}
    </AccordionItem>
  );
}