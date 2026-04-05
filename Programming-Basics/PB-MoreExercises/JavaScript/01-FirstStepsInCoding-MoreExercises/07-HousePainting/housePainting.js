function HousePainting(x, y, h) {
    // Side Walls
    let sideWall = parseFloat(x * y);
    let sideSquareWindow = parseFloat(1.5);
    let sideSquareWindowArea = parseFloat(sideSquareWindow * sideSquareWindow);
    let twoSideWallsArea = parseFloat(2 * sideWall - (2 * sideSquareWindowArea));

    // Back Walls
    let backWall = parseFloat(x * x);
    let frontDoor = 1.2 * 2;

    // Front and back area together
    let frontAndBackArea = parseFloat(2 * backWall) - 2.4;

    //Total Area
    let totalArea = parseFloat(twoSideWallsArea + frontAndBackArea);
    
    // Green Paint;
    let greenPaint = parseFloat(totalArea / 3.4);

    // ROOF

    // Two rectangles of the roof
    let twoRectangles = parseFloat(2 * (x * y));

    // Two triangles of the roof
    let twoTriangles = parseFloat(2 * (x * h / 2));

    // Total roof area
    let totalRoofArea = parseFloat(twoRectangles + twoTriangles);

    // Red paint
    let redPaint = parseFloat(totalRoofArea / 4.3);

    // Print the result to the console
    console.log(`${greenPaint.toFixed(2)}`); // Litres green paint
    console.log(`${redPaint.toFixed(2)}`); // Litres red paint
}

HousePainting(6, 10, 5.2);