// Write your package code here!
window.addEventListener("resize", _.debounce(function() {
  
  var activeElement = document.activeElement;

  if (activeElement instanceof HTMLInputElement) {
    var boundingRect = activeElement.getBoundingClientRect(),
        isBelowViewport = (window.innerHeight - boundingRect.bottom) < 0;

    if (isBelowViewport) {
      return activeElement.scrollIntoView(false);
    }
  }
}, 50));