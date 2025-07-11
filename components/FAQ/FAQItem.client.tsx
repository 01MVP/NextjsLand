"use client"

import type { TypeFAQ } from '@/utils/types';
import React, { useState } from 'react'

export default function FAQItem({ answer, id, question }: Omit<TypeFAQ, 'key'> & { id: number }) {
  // State to keep track of which FAQ is open
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Function to toggle FAQ open/close
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === id ? null : index);
  };

  return (
    <div
      className="relative w-full border-b border-slate-200 dark:border-slate-800 py-6"
    >
      <div className="max-w-3xl">
        <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100 pr-8">{question}</h2>
        {openFAQ === id && (
          <p className="font-inter mt-3 text-base text-slate-600 dark:text-slate-400">
            {answer}
          </p>
        )}
      </div>
      <button
        type="button"
        className="absolute right-0 top-6 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
        onClick={() => toggleFAQ(id)}
        aria-label={`Toggle answer for: ${question}`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${openFAQ === id ? 'rotate-45' : ''}`}
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      </button>
    </div>
  )
}

