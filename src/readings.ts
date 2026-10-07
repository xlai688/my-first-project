export type ReadingQuestion = { id: string; prompt: string; options: string[]; answer: number; explanation: string };
export type ReadingPassage = { year: string; paper: '英语一' | '英语二'; text: string; title: string; questions: ReadingQuestion[]; vocabulary: string[] };
/** Import legally sourced exam passages here. Empty until real materials are supplied. */
export const readings: ReadingPassage[] = [];
