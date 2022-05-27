/* global lightGallery */

import * as licenseKey from '@params'

const galleryEls = document.querySelectorAll('.gallery')

galleryEls?.forEach(gallery => {
  lightGallery(gallery, { licenseKey })
})
