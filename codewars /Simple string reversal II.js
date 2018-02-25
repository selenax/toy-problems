// Simple string reversal II

//In this Kata, you will be given a string and two indexes. Your task is to reverse the portion of that string between those two indexes inclusive.

function solve(st,a,b){
    var first = st.slice(0, a)
    var last = st.slice(b+1)
    var reversed = st.split('').slice(a,b+1).reverse().join('');
    return first + reversed + last;
  }
  

  //refactor 
  const solve = (st,a,b) =>  st.replace(st.slice(a, b+1), st.split('').slice(a, b+1).reverse().join(''));

 
 
  console.log(solve("codewars",1,5))