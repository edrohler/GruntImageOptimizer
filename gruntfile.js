"use-strict";

module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        imagemin: {
            dis: {
                files: [{
                    expand: true, 
                    cwd: "./src/",
                    src: ["**/*.{png,jpg,gif}"],
                    dest: "./dist"
                }]
            }
        }
    });

    grunt.registerTask("default", ["imagemin"]);
}