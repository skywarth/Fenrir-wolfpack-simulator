//creating comparator function
var maxHeapCompareFunc = function(a, b) { return a.definitiveFields.alphaPoints > b.definitiveFields.alphaPoints; };


var dominanceTree = new Heap(maxHeapCompareFunc);


//pushing wolves to dominanceTree(max heap)

function pushWolvesToDominanceTree(){
    for(let i=1;i<wolves.length;i++)
    {
        dominanceTree.Push(wolves[i]);
    }
    /*console.log(h.Pop());*/
}

