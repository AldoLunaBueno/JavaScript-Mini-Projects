const scrollContainer = document.querySelector(".gallery")
const backBtn = document.querySelector(".back-btn")
const nextBtn = document.querySelector(".next-btn")

scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault()
    scrollContainer.scrollLeft += e.deltaY
})

backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 1000
})

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 1000
})