console.log("step1");
for(let y = 1;y <= 10; y++){
    var line = "";

    for(let x = 1;x <= 10; x++){
        line += " " + (x * y);
    }

    console.log(line);

}

console.log("step2");
for(let y = 1;y <= 10; y++){
    var line = "";

    for(let x = 1;x <= 10; x++){

        let padnumber = (x * y).toString().padStart(3,"0");

        line += " " + x * y;
    }

    console.log(line);

}