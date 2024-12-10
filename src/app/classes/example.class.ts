export class Person {
    constructor(private name: string, private age: number, public profession: string) { }

    static myAge(staticAge: number) {
        console.log(`I am ${staticAge} years old`);
    }

    protected getDetails() {
        return `I am ${this.name} with age ${this.age}`
    }

    printProfession() {
        console.log(this.profession);
    }

    get currentAge() {
        return this.age;
    }

    set currentAge(age: number) {
        this.age = age;
    }
}

export class Student extends Person {
    constructor(name: string, age: number, profession: string, public standard: number) {
        super(name, age, profession)
    }

    override printProfession() {
        console.log(`I am ${this.profession} studying in class ${this.standard}`);
    }
}

abstract class Shape {
    constructor(public radius: number) { }
    abstract calculateArea(): number;
}

export class Circle extends Shape {
    constructor(radius: number) {
        super(radius)
    }

    calculateArea(): number {
        return 3.147 * Math.pow(this.radius, 2);
    }
}

