function ThePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let layer = 1;
    let size = base;

    while (size >= 1) {
        if (size === 1 || size === 2) {
            gold = size * size * increment;
        } else {
            stone += (size - 2) * (size - 2) * increment;
        }

        size -= 2;
        layer++;
    }
}