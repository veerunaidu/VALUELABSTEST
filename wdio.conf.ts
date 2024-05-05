import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {
    
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    
    
    specs: [
        './test/specs/**/*.ts'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    
    maxInstances: 10,
    
    capabilities: [{
        browserName: 'chrome',

        // Here we can pass the Appium Desired capabulities
    }],

      
    logLevel: 'info',
   
    bail: 0,
   
    waitforTimeout: 10000,
   
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
   
    services: ['visual'],

    
    framework: 'mocha',
    
    
    reporters: ['spec'],

   
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

   
}
