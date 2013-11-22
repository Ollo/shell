// Configuring Grunt tasks:
// http://gruntjs.com/configuring-tasks
module.exports = function (grunt) {
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // Compass task: https://npmjs.org/package/grunt-contrib-compass
    compass: {
      dist: {
        options: {
          // use default Compass config
          config: 'config.rb'
        }
      }
    },
 
    // Watch task: https://npmjs.org/package/grunt-contrib-watch
    // Includes LiveReload whenever specified files change
    // 
    // Using browser extension:
    // http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-
    watch: {
      css: {
        // if Sass files change, run the compass task and livereload
        files: [
          '**/*.scss',
        ],
        tasks: ['compass'],
        options: {
          livereload: true,
        },
      },
      scripts: {
        // if js files change, livereload only
        files: [
          'js/*.js',
        ],
        options: {
          livereload: true,
        },
      },
      images: {
        // if images change, livereload only
        files: [
          'images/{,**/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        options: {
          livereload: true,
        },
      },
    },
  });
 
  // Load the plugin(s)
  //grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  // Default task(s).
  // grunt.registerTask('default', ['concurrent:target1']);
  grunt.registerTask('default', ['watch']);
};