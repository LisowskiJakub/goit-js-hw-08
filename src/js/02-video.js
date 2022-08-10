import Player from '@vimeo/player';
import { throttle } from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});


player.on('timeupdate', throttle(evt => {
    localStorage.setItem("videoplayer-current-time", evt.seconds);
}, 500)
);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
.catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

