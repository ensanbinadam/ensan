import React from 'react';
import { Trophy } from 'lucide-react';
import { toArabicNumeral } from '../utils/numbers';

interface ScoreCardProps {
  score: number;
}

export function ScoreCard({ score }: ScoreCardProps) {
  const getGrade = (score: number) => {
    if (score >= 90) return 'ممتاز';
    if (score >= 80) return 'جيد جداً';
    if (score >= 70) return 'جيد';
    if (score >= 60) return 'مقبول';
    return 'يحتاج إلى تحسين';
  };

  return (
    <div className="text-center bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl">
      <Trophy className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">النتيجة النهائية</h2>
      <div className="text-4xl font-bold text-indigo-600 mb-2">
        {toArabicNumeral(score)}/١٠٠
      </div>
      <div className="text-xl text-gray-700">التقدير: {getGrade(score)}</div>
    </div>
  );
}