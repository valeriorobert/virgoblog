const cursoreTag = document.querySelector("div.cursore")
const sfere = cursoreTag.querySelector("div")

document.addEventListener("mousemove", function (event) {
    ball.style.left = event.pageX + "px"
    ball.style.top = event.pageY + "px"
}