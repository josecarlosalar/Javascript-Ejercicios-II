class Reminder {
    constructor(text) {
        this.text = text;
    }

    remindMe(delay) {
        setTimeout(function() {
            console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
        }, delay * 1000);
    }
}

const remind = new Reminder('I love programming!!');
console.log(remind.remindMe(2));

// La salida por consola del mensaje es 'undefined' debido al closure de la función ya que el objeto 
// 'this' se encuentra dentro de su ambito y dentro de dicha función no se ha declarado ninguna variable
// llamada 'text'.
// Para que podamos acceder al objeto 'this' de la clase 'Reminder' debemos cambiar la función clásica
// por una 'Arrow function' ya que esta no tiene closure:

class Reminder2 {
    constructor(text) {
        this.text = text;
    }

    remindMe(delay) {
        setTimeout(() => {
            console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
        }, delay * 1000);
    }
}

const remind2 = new Reminder2('I love programming!!');
console.log(remind2.remindMe(2));