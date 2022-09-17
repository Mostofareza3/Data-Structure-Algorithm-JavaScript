const string = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage
string[2];

//push
string.push('e'); // 0(1)

// pop
string.pop(); // 0(1)

// unshift
string.unshift('x'); //0(n) Because All position is changed

//shift
string.shift(); // 0(n)  Because All position is changed

//splice
string.splice(2, 0, 'alien'); // 0(n) Because position is changed

console.log(string);