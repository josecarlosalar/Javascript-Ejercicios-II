Args
Dada la siguiente función:

function f(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);
}

Apartado A
¿Qué muestra por consola esta llamada?


f("JS rocks!", { b: "b" });

Apartado B
¿Y con estos argumentos?

f({ b: "b" });

Apartado C
¿Y ahora?

f("JS sucks!", null, 13);