const planes = document.getElementsByClassName('plane-initial')
if (planes) {
  Array.from(planes).forEach((plane, i) => {
    if (plane) {
      setTimeout(() => plane.classList.add('plane-finished'), 500 * i)
    }
  })
}
