/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/


// const nums = [1, 2, 3, 4, 5];

// const squares = nums.map(function(num){
//     return num * num;
// })

// console.log(squares);



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/


const names = ["alice", "bob", "charlie", "danielle"]

const upperCaseNames = names.map(name => 
     name[0].toUpperCase() + name.slice(1); 
)

console.log(upperCaseNames);



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const wrappedPokemom = pokemon.map(poke => `<p>${poke}</p>`
)

console.log(wrappedPokemom);