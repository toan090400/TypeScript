//------------------ lesson-3 ----------------------
// arrays
let names = ["luigi", "mario", "yoshi"];

names.push("toad");
// names.push(3);
// names[1] = 3;
console.log(names);

let numbers = [10, 20, 12, 15];

numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';
console.log(numbers);

let mixed = ["ken", 4, "chun-li", 8, 9];

mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;
console.log(mixed);

// objects
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};
console.log(ninja);

ninja.age = 40;
ninja.name = "ryu";
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
console.log(ninja);

ninja = {
  name: "yoshi",
  belt: "orange",
  age: 40,
  //   skills: ['running'],
};
console.log(ninja);
