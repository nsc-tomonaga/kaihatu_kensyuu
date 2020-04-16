//オリンピックが初めて開催された年
let startYear = 1896;

function gameYears(year) {
    //startYear　からyearまでのオリンピック開催年を
    //console.logを使って表示する。
    while(startYear <= year){
        console.log(startYear);
        startYear = startYear + 4;
    }
}

gameYears(2020);