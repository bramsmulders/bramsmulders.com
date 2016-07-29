module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var config = {
        paths: {
            src: {
                sass: './_source/sass',
                php: './_source/site',
                js: './_source/js'
            },
            dest: {
                bower: './assets/bower_components',
                css: './assets/css',
                js: './assets/js'
            },
            site: './site',
            content: './content',
            build: './_build'
        }
    };

    grunt.initConfig({
        config: config,

        watch: {
            sass: {
                files: ['<%= config.paths.src.sass %>/**/*.scss'],
                tasks: ['sass', 'postcss:dev', 'modernizr:dev'],
                options: {
                    spawn: false,
                }
            },
            scripts: {
                files: ['<%= config.paths.src.js %>/**/*.js'],
                tasks: ['uglify:dev'],
                options: {
                    spawn: false,
                }
            }
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
                        '<%= config.paths.dest.js %>/**/*.js',
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
            dev: {
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
        },

        uglify: {
            dev: {
                files: {
                    '<%= config.paths.dest.js %>/app/app.js': ['<%= config.paths.src.js %>/app/app.js']
                }
            }
        },

        staticinline: {
            build: {
                options: {
                    prefix: '@{',
                    suffix: '}@',
                    basepath: './'
                },
                files: {
                    '_build/site/snippets/header.php': 'site/snippets/header.php',
                    '_build/site/snippets/footer.php': 'site/snippets/footer.php'
                }
            }
        },

        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: './',
                        src: [
                            'assets/**/*',
                            'content/**/*',
                            'kirby/**/*',
                            'site/**/*',
                            'index.php',
                            '.htaccess',
                            // 'panel/**/*'
                        ],
                        dest: '_build/'
                    },
                ],
            },
        },

        clean: {
            build: ['_build/**/*']
        }

    });

    grunt.registerTask('default', [
        'sass',
        'postcss:dev',
        'modernizr:dev',
        'uglify:dev',
    ]);

    grunt.registerTask('serve', [
        'default',
        'php:dev',
        'browserSync:dev',
        'watch'
    ]);

    grunt.registerTask('build', [
        'default',
        'clean:build',
        'copy:build',
        'staticinline:build'
    ]);
};




