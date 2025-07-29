const userName = 'Max';
let age = 29;
const hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' +
        userName +
        ', Age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}
console.log(summarizeUser(userName, age, hasHobbies));

//arrow function
const summarizeUser1 = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', Age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}
console.log('arrow function---'+summarizeUser1(userName, age, hasHobbies));

const add = (a,b) => {
    return a + b;
}
console.log(add(1, 2));

//arrow function
const add1 = (a,b) => a + b;
console.log(add(2, 2));

const addOne = a => a + 1;
console.log(addOne(4));

const addRandom = () => 4 + 2;
console.log(addRandom());