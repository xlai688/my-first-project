import {words,type Word} from './words';
import type {State} from './game';
export type Question={word:Word;type:0;options:Word[]};
export function weight(w:Word,s:State){return 1+(100-(s.mastery[w.en]||0))/20+(!s.wordStats[w.en]?.correct?4:0)+Math.min(10,s.wordStats[w.en]?.incorrect||0)*2+(s.review.includes(w.en)?5:0);}
const tokens=(text:string)=>text.split(/[、；;，,\/]/).map(t=>t.trim()).filter(Boolean);
export function makeQuestion(pool:Word[],s:State):Question {
 let ticket=Math.random()*pool.reduce((sum,w)=>sum+weight(w,s),0);let word=pool[pool.length-1];
 for(const w of pool){ticket-=weight(w,s);if(ticket<0){word=w;break;}}
 const meanings=new Set(tokens(word.zh));const seen=new Set([word.zh]);const candidates=words.filter(w=>w.en!==word.en&&!tokens(w.zh).some(t=>meanings.has(t)));
 const options=[word];
 // Prefer the same semantic category, but exclude identical or overlapping glosses.
 for(const group of [candidates.filter(w=>w.category===word.category),candidates]){
  const shuffled=[...group];for(let i=shuffled.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}
  for(const w of shuffled){if(options.length===4)break;if(!seen.has(w.zh)){options.push(w);seen.add(w.zh);}}
 }
 for(let i=options.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[options[i],options[j]]=[options[j],options[i]];}
 return {word,type:0,options};
}
