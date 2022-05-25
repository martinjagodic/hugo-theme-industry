const menuEl = document.querySelector('.main-menu')
const langSwitchEl = document.querySelector('.lang-switch')

function closeMenu (button) {
  button.setAttribute('aria-expanded', 'false')
  button.title = button.dataset.openMenu
  document.body.classList.remove('overflow-hidden')
}

function menu () {
  const button = menuEl.querySelector('button')
  button.addEventListener('click', () => {
    if (button.getAttribute('aria-expanded') === 'false') {
      button.setAttribute('aria-expanded', 'true')
      button.title = button.dataset.closeMenu
      document.body.classList.add('overflow-hidden')
    } else {
      closeMenu(button)
    }
  })

  document.addEventListener('click', (event) => {
    if (button.getAttribute('aria-expanded') === 'true' &&
      !button.contains(event.target)
    ) {
      closeMenu(button)
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
