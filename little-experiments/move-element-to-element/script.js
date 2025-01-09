$ = (el) => document.querySelector(el)

const button = $("button")
const source = $(".ball.source")
const target = $(".ball.target")

button.addEventListener("click", move)

function move() {
  const targetX = target.offsetLeft + target.offsetWidth/2
  const targetY = target.offsetTop + target.offsetHeight/2
  const sourceX = source.offsetLeft + source.offsetWidth/2
  const sourceY = source.offsetTop + source.offsetHeight/2
  target.style.borderColor = "red"
  const x = targetX - sourceX
  const y = targetY - sourceY
  source.style.transition = "all 1s"
  source.style.transform = `translate(${x}px, ${y}px)`
  button.removeEventListener("click", move)
  setTimeout(() => {
    target.appendChild(source)
    source.style.transform = ""
    source.style.top = "auto"
    source.style.left = "auto"
  }, 1000);
}


