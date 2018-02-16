//Count Steps

function countSteps(N) {
    if (N === 1) { return 1; }
    if (N === 2) { return 2; }
    

    return countSteps(N - 1) + countSteps(N - 2);
    
  }