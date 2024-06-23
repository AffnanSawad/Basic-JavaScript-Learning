//  ES6  

//  DEFAULT VALUE : JDI ARGUMENT E KONO VALUE NA THAKE . TAILE OUTPUT NAN/ UNIDENFIED SHOW KORE. AR EI JNNO PARAMETER E DEAFULT VALUE SET KORA HOI... + , - ER JNNO =0  , * ER JNNO 1 . ARRAY ER JNNO EMPTY ARRAY. OBJECT ER JNNO EMPTY OBJECT EVABE.

function sum(a=0,b){
    let add = a+b ;

    console.log(a,b,add);
}
sum(2,4);

// array
function array( a=[] , b  ){
    
    console.log(a,b);
}

const ab = [1,2,3];
array(ab);


// ANSWER : 2 4 6
// [ 1, 2, 3 ] undefined 
// UNEFINED BEACUSE B ARRAY TE DEFAULT VALUE NAI....


// BACTICK (` `) / TEMPLATE STRING ;

let bd = 4 ;

let  ef = 5 ;

const addition = `sum of ${bd} and ${ef} is ${bd+ef} `;

console.log(addition);


//  ES 5 => REGULAR FUNCTION  

function add( x , y ){

    const z = x + y ;

   return z;
}

const p = add(5,5);
console.log(p);


// es6 = arrow Function 

const xyz = ( a , b) => a + b ;

const summ = xyz(2,2);
console.log(summ);


//  MORE ARROW FUNCTION

const arrowF = ( x , y , z) => {

    const sum = x+y;
    const diff = x - z ;

    const multi = sum * diff ;

    return multi;
}

const argument = arrowF(2,2,5);

console.log(argument);


// one parameter 

const ar= (a) => a[2];

const l = ar([1,2,3]);

console.log(l);




