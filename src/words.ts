import data from './data/netem_full_list.json';
/** Adapted from exam-data/NETEMVocabulary; data licensed CC BY-NC-SA 4.0. */
export type Word = { en:string; zh:string; sentence:string; partOfSpeech:string; meaning:string; rank:number; frequency:number; alternateSpellings:string|null; category:string|null; subcategory:string|null };
export const words:Word[] = data['5530考研词汇词频排序表'].map(row=>({en:row['单词'],zh:row['释义'],sentence:'',partOfSpeech:'',meaning:row['释义'],rank:row['序号'],frequency:row['词频'],alternateSpellings:row['其他拼写'],category:row['分类'],subcategory:row['子分类']}));
