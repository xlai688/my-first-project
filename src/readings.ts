import dataset from './data/readings.json';
const source = dataset as any;
export type ReadingQuestion = { id:string; prompt:string; options:{label:string;text:string}[]; answer:null|string; explanation:null|string; answerStatus:string };
export type ReadingPassage = { year:string; paper:'英语一'; section:string; text:string; article:string; questions:ReadingQuestion[]; keyVocabulary:string[]; parseStatus:string; sourceFile:string };
export const readings:ReadingPassage[] = source.readings.flatMap((year:any)=>year.texts.map((text:any)=>({...text,year:year.year,paper:year.paper,section:year.section,sourceFile:year.sourceFile})));
