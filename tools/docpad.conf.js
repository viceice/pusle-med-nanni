'use strict';

// DocPad Configuration File
// http://docpad.org/docs/config

const { DateTime } = require('luxon');
const _ = require('lodash');
const safeps = require('safeps');

// Define the DocPad Configuration
const docpadConfig = {
    templateData: {
        site: {
            url: 'https://www.pusle-med-nanni.de',

            title: 'Pusle med Nanni',
            // The website description (for SEO)
            description: `\
Willkommen bei pusle med Nanni.\
`,

            // The website keywords (for SEO) separated by commas
            keywords: 'Nähen, Stricken, Häkeln, Basteln',

            author: 'Susanne Kriese',
        },

        useWith: true,

        // Get the prepared site/document keywords
        getCanonicalUrl(doc) {
            let url = (doc ?? this.document).url;
            if (/index\.html$/i.test(url)) {
                url = url.replace(/index\.html$/, '');
            } else if (/\.html$/i.test(url)) {
                url = url.replace(/\.html$/, '');
            }
            return `${this.site.url}${url}`;
        },

        // -----------------------------
        // Helper Functions

        getPreparedDate() {
            return DateTime.fromJSDate(this.document.date).toFormat('dd.MM.yyyy HH:mm:ss');
        },

        _() {
            return _;
        },

        // Get the prepared site/document title
        // Often we would like to specify particular formatting to our page's title
        // we can apply that formatting here
        getPreparedTitle() {
            return this.document.title || this.site.title;
        },

        // Get the prepared site/document description
        getPreparedDescription() {
            return this.document.description || this.site.description;
        },

        // Get the prepared site/document keywords
        getPreparedKeywords() {
            return this.document.keywords || this.site.keywords;
        },

        getTile() {
            const src = arguments[0];
            if (src.search(/^\/?images/) === -1) {
                arguments[0] = `images/${src}.jpg`;
            }
            return this.getThumbnail.apply(this, arguments).replace(/\\/gi, '/');
        },

        groupMenu(pages) {
            const grps = pages.reduce(function (res, cur) {
                let name;
                (res[(name = cur.meta.group || '')] || (res[name] = [])).push(cur);
                return res;
            }, {});
            return Object.keys(grps).map(function (k) {
                const res = {
                    name: k,
                    pages: grps[k],
                };
                return res;
            });
        },

        getTiles(path) {
            return this.getCollection('images')
                .findAll({ url: new RegExp(`/images/${path.replace(/\\/gi, '/')}`, 'i') })
                .toJSON();
        },
    },

    localeCode: 'de',

    collections: {
        sitemap() {
            return this.getCollection('html').findAllLive({ url: /^\/(?!(google|error))/i, ignored: false }, [{ url: 1 }]);
        },

        images() {
            return this.getCollection('files').findAllLive({ url: /^\/images\//i }, [{ url: 1 }]);
        },
    },

    events: {
        // Write After
        // Used to minify our assets with grunt
        writeAfter(opts, next) {
            // Prepare
            const { docpad } = this;
            const { rootPath } = docpad.getConfig();
            const env = docpad.getConfig().env || 'development';

            // Perform the grunt `min` task
            const command = ['grunt', env];

            // Execute
            safeps.spawn(command, { stdio: 'inherit', shell: true, safe: false }, next);

            // Chain
            return this;
        },
    },

    environments: {
        development: {
            enabledPlugins: {
                livereload: true,
            },
        },
        static: {
            outPath: 'dist',
        },
    },

    plugins: {
        imagin: {
            presets: {
                default: {
                    w: 310,
                    h: 310,
                },
                tile: {
                    w: 150,
                    h: 150,
                },
                'tile-large': {
                    w: 310,
                    h: 310,
                },
                full: {
                    w: 1024,
                    h: 1024,
                },
            },
        },
    },
};

// Export the DocPad Configuration
module.exports = docpadConfig;
