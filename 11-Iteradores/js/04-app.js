//while loop - se ejecuta mientras una condicion sea verdadera

let i = 0;

while( i <= 30) { //condicion
   
    if(i % 3 === 0 && i % 5 === 0 ){
        console.log(`${i} fizzbuzz`);
    } else if(i % 3 ===0 ){
        console.log(`${i} fizz`);
    }else if(i % 5 ===0 ){
        console.log(`${i} buzz`);
    }
    console.log(`${i}`);

    i++; //incremento
}
