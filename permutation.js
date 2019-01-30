const nums = [1, 2, 3];
// Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]];

function permute(nums) {
  let result = [];
  let round = nums.length;

  function combo(roundLeft, currentRound) {
    if (roundLeft === 0) {
      result.push(currentRound);
      return;
    }
    for (let x = 0; x < nums.length; x++) {
      let option = nums[x];
      if (currentRound.indexOf(option) === -1) {
        // console.log(roundLeft, option)
        console.log(currentRound, 'current');
        combo(roundLeft - 1, currentRound.concat(option));
      }
    }
  }

  combo(round, []);
  return result;
}

permute(nums);
