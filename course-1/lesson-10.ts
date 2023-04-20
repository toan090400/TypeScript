//------------------ lesson-10 ----------------------
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
// user kế thừa từ employee
class user extends employee {
  private account: string;
  constructor(name: string, age: number, gender: string, account: string) {
    super(name, age, gender); // kế thừa từ employee
    this.account = account;
  }
}
const newUser = new user("toan", 23, "nam", "user-1");
console.log(newUser.getValueAge);
