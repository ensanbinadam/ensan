import React from 'react';
import { toArabicNumeral } from '../utils/numbers';

interface QuizQuestionProps {
  num1: number;
  num2: number;
  userAnswer: string;
  onChange: (value: string) => void;
}

export function QuizQuestion({ num1, num2, userAnswer, onChange }: QuizQuestionProps) {
  const displayValue = userAnswer ? toArabicNumeral(userAnswer) : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Convert Arabic numerals back to English for internal storage
    const value = e.target.value.replace(/[٠-٩]/g, d => 
      String('٠١٢٣٤٥٦٧٨٩'.indexOf(d))
    );
    onChange(value);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg" dir="rtl">
      <div className="flex items-center justify-center gap-2 mb-3 text-xl font-semibold text-gray-700">
        <span>{toArabicNumeral(num1)}</span>
        <span>×</span>
        <span>{toArabicNumeral(num2)}</span>
        <span>=</span>
      </div>
      <input
        inputMode="numeric"
        pattern="[0-9]*"
        value={displayValue}
        onChange={handleChange}
        className="w-full p-2 border rounded-md text-center text-lg"
        dir="rtl"
        placeholder="اكتب الإجابة"
      />
    </div>
  );
}