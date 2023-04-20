//------------------ lesson-9 ----------------------
class employee {
  name: string; // không khia báo gì là dùng kiểu public
  private age: number; // private thì chỉ sử dụng được trong class ở ngoài sẽ không dùng đc
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public get getValueAge(): number {
    return this.age;
  }

  public set setValueAge(value: number) {
    this.age = value;
  }
}
const newEmployee = new employee("toan", 23, "nam");
console.log(newEmployee);
// console.log(newEmployee.age); // error vì age là private không truy cập được

// dùng get và set để truy cập age
// get
console.log(newEmployee.getValueAge);

// set
const set = (newEmployee.setValueAge = 20);
console.log(set);
