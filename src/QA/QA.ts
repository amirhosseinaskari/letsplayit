export type TQueAnsArray = {
  id: number;
  que: string;
  options: string[];
};

export const QueAnsArray: TQueAnsArray[] = [
  {
    id: 1,
    que: 'What comes after letter T?',
    options: ['R', 'S', 'U', 'W'],
  },
  {
    id: 2,
    que: 'Sister of Alia Bhatt?',
    options: ['Mahek Bhatt', 'Natasha Bhat', 'Shaheen Bhatt', 'Samia Bhatt'],
  },
  {
    id: 3,
    que: 'What comes before letter W?',
    options: ['R', 'S', 'V', 'P'],
  },
  {
    id: 4,
    que: 'Who is shorter?',
    options: ['Cat', 'Elephant', 'Horse', 'Rabbit'],
  },
  {
    id: 5,
    que: 'Who is taller?',
    options: ['Bear', 'Dog', 'Rat', 'Zebra'],
  },
  {
    id: 6,
    que: 'What is (2 + 2 x 2 - 2 / 2) ?',
    options: ['5', '2', '4', '1'],
  },
  {
    id: 7,
    que: 'We lost Kobe Bryant in a _______ crash.',
    options: ['Plane', 'Private Jet', 'Car', 'Helicopter'],
  },
  {
    id: 8,
    que: "Who directed the movie 'Chakh De India'?",
    options: ['Kabir Khan', 'Shimit Amin', 'Aditya Chopra', 'Zoya Akhtar'],
  },
  {
    id: 9,
    que: 'Which movie is not directed by Christopher Nolan?',
    options: ['Momento', 'Dunkirk', 'Man of Steel', 'Batman Begins'],
  },
  {
    id: 10,
    que: "'Coronavirus is a ...'",
    options: ['Disease', 'Virus', 'Bacteria', 'Syndrome'],
  },
];

export const answersArray: string[] = [
  'U',
  'Shaheen Bhatt',
  'V',
  'Rabbit',
  'Zebra',
  '5',
  'Helicopter',
  'Shimit Amin',
  'Man of Steel',
  'Disease',
];
