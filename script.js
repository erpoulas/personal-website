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

// Lazily loads modal iframes (video embeds, p5.js sketches) only while
// their modal is open, so nothing loads on page load and nothing keeps
// playing in the background after the modal is closed.
document.querySelectorAll('.modal').forEach((modal) => {
  const iframes = modal.querySelectorAll('iframe[data-src]');
  if (!iframes.length) return;

  modal.addEventListener('show.bs.modal', () => {
    iframes.forEach((iframe) => { iframe.src = iframe.dataset.src; });
  });

  modal.addEventListener('hidden.bs.modal', () => {
    iframes.forEach((iframe) => { iframe.src = ''; });
  });
});
