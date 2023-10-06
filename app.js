var person = {
    name: 'Diogo',
    age: 26,
    hobbies: ['Sports', 'Cooking', 'Gaming', 'Coding', 'Reading', 'Writing'],
    role: [2, 'Developer']
};
person.role.push('admin');
person.role.push[1] = 10;
person.role = [0, 'admin', 'user'];
var favoriteActivities;
favoriteActivities = ['Coding'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
