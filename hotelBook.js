// A hotel manager has to process N bookings of rooms for the next season. His hotel has K rooms. Bookings contain an arrival date and a departure date. He wants to find out whether there are enough rooms in the hotel to satisfy the demand.
// Inputs:
// - First list for arrival time of booking
// - Second list for departure time of booking
// - Third is K which denotes the count of rooms
// Output:
// - A boolean which tells whether its possible to make a booking
// false means there are not enough rooms for N booking
// true means there are enough rooms for N booking
// Example:
// Inputs:
// - arrivals = [1, 3, 5]
// - departures = [2, 6, 10]
// - K = 1

// Output: false. At day = 5, there are 2 guests in the hotel. But we have only one room.

const hotelBooking = function(arrivals, departure, k) {
  let count = 0;
  let hash = {};
  for (let x = 0; x < arrivals.length; x++) {
    if (hash[arrivals[x]]) {
      hash[arrivals[x]]++;
    } else {
      hash[arrivals[x]] = 1;
    }
    console.log(arrivals[x]);
    if (hash[departure[x]]) {
      hash[departure[x]]--;
    } else {
      hash[departure[x]] = -1;
    }
  }
  //Object numeric property get sorted, but shouldn't rely on it
  console.log(hash); //​​​​​{ 1: 1, 2: -1, 3: 1, 5: 1, 6: -1, 10: -1 }​​​​​
  for (let [x, y] of Object.entries(hash).sort(
    (a, b) => Number(a[0]) - Number(b[0])
  )) {
    console.log([x, y]);
    count += y;
    console.log(count);
    if (count > k) {
      return false;
    }
  }

  return true;
};

console.log(hotelBooking([1, 3, 5], [2, 6, 10], 1));
