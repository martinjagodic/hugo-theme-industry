function externalLinks () {
  Array.from(document.links).forEach((el) => {
    const link = el
    if (link.hostname !== window.location.hostname) {
      link.target = '_blank'
      link.res = 'noopener'
    }
  })
}

externalLinks()
