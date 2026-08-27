import { FAQItem } from "./FAQItem";

import {
  AccordionGroup,
  FAQHeading,
  FAQInner,
  FAQIntro,
  FAQSection,
  FAQSubcopy,
} from "./faq.styles";

const faqItems = [
  {
    question: "Temporibus autem quibusdam et aut officiis debitis?",
    answer:
      "Aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis.",
  },
  {
    question: "Repudiandae sint et molestiae non recusandae?",
    answer:
      "Aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  },
  {
    question: "Itaque earum rerum hic tenetur a sapiente delectus?",
    answer:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis.",
  },
];

export function FAQ() {
  return (
    <FAQSection>
      <FAQInner>
        <FAQIntro>
          <FAQHeading>Frequently asked questions</FAQHeading>

          <FAQSubcopy>
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut
            reiciendis voluptatibus maiores alias consequatur aut perferendis.
          </FAQSubcopy>
        </FAQIntro>

        <AccordionGroup>
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              defaultOpen={index === 0}
            />
          ))}
        </AccordionGroup>
      </FAQInner>
    </FAQSection>
  );
}