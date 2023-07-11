const blur = document.getElementById('blur')
const spacing = document.getElementById('spacing')
const color = document.getElementById('base')

const img = document.getElementsByTagName('img')[0]

blur.addEventListener('change', (e) => {
    img.style.filter = `blur(${e.target.value}px)`
})

spacing.addEventListener('change', (e) => {
    img.style.padding = `${e.target.value}px`
})

color.addEventListener('change', (e) => {
    img.style.backgroundColor = `${e.target.value}`
})

blur.addEventListener('mousemove', (e) => {
    img.style.filter = `blur(${e.target.value}px)`
})

spacing.addEventListener('mousemove', (e) => {
    img.style.padding = `${e.target.value}px`
})
