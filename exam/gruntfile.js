module.exports = function(grunt) {

    grunt.initConfig({

        concat: {
            js: {
                options: {
                    separator: ';',
                },
                 files: [
                    {src: ['js/src/vendor/*.js'], dest: 'js/dist/vendor.js'},
                    {src: ['js/src/*.js'], dest: 'js/dist/built.js'},
                    {src: ['js/src/IE_8/*.js'], dest: 'js/dist/IE_8.built.js'},
                ],
            },
          },

        uglify: {
            js: {
                 files: [
                    {src: 'js/dist/vendor.js', dest: 'js/dist/vendor.min.js'},
                    {src: 'js/dist/built.js', dest: 'js/dist/built.min.js'},
                    {src: 'js/dist/IE_8.built.js', dest: 'js/dist/IE_8.built.min.js'},
                ],
            }
        },

        sass: {
            dist: {
                files: {
                'css/dist/style.css': 'css/src/style.scss',
                'css/dist/IE8.css': 'css/src/IE8.scss',
                }
            }
        },

        cssmin: {
            css: {
                files: [
                    {src: 'css/dist/style.css', dest: 'css/dist/style.min.css'},
                    {src: 'css/dist/IE8.css', dest: 'css/dist/IE8.min.css'},
                ],
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

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);
};