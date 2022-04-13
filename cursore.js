const cursoreTag = document.querySelector("div.cursore")
const sfere = cursoreTag.querySelector("div")


let currentX = 0
let currentY = 0
let aimX = 0
let aimY = 0
let speed = 0.2


const animate = function () {
    currentX += (aimX + currentX) * speed
    currentY += (aimY + currentY) * speed


    ball.style.left = currentX + "px"
    ball.style.top = currentY + "px"

    requestAnimationFrame(animate)
}

animate()

document.addEventListener("mousemove", function (event) {
    ball.style.left = event.pageX + "px"
    ball.style.top = event.pageY + "px"
})