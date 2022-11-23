const fib = (n) => {

    let anterior1 = 0;
    let anterior2 = 1;
    let siguiente = 0;
    let sucesionFib = '0, 1,';

    for (i = 0; i < n - 1; i++) {
        siguiente = anterior1 + anterior2;
        anterior1 = anterior2;
        anterior2 = siguiente;
        sucesionFib = `${sucesionFib} ${siguiente},`;
    }
    return sucesionFib;
};

console.log(fib(7));