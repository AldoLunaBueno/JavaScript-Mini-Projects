$ = el => document.querySelector(el)
$$ = els => document.querySelectorAll(els)

const box = $(".box")
const containers = $$("containers")

let elementBelow = null
let overValidElement = false

function handleTouchStart(ev) {
    const touch = ev.touches[0]
    const rect = box.getBoundingClientRect();

    const offsetX = touch.clientX - rect.left
    const offsetY = touch.clientY - rect.top

    const onMove = (moveEv) => {
        const moveTouch = moveEv.touches[0];
        box.style.pointerEvents = "none" // this is the hack!
    
        // Actualizar la posición del elemento
        box.style.left = `${moveTouch.clientX - offsetX}px`;
        box.style.top = `${moveTouch.clientY - offsetY}px`;

        elementBelow = document.elementFromPoint(moveTouch.clientX, moveTouch.clientY);
        if (elementBelow && elementBelow.classList.contains("container")) {
            overValidElement = true
        } else {
            overValidElement = false
        }
    }

    const onEnd = () => {
        document.removeEventListener("touchmove", onMove);
        document.removeEventListener("touchend", onEnd);

        if (overValidElement) {
            elementBelow.appendChild(box)
            console.log(elementBelow)
        }
        box.style.pointerEvents = "auto"
        box.style.left = "auto"
        box.style.top = "auto"
    }

    document.addEventListener("touchmove", onMove);
    document.addEventListener("touchend", onEnd);    
}

box.addEventListener("touchstart", handleTouchStart)