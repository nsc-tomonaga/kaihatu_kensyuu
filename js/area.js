function getArea(length, width) {
    if (length >= 1 && length <= 1000){
        if(width >= 1 && width <= 1000){
            let area = length * width;

            return area;
        }
    }
}

function getPerimeter(length, width) {
    if(length >= 1 && length <= 1000){
        if(width >= 1 && width <= 1000){
     
            let perimeter = length*2 + width*2; 
    
            return perimeter
        }
    }
}
console.log(getArea(3,4));
console.log(getPerimeter(3,4));