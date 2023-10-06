var person = {
    name: 'Diogo',
    age: 26,
    hobbies: ['Sports', 'Cooking', 'Gaming', 'Coding', 'Reading', 'Writing']
};
var favoriteActivities;
favoriteActivities = ['Coding'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
