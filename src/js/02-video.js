import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
    id: "vimeo-player",
    width: 640
});

const VIDEOPLAYTIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(getCurrentTime, 1000));

function getCurrentTime(e) {
  const seconds = e.seconds;
  localStorage.setItem(VIDEOPLAYTIME_KEY, JSON.stringify(seconds));
};


player.setCurrentTime(JSON.parse(localStorage.getItem(VIDEOPLAYTIME_KEY)));