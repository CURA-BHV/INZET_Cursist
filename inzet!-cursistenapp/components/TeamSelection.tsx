
import React from 'react';
import { TeamColor } from '../types';

interface Props {
  title: string;
  onSelect: (color: TeamColor) => void;
  exclude?: TeamColor;
}

const teams: { color: TeamColor; label: string; bg: string; text: string }[] = [
  { color: 'geel', label: 'Geel', bg: 'bg-[#e4e022]', text: 'text-slate-900' },
  { color: 'oranje', label: 'Oranje', bg: 'bg-[#f28b39]', text: 'text-white' },
  { color: 'rood', label: 'Rood', bg: 'bg-[#e73546]', text: 'text-white' },
  { color: 'groen', label: 'Groen', bg: 'bg-[#63b986]', text: 'text-white' },
];

const TeamSelection: React.FC<Props> = ({ title, onSelect, exclude }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h2 className="text-2xl font-bold mb-8 text-slate-800 text-center">{title}</h2>
      <div className="grid grid-cols-2 gap-4 w-full">
        {teams.map((team) => {
          const isDisabled = team.color === exclude;
          return (
            <button
              key={team.color}
              disabled={isDisabled}
              onClick={() => onSelect(team.color)}
              className={`
                h-40 rounded-2xl flex flex-col items-center justify-center p-4 transition-all
                ${team.bg} ${team.text} shadow-lg
                ${isDisabled ? 'opacity-20 cursor-not-allowed grayscale' : 'hover:scale-105 active:scale-95 cursor-pointer'}
              `}
            >
              <span className="text-xl font-bold">{team.label}</span>
              {isDisabled && <span className="text-[10px] mt-2 uppercase font-semibold">Bezet</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TeamSelection;
