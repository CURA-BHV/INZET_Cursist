
import React, { useState } from 'react';
import { TeamColor, Skill } from '../types';
import { SKILLS } from '../constants';

interface Props {
  targetTeam: TeamColor;
  completedSkills: string[];
  hasCompletedSkillThisRound: boolean;
  onSkillComplete: (id: string) => void;
  onSkillReset: (id: string) => void;
  onBack: () => void;
}

const SkillsAssessment: React.FC<Props> = ({ targetTeam, completedSkills, hasCompletedSkillThisRound, onSkillComplete, onSkillReset, onBack }) => {
  const [viewingTaskCard, setViewingTaskCard] = useState<Skill | null>(null);

  const completeSkill = (skillId: string) => {
    if (completedSkills.includes(skillId) || hasCompletedSkillThisRound) return;
    onSkillComplete(skillId);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center space-x-4">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-slate-800">Vaardigheden</h2>
      </div>

      {hasCompletedSkillThisRound && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-2">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700 font-medium">
                Je hebt deze ronde al een vaardigheid afgerond.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col space-y-4">
        {SKILLS.map((skill) => {
          const isDone = completedSkills.includes(skill.id);
          const isLocked = !isDone && hasCompletedSkillThisRound;

          return (
            <div 
              key={skill.id} 
              className={`p-5 border-2 rounded-2xl transition-all ${
                isDone ? 'bg-green-50 border-green-200' : isLocked ? 'bg-slate-50 border-slate-100 opacity-50 grayscale' : 'bg-white border-slate-100 shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={`font-black text-lg ${isDone ? 'text-green-800' : 'text-slate-800'}`}>{skill.name}</h3>
                  <div className="flex items-center space-x-3 mt-1 text-xs uppercase tracking-wider font-bold">
                    <p className="text-slate-500">
                      Beloning: <span className="text-slate-700">{skill.rewards.join(' + ')}</span>
                    </p>
                    {skill.taskCard && (
                      <button 
                        onClick={() => setViewingTaskCard(skill)}
                        className="text-blue-600 border-b border-blue-600 hover:text-blue-800 hover:border-blue-800 transition-colors"
                      >
                        Bekijk taakkaart
                      </button>
                    )}
                  </div>
                </div>
                {isDone && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">Afgerond</span>
                )}
                {isLocked && (
                  <span className="text-slate-400 text-[10px] font-black uppercase italic">Vergrendeld</span>
                )}
              </div>

              {!isDone && (
                <button
                  disabled={isLocked}
                  onClick={() => completeSkill(skill.id)}
                  className={`
                    w-full py-4 rounded-xl border-2 font-bold text-sm transition-all
                    ${isLocked 
                      ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-white border-blue-500 text-blue-600 hover:bg-blue-50 active:scale-[0.98] shadow-sm'}
                  `}
                >
                  Alle deelnemers hebben de vaardigheden correct uitgevoerd
                </button>
              )}
              
              {isDone && (
                <div className="flex flex-col space-y-2 mt-2">
                  <div className="w-full py-4 rounded-xl bg-green-100 border-2 border-green-500 text-green-700 font-bold text-sm text-center flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vaardigheid behaald</span>
                  </div>
                  <button
                    onClick={() => onSkillReset(skill.id)}
                    className="text-xs font-bold text-red-500 hover:text-red-700 p-2 uppercase tracking-tight flex items-center justify-center space-x-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>Deze vaardigheid resetten</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Task Card Modal */}
      {viewingTaskCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#002b47]/80 backdrop-blur-sm"
            onClick={() => setViewingTaskCard(null)}
          ></div>
          <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[80vh]">
            <div className="bg-[#002b47] text-white p-6">
              <h3 className="text-xl font-black">{viewingTaskCard.name}</h3>
              <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mt-1">Stappenplan / Taakkaart</p>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <ul className="space-y-4">
                {(() => {
                  let stepCount = 0;
                  return viewingTaskCard.taskCard?.map((step, idx) => {
                    const isHeader = step.startsWith('---');
                    if (isHeader) {
                      stepCount = 0; // Reset counter for the next section
                      return (
                        <li key={idx} className="pt-4 first:pt-0 pb-1 border-b border-slate-100">
                          <span className="text-[#002b47] text-[10px] font-black uppercase tracking-[0.2em]">
                            {step.replace(/-/g, '').trim()}
                          </span>
                        </li>
                      );
                    }
                    stepCount++;
                    return (
                      <li key={idx} className="flex space-x-4">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-[10px] font-black">
                          {stepCount}
                        </span>
                        <span className="text-slate-700 text-sm leading-relaxed font-medium">
                          {step}
                        </span>
                      </li>
                    );
                  });
                })()}
              </ul>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <button 
                onClick={() => setViewingTaskCard(null)}
                className="w-full bg-[#002b47] text-white py-3 rounded-xl font-black text-sm active:scale-95 transition-all"
              >
                Sluiten
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsAssessment;
