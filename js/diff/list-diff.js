import _ from './util.js';

function listDiff(oldList, newList, key) {
  let oldMap = getFreeAndIndex(oldList);
  let newMap = getFreeAndIndex(newList);
  let oldKeyIndex = oldMap.keyIndex;
  let newKeyIndex = newMap.keyIndex;

  let children = [];
  let moves = [];
  let i = 0;

  oldList.forEach((child, index) => {
    const key = child.key;
    const newChildIndex = newKeyIndex[key];
    if (key) {
      if (newList[newChildIndex]) {
        children.push(newList[newChildIndex])
      } else {
        children.push(null);
      }
    } else {
      if (newList[i]) {
        children.push(newList[i++]);
      } else {
        children.push(null);
      }
    }
  })

  let simulateList = children.slice();
  let j = 0;
  while(j < simulateList.length) {
    if (simulateList[j] === null) {
      remove(j);
      removeSimulate(j);
    } else {
      j++;
    }
  }
  i = 0;
  j = 0;
  while(i < newList.length) {
    let newChild = newList[i];
    let newKey = newChild.key;

    let simulaItem = simulateList[j];
    let simulateKey = simulaItem && simulaItem.key;

    if (simulaItem) {
      if( simulateKey === newKey) {
        j++;
      } else {
        const nextSimulateItemKey = simulateList[j+1].key;
        if (newKey === nextSimulateItemKey) {
          remove(i);
          removeSimulate(j);
          j++;
        } else {
          insert(i, newChild);
        }
      }
    } else {
      insert(i, newChild);
    }

    i++;
  }

  let k = 0;
  while(j++ < simulateList) {
    remove(k+i);
    k++;
  }

  function remove(index) {
    let move = { index: index, type: 0 };
    moves.push(move);
  }
  function insert(index, node) {
    let move = { index: index, node: node, type: 1};
    moves.push(move);
  }
  function removeSimulate(index) {
    simulateList.splice(index, 1);
  }
  return { moves, children }
}




function getFreeAndIndex(list) {
  let free = [];
  let keyIndex = {};

  list.forEach((child, index) => {
    if (child.key) {
      keyIndex[child.key] = index;
    } else {
      free.push(child);
    }
  })

  return { keyIndex, free };
}


module.exports = listDiff;
