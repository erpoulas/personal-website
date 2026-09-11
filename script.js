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

// Stops embedded videos (e.g. Google Drive/p5.js iframes) from continuing
// to play in the background after their modal is closed.
document.querySelectorAll('.modal').forEach((modal) => {
  const iframes = modal.querySelectorAll('iframe');
  if (!iframes.length) return;

  const sources = new Map();
  iframes.forEach((iframe) => sources.set(iframe, iframe.src));

  modal.addEventListener('hidden.bs.modal', () => {
    iframes.forEach((iframe) => { iframe.src = ''; });
  });

  modal.addEventListener('show.bs.modal', () => {
    iframes.forEach((iframe) => { iframe.src = sources.get(iframe); });
  });
});
