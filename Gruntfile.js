module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            files: {
                src: "./scripts/main.js",
                dest: "./dist/bundle.js"
            },
            options: {
                transform: ["hbsfy"]
            }
        },
        jshint: {
            options: {
                predef: ["document", "console", "alert", "$"],
                esnext: true,
                globalstrict: true,
                globals: {},
                browserify: true
            },
            files: ["./scripts/**/*.js"]
        },
        watch: {
            options: {
                reload: true
            },
            javascripts: {
                files: ["./scripts/**/*.js"],
                tasks: ["jshint", "browserify"]
            },
            hbs: {
                files: ["./templates/**/*.hbs"],
                tasks: ["browserify"]
            }
        }
    });

    require("matchdep")
        .filter("grunt-*")
        .forEach(grunt.loadNpmTasks);

    grunt.registerTask("default", ["jshint", "browserify", "watch"]);
};