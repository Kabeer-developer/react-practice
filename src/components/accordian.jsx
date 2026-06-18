import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is React?",
      answer: "A JavaScript library for building UIs."
    },
    {
      question: "What is JSX?",
      answer: "A syntax extension for JavaScript."
    },
    {
      question: "What is a component?",
      answer: "A reusable piece of UI."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
     {faqs.map((faq,index)=> {
      return <div key={index}>
        <button onClick={()=> setOpenIndex(openIndex===index ? null : index)}>{faq.question}</button>
        {openIndex === index && (
          <p>{faq.answer}</p>
        )}
      </div>
     })}
    </div>
  );
}