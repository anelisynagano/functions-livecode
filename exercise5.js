// create a function with$ that will receive a string as an argument and return the same string surronded by the simbol $
// i.e. 'John' will return '$John$'

const with$ = (str) => {
    return `$${str}$`;
}

console.log(with$('aaaa'));
console.log(with$('ssss'));
console.log(with$('ffff'));
console.log(with$('aaggggaa'));