//  MODULE -32 

//  TOPIC - COMMON CONCEPTS OF JS


//  STRONG TYPE  VS DYNAMIC TYPE

// STRONG TYPE = JESOB VARIABLE KE DECLARE KORTE EDER TYPE DIYE DECLARE KORTE HOI..

// int a = 10 ;

// double b = 10.5  etc



//  Dynamic => jader type charai let , var, const diye declare kora jai.

let a = 10 ;

let b = 10.5 ;


//  ******** PRIMITIVE     VS    NON - PRIMITIVE *********

// PRIMITIVE => VARIABLE E EKTA VALUE RAKEHE. => LET A = 10 ; LET B ="AFFNAN" .... BOOLEAN , STRING , NUMBER ETC..


// NON-PRIMITIVE : VARIABLE E ONEKGULO VALUE RAKHE. LET A = [1,2,3].=> ARRAY, OBJECT...


// UNDEFINED.

// 1. VARIABLE E VALUE NA THAKLE .

// RETURN NA KORLE .

// RETURN E KI RETURN KORBO SETA NA DILE . 

// OBJECT E J PROPERTY NAI / ARRAY TE J INDEX NAI SETA CONSOLE LOG KORLE.

// ARGUMENT E MAN NA DILE , JDI PARAMTR E DEFAULT VALUEO NA THAKE TAILE UNDEFINED DEI....

// UNDEFINED R TYPE = UNDEFINED .

// NULL ER TYPE = OBJECT ...  [ THROUGH IT IS CONTROVERSIAL]



//  ******* TRUTHY  VS  FALSY **********

// JEKONO NUMBER , TRUTHY.. EXCEPT 0 .
// EMPTY ARRAY , OBJECT ETC ....

let x = 10 ;

if (x){
    console.log("it is truthy");
}
else{
    console.log("it is falsy");
}


// falsy => 0 hole falsy ... empty string , null , undefined hole falsy..




////  ==  vs ==== 


// ==  just value  check kore..  etate type casting , conversion , corcein o hoi...


// ====  , value + type of variable check kore.. it is advanced.


