# heap [![Circle CI](https://circleci.com/gh/streamrail/heap.svg?style=svg)](https://circleci.com/gh/streamrail/heap)
npm module of min / max heap, this heap implementation keeps track of value changes
to its elements through a 'change' event fired by an individual element, in such case the heap
will reposition its elements to maitain its max / min order.

## usage

```javascript
var Heap = require('heap.js');

// Max heap compare function.
var maxHeapCompareFunc = function(a, b) { return a > b; };

// Min heap compare function.
var minHeapCompareFunc = function(a, b) { return a < b; };

var h = new Heap(maxHeapCompareFunc);
h.Push(4);
h.Push(1);
h.Push(3);
h.Push(2);

var element = h.Peek();	// returns 4
element = h.Pop();		// returns 4
element = h.Pop();		// returns 3
element = h.Pop();		// returns 2
element = h.Pop();		// returns 1
element = h.Pop();		// returns null
element = h.Peek();		// returns null

```

## Running tests:
```bash
npm test
```


## license 
MIT (see [LICENSE](https://github.com/streamrail/concurrent-map/blob/master/LICENSE) file)
