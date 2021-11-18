import throttle from 'lodash.throttle'
import vimeoPlayer from '@vimeo/player'

const player = new vimeoPlayer(document.querySelector('#vimeo-player'))

player.on('timeupdate', throttle(onPlay, 1000))

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(Number.parseFloat(localStorage.getItem('videoplayer-current-time')))
}

function onPlay(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds === event.duration ? 0 : event.seconds)
}
