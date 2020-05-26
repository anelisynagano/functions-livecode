// create a function overAge that will receive an array of objects, and will return only the name of the people that are over the age of 18

const people = [
    {
        name: 'Maria',
        age: 23
    },
    {
        name: 'Carlos',
        age: 18
    },
    {
        name: 'Ana',
        age: 13
    },
    {
        name: 'Joana',
        age: 3
    },
    {
        name: 'Anelisy',
        age: 32
    }
]


const overAge = (array) => {
    const namesOver = array.filter(item => item.age > 18)
    console.log(namesOver)
    return namesOver.map(person => person.name)
}
console.log(overAge(people));