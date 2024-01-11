module.exports = function (grunt) {
    if (grunt.option('time')) require('time-grunt')(grunt);

    //var bs = grunt.file.readJSON("./bower_components/bootstrap/grunt/configBridge.json", { encoding: "utf8" });
    var path = require('path');

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'tools/grunt-cfg'),
        data: {
            path: {
                bin: 'out/',
                css: '<%= path.bin %>css/',
                js: '<%= path.bin %>js/',
                fonts: '<%= path.bin %>fonts/',
            },
            banner: '/*! <%= package.name %> v<%= package.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            year: '<%= grunt.template.today("yyyy") %>',
        },
        loadGruntTasks: false,
        jitGrunt: {
            staticMappings: {
                nugetpack: 'grunt-nuget',
                nugetpush: 'grunt-nuget',
                sync: 'grunt-sync-pkg',
            },
            customTasksDir: 'tasks',
        },
    });

    process.title = 'grunt:' + grunt.config('package.name');

    grunt.registerTask('static', function () {
        grunt.config('path.bin', 'dist/');
        grunt.task.run(['_static']);
    });
};
