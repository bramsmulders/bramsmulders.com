'use strict';


module.exports = function (grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);
    var buble = require('rollup-plugin-buble');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // This is where our tasks are defined and configured

        // watch for files to change and run tasks when they do
        watch: {
            sass: {
                files: ['_source/_sass/**/*.{scss,sass}'],
                tasks: ['sass:serve']
            },
            bower: {
                files: ['bower.json'],
                tasks: ['shell:bower']
            },
            js: {
                files: ['_source/_js/**/*.js'],
                tasks: ['babel'/*, 'copy:js'*/]
            }
        },

        // shell commands for use in Grunt tasks
        shell: {
            jekyllPrepare: {
                command: 'JEKYLL_ENV=production bundle exec jekyll build --config=_config.yml,_config_prod.yml'
            },
            jekyllServe: {
                command: 'JEKYLL_ENV=development bundle exec jekyll serve --config=_config.yml'
            },
            bower: {
                command: 'bower prune && bower install && bower update'
            },
            deploy: {
                command: 'firebase deploy'
            }
        },

        // sass (libsass) config
        sass: {
            options: {
                sourceMap: false,
                includePaths: ['_source/assets/bower_components']
            },
            serve: {
                options: {
                    outputStyle: 'expanded',
                },
                files: {
                    '_source/_includes/critical.css': '_source/_sass/critical.scss'
                }
            },
            build: {
                options: {
                    outputStyle: 'compressed',
                },
                files: {
                    '_source/_includes/critical.css': '_source/_sass/critical.scss'
                }
            }
        },

        // Uglify js
        uglify: {
            options: {
                mangle: false
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '_build/assets/js/',
                    src: '**/*.js',
                    dest: '_build/assets/js'
                },
                {
                    // expand: true,
                    src: '_source/assets/bower_components/require/require.js',
                    dest: '_build/assets/bower_components/require/require.js'
                }]
            }
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '_source/_js/',
                        src: ['**/*.js'],
                        dest: '_build/assets/js'
                    }
                ]
            }
        },

        // // Copy stuff
        // copy: {
        //     js: {
        //         files: [
        //             {
        //                 expand: true,
        //                 cwd: '_source/_js/',
        //                 src: ['**/*'],
        //                 dest: '_build/assets/js'
        //             }
        //         ]
        //     }
        // },

        // run tasks in parallel
        concurrent: {
            serve: [
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        },
    });

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'shell:bower',
        'sass:serve',
        // 'copy:js',
        'babel',
        'concurrent:serve'
    ]);

    // Register the grunt build task
    grunt.registerTask('prepare', [
        'shell:bower',
        'sass:build',
        'shell:jekyllPrepare',
        'babel',
        'uglify:build',
        'shell:deploy'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'prepare');

};