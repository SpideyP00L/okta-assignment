"use client";

import { useState } from "react";

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

  return (
    <AccordionItem>
      <AccordionButton
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <AccordionQuestion>{question}</AccordionQuestion>

        <AccordionIcon aria-hidden="true">
          {isOpen ? "−" : "+"}
        </AccordionIcon>
      </AccordionButton>

      {isOpen && <AccordionAnswer>{answer}</AccordionAnswer>}
    </AccordionItem>
  );
}