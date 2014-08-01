module.exports = function(grunt) {
  var srcFiles = '*';
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /*uglify: {
      options: {*/
    //    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    /*},
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },*/
    watch: {
      css: {
        files: ['css/*.css'],
        tasks: ['newer:shell:upload']
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['newer:shell:upload']
      }
    },
    shell: {
      upload: {
        command: 'sshpass -p "meLAB#14" scp -P 22 -r /home/jm/Documents/matters/BIInternship.git/CS-Dashboard/* "user14@b40.cz:/var/www/html/b40.cz"',
        command: 'sshpass -p "meLAB#14" scp -P 22 -r /home/jm/Documents/matters/BIInternship.git/CS-Dashboard/css/*.* "user14@b40.cz:/var/www/html/b40.cz/css/"',
        command: 'sshpass -p "meLAB#14" scp -P 22 -r /home/jm/Documents/matters/BIInternship.git/CS-Dashboard/js/*.* "user14@b40.cz:/var/www/html/b40.cz/js/"'

      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  //   grunt.registerTask('default', ['uglify', 'shell']);
  grunt.registerTask('default', ['watch', 'newer:shell']);

};