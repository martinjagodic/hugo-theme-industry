const menuEl = document.querySelector('.main-menu')
const langSwitchEl = document.querySelector('.lang-switch')

function menu () {
  const button = menuEl.querySelector('button')
  button.addEventListener('click', () => {
    if (button.getAttribute('aria-expanded') === 'false') {
      button.setAttribute('aria-expanded', 'true')
      document.body.classList.add('overflow-hidden')
    } else {
      button.setAttribute('aria-expanded', 'false')
      document.body.classList.remove('overflow-hidden')
    }
  })

  document.addEventListener('click', (event) => {
    if (button.getAttribute('aria-expanded') === 'true' &&
      !button.contains(event.target)
    ) {
      button.setAttribute('aria-expanded', 'false')
    }
  })
}

function langSwitch () {
  const button = langSwitchEl.querySelector('button')
  button.addEventListener('click', () => {
    if (button.getAttribute('aria-expanded') === 'false') {
      button.setAttribute('aria-expanded', 'true')
    } else {
      button.setAttribute('aria-expanded', 'false')
    }
  })

  document.addEventListener('click', (event) => {
    if (button.getAttribute('aria-expanded') === 'true' &&
      !button.contains(event.target)
    ) {
      button.setAttribute('aria-expanded', 'false')
    }
  })
}

if (menuEl) menu()
if (langSwitchEl) langSwitch()
