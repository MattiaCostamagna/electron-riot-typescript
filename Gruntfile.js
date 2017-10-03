module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        exec: {
            riotcompile: {
                cmd: 'npm run compile-riot'
            }
        },
        uglify: {
            renderer: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                    mangle: true,
                    compress: true,
                    sourceMap: true,
                    sourceMapName: '.uglify-maps/renderer.map',
                    output: {
                        comments: false
                    }
                },
                files: {
                    'dist/renderer.min.js': [
                        'node_modules/riot/riot.min.js',
                        'src/compiled-tags/**/*.js',
                        'src/renderer.js'
                    ]
                }
            },
            main: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                    mangle: true,
                    compress: true,
                    sourceMap: true,
                    sourceMapName: '.uglify-maps/main.map',
                    output: {
                        comments: false
                    }
                },
                files: {
                    'dist/main.js': ['src/main.js']
                }
            }
        },
        copy: {
            index: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['index.html'],
                    dest: 'dist/',
                    filter: 'isFile'
                }],
            },
            img: {
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**'],
                    dest: 'dist/img'
                }, ],
            },
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/style/scss',
                    src: ['*.scss'],
                    dest: 'src/style/css',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/style/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            files: ['Gruntfile.js', 'src/**/*.html', 'src/**/*.scss', 'src/**/*.tag', 'src/**/*.ts'],
            tasks: ['sass', 'cssmin', 'exec', 'uglify', 'copy']
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['sass', 'cssmin', 'exec', 'uglify', 'copy']);
};
