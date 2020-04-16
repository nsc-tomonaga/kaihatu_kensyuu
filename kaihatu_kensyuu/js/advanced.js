function minimumSum(array){
    var sum = 0;
    let bigNumber = array[0];
    var number = 0;
    for(let counter = 1; counter < array.length; counter++){
        if(bigNumber < array[counter]){
            bigNumber = array[counter];
            number = counter;
        }
    }

    for(let counter = 0; counter < array.length; counter++){
        if(counter !== number){
            sum = sum + array[counter];
        }
    }
    return sum;
}

function mostSum(array){
    sum = 0;
    let smallNumber = array[0];
    number = 0;

    for(let counter = 1; counter < array.length; counter++){
        if(smallNumber > array[counter]){
            smallNumber = array[counter];
            number = counter;
        }
    }

    for(let counter = 0; counter < array.length; counter++){
        if(counter !== number){
            sum = sum + array[counter];
        }
    }
    return sum;
}

let values = [1,2,3,4,5]

console.log(mostSum(values));
console.log(minimumSum(values));

function mostNumberCount(array){
    let mostNumber = 0;
    let count = 0;

    for(let counter = 0; counter < array.length; counter++){
        
        if(mostNumber < array[counter]){
            count = 0;
            mostNumber = array[counter];
        }else{
            count = count + 1;
        }

    }
    return count;
}

values = [4,5,3,5];

console.log(mostNumberCount(values));

function AMPM24h(time){
    if(str.indexOf("PM")>= 0){
        for(counter=1;counter<12;counter++){
            if(str.slice(0,2)==counter.toString().padStart(2,"0")){
                let henkan = Number(str.slice(0,2));
                henkan = henkan + 12;
                let result = henkan + str.slice( 2 );
                return result;
            }
        }
    }else if(str.indexOf("AM")>= 0){
       result = str.slice(0,-2);
       return result;
    }
}
var str="07:05:58AM"
console.log(AMPM24h(str));