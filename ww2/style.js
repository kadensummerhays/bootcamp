function runMe() {
  console.log(document.forms[0].name.value)
  console.log(document.forms[0].age.value)
  console.log(document.forms[0].combat.checked)
  console.log(document.forms[0].side.value)

  let side = document.forms[0].side.value
  if (!side) {
    return
  }
  if (side === 'germany') {
    side = 'German'
  }

  if (side === 'allies') {
    side = 'American'
  }
  alert(
    `Congratulations, ${document.forms[0].name.value}, you joined the ${side} army!`,
  )

  if (side === 'German') {
    window.location = '/germany.html'
  }
}

document.getElementById('germany').addEventListener('click', () => {
  const form = document.getElementById('join-form')
  form.action = 'germany.html'
  // https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png
  const flag = document.getElementById('flag')
  flag.style.display = 'initial'
  flag.src =
    'https://images-na.ssl-images-amazon.com/images/I/51gUkrbnVrL._AC_SL1001_.jpg'
  flag.alt = 'German Flag'
})

document.getElementById('allies').addEventListener('click', () => {
  const form = document.getElementById('join-form')
  form.action = 'allies.html'
  // https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png
  const flag = document.getElementById('flag')
  flag.style.display = 'initial'
  flag.src =
    ' https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'
  flag.alt = 'American Flag'
})
