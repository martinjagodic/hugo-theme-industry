function cookies () {
  const cookiesEl = document.querySelector('.js-cookies')
  const consentBtn = document.querySelector('.js-confirm-cookies')

  const cookieExists = document.cookie.match(/^(.*;)?\s*cookies\s*=\s*[^;]+(.*)?$/)

  if (!cookieExists && cookiesEl && consentBtn) {
    cookiesEl.classList.remove('is-hidden')

    consentBtn.addEventListener('click', () => {
      const date = new Date()
      date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000))
      document.cookie = `cookies=true; expires=${date}; path=/`
      cookiesEl.classList.add('is-hidden')
    })
  }
}

cookies()
