const topics = [...document.querySelectorAll('.topic')];
const search = document.getElementById('topic-search');
const count = document.getElementById('result-count');
const noResults = document.getElementById('no-results');
const backToTop = document.getElementById('back-to-top');

document.getElementById('expand-all').addEventListener('click', () => {
  topics.filter(topic => !topic.hidden).forEach(topic => { topic.open = true; });
});
document.getElementById('collapse-all').addEventListener('click', () => {
  topics.forEach(topic => { topic.open = false; });
});
search.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  topics.forEach(topic => {
    const matches = !query || topic.dataset.title.includes(query) || topic.textContent.toLowerCase().includes(query);
    topic.hidden = !matches;
    if (matches) { visible += 1; if (query) topic.open = true; }
  });
  count.textContent = query ? `${visible} matching topic${visible === 1 ? '' : 's'}` : `Showing all ${topics.length} topics`;
  noResults.hidden = visible !== 0;
});
topics.forEach(topic => topic.addEventListener('toggle', () => {
  if (!topic.open || search.value.trim()) return;
  topics.forEach(other => { if (other !== topic) other.open = false; });
}));
window.addEventListener('scroll', () => backToTop.classList.toggle('visible', window.scrollY > 700), { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
