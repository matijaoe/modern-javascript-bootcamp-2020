#!/usr/bin/env node
const Runner = require('./runner');

const runner = new Runner();

// await must be wrapped in async function
const run = async () => {
    await runner.collectFiles(process.cwd()) ;
    runner.runTest();
}
run();