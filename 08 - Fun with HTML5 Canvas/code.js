const c = document.getElementById('draw')
const ctx = c.getContext('2d')
const colorInput = document.getElementById('drawColor')
const widthInput = document.getElementById('maxWidth')

ctx.lineJoin = 'round'
ctx.lineCap = 'round'

let x = 0
let y = 0
let deltaY = 0
let deltaX = 0
let drawing = false

const data = {
    prev: {
        x: 0,
        y: 0,
        deltaY: 0,
        deltaX: 0,
        drawing: 0,
    },
    current: {
        x: 0,
        y: 0,
        deltaY: 0,
        deltaX: 0,
        drawing: 0,
    },
}

const calcWith = () => {
    const val =
        widthInput.value -
        (Math.abs(data.current.deltaX) + Math.abs(data.current.deltaY)) / 2
    return val > 3 ? val : 3
}

const updateMouseData = (e) => {
    data.prev = data.current
    data.current = {
        x: e.offsetX,
        y: e.offsetY,
        deltaY: e.movementY,
        deltaX: e.movementX,
    }
    if (drawing) {
        ctx.lineWidth = calcWith()
        ctx.strokeStyle = colorInput.value
        ctx.beginPath()
        ctx.moveTo(data.prev.x, data.prev.y)
        ctx.lineTo(data.current.x, data.current.y)
        ctx.stroke()
    }
}

c.addEventListener('mousemove', updateMouseData)
c.addEventListener('mousedown', () => {
    drawing = true
})
document.addEventListener('mouseup', () => {
    drawing = false
})
