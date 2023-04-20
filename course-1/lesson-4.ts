//------------------ lesson-4 ----------------------
// explicit types
let character: string = "character";
console.log(character);

let numbers: number = 100;
console.log(numbers);

let correct: boolean = true;
console.log(correct);

// arrays
let ninja: string[] = ["nextjs", "react"];
console.log(ninja);

// union types
let mixed: (string | number | object)[] = [
  "nextjs",
  "react",
  20,
  100,
  {
    name: "user-1",
    age: 20,
  },
  [1000, 3000],
];
console.log(mixed);

// objects
let ninjaOne: object = {
  name: "user-001",
  age: 25,
  check: true,
  address: {
    home: "away",
  },
  array: [10, "name"],
};
console.log(ninjaOne);
