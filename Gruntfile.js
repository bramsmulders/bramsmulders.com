module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        php: {
            test: {
                options: {
                    keepalive: true,
                    open: true
                }
            }
        }
    });

    grunt.registerTask('serve', ['php']);
};




