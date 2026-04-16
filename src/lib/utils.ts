import type { RankInfo } from './benchmarkData';

export function getInitial(name: string): string {
  return name ? name.charAt(0).toUpperCase() : '?';
}

export function getRankDetails(score: number | undefined, thresholds: Record<string, number>, ranks: RankInfo[]) {
  const realRanks = ranks.filter(r => !r.isSpacer);
  if (score === undefined || score === 0) {
    return { rank: 'Unranked', prevColor: '#fff', nextColor: realRanks[1]?.headerColor || '#fff', percentage: 0 };
  }

  let currentRankIndex = 0;
  for (let i = 0; i < realRanks.length; i++) {
    const val = thresholds[realRanks[i].key];
    if (score >= val) {
      currentRankIndex = i;
    } else {
      break;
    }
  }

  const currentRank = realRanks[currentRankIndex];
  const nextRank = realRanks[currentRankIndex + 1] || currentRank;
  
  const prevThreshold = thresholds[currentRank.key] || 0;
  const nextThreshold = thresholds[nextRank.key] || prevThreshold;

  let progressNum = 0;
  if (currentRankIndex === realRanks.length - 1) {
    progressNum = 100;
  } else if (nextThreshold > prevThreshold) {
    progressNum = ((score - prevThreshold) / (nextThreshold - prevThreshold)) * 100;
  }

  return {
    rank: currentRank.name,
    color: currentRank.headerColor, // Keep for legacy if needed
    prevColor: currentRank.headerColor,
    nextColor: nextRank.headerColor,
    percentage: Math.max(0, Math.min(100, progressNum))
  };
}

export function isLightColor(hex: string): boolean {
  if (!hex || hex === 'transparent') return true;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 140;
}
