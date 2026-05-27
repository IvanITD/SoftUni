function TriangleArea(number1, number2, number3) {
    let triangleArea = (number1 + number2 + number3) / 2;
    let area = Math.sqrt(triangleArea * (triangleArea - number1) * (triangleArea - number2) * (triangleArea - number3));
    console.log(area);
}

TriangleArea(2, 3.5, 4);
TriangleArea(3, 5.5, 4);