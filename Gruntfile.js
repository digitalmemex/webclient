/*jslint node: true, indent: 2, maxlen: 120 */

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: './files/lib',
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'package.json', 'bower.json', 'files/org/digitalmemex/webclient/*.js']
    }
  });
  grunt.registerTask('default', ['bower', 'jshint']);
};
