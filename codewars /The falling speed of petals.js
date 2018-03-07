//The falling speed of petals


// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite compilcated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0




//speed = distance/time 
//provided speed and time from a fallen petal, distance could be calculated from branch to ground 
    //**distance/speed will give us the time needed for another patel from the same branch to reach the ground
    //return 0 if v is negative

function sakuraFall(v) {
    return v <= 0 ? 0 : (80*5)/v;
}

console.log(sakuraFall(5))