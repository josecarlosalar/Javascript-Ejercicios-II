//APARTADO A

function f(a, { b } = {}, c = 100) {
    console.log(arguments.length);
    console.log(a, a === arguments[0]);
    console.log(b, b === arguments[1]);
    console.log(c, c === arguments[2]);
}

f("JS rocks!", { b: "b" });

/* 
Las impresiones por consola de esta llamada son:

// 2 . Ya que el número de argumentos que se pasan son dos, el string y el objeto.
// "JS rocks!" corresponde a la primera 'a' y true ya que la comparación es verdadera.
// b que corresponde al destructuring del objeto y false ya que no son el mismo tipo de valor en la comparación.
// 100 porque es el valor por defecto que tiene 'c' en la firma de la función y false porque arguments[2] no existe.
*/


f({ b: "b" });

/* 
Las impresiones por consola de esta llamada son:

// 1 . Ya que el número de argumentos que se pasa es uno. El objeto.
// {b: 'b'} y true ya que se está comparando al mismo objeto que apuntan a la misma dirección de memoria.
// undefined porque no existe el argumento [1] y true porque undefined es igual a undefined.
// 100 porque es el valor por defecto de 'c' en la firma de la función y false porque no existe el argumento [2].
*/

// APARTADO C

f("JS sucks!", null, 13);

/* La firma de la función está esperando como segundo argumento un objeto. 
En la llamada a la función se envía null y esto genera un error porque no se puede hacer destructuting de null.
*/