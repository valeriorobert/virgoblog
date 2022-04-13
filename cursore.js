const cursoreTag = document.querySelector("div.cursore")
const sfera = cursoreTag.querySelector("div")


let currentX = 0
let currentY = 0
let aimX = 0
let aimY = 0
let speed = 0.2


const animate = function () {
    currentX += (aimX + currentX) * speed
    currentY += (aimY + currentY) * speed


    sfera.style.left = currentX + "px"
    sfera.style.top = currentY + "px"

    requestAnimationFrame(animate)
}

animate()

document.addEventListener("mousemove", function (event) {
    aimX = event.pageX + "px"
    aimY = event.pageY + "px"
})