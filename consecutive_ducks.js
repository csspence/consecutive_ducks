/*
Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.


Consider an Example :
10 , could be expressed as a sum of 1 + 2 + 3 + 4.
Task
Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers , 
OtherWise return false .

Notes
Guaranteed constraint : 2 ≤ N ≤ (2^32) -1 .
Input >> Output Examples:

* consecutiveDucks(9)  ==>  return (true)  //  9 , could be expressed as a sum of ( 2 + 3 + 4 ) or ( 4 + 5 ) . 

* consecutiveDucks(64)  ==>  return (false)

* consecutiveDucks(42)  ==>  return (true) //  42 , could be expressed as a sum of ( 9 + 10 + 11 + 12 )  . 
*/

const consecutiveDucks = (num) => {
  for(let i = 1; i < num.length; i++) {
    console.log('you are in your OUTER loop');
    let sum = 0;
    for(let h = i; h < num.length; h++) {
      console.log('you are in your INNER loop');
      sum += h;
      console.log('here is sum: ' + sum);
      if(sum === num) {
        return true;
      }
    }
  }
  return false;
}