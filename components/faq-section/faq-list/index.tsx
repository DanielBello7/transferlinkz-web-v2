"use client";

import { useState } from "react";
import { FaqItem } from "./faq-item";

type FaqListProps = {
  items: { question: string; answer: string }[];
};

export function FaqList({ items }: FaqListProps) {
  // One question open at a time; none open to start, as in the design
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((faq, index) => (
        <FaqItem
          key={faq.question}
          id={`faq-${index}`}
          question={faq.question}
          answer={faq.answer}
          open={openIndex === index}
          delay={Math.min(index, 7) * 60}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
