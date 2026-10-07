export const buildings = [
  {id:'camp',name:'单词营',subtitle:'背大纲词汇，积累单词营经验',icon:'📚',color:'#e3a446',x:34,y:48},
  {id:'tower',name:'真题塔',subtitle:'挑战真实英语（一）阅读真题',icon:'📖',color:'#7c9b85',x:68,y:50}
];
export type State={gold:number;xp:number;levels:Record<string,number>;mastery:Record<string,number>;review:string[];records:Record<string,number>;wordStats:Record<string,{correct:number;incorrect:number}>;readingProgress:Record<string,{completed:number;answers:Record<string,string>}>;towerXp:number};
export const initial:State={gold:200,xp:0,levels:Object.fromEntries(buildings.map(b=>[b.id,1])),mastery:{},review:[],records:{},wordStats:{},readingProgress:{},towerXp:0};
export const levelOf=(xp:number)=>Math.floor(xp/100)+1;
export const costOf=(level:number)=>level*80;
export function dateKey(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
export function streak(records:State['records']){let n=0;const d=new Date();if(!records[dateKey(d)])d.setDate(d.getDate()-1);while(records[dateKey(d)]){n++;d.setDate(d.getDate()-1);}return n;}
export function answer(s:State,word:string,correct:boolean):State{const key=dateKey();return {...s,gold:s.gold+(correct?20:0),xp:s.xp+(correct?15:0),mastery:{...s.mastery,[word]:Math.max(0,Math.min(100,(s.mastery[word]||0)+(correct?20:-10)))},review:correct?s.review.filter(w=>w!==word):Array.from(new Set([...s.review,word])),records:{...s.records,[key]:(s.records[key]||0)+1},wordStats:{...s.wordStats,[word]:{correct:(s.wordStats[word]?.correct||0)+(correct?1:0),incorrect:(s.wordStats[word]?.incorrect||0)+(correct?0:1)}}};}
export function upgrade(s:State,id:string):State{const lv=s.levels[id];if(!lv||s.gold<costOf(lv)||lv>=10)return s;return {...s,gold:s.gold-costOf(lv),levels:{...s.levels,[id]:lv+1}};}
export function load():State{try{const raw=localStorage.getItem('word-tribe-v1');if(!raw)return structuredClone(initial);const s=JSON.parse(raw);if(!Number.isFinite(s.gold)||s.gold<0||!Number.isFinite(s.xp)||s.xp<0||!s.levels||!s.mastery||!Array.isArray(s.review)||!s.records)throw Error();return {...s,wordStats:s.wordStats||{},readingProgress:s.readingProgress||{},towerXp:Number(s.towerXp)||0,levels:Object.fromEntries(buildings.map(b=>[b.id,Math.max(1,Math.min(10,Number(s.levels[b.id])||1))]))};}catch{return structuredClone(initial);}}
