import React, { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import { QuizQuestion } from './components/QuizQuestion';
import { ResultItem } from './components/ResultItem';
import { ScoreCard } from './components/ScoreCard';

interface Question {
  num1: number;
  num2: number;
  userAnswer: string;
  isCorrect?: boolean;
}

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState<'quiz' | 'results'>('quiz');
  const [score, setScore] = useState(0);

  const generateQuestions = () => {
    const newQuestions: Question[] = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        newQuestions.push({ num1: i, num2: j, userAnswer: '' });
      }
    }
    return newQuestions.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setQuestions(generateQuestions());
  }, []);

  const handleSubmit = () => {
    const gradedQuestions = questions.map(q => ({
      ...q,
      isCorrect: parseInt(q.userAnswer) === q.num1 * q.num2
    }));
    setQuestions(gradedQuestions);
    const correctAnswers = gradedQuestions.filter(q => q.isCorrect).length;
    setScore(correctAnswers);
    setCurrentStep('results');
  };

  const resetQuiz = () => {
    setQuestions(generateQuestions());
    setCurrentStep('quiz');
    setScore(0);
  };

  const handleAnswerChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index].userAnswer = value;
    setQuestions(newQuestions);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">اختبار جداول الضرب</h1>
            <p className="text-gray-600">حل ١٠٠ تمرين في جداول الضرب</p>
          </div>

          {currentStep === 'quiz' ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {questions.map((q, idx) => (
                  <QuizQuestion
                    key={idx}
                    num1={q.num1}
                    num2={q.num2}
                    userAnswer={q.userAnswer}
                    onChange={(value) => handleAnswerChange(idx, value)}
                  />
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold"
                >
                  تصحيح الاختبار
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <ScoreCard score={score} />

              <div className="space-y-4">
                {questions.map((q, idx) => (
                  <ResultItem key={idx} {...q} />
                ))}
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={resetQuiz}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold flex items-center gap-2 mx-auto"
                >
                  <RotateCcw className="w-5 h-5" />
                  إعادة الاختبار
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;