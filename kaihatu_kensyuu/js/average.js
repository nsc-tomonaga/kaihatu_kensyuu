function average(array){
    let sum = 0;

    for(let counter = 0;counter < array.length; counter++){
        sum = sum + array[counter];
    }

    return sum / array.length;

}

let values = [1,2,3];

console.log(average(values));