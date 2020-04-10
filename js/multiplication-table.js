function multiplication(number) {
    //numberに0～10までを掛け算したものを画面に表示してください。
    /*
        numberが10だった場合の表示例；
        10 x 0 = 0
        10 x 1 = 10
        10 x 2 = 20
        10 x 3 = 30
        10 x 4 = 40
        10 x 5 = 50
        10 x 6 = 60
        10 x 7 = 70
        10 x 8 = 80
        10 x 9 = 90
        10 x 10 = 100
    */
   let result;
   for(let index=0; index <= 10; index++){
        result = index * number;
        console.log(result);
   }
}

multiplication(10);