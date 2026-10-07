export type ReadingQuestion = { id: string; prompt: string; options: string[]; answer: number; explanation: string };
export type ReadingPassage = { year: string; paper: '英语一' | '英语二'; text: string; title: string; questions: ReadingQuestion[]; vocabulary: string[]; isPlaceholder: boolean };
// Placeholder content is intentionally marked; replace with legally sourced exam material before publishing as real past papers.
export const readings: ReadingPassage[] = [{
  year: '示例', paper: '英语一', text: 'Text 1', title: '学习与长期成长（示例占位）', isPlaceholder: true,
  vocabulary: ['potential', 'adapt', 'maintain', 'significant'],
  questions: [{id:'demo-1',prompt:'According to the passage, what helps create long-term progress?',options:['Consistent small steps','Avoiding all challenges','Memorizing without context','Waiting for perfect conditions'],answer:0,explanation:'文章强调持续练习和小步积累带来显著进步。'}]
}];
