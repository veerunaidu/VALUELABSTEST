
export const config: WebdriverIO.Config = {

    
    autoCompileOpts: {
        autoCompile: true,
        
        tsNodeOpts: {
            project: './tsconfig.json'
        }
    },

    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    specs: ['./test/specs/**/*.ts'],

    capabilities: [{
        "maxInstances": 8,
        "platformName" : "Android",
        "appium:platformVersion" : "11.0",
        "appium:deviceName" : "Samsung Galaxy S21 Ultra", 
        "appium:app" : process.env.BROWSERSTACK_URL,
        "appium:locale": "en_GB",
        "appium:noReset": true,
        "appium:autoAcceptAlerts": false,
        'bstack:options' : {
            "projectName" : "Selfridges Android App",
            "video": true,
            "interactiveDebugging": true,
            "networkLogs" : true,
            "appiumLogs" : true,
            "networkLogsOptions": {
                "captureContent": true
            },
            "networkLogsIncludeHosts": ['bs-local.com'],//This may error but will still work
            "idleTimeout": 120000
        },
    }],

    maxInstances: 30,

    logLevel: 'error',

    waitforTimeout: 30000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,

    bail: 0,
    services: ['browserstack'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
