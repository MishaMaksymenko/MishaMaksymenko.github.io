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
          },

        uglify: {
            js: {
                src: 'js/dist/built.js',
                dest: 'js/dist/built.min.js'
            }
        },

        cssmin: {
            css: {
                src: 'css/dist/style.css',
                dest: 'css/dist/style.min.css'
            }
        },

        sass: {
            dist: {
                files: {
                'css/dist/style.css': 'css/src/style.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['css/src/*.scss'],
                tasks: ['sass', 'cssmin'],
            },
            concat: {
                files: ['js/src/*.js'],
                tasks: ['concat', 'uglify'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass']);
    // grunt.registerTask('default', ['sass']);
};