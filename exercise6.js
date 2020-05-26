// create a function takeoutRoulette that will receive an array of 5 different takeout food options, and will return a random option

const takeoutRoulette = (foodOption) => {
    const randomIndex = Math.floor(Math.random() * foodOption.length)
    return foodOption[randomIndex]
}

const takeout = ['pizza', 'burger', 'sushi', 'ice-cream', 'indian food']

console.log(takeoutRoulette(takeout))