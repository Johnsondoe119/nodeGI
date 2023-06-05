//i was told to write a program that accepts one or more numbers as command-line arguments and prints the sum of those to the console
//need to come back and review Numbers again, as well as figure out what process.argv doees
function add(x) {
  let sum = 0;
  //we are starting with 2 here because since we called process.argv our first two indexes will already be taken up. 0 has the Node.js executable and script file paths
  for (i = 2; i < x.length; i++) {
    //numbers takes any element of 'x' and turns it to a number, pretty easy to remember
    sum += Number(x[i]);
  }
  console.log(sum);
}
//process.argv is an array that contains the command line property
add(process.argv);

//This is how the computer would have done
// let result = 0;

// for (let i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i]);
// }

// console.log(result);
