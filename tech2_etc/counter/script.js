let countText = document.getElementById("countText")
let prevBtn = document.getElementsByClassName("counterBtn prevBtn")[0]
let nextBtn = document.getElementsByClassName("counterBtn nextBtn")[0]


let counter = function() {
    let count = 0

    function decrease() {
        count--
        countText.innerHTML = count
        setColorByCount(count)
    }
    
    function increase() {
        count++
        countText.innerHTML = count
        setColorByCount(count)
    }

    function setColorByCount(count) {
        if (count == 0) {
            countText.style.color = "black"
        } else if (count < 0) {
            countText.style.color = "red"
        } else if (count > 0) {
            countText.style.color = "green"
        }
    }

    return {"decrease": decrease, "increase": increase}
}

// Create the counter instance
let counterInstance = counter()

// Add event listeners to buttons, referencing the instance's methods
prevBtn.addEventListener("click", counterInstance.decrease)
nextBtn.addEventListener("click", counterInstance.increase)