function resolveImagePath(image: string): string {
  return image.startsWith('http') ? image : new URL('../assets/' + image, import.meta.url).href
}

interface Document {
  documentMode?: boolean | undefined
}

function getBrowser() {
  if ((navigator.userAgent.indexOf('Opera') || navigator.userAgent.indexOf('OPR')) != -1) {
    return 'Opera'
  } else if (navigator.userAgent.indexOf('Edg') != -1) {
    return 'Edge'
  } else if (navigator.userAgent.indexOf('Chrome') != -1) {
    return 'Chrome'
  } else if (navigator.userAgent.indexOf('Safari') != -1) {
    return 'Safari'
  } else if (navigator.userAgent.indexOf('Firefox') != -1) {
    return 'Firefox'
  } else if (
    navigator.userAgent.indexOf('MSIE') != -1 ||
    !!(document as Document).documentMode == true //IF IE > 10
  ) {
    return 'IE'
  } else {
    return 'unknown'
  }
}

export { resolveImagePath, getBrowser }
