//  // We should consider these meetings as overlapping
//  [{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}];

//  // Overlapping meetings! How can we overlapping meeting programitically?
//  [{startTime: 4, endTime: 6}, {startTime: 5, endTime: 7}];

//  [
//   {startTime: 0,  endTime: 1},
//   {startTime: 3,  endTime: 5},
//   {startTime: 4,  endTime: 8},
//   {startTime: 10, endTime: 12},
//   {startTime: 9,  endTime: 10},
// ]

// // Our output. An array of objects containing all meeting times merged.

// [
// {startTime: 0, endTime: 1},
// {startTime: 3, endTime: 8},
// {startTime: 9, endTime: 12},
// ]

//A.endTime < B.starTime //true
//A.endTime >= B.startTime //false
function overLapMeeting(meetings) {
  //array of obj, sort by startTime
  let end;
  meetings = meetings.sort((a, b) => a.startTime - b.startTime);
  console.log(meetings);
  for (let x = 1; x < meetings.length; x++) {
    end = meetings[x - 1].endTime;
    console.log(end);
    if (end >= meetings[x].startTime) {
      return false;
    }
  }
  return true;
}

// console.log(
//   overLapMeeting([{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }])
// ); //false
// console.log(
//   overLapMeeting([{ startTime: 4, endTime: 6 }, { startTime: 5, endTime: 7 }])
// ); //false
console.log(
  overLapMeeting([
    { startTime: 0, endTime: 1 },
    { startTime: 9, endTime: 12 },
    { startTime: 2, endTime: 8 }
  ])
); //true
