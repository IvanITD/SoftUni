function DistanceBetweenPoints(x1, y1, x2, y2) {
let dx = x2 - x1;
let dy = y2 - y1;

let distance = Math.sqrt(dx * dx + dy * dy);

console.log(distance);
}

DistanceBetweenPoints(2, 4, 5, 0);
DistanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);