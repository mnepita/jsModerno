//Arrow functions, son otra manera de declarar funciones con una sintaxis mas simple ` ()=> {  } `

const learning = function(topic, topic2){
    console.info(`Learning ${topic} y ${topic2}`);
}
learning('JavaScript','Node.js');
learning('node', 'react');



//arrow function

//un solo parametro no necesita parentesis, para dos o mas parametros si se necesitan los ( )
const learningArrows = topic => `Learning ${topic}`;
console.warn(learningArrows('Arrow Funkkk-chions'));


const learningArrows2 = (topic, topic2) => `Learning ${topic} y ${topic2}`;
console.warn(learningArrows2('jquery', 'VueJS'));

