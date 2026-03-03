
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { TeamColor, AppScreen, ResourceType, TeamStats } from './types';
import { SKILLS, ALL_QUESTIONS } from './constants';
import TeamSelection from './components/TeamSelection';
import Dashboard from './components/Dashboard';
import SkillsAssessment from './components/SkillsAssessment';
import QuestionQuiz from './components/QuestionQuiz';
import Summary from './components/Summary';

const STORAGE_KEY = 'bhv-land-state';

const emptyResources = (): Record<ResourceType, number> => ({
  Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0,
});

const defaultTeamsStats = (): Record<TeamColor, TeamStats> => ({
  geel: { completedSkills: [], usedQuestionIds: [], resources: emptyResources() },
  oranje: { completedSkills: [], usedQuestionIds: [], resources: emptyResources() },
  rood: { completedSkills: [], usedQuestionIds: [], resources: emptyResources() },
  groen: { completedSkills: [], usedQuestionIds: [], resources: emptyResources() },
});

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore corrupt data */ }
  return null;
}

const saved = loadState();

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(saved?.currentScreen ?? 'setup-own');
  const [ownTeam, setOwnTeam] = useState<TeamColor | null>(saved?.ownTeam ?? null);
  const [targetTeam, setTargetTeam] = useState<TeamColor | null>(saved?.targetTeam ?? null);
  const [hasCompletedSkillThisRound, setHasCompletedSkillThisRound] = useState(saved?.hasCompletedSkillThisRound ?? false);
  const [teamsStats, setTeamsStats] = useState<Record<TeamColor, TeamStats>>(saved?.teamsStats ?? defaultTeamsStats());
  const [roundResources, setRoundResources] = useState<Record<ResourceType, number>>(saved?.roundResources ?? emptyResources());
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  // Persist state to localStorage on every change
  useEffect(() => {
    const state = { currentScreen, ownTeam, targetTeam, hasCompletedSkillThisRound, teamsStats, roundResources };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* storage full */ }
  }, [currentScreen, ownTeam, targetTeam, hasCompletedSkillThisRound, teamsStats, roundResources]);

  // Online/offline detection
  useEffect(() => {
    const goOffline = () => setIsOffline(true);
    const goOnline = () => setIsOffline(false);
    window.addEventListener('offline', goOffline);
    window.addEventListener('online', goOnline);
    return () => { window.removeEventListener('offline', goOffline); window.removeEventListener('online', goOnline); };
  }, []);

  const handleResetAll = () => {
    setCurrentScreen('setup-own');
    setOwnTeam(null);
    setTargetTeam(null);
    setHasCompletedSkillThisRound(false);
    setTeamsStats(defaultTeamsStats());
    setRoundResources(emptyResources());
    localStorage.removeItem(STORAGE_KEY);
  };

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

  const markQuestionUsed = useCallback((questionId: string) => {
    if (!targetTeam) return;
    setTeamsStats(prev => {
      const teamStats = prev[targetTeam];
      return {
        ...prev,
        [targetTeam]: {
          ...teamStats,
          usedQuestionIds: [...teamStats.usedQuestionIds, questionId]
        }
      };
    });
  }, [targetTeam]);

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

  return (
    <div className="min-h-screen flex flex-col max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto bg-white shadow-xl overflow-x-hidden">
      {isOffline && (
        <div className="bg-amber-500 text-white text-center text-sm font-semibold py-1 px-4">
          Offline modus — Je voortgang wordt lokaal opgeslagen
        </div>
      )}
      <header className="bg-[#002b47] text-white p-4 shadow-md sticky top-0 z-50 flex items-center justify-between">
        <h1 className="font-bold text-xl tracking-tight">INZET</h1>
        <div className="flex items-center space-x-3">
          {ownTeam && (
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase font-semibold opacity-80">Jouw Team</span>
              <div className={`w-4 h-4 rounded-full border border-white ${getTeamBgColor(ownTeam)}`}></div>
            </div>
          )}
          <button
            onClick={handleResetAll}
            className="text-[10px] uppercase font-bold opacity-60 hover:opacity-100 bg-white/10 px-2 py-1 rounded"
            title="Reset alle voortgang"
          >
            Reset
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 pb-20">
        {currentScreen === 'setup-own' && (
          <TeamSelection 
            title="Kies jouw eigen teamkleur" 
            onSelect={handleOwnTeamSelect} 
          />
        )}

        {currentScreen === 'setup-target' && (
          <TeamSelection 
            title={`Welk team ga je beoordelen?`} 
            exclude={ownTeam || undefined} 
            onSelect={handleTargetTeamSelect} 
          />
        )}

        {currentScreen === 'dashboard' && targetTeam && (
          <Dashboard 
            targetTeam={targetTeam}
            hasCompletedSkillThisRound={hasCompletedSkillThisRound}
            onNavigate={setCurrentScreen}
            onFinish={handleFinishRound}
            onSwitchTeam={handleSwitchTeam}
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
            usedQuestionIds={teamsStats[targetTeam].usedQuestionIds}
            onCorrectAnswer={(qId, bonusResource) => {
              markQuestionUsed(qId);
              const resourcesToAdd: ResourceType[] = ['Kennis'];
              if (bonusResource) resourcesToAdd.push(bonusResource);
              updateResources(resourcesToAdd);
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
          />
        )}
      </main>
    </div>
  );
};

const getTeamBgColor = (team: TeamColor) => {
  switch (team) {
    case 'geel': return 'bg-[#e4e022]';
    case 'oranje': return 'bg-[#f28b39]';
    case 'rood': return 'bg-[#e73546]';
    case 'groen': return 'bg-[#63b986]';
  }
};

export default App;
