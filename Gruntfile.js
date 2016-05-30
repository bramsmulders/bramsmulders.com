module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var config = {
        paths: {
            src: {
                sass: './_source/sass'
            },
            dest: {
                bower: './assets/bower_components',
                css: './assets/css'
            }
        }
    };

    grunt.initConfig({
        config: config,
        php: {
            test: {
                options: {
                    keepalive: true,
                    open: true
                }
            }
        },

        sass: {
            options: {
                precision: 8,
                includePaths: ['<%= config.paths.dest.bower %>'],
                sourceMap: true
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: '<%= config.paths.src.sass %>',
                    src: ['**/*.scss'],
                    dest: '<%= config.paths.dest.css %>',
                    ext: '.css'
                }]
            }
        }

    });

    grunt.registerTask('serve', ['sass','php']);
};




