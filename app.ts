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

enum Role {
	ADMIN = 'ADMIN',
	READ_ONLY = 100,
	AUTHOR = 'AUTHOR'
}

const person = {
	name: 'Diogo',
	age: 26,
	hobbies: ['Sports', 'Cooking', 'Gaming', 'Coding', 'Reading', 'Writing'],
	role: Role.ADMIN
}

// person.role.push('admin')
// person.role.push[1] = 10

// person.role = [0, 'admin', 'user']

let favoriteActivities: string[]
favoriteActivities = ['Coding']

console.log(person)

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase())
	// console.log(hobby.map()) // !!! ERROR !!!
}

if (person.role === Role.ADMIN) {
	console.log('is admin')
}
