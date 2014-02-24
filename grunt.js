// Configuring Grunt tasks:
// http://gruntjs.com/configuring-tasks
module.exports = function (grunt) {
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // Compass task: https://npmjs.org/package/grunt-contrib-compass
    // this just registers the compass plugin to use it for config 
    compass: {
      dist: {
        options: {
          // use default Compass config
          config: 'config.rb'
        }
      }
    },

    // primary watch task   
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
 
  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  // fire!
  grunt.registerTask('default', ['watch']);
};