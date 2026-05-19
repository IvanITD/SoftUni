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
            let outerRing = (size * size - (size - 2) * (size - 2)) * increment;
            if (layer % 5 === 0) {
                lapis += outerRing;
            } else {
                marble += outerRing;
            }
        }

        size -= 2;
        layer++;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor((layer - 1) * increment)}`);
}

ThePyramidOfKingDjoser(11, 1);
ThePyramidOfKingDjoser(11, 0.75);
ThePyramidOfKingDjoser(12, 1);
ThePyramidOfKingDjoser(23, 0.5);