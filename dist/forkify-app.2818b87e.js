// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"6MxNS":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fdb32ee72818b87e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"dk4KI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _recipeControllerJs = require("./controllers/RecipeController.js");
var _recipeControllerJsDefault = parcelHelpers.interopDefault(_recipeControllerJs);

},{"./controllers/RecipeController.js":"3wEfD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3wEfD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _listRecipesViewJs = require("../views/ListRecipesView.js");
var _listRecipesViewJsDefault = parcelHelpers.interopDefault(_listRecipesViewJs);
var _recipeDetailViewJs = require("../views/RecipeDetailView.js");
var _recipeDetailViewJsDefault = parcelHelpers.interopDefault(_recipeDetailViewJs);
var _searchRecipesViewJs = require("../views/SearchRecipesView.js");
var _searchRecipesViewJsDefault = parcelHelpers.interopDefault(_searchRecipesViewJs);
var _createRecipeButtonViewJs = require("../views/CreateRecipeButtonView.js");
var _createRecipeButtonViewJsDefault = parcelHelpers.interopDefault(_createRecipeButtonViewJs);
var _loadingViewJs = require("../views/LoadingView.js");
var _loadingViewJsDefault = parcelHelpers.interopDefault(_loadingViewJs);
var _controllerJs = require("../core/Controller.js");
var _controllerJsDefault = parcelHelpers.interopDefault(_controllerJs);
var _recipeJs = require("../models/Recipe.js");
var _recipeJsDefault = parcelHelpers.interopDefault(_recipeJs);
var _viewsJs = require("../constants/views.js");
var _viewsJsDefault = parcelHelpers.interopDefault(_viewsJs);
class RecipeController extends (0, _controllerJsDefault.default) {
    constructor(){
        super();
        // Initialize properties
        this.listRecipes();
        this.showRecipe();
        this.showSearchRecipesForm();
        this.createRecipeButton();
        this.triggerEvent('hashchange', this.showRecipe.bind(this));
    }
    async listRecipes() {
        const loadingView = new (0, _loadingViewJsDefault.default)((0, _viewsJsDefault.default).LIST_RECIPES);
        loadingView.render();
        const recipes = await (0, _recipeJsDefault.default).searchRecipes(this.queryParams.q);
        // List all recipes
        const view = new (0, _listRecipesViewJsDefault.default)();
        view.render(recipes);
    }
    async showRecipe() {
        const loadingView = new (0, _loadingViewJsDefault.default)((0, _viewsJsDefault.default).RECIPE_DETAIL);
        loadingView.render();
        const recipe = await (0, _recipeJsDefault.default).getRecipe(this.hashParams[0]);
        const view = new (0, _recipeDetailViewJsDefault.default)();
        view.render(recipe);
    }
    showSearchRecipesForm() {
        const view = new (0, _searchRecipesViewJsDefault.default)();
        view.render(this.queryParams);
    }
    createRecipeButton() {
        const view = new (0, _createRecipeButtonViewJsDefault.default)();
        view.render();
    }
    showCreateRecipeForm() {
    // Logic for showing the create recipe form
    }
}
exports.default = new RecipeController();

},{"../views/ListRecipesView.js":"cPpA9","../core/Controller.js":"dKLs9","../models/Recipe.js":"krCpr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../views/RecipeDetailView.js":"jYQMf","../views/SearchRecipesView.js":"hHhA1","../constants/views.js":"c0shW","../views/LoadingView.js":"h68q9","../views/CreateRecipeButtonView.js":"3eGpc"}],"cPpA9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../core/View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _viewsJs = require("../constants/views.js");
var _viewsJsDefault = parcelHelpers.interopDefault(_viewsJs);
class ListRecipesView extends (0, _viewJsDefault.default) {
    constructor(){
        super((0, _viewsJsDefault.default).LIST_RECIPES);
    }
    render(recipes) {
        if (recipes.length === 0) this.addMarkup(`
        <p>No recipes found.</p>
      `);
        else this.addMarkup(`
        <ul class="recipe-list">
          ${recipes.map((recipe)=>`<li class="recipe-item"><a href="#${recipe.id}">${recipe.title}</a></li>`).join('')}
        </ul>
    `);
    }
}
exports.default = ListRecipesView;

},{"../core/View.js":"8RTrZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../constants/views.js":"c0shW"}],"8RTrZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    #view;
    constructor(viewId){
        this.#view = document.getElementById(viewId);
    }
    getView() {
        return this.#view;
    }
    addMarkup(markup) {
        this.#view.innerHTML = markup;
    }
    append(markup) {
        this.#view.innerHTML += markup;
    }
    render() {
        throw new Error('Always override method render()');
    }
    addEventListeners(event, handler) {
        window.addEventListener(event, handler.bind(this));
    }
    addEventListenersToElement(elementId, event, handler) {
        const element = document.getElementById(elementId);
        if (!element) throw new Error(`Element with id ${elementId} not found`);
        element.addEventListener(event, handler.bind(this));
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c0shW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VIEW_IDS", ()=>VIEW_IDS);
const VIEW_IDS = {
    LIST_RECIPES: 'list-recipes',
    RECIPE_DETAIL: 'recipe-detail',
    SEARCH_RECIPES: 'search-recipes',
    LOADING: 'loading',
    ERROR: 'error'
};
exports.default = VIEW_IDS;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dKLs9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Controller {
    #hashParams;
    #queryParams;
    constructor(){
        this.getHashParams();
        this.getQueryParams();
        this.bindEvents();
    }
    bindEvents() {
        // Bind event listeners
        window.addEventListener('hashchange', this.getHashParams.bind(this));
    }
    triggerEvent(event, handler) {
        window.addEventListener(event, handler.bind(this));
    }
    getQueryParams() {
        this.#queryParams = Object.fromEntries(new URLSearchParams(window.location.search));
    }
    getHashParams() {
        this.#hashParams = window.location.hash.slice(1).split('/').filter(Boolean);
    }
    get queryParams() {
        return this.#queryParams;
    }
    get hashParams() {
        return this.#hashParams;
    }
}
exports.default = Controller;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"krCpr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _modelJs = require("../core/Model.js");
var _modelJsDefault = parcelHelpers.interopDefault(_modelJs);
class Recipe extends (0, _modelJsDefault.default) {
    id;
    title;
    thumbnail;
    author;
    constructor(){
        super();
    }
    transform({ publisher, image_url, id, title }) {
        this.id = id;
        this.title = title;
        this.thumbnail = image_url;
        this.author = publisher;
        return this;
    }
    async listRecipes() {
        const response = await this.api.get({
            path: 'recipes',
            queryParams: {
                search: 'pizza'
            }
        });
        return response ? response.data.recipes.map((recipe)=>new Recipe().transform(recipe)) : [];
    }
    async getRecipe(id) {
        if (!id) return null;
        const response = await this.api.get({
            path: `recipes/${id}`
        });
        return response ? new Recipe().transform(response.data.recipe) : null;
    }
    async searchRecipes(query = 'pizza') {
        const response = await this.api.get({
            path: 'recipes',
            queryParams: {
                search: query
            }
        });
        return response ? response.data.recipes.map((recipe)=>new Recipe().transform(recipe)) : [];
    }
    async create(data) {
        const response = await this.api.post({
            path: 'recipes',
            params: {
                title: 'Pizza Ky',
                publisher: 'Ky123',
                image_url: 'https://example.com/pizza.jpg',
                source_url: 'https://example.com/pizza-recipe',
                cooking_time: 30,
                servings: 4
            }
        });
        return response ? new Recipe().transform(response.data.recipe) : null;
    }
    async delete(id) {
        if (!id) return null;
        const response = await this.api.delete({
            path: `recipes/${id}`
        });
        return response;
    }
}
exports.default = new Recipe();

},{"../core/Model.js":"fsn7I","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fsn7I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _apiJs = require("../util/api.js");
var _apiJsDefault = parcelHelpers.interopDefault(_apiJs);
class Model {
    #api;
    constructor(){
        this.#api = new (0, _apiJsDefault.default)();
    }
    get api() {
        return this.#api;
    }
}
exports.default = Model;

},{"../util/api.js":"eLimm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eLimm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Api {
    #baseUrl;
    #baseHeaders;
    constructor(){
        this.#baseUrl = 'https://forkify-api.herokuapp.com/api/v2/';
        this.#baseHeaders = {
            'Content-Type': 'application/json'
        };
    }
    setBaseUrl(url) {
        this.#baseUrl = url;
    }
    async fetch({ method = 'GET', path, params, queryParams, headers = {} }) {
        const defaultQueryParams = {
            key: '957b9207-ee11-4c5f-a898-714faea9090c'
        };
        const queryString = queryParams ? new URLSearchParams({
            ...defaultQueryParams,
            ...queryParams
        }).toString() : new URLSearchParams({
            ...defaultQueryParams
        }).toString();
        try {
            const response = await fetch(`${this.#baseUrl}${path}?${queryString}`, {
                method,
                headers: {
                    ...this.#baseHeaders,
                    ...headers
                },
                body: params ? JSON.stringify(params) : null
            });
            if (!response.ok) throw new Error('Failed to fetch recipes');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    async get({ queryParams, path, headers }) {
        return await this.fetch({
            method: 'GET',
            path,
            queryParams,
            headers
        });
    }
    async post({ path, params, headers }) {
        return await this.fetch({
            method: 'POST',
            path,
            params,
            headers
        });
    }
    async delete({ path, params, headers }) {
        return await this.fetch({
            method: 'DELETE',
            path,
            headers,
            params
        });
    }
}
exports.default = Api;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jYQMf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../core/View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _viewsJs = require("../constants/views.js");
var _viewsJsDefault = parcelHelpers.interopDefault(_viewsJs);
var _deleteRecipeButtonViewJs = require("./DeleteRecipeButtonView.js");
var _deleteRecipeButtonViewJsDefault = parcelHelpers.interopDefault(_deleteRecipeButtonViewJs);
class RecipeDetailView extends (0, _viewJsDefault.default) {
    constructor(){
        super((0, _viewsJsDefault.default).RECIPE_DETAIL);
    }
    render(recipe) {
        if (!recipe) {
            this.addMarkup('<p>No recipe</p>');
            return;
        }
        const nestedView = new (0, _deleteRecipeButtonViewJsDefault.default)();
        this.addMarkup(`
        <div class="recipe-detail">
          <h2 class="recipe-title">${recipe.title}</h2>
          <img src="${recipe.thumbnail}" alt="${recipe.title}" />
          <p class="recipe-description">${recipe.author}</p>
          ${nestedView.generate(recipe.id)}
        </div>
    `);
        nestedView.bindEvents();
    }
}
exports.default = RecipeDetailView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../core/View.js":"8RTrZ","../constants/views.js":"c0shW","./DeleteRecipeButtonView.js":"3FAHz"}],"3FAHz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../core/View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _recipeJs = require("../models/Recipe.js");
var _recipeJsDefault = parcelHelpers.interopDefault(_recipeJs);
class DeleteRecipeButtonView extends (0, _viewJsDefault.default) {
    #formId = 'delete-recipe-form';
    constructor(viewId = 'delete-recipe-button'){
        super(viewId);
    }
    bindEvents() {
        this.addEventListenersToElement(this.#formId, 'submit', this.deleteRecipe.bind(this));
    }
    render() {}
    generate(recipeId) {
        return `
      <form id="${this.#formId}">
        <input type="hidden" name="recipeId" value="${recipeId}">
        <button type="submit">Delete This Recipe</button>
      </form>
    `;
    }
    async deleteRecipe(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const recipeId = formData.get('recipeId');
        await (0, _recipeJsDefault.default).delete(recipeId);
        location.hash = '';
        location.reload();
    }
}
exports.default = DeleteRecipeButtonView;

},{"../core/View.js":"8RTrZ","../models/Recipe.js":"krCpr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hHhA1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../core/View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _viewsJs = require("../constants/views.js");
var _viewsJsDefault = parcelHelpers.interopDefault(_viewsJs);
class SearchRecipesView extends (0, _viewJsDefault.default) {
    #formId = 'search-recipes-form';
    constructor(){
        super((0, _viewsJsDefault.default).SEARCH_RECIPES);
    }
    render(queryParams) {
        this.addMarkup(`
        <form id="${this.#formId}">
            <input type="text" name="q" placeholder="Search for recipes..." value="${queryParams.q || ''}" />
        </form>
    `);
        this.addEventListenersToElement(this.#formId, 'submit', this.handleSearch.bind(this));
    }
    handleSearch(event) {
        location.hash = '';
    }
}
exports.default = SearchRecipesView;

},{"../core/View.js":"8RTrZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../constants/views.js":"c0shW"}],"h68q9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../core/View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class LoadingView extends (0, _viewJsDefault.default) {
    constructor(viewId){
        super(viewId);
    }
    render() {
        this.addMarkup(`
      <div class="loading">
        <p>Loading...</p>
      </div>
    `);
    }
}
exports.default = LoadingView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../core/View.js":"8RTrZ"}],"3eGpc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../core/View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _recipeJs = require("../models/Recipe.js");
var _recipeJsDefault = parcelHelpers.interopDefault(_recipeJs);
class CreateRecipeButtonView extends (0, _viewJsDefault.default) {
    #overlayId = 'create-recipe-overlay';
    #formId = 'create-recipe-form';
    constructor(viewId = 'create-recipe-button'){
        super(viewId);
        this.bindEvents();
    }
    bindEvents() {
        this.addEventListeners('click', this.toggleModal.bind(this));
    }
    render() {
        this.addMarkup(`
      <button id="show-create-recipe-form" >Create Recipe</button>
      <div class="overlay" id="${this.#overlayId}">
        <form id="${this.#formId}" method="POST">
            <input type="text" name="title" placeholder="Recipe Title" required>
            <input type="text" name="publisher" placeholder="Publisher" required>
            <button type="submit">Create Recipe</button>
            <button type="button" id="hide-create-recipe-form">Cancel</button>
        </form>
      </div>
    `);
        this.addEventListenersToElement(this.#formId, 'submit', this.handleSubmit.bind(this));
    }
    toggleModal(event) {
        const currentTarget = event.target;
        if (currentTarget.id === 'show-create-recipe-form') {
            const overlay = document.getElementById(this.#overlayId);
            overlay.classList.add('active');
        }
        if (currentTarget.id === 'hide-create-recipe-form') {
            const overlay = document.getElementById(this.#overlayId);
            overlay.classList.remove('active');
        }
    }
    async handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const recipeData = Object.fromEntries(formData);
        await (0, _recipeJsDefault.default).create(recipeData);
        location.reload();
    }
}
exports.default = CreateRecipeButtonView;

},{"../core/View.js":"8RTrZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../models/Recipe.js":"krCpr"}]},["6MxNS","dk4KI"], "dk4KI", "parcelRequire3a11", {})

//# sourceMappingURL=forkify-app.2818b87e.js.map
