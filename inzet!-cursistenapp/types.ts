
export type TeamColor = 'geel' | 'oranje' | 'rood' | 'groen';

export type ResourceType = 'Samenwerking' | 'Tijd' | 'Kennis' | 'Besluitkracht' | 'Materiaal';

export const RESOURCE_COLORS: Record<ResourceType, string> = {
  Samenwerking: '#c89b6c',
  Kennis: '#88be43',
  Besluitkracht: '#ae77af',
  Tijd: '#2fb7c2',
  Materiaal: '#3e67af',
};

export const TEAM_HEX_COLORS: Record<TeamColor, string> = {
  geel: '#e4e022',
  oranje: '#f28b39',
  rood: '#e73546',
  groen: '#63b986',
};

export interface Skill {
  id: string;
  name: string;
  rewards: ResourceType[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
}

export interface TeamStats {
  completedSkills: string[];
  resources: Record<ResourceType, number>;
}

export type AppScreen = 'setup-own' | 'setup-target' | 'dashboard' | 'skills' | 'questions' | 'summary';
