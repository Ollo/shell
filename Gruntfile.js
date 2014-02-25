// Configuring Grunt tasks:
// http://gruntjs.com/configuring-tasks

module.exports = function (grunt) {
    
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      // Tasks
      
      // compass 
      compass: {
        dist: {
          options: {
            config: 'config.rb' // this uses compass config if thats your style
          }
        }
      },
      
      // grunt-contrib-sass
      // requires you to have Ruby and Sass but is more stable
      // sass: {                            
      //   dist: {                            
      //     options: {                       
      //       style: 'compressed',
      //     },
      //     files: { // Dictionary of files
      //       'css/main.css': 'scss/*.scss', // 'destination': 'source'
      //       // 'css/additional.css': 'additional.scss' // if needed
      //     },
      //   },
      // },

      // grunt sass
      // useses node-sass for quicker compile if only using .scss
      sass: { 
        dist: { 
          options: {
            outputStyle: "compact",
            sourceComments: "map",
          },
          files: {
            'css/main.css' : 'scss/main.scss',  // 'destination': 'source'
          },
        },
      },

      watch: {
        
        html: {
          files: [
            '*.html',
          ],
          options: {
            livereload: true,
          },
        },
        
        php: {
          files: [
            '*.php',
          ],
          options: {
            livereload: true,
          },
        },

        sass: {
          files: [
            '**/*.scss',
          ],
          
          //tasks: ['compass'],
          tasks: ['sass'],
        },

        css: {
          files: [
            'css/*.css',
          ],

          options: {
            livereload: true, // reload the css not the sass changes
          },
        },
        
        scripts: {
          files: [
            'js/src/*.js',
          ],
          options: {
            livereload: true,
          },
        },

        images: {
          files: [
            'images/{,**/}*.{png,jpg,jpeg,gif,webp,svg}'
          ],
          options: {
            livereload: true,
          },
        },
      },
  });

  //grunt.loadNpmTasks('grunt-contrib-compass');
  //grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-php');

  grunt.registerTask('default', ['watch', 'php', 'sass']);
};