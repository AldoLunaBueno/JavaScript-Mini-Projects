let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");

buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        if (screen.value === "Err") {
            screen.value = "" // Clear error message when new input is entered
        }
        let value = e.target.dataset.num;
        if (!value) { // Exclude buttons like equal and clear, with no value
            return
        }
        screen.value += value;
    })
});

equal.addEventListener("click", function(e) {
    if (!screen.value) {
        screen.value = ""
        return
    }
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Err"
    }
})

clear.addEventListener("click", function(e) {
    screen.value = "";
})