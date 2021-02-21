let user = {
    name: 'User1',
    age: 123
};

let user2 = {};

for (let item in user) {
    user2[item] = user[item];
}

user2.name = 'User2';
user2.age = 321;

console.log(user);
console.log(user2);