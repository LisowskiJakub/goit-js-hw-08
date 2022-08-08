
import { throttle } from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
    console.log('played the video!');
});
i
player.getVideoTitle().then(function (title) {
    console.log('title:', title);

});
player.getCurrentTime().then(function(seconds) {
    throttle((sec) => {
        localStorage.setItem("videoplayer-current-time", `${sec}`)
    }, 500)
    // seconds = the current playback position
}).catch(function(error) {
    // an error occurred
});
player.getCurrentTime(throttle((seconds) => {
    localStorage.setItem("videoplayer-current-time", `${seconds}`)
}, 500)
);


player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
