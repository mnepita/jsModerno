// do while - se ejecuta al menos una vez y despues verifica la condicion

// let i = 100 ;
// do {
//     console.log(i);
//     i++; //incremento
// } while (i < 10); //condicion


let i = 0 ;
do {
    if(i % 3 === 0 && i % 5 === 0 ){
        console.log(`${i} fizzbuzz`);
    } else if(i % 3 ===0 ){
        console.log(`${i} fizz`);
    }else if(i % 5 ===0 ){
        console.log(`${i} buzz`);
    }
    console.log(`${i}`);
    i++; //incremento
} while (i <= 30); //condicion


