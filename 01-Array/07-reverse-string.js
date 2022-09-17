

function reverse(str) {
    //check string
    if (!str || str.length < 2 || typeof str !== 'string') {
        return -1;
    }

    const backward = [];
    const totalItem = str.length - 1;

    for (let i = totalItem; i >= 0; i--) {
        backward.push(str[i]);
    }

    return backward.join('');

}

function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

let result = reverse('hello');
// console.log(result)