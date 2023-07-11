const css = {
    PLAYING: 'playing',
}

const indicators = document.getElementsByClassName('key')
const keysIndicators = new Map()
const audios = new Map()

for (let i = 0; i < indicators.length; i++) {
    const indicatorElement = indicators.item(i)

    let key = indicatorElement.getAttribute('data-key')
    keysIndicators.set(parseInt(key), indicatorElement)
}

keysIndicators.forEach((value, key) => {
    const audioName = value.getElementsByClassName('sound')[0].textContent
    audios.set(key, new Audio(`./sounds/${audioName}.wav`))
})

window.addEventListener('keydown', (event) => {
    keysIndicators.get(event.keyCode).classList.add(css.PLAYING)
    const audio = audios.get(event.keyCode)
    audio.currentTime = 0
    audio.play()
})

window.addEventListener('keyup', (event) =>
    keysIndicators.get(event.keyCode).classList.remove(css.PLAYING)
)
