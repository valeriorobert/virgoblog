const sfera = document.getElementById("sfera")


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
const onMouseMove = (event) => {
    aimX = event.pageX + "px"
    aimY = event.pageY + "px"

}
document.addEventListener("mousemove", onMouseMove)