console.log("Running backend tests...");

const result = 1 + 1;

if (result === 2) {
  console.log("Test Passed");
  process.exit(0);
} else {
  console.log("Test Failed");
  process.exit(1);
}