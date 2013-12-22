"use strict";

module.exports = function( grunt ) {
    grunt.initConfig({
        jscs: {
            fail: {
                files: {
                    src: "../fixtures/fixture.js"
                },
                options: {
                    config: "../configs/fail.json"
                }
            },
            broken: {
                files: {
                    src: [ "../fixtures/broken.js", "../fixtures/fixture.js" ]
                },
                options: {
                    config: "../configs/fail.json",
                    force: true
                }
            },
            force: {
                files: {
                    src: "../fixtures/fixture.js"
                },
                options: {
                    config: "../configs/fail.json",
                    force: true
                }
            },
            success: {
                files: {
                    src: "../fixtures/fixture.js"
                },
                options: {
                    config: "../configs/success.json"
                }
            },
            config: "../fixtures/fixture.js"
        }
    });

    grunt.loadTasks( "../../tasks" );
    grunt.registerTask( "default", "jscs" );
};
