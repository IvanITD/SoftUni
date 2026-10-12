function deckOfCards(cards) {
    function playingCards(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        };
        
        if (!faces.includes(face) || !suits[suit]) {
            throw new Error('Error');
        }
    
        return {
            face,
            suit,
            toString() {
                return face + suits[suit];
            }
        };
    }
    
    const result = [];

    for (const card of cards) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);

        try {
            result.push(playingCards(face, suit));
        } catch (err) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }

    console.log(result.join(' '));
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);