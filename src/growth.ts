export const curves={camp:[0,300,1050,2550,5550,10800,19800,33300,53550,82395],tower:[0,40,100,180,280,420,600,840,1160,1600]};
export type BuildingId=keyof typeof curves;
export function growth(id:BuildingId,xp:number){const points=curves[id];let level=1;while(level<10&&xp>=points[level])level++;const floor=points[level-1];const target=level===10?floor:points[level];return {level,current:xp-floor,required:target-floor,remaining:Math.max(0,target-xp),percent:level===10?100:Math.min(100,(xp-floor)/(target-floor)*100)};}
