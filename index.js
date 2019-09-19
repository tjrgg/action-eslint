const core = require('@actions/core');
const lint = require('./lint');

async function run() {
    try {
        await lint();
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

run();
