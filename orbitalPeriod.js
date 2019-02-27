// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

//input: array of object with name as string and avgAlt as number
//output: array of object returning same name and key as orbitalPeriod and value as number
//orbitalPeriod should be rounded to nearest whole number

//argument can contain more than 1 object

// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   function calculatePeriod(obj) {
//     let a = Math.PI * 2;
//     let b = Math.pow(earthRadius + obj.avgAlt, 3);
//     let c = Math.sqrt(b / GM);
//     console.log(b);
//     return Math.round(a * c);
//   }
//   return arr.map(function(obj) {
//     console.log(obj);
//     return { name: obj.name, orbitalPeriod: calculatePeriod(obj) };
//   });
// }

//refactor to be more modular
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  function calculatePeriod(obj) {
    let a = Math.PI * 2;
    let b = Math.pow(earthRadius + obj.avgAlt, 3);
    let c = Math.sqrt(b / GM);
    return Math.round(a * c);
  }
  return arr.map(function(obj) {
    let temp = calculatePeriod(obj);
    console.log(temp);
    delete obj.avgAlt;
    console.log(obj);
    obj.orbitalPeriod = temp;
    return obj;
  });
}

//refactor for performance
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (let obj of arr) {
    console.log(obj);
    obj.orbitalPeriod = Math.round(
      Math.PI * 2 * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)
    );
    delete obj.avgAlt;
  }
  return arr;
}

// console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }])); //should return [{name: "sputnik", orbitalPeriod: 86400}]
console.log(
  orbitalPeriod([
    { name: 'iss', avgAlt: 413.6 },
    { name: 'hubble', avgAlt: 556.7 },
    { name: 'moon', avgAlt: 378632.553 }
  ])
); //[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
