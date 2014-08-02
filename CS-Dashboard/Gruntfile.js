module.exports = function(grunt) {
  var srcFiles = '*';
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
    },
    "sftp-deploy": {
      build: {
        auth: {
          host: 'www.b40.cz',
          port: 22,
          authKey: 'key1'
        },
        src: ['/home/jm/Documents/matters/BIInternship.git/CS-Dashboard/csv/'],
        dest: ['/var/www/html/b40.cz/csv'],
        exclusions: ['/home/jm/Documents/matters/BIInternship.git/CS-Dashboard/csv/upload.sh', '/home/jm/Documents/matters/BIInternship.git/CS-Dashboard/bower_components', '/home/jm/Documents/matters/BIInternship.git/CS-Dashboard/node_modules', '/home/jm/Documents/matters/BIInternship.git/CS-Dashboard/img', '/home/jm/Documents/matters/BIInternship.git/CS-Dashboard/img_support'],
        serverSep: '/',
        concurrency: 4,
        progress: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-sftp-deploy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  //   grunt.registerTask('default', ['uglify', 'shell']);
  grunt.registerTask('default', ['sftp-deploy']);

};