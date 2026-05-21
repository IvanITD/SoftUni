function Gramophone(band, album, song) {
    let durationInSeconds = (album.length * band.length) * song.length / 2;

    let rotations = Math.ceil(durationInSeconds / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}

Gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
Gramophone('Rammstein', 'Sehnsucht', 'Engel');