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
            },
            site: './site',
            content: './content'
        }
    };

    grunt.initConfig({
        config: config,

        watch: {
            sass: {
                files: ['<%= config.paths.src.sass %>/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        },

        php: {
            dev: {
                options: {
                    hostname: '127.0.0.1',
                    port: 8000,
                    keepalive: false,
                    open: false
                }
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '<%= config.paths.dest.css %>/**/*.css',
                        '<%= config.paths.site %>/**/*.php',
                        '<%= config.paths.content %>/**/*'
                    ]
                },
                options: {
                    proxy: '<%= php.dev.options.hostname %>:<%= php.dev.options.port %>',
                    watchTask: true
                }
            }
        },

        sass: {
            options: {
                precision: 8,
                includePaths: ['<%= config.paths.dest.bower %>'],
                sourceMap: true,
                outputStyle: 'compressed'
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

    grunt.registerTask('serve', [
        'sass',
        'php:dev',
        'browserSync:dev',
        'watch'
    ]);
};




