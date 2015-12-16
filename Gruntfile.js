module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        browserify: true,
        newcap: false
      },    
      files: [
        'src/scripts/*.js',
      ]
    },
    browserify: {
      dev: {
        src: ['src/scripts/app.js'],
        dest: 'build/app-bundle.js'
      }
    },
    watch: {
      files: ['src/**/*.js'],
      tasks: [
        'jshint',
        'browserify'
      ]
    }   
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
