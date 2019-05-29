'use strict'

function Heap (compareFunc) {	
	var _self = this;
	this.elements = [];
	this.compareFunc = compareFunc;

	_self.swap = function(aIdx, bIdx) {
		var a = _self.elements[aIdx];
		var b = _self.elements[bIdx];

		var tmp = a;
		_self.elements[aIdx] = b;
		_self.elements[bIdx] = tmp;

		if((a instanceof Object) && (b instanceof Object)) {
			a['_index'] = bIdx;
			b['_index'] = aIdx;
		}
	};

	_self.set = function(element, i) {
		if ((i < 0) || i >= _self.elements.length) {
			throw "index out of range."
		}

		_self.elements[i] = element;

		if(element instanceof Object) {
			element['_index'] = i;
		}
	};

	_self.parent = function(i) {
		if (i == 0) {
			return 0;
		}

		var idx = Math.floor((i - 1) / 2);
		return idx;
	};

	_self.leftChild = function(i) {
		var idx = (2 * i) + 1;
		if (_self.elements.length <= idx) {
			return -1;
		}
		return idx;
	};

	_self.rightChild = function(i) {
		var idx = (2 * i) + 2;
		if (_self.elements.length <= idx) {
			return -1;
		}
		return idx;
	};

	_self.upHeap = function(i) {
		var child = _self.elements[i];
		var parentIdx = _self.parent(i);
		
		if(parentIdx === -1) {
			// No parent.
			return;
		}

		if (i === parentIdx) {
			return;
		}

		var parent = _self.elements[parentIdx];

		if (compareFunc(child, parent)) {
			// Swap.
			_self.swap(i, parentIdx);
			_self.upHeap(parentIdx);
		}
	};

	_self.downHeap = function(i) {
		var node = _self.elements[i];
		var rightChildIdx = _self.rightChild(i);
		var leftChildIdx = _self.leftChild(i);
		var rightChild = null;
		var leftChild = null;
		var minIdx = -1;
		var min = null;


		if ((rightChildIdx === -1) && (leftChildIdx === -1)) {
			return
		}
		if (rightChildIdx !== -1) {
			rightChild = _self.elements[rightChildIdx];
			minIdx = rightChildIdx;
			min = rightChild;
		}
		if (leftChildIdx !== -1) {
			leftChild = _self.elements[leftChildIdx];
			minIdx = leftChildIdx;
			min = leftChild;
		}	

		if ((rightChild !== null) && (leftChild !== null)) {
			if(compareFunc(rightChild, leftChild)) {
				minIdx = rightChildIdx;
				min = rightChild;
			}
			else {
				minIdx = leftChildIdx;
				min = leftChild;
			}
		}

		if (compareFunc(min, node)) {
			// Swap.
			_self.swap(minIdx, i);
			_self.downHeap(minIdx);
		}
	};

	_self.heapify = function(i) {		
		if ((i < 0) || (i >= _self.elements.length)) {
			throw "index out of range.";
		}

		var node = _self.elements[i];
		var parent = _self.elements[_self.parent(i)];
		
		if (_self.compareFunc(node, parent)) {			
			_self.upHeap(i);
		}
		else {
			_self.downHeap(i);
		}
	};

	_self.Peek = function() {
		if (_self.elements.length == 0) {
			return null;
		}

		return _self.elements[0];
	};

	_self.Pop = function() {
		if (_self.elements.length == 0) {
			return null;
		}

		var result = _self.elements[0];

		// Place last element on root and heapify.

		var last = _self.elements.splice(_self.elements.length-1, 1)[0];
		if (_self.elements.length > 0) {
			_self.set(last, 0);
			_self.downHeap(0);
		}

		return result;
	};

	_self.Push = function(element) {
		_self.elements.push(element);
		var idx = _self.elements.length - 1;
		if(element instanceof Object) {			
			element['_index'] = idx;
			if('on' in element) {
				element.on('change', function(value) {
					_self.heapify(element['_index']);
				});
			}
		}

		_self.upHeap(idx);
	};
};

//module.exports = Heap;