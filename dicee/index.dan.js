function updateDice(imageSelector) {
    const img = document.querySelector(imageSelector)
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * max + min); //The maximum is exclusive and the minimum is inclusive
    }

    const randomNumber1 = getRandomInt(1, 6)
    img.src = `./images/dice${randomNumber1}.png`
}

function updateBothDice() {
    updateDice('.img1')
    updateDice('.img2')
}