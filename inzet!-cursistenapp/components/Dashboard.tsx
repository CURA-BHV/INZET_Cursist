import React from 'react';
import { TeamColor, AppScreen } from '../types';

interface Props {
  targetTeam: TeamColor;
  hasCompletedSkillThisRound: boolean;
  onNavigate: (screen: AppScreen) => void;
  onFinish: () => void;
  onSwitchTeam: () => void;
  onFullReset: () => void;
}

const Dashboard: React.FC<Props> = ({ targetTeam, hasCompletedSkillThisRound, onNavigate, onFinish, onSwitchTeam, onFullReset }) => {
  return (
    <div className="flex flex-col space-y-6 py-4">
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Je beoordeelt nu:</p>
            <h2 className="text-2xl font-black capitalize text-slate-900 flex items-center space-x-3">
              <span>Team {targetTeam}</span>
              <div className={`w-4 h-4 rounded-full shadow-inner ${getTeamColorClass(targetTeam)}`}></div>
            </h2>
          </div>
          <button 
            onClick={onSwitchTeam}
            className="text-[10px] font-black text-[#002b47] bg-white border-2 border-[#002b47] px-3 py-2 rounded-xl active:bg-slate-100 transition-all uppercase"
          >
            Wissel Doel
          </button>
        </div>
        
        <div className="pt-3 border-t border-slate-200 mt-2">
          <button 
            onClick={onFullReset}
            className="w-full text-left py-1 text-[11px] font-black text-slate-400 hover:text-red-500 transition-colors uppercase tracking-tight active:scale-95"
          >
            Mijn eigen kleur wijzigen (Volledige Reset) →
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <button
          onClick={() => !hasCompletedSkillThisRound && onNavigate('skills')}
          disabled={hasCompletedSkillThisRound}
          className={`bg-white border-2 p-6 rounded-3xl flex items-center space-x-6 transition-all group shadow-sm ${
            hasCompletedSkillThisRound 
              ? 'opacity-60 grayscale border-green-200 cursor-not-allowed' 
              : 'border-slate-100 hover:border-[#002b47] hover:shadow-md'
          }`}
        >
          <div className={`p-4 rounded-2xl transition-colors flex-shrink-0 ${
            hasCompletedSkillThisRound 
              ? 'bg-green-100 text-green-600' 
              : 'bg-slate-100 group-hover:bg-[#002b47] group-hover:text-white text-slate-600'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-black text-slate-800">
              Vaardigheden {hasCompletedSkillThisRound && '✓'}
            </h3>
            <p className="text-slate-500 text-sm font-medium">
              {hasCompletedSkillThisRound 
                ? 'Afgerond voor deze ronde.' 
                : 'Beoordeel de praktische skills.'}
            </p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('questions')}
          className="bg-white border-2 border-slate-100 p-6 rounded-3xl flex items-center space-x-6 hover:border-blue-500 hover:shadow-md transition-all group shadow-sm"
        >
          <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-black text-slate-800">Kennisvragen</h3>
            <p className="text-slate-500 text-sm font-medium">Test theorie en verdien extra's.</p>
          </div>
        </button>
      </div>

      <div className="mt-8 pt-4">
        <button
          onClick={onFinish}
          className="w-full bg-[#002b47] text-white py-5 rounded-2xl font-black text-xl hover:bg-slate-800 active:scale-95 transition-all shadow-xl"
        >
          Ronde Afronden
        </button>
      </div>
    </div>
  );
};

const getTeamColorClass = (team: TeamColor) => {
  switch (team) {
    case 'geel': return 'bg-[#e4e022]';
    case 'oranje': return 'bg-[#f28b39]';
    case 'rood': return 'bg-[#e73546]';
    case 'groen': return 'bg-[#63b986]';
  }
};

export default Dashboard;