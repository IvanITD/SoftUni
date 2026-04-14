function PointOnRectangleBorder(x1, y1, x2, y2, x, y) {
    // The dot is on the left or right side of the rectangle
    if ((x == x1 || x == x2) && (y >= y1 && y <= y2)) {
        // Print the result to the console
        console.log("Border");
    }
    // The dot is on the top or bottom side of the rectangle
    else if ((y == y1 || y == y2) && (x >= x1 && x <= x2)) {
        console.log("Border");
    }
    else {
        console.log("Inside / Outside");
    }
}

PointOnRectangleBorder(2, -3, 12, 3, 8, -1);
PointOnRectangleBorder(2, -3, 12, 3, 12, -1);