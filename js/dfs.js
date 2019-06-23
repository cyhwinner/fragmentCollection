<script type="text/javascript">
	
	const data = [{
    id: '1',
    name: 'test1',
    children: [
        {
            id: '11',
            name: 'test11',
            children: [
                {
                    id: '111',
                    name: 'test111'
                },
                {
                    id: '112',
                    name: 'test112',
                    children: [
                    {
			            id: '12',
			            name: 'test12',
			            children: [
			                {
			                    id: '121',
			                    name: 'test121'
			                },
			                {
			                    id: '122',
			                    name: 'test122'
			                }
			            ]
			        }
                    ]
                }
            ]

        },
        
    ]
}];

function bfs(target, id) {
  const quene = [...target]
  do {
    const current = quene.shift()
    if (current.children) {
      quene.push(...current.children.map(x => ({ ...x, path: (current.path || current.id) + '-' + x.id })))
    }
    if (current.id === id) {
      return current
    }
  } while(quene.length)
  return undefined
}


function dfs(target, id) {
  const stask = [...target]
  do {
    const current = stask.pop()
    if (current.children) {
      stask.push(...current.children.map(x => ({ ...x, path: (current.path || current.id) + '-' + x.id })))
    }
    if (current.id === id) {
      return current
    }
  } while(stask.length)
  return undefined
}


function findTargetParent(arr, determination, results = []) {
	for(let i = 0; i < arr.length; i++) {
		const item = arr[i];
		if (item.id === determination) {
			results.push(item.id);
			return true;
		}
		if (item.children && item.children.length > 0 ) {
			results.push(item.id);
			findTree(item.children, determination, results);
		}
	}
	if (results[results.length - 1] === determination) {
		return results
	}
	return results.pop();
}

console.log(dfs(data, '122'))
</script>