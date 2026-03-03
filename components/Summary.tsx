
import React from 'react';
import { TeamColor, ResourceType, TEAM_HEX_COLORS } from '../types';
import ResourceHexagon from './ResourceHexagon';

interface Props {
  targetTeam: TeamColor;
  roundResources: Record<ResourceType, number>;
  onNextRound: () => void;
  onSwitchTeam: () => void;
  onFullReset: () => void;
}

const Summary: React.FC<Props> = ({ targetTeam, roundResources, onNextRound, onSwitchTeam, onFullReset }) => {
  const resourceTypes: ResourceType[] = ['Samenwerking', 'Kennis', 'Besluitkracht', 'Tijd', 'Materiaal'];
  const teamHex = TEAM_HEX_COLORS[targetTeam];

  return (
    <div className="flex flex-col space-y-6 py-2">
      {/* Prominent Team Header */}
      <div 
        className="rounded-3xl p-8 text-center shadow-lg relative overflow-hidden"
        style={{ backgroundColor: teamHex }}
      >
        {/* Decorative background element */}
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-black/10 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <svg className="w-12 h-12" fill="none" stroke={teamHex} viewBox="0 0 24 24" style={{ strokeWidth: 3 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl font-black text-white drop-shadow-sm uppercase tracking-tighter">
            Ronde Voltooid!
          </h2>
          <div className="mt-2 inline-block bg-black/20 px-4 py-1 rounded-full backdrop-blur-sm border border-white/20">
            <p className="text-white font-black text-sm uppercase tracking-widest">
              Team {targetTeam}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-xl border-2" style={{ borderColor: `${teamHex}20` }}>
        <h3 className="font-black text-slate-800 mb-6 flex items-center space-x-2 text-lg uppercase tracking-tight">
          <span className="bg-slate-100 p-2 rounded-lg">🏆</span> 
          <span>Deze ronde verdiend:</span>
        </h3>
        
        <div className="flex flex-col space-y-3">
          {resourceTypes.map((res) => {
            const count = roundResources[res];
            return (
              <div 
                key={res} 
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                  count > 0 ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-50 border-transparent opacity-60'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <ResourceHexagon resource={res} teamColor={targetTeam} size={44} />
                  <span className="font-black text-slate-700 uppercase text-xs tracking-wider">{res}</span>
                </div>
                <div className="flex items-center">
                  <span className={`text-2xl font-black px-2 ${count > 0 ? 'text-green-600' : 'text-slate-300'}`}>
                    +{count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col space-y-3 pt-4">
        <button
          onClick={onNextRound}
          className="w-full bg-[#002b47] text-white py-5 rounded-2xl font-black text-xl active:bg-slate-800 shadow-xl"
        >
          VOLGENDE RONDE
        </button>
        <button
          onClick={onSwitchTeam}
          className="w-full bg-white text-[#002b47] border-2 border-[#002b47] py-4 rounded-2xl font-bold text-lg active:bg-slate-50"
        >
          Ander team beoordelen
        </button>
        
        <div className="pt-4 border-t border-slate-100 mt-4">
          <button
            onClick={onFullReset}
            className="w-full text-red-500 border border-red-100 py-3 rounded-xl font-medium text-sm hover:bg-red-50 transition-colors"
          >
            Volledige Reset (Kies nieuwe eigen kleur)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
