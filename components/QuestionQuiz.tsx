
import React, { useState, useMemo } from 'react';
import { TeamColor, ResourceType, Question } from '../types';
import { ALL_QUESTIONS } from '../constants';

interface Props {
  targetTeam: TeamColor;
  usedQuestionIds: string[];
  onCorrectAnswer: (id: string, bonus: ResourceType | null) => void;
  onBack: () => void;
}

const QuestionQuiz: React.FC<Props> = ({ targetTeam, usedQuestionIds, onCorrectAnswer, onBack }) => {
  const [step, setStep] = useState<'count' | 'quiz' | 'reward'>('count');
  const [questionCount, setQuestionCount] = useState<number>(3);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  
  const availablePool = useMemo(() => 
    ALL_QUESTIONS.filter(q => !usedQuestionIds.includes(q.id)), 
    [usedQuestionIds]
  );

  const activeQuestions = useMemo(() => {
    const shuffled = [...availablePool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(questionCount, shuffled.length));
  }, [availablePool, questionCount]);

  const handleStart = () => {
    if (activeQuestions.length === 0) {
      alert("Geen onbeantwoorde vragen meer over!");
      onBack();
      return;
    }
    setStep('quiz');
  };

  const handleOptionClick = (idx: number) => {
    if (isLocked) return;
    setSelectedOption(idx);
    setIsLocked(true);
  };

  const handleNext = () => {
    const currentQ = activeQuestions[currentIdx];
    const isCorrect = selectedOption === currentQ.correctIndex;

    if (isCorrect) {
      setStep('reward');
    } else {
      goToNextOrFinish();
    }
  };

  const goToNextOrFinish = () => {
    if (currentIdx < activeQuestions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsLocked(false);
      setStep('quiz');
    } else {
      onBack();
    }
  };

  const handleRewardSelect = (res: ResourceType) => {
    const currentQ = activeQuestions[currentIdx];
    onCorrectAnswer(currentQ.id, res);
    goToNextOrFinish();
  };

  if (step === 'count') {
    return (
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-lg text-[#002b47]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold text-slate-800">Instellingen</h2>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
          <label className="block text-[#002b47] font-bold mb-4">Aantal vragen:</label>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setQuestionCount(Math.max(1, questionCount - 1))}
              className="w-12 h-12 rounded-full bg-[#002b47] text-white flex items-center justify-center font-bold text-xl shadow-md active:scale-95"
            > - </button>
            <span className="text-3xl font-bold text-[#002b47]">{questionCount}</span>
            <button 
              onClick={() => setQuestionCount(Math.min(availablePool.length, questionCount + 1))}
              className="w-12 h-12 rounded-full bg-[#002b47] text-white flex items-center justify-center font-bold text-xl shadow-md active:scale-95"
            > + </button>
          </div>
          <p className="mt-4 text-sm text-slate-500 italic">{availablePool.length} vragen beschikbaar.</p>
        </div>

        <button 
          onClick={handleStart}
          className="w-full bg-[#002b47] text-white py-4 rounded-xl font-bold text-lg shadow-lg active:bg-slate-800"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (step === 'reward') {
    return (
      <div className="flex flex-col space-y-6 text-center py-8">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
           <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
           </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900">Correct!</h2>
        <p className="text-slate-600 px-4">Je verdient <span className="font-bold text-[#002b47]">Kennis</span>. Kies een tweede bonus:</p>
        
        <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4">
          {(['Samenwerking', 'Tijd', 'Besluitkracht', 'Materiaal'] as ResourceType[]).map(res => (
            <button
              key={res}
              onClick={() => handleRewardSelect(res)}
              className="p-4 bg-white border-2 border-slate-200 rounded-xl font-bold active:border-[#002b47] active:bg-slate-50 transition-all text-slate-800"
            >
              {res}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const currentQ = activeQuestions[currentIdx];
  const isCorrect = selectedOption === currentQ.correctIndex;

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-slate-500">Vraag {currentIdx + 1} / {activeQuestions.length}</span>
        <button onClick={onBack} className="text-red-500 font-bold text-sm">Stoppen</button>
      </div>

      <div className="bg-white border-2 border-slate-100 p-6 rounded-2xl shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-6 leading-tight">{currentQ.text}</h3>
        <div className="flex flex-col space-y-3">
          {currentQ.options.map((opt, i) => {
            let stateClass = "bg-white border-slate-200 text-slate-700";
            if (isLocked) {
              if (i === currentQ.correctIndex) stateClass = "bg-green-100 border-green-500 text-green-800 font-bold";
              else if (i === selectedOption) stateClass = "bg-red-100 border-red-500 text-red-800";
              else stateClass = "bg-slate-50 border-slate-100 text-slate-400";
            } else if (selectedOption === i) {
              stateClass = "bg-slate-100 border-[#002b47] text-[#002b47]";
            }

            return (
              <button
                key={i}
                disabled={isLocked}
                onClick={() => handleOptionClick(i)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all text-sm ${stateClass}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {isLocked && (
        <div className="flex flex-col space-y-4">
          <p className={`text-center font-bold text-lg ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? 'Helemaal goed!' : 'Helaas, dat is onjuist.'}
          </p>
          <button
            onClick={handleNext}
            className="w-full bg-[#002b47] text-white py-4 rounded-xl font-bold text-lg shadow-lg active:bg-slate-800"
          >
            {currentIdx < activeQuestions.length - 1 ? 'Volgende Vraag' : 'Afronden'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionQuiz;
