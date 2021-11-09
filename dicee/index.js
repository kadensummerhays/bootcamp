function getRandomInt(min, max) {
  return Math.floor(Math.random() * max + min); //The maximum is exclusive and the minimum is inclusive
}

function updateDice(selector) {
    let randomNumber1 = getRandomInt(1,6) 
    let img = document.querySelector(selector)
    img.src = `./images/dice${randomNumber1}.png`
    return randomNumber1
}

function updateH1(text){
    debugger
    let title = document.querySelector('.title')
    title.innerHTML = text
}

function update() {
    let n1 = updateDice('.img1')
    let n2 = updateDice('.img2')

    if (n1 < n2) {
        updateH1('Player 2 Wins ⚑')
    }

    else if (n1 > n2) {
        updateH1('⚑ Player 1 Wins')
    }
    else  {
        updateH1('⚑ Draw! ⚑')
    }
}
