// Creo il ciclo for da 1 a 100

for (let i = 1; i <= 100; i++) {
    
    // Determino le condizioni per capire i multipli di 3 e 5
    if (i % 3 == 0 && i % 5 != 0) {

        let i = "Fizz";
        console.log(i);
    
    } else if (i % 5 == 0 && i % 3 != 0) {

        let i = "Buzz";
        console.log(i);

    // Determino la condizione quando il numero è multiplo sia di 3 e sia di 5
    } else if (i % 5 == 0 && i % 3 == 0) {

        let i = "FizzBuzz";
        console.log(i);
    
    // Stampo il numero se non corrisponde a nessuna delle tre condizioni    
    } else {

        console.log(i);

    }
}