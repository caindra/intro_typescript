interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Granite",
    details: {
        author: "Sleep Token",
        year: 2023
    }
}

//const { song } = audioPlayer;
//console.log(`Song: ${song}`);

console.log(`Song: ${audioPlayer.song}`);
console.log(`Duration: ${audioPlayer.songDuration}`);
console.log(`Author: ${audioPlayer.details.author}`);

const song = 'New Song';
const { author: author } = audioPlayer.details;
const { song:anotherSong, songDuration:duration } = audioPlayer;

console.log(`Song: ${anotherSong}`);
console.log(`Duration: ${duration}`);
console.log(`Author: ${author}`);

/*

Other way of doing it:

const {
    song: anotherSong,
    songDuration: duration,
    details: { author }
} = audioPlayer;

==============
const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const {author} = details;
*/

export {};