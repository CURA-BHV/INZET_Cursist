import React from 'react';
import { ResourceType, TeamColor, RESOURCE_COLORS } from '../types';

interface Props {
  resource: ResourceType;
  teamColor: TeamColor;
  size?: number;
}

const ResourceHexagon: React.FC<Props> = ({ resource, teamColor, size = 60 }) => {
  const bgColor = RESOURCE_COLORS[resource];
  const iconColor = '#ffffff';

  // Simple hexagon path for a 100x100 viewBox
  const hexPath = "M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z";

  const renderIcon = () => {
    const iconProps = {
      className: "w-1/2 h-1/2",
      stroke: iconColor,
      strokeWidth: 2,
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      fill: "none",
    };

    switch (resource) {
      case 'Samenwerking':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'Kennis':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        );
      case 'Besluitkracht':
        return (
          <svg viewBox="0 0 24 24" fill={iconColor} className="w-1/2 h-1/2">
            {/* Massieve hamer-icoon diagonaal geplaatst zoals in de afbeelding */}
            <path d="M21.7 8l-3-3c-.4-.4-1-.4-1.4 0l-1.6 1.6-4.3-4.3C11 1.9 10.3 2 9.7 2.3c-.6.3-1 .8-1.3 1.4L7.1 6.2c-.3.6-.3 1.3 0 1.9L10 11l-8 8c-.6.6-.6 1.5 0 2.1l1.4 1.4c.6.6 1.5.6 2.1 0l8-8 2.9 2.9c.6.3 1.3.3 1.9 0l2.5-1.3c.6-.3 1.1-.7 1.4-1.3.3-.6.4-1.3.1-2l-4.3-4.3 1.6-1.6c.4-.4.4-1 0-1.4z" />
          </svg>
        );
      case 'Tijd':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        );
      case 'Materiaal':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="relative flex items-center justify-center" 
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 100 100" 
        className="absolute inset-0 w-full h-full"
      >
        <path d={hexPath} fill={bgColor} />
      </svg>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {renderIcon()}
      </div>
    </div>
  );
};

export default ResourceHexagon;