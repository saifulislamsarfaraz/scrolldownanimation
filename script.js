const panels = document.querySelectorAll('.panel');

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4

  panels.forEach(panel => {
    const boxTop = panel.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      panel.classList.add('show')
    } else {
      panel.classList.remove('show')
    }
  })
}