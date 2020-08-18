var os = require('os');

module.exports = function (grunt, options) {
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
                    src: [
                        require.resolve('jquery'),
                        require.resolve('jquery-migrate'),
                        require.resolve('metro-ui'),
                        // require.resolve('waypoints/lib/jquery.waypoints.js'),
                    ],
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
