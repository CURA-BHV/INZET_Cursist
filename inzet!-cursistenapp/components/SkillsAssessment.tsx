
import React, { useState } from 'react';
import { TeamColor, Skill } from '../types';
import { SKILLS } from '../constants';

interface Props {
  targetTeam: TeamColor;
  completedSkills: string[];
  hasCompletedSkillThisRound: boolean;
  onSkillComplete: (id: string) => void;
  onBack: () => void;
}

const SkillsAssessment: React.FC<Props> = ({ targetTeam, completedSkills, hasCompletedSkillThisRound, onSkillComplete, onBack }) => {
  const [skillProgress, setSkillProgress] = useState<Record<string, boolean[]>>({});

  const toggleStudent = (skillId: string, index: number) => {
    if (completedSkills.includes(skillId) || hasCompletedSkillThisRound) return;

    const current = skillProgress[skillId] || [false, false, false];
    const next = [...current];
    next[index] = !next[index];
    
    setSkillProgress(prev => ({ ...prev, [skillId]: next }));

    if (next.every(v => v === true)) {
      onSkillComplete(skillId);
    }
  };

  const markAll = (skillId: string) => {
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
          const progress = skillProgress[skill.id] || [false, false, false];
          const isLocked = !isDone && hasCompletedSkillThisRound;

          return (
            <div 
              key={skill.id} 
              className={`p-4 border-2 rounded-xl transition-all ${
                isDone ? 'bg-green-50 border-green-200' : isLocked ? 'bg-slate-50 border-slate-100 opacity-50 grayscale' : 'bg-white border-slate-100 shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={`font-bold ${isDone ? 'text-green-800' : 'text-slate-800'}`}>{skill.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Beloning: <span className="font-semibold text-slate-700">{skill.rewards.join(' + ')}</span>
                  </p>
                </div>
                {isDone ? (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">Afgerond</span>
                ) : isLocked ? (
                  <span className="text-slate-400 text-[10px] font-bold uppercase italic">Vergrendeld</span>
                ) : (
                  <button 
                    onClick={() => markAll(skill.id)}
                    className="text-[10px] text-blue-600 font-bold hover:underline uppercase"
                  >
                    Vink alles af
                  </button>
                )}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map(idx => (
                  <button
                    key={idx}
                    disabled={isDone || isLocked}
                    onClick={() => toggleStudent(skill.id, idx)}
                    className={`
                      py-3 rounded-lg border-2 flex flex-col items-center justify-center transition-all
                      ${isDone || progress[idx] 
                        ? 'bg-green-100 border-green-500 text-green-700' 
                        : isLocked 
                          ? 'bg-slate-100 border-slate-200 text-slate-300'
                          : 'bg-white border-slate-200 text-slate-400 active:border-blue-400'}
                    `}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 mb-1 flex items-center justify-center ${isDone || progress[idx] ? 'bg-green-500 border-green-500' : 'border-slate-300'}`}>
                      {(isDone || progress[idx]) && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider">C{idx + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsAssessment;
