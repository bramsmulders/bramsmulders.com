"use strict";

module.exports = function(grunt) {
  // Show elapsed time after tasks run to visualize performance
  require("time-grunt")(grunt);
  // Load all Grunt tasks that are listed in package.json automagically
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // This is where our tasks are defined and configured

    // watch for files to change and run tasks when they do
    watch: {
      sass: {
        files: ["_source/_css/**/*.css"],
        tasks: ["postcss"]
      },
      js: {
        files: ["_source/_js/**/*.js"],
        tasks: ["babel"]
      }
    },

    // shell commands for use in Grunt tasks
    shell: {
      jekyllPrepare: {
        command:
          "JEKYLL_ENV=production bundle exec jekyll build --config=_config.yml,_config_prod.yml"
      },
      jekyllServe: {
        command:
          "JEKYLL_ENV=development bundle exec jekyll serve --config=_config.yml"
      },
      jekyllStaging: {
        command:
          "JEKYLL_ENV=staging bundle exec jekyll build --config=_config.yml,_config_prod.yml"
      },
      deploy: {
        command: "firebase use default && firebase deploy"
      },
      deployStaging: {
        command: "firebase use staging && firebase deploy"
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
          require("postcss-easy-import")(),
          require("postcss-color-function")(),
          require("postcss-apply")(),
          require("postcss-custom-media")(),
          // require("postcss-custom-properties")({
          //   preserve: true,
          // }),
          require("autoprefixer")(),
          require("cssnano")({ minifyFontValues: false, discardUnused: false })
        ]
      },
      dist: {
        files: {
          "_source/_includes/critical.css": "_source/_css/critical.css"
        }
      }
    },

    // Uglify js
    uglify: {
      options: {
        mangle: false
      },
      build: {
        files: [
          {
            expand: true,
            cwd: "_build/assets/js/",
            src: "**/*.js",
            dest: "_build/assets/js"
          },
          {
            src: "_build/sw.js",
            dest: "_build/sw.js"
          }
        ]
      }
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ["env"]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: "_source/_js/",
            src: ["**/*.js", "!sw/sw.js"],
            dest: "_build/assets/js"
          },
          {
            expand: true,
            cwd: "_source/_js/sw/",
            src: ["sw.js"],
            dest: "_build/"
          }
        ]
      }
    },

    // run tasks in parallel
    concurrent: {
      serve: ["watch", "shell:jekyllServe"],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  // Register the grunt serve task
  grunt.registerTask("serve", [
    "postcss",
    "babel",
    "concurrent:serve"
  ]);

  // Register the grunt build task
  grunt.registerTask("prepare", [
    "postcss",
    "shell:jekyllPrepare",
    "babel",
    "uglify:build",
    "shell:deploy"
  ]);

  // Register the grunt build task
  grunt.registerTask("staging", [
    "postcss",
    "shell:jekyllStaging",
    "babel",
    "uglify:build",
    "shell:deployStaging"
  ]);

  // Register build as the default task fallback
  grunt.registerTask("default", "prepare");
};
