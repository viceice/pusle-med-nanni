// adapted from https://github.com/docpad/docpad-plugin-marked/blob/13fb7d95c38424b7828590abcaf4833a906d98fa/source/index.coffee
'use strict';

const BasePlugin = require('docpad-baseplugin');
const { marked } = require('marked');

class MarkedPlugin extends BasePlugin {
    // Render some content
    render(opts, next) {
        var config, inExtension, outExtension, renderer;
        // Prepare
        config = this.config;
        ({ inExtension, outExtension } = opts);
        // Check our extensions
        if ((inExtension === 'md' || inExtension === 'markdown') && (outExtension === null || outExtension === 'html')) {
            marked.setOptions(config.markedOptions);
            if (config.markedRenderer) {
                renderer = new marked.Renderer();
                Object.keys(config.markedRenderer).forEach(function (key) {
                    renderer[key] = config.markedRenderer[key];
                });
                return marked(opts.content, {
                    renderer: renderer,
                    async: true,
                })
                    .then((content) => (opts.content = content))
                    .then(() => next())
                    .catch(next);
            }
            // Render
            // use async form of marked in case highlight function requires it
            marked(opts.content, { async: true })
                .then((content) => (opts.content = content))
                .then(() => next())
                .catch(next);
        } else {
            // Done
            return next();
        }
    }
}

// Plugin name
MarkedPlugin.prototype.name = 'marked';

// Plugin configuration
MarkedPlugin.prototype.config = {
    markedOptions: {
        pedantic: false,
        gfm: true,
        sanitize: false,
        highlight: null,
    },
};

module.exports = MarkedPlugin;
