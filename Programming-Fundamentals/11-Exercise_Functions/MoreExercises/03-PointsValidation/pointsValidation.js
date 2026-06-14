function pointsValidation(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);
    
    function isValid(x1, y1, x2, y2) {
        let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
        
        return Number.isInteger(distance);
    }

    let firstCheck = isValid(x1, y1, 0, 0);
    let secondCheck = isValid(x2, y2, 0, 0);
    let thirdCheck = isValid(x1, y1, x2, y2);

    if (firstCheck === true) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }

    if (secondCheck === true) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }

    if (thirdCheck === true) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

pointsValidation([3, 0, 0, 4]);
console.log();
pointsValidation([2, 1, 1, 1]);