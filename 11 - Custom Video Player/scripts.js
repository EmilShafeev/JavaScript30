const player = document.getElementsByTagName('video')[0]

//controlls
const toggleBtn = document.querySelector('button[title="Toggle Play"]')
const activeTimeLine = document.querySelector('.progress__filled')
const fullTimeLine = document.querySelector('.progress')
const skips = document.querySelectorAll('button[data-skip]')
const volume = document.querySelector('input[name="volume"]')
const playbackRate = document.querySelector('input[name="playbackRate"]')

const play = () => {
    player.play()
    toggleBtn.textContent = '||'
}

const pause = () => {
    player.pause()
    toggleBtn.textContent = '>'
}

const chageTime = (e) => {
    player.currentTime =
        (player.duration * ((e.offsetX * 100) / fullTimeLine.offsetWidth)) / 100
}

toggleBtn.addEventListener('click', () => (player.paused ? play() : pause()))
fullTimeLine.addEventListener('click', chageTime)
volume.addEventListener('input', (e) => (player.volume = e.target.value))
player.addEventListener('click', () => (player.paused ? play() : pause()))
player.addEventListener(
    'timeupdate',
    () =>
        (activeTimeLine.style.flexBasis = `${
            (100 / player.duration) * player.currentTime
        }%`)
)
playbackRate.addEventListener(
    'input',
    (e) => (player.playbackRate = e.target.value)
)

for (const skip of skips) {
    skip.addEventListener('click', () => {
        player.currentTime += parseInt(skip.getAttribute('data-skip'))
    })
}
