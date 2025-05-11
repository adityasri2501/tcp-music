alert("WELCOME TO TCP MUSIC WHERE CODE MEETS SYMPHONY");
console.log("WELCOME TO TCP MUSIC WHERE CODE MEETS SYMPHONY");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "SULTAN KGF CHAPTER 2", filePath: "songs/0.mp3", coverPath: "covers/1.jpeg" },
    { songName: "ME AND THE DEVIL", filePath: "songs/1.mp3", coverPath: "covers/2.jpg" },
    { songName: "BLODDY MARY - LADY GAGA", filePath: "songs/2.mp3", coverPath: "covers/3.jpeg" },
    { songName: "LET ME LOVE YOU - JUSTIN BIEBER", filePath: "songs/3.mp3", coverPath: "covers/4.jpg" },
    { songName: "FAIRYTALE", filePath: "songs/4.mp3", coverPath: "covers/5.jpg" },
    { songName: "AASMAN KO CHUKAR DEKHA", filePath: "songs/5.mp3", coverPath: "covers/6.jpg" },
    { songName: "BROWN RANG - YO YO HONEY SINGH", filePath: "songs/6.mp3", coverPath: "covers/7.jpg" },
    { songName: "VE HAANIYAN", filePath: "songs/7.mp3", coverPath: "covers/8.jpg" },
    { songName: "RAANJHAN", filePath: "songs/8.mp3", coverPath: "covers/9.jpeg" },
    { songName: "ISHQ", filePath: "songs/9.mp3", coverPath: "covers/10.jpeg" },
    { songName: "HYMN FOR WEEKEND", filePath: "songs/10.mp3", coverPath: "covers/11.jpeg" },
    { songName: "A SKY FULL OF STARS", filePath: "songs/11.mp3", coverPath: "covers/12.jpeg" },
    { songName: "ISHQ SUFIYANA", filePath: "songs/12.mp3", coverPath: "covers/13.jpeg" },
    { songName: "KHUDA JANE", filePath: "songs/13.mp3", coverPath: "covers/14.jpeg" },
    { songName: "SONA RE - KING", filePath: "songs/14.mp3", coverPath: "covers/15.jpeg" },
    { songName: "SHAPE OF YOU X NAINA - ED SHAREEN X DILJIT DOSHANJH", filePath: "songs/15.mp3", coverPath: "covers/16.jpeg" },
    { songName: "CHUTTAMALE", filePath: "songs/16.mp3", coverPath: "covers/17.jpeg" },
    { songName: "ASSA KHODA", filePath: "songs/17.mp3", coverPath: "covers/18.jpeg" },
    { songName: "WAKA WAKA - SHAKIRA", filePath: "songs/18.mp3", coverPath: "covers/19.jpg" },
    { songName: "GANGNAM STYLE", filePath: "songs/19.mp3", coverPath: "covers/20.jpeg" },
    { songName: "BOLLYWOOD MASHUP", filePath: "songs/20.mp3", coverPath: "covers/21.jpg" },
]

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// LISTEN TO EVENTS
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    // Set the correct ID for each songItemPlay button
    element.id = index;

    element.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id); // Directly set songIndex from clicked element
        if (songIndex >= 0 && songIndex < songs.length) {  // Check if songIndex is valid
            makeAllPlays();  // Reset all song play icons to "play" state
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            
            // Update song details and play the selected song
            audioElement.src = songs[songIndex].filePath;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        } else {
            console.error('Invalid song index:', songIndex);
        }
    });
});


// next button
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 20) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

// previous button
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 20;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

audioElement.addEventListener('ended', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0; // Loop back to first song
    } else {
        songIndex++;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});
