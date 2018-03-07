//DNA Pairing 


//output: 2d array: array within array 
//AT, CG, GC, TA 

//solution 1 
// function pairElement(str) {
//     //initalize array 
//     //split str
//     //loop through str array 
//     //if ..... list all letters, push the letter that it pairs with 
//     var array = [];
//     var string = str.split('');
//     for(var x = 0; x < string.length; x++) {
//         if(string[x] === 'A') {
//             array.push((string[x] + 'T').split(''));
//         } else if (string[x] === 'T') {
//             array.push((string[x] + 'A').split(''));
//         } else if (string[x] === 'G') {
//             array.push((string[x] + 'C').split('')); 
//         } else {
//             array.push((string[x] + 'G').split(''));
//         }
//     }
//   return array;
// }


//solution 2
// function pairElement(str) {
//     var result = [];
//     var search = function(char) {
//         switch(char) {
//             case 'A':
//             result.push(['A', 'T']);
//             break;
//             case 'G':
//             result.push(['G', 'C']);
//             break;
//             case 'C':
//             result.push(['C', 'G']);
//             break;
//             case 'T':
//             result.push(['T', 'A']);
//             break;
//         }
//     }
//     for(var x = 0; x < str.length; x++) {
//         search(str[x]);
//     }
//     return result;
// } 

//solution 3
function pairElement (str) {
    return str.split('').map(function(letter) {
        if(letter === 'A') {
            return ['A', 'G'];
        } else if (letter === 'G') {
            return ['G', 'A'];
        } else if (letter === 'C') {
            return ['C', 'G'];
        } else {
            return ['G', 'C'];
        }
    })
}
// console.log(pairElement("ATCGA"));
console.log(pairElement("GCG"));
