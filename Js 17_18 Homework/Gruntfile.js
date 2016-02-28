module.exports = function(grunt) {

    grunt.initConfig({

        concat: {
            js: {
                options: {
                    separator: ';',
                },
                src: ['js/src/*.js'],
                dest: 'js/dist/built.js',
            },
            css: {
                src: ['css/src/*.css'],
                dest: 'css/dist/main.css',
            },
          },

        uglify: {
            js: {
                src: 'js/dist/built.js',
                dest: 'js/dist/built.min.js'
            }
        },

        cssmin: {
            css: {
                src: 'css/dist/main.css',
                dest: 'css/dist/main.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};