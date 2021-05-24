//fizbuzz
// fizz multiplos de 3 fizz
//multiplos de 5 buzz
// los multiplos de ambos escriben fizbuzz


for( let i = 1; i <= 30; i++) {
    if(i % 3 === 0 && i % 5 === 0 ){
        console.log(`${i} fizzbuzz`);
        continue;
    } else if(i % 3 ===0 ){
        console.log(`${i} fizz`);
        continue;
    }else if(i % 5 ===0 ){
        console.log(`${i} buzz`);
        continue;
    }
    console.log(`${i}`);
}