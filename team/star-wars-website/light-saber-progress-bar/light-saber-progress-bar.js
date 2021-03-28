const light = document.querySelector(".lightsaber-light")
const lightsaber = document.querySelector(".lightsaber")
const lightImg = document.querySelector("img[src*='lightsaber-light']")
const percentage = document.querySelector(".loading-percentage")
const loadingTitle = document.querySelector(".loading-title")
const percentageWrapper = document.querySelector(".loading-percentage-wrapper")

const observer = new MutationObserver(function(mutations) {
  mutations.forEach(mutation => {
    if (mutation.type == "attributes" && mutation.attributeName === "percentage") {
      const newValue = mutation.target.getAttribute("percentage")
      light.style.width = `${Number(newValue) / 100 * 74}%`
      lightImg.style.left = `${-300 + (290 * newValue / 100)}px`
      percentage.innerText = `${newValue}`
    }
  })
})

const element = document.querySelector(".lightsaber")
observer.observe(element, { attributes: true })

let percentageAmt = Number(lightsaber.getAttribute("percentage"))
light.style.width = `${Number(percentage) / 100 * 74}%`

const id = setInterval(() => {
  percentageAmt++
  if (percentageAmt > 100) {
    percentageAmt = 100
  }
  lightsaber.setAttribute("percentage", `${percentageAmt}`)
  if (percentageAmt === 100) {
    clearInterval(id)
    document.body.style.backgroundColor = "white"
  }
}, 50)