import React from 'react';
import Image from 'next/image';

interface TradingLevelIconProps {
  level: 'newbie' | 'climbing' | 'ninja' | 'monk';
  className?: string;
}

export default function TradingLevelIcon({ level, className = "w-8 h-8" }: TradingLevelIconProps) {
  const iconMap = {
    newbie: '/newbie.png',
    climbing: '/climbing.png',
    ninja: '/ninja.png',
    monk: '/monk.png'
  };

  return (
    <Image
      src={iconMap[level]}
      alt={`${level} level icon`}
      width={32}
      height={32}
      className={className}
      style={{ width: 'auto', height: '32px' }}
    />
  );
} 