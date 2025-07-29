const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am '+this.name);
    }
};

const printName = (personData) => {
    console.log(person.name);
}

printName(person);


//object destructuring

const printObjectName = ({name}) => {
    console.log(name);
}

printObjectName(person);

const { name, age } = person;
console.log(name, age);

//destructuring arrays
const hobbies = [ 'Sports', 'Cooking'];
const [ hobby1, hobby2 ] = hobbies;
console.log(hobby1, hobby2);