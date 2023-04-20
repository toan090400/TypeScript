//------------------ lesson-7 ----------------------
const add = (a: number, b: number) => {
  return a + b;
};
console.log(add(2, 3));

const log = (id: string | number, item: string) => {
  console.log(`${item} have id: ${id}`);
};
log("name-1", "item-001");
log(1, "item-001");

type greetObjet = { name: string; id: string | number };
const greet = (user: greetObjet) => {
  console.log(`${user.name} say hello ${user.id}`);
};
greet({
  name: "name-1",
  id: "01",
});
greet({
  name: "name-1",
  id: 1,
});
