import React, { useState, useCallback } from 'react';
import { TeamColor, AppScreen, ResourceType, TeamStats } from './types';
import { SKILLS } from './constants';
import TeamSelection from './components/TeamSelection';
import Dashboard from './components/Dashboard';
import SkillsAssessment from './components/SkillsAssessment';
import QuestionQuiz from './components/QuestionQuiz';
import Summary from './components/Summary';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('setup-own');
  const [ownTeam, setOwnTeam] = useState<TeamColor | null>(null);
  const [targetTeam, setTargetTeam] = useState<TeamColor | null>(null);
  const [hasCompletedSkillThisRound, setHasCompletedSkillThisRound] = useState(false);
  const [globalUsedQuestionIds, setGlobalUsedQuestionIds] = useState<string[]>([]);

  const [teamsStats, setTeamsStats] = useState<Record<TeamColor, TeamStats>>({
    geel: { completedSkills: [], resources: { Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 } },
    oranje: { completedSkills: [], resources: { Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 } },
    rood: { completedSkills: [], resources: { Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 } },
    groen: { completedSkills: [], resources: { Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 } },
  });

  const [roundResources, setRoundResources] = useState<Record<ResourceType, number>>({
    Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0
  });

  const handleOwnTeamSelect = (color: TeamColor) => {
    setOwnTeam(color);
    setCurrentScreen('setup-target');
  };

  const handleTargetTeamSelect = (color: TeamColor) => {
    setTargetTeam(color);
    setRoundResources({ Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 });
    setHasCompletedSkillThisRound(false);
    setCurrentScreen('dashboard');
  };

  const updateResources = useCallback((added: ResourceType[]) => {
    if (!targetTeam) return;

    setRoundResources(prev => {
      const next = { ...prev };
      added.forEach(r => next[r]++);
      return next;
    });

    setTeamsStats(prev => {
      const teamStats = prev[targetTeam];
      const nextResources = { ...teamStats.resources };
      added.forEach(r => nextResources[r]++);
      return {
        ...prev,
        [targetTeam]: {
          ...teamStats,
          resources: nextResources
        }
      };
    });
  }, [targetTeam]);

  const markSkillComplete = useCallback((skillId: string) => {
    if (!targetTeam) return;
    setTeamsStats(prev => {
      const teamStats = prev[targetTeam];
      if (teamStats.completedSkills.includes(skillId)) return prev;
      return {
        ...prev,
        [targetTeam]: {
          ...teamStats,
          completedSkills: [...teamStats.completedSkills, skillId]
        }
      };
    });
    
    setHasCompletedSkillThisRound(true);
    const skill = SKILLS.find(s => s.id === skillId);
    if (skill) {
      updateResources(skill.rewards);
    }
  }, [targetTeam, updateResources]);

  const handleFinishRound = () => {
    setCurrentScreen('summary');
  };

  const handleNextRound = () => {
    setRoundResources({ Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 });
    setHasCompletedSkillThisRound(false);
    setCurrentScreen('dashboard');
  };

  const handleSwitchTeam = () => {
    setCurrentScreen('setup-target');
  };

  const handleFullReset = () => {
    // Geen confirm voor snellere werking
    setOwnTeam(null);
    setTargetTeam(null);
    setHasCompletedSkillThisRound(false);
    setGlobalUsedQuestionIds([]);
    setRoundResources({ Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 });
    setTeamsStats({
      geel: { completedSkills: [], resources: { Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 } },
      oranje: { completedSkills: [], resources: { Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 } },
      rood: { completedSkills: [], resources: { Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 } },
      groen: { completedSkills: [], resources: { Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 } },
    });
    setCurrentScreen('setup-own');
  };

  const getTeamBgColor = (team: TeamColor) => {
    switch (team) {
      case 'geel': return 'bg-[#e4e022]';
      case 'oranje': return 'bg-[#f28b39]';
      case 'rood': return 'bg-[#e73546]';
      case 'groen': return 'bg-[#63b986]';
      default: return 'bg-slate-200';
    }
  };

  return (
    <div className="min-h-screen flex flex-col max-w-lg mx-auto bg-white shadow-xl overflow-x-hidden">
      <header className="bg-[#002b47] text-white p-4 shadow-md sticky top-0 z-50 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {currentScreen !== 'setup-own' && (
            <button 
              onClick={handleFullReset}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-[11px] font-black uppercase tracking-wider border border-white/30 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Reset</span>
            </button>
          )}
          <h1 className="font-black text-xl tracking-tight ml-1">INZET! Cursistenapp</h1>
        </div>
        {ownTeam && (
          <div className="flex items-center space-x-2 bg-black/20 px-2 py-1 rounded-full border border-white/10">
            <span className="text-[9px] uppercase font-black opacity-80">Jij</span>
            <div className={`w-4 h-4 rounded-full border border-white shadow-sm ${getTeamBgColor(ownTeam)}`}></div>
          </div>
        )}
      </header>

      <main className="flex-1 overflow-y-auto p-4 pb-20">
        {currentScreen === 'setup-own' && (
          <TeamSelection 
            title="Welke teamkleur ben je zelf?" 
            onSelect={handleOwnTeamSelect} 
          />
        )}

        {currentScreen === 'setup-target' && (
          <div className="flex flex-col space-y-4">
            <TeamSelection 
              title={`Welk team ga je beoordelen?`} 
              exclude={ownTeam || undefined} 
              onSelect={handleTargetTeamSelect} 
            />
            <button 
              onClick={() => setCurrentScreen('setup-own')}
              className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-[#002b47] transition-colors py-4 text-center active:scale-95"
            >
              ← Wijzig eigen teamkleur
            </button>
          </div>
        )}

        {currentScreen === 'dashboard' && targetTeam && (
          <Dashboard 
            targetTeam={targetTeam}
            hasCompletedSkillThisRound={hasCompletedSkillThisRound}
            onNavigate={setCurrentScreen}
            onFinish={handleFinishRound}
            onSwitchTeam={handleSwitchTeam}
            onFullReset={handleFullReset}
          />
        )}

        {currentScreen === 'skills' && targetTeam && (
          <SkillsAssessment 
            targetTeam={targetTeam}
            completedSkills={teamsStats[targetTeam].completedSkills}
            hasCompletedSkillThisRound={hasCompletedSkillThisRound}
            onSkillComplete={(id) => {
              markSkillComplete(id);
              setCurrentScreen('dashboard');
            }}
            onBack={() => setCurrentScreen('dashboard')}
          />
        )}

        {currentScreen === 'questions' && targetTeam && (
          <QuestionQuiz 
            targetTeam={targetTeam}
            usedQuestionIds={globalUsedQuestionIds}
            onQuestionAnswered={(qId, isCorrect, bonusResource) => {
              setGlobalUsedQuestionIds(prev => [...prev, qId]);
              if (isCorrect) {
                const resourcesToAdd: ResourceType[] = ['Kennis'];
                if (bonusResource) resourcesToAdd.push(bonusResource);
                updateResources(resourcesToAdd);
              }
            }}
            onBack={() => setCurrentScreen('dashboard')}
          />
        )}

        {currentScreen === 'summary' && targetTeam && (
          <Summary 
            targetTeam={targetTeam}
            roundResources={roundResources}
            onNextRound={handleNextRound}
            onSwitchTeam={handleSwitchTeam}
            onFullReset={handleFullReset}
          />
        )}
      </main>
    </div>
  );
};

export default App;