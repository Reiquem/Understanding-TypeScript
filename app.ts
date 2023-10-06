const person: {
	name: string
	age: number
	hobbies: string[]
	role: [number, string]
} = {
	name: 'Diogo',
	age: 26,
	hobbies: ['Sports', 'Cooking', 'Gaming', 'Coding', 'Reading', 'Writing'],
	role: [2, 'Developer']
}

// person.role.push('admin')
// person.role.push[1] = 10

// person.role = [0, 'admin', 'user']

let favoriteActivities: string[]
favoriteActivities = ['Coding']

console.log(person)

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase())
}
