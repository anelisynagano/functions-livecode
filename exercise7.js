// create a function reversedNumber that receives a number as an argument and returns the number reversed.
// i.e.: 1234 will return 4321

const reverseNumber = (number) => {
 // transform number into string
     const numberString = number.toString();
    //  console.log(numberString);
    
 // split string into array
     const splitedNumber = numberString.split("");
    //  console.log(splitedNumber);

 // reverse array
     const reversedArray = splitedNumber.reverse();
    //  console.log(reversedArray);

 // join strings
     const joinedReversedArray = reversedArray.join("");
    //  console.log(joinedReversedArray);
    
 // transform the string back into a number (integer)
      const backToNumber = parseInt(joinedReversedArray);

     return backToNumber
}

console.log(reverseNumber(12345));