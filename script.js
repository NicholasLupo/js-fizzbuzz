// Creo il ciclo for da 1 a 100

for (let i = 1; i <= 100; i++) {

    console.log(i);
    
    // Determino le condizioni per capire i multipli di 3 e 5
    if (i % 3 == 0 && i % 5 != 0) {

        let fz = "Fizz";
        console.log(fz);

    } else if (i % 5 == 0 && i % 3 != 0) {

        let bz = "Buzz";
        console.log(bz);

    // Determino la condizione quando il numero è multiplo sia di 3 e sia di 5
    } else if (i % 5 == 0 && i % 3 == 0) {

        let fzbz = "FizzBuzz";
        console.log(fzbz);
        
    }
}

