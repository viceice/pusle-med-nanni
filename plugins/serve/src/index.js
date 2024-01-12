/* eslint class-methods-use-this:0 */
'use strict';

// External
const BasePlugin = require('docpad-baseplugin');
const express = require('express');

// Define plugin
class ServePlugin extends BasePlugin {
    get name() {
        return 'serve';
    }

    get initialConfig() {
        return {
            listenOptions: {},
            serveOptions: {},
        };
    }

    // Create the server
    docpadReady(opts, next) {
        this.createServer(opts, next);
    }
    createServer(opts, next) {
        // prepare
        const me = this;
        const config = this.getConfig();
        const { docpad } = this;
        const docpadConfig = docpad.getConfig();

        if (this.server) {
            this.destroyServer(function (err) {
                if (err) return next(err);
                this.createServer(opts, next);
            });
            return this;
        }

        // start
        docpad.log('info', 'Starting the server...');
        const app = express().use(express.static(docpad.getPath('out')));

        // get the port and hostname
        opts = {
            port: docpadConfig.port || 9778,
            host: docpadConfig.host || docpadConfig.hostname || 'localhost',
            ...config.listenOptions,
            ...opts,
        };

        // start listening on the server
        this.server = app.listen(opts, () => {
            // fetch
            const { port, address } = this.server.address();
            // apply
            me.port = port;
            me.address = address;
            me.host = opts.host;
            me.url = `http://${opts.host}:${opts.port}`;
            // log
            this.docpad.log('info', `...server started on ${me.url}`);
            next();
        });

        this.server.on('error', this.docpad.error);
        this.server.on('clientError', this.docpad.warn);
    }

    // Destroy the server
    docpadDestroy(opts, next) {
        this.destroyServer(opts, next);
    }
    destroyServer(_opts, next) {
        const me = this;
        if (this.server) {
            this.docpad.log('info', 'Shutting down the server...');
            this.server.close((...args) => {
                // remove
                this.server.removeAllListeners();

                // reset
                me.server = me.url = me.host = me.address = me.port = false;

                // log
                this.docpad.log('info', '...shutdown down the server');
                next(...args);
            });
        } else {
            next();
        }
    }
}

module.exports = ServePlugin;
