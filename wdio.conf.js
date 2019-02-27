require('@babel/register');
exports.config = {
    runner: 'local',
    hostname: "10.192.8.8",
    port: 4444,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],
    specs: [
        './src/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'https://duybanh-f195-1.cybozu-dev.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec', ['junit', {
        outputDir: './report/',
        outputFileFormat: function (opts) { // optional
            return `results-${opts.cid}.xml`
        }
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
