const spinnerArray = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let index = 0;

const interval = setInterval(() => {
  process.stdout.write(`\r${spinnerArray[index]}     `);
  index = (index + 1) % spinnerArray.length;
}, 200);

setTimeout(() => {
  clearInterval(interval);
}, 5000);