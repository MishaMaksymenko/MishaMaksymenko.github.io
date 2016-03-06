module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
	  babel: {
	    options: {
	      sourceMap: false,
	      presets: ['es2015']
	    },
	    dist: {
	      files: {
	        "js/dist/script.js": "js/src/script.js"
	      }
	    }
	  },
	  // watch: {
	  // 	babel: {
	  // 		files: 'js/src/script.js',
	  // 		tasks: ['babel']
	  // 	}
	  // }
	});

	grunt.registerTask("default", ["babel"]);

};