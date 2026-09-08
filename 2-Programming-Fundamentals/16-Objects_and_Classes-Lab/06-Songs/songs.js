function songs(arr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let count = arr[0];
    let filter = arr[arr.length - 1];

    let songList = [];
    for (let i = 1; i <= count; i++) {
        new Song(...arr[i].split("_"));
        songList.push(new Song(...arr[i].split("_")));
    }
    for (let song of songList) {
        if (filter === "all" || filter === song.type) {
            console.log(song.name);
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );
    console.log("--------------------------------");
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    );
    console.log("--------------------------------");
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    );