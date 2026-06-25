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

  const [isVisibleIndex,setIsVisibleIndex] = useState(null);

  return(
    <div>
      {faqs.map((faq,index)=> {
        return <div key={index}>
          <p onClick={()=> setIsVisibleIndex(isVisibleIndex==index?null:index)}>{faq.question}</p>
          <p style={{display: isVisibleIndex==index?"block":"none"}}>{faq.answer}</p>
        </div>
      })}
    </div>
  )
}