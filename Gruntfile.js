module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var config = {
        paths: {
            src: {
                sass: './_source/sass'
            },
            dest: {
                bower: './assets/bower_components',
                css: './assets/css',
                js: './assets/js'
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
                tasks: ['sass', 'postcss:dev', 'modernizr:dist'],
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
                sourceMap: true/*,
                outputStyle: 'compressed'*/
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
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('postcss-cssnext')({
                        browsers: 'last 2 versions',
                        features: {}
                    })
                ]
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: "<%= config.paths.dest.css %>",
                    src: ["**/*.css"],
                    dest: "<%= config.paths.dest.css %>"
                }]
            }
        },

        modernizr: {
            dist: {
                "parseFiles": true,
                "customTests": [],
                "devFile": false,
                "dest": "<%= config.paths.dest.js %>/lib/modernizr.build.js",
                "tests": [
                    // Tests
                ],
                "options": [
                    "addTest",
                    "testProp",
                    "setClasses",
                    "prefixed",
                    "mq"
                ],
                "uglify": true,
                "files" : {
                    "src": [
                        config.paths.dest.css + "/**/*.css",
                        config.paths.dest.js + "/**/*.js",
                        "!" + config.paths.dest.js + "/lib/**/*.js"
                    ]
                }
            }
        }

    });

    grunt.registerTask('serve', [
        'sass',
        'postcss:dev',
        'modernizr:dist',
        'php:dev',
        'browserSync:dev',
        'watch'
    ]);
};




