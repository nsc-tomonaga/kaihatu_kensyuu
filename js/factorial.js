function factor(number){
    if(number == 0||number == 1){
        return 1;
    }

    let result = 0;

    for(let counter = number;counter > 0;counter--){
        result = result * counter;
    }
    return result
}