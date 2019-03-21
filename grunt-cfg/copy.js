var os = require('os');

module.exports = function(grunt, options) {
    return {
        bin: {
            files: [
                {
                    flatten: true,
                    expand: true,
                    cwd: 'node_modules/metro-ui/build/fonts/',
                    src: '*.*',
                    dest: '<%= path.fonts %>',
                },
                {
                    flatten: true,
                    expand: true,
                    cwd: 'node_modules/font-awesome/fonts/',
                    src: '*.*',
                    dest: '<%= path.fonts %>',
                },
                {
                    expand: true,
                    flatten: true,
                    src: ['node_modules/jquery/dist/jquery.js', 'node_modules/metro-ui/build/js/metro.js', 'node_modules/waypoints/lib/jquery.waypoints.js'],
                    dest: '<%= path.js %>',
                },
                // {
                //     flatten: true,
                //     src: ['doc/*.gitignore'],
                //     dest: '<%= path.bin %>.gitignore',
                // },
            ],
        },
    };
};
