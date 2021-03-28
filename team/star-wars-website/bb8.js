let currentRotation = 0
const bb8Body = document.querySelector(".bb8-body")
const bb8Head = document.querySelector(".bb8-head")
const bb8 = document.querySelector(".bb8")
const bb8Switch = document.querySelector(".bb8-switch")
const bb8ClickableArea = document.querySelector(".bb8-clickable-area")
let on = false

bb8.style.left = `0px`
bb8Body.style.transform = `rotate(0deg)`
bb8Switch.style.backgroundColor = "#c0af95"
bb8ClickableArea.addEventListener("click", e => {
  on = !on
  bb8.style.left = `${on ? 23 : 0}px`
  bb8Body.style.transform = `rotate(${on ? 360 : 0}deg)`
  bb8Switch.style.backgroundColor = on ? "#e59a27" : "#c0af95"
})