// console.log(compareVersion('1.0.1', '1.0'), ' => 1.0.1');
// console.log(compareVersion('2.0.1', '2.0.1'), ' => 2.0.1');
// console.log(compareVersion('1', '1.0.4'), ' => 1.0.4');
// console.log(compareVersion('1', '0.0.4'), ' => 1');
// console.log(compareVersion('20', '2.0.4'), ' => 20');  




var compareVersion = function(v1, v2) {
    var new1 = v1.split('.');
    var new2 = v2.split('.');
    for(var x = 0; x < new1.length; x++) { 
        if(Number(new1[x]) > Number(new2[x])) {
            return v1;
        } else if (new1.length < new2.length) {
        return v2;
        }
    }
    return v1;
}

// console.log(compareVersion('20', '2.0.4'))
// console.log(compareVersion('1', '0.0.4'))
// console.log(compareVersion('1', '1.0.4'))
console.log(compareVersion('1.0.2', '1.0')); 
// console.log(compareVersion('2.0.1', '2.0.1'));
console.log(compareVersion('1.0.1', '1.0'))