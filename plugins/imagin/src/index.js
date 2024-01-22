/* eslint class-methods-use-this:0 */
'use strict';

/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */

// External
const BasePlugin = require('docpad-baseplugin');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs-extra');
const extendr = require('extendr');

function merge(obj1, obj2) {
    return extendr.extend(extendr.extend({}, obj1), obj2);
}

function paramsToString(params) {
    let str = '';
    if (params.w != null) {
        str += `w${params.w}`;
    }
    if (params.h != null) {
        str += `h${params.h}`;
    }
    if (params.q != null) {
        str += `q${params.q}`;
    }
    return str;
}

class Imagin extends BasePlugin {
    get name() {
        return 'imagin';
    }

    get initialConfig() {
        return {
            presets: {
                default: {
                    q: 85,
                },
                'tiny-square': {
                    w: 50,
                    h: 50,
                },
                'small-square': {
                    w: 150,
                    h: 150,
                },
                'medium-square': {
                    w: 300,
                    h: 300,
                },
                'large-square': {
                    w: 500,
                    h: 500,
                },
                'tiny-wide': {
                    w: 88,
                    h: 50,
                },
                'small-wide': {
                    w: 266,
                    h: 150,
                },
                'medium-wide': {
                    w: 533,
                    h: 300,
                },
                'large-wide': {
                    w: 888,
                    h: 500,
                },
            },

            targets: {
                async default(/** @type {sharp.Sharp } */ img, args) {
                    // TODO: quality `args.q`
                    const meta = await img.metadata();
                    return img.resize(args.w, args.h).toFormat(meta.format, { quality: args.q, mozjpeg: true });
                },
                // not supported yet
                // zoomcrop(img, args) {
                //     return img.quality(args.q).gravity('Center').resize(args.w, args.h, '^').crop(args.w, args.h);
                // },
            },

            imageMagick: false,
            extensions: ['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG'],
        };
    }

    constructor(...args) {
        super(...args);
        this.thumbnailsToGenerateLength = 0;
        this.thumbnailsToGenerate = {};
    }

    extendTemplateData(options) {
        //Prepare
        const { docpad, config } = this;
        const me = this;
        const { templateData } = options;

        templateData.getThumbnail = function (src, ...args) {
            // return a thumbnail url, generating the image if necessary
            let relativeOutDirPath;
            const sourceFile = this.getFileAtPath(src);
            let attributes = undefined;
            if (sourceFile) {
                ({ attributes } = sourceFile);
            } else {
                const extendedSources = fs
                    .readdirSync(docpad.config.srcPath)
                    .filter((file) => fs.statSync(path.join(docpad.config.srcPath, file)).isDirectory());
                for (let extendedSource of Array.from(extendedSources)) {
                    const sourceFilePath = path.join(docpad.config.srcPath, extendedSource, src);
                    if (fs.existsSync(sourceFilePath)) {
                        const sourceStats = fs.statSync(sourceFilePath);
                        relativeOutDirPath = path.dirname(src);
                        if (relativeOutDirPath.indexOf('/') === 0) {
                            relativeOutDirPath = relativeOutDirPath.substring(1);
                        }
                        attributes = {
                            fullPath: sourceFilePath,
                            outDirPath: path.dirname(path.join(docpad.config.outPath, src)),
                            relativeOutDirPath,
                            mtime: sourceStats.mtime,
                            basename: path.basename(sourceFilePath, path.extname(sourceFilePath)),
                            extension: path.extname(sourceFilePath).substring(1),
                        };
                        break;
                    }
                }
            }

            if (attributes != null) {
                const srcPath = attributes.fullPath;
                const relPath = attributes.relativePath ?? path.relative(docpad.config.srcPath, srcPath);
                const { outDirPath } = attributes;
                const relOutDirPath = attributes.relativeOutDirPath;
                const { mtime } = attributes;
                const { basename } = attributes;
                const ext = attributes.extension;

                // first check that file extension is a valid image format
                if (!Array.from(config.extensions).includes(ext)) {
                    const msg = `Thumbnail source file extension '${ext}' not recognised: ${relPath}`;
                    docpad.error(msg);
                    return '';
                }

                // work out our target chain and params
                const targets = [];
                let params = config.presets['default'];
                for (let a of Array.from(args)) {
                    if (typeof a === 'object') {
                        // this is a params object
                        params = merge(params, a);
                    } else if (typeof a === 'function') {
                        // this is a function that should return a params object
                        params = merge(params, a());
                    } else {
                        // treat as a string
                        // could be either a target or param preset
                        if (a in config.targets) {
                            targets.push(a);
                        } else if (a in config.presets) {
                            params = merge(params, config.presets[a]);
                        } else {
                            docpad.log('warn', `imagin: Unknown parameter '${a}' for image: ${relPath}`);
                        }
                    }
                }

                if (!targets.length) {
                    const t = config.targets['default'];
                    if (!(typeof t === 'function')) {
                        // this is a reference to a different target
                        if (!(t in config.targets)) {
                            docpad.error(`Target name '${t}' does not exist`);
                            return '';
                        }
                        targets.push(t);
                    } else {
                        targets.push('default');
                    }
                }

                const { sep } = path;
                const suffix = `.thumb_${targets.join('_')}_${paramsToString(params)}`;
                const thumbfilename = basename + suffix + '.' + ext;
                const dstPath = outDirPath + sep + thumbfilename;
                let targetUrl = '/';
                if (relOutDirPath != null ? relOutDirPath.length : undefined) {
                    targetUrl += relOutDirPath + '/';
                }
                targetUrl += thumbfilename;

                // first check it's not already in our queue
                if (!(dstPath in me.thumbnailsToGenerate)) {
                    let generate = false;
                    try {
                        // check if the thumbnail already exists and is up to date
                        const stats = fs.statSync(dstPath);
                        if (stats.mtime < mtime) {
                            generate = true;
                        }
                    } catch (err) {
                        generate = true;
                    }

                    if (generate) {
                        docpad.log('debug', `Imagin is adding to queue: ${relPath}`);

                        // add to queue
                        me.thumbnailsToGenerate[dstPath] = {
                            dst: dstPath,
                            src: srcPath,
                            targets,
                            params,
                            relPath,
                        };
                        me.thumbnailsToGenerateLength++;
                    }
                }

                return targetUrl;
            }

            return '';
        };

        // Chain
        return this;
    }

    writeAfter(_opts, next) {
        //Prepare
        const { docpad, config } = this;
        let failures = 0;
        let completed = 0;

        if (!this.thumbnailsToGenerateLength) {
            docpad.log('debug', 'Imagin has nothing to generate');
            return next();
        }

        const tasks = docpad.createTaskGroup({ concurrency: config.concurrency ?? 0 }).done(function (err) {
            if (err == null) {
                docpad.log('info', `Imagin generation completed successfully (${completed} images)`);
            } else {
                docpad.log('error', `Imagin generation failed ${err} (${failures} failures, ${completed} completed))`);
            }
            return typeof next === 'function' ? next() : undefined;
        });

        for (const [dst, item] of Object.entries(this.thumbnailsToGenerate)) {
            const dstPath = dst;
            const srcPath = item.src;
            const { targets, relPath } = item;
            const { params } = item;

            fs.ensureDirSync(path.dirname(dstPath));

            tasks.addTask(async function (complete) {
                let img = sharp(srcPath);

                // execute the target chain
                for (let t of Array.from(targets)) {
                    const target_handler = config.targets[t];
                    img = await target_handler(img, params);
                }

                await fs.rm(path.join(docpad.config.outPath, relPath), { force: true });

                img.toFile(dstPath, function (err) {
                    if (err) {
                        docpad.log('warn', `Failed to generate: ${relPath}`);
                        docpad.error(err);
                        ++failures;
                    } else {
                        completed++;
                        docpad.log('debug', `Finished generating: ${relPath}`);
                    }
                    complete();
                });
            });
        }

        tasks.run();

        // Chain
        return this;
    }

    generateAfter(_opts, next) {
        this.docpad.log('debug', 'imagin: generateAfter');
        this.thumbnailsToGenerate = {};
        this.thumbnailsToGenerateLength = 0;

        // Chain
        return next();
    }
}

module.exports = Imagin;
