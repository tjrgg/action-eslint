const { CLIEngine } = require('eslint');

const lint = function() {
    return new Promise((resolve, reject) => {
        const cli = new CLIEngine({
            baseConfig: {
                extends: ["eslint-config-typicalbot"]
            },
            envs: [],
            useEslintrc: false,
            rules: {}
        });

        const report = cli.executeOnFiles(["scripts/", "src/"]);
        console.log(report);

        const errorReport = CLIEngine.getErrorResults(report.results);
        console.log(errorReport);

        if (errorReport) return reject(errorReport);
        return resolve(report);
    });
}

module.exports = lint;