function AreaOfFigures(figureType, side1, side2) {
    if (figureType === "square") {
        let area = side1 * side1;
        console.log(area.toFixed(3));
    }
    else if (figureType === "rectangle") {
        let area = side1 * side2;
        console.log(area.toFixed(3));
    }
    else if (figureType === "circle") {
        let area = Math.PI * side1 * side1;
        console.log(area.toFixed(3));
    }
    else if (figureType === "triangle") {
        let area = (side1 * side2) / 2;
        console.log(area.toFixed(3));
    }
}

AreaOfFigures("square", 5);
AreaOfFigures("rectangle", 7, 2.5);
AreaOfFigures("circle", 6);
AreaOfFigures("triangle", 4.5, 20);