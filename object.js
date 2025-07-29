const person = {
    name: 'max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
}

console.log(person);
person.greet();

const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
}

//array methods
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}))

console.log(hobbies);

hobbies.push('Programming');
console.log(hobbies);

//spread  operator
const copiedArray = hobbies.slice();
console.log('copiedArray------'+copiedArray);

const copiedArray1 = [...hobbies];
console.log('copiedArray1------'+copiedArray1);

//rest operator
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3]
};
console.log('toArray------>'+toArray(1, 2, 3));

const toArrayRest = (...args) => {
    return args;
};
console.log('toArrayRest--------->' + toArrayRest(1, 2, 3, 4));
