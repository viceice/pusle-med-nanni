var os = require('os');

module.exports = function (grunt, options) {
    return {
        "bin": {
            "files": [
            {
                "flatten": true,
                "expand": true,
                "cwd": "bower_components/metro/fonts/",
                "src": "*.*",
                "dest": "<%= path.fonts %>"
            },
            {
                "flatten": true,
                "expand": true,
                "cwd": "bower_components/font-awesome/fonts/",
                "src": "*.*",
                "dest": "<%= path.fonts %>"
            },
            {
                "expand": true,
                "flatten": true,
                "src": [
                    "bower_components/jquery/dist/jquery.js",
                    "bower_components/metro/build/js/metro.js",
                    "bower_components/waypoints/lib/jquery.waypoints.js"
                ],
                "dest": "<%= path.js %>"
            }
            ]
        }
    }
};
