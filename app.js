const content = document.getElementById('course-content');
const menuButton = document.querySelector('.menu-button');
const navigation = document.getElementById('site-nav');
const topButton = document.querySelector('.back-to-top');

const sectionMap = [
  [/Important Steps After Arriving/i, 'arrival'],
  [/Understanding the myOVGU Portal/i, 'myovgu'],
  [/ITVET Master Programme/i, 'modules'],
  [/Course Timetable Overview/i, 'timetable'],
  [/Master['’]s Thesis/i, 'thesis'],
  [/Participation in the Introductory Event/i, 'contacts']
];

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation.addEventListener('click', event => {
  if (!event.target.matches('a')) return;
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
});

topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
  topButton.classList.toggle('visible', window.scrollY > 650);
  updateActiveLink();
}, { passive: true });

function cleanLiaScript(source) {
  const scriptMatch = source.match(/<script run-once>([\s\S]*?)<\/script>/i);
  const scriptCode = scriptMatch ? scriptMatch[1] : '';
  let markdown = source
    .replace(/^<!--[\s\S]*?-->\s*/i, '')
    .replace(/<script run-once>[\s\S]*?<\/script>/i, '')
    .replace(/^\s*--\{\{\d+\}\}--\s*$/gm, '')
    .replace(/^!\?\[\]\(([^)]+)\)\s*$/gm, '<video controls playsinline preload="metadata" src="$1"></video>');
  return { markdown, scriptCode };
}

function addSectionIds() {
  const headings = [...content.querySelectorAll('h1, h2')];
  for (const [pattern, id] of sectionMap) {
    const heading = headings.find(item => pattern.test(item.textContent) && !document.getElementById(id));
    if (heading) heading.id = id;
  }
  const lastContactHeading = headings.find(item => /Participation in the Introductory Event/i.test(item.textContent));
  if (lastContactHeading) lastContactHeading.id = 'contacts';
}

function makeTablesResponsive() {
  content.querySelectorAll('table').forEach(table => {
    if (table.parentElement.classList.contains('table-wrap')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrap';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

function executeCourseScript(code) {
  if (!code) return;
  try {
    Function(code)();
  } catch (error) {
    console.error('Orientation assistant could not start:', error);
  }
}

function updateActiveLink() {
  const anchors = [...navigation.querySelectorAll('a')];
  const targets = anchors
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  let current = targets[0];
  for (const target of targets) {
    if (target.getBoundingClientRect().top <= 120) current = target;
  }
  anchors.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current?.id}`));
}

async function loadCourse() {
  try {
    const response = await fetch('README.md', { cache: 'no-store' });
    if (!response.ok) throw new Error(`README.md returned ${response.status}`);
    const source = await response.text();
    const { markdown, scriptCode } = cleanLiaScript(source);
    marked.setOptions({ gfm: true, breaks: false });
    content.innerHTML = marked.parse(markdown);
    addSectionIds();
    makeTablesResponsive();
    executeCourseScript(scriptCode);
    updateActiveLink();
  } catch (error) {
    content.innerHTML = `<div class="error-panel"><strong>The guide could not be loaded.</strong><br>${error.message}</div>`;
  }
}

loadCourse();
