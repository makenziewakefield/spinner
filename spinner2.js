const spinnerArray = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

// to keep track of the current frame of the spinner animation
let index = 0;

// setInterval repeats the process function every 200ms
const interval = setInterval(() => {
  // \r moves the cursor back to the beginning of the line, this allows the spinner to overwrite the previous frame
  // {spinnerArray[index] accesses the symbol at the current index position in the array}
  // the whitespace adds spaces to ensure any leftover characters from the previous animation frame are overwritten
  process.stdout.write(`\r${spinnerArray[index]}     `);
  // increments the index by 1 and brings it back to 0 when it reaches the length of the array
  index = (index + 1) % spinnerArray.length;
}, 200);

// sets up a function that will executes once the timer allows (5000ms)
// clearInterval will execute at this point and it stops the setInterval function
setTimeout(() => {
  clearInterval(interval);
}, 5000);