function rightClick() {
  if (window.getSelection().toString() != '') {
    alert('Mouse Right Click Disabled!');
  }
}
document.addEventListener('contextmenu', rightClick);