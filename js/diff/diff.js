import _ from './util.js';
import listDiff from './list-diff.js';
const REPLACE = 0  // replace => 0
const ATTRS   = 1  // attrs   => 1
const TEXT    = 2  // text    => 2
const REORDER = 3  // reorder => 3

function diff(oldNode, newNode) {
  let patches = {};
  let index = 0;
  walk(oldNode, newNode, index, patches);
  return patches;
}

function walk(oldNode, newNode, index, patches) {
  let currentPatch = [];
  if (newNode === null) {

  } else if (_.isString(oldNode) && _.isString(newNode)) {
    if (oldNode !== newNode) {
      currentPatch.push({ type: TEXT, content: newNode});
    }
  } else if (oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
    let patchDiff = diffAttrs(oldNode, newNode);
    if (patchDiff) {
      currentPatch.push({ type: ATTRS, node: patchDiff });
    }
    diffChildren(oldNode.children, newNode.children, index, patches, currentPatch)
  } else {
    currentPatch.push({ type: REPLACE, node: newNode });
  }
  if (currentPatch.length) {
    patches[index] = currentPatch;
  }
}

function diffAttrs(oldNode, newNode) {
  let count = 0;
  let patches = {};
  let oAttrs = oldNode.attrs;
  let nAttrs = newNode.attrs;

  for(const key in oAttrs) {
    const oValue = oAttrs[key];
    const nValue = nAttrs[key];
    if (oValue !== oValue) {
      count++;
      patches[key] = nAttrs[key];
    }
  }

  for(const key in nAttrs) {
    const oValue = oAttrs[key];
    const nValue = nAttrs[key];
    if (oValue === undefined) {
      count++;
      patches[key] = nValue;
    }
  }
  if (count) return patches;
  return null;
}

let key_index = 1; // 给每个元素标记索引
function diffChildren(oldChild, newChild, index, patches, currentPatch) {
  let diff = listDiff(oldChild, newChild, 'key');
  let nChildren = diff.children;
  if (diff.moves.length) {
    currentPatch.push({ type: REORDER, moves: diff.moves });
  }

  oldChild.forEach((child, i) => {
    let currentIndex = key_index++;
    let nChild = nChildren[i];
    walk(child, nChild, currentIndex, patches);
  })
}

module.exports = diff;  