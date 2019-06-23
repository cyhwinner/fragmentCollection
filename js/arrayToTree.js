let tree = [
  { id: 1, name: 'firstParent'},
  { id: 2, prarentId: 1, name: '子节点1'},
  { id: 3, prarentId: 1, name: '子节点2'},
  { id: 4, prarentId: 1, name: '子节点3'},
  { id: 5, prarentId: 1, name: '子节点4'},
  { id: 6, prarentId: 1, name: '子节点5'},
  { id: 7, prarentId: 1, name: '子节点6'},
  { id: 8, prarentId: 1, name: '子节点7'},
  { id: 2, name: 'secondParent'},
  { id: 21, prarentId: 2, name: '子节点8'},
  { id: 22, prarentId: 2, name: '子节点9'},
  { id: 23, prarentId: 2, name: '子节点20'},
  { id: 24, prarentId: 2, name: '子节点22'},
  { id: 25, prarentId: 2, name: '子节点22'},
  { id: 26, prarentId: 2, name: '子节点23'},
  { id: 27, prarentId: 2, name: '子节点14'},
  { id: 28, prarentId: 27, name: '孙节点1'},
  { id: 29, prarentId: 27, name: '孙节点2'},
]

function handleTree(data) {
	const map = {};
	const tree = [];
	data.forEach((ele) => {
		map[ele.id] = Object.assign(ele, {children: []});
	})
	data.forEach((ele) => {
		if (ele.prarentId === undefined) {
			tree.push(ele);
		} else {
			map[ele.prarentId].children.push(ele);
		}
	})
	return tree;
}

console.log(handleTree(tree))