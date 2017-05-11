
const init = el => {
  const img = el.querySelectorAll('img')

  if (!img) {
    return
  }

  img.forEach(img => {
    img.addEventListener('click', () => window.alert(img.src))
  })
}

const components = document.querySelectorAll('.js-basic')

if (components) {
  components.forEach(init)
}
