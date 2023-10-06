function add(a, b, showResult, phrase) {
    //   if (typeof a !== "number" || typeof b !== "number") {
    //     throw new Error("Incorrect input!");
    //   }
    var result = a + b;
    if (showResult) {
        console.log(phrase + result);
    }
    else
        return result;
}
var number1 = 5;
var number2 = 2.8;
var printResul = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResul, resultPhrase);
