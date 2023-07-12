const items = [...document.getElementsByTagName('input')]

let lastSelected = 0

let pressedKeys = new Set()

document.addEventListener('keydown', (e) => {
    pressedKeys.add(e.key)
})
document.addEventListener('keyup', (e) => {
    pressedKeys.delete(e.key)
})

for (let i = 0; i < items.length; i++) {
    const cb = items[i]
    cb.addEventListener('click', (e) => {
        if (pressedKeys.has('Shift')) {
            if (lastSelected < items.indexOf(e.target)) {
                for (let k = lastSelected; k < items.indexOf(e.target); k++) {
                    const element = items[k]
                    element.checked = true
                }
            }
            if (lastSelected > items.indexOf(e.target)) {
                for (let k = lastSelected; k > items.indexOf(e.target); k--) {
                    const element = items[k]
                    element.checked = true
                }
            }
        }
        lastSelected = items.indexOf(e.target)
    })
}
