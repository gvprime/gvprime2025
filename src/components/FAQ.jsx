import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "What makes your RAG chatbots different?",
      answer: "Our chatbots combine retrieval and generation for accurate, up-to-date responses using your proprietary data."
    },
    {
      question: "How long does implementation take?",
      answer: "Most projects take 4-8 weeks from discovery to deployment."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide maintenance and optimization packages."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-slate-700">
              <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <h3 className="text-lg font-medium text-gray-200">{faq.question}</h3>
                <ChevronDown className={`transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {activeIndex === index && (
                <div className="pb-4 text-gray-400">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}