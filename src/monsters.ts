export type Monster={id:string;name:string;icon:string;maxHp:number;tier:number};
const pool:Monster[][]=[
 [{id:'slime',name:'词汇史莱姆',icon:'🟢',maxHp:100,tier:1},{id:'imp',name:'单词小妖',icon:'🟣',maxHp:100,tier:1},{id:'bookworm',name:'迷糊书虫',icon:'🐛',maxHp:100,tier:1}],
 [{id:'grammar',name:'语法守卫',icon:'🛡️',maxHp:125,tier:2},{id:'mist',name:'阅读迷雾兽',icon:'🌫️',maxHp:125,tier:2},{id:'keeper',name:'知识守护者',icon:'🦉',maxHp:125,tier:2}],
 [{id:'lord',name:'词汇魔王',icon:'👹',maxHp:150,tier:3},{id:'exam',name:'真题守卫者',icon:'🐲',maxHp:150,tier:3}]
];
export function nextMonster(campLevel:number,towerLevel:number,previous?:string){const tier=Math.min(3,Math.max(1,Math.ceil(Math.max(campLevel,towerLevel)/4)));const choices=pool[tier-1].filter(m=>m.id!==previous);return {...choices[Math.floor(Math.random()*choices.length)],maxHp:choices[0].maxHp+(Math.max(campLevel,towerLevel)-1)*5};}
export function monsterById(id:string){for(const tier of pool){const found=tier.find(m=>m.id===id);if(found)return found;}return undefined;}
