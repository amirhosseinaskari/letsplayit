import { answersArray } from './QA';

export function CalculateResult(userAnswers: string[]) {
  let count: number = 0;
  for (let i = 0; i < 10; i++) {
    if (userAnswers[i] === answersArray[i]) {
      count += 1;
    }
  }
  return count;
}
