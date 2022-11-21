// APARTADO A

/* 
Implementa una función head (inmutable), tal que, dado un array 
como entrada extraiga y devuelva su primer elemento. 
Utiliza destructuring.
*/


const frutas = ["Pera", "Manzana", "chirimolla"];
const head = ([first, , ]) => first;
console.log("Apartado A, ", head(frutas));

// ---------------------------------------------------------------

// APARTADO B

/* 
Implementa una función tail (inmutable), tal que, dado un array 
como entrada devuelta todos menos el primer elemento. 
Utiliza rest operator.
*/


const tail = ([first, ...nums]) => nums;
console.log("Apartado B, ", tail([1, 2, 3]));

// ----------------------------------------------------------------

// APARTADO C

/*
Implementa una función init (inmutable), tal que, dado un array 
como entrada devuelva todos los elementos menos el último. 
Utiliza los métodos que ofrece Array.prototype.
*/

const init = ([...nums]) => {
    nums.pop();
    return nums;
};
console.log("Apartado C, ", init([1, 2, 3]));

// Apartado D

/*
Implementa una función last (inmutable), tal que, dado un array 
como entrada devuelva el último elemento.
*/

const last = ([...nums]) => nums[nums.length - 1];
console.log("Apartado D, ", last([1, 2, 3]));