function combine(a, b) {
    var result;
    if (typeof a === 'number' && typeof b === 'number') {
        result = a + b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
}
var combinedAges = combine(26, 28);
console.log(combinedAges);
var combinedNames = combine('Diogo', 'Barbara');
console.log(combinedNames);
