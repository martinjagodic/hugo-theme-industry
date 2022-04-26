import lozad from 'lozad'

function lazyLoad () {
  const els = document.querySelectorAll('.lazyload')
  const observer = lozad(els, {
    rootMargin: '10px 0px',
    threshold: 0,
    enableAutoReload: true,
  })
  observer.observe()
}

lazyLoad()
