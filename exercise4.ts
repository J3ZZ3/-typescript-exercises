class Person {

    public name: string;
    public age: number;
    private socialSecurityNumber: string;

    constructor(name: string, age: number, socialSecurityNumber: string) {
      this.name = name;
      this.age = age;
      this.socialSecurityNumber = socialSecurityNumber;
    }

    getName(): string {
      return this.name;
    }
  
    getAge(): number {
      return this.age;
    }

    getSocialSecurityNumber(): string {
      return this.socialSecurityNumber;
    }
  }

let Name: string = 'Danny Phantom';
let Age: number = 32;
let SocialSecurityNumber: string = '0101114288196';

  const person = new Person(Name, Age, SocialSecurityNumber);
  
  console.log(`Name: ${person.getName()}`);
  console.log(`Age: ${person.getAge()}`);
  console.log(`Social Security Number: ${person.getSocialSecurityNumber()}`);
  