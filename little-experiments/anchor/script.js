const anchor = document.getElementById("anchor")
const info = document.getElementById("info")
info.style.display = "block"
setTimeout(()=> {
    anchor.classList.add("anchor")
    info.classList.add("info")
}, 1000)
