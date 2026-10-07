import dataset from './data/gaokao_words.json';
export type Word = { en:string; zh:string; sentence:string; partOfSpeech:string; meaning:string; rank:number; frequency:number; alternateSpellings:string|null; category:string|null; subcategory:string|null; phonetic?:string; notes?:string };
export const words:Word[] = dataset.words.map((row,index)=>({en:row.en,zh:row.meaning,sentence:'',partOfSpeech:'',meaning:row.meaning,rank:index+1,frequency:0,alternateSpellings:null,category:null,subcategory:null,phonetic:row.phonetic,notes:row.notes}));
