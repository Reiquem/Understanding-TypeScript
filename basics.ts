function add(a: number, b: number, showResult: boolean, phrase: string) {
	//   if (typeof a !== "number" || typeof b !== "number") {
	//     throw new Error("Incorrect input!");
	//   }
	const result = a + b
	if (showResult) {
		console.log(phrase + result)
	} else return result
}

let number1: number
number1 = 5
const number2 = 2.8
const printResul = true
let resultPhrase = 'Result is: '

add(number1, number2, printResul, resultPhrase)
