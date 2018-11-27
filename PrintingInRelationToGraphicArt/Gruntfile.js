module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // open : {
        //     default : {
        //       path: 'http://localhost:9000/dist/index.html',
        //     }
        // },

        // CSS Build
        postcss: {
            options: {
                map: {
                    inline: false, 
                    annotation: 'dist/css/maps/'
                },
                processors: [
                    require('postcss-import')(),
                    // require('postcss-css-variables')(),
                    require('pixrem')(),
                    require('postcss-color-function')(),
                    require('postcss-nested')(),
                    require('postcss-merge-rules')(),
                    // require('autoprefixer-core')('last 1 version'),
                    require('postcss-discard-comments')({
                        removeAll: true
                    }),
                    // require('cssnano')()
                ]
            },
            dist: {
                src: 'src/css/book.css',
                dest: 'dist/css/book.css'
            }

        },
        copy: {
            main: {
                expand: true,
                cwd: 'src/js',
                src: '**',
                dest: 'dist/js/',
            },

            html: {
                expand: true,
                cwd: 'src/content',
                src: '**/*.html',
                dest: 'dist/',
            },
            img: {
                expand: true,
                cwd: 'src/images',
                src: '**',
                dest: 'dist/images/',
            },
            fonts: {
                expand: true,
                cwd: 'src/fonts',
                src: '**',
                dest: 'dist/fonts'
            }
        },
        // Server Run
        connect: {
            server: {
                options: {
                    port: 9000,
                    // base: 'www-root'
                }
            }
        },

        livereload: {
            options: {
                port: 9000,
                // base: 'dist/index.html'
            },
        },

        watch: {
            css: {
                files: 'src/css/**/*.css',
                tasks: ['postcss'],
                options: {
                    livereload: true
                },
            },
            copy: {
                files: 'src/**/*',
                tasks: ['copy'],
                options: {
                    livereload: true
                },
            },
        }



    });




    //'serve',
    grunt.registerTask('default', ['copy', 'postcss', 'connect', 'watch']);

};