// backend-test.js
console.log("Running backend tests...");

try {
    // Example test
    const result = 1 + 1;

    if (result === 2) {
        console.log("✅ Test Passed");
        process.exit(0); // exit code 0 → success
    } else {
        console.error("❌ Test Failed: 1 + 1 !== 2");
        process.exit(1); // exit code 1 → failure
    }
} catch (err) {
    console.error("❌ Test Failed with error:", err);
    process.exit(1);
}
