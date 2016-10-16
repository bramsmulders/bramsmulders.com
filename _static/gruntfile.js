'use strict';

module.exports = function (grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

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
                    '_build/assets/css/main.css': '_source/_sass/main.scss',
                    '_source/_includes/critical.css': '_source/_sass/critical.scss'
                }
            },
            build: {
                options: {
                    outputStyle: 'compressed',
                },
                files: {
                    '_build/assets/css/main.css': '_source/_sass/main.scss',
                    '_source/_includes/critical.css': '_source/_sass/critical.scss'
                }
            }
        },

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
        'concurrent:serve'
    ]);

    // Register the grunt build task
    grunt.registerTask('prepare', [
        'shell:bower',
        'sass:build',
        'shell:jekyllPrepare',
        'shell:deploy',
        //'sass'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'prepare');

};