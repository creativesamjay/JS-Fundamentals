const arg = process.argv[2];
const num = parseInt(arg);

if (num > 0) {
  for (let i = 0; i < num; i++) {
    console.log("C is fun");
  }
}
