import React, { useState } from 'react';

type QuestionProps = {
  question: string;
  answer: string;
};

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold text-gray-800">{question}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ: React.FC = () => {
  const FAQs = [
    {
      question: 'Question 1',
      answer: 'Answer to question 1',
    },
    {
      question: 'Question 2',
      answer: 'Answer to question 2',
    },
  ];

  return (
    <section className="container mx-auto rounded-md bg-white p-8 shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        Frequently Asked Questions
      </h1>
      {FAQs.map((faq, index) => (
        <Question key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default FAQ;
