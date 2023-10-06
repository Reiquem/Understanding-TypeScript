// const person: {
// 	name: string
// 	age: number
// 	hobbies: string[]
// 	role: [number, string]
// } = {
// 	name: 'Diogo',
// 	age: 26,
// 	hobbies: ['Sports', 'Cooking', 'Gaming', 'Coding', 'Reading', 'Writing'],
// 	role: [2, 'Developer']
// }
// const person = {
// 	name: 'Diogo',
// 	age: 26,
// 	hobbies: ['Sports', 'Cooking', 'Gaming', 'Coding', 'Reading', 'Writing'],
// 	role: [2, 'Developer']
// }
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Diogo',
    age: 26,
    hobbies: ['Sports', 'Cooking', 'Gaming', 'Coding', 'Reading', 'Writing'],
    role: Role.ADMIN
};
// person.role.push('admin')
// person.role.push[1] = 10
// person.role = [0, 'admin', 'user']
var favoriteActivities;
favoriteActivities = ['Coding'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // !!! ERROR !!!
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
