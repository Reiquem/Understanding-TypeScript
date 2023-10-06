function combine(a: number | string, b: number | string) {
	let result
	if (typeof a === 'number' && typeof b === 'number') {
		result = a + b
	} else {
		result = a.toString() + b.toString()
	}
	return result
}

const combinedAges = combine(26, 28)
console.log(combinedAges)

const combinedNames = combine('Diogo', 'Barbara')
console.log(combinedNames)
