var should = require('chai').should();
var expect = require('chai').expect;
var Heap = require('../heap.js');
var EventEmitter = require('eventemitter3');
var inherits = require('inherits');

var compareFunc = function(a, b) {
	return a > b;
}

inherits(Car, EventEmitter);
function Car (initialSpeed) {
    EventEmitter.call(this);
    var _self = this;	    
    var _speed = initialSpeed;

    // Add Geter / Setter.
    Object.defineProperty(this, 'speed', {
        get: function() { return _speed; },
        set: function(value) {
            if (value !== _speed) {
                _speed = value;                
                _self.emit('change', _speed);
            }
        },
        enumerable: true,
        configurable: false
    });
};

describe('#Empty heap pop', function() {
  it('poping from an empty heap should return null', function(done) {
  	var h = new Heap(compareFunc);
  	var element = h.Pop();
  	should.not.exist(element);
  	done();
  });
});

describe('#Empty heap peak', function() {
  it('peaking into an empty heap should return null', function(done) {
  	var h = new Heap(compareFunc);
  	var element = h.Peek();
  	should.not.exist(element);
  	done();
  });
});

describe('#Poping elements from min heap', function() {
  it('should return minimum value.', function(done) {

  	var minHeapCompareFunc = function(a, b) { return a < b; };

  	var h = new Heap(minHeapCompareFunc);

  	h.Push(5);
  	h.Push(4);
  	h.Push(6);
  	h.Push(3);
  	h.Push(7);
  	h.Push(2);
  	h.Push(8);
  	h.Push(1);
  	h.Push(9);
  	h.Push(0);
  	h.Push(10);

  	for(var i = 0; i <= 10; i++) {
	  	var element = h.Peek();
	  	expect(element).to.equal(i);
	  	element = h.Pop();
	  	expect(element).to.equal(i);
  	}

  	for(var i = 100; i > 0; i--) {
  		h.Push(i);
  	}

  	for(var i = 1; i <= 100; i++) {
  		var element = h.Peek();
	  	expect(element).to.equal(i);
	  	element = h.Pop();
	  	expect(element).to.equal(i);
  	}

  	for(var i = 0; i < 100; i++) {
  		h.Push(i);
  	}

  	for(var i = 0; i < 100; i++) {
  		var element = h.Peek();
	  	expect(element).to.equal(i);
	  	element = h.Pop();
	  	expect(element).to.equal(i);
  	}

  	done();
  });
});

describe('#Poping elements from max heap', function() {
  it('should return maximum value.', function(done) {

  	var maxHeapCompareFunc = function(a, b) { return a > b; };

  	var h = new Heap(maxHeapCompareFunc);

  	h.Push(5);
  	h.Push(4);
  	h.Push(6);
  	h.Push(3);
  	h.Push(7);
  	h.Push(2);
  	h.Push(8);
  	h.Push(1);
  	h.Push(9);
  	h.Push(0);
  	h.Push(10);

  	for(var i = 10; i >= 0; i--) {
	  	var element = h.Peek();
	  	expect(element).to.equal(i);
	  	element = h.Pop();
	  	expect(element).to.equal(i);
  	}

  	for(var i = 100; i > 0; i--) {
  		h.Push(i);
  	}

  	for(var i = 100; i > 0; i--) {
  		var element = h.Peek();
	  	expect(element).to.equal(i);
	  	element = h.Pop();
	  	expect(element).to.equal(i);
  	}

  	for(var i = 0; i < 100; i++) {
  		h.Push(i);
  	}

  	for(var i = 99; i <= 0; i++) {
  		var element = h.Peek();
	  	expect(element).to.equal(i);
	  	element = h.Pop();
	  	expect(element).to.equal(i);
  	}
  	
  	done();
  });
});

describe('#Changing value of inserted element within min heap.', function() {
  it('Heap should update itself.', function(done) {

  	var minHeapCompareFunc = function(a, b) { 
  		return a.speed < b.speed; 
  	};

  	var h = new Heap(minHeapCompareFunc);
  	
  	var car1 = new Car(60);
  	var car2 = new Car(50);
  	var car3 = new Car(80);
  	var car4 = new Car(30);

  	h.Push(car1);
  	h.Push(car2);
  	h.Push(car3);
  	h.Push(car4);
  	
  	car2.speed = 10;

  	var slowestCar = h.Pop();
  	expect(slowestCar.speed).to.equal(10);	// car 2

  	slowestCar = h.Pop();
  	expect(slowestCar.speed).to.equal(30);  // car 4

  	car1.speed = 90;
  	slowestCar = h.Pop();
  	expect(slowestCar.speed).to.equal(80); // car 3 

  	slowestCar = h.Pop();
  	expect(slowestCar.speed).to.equal(90); // car 1
  	
  	done();
  });
});

describe('#Changing value of inserted element within max heap.', function() {
  it('Heap should update itself.', function(done) {

  	var maxHeapCompareFunc = function(a, b) { 
  		return a.speed > b.speed; 
  	};

  	var h = new Heap(maxHeapCompareFunc);
  	  	
  	var car2 = new Car(60);
  	var car1 = new Car(80);
  	var car4 = new Car(30);
  	var car3 = new Car(50);

  	h.Push(car1);
  	h.Push(car2);
  	h.Push(car3);
  	h.Push(car4);
  	
  	car4.speed = 100;

  	var fastestCar = h.Pop();
  	expect(fastestCar.speed).to.equal(100);	// car 4

  	fastestCar = h.Pop();
  	expect(fastestCar.speed).to.equal(80);  // car 1

  	car2.speed = 20;
  	fastestCar = h.Pop();
  	expect(fastestCar.speed).to.equal(50); // car 3

  	fastestCar = h.Pop();
  	expect(fastestCar.speed).to.equal(20); // car 2
  	
  	done();
	process.exit(0);
  });
});