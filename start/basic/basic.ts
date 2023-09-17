// premetives number,string,boolean

let age: number;
age = 12;
// age-'aa' //err

let userName: string;
userName = "Aniket";

let isStudent: boolean;
isStudent = true;

let hobby: null;
// hobby = 'travel' //err

//
//
// nom pemetive array, object

let hobbies: string[];
hobbies = ["travel", "sport"];

let person: any;
person = {
  name: "Jhon",
  age: 32,
};
//not good practive bcz then there is no use of typescript

let person2: {
  name: string;
  age: number;
};

person2 = {
  name: "Jhon",
  age: 23,
};

// we can add array of object like this
let person3: {
  name: string;
  age: number;
}[];

person2 = {
  name: "Jhon",
  age: 23,
};

//
//
// Type inferance
let course = "React typescript";

// course = 123 // gitve error bcz of inferance
// bcz we alredy initilized as string in line 54

// for adding multiple type in on variable by using union types
let multi: string | number = "Abc";
multi = 123; // it will not show error

//
//
//type aliases
// used yo avoid repeate typescript defination
type Person = {
  name: string;
  age: number;
};
let person4: Person;
let person5: Person[];

//
//
// Function and types
function add(a: number, b: number) {
  return a + b;
} // hover on function keyword you will see function add(a: number, b: number): number...this number is bcz it is returning number

// so for above we can set like this
function addnum(a: number, b: number): number | string {
  return a + b;
}

//
function print(value: any) {
  console.log(value);
} // now here we are not returning anything function print(): void.. this will see on hover on fun

//
//
// generics
function insertAtBegining(arr: any[], value: any) {
  const newArr = [value, ...arr];
  return newArr;
}

const demoArr = [1, 2, 3]; // type number
const updatedArr = insertAtBegining(demoArr, -2); // type any

updatedArr[0].split(""); // gives error bcz split will not work on number but still it will not shwing any syntax error here
//here we have to add generic syntax
// insted of T we can use any
function insertAtBegining1<T>(arr: T[], value: T) {
  const newArr = [value, ...arr];
  return newArr;
}

const demoArr1 = [1, 2, 3]; // type number
const updatedArr1 = insertAtBegining1(demoArr1, -2); // type is number not any

// updatedArr1[0].split(""); // now this will understand we are using split on number
