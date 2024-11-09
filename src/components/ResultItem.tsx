import React from 'react';
import { Check, X } from 'lucide-react';
import { toArabicNumeral } from '../utils/numbers';

interface ResultItemProps {
  num1: number;
  num2: number;
  userAnswer: string;
  isCorrect?: boolean;
}

export function ResultItem({ num1, num2, userAnswer, isCorrect }: ResultItemProps) {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg" dir="rtl">
      <div className="flex items-center justify-center gap-2 text-lg flex-grow">
        <span>{toArabicNumeral(num1)}</span>
        <span>×</span>
        <span>{toArabicNumeral(num2)}</span>
        <span>=</span>
        <span>{toArabicNumeral(userAnswer)}</span>
      </div>
      <div className="flex items-center gap-3">
        {isCorrect ? (
          <Check className="text-green-500 w-6 h-6" />
        ) : (
          <>
            <X className="text-red-500 w-6 h-6" />
            <span className="text-red-600">
              ({toArabicNumeral(num1 * num2)})
            </span>
          </>
        )}
      </div>
    </div>
  );
}