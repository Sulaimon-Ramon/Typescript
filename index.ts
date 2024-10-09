const name:string = "Ramon"
console.log(name);

let numbers: number[] = [1,2,3,4,5];

function add(a:number, b:number): number{
    return a + b;
}
console.log(add(10,20));

//object
interface Person{
    firstName :string;
    lastName :string;
    age? :number;
}
let user:Person = {
    firstName : 'Sulaimon',
    lastName : 'Ramon',
    age : 30
}

console.log(`user:${user.firstName} ${user.lastName} ${user.age}`);

class student {
    studentName:string;

    constructor(name:string) {
        this.studentName = name;
    }

    greet():string{
        return `Hello, My Name is ${this.studentName}`;
    }
}

let student1 = new student(`Sulaimon.Ramon`);
console.log(student1.greet());

const Greeting:string = "Hello World!";
console.log(Greeting.toUpperCase())