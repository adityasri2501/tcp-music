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
    { songName: "SULTAN KGF CHAPTER 2", filePath: "https://drive.google.com/uc?export=download&id=14oBik36aWmkRtAfIAnvWeS_UC2e-_PG2", coverPath: "covers/1.jpeg" },
    { songName: "ME AND THE DEVIL", filePath: "https://drive.google.com/uc?export=download&id=11-ILAiYDrh_F_bXrn4UUzyGYwNtmtqQ7", coverPath: "covers/2.jpg" },
    { songName: "BLODDY MARY - LADY GAGA", filePath: "https://drive.google.com/uc?export=download&id=1IE3NyiL4Pz-3X2adnGT1sQcKmyYrnigu", coverPath: "covers/3.jpeg" },
    { songName: "LET ME LOVE YOU - JUSTIN BIEBER", filePath: "https://drive.google.com/uc?export=download&id=1ODNSZ2SuwPFfczhs-W6yBQpZu58PMV-E", coverPath: "covers/4.jpg" },
    { songName: "FAIRYTALE", filePath: "https://drive.google.com/uc?export=download&id=1Z5P2KcrOU06z75jwiVjw3mcpP5rp-Yto", coverPath: "covers/5.jpg" },
    { songName: "AASMAN KO CHUKAR DEKHA", filePath: "https://drive.google.com/uc?export=download&id=1SD3vKrEvujLKDj-gr3G_3Rp3smxy35Dl", coverPath: "covers/6.jpg" },
    { songName: "BROWN RANG - YO YO HONEY SINGH", filePath: "https://drive.google.com/uc?export=download&id=11uULtUEIwisah61-lY7y4wAdS1Lr63zP", coverPath: "covers/7.jpg" },
    { songName: "VE HAANIYAN", filePath: "https://drive.google.com/uc?export=download&id=1MEX3-qr5anNTsJjKAmR89iAuRtIBtbME", coverPath: "covers/8.jpg" },
    { songName: "RAANJHAN", filePath: "https://drive.google.com/uc?export=download&id=18c1ds65UJO4v9xM-ZgbICowCSNEW1qdt", coverPath: "covers/9.jpeg" },
    { songName: "ISHQ", filePath: "https://drive.google.com/uc?export=download&id=1AkajOxknFINiK4bPw8k7lSly1rDcXc-i", coverPath: "covers/10.jpeg" },
    { songName: "HYMN FOR WEEKEND", filePath: "https://drive.google.com/uc?export=download&id=14bz3zfqpPH88I4-qxS0hkFc1bf09olpa", coverPath: "covers/11.jpeg" },
    { songName: "A SKY FULL OF STARS", filePath: "https://drive.google.com/uc?export=download&id=1DwcRVbtFdnLcVQc1PYD00K1jF_6zIZD_", coverPath: "covers/12.jpeg" },
    { songName: "ISHQ SUFIYANA", filePath: "https://drive.google.com/uc?export=download&id=1zNHETWE43timfEoz3HdIPFnQV1gD_Y_c", coverPath: "covers/13.jpeg" },
    { songName: "KHUDA JANE", filePath: "https://drive.google.com/uc?export=download&id=1vYF7bOA9dXqN1U8K84Z-B5C1GhpBacaF", coverPath: "covers/14.jpeg" },
    { songName: "SONA RE - KING", filePath: "https://drive.google.com/uc?export=download&id=1rufMApEDWCE-POrKHYCqjpkbTTH8vL8d", coverPath: "covers/15.jpeg" },
    { songName: "SHAPE OF YOU X NAINA - ED SHAREEN X DILJIT DOSHANJH", filePath: "https://drive.google.com/uc?export=download&id=1yALhC46kZywhZOhVVhfPzdIaFQu_WbvA", coverPath: "covers/16.jpeg" },
    { songName: "CHUTTAMALE", filePath: "https://drive.google.com/uc?export=download&id=1HtWb6WMG11Fgm7JlAbh5R2vIWxeiB4v1", coverPath: "covers/17.jpeg" },
    { songName: "ASSA KHODA", filePath: "https://drive.google.com/uc?export=download&id=1a46wHp1fKWGX1f-rEqdP0bYA4LMF7FzA", coverPath: "covers/18.jpeg" },
    { songName: "WAKA WAKA - SHAKIRA", filePath: "https://drive.google.com/uc?export=download&id=1vWze6QB6S4-CEt0WNp2KO_Wgx25Igb58", coverPath: "covers/19.jpg" },
    { songName: "GANGNAM STYLE", filePath: "https://drive.google.com/uc?export=download&id=1kZO2_VAl1FD9rBqrKMfxxOzblPiJJWDG", coverPath: "covers/20.jpeg" },
    { songName: "BOLLYWOOD MASHUP", filePath: "https://drive.google.com/uc?export=download&id=1F2Rpmuot9Nnf2hyrlKPWMq5XidX9oHUr", coverPath: "covers/21.jpg" },
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
