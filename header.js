let headers = document.querySelectorAll('.head')
let footers = document.querySelectorAll('.foot')
let length = headers.length

const hsl = (h, s, l) => `hsl(${h}deg, ${s}%, ${l}%)`
const h = i => (i * 360) / length
const l = i => 100 - ((i + 1) * 100) / length

setTimeout(
  headers.forEach(
    (c, j) => (c.style.backgroundColor = hsl(h(2.86 + j / 20), 100, l(j)))
  ),
  250
)

setTimeout(
  footers.forEach(
    (c, j) =>
      (c.style.backgroundColor = hsl(
        h(2.86 + length - j / 20),
        100,
        l(length - j)
      ))
  ),
  1750
)
