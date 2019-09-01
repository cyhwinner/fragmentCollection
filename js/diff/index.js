import el from './element.js';
import diff from './diff.js';
import patch from './patch.js';

let ul = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 1']),
  el('li', { class: 'item', key: 1 }, ['Item 2']),
  el('li', { class: 'item' }, ['Item 3'])
])
let ul1 = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 4']),
  el('li', { class: 'item' }, ['Item 3']),
  el('li', { class: 'item' }, ['Item 1']),
  el('div', { class: 'item', key: 1 }, ['Item 2']),
])

const ulElement = ul.render();
const patches = diff(ul, ul1);
console.log(patches)
// console.log(patch(ulElement, patches));
// document.body.appendChild(ulElement);