// MODULE - 21 => PROBLEM SOLVING

//  Unit Convert Inch To Feet,  Meter To Kilometre

//  1 FEET = 12 INCH


function inch(feet){

    let result = feet * 12 ;

    return result;
}

let number_feet = inch(5);

console.log("5 feet = ",number_feet);


function kilometer(meter){

    let result = meter / 1000 ;

    return result; 
}

let number_meter = kilometer(10);

console.log("10 meter = ",number_meter);


// Calculate The Average Of The Odd Numbers In An Array

function array(array_1){
    
    let odds = [];
    
    for (const number of array_1){
        
        if(number % 2 !== 0){

            odds.push(number);
      
        }         
    }
    // console.log(odds);

    let sum = 0 ;

    for (const num of odds){

        sum = sum + num ;
    }

    let number_odds = odds.length;

    let average = sum / number_odds;

    return average;
  
}

let parameter = array([1,2,3,4,5,7]);

console.log( "The Average Of The Odd Numbers In An Array IS :" ,parameter);


// 
console.log(parameter)
