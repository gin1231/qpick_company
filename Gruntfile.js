module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/qpick.css': 'css/qpick.scss',
        }
      }
    },
    watch: {
      files: "css//*.scss",
      tasks: ["sass"],
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};
