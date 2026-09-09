function stringLength(sum, stringLength, averageLength) {
    const sumLength = sum.length + stringLength.length + averageLength.length;
    const averageLengthSum = Math.floor(sumLength / 3);
    console.log(sumLength);
    console.log(averageLengthSum);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');