//------------------ lesson-6 ----------------------
const add = (a: number, b: number) => {
  console.log(a + b);
};
add(2, 3);

const character = (a: number, b: string, c: boolean, d: object, e: any) => {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
};
character(2, "name", false, { name: "name-001" }, [0, 10, 20]);
