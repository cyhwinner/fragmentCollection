import _ from './util.js';
const REPLACE = 0  // replace => 0
const ATTRS   = 1  // attrs   => 1
const TEXT    = 2  // text    => 2
const REORDER = 3  // reorder => 3


function patch(node, patches) {
  let work = { index: 0 };
  walk(node, work, patches);
  return node
}

function walk(node, work, patches) {
  let currentPatch = patches[work.index];
  let nodeLen = node.childNodes.length;

  for(let i = 0; i < nodeLen; i++) {
    work.index++;
    let child = node.childNodes[i];
    walk(child, work, patches);
  }

  if (currentPatch) {
    patchNode(node, currentPatch);
  }
}

function patchNode(node, patches) {

  let patch = patches[0];
  patches.forEach((patch) => {
    switch(patch.type) {
      case REPLACE:
        const replaceNode = _.type(patch.node) === 'Object' ? patch.node.render() : document.createTextNode(patch.node);
        node.parentNode.replaceChild(replaceNode, node);
        break;
      case ATTRS:
        pacthAttrs(node, patch);
        break;
      case TEXT:
        if (node.textContent) {
          node.textContent = patch.content;
        } else {
          node.nodeValue = patch.content;
        }
        break;
      case REORDER:
        patchRecorder(node, patch);
    }
  })
}

function patchAttrs(node, patch) {
  let attrs = patch.attrs;
  let nodeAttrs = node.attrs;
  for(const key in attrs) {
    if (nodeAttrs[key] === undefined) {
      node.removeAttribute(key);
    } else {
      _.setAttrs(node, key, attrs[key]);
    }
  }
}

function patchRecorder(node, patch) {
  let map = {};
  let moves = patch.moves;
  let staticList = [].slice.call(node.childNodes);
  staticList.forEach((child) => {
    if (child.key) {
      map[key] = child;
    }
  })
  moves.forEach((move) => {
    const index = move.index;
    if (move.type === 0) {
      if (staticList[index] = node.childNodes[index]) {
        node.removeChild(node.childNodes[index]);
      }
      staticList.splice(index, 1)
    } else {
      let item = move.node;
      let itemNode = map[item.key] ?map[item.key] :  _.type(item) === 'Object' ? item.render() : document.createTextNode(item);
      staticList.splice(index, 0, itemNode);
      node.insertBefore(itemNode, node.childNodes[index]);
    }
  })
}

module.exports = patch;