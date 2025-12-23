"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="card">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left flex justify-between items-center py-2"
          >
            <h3 className="text-lg font-semibold text-maroon pr-4">
              {item.question}
            </h3>
            <span
              className={`text-maroon text-2xl font-bold transition-transform ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          {openIndex === index && (
            <div className="pt-4 border-t border-gray-200 mt-4">
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
