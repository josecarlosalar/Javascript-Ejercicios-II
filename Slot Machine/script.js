class SlotMachine {
    constructor() {
        this.coin = 0;
    }

    play() {
        this.coin += 1;

        let rand_Bool1 = Math.random() < 0.5;
        let rand_Bool2 = Math.random() < 0.5;
        let rand_Bool3 = Math.random() < 0.5;
        const jugada = (rand_Bool1 && rand_Bool2 && rand_Bool3 === true) ? `  Congratulations!!!. 
           $$$ You won ${this.coin} coins!! $$$` : `Good luck next time!!`;

        console.log(`## Las Vegas ##            Total Coins: ${this.coin}           
        
             ${rand_Bool1}   ${rand_Bool2}   ${rand_Bool3}

         -------------------------------     
              ${jugada}      
         -------------------------------
             
             `);


        if (rand_Bool1 && rand_Bool2 && rand_Bool3 === true) this.coin = 0;
    }
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"