/*  Messages are stored as strings in an array. 
    Could have made something fun with objects that have categories etc but I'm keeping this project minimal for now.
    No point in making a ton of features for something I won't use. */

const quotes = [
    '"If it can be null, it will be null."\n -Unknown',
    '"Truth can only be found in one place: the code."\n -Robert C. Martin',
    '"Ruby is rubbish! PHP is phpantastic!"\n -Nikita Popov',
    '"Java is to JavaScript what car is to carpet."\n -Chris Heilmann',
    '"It works on my machine"\n -Unknown'
]

// ES 6 arrow function for getting quotes. Not really any point to make this a function but hey, I made one anyways.
// The array.length is obviously used to in order to allow for easier addition of quotes... Feel free to make a pull request with more quotes just because.
const getRandomQuote = array => {
    return array[Math.floor(Math.random() * array.length)]
}

// Call the function with the quotes array as a selection. Is it elegant? No. Does it work? Yes. Will I ever touch this codebase again? Hopefully not. 
console.log(getRandomQuote(quotes));

// It's been nice having you around, have a great day. 💅