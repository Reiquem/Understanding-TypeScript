const person: {
	name: string
	age: number
	hobbies: string[]
} = {
	name: 'Diogo',
	age: 26,
	hobbies: ['Sports', 'Cooking', 'Gaming', 'Coding', 'Reading', 'Writing']
}

let favoriteActivities: string[]
favoriteActivities = ['Coding']

console.log(person)

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase())
}
