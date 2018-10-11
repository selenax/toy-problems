// Some user interactions, such as resizing and scrolling, can create a huge number of browser events in a short period of time. If listeners attached to these events take a long time to execute, the user's browser can start to slow down significantly. To mitigate this issue, we want to to implement a throttle function that will detect clusters of events and reduce the number of times we call an expensive function.

// Your function will accept an array representing a stream of event timestamps and return an array representing the times that a callback should have been called. If an event happens within wait time of the previous event, it is part of the same cluster. Your function should satisfy the following use cases:

// 1) Firing once on the first event in a cluster, e.g. as soon as the window starts resizing. 
// 2) Firing once after the last event in a cluster, e.g. after the user window stops resizing. 
// 3) Firing every interval milliseconds during a cluster, e.g. every 100ms while the window is resizing.


// describe('default tests', function() {
//   it('test1', function(){
//     Test.assertSimilar(throttle(20, false, true, 0, [0,10,20,30]), [0]);
//   });
//   it('test2', function(){
//     Test.assertSimilar(throttle(20, true, false, 0, [0,10,20,30]), [50]);
//   });
//   it('test3', function(){
//     Test.assertSimilar(throttle(20, false, true, 20, [0,10,20,30]), [0,20]);
//   });
//   it('test4', function(){
//     Test.assertSimilar(throttle(20, false, true, 0, [0,10,40]), [0,40]);
//   });
//   it('test5', function(){
//     Test.assertSimilar(throttle(20, true, false, 0, [0,10,40]), [30,60]);
//   });
//   it('test6', function(){
//     Test.assertSimilar(throttle(20, true, true, 0, [0,10,50]), [0,30,50,70]);
//   });
//   it('test7', function(){
//     Test.assertSimilar(throttle(20, true, true, 10, [0,10,50]), [0,10,20,30,50,60,70]);
//   });
// });


functiont throttle(wait, onLast, onFirst, interval, timeStamp) {
  //create var result = [];
  //check to see if event is in same cluster 
    //if yes, push to cluster
    //if no
      //determine callback times for current cluster
        //return callback function, push value to result
      //assign current event as cluster 
  //if finished last element in timeStamp, call callback with current cluster
    //push result to result
  //return result
}

function check(wait, onLast, onFirst, interval, cluster) {
  //create var reuslt = []
  //if onFirst is true, push to result
  //if interval !== 0     --- wait interval second before fire
    //set maxinterval to last element in cluster 
      //if last is true, we need to added wait time to max interval
    //loop and add interval to first element on cluster til max interval is hit
      //push to result
  //if last is true, push to result
  //return result
}

//solution 1  
function throttle(wait, onLast, onFirst, interval, timestamps) {
  let ret = [];
  let cluster = [timestamps[0]];
  
  for(let i=1; i<timestamps.length; i++) {
    if(timestamps[i] - timestamps[i-1] <= wait) {
      cluster.push(timestamps[i]);
      console.log(cluster, 'cluster')
    } else {
      let clusterEventTimes = evaluateCluster(wait, onLast, onFirst, interval, cluster);
      console.log(clusterEventTimes, '1st clustereventTijme')
      clusterEventTimes.forEach( function(el){ ret.push(el); });
      cluster = [timestamps[i]];
      console.log(cluster, 'cluster assignment')
    }
    
    if(i == timestamps.length-1) {
      let clusterEventTimes = evaluateCluster(wait, onLast, onFirst, interval, cluster);
      console.log(clusterEventTimes, 'clustereventTime')
      clusterEventTimes.forEach( function(el){ ret.push(el); });
    }
  }
  
  return ret;
}
// Test.assertSimilar(throttle(20, true, true, 10, [0,10,50]), [0,10,20,30,50,60,70]);
// Determines all times when an event needs to be fired
function evaluateCluster(wait, onLast, onFirst, interval, cluster){
  let ret = [];
  
  if(onFirst) {
    ret.push(cluster[0]); // push cluster start
  }
  if(interval != 0) {
    let maxInterval = cluster[cluster.length-1];
    console.log(maxInterval, 'amax')
    if(onLast) {
      maxInterval += wait;
    }
    for(let intEv = cluster[0]+interval; intEv < maxInterval; intEv+=interval) {
      console.log(intEv, 'intEv')
      ret.push(intEv);
    }
  }
  if(onLast) {
    ret.push(cluster[cluster.length-1]+wait); //// push cluster end
    console.log(ret, 'ret second')
  }
    
  return ret;
}

console.log(throttle(20, true, true, 10, [0,10,50]));

// Test.assertSimilar(throttle(20, true, true, 10, [0,10,50]), [0,10,20,30,50,60,70]);




//solution 2
function throttle(wait, onLast, onFirst, interval, timestamps) {
  var output = [];
  var cluster = [timestamps[0]];
  var prev = timestamps[0];
  var new_cluster = false;
  
  // Iterate through timestamps and create clusters (first one is set above)
  for(var i = 1; i < timestamps.length + 1; i++) {
  
    // If timestamp is within the cluster, add to cluster
    if (!new_cluster && i < timestamps.length && timestamps[i] - prev <= wait) {
      cluster.push(timestamps[i]);
      
    // Else only occurs when at the end of a cluster, therefore, we check conditions for output here...
    // I think creating clusters then passing them to a function that checks conditions is a 10x better way of doing it
    } else {
      new_cluster = false; // did this because it was breaking on last iteration
      
      if (onFirst) {
        output.push(cluster[0]);
      }
      
      if (interval > 0) {
        intervalEvents(cluster, interval, wait, onLast).forEach(function(element) { output.push(element) });
      }
      
      if (onLast) {
        output.push(cluster[cluster.length-1] + wait);
      }

      if (i < timestamps.length) {
        cluster = [timestamps[i]];
        new_cluster = true;
      }
    }
    prev = timestamps[i];
  }
  return output;
}

// intervalEvents takes in a cluster and calulates all of the intervals within that cluster
// returns all of the intervals within the cluster in an array
function intervalEvents(cluster, interval, wait, onLast) {
  var output = [];
  // Extends the interval by the wait period if onLast is true
  if (onLast) {
    for(var i = interval + cluster[0]; i < cluster[cluster.length-1] + wait; i += interval) {
      output.push(i);
    }
  } else {
    for(var i = interval + cluster[0]; i < cluster[cluster.length-1]; i += interval) {
      output.push(i);
      console.log(output, 'output');
    }
  }
  return output;
}

console.log(throttle(20, true, false, 0, [0,10,40]));