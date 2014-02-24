// Configuring Grunt tasks:
// http://gruntjs.com/configuring-tasks
module.exports = function (grunt) {
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // Compass 
    compass: {
      dist: {
        options: {
          // use my Compass config in root
          config: 'config.rb'
        }
      }
    },
 
    // main watch task
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
  // load
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  // regiser 
  grunt.registerTask('default', ['watch']);
};