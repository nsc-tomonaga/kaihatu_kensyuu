var a = [1,3,10,2,8];

function syoujyun(atai){
    for(var i = 0; i < atai.length; i++){
        for(var j = atai.length-1; j>i; j--){
            if(atai[j] < atai[j-1]){
                var tmp = atai[j];
                atai[j] = atai[j-1];
                atai[j-1] = tmp;
            }
        }
    }
    return atai;
}


function koujyun(atai){
    for(i = 0; i < atai.length; i++){
        for(j = atai.length-1; j>i; j--){
            if(atai[j] > atai[j-1]){
                var tmp = atai[j];
                atai[j] = atai[j-1];
                atai[j-1] = tmp;
            }
        }
    }
    return atai;
}
console.log(syoujyun(a));
console.log(koujyun(a));

function fibonacciNumber(number){
    //初期化
    let youso=0;
    let result=[];

    if(number == 1){
        result.push(1);
        result.push(1);
        return result;
    }
    //1以上の時
    else if(number > 1){
        result.push(1);
        result.push(1);
        for(i = 2; i < number+1; i++){
            if(number < result[i-2] + result[i-1]){
                break;
            } 
            youso = result[i-2] + result[i-1];
            result.push(youso);
            
        }
        return result;
    }else{
        return "１以上の数字をいれてください";
    }
}

console.log(fibonacciNumber(5));

function sosuu (number) {
    if(number === 2) {
        return "素数です";
    } else {
        for(i = 2; i < number; i++) {
            if(number % i === 0) {
                return "素数じゃありません";
                break;
            }
            else{
                return "素数です";
            }
        }
    }
}

console.log(sosuu(3));