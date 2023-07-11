const getAngleForSecond = (date) => (360 / 60) * parseInt(date.getSeconds())
const getAngleForMinute = (date) => (360 / 60) * parseInt(date.getMinutes())
const getAngleForHour = (date) =>
    (360 / 12) * (parseInt(date.getHours()) % 12) +
    (360 / 12 / 60) * parseInt(date.getMinutes())

const rotateElement = (element, rotate) =>
    (element.style.transform = `rotate(${rotate}deg)`)

const hourElement = document.getElementsByClassName('hour-hand')[0]
const minuteElement = document.getElementsByClassName('min-hand')[0]
const secondElement = document.getElementsByClassName('second-hand')[0]

setInterval(() => {
    const date = new Date()
    rotateElement(hourElement, getAngleForHour(date))
    rotateElement(minuteElement, getAngleForMinute(date))
    rotateElement(secondElement, getAngleForSecond(date))
}, 1000)
