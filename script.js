// Keeps --footer-height in sync with the fixed footer's actual rendered height
// so `main`'s padding-bottom never overlaps or under-clears it.
function setFooterVar() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  const height = footer.getBoundingClientRect().height;
  document.documentElement.style.setProperty('--footer-height', height + 'px');
}

window.addEventListener('load', setFooterVar);
window.addEventListener('resize', setFooterVar);
