function bookShelf(input) {
    let shelves = {};

    for (let line of input) {
        if (line.includes(' -> ')) {
            
            let [id, genre] = line.split(" -> ");
            
            if (!shelves[id]) {
                shelves[id] = {
                    genre: genre,
                    books: []
                };
            }
        } else if (line.includes(': ')) {
            let [title, rest] = line.split(': ');
            let [author, genre] = rest.split(', ');

            let shelfId = Object.keys(shelves).find(id => shelves[id].genre === genre);

            if (shelfId) {
                shelves[shelfId].books.push({
                    title: title,
                    author: author
                });
            }
        }
    }

    let shelfIds = Object.keys(shelves);

    shelfIds.sort((a, b) => {
        return shelves[b].books.length - shelves[a].books.length;
    });

    for (let id of shelfIds) {
        shelves[id].books.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });

        let shelf = shelves[id];
        console.log(`${id} ${shelf.genre}: ${shelf.books.length}`);

        for (let book of shelf.books) {
            console.log(`--> ${book.title}: ${book.author}`);
        }
    }
}

bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']);
console.log('--------------------------------');
bookShelf(['1 -> mystery', '2 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Lions and Rats: Gabe Roads, history', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi']);