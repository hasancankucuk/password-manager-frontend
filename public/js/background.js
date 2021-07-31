/* tslint:disable */

/* -------------------------------------------------- */

/*      Start of Webpack Hot Extension Middleware     */

/* ================================================== */

/*  This will be converted into a lodash templ., any  */

/*  external argument must be provided using it       */

/* -------------------------------------------------- */
(function (window) {
  var injectionContext = {
    browser: null
  };
  (function () {
    ""||(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("webextension-polyfill", ["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.browser = mod.exports;
  }
})(this, function (module) {
  /* webextension-polyfill - v0.5.0 - Thu Sep 26 2019 22:22:26 */
  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
  /* vim: set sts=2 sw=2 et tw=80: */
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";

    // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.
    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }

      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */
      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }
      }

      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */
      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };

      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */
      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";

      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */
      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({ resolve, reject }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);

                target[name](...args);

                // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.
                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;

                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({ resolve, reject }, metadata));
            }
          });
        };
      };

      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */
      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }
        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */
      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.

              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,
                get() {
                  return target[prop];
                },
                set(value) {
                  target[prop] = value;
                }
              });

              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }
            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }
        };

        // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.
        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };

      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */
      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }
      });

      // Keep track if the deprecation warning has been logged at least once.
      let loggedSendResponseDeprecationWarning = false;

      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */
        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;

          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }
              didCallSendResponse = true;
              resolve(response);
            };
          });

          let result;
          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result);

          // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.
          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          }

          // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).
          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;
              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          };

          // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.
          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          }

          // Let Chrome know that the listener is replying.
          return true;
        };
      });

      const wrappedSendMessageCallback = ({ reject, resolve }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, { resolve, reject });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 })
        }
      };
      const settingMetadata = {
        clear: { minArgs: 1, maxArgs: 1 },
        get: { minArgs: 1, maxArgs: 1 },
        set: { minArgs: 1, maxArgs: 1 }
      };
      apiMetadata.privacy = {
        network: {
          networkPredictionEnabled: settingMetadata,
          webRTCIPHandlingPolicy: settingMetadata
        },
        services: {
          passwordSavingEnabled: settingMetadata
        },
        websites: {
          hyperlinkAuditingEnabled: settingMetadata,
          referrersEnabled: settingMetadata
        }
      };

      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    }

    // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.
    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map
"";
  }).bind(injectionContext)();
  var browser = injectionContext.browser;
  var signals = JSON.parse('{"SIGN_CHANGE":"SIGN_CHANGE","SIGN_RELOAD":"SIGN_RELOAD","SIGN_RELOADED":"SIGN_RELOADED","SIGN_LOG":"SIGN_LOG","SIGN_CONNECT":"SIGN_CONNECT"}');
  var config = JSON.parse('{"RECONNECT_INTERVAL":2000,"SOCKET_ERR_CODE_REF":"https://tools.ietf.org/html/rfc6455#section-7.4.1"}');
  var reloadPage = "true" === "true";
  var wsHost = "ws://localhost:9090";
  var SIGN_CHANGE = signals.SIGN_CHANGE,
      SIGN_RELOAD = signals.SIGN_RELOAD,
      SIGN_RELOADED = signals.SIGN_RELOADED,
      SIGN_LOG = signals.SIGN_LOG,
      SIGN_CONNECT = signals.SIGN_CONNECT;
  var RECONNECT_INTERVAL = config.RECONNECT_INTERVAL,
      SOCKET_ERR_CODE_REF = config.SOCKET_ERR_CODE_REF;
  var extension = browser.extension,
      runtime = browser.runtime,
      tabs = browser.tabs;
  var manifest = runtime.getManifest(); // =============================== Helper functions ======================================= //

  var formatter = function formatter(msg) {
    return "[ WER: ".concat(msg, " ]");
  };

  var logger = function logger(msg) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
    return console[level](formatter(msg));
  };

  var timeFormatter = function timeFormatter(date) {
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  }; // ========================== Called only on content scripts ============================== //


  function contentScriptWorker() {
    runtime.sendMessage({
      type: SIGN_CONNECT
    }).then(function (msg) {
      return console.info(msg);
    });
    runtime.onMessage.addListener(function (_ref) {
      var type = _ref.type,
          payload = _ref.payload;

      switch (type) {
        case SIGN_RELOAD:
          logger("Detected Changes. Reloading ...");
          reloadPage && window.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;
      }
    });
  } // ======================== Called only on background scripts ============================= //


  function backgroundWorker(socket) {
    runtime.onMessage.addListener(function (action, sender) {
      if (action.type === SIGN_CONNECT) {
        return Promise.resolve(formatter("Connected to Extension Hot Reloader"));
      }

      return true;
    });
    socket.addEventListener("message", function (_ref2) {
      var data = _ref2.data;

      var _JSON$parse = JSON.parse(data),
          type = _JSON$parse.type,
          payload = _JSON$parse.payload;

      if (type === SIGN_CHANGE && (!payload || !payload.onlyPageChanged)) {
        tabs.query({
          status: "complete"
        }).then(function (loadedTabs) {
          loadedTabs.forEach(function (tab) {
            return tab.id && tabs.sendMessage(tab.id, {
              type: SIGN_RELOAD
            });
          });
          socket.send(JSON.stringify({
            type: SIGN_RELOADED,
            payload: formatter("".concat(timeFormatter(new Date()), " - ").concat(manifest.name, " successfully reloaded"))
          }));
          runtime.reload();
        });
      } else {
        runtime.sendMessage({
          type: type,
          payload: payload
        });
      }
    });
    socket.addEventListener("close", function (_ref3) {
      var code = _ref3.code;
      logger("Socket connection closed. Code ".concat(code, ". See more in ").concat(SOCKET_ERR_CODE_REF), "warn");
      var intId = setInterval(function () {
        logger("Attempting to reconnect (tip: Check if Webpack is running)");
        var ws = new WebSocket(wsHost);

        ws.onerror = function () {
          return logger("Error trying to re-connect. Reattempting in ".concat(RECONNECT_INTERVAL / 1000, "s"), "warn");
        };

        ws.addEventListener("open", function () {
          clearInterval(intId);
          logger("Reconnected. Reloading plugin");
          runtime.reload();
        });
      }, RECONNECT_INTERVAL);
    });
  } // ======================== Called only on extension pages that are not the background ============================= //


  function extensionPageWorker() {
    runtime.sendMessage({
      type: SIGN_CONNECT
    }).then(function (msg) {
      return console.info(msg);
    });
    runtime.onMessage.addListener(function (_ref4) {
      var type = _ref4.type,
          payload = _ref4.payload;

      switch (type) {
        case SIGN_CHANGE:
          logger("Detected Changes. Reloading ...");
          reloadPage && window.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;
      }
    });
  } // ======================= Bootstraps the middleware =========================== //


  runtime.reload ? extension.getBackgroundPage() === window ? backgroundWorker(new WebSocket(wsHost)) : extensionPageWorker() : contentScriptWorker();
})(window);
/* ----------------------------------------------- */

/* End of Webpack Hot Extension Middleware  */

/* ----------------------------------------------- *//******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"./node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/axios/lib/helpers/cookies.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ \"./node_modules/axios/lib/core/buildFullPath.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/axios/lib/helpers/isURLSameOrigin.js\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    if (\n      (utils.isBlob(requestData) || utils.isFile(requestData)) &&\n      requestData.type\n    ) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = unescape(encodeURIComponent(config.auth.password)) || '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    var fullPath = buildFullPath(config.baseURL, config.url);\n    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    // Listen for ready state\n    request.onreadystatechange = function handleLoad() {\n      if (!request || request.readyState !== 4) {\n        return;\n      }\n\n      // The request errored out and we didn't get a response, this will be\n      // handled by onerror instead\n      // With one exception: request that using file: protocol, most browsers\n      // will return status as 0 even though it's a successful request\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n        return;\n      }\n\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\n      var response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(createError('Request aborted', config, 'ECONNABORTED', request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';\n      if (config.timeoutErrorMessage) {\n        timeoutErrorMessage = config.timeoutErrorMessage;\n      }\n      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?\n        cookies.read(config.xsrfCookieName) :\n        undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (!utils.isUndefined(config.withCredentials)) {\n      request.withCredentials = !!config.withCredentials;\n    }\n\n    // Add responseType to request if needed\n    if (config.responseType) {\n      try {\n        request.responseType = config.responseType;\n      } catch (e) {\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\n        if (config.responseType !== 'json') {\n          throw e;\n        }\n      }\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (!requestData) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"./node_modules/axios/lib/core/Axios.js\");\nvar mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\nvar defaults = __webpack_require__(/*! ./defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(mergeConfig(axios.defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"./node_modules/axios/lib/cancel/CancelToken.js\");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"./node_modules/axios/lib/helpers/spread.js\");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar buildURL = __webpack_require__(/*! ../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/axios/lib/core/dispatchRequest.js\");\nvar mergeConfig = __webpack_require__(/*! ./mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = arguments[1] || {};\n    config.url = arguments[0];\n  } else {\n    config = config || {};\n  }\n\n  config = mergeConfig(this.defaults, config);\n\n  // Set config.method\n  if (config.method) {\n    config.method = config.method.toLowerCase();\n  } else if (this.defaults.method) {\n    config.method = this.defaults.method.toLowerCase();\n  } else {\n    config.method = 'get';\n  }\n\n  // Hook up interceptors middleware\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\nAxios.prototype.getUri = function getUri(config) {\n  config = mergeConfig(this.defaults, config);\n  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\\?/, '');\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ \"./node_modules/axios/lib/helpers/isAbsoluteURL.js\");\nvar combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ \"./node_modules/axios/lib/helpers/combineURLs.js\");\n\n/**\n * Creates a new URL by combining the baseURL with the requestedURL,\n * only when the requestedURL is not already an absolute URL.\n * If the requestURL is absolute, this function returns the requestedURL untouched.\n *\n * @param {string} baseURL The base URL\n * @param {string} requestedURL Absolute or relative URL to combine\n * @returns {string} The combined full path\n */\nmodule.exports = function buildFullPath(baseURL, requestedURL) {\n  if (baseURL && !isAbsoluteURL(requestedURL)) {\n    return combineURLs(baseURL, requestedURL);\n  }\n  return requestedURL;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/buildFullPath.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/createError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData(\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData(\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData(\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n\n  error.request = request;\n  error.response = response;\n  error.isAxiosError = true;\n\n  error.toJSON = function toJSON() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: this.config,\n      code: this.code\n    };\n  };\n  return error;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n * @returns {Object} New object resulting from merging config2 to config1\n */\nmodule.exports = function mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  var config = {};\n\n  var valueFromConfig2Keys = ['url', 'method', 'data'];\n  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];\n  var defaultToConfig2Keys = [\n    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',\n    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',\n    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',\n    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',\n    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'\n  ];\n  var directMergeKeys = ['validateStatus'];\n\n  function getMergedValue(target, source) {\n    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {\n      return utils.merge(target, source);\n    } else if (utils.isPlainObject(source)) {\n      return utils.merge({}, source);\n    } else if (utils.isArray(source)) {\n      return source.slice();\n    }\n    return source;\n  }\n\n  function mergeDeepProperties(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  }\n\n  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    }\n  });\n\n  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);\n\n  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  utils.forEach(directMergeKeys, function merge(prop) {\n    if (prop in config2) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (prop in config1) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  var axiosKeys = valueFromConfig2Keys\n    .concat(mergeDeepPropertiesKeys)\n    .concat(defaultToConfig2Keys)\n    .concat(directMergeKeys);\n\n  var otherKeys = Object\n    .keys(config1)\n    .concat(Object.keys(config2))\n    .filter(function filterAxiosKeys(key) {\n      return axiosKeys.indexOf(key) === -1;\n    });\n\n  utils.forEach(otherKeys, mergeDeepProperties);\n\n  return config;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/mergeConfig.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/axios/lib/core/createError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"./node_modules/axios/lib/helpers/normalizeHeaderName.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ./adapters/http */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  }\n  return adapter;\n}\n\nvar defaults = {\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Accept');\n    normalizeHeaderName(headers, 'Content-Type');\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data)) {\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\n      return JSON.stringify(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    /*eslint no-param-reassign:0*/\n    if (typeof data === 'string') {\n      try {\n        data = JSON.parse(data);\n      } catch (e) { /* Ignore */ }\n    }\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n  maxBodyLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node-libs-browser/mock/process.js */ \"./node_modules/node-libs-browser/mock/process.js\")))\n\n//# sourceURL=webpack:///./node_modules/axios/lib/defaults.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    var hashmarkIndex = url.indexOf('#');\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n    (function standardBrowserEnv() {\n      return {\n        write: function write(name, value, expires, path, domain, secure) {\n          var cookie = [];\n          cookie.push(name + '=' + encodeURIComponent(value));\n\n          if (utils.isNumber(expires)) {\n            cookie.push('expires=' + new Date(expires).toGMTString());\n          }\n\n          if (utils.isString(path)) {\n            cookie.push('path=' + path);\n          }\n\n          if (utils.isString(domain)) {\n            cookie.push('domain=' + domain);\n          }\n\n          if (secure === true) {\n            cookie.push('secure');\n          }\n\n          document.cookie = cookie.join('; ');\n        },\n\n        read: function read(name) {\n          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n          return (match ? decodeURIComponent(match[3]) : null);\n        },\n\n        remove: function remove(name) {\n          this.write(name, '', Date.now() - 86400000);\n        }\n      };\n    })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return {\n        write: function write() {},\n        read: function read() { return null; },\n        remove: function remove() {}\n      };\n    })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n    (function standardBrowserEnv() {\n      var msie = /(msie|trident)/i.test(navigator.userAgent);\n      var urlParsingNode = document.createElement('a');\n      var originURL;\n\n      /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n      function resolveURL(url) {\n        var href = url;\n\n        if (msie) {\n        // IE needs attribute set twice to normalize properties\n          urlParsingNode.setAttribute('href', href);\n          href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n          href: urlParsingNode.href,\n          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n          host: urlParsingNode.host,\n          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n          hostname: urlParsingNode.hostname,\n          port: urlParsingNode.port,\n          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n            urlParsingNode.pathname :\n            '/' + urlParsingNode.pathname\n        };\n      }\n\n      originURL = resolveURL(window.location.href);\n\n      /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n      return function isURLSameOrigin(requestURL) {\n        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n        return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n      };\n    })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return function isURLSameOrigin() {\n        return true;\n      };\n    })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\n\n/*global toString:true*/\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is a Buffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Buffer, otherwise false\n */\nfunction isBuffer(val) {\n  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)\n    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a plain Object\n *\n * @param {Object} val The value to test\n * @return {boolean} True if value is a plain Object, otherwise false\n */\nfunction isPlainObject(val) {\n  if (toString.call(val) !== '[object Object]') {\n    return false;\n  }\n\n  var prototype = Object.getPrototypeOf(val);\n  return prototype === null || prototype === Object.prototype;\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||\n                                           navigator.product === 'NativeScript' ||\n                                           navigator.product === 'NS')) {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (isPlainObject(result[key]) && isPlainObject(val)) {\n      result[key] = merge(result[key], val);\n    } else if (isPlainObject(val)) {\n      result[key] = merge({}, val);\n    } else if (isArray(val)) {\n      result[key] = val.slice();\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\n/**\n * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)\n *\n * @param {string} content with BOM\n * @return {string} content value without BOM\n */\nfunction stripBOM(content) {\n  if (content.charCodeAt(0) === 0xFEFF) {\n    content = content.slice(1);\n  }\n  return content;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isPlainObject: isPlainObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  extend: extend,\n  trim: trim,\n  stripBOM: stripBOM\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar UNSCOPABLES = wellKnownSymbol('unscopables');\nvar ArrayPrototype = Array.prototype;\n\n// Array.prototype[@@unscopables]\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\nif (ArrayPrototype[UNSCOPABLES] == undefined) {\n  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {\n    configurable: true,\n    value: create(null)\n  });\n}\n\n// add a key to Array.prototype[@@unscopables]\nmodule.exports = function (key) {\n  ArrayPrototype[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name) {\n  if (!(it instanceof Constructor)) {\n    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.foreach\nmodule.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n// eslint-disable-next-line es/no-array-prototype-foreach -- safe\n} : [].forEach;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare -- NaN check\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var IS_FILTER_OUT = TYPE == 7;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else switch (TYPE) {\n          case 4: return false;             // every\n          case 7: push.call(target, value); // filterOut\n        }\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.es/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.es/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.es/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.es/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.es/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.es/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.es/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6),\n  // `Array.prototype.filterOut` method\n  // https://github.com/tc39/proposal-array-filtering\n  filterOut: createMethod(7)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return { done: !!called++ };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  };\n  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing\n  Array.from(iteratorWithReturn, function () { throw 2; });\n} catch (error) { /* empty */ }\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n  try {\n    var object = {};\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return { done: ITERATION_SUPPORT = true };\n        }\n      };\n    };\n    exec(object);\n  } catch (error) { /* empty */ }\n  return ITERATION_SUPPORT;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\").IteratorPrototype;\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-iterator-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"./node_modules/core-js/internals/create-iterator-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\");\n\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {\n          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF\n  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    INCORRECT_VALUES_NAME = true;\n    defaultIterator = function values() { return nativeIterator.call(this); };\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);\n  }\n  Iterators[NAME] = defaultIterator;\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/define-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-browser.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-browser.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = typeof window == 'object';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/engine-is-browser.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nmodule.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(userAgent);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/engine-is-ios.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = classof(global.process) == 'process';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/engine-is-node.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-webos-webkit.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nmodule.exports = /web0s(?!.*chrome)/i.test(userAgent);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/engine-is-webos-webkit.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] < 4 ? 1 : match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty.call(toObject(it), key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = function (a, b) {\n  var console = global.console;\n  if (console && console.error) {\n    arguments.length === 1 ? console.error(a) : console.error(a, b);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/host-report-errors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar OBJECT_ALREADY_INITIALIZED = 'Object already initialized';\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP || shared.state) {\n  var store = shared.state || (shared.state = new WeakMap());\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.es/ecma262/#sec-isarray\n// eslint-disable-next-line es/no-array-isarray -- safe\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js/internals/is-array-iterator-method.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"./node_modules/core-js/internals/iterator-close.js\");\n\nvar Result = function (stopped, result) {\n  this.stopped = stopped;\n  this.result = result;\n};\n\nmodule.exports = function (iterable, unboundFunction, options) {\n  var that = options && options.that;\n  var AS_ENTRIES = !!(options && options.AS_ENTRIES);\n  var IS_ITERATOR = !!(options && options.IS_ITERATOR);\n  var INTERRUPTED = !!(options && options.INTERRUPTED);\n  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);\n  var iterator, iterFn, index, length, result, next, step;\n\n  var stop = function (condition) {\n    if (iterator) iteratorClose(iterator);\n    return new Result(true, condition);\n  };\n\n  var callFn = function (value) {\n    if (AS_ENTRIES) {\n      anObject(value);\n      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);\n    } return INTERRUPTED ? fn(value, stop) : fn(value);\n  };\n\n  if (IS_ITERATOR) {\n    iterator = iterable;\n  } else {\n    iterFn = getIteratorMethod(iterable);\n    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');\n    // optimisation for array iterators\n    if (isArrayIteratorMethod(iterFn)) {\n      for (index = 0, length = toLength(iterable.length); length > index; index++) {\n        result = callFn(iterable[index]);\n        if (result && result instanceof Result) return result;\n      } return new Result(false);\n    }\n    iterator = iterFn.call(iterable);\n  }\n\n  next = iterator.next;\n  while (!(step = next.call(iterator)).done) {\n    try {\n      result = callFn(step.value);\n    } catch (error) {\n      iteratorClose(iterator);\n      throw error;\n    }\n    if (typeof result == 'object' && result && result instanceof Result) return result;\n  } return new Result(false);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/iterate.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nmodule.exports = function (iterator) {\n  var returnMethod = iterator['return'];\n  if (returnMethod !== undefined) {\n    return anObject(returnMethod.call(iterator)).value;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/iterator-close.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\nvar returnThis = function () { return this; };\n\n// `%IteratorPrototype%` object\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\n/* eslint-disable es/no-array-prototype-keys -- safe */\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nvar NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {\n  var test = {};\n  // FF44- legacy iterators case\n  return IteratorPrototype[ITERATOR].call(test) !== test;\n});\n\nif (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};\n\n// `%IteratorPrototype%[@@iterator]()` method\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator\nif ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {\n  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/iterators-core.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar macrotask = __webpack_require__(/*! ../internals/task */ \"./node_modules/core-js/internals/task.js\").set;\nvar IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ \"./node_modules/core-js/internals/engine-is-ios.js\");\nvar IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ \"./node_modules/core-js/internals/engine-is-webos-webkit.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nvar MutationObserver = global.MutationObserver || global.WebKitMutationObserver;\nvar document = global.document;\nvar process = global.process;\nvar Promise = global.Promise;\n// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`\nvar queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');\nvar queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;\n\nvar flush, head, last, notify, toggle, node, promise, then;\n\n// modern engines have queueMicrotask method\nif (!queueMicrotask) {\n  flush = function () {\n    var parent, fn;\n    if (IS_NODE && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (error) {\n        if (head) notify();\n        else last = undefined;\n        throw error;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339\n  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898\n  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {\n    toggle = true;\n    node = document.createTextNode('');\n    new MutationObserver(flush).observe(node, { characterData: true });\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    promise = Promise.resolve(undefined);\n    // workaround of WebKit ~ iOS Safari 10.1 bug\n    promise.constructor = Promise;\n    then = promise.then;\n    notify = function () {\n      then.call(promise, flush);\n    };\n  // Node.js without promises\n  } else if (IS_NODE) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n}\n\nmodule.exports = queueMicrotask || function (fn) {\n  var task = { fn: fn, next: undefined };\n  if (last) last.next = task;\n  if (!head) {\n    head = task;\n    notify();\n  } last = task;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-promise-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global.Promise;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-promise-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol();\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\nvar PromiseCapability = function (C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n};\n\n// `NewPromiseCapability` abstract operation\n// https://tc39.es/ecma262/#sec-newpromisecapability\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\n\n// eslint-disable-next-line es/no-object-assign -- safe\nvar $assign = Object.assign;\n// eslint-disable-next-line es/no-object-defineproperty -- required for testing\nvar defineProperty = Object.defineProperty;\n\n// `Object.assign` method\n// https://tc39.es/ecma262/#sec-object.assign\nmodule.exports = !$assign || fails(function () {\n  // should have correct order of operations (Edge bug)\n  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {\n    enumerable: true,\n    get: function () {\n      defineProperty(this, 'b', {\n        value: 3,\n        enumerable: false\n      });\n    }\n  }), { b: 2 })).b !== 1) return true;\n  // should work with symbols and should have deterministic property order (V8 bug)\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line es/no-symbol -- safe\n  var symbol = Symbol();\n  var alphabet = 'abcdefghijklmnopqrst';\n  A[symbol] = 7;\n  alphabet.split('').forEach(function (chr) { B[chr] = chr; });\n  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`\n  var T = toObject(target);\n  var argumentsLength = arguments.length;\n  var index = 1;\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  var propertyIsEnumerable = propertyIsEnumerableModule.f;\n  while (argumentsLength > index) {\n    var S = IndexedObject(arguments[index++]);\n    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () { /* empty */ };\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n};\n\n// Create object with fake `null` prototype: use ActiveX Object with cleared prototype\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  activeXDocument = null; // avoid memory leak\n  return temp;\n};\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  // https://github.com/zloirock/core-js/issues/475\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n};\n\n// Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\nvar activeXDocument;\nvar NullProtoObject = function () {\n  try {\n    /* global ActiveXObject -- old IE */\n    activeXDocument = document.domain && new ActiveXObject('htmlfile');\n  } catch (error) { /* ignore */ }\n  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();\n  var length = enumBugKeys.length;\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n// `Object.create` method\n// https://tc39.es/ecma262/#sec-object.create\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.es/ecma262/#sec-object.defineproperties\n// eslint-disable-next-line es/no-object-defineproperties -- safe\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.es/ecma262/#sec-object.getownpropertynames\n// eslint-disable-next-line es/no-object-getownpropertynames -- safe\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe\nexports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar ObjectPrototype = Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.getprototypeof\n// eslint-disable-next-line es/no-object-getprototypeof -- safe\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\n// eslint-disable-next-line es/no-object-keys -- safe\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-proto -- safe */\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n// eslint-disable-next-line es/no-object-setprototypeof -- safe\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { error: false, value: exec() };\n  } catch (error) {\n    return { error: true, value: error };\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/perform.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js/internals/new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nmodule.exports = function (target, src, options) {\n  for (var key in src) redefine(target, key, src[key], options);\n  return target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  var state;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) {\n      createNonEnumerableProperty(value, 'name', key);\n    }\n    state = enforceInternalState(value);\n    if (!state.source) {\n      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');\n    }\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (CONSTRUCTOR_NAME) {\n  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);\n  var defineProperty = definePropertyModule.f;\n\n  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {\n    defineProperty(Constructor, SPECIES, {\n      configurable: true,\n      get: function () { return this; }\n    });\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC) {\n  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {\n    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.14.0',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `SpeciesConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-speciesconstructor\nmodule.exports = function (O, defaultConstructor) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js/internals/html.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\nvar IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ \"./node_modules/core-js/internals/engine-is-ios.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nvar location = global.location;\nvar set = global.setImmediate;\nvar clear = global.clearImmediate;\nvar process = global.process;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\n\nvar run = function (id) {\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\n\nvar runner = function (id) {\n  return function () {\n    run(id);\n  };\n};\n\nvar listener = function (event) {\n  run(event.data);\n};\n\nvar post = function (id) {\n  // old engines have not location.origin\n  global.postMessage(id + '', location.protocol + '//' + location.host);\n};\n\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!set || !clear) {\n  set = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func -- spec requirement\n      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clear = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (IS_NODE) {\n    defer = function (id) {\n      process.nextTick(runner(id));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(runner(id));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  // except iOS - https://github.com/zloirock/core-js/issues/624\n  } else if (MessageChannel && !IS_IOS) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = bind(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (\n    global.addEventListener &&\n    typeof postMessage == 'function' &&\n    !global.importScripts &&\n    location && location.protocol !== 'file:' &&\n    !fails(post)\n  ) {\n    defer = post;\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in createElement('script')) {\n    defer = function (id) {\n      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(runner(id), 0);\n    };\n  }\n}\n\nmodule.exports = {\n  set: set,\n  clear: clear\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/task.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.es/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) {\n      WellKnownSymbolsStore[name] = Symbol[name];\n    } else {\n      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n    }\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js/internals/define-iterator.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.es/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.es/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.es/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.es/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return { value: undefined, done: true };\n  }\n  if (kind == 'keys') return { value: index, done: false };\n  if (kind == 'values') return { value: target[index], done: false };\n  return { value: [index, target[index]], done: false };\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.es/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.es/ecma262/#sec-createmappedargumentsobject\nIterators.Arguments = Iterators.Array;\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar assign = __webpack_require__(/*! ../internals/object-assign */ \"./node_modules/core-js/internals/object-assign.js\");\n\n// `Object.assign` method\n// https://tc39.es/ecma262/#sec-object.assign\n// eslint-disable-next-line es/no-object-assign -- required for testing\n$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {\n  assign: assign\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.finally.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.finally.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ \"./node_modules/core-js/internals/native-promise-constructor.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ \"./node_modules/core-js/internals/promise-resolve.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\n// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829\nvar NON_GENERIC = !!NativePromise && fails(function () {\n  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });\n});\n\n// `Promise.prototype.finally` method\n// https://tc39.es/ecma262/#sec-promise.prototype.finally\n$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {\n  'finally': function (onFinally) {\n    var C = speciesConstructor(this, getBuiltIn('Promise'));\n    var isFunction = typeof onFinally == 'function';\n    return this.then(\n      isFunction ? function (x) {\n        return promiseResolve(C, onFinally()).then(function () { return x; });\n      } : onFinally,\n      isFunction ? function (e) {\n        return promiseResolve(C, onFinally()).then(function () { throw e; });\n      } : onFinally\n    );\n  }\n});\n\n// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`\nif (!IS_PURE && typeof NativePromise == 'function') {\n  var method = getBuiltIn('Promise').prototype['finally'];\n  if (NativePromise.prototype['finally'] !== method) {\n    redefine(NativePromise.prototype, 'finally', method, { unsafe: true });\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ \"./node_modules/core-js/internals/native-promise-constructor.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"./node_modules/core-js/internals/redefine-all.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js/internals/set-species.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js/internals/check-correctness-of-iteration.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\nvar task = __webpack_require__(/*! ../internals/task */ \"./node_modules/core-js/internals/task.js\").set;\nvar microtask = __webpack_require__(/*! ../internals/microtask */ \"./node_modules/core-js/internals/microtask.js\");\nvar promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ \"./node_modules/core-js/internals/promise-resolve.js\");\nvar hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ \"./node_modules/core-js/internals/host-report-errors.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js/internals/perform.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_BROWSER = __webpack_require__(/*! ../internals/engine-is-browser */ \"./node_modules/core-js/internals/engine-is-browser.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar PROMISE = 'Promise';\nvar getInternalState = InternalStateModule.get;\nvar setInternalState = InternalStateModule.set;\nvar getInternalPromiseState = InternalStateModule.getterFor(PROMISE);\nvar NativePromisePrototype = NativePromise && NativePromise.prototype;\nvar PromiseConstructor = NativePromise;\nvar PromiseConstructorPrototype = NativePromisePrototype;\nvar TypeError = global.TypeError;\nvar document = global.document;\nvar process = global.process;\nvar newPromiseCapability = newPromiseCapabilityModule.f;\nvar newGenericPromiseCapability = newPromiseCapability;\nvar DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);\nvar NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';\nvar UNHANDLED_REJECTION = 'unhandledrejection';\nvar REJECTION_HANDLED = 'rejectionhandled';\nvar PENDING = 0;\nvar FULFILLED = 1;\nvar REJECTED = 2;\nvar HANDLED = 1;\nvar UNHANDLED = 2;\nvar SUBCLASSING = false;\nvar Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;\n\nvar FORCED = isForced(PROMISE, function () {\n  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);\n  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n  // We can't detect it synchronously, so just check versions\n  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;\n  // We need Promise#finally in the pure version for preventing prototype pollution\n  if (IS_PURE && !PromiseConstructorPrototype['finally']) return true;\n  // We can't use @@species feature detection in V8 since it causes\n  // deoptimization and performance degradation\n  // https://github.com/zloirock/core-js/issues/679\n  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;\n  // Detect correctness of subclassing with @@species support\n  var promise = new PromiseConstructor(function (resolve) { resolve(1); });\n  var FakePromise = function (exec) {\n    exec(function () { /* empty */ }, function () { /* empty */ });\n  };\n  var constructor = promise.constructor = {};\n  constructor[SPECIES] = FakePromise;\n  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;\n  if (!SUBCLASSING) return true;\n  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;\n});\n\nvar INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {\n  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });\n});\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\n\nvar notify = function (state, isReject) {\n  if (state.notified) return;\n  state.notified = true;\n  var chain = state.reactions;\n  microtask(function () {\n    var value = state.value;\n    var ok = state.state == FULFILLED;\n    var index = 0;\n    // variable length - can't use forEach\n    while (chain.length > index) {\n      var reaction = chain[index++];\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (state.rejection === UNHANDLED) onHandleUnhandled(state);\n            state.rejection = HANDLED;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // can throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (error) {\n        if (domain && !exited) domain.exit();\n        reject(error);\n      }\n    }\n    state.reactions = [];\n    state.notified = false;\n    if (isReject && !state.rejection) onUnhandled(state);\n  });\n};\n\nvar dispatchEvent = function (name, promise, reason) {\n  var event, handler;\n  if (DISPATCH_EVENT) {\n    event = document.createEvent('Event');\n    event.promise = promise;\n    event.reason = reason;\n    event.initEvent(name, false, true);\n    global.dispatchEvent(event);\n  } else event = { promise: promise, reason: reason };\n  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);\n  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);\n};\n\nvar onUnhandled = function (state) {\n  task.call(global, function () {\n    var promise = state.facade;\n    var value = state.value;\n    var IS_UNHANDLED = isUnhandled(state);\n    var result;\n    if (IS_UNHANDLED) {\n      result = perform(function () {\n        if (IS_NODE) {\n          process.emit('unhandledRejection', value, promise);\n        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;\n      if (result.error) throw result.value;\n    }\n  });\n};\n\nvar isUnhandled = function (state) {\n  return state.rejection !== HANDLED && !state.parent;\n};\n\nvar onHandleUnhandled = function (state) {\n  task.call(global, function () {\n    var promise = state.facade;\n    if (IS_NODE) {\n      process.emit('rejectionHandled', promise);\n    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);\n  });\n};\n\nvar bind = function (fn, state, unwrap) {\n  return function (value) {\n    fn(state, value, unwrap);\n  };\n};\n\nvar internalReject = function (state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  state.value = value;\n  state.state = REJECTED;\n  notify(state, true);\n};\n\nvar internalResolve = function (state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  try {\n    if (state.facade === value) throw TypeError(\"Promise can't be resolved itself\");\n    var then = isThenable(value);\n    if (then) {\n      microtask(function () {\n        var wrapper = { done: false };\n        try {\n          then.call(value,\n            bind(internalResolve, wrapper, state),\n            bind(internalReject, wrapper, state)\n          );\n        } catch (error) {\n          internalReject(wrapper, error, state);\n        }\n      });\n    } else {\n      state.value = value;\n      state.state = FULFILLED;\n      notify(state, false);\n    }\n  } catch (error) {\n    internalReject({ done: false }, error, state);\n  }\n};\n\n// constructor polyfill\nif (FORCED) {\n  // 25.4.3.1 Promise(executor)\n  PromiseConstructor = function Promise(executor) {\n    anInstance(this, PromiseConstructor, PROMISE);\n    aFunction(executor);\n    Internal.call(this);\n    var state = getInternalState(this);\n    try {\n      executor(bind(internalResolve, state), bind(internalReject, state));\n    } catch (error) {\n      internalReject(state, error);\n    }\n  };\n  PromiseConstructorPrototype = PromiseConstructor.prototype;\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  Internal = function Promise(executor) {\n    setInternalState(this, {\n      type: PROMISE,\n      done: false,\n      notified: false,\n      parent: false,\n      reactions: [],\n      rejection: false,\n      state: PENDING,\n      value: undefined\n    });\n  };\n  Internal.prototype = redefineAll(PromiseConstructorPrototype, {\n    // `Promise.prototype.then` method\n    // https://tc39.es/ecma262/#sec-promise.prototype.then\n    then: function then(onFulfilled, onRejected) {\n      var state = getInternalPromiseState(this);\n      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = IS_NODE ? process.domain : undefined;\n      state.parent = true;\n      state.reactions.push(reaction);\n      if (state.state != PENDING) notify(state, false);\n      return reaction.promise;\n    },\n    // `Promise.prototype.catch` method\n    // https://tc39.es/ecma262/#sec-promise.prototype.catch\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    var state = getInternalState(promise);\n    this.promise = promise;\n    this.resolve = bind(internalResolve, state);\n    this.reject = bind(internalReject, state);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === PromiseConstructor || C === PromiseWrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n\n  if (!IS_PURE && typeof NativePromise == 'function' && NativePromisePrototype !== Object.prototype) {\n    nativeThen = NativePromisePrototype.then;\n\n    if (!SUBCLASSING) {\n      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs\n      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {\n        var that = this;\n        return new PromiseConstructor(function (resolve, reject) {\n          nativeThen.call(that, resolve, reject);\n        }).then(onFulfilled, onRejected);\n      // https://github.com/zloirock/core-js/issues/640\n      }, { unsafe: true });\n\n      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`\n      redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], { unsafe: true });\n    }\n\n    // make `.constructor === Promise` work for native promise-based APIs\n    try {\n      delete NativePromisePrototype.constructor;\n    } catch (error) { /* empty */ }\n\n    // make `instanceof Promise` work for native promise-based APIs\n    if (setPrototypeOf) {\n      setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);\n    }\n  }\n}\n\n$({ global: true, wrap: true, forced: FORCED }, {\n  Promise: PromiseConstructor\n});\n\nsetToStringTag(PromiseConstructor, PROMISE, false, true);\nsetSpecies(PROMISE);\n\nPromiseWrapper = getBuiltIn(PROMISE);\n\n// statics\n$({ target: PROMISE, stat: true, forced: FORCED }, {\n  // `Promise.reject` method\n  // https://tc39.es/ecma262/#sec-promise.reject\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    capability.reject.call(undefined, r);\n    return capability.promise;\n  }\n});\n\n$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {\n  // `Promise.resolve` method\n  // https://tc39.es/ecma262/#sec-promise.resolve\n  resolve: function resolve(x) {\n    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);\n  }\n});\n\n$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {\n  // `Promise.all` method\n  // https://tc39.es/ecma262/#sec-promise.all\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aFunction(C.resolve);\n      var values = [];\n      var counter = 0;\n      var remaining = 1;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        $promiseResolve.call(C, promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  },\n  // `Promise.race` method\n  // https://tc39.es/ecma262/#sec-promise.race\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aFunction(C.resolve);\n      iterate(iterable, function (promise) {\n        $promiseResolve.call(C, promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "./node_modules/node-libs-browser/mock/process.js":
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.nextTick = function nextTick(fn) {\n    var args = Array.prototype.slice.call(arguments);\n    args.shift();\n    setTimeout(function () {\n        fn.apply(null, args);\n    }, 0);\n};\n\nexports.platform = exports.arch = \nexports.execPath = exports.title = 'browser';\nexports.pid = 1;\nexports.browser = true;\nexports.env = {};\nexports.argv = [];\n\nexports.binding = function (name) {\n\tthrow new Error('No such module. (Possibly not yet loaded)')\n};\n\n(function () {\n    var cwd = '/';\n    var path;\n    exports.cwd = function () { return cwd };\n    exports.chdir = function (dir) {\n        if (!path) path = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n        cwd = path.resolve(dir, cwd);\n    };\n})();\n\nexports.exit = exports.kill = \nexports.umask = exports.dlopen = \nexports.uptime = exports.memoryUsage = \nexports.uvCounters = function() {};\nexports.features = {};\n\n\n//# sourceURL=webpack:///./node_modules/node-libs-browser/mock/process.js?");

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,\n// backported and transplited with Babel, with backwards-compat fixes\n\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// resolves . and .. elements in a path array with directory names there\n// must be no slashes, empty elements, or device names (c:\\) in the array\n// (so also no leading and trailing slashes - it does not distinguish\n// relative and absolute paths)\nfunction normalizeArray(parts, allowAboveRoot) {\n  // if the path tries to go above the root, `up` ends up > 0\n  var up = 0;\n  for (var i = parts.length - 1; i >= 0; i--) {\n    var last = parts[i];\n    if (last === '.') {\n      parts.splice(i, 1);\n    } else if (last === '..') {\n      parts.splice(i, 1);\n      up++;\n    } else if (up) {\n      parts.splice(i, 1);\n      up--;\n    }\n  }\n\n  // if the path is allowed to go above the root, restore leading ..s\n  if (allowAboveRoot) {\n    for (; up--; up) {\n      parts.unshift('..');\n    }\n  }\n\n  return parts;\n}\n\n// path.resolve([from ...], to)\n// posix version\nexports.resolve = function() {\n  var resolvedPath = '',\n      resolvedAbsolute = false;\n\n  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\n    var path = (i >= 0) ? arguments[i] : process.cwd();\n\n    // Skip empty and invalid entries\n    if (typeof path !== 'string') {\n      throw new TypeError('Arguments to path.resolve must be strings');\n    } else if (!path) {\n      continue;\n    }\n\n    resolvedPath = path + '/' + resolvedPath;\n    resolvedAbsolute = path.charAt(0) === '/';\n  }\n\n  // At this point the path should be resolved to a full absolute path, but\n  // handle relative paths to be safe (might happen when process.cwd() fails)\n\n  // Normalize the path\n  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {\n    return !!p;\n  }), !resolvedAbsolute).join('/');\n\n  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';\n};\n\n// path.normalize(path)\n// posix version\nexports.normalize = function(path) {\n  var isAbsolute = exports.isAbsolute(path),\n      trailingSlash = substr(path, -1) === '/';\n\n  // Normalize the path\n  path = normalizeArray(filter(path.split('/'), function(p) {\n    return !!p;\n  }), !isAbsolute).join('/');\n\n  if (!path && !isAbsolute) {\n    path = '.';\n  }\n  if (path && trailingSlash) {\n    path += '/';\n  }\n\n  return (isAbsolute ? '/' : '') + path;\n};\n\n// posix version\nexports.isAbsolute = function(path) {\n  return path.charAt(0) === '/';\n};\n\n// posix version\nexports.join = function() {\n  var paths = Array.prototype.slice.call(arguments, 0);\n  return exports.normalize(filter(paths, function(p, index) {\n    if (typeof p !== 'string') {\n      throw new TypeError('Arguments to path.join must be strings');\n    }\n    return p;\n  }).join('/'));\n};\n\n\n// path.relative(from, to)\n// posix version\nexports.relative = function(from, to) {\n  from = exports.resolve(from).substr(1);\n  to = exports.resolve(to).substr(1);\n\n  function trim(arr) {\n    var start = 0;\n    for (; start < arr.length; start++) {\n      if (arr[start] !== '') break;\n    }\n\n    var end = arr.length - 1;\n    for (; end >= 0; end--) {\n      if (arr[end] !== '') break;\n    }\n\n    if (start > end) return [];\n    return arr.slice(start, end - start + 1);\n  }\n\n  var fromParts = trim(from.split('/'));\n  var toParts = trim(to.split('/'));\n\n  var length = Math.min(fromParts.length, toParts.length);\n  var samePartsLength = length;\n  for (var i = 0; i < length; i++) {\n    if (fromParts[i] !== toParts[i]) {\n      samePartsLength = i;\n      break;\n    }\n  }\n\n  var outputParts = [];\n  for (var i = samePartsLength; i < fromParts.length; i++) {\n    outputParts.push('..');\n  }\n\n  outputParts = outputParts.concat(toParts.slice(samePartsLength));\n\n  return outputParts.join('/');\n};\n\nexports.sep = '/';\nexports.delimiter = ':';\n\nexports.dirname = function (path) {\n  if (typeof path !== 'string') path = path + '';\n  if (path.length === 0) return '.';\n  var code = path.charCodeAt(0);\n  var hasRoot = code === 47 /*/*/;\n  var end = -1;\n  var matchedSlash = true;\n  for (var i = path.length - 1; i >= 1; --i) {\n    code = path.charCodeAt(i);\n    if (code === 47 /*/*/) {\n        if (!matchedSlash) {\n          end = i;\n          break;\n        }\n      } else {\n      // We saw the first non-path separator\n      matchedSlash = false;\n    }\n  }\n\n  if (end === -1) return hasRoot ? '/' : '.';\n  if (hasRoot && end === 1) {\n    // return '//';\n    // Backwards-compat fix:\n    return '/';\n  }\n  return path.slice(0, end);\n};\n\nfunction basename(path) {\n  if (typeof path !== 'string') path = path + '';\n\n  var start = 0;\n  var end = -1;\n  var matchedSlash = true;\n  var i;\n\n  for (i = path.length - 1; i >= 0; --i) {\n    if (path.charCodeAt(i) === 47 /*/*/) {\n        // If we reached a path separator that was not part of a set of path\n        // separators at the end of the string, stop now\n        if (!matchedSlash) {\n          start = i + 1;\n          break;\n        }\n      } else if (end === -1) {\n      // We saw the first non-path separator, mark this as the end of our\n      // path component\n      matchedSlash = false;\n      end = i + 1;\n    }\n  }\n\n  if (end === -1) return '';\n  return path.slice(start, end);\n}\n\n// Uses a mixed approach for backwards-compatibility, as ext behavior changed\n// in new Node.js versions, so only basename() above is backported here\nexports.basename = function (path, ext) {\n  var f = basename(path);\n  if (ext && f.substr(-1 * ext.length) === ext) {\n    f = f.substr(0, f.length - ext.length);\n  }\n  return f;\n};\n\nexports.extname = function (path) {\n  if (typeof path !== 'string') path = path + '';\n  var startDot = -1;\n  var startPart = 0;\n  var end = -1;\n  var matchedSlash = true;\n  // Track the state of characters (if any) we see before our first dot and\n  // after any path separator we find\n  var preDotState = 0;\n  for (var i = path.length - 1; i >= 0; --i) {\n    var code = path.charCodeAt(i);\n    if (code === 47 /*/*/) {\n        // If we reached a path separator that was not part of a set of path\n        // separators at the end of the string, stop now\n        if (!matchedSlash) {\n          startPart = i + 1;\n          break;\n        }\n        continue;\n      }\n    if (end === -1) {\n      // We saw the first non-path separator, mark this as the end of our\n      // extension\n      matchedSlash = false;\n      end = i + 1;\n    }\n    if (code === 46 /*.*/) {\n        // If this is our first dot, mark it as the start of our extension\n        if (startDot === -1)\n          startDot = i;\n        else if (preDotState !== 1)\n          preDotState = 1;\n    } else if (startDot !== -1) {\n      // We saw a non-dot and non-path separator before our dot, so we should\n      // have a good chance at having a non-empty extension\n      preDotState = -1;\n    }\n  }\n\n  if (startDot === -1 || end === -1 ||\n      // We saw a non-dot character immediately before the dot\n      preDotState === 0 ||\n      // The (right-most) trimmed path component is exactly '..'\n      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {\n    return '';\n  }\n  return path.slice(startDot, end);\n};\n\nfunction filter (xs, f) {\n    if (xs.filter) return xs.filter(f);\n    var res = [];\n    for (var i = 0; i < xs.length; i++) {\n        if (f(xs[i], i, xs)) res.push(xs[i]);\n    }\n    return res;\n}\n\n// String.prototype.substr - negative index don't work in IE8\nvar substr = 'ab'.substr(-1) === 'b'\n    ? function (str, start, len) { return str.substr(start, len) }\n    : function (str, start, len) {\n        if (start < 0) start = str.length + start;\n        return str.substr(start, len);\n    }\n;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ \"./node_modules/node-libs-browser/mock/process.js\")))\n\n//# sourceURL=webpack:///./node_modules/path-browserify/index.js?");

/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/*!\n * Vue.js v2.6.14\n * (c) 2014-2021 Evan You\n * Released under the MIT License.\n */\n/*  */\n\nvar emptyObject = Object.freeze({});\n\n// These helpers produce better VM code in JS engines due to their\n// explicitness and function inlining.\nfunction isUndef (v) {\n  return v === undefined || v === null\n}\n\nfunction isDef (v) {\n  return v !== undefined && v !== null\n}\n\nfunction isTrue (v) {\n  return v === true\n}\n\nfunction isFalse (v) {\n  return v === false\n}\n\n/**\n * Check if value is primitive.\n */\nfunction isPrimitive (value) {\n  return (\n    typeof value === 'string' ||\n    typeof value === 'number' ||\n    // $flow-disable-line\n    typeof value === 'symbol' ||\n    typeof value === 'boolean'\n  )\n}\n\n/**\n * Quick object check - this is primarily used to tell\n * Objects from primitive values when we know the value\n * is a JSON-compliant type.\n */\nfunction isObject (obj) {\n  return obj !== null && typeof obj === 'object'\n}\n\n/**\n * Get the raw type string of a value, e.g., [object Object].\n */\nvar _toString = Object.prototype.toString;\n\nfunction toRawType (value) {\n  return _toString.call(value).slice(8, -1)\n}\n\n/**\n * Strict object type check. Only returns true\n * for plain JavaScript objects.\n */\nfunction isPlainObject (obj) {\n  return _toString.call(obj) === '[object Object]'\n}\n\nfunction isRegExp (v) {\n  return _toString.call(v) === '[object RegExp]'\n}\n\n/**\n * Check if val is a valid array index.\n */\nfunction isValidArrayIndex (val) {\n  var n = parseFloat(String(val));\n  return n >= 0 && Math.floor(n) === n && isFinite(val)\n}\n\nfunction isPromise (val) {\n  return (\n    isDef(val) &&\n    typeof val.then === 'function' &&\n    typeof val.catch === 'function'\n  )\n}\n\n/**\n * Convert a value to a string that is actually rendered.\n */\nfunction toString (val) {\n  return val == null\n    ? ''\n    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)\n      ? JSON.stringify(val, null, 2)\n      : String(val)\n}\n\n/**\n * Convert an input value to a number for persistence.\n * If the conversion fails, return original string.\n */\nfunction toNumber (val) {\n  var n = parseFloat(val);\n  return isNaN(n) ? val : n\n}\n\n/**\n * Make a map and return a function for checking if a key\n * is in that map.\n */\nfunction makeMap (\n  str,\n  expectsLowerCase\n) {\n  var map = Object.create(null);\n  var list = str.split(',');\n  for (var i = 0; i < list.length; i++) {\n    map[list[i]] = true;\n  }\n  return expectsLowerCase\n    ? function (val) { return map[val.toLowerCase()]; }\n    : function (val) { return map[val]; }\n}\n\n/**\n * Check if a tag is a built-in tag.\n */\nvar isBuiltInTag = makeMap('slot,component', true);\n\n/**\n * Check if an attribute is a reserved attribute.\n */\nvar isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');\n\n/**\n * Remove an item from an array.\n */\nfunction remove (arr, item) {\n  if (arr.length) {\n    var index = arr.indexOf(item);\n    if (index > -1) {\n      return arr.splice(index, 1)\n    }\n  }\n}\n\n/**\n * Check whether an object has the property.\n */\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nfunction hasOwn (obj, key) {\n  return hasOwnProperty.call(obj, key)\n}\n\n/**\n * Create a cached version of a pure function.\n */\nfunction cached (fn) {\n  var cache = Object.create(null);\n  return (function cachedFn (str) {\n    var hit = cache[str];\n    return hit || (cache[str] = fn(str))\n  })\n}\n\n/**\n * Camelize a hyphen-delimited string.\n */\nvar camelizeRE = /-(\\w)/g;\nvar camelize = cached(function (str) {\n  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })\n});\n\n/**\n * Capitalize a string.\n */\nvar capitalize = cached(function (str) {\n  return str.charAt(0).toUpperCase() + str.slice(1)\n});\n\n/**\n * Hyphenate a camelCase string.\n */\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = cached(function (str) {\n  return str.replace(hyphenateRE, '-$1').toLowerCase()\n});\n\n/**\n * Simple bind polyfill for environments that do not support it,\n * e.g., PhantomJS 1.x. Technically, we don't need this anymore\n * since native bind is now performant enough in most browsers.\n * But removing it would mean breaking code that was able to run in\n * PhantomJS 1.x, so this must be kept for backward compatibility.\n */\n\n/* istanbul ignore next */\nfunction polyfillBind (fn, ctx) {\n  function boundFn (a) {\n    var l = arguments.length;\n    return l\n      ? l > 1\n        ? fn.apply(ctx, arguments)\n        : fn.call(ctx, a)\n      : fn.call(ctx)\n  }\n\n  boundFn._length = fn.length;\n  return boundFn\n}\n\nfunction nativeBind (fn, ctx) {\n  return fn.bind(ctx)\n}\n\nvar bind = Function.prototype.bind\n  ? nativeBind\n  : polyfillBind;\n\n/**\n * Convert an Array-like object to a real Array.\n */\nfunction toArray (list, start) {\n  start = start || 0;\n  var i = list.length - start;\n  var ret = new Array(i);\n  while (i--) {\n    ret[i] = list[i + start];\n  }\n  return ret\n}\n\n/**\n * Mix properties into target object.\n */\nfunction extend (to, _from) {\n  for (var key in _from) {\n    to[key] = _from[key];\n  }\n  return to\n}\n\n/**\n * Merge an Array of Objects into a single Object.\n */\nfunction toObject (arr) {\n  var res = {};\n  for (var i = 0; i < arr.length; i++) {\n    if (arr[i]) {\n      extend(res, arr[i]);\n    }\n  }\n  return res\n}\n\n/* eslint-disable no-unused-vars */\n\n/**\n * Perform no operation.\n * Stubbing args to make Flow happy without leaving useless transpiled code\n * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).\n */\nfunction noop (a, b, c) {}\n\n/**\n * Always return false.\n */\nvar no = function (a, b, c) { return false; };\n\n/* eslint-enable no-unused-vars */\n\n/**\n * Return the same value.\n */\nvar identity = function (_) { return _; };\n\n/**\n * Check if two values are loosely equal - that is,\n * if they are plain objects, do they have the same shape?\n */\nfunction looseEqual (a, b) {\n  if (a === b) { return true }\n  var isObjectA = isObject(a);\n  var isObjectB = isObject(b);\n  if (isObjectA && isObjectB) {\n    try {\n      var isArrayA = Array.isArray(a);\n      var isArrayB = Array.isArray(b);\n      if (isArrayA && isArrayB) {\n        return a.length === b.length && a.every(function (e, i) {\n          return looseEqual(e, b[i])\n        })\n      } else if (a instanceof Date && b instanceof Date) {\n        return a.getTime() === b.getTime()\n      } else if (!isArrayA && !isArrayB) {\n        var keysA = Object.keys(a);\n        var keysB = Object.keys(b);\n        return keysA.length === keysB.length && keysA.every(function (key) {\n          return looseEqual(a[key], b[key])\n        })\n      } else {\n        /* istanbul ignore next */\n        return false\n      }\n    } catch (e) {\n      /* istanbul ignore next */\n      return false\n    }\n  } else if (!isObjectA && !isObjectB) {\n    return String(a) === String(b)\n  } else {\n    return false\n  }\n}\n\n/**\n * Return the first index at which a loosely equal value can be\n * found in the array (if value is a plain object, the array must\n * contain an object of the same shape), or -1 if it is not present.\n */\nfunction looseIndexOf (arr, val) {\n  for (var i = 0; i < arr.length; i++) {\n    if (looseEqual(arr[i], val)) { return i }\n  }\n  return -1\n}\n\n/**\n * Ensure a function is called only once.\n */\nfunction once (fn) {\n  var called = false;\n  return function () {\n    if (!called) {\n      called = true;\n      fn.apply(this, arguments);\n    }\n  }\n}\n\nvar SSR_ATTR = 'data-server-rendered';\n\nvar ASSET_TYPES = [\n  'component',\n  'directive',\n  'filter'\n];\n\nvar LIFECYCLE_HOOKS = [\n  'beforeCreate',\n  'created',\n  'beforeMount',\n  'mounted',\n  'beforeUpdate',\n  'updated',\n  'beforeDestroy',\n  'destroyed',\n  'activated',\n  'deactivated',\n  'errorCaptured',\n  'serverPrefetch'\n];\n\n/*  */\n\n\n\nvar config = ({\n  /**\n   * Option merge strategies (used in core/util/options)\n   */\n  // $flow-disable-line\n  optionMergeStrategies: Object.create(null),\n\n  /**\n   * Whether to suppress warnings.\n   */\n  silent: false,\n\n  /**\n   * Show production mode tip message on boot?\n   */\n  productionTip: \"development\" !== 'production',\n\n  /**\n   * Whether to enable devtools\n   */\n  devtools: \"development\" !== 'production',\n\n  /**\n   * Whether to record perf\n   */\n  performance: false,\n\n  /**\n   * Error handler for watcher errors\n   */\n  errorHandler: null,\n\n  /**\n   * Warn handler for watcher warns\n   */\n  warnHandler: null,\n\n  /**\n   * Ignore certain custom elements\n   */\n  ignoredElements: [],\n\n  /**\n   * Custom user key aliases for v-on\n   */\n  // $flow-disable-line\n  keyCodes: Object.create(null),\n\n  /**\n   * Check if a tag is reserved so that it cannot be registered as a\n   * component. This is platform-dependent and may be overwritten.\n   */\n  isReservedTag: no,\n\n  /**\n   * Check if an attribute is reserved so that it cannot be used as a component\n   * prop. This is platform-dependent and may be overwritten.\n   */\n  isReservedAttr: no,\n\n  /**\n   * Check if a tag is an unknown element.\n   * Platform-dependent.\n   */\n  isUnknownElement: no,\n\n  /**\n   * Get the namespace of an element\n   */\n  getTagNamespace: noop,\n\n  /**\n   * Parse the real tag name for the specific platform.\n   */\n  parsePlatformTagName: identity,\n\n  /**\n   * Check if an attribute must be bound using property, e.g. value\n   * Platform-dependent.\n   */\n  mustUseProp: no,\n\n  /**\n   * Perform updates asynchronously. Intended to be used by Vue Test Utils\n   * This will significantly reduce performance if set to false.\n   */\n  async: true,\n\n  /**\n   * Exposed for legacy reasons\n   */\n  _lifecycleHooks: LIFECYCLE_HOOKS\n});\n\n/*  */\n\n/**\n * unicode letters used for parsing html tags, component names and property paths.\n * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname\n * skipping \\u10000-\\uEFFFF due to it freezing up PhantomJS\n */\nvar unicodeRegExp = /a-zA-Z\\u00B7\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u203F-\\u2040\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD/;\n\n/**\n * Check if a string starts with $ or _\n */\nfunction isReserved (str) {\n  var c = (str + '').charCodeAt(0);\n  return c === 0x24 || c === 0x5F\n}\n\n/**\n * Define a property.\n */\nfunction def (obj, key, val, enumerable) {\n  Object.defineProperty(obj, key, {\n    value: val,\n    enumerable: !!enumerable,\n    writable: true,\n    configurable: true\n  });\n}\n\n/**\n * Parse simple path.\n */\nvar bailRE = new RegExp((\"[^\" + (unicodeRegExp.source) + \".$_\\\\d]\"));\nfunction parsePath (path) {\n  if (bailRE.test(path)) {\n    return\n  }\n  var segments = path.split('.');\n  return function (obj) {\n    for (var i = 0; i < segments.length; i++) {\n      if (!obj) { return }\n      obj = obj[segments[i]];\n    }\n    return obj\n  }\n}\n\n/*  */\n\n// can we use __proto__?\nvar hasProto = '__proto__' in {};\n\n// Browser environment sniffing\nvar inBrowser = typeof window !== 'undefined';\nvar inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;\nvar weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();\nvar UA = inBrowser && window.navigator.userAgent.toLowerCase();\nvar isIE = UA && /msie|trident/.test(UA);\nvar isIE9 = UA && UA.indexOf('msie 9.0') > 0;\nvar isEdge = UA && UA.indexOf('edge/') > 0;\nvar isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');\nvar isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');\nvar isChrome = UA && /chrome\\/\\d+/.test(UA) && !isEdge;\nvar isPhantomJS = UA && /phantomjs/.test(UA);\nvar isFF = UA && UA.match(/firefox\\/(\\d+)/);\n\n// Firefox has a \"watch\" function on Object.prototype...\nvar nativeWatch = ({}).watch;\n\nvar supportsPassive = false;\nif (inBrowser) {\n  try {\n    var opts = {};\n    Object.defineProperty(opts, 'passive', ({\n      get: function get () {\n        /* istanbul ignore next */\n        supportsPassive = true;\n      }\n    })); // https://github.com/facebook/flow/issues/285\n    window.addEventListener('test-passive', null, opts);\n  } catch (e) {}\n}\n\n// this needs to be lazy-evaled because vue may be required before\n// vue-server-renderer can set VUE_ENV\nvar _isServer;\nvar isServerRendering = function () {\n  if (_isServer === undefined) {\n    /* istanbul ignore if */\n    if (!inBrowser && !inWeex && typeof global !== 'undefined') {\n      // detect presence of vue-server-renderer and avoid\n      // Webpack shimming the process\n      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';\n    } else {\n      _isServer = false;\n    }\n  }\n  return _isServer\n};\n\n// detect devtools\nvar devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;\n\n/* istanbul ignore next */\nfunction isNative (Ctor) {\n  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())\n}\n\nvar hasSymbol =\n  typeof Symbol !== 'undefined' && isNative(Symbol) &&\n  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);\n\nvar _Set;\n/* istanbul ignore if */ // $flow-disable-line\nif (typeof Set !== 'undefined' && isNative(Set)) {\n  // use native Set when available.\n  _Set = Set;\n} else {\n  // a non-standard Set polyfill that only works with primitive keys.\n  _Set = /*@__PURE__*/(function () {\n    function Set () {\n      this.set = Object.create(null);\n    }\n    Set.prototype.has = function has (key) {\n      return this.set[key] === true\n    };\n    Set.prototype.add = function add (key) {\n      this.set[key] = true;\n    };\n    Set.prototype.clear = function clear () {\n      this.set = Object.create(null);\n    };\n\n    return Set;\n  }());\n}\n\n/*  */\n\nvar warn = noop;\nvar tip = noop;\nvar generateComponentTrace = (noop); // work around flow check\nvar formatComponentName = (noop);\n\nif (true) {\n  var hasConsole = typeof console !== 'undefined';\n  var classifyRE = /(?:^|[-_])(\\w)/g;\n  var classify = function (str) { return str\n    .replace(classifyRE, function (c) { return c.toUpperCase(); })\n    .replace(/[-_]/g, ''); };\n\n  warn = function (msg, vm) {\n    var trace = vm ? generateComponentTrace(vm) : '';\n\n    if (config.warnHandler) {\n      config.warnHandler.call(null, msg, vm, trace);\n    } else if (hasConsole && (!config.silent)) {\n      console.error((\"[Vue warn]: \" + msg + trace));\n    }\n  };\n\n  tip = function (msg, vm) {\n    if (hasConsole && (!config.silent)) {\n      console.warn(\"[Vue tip]: \" + msg + (\n        vm ? generateComponentTrace(vm) : ''\n      ));\n    }\n  };\n\n  formatComponentName = function (vm, includeFile) {\n    if (vm.$root === vm) {\n      return '<Root>'\n    }\n    var options = typeof vm === 'function' && vm.cid != null\n      ? vm.options\n      : vm._isVue\n        ? vm.$options || vm.constructor.options\n        : vm;\n    var name = options.name || options._componentTag;\n    var file = options.__file;\n    if (!name && file) {\n      var match = file.match(/([^/\\\\]+)\\.vue$/);\n      name = match && match[1];\n    }\n\n    return (\n      (name ? (\"<\" + (classify(name)) + \">\") : \"<Anonymous>\") +\n      (file && includeFile !== false ? (\" at \" + file) : '')\n    )\n  };\n\n  var repeat = function (str, n) {\n    var res = '';\n    while (n) {\n      if (n % 2 === 1) { res += str; }\n      if (n > 1) { str += str; }\n      n >>= 1;\n    }\n    return res\n  };\n\n  generateComponentTrace = function (vm) {\n    if (vm._isVue && vm.$parent) {\n      var tree = [];\n      var currentRecursiveSequence = 0;\n      while (vm) {\n        if (tree.length > 0) {\n          var last = tree[tree.length - 1];\n          if (last.constructor === vm.constructor) {\n            currentRecursiveSequence++;\n            vm = vm.$parent;\n            continue\n          } else if (currentRecursiveSequence > 0) {\n            tree[tree.length - 1] = [last, currentRecursiveSequence];\n            currentRecursiveSequence = 0;\n          }\n        }\n        tree.push(vm);\n        vm = vm.$parent;\n      }\n      return '\\n\\nfound in\\n\\n' + tree\n        .map(function (vm, i) { return (\"\" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)\n            ? ((formatComponentName(vm[0])) + \"... (\" + (vm[1]) + \" recursive calls)\")\n            : formatComponentName(vm))); })\n        .join('\\n')\n    } else {\n      return (\"\\n\\n(found in \" + (formatComponentName(vm)) + \")\")\n    }\n  };\n}\n\n/*  */\n\nvar uid = 0;\n\n/**\n * A dep is an observable that can have multiple\n * directives subscribing to it.\n */\nvar Dep = function Dep () {\n  this.id = uid++;\n  this.subs = [];\n};\n\nDep.prototype.addSub = function addSub (sub) {\n  this.subs.push(sub);\n};\n\nDep.prototype.removeSub = function removeSub (sub) {\n  remove(this.subs, sub);\n};\n\nDep.prototype.depend = function depend () {\n  if (Dep.target) {\n    Dep.target.addDep(this);\n  }\n};\n\nDep.prototype.notify = function notify () {\n  // stabilize the subscriber list first\n  var subs = this.subs.slice();\n  if ( true && !config.async) {\n    // subs aren't sorted in scheduler if not running async\n    // we need to sort them now to make sure they fire in correct\n    // order\n    subs.sort(function (a, b) { return a.id - b.id; });\n  }\n  for (var i = 0, l = subs.length; i < l; i++) {\n    subs[i].update();\n  }\n};\n\n// The current target watcher being evaluated.\n// This is globally unique because only one watcher\n// can be evaluated at a time.\nDep.target = null;\nvar targetStack = [];\n\nfunction pushTarget (target) {\n  targetStack.push(target);\n  Dep.target = target;\n}\n\nfunction popTarget () {\n  targetStack.pop();\n  Dep.target = targetStack[targetStack.length - 1];\n}\n\n/*  */\n\nvar VNode = function VNode (\n  tag,\n  data,\n  children,\n  text,\n  elm,\n  context,\n  componentOptions,\n  asyncFactory\n) {\n  this.tag = tag;\n  this.data = data;\n  this.children = children;\n  this.text = text;\n  this.elm = elm;\n  this.ns = undefined;\n  this.context = context;\n  this.fnContext = undefined;\n  this.fnOptions = undefined;\n  this.fnScopeId = undefined;\n  this.key = data && data.key;\n  this.componentOptions = componentOptions;\n  this.componentInstance = undefined;\n  this.parent = undefined;\n  this.raw = false;\n  this.isStatic = false;\n  this.isRootInsert = true;\n  this.isComment = false;\n  this.isCloned = false;\n  this.isOnce = false;\n  this.asyncFactory = asyncFactory;\n  this.asyncMeta = undefined;\n  this.isAsyncPlaceholder = false;\n};\n\nvar prototypeAccessors = { child: { configurable: true } };\n\n// DEPRECATED: alias for componentInstance for backwards compat.\n/* istanbul ignore next */\nprototypeAccessors.child.get = function () {\n  return this.componentInstance\n};\n\nObject.defineProperties( VNode.prototype, prototypeAccessors );\n\nvar createEmptyVNode = function (text) {\n  if ( text === void 0 ) text = '';\n\n  var node = new VNode();\n  node.text = text;\n  node.isComment = true;\n  return node\n};\n\nfunction createTextVNode (val) {\n  return new VNode(undefined, undefined, undefined, String(val))\n}\n\n// optimized shallow clone\n// used for static nodes and slot nodes because they may be reused across\n// multiple renders, cloning them avoids errors when DOM manipulations rely\n// on their elm reference.\nfunction cloneVNode (vnode) {\n  var cloned = new VNode(\n    vnode.tag,\n    vnode.data,\n    // #7975\n    // clone children array to avoid mutating original in case of cloning\n    // a child.\n    vnode.children && vnode.children.slice(),\n    vnode.text,\n    vnode.elm,\n    vnode.context,\n    vnode.componentOptions,\n    vnode.asyncFactory\n  );\n  cloned.ns = vnode.ns;\n  cloned.isStatic = vnode.isStatic;\n  cloned.key = vnode.key;\n  cloned.isComment = vnode.isComment;\n  cloned.fnContext = vnode.fnContext;\n  cloned.fnOptions = vnode.fnOptions;\n  cloned.fnScopeId = vnode.fnScopeId;\n  cloned.asyncMeta = vnode.asyncMeta;\n  cloned.isCloned = true;\n  return cloned\n}\n\n/*\n * not type checking this file because flow doesn't play well with\n * dynamically accessing methods on Array prototype\n */\n\nvar arrayProto = Array.prototype;\nvar arrayMethods = Object.create(arrayProto);\n\nvar methodsToPatch = [\n  'push',\n  'pop',\n  'shift',\n  'unshift',\n  'splice',\n  'sort',\n  'reverse'\n];\n\n/**\n * Intercept mutating methods and emit events\n */\nmethodsToPatch.forEach(function (method) {\n  // cache original method\n  var original = arrayProto[method];\n  def(arrayMethods, method, function mutator () {\n    var args = [], len = arguments.length;\n    while ( len-- ) args[ len ] = arguments[ len ];\n\n    var result = original.apply(this, args);\n    var ob = this.__ob__;\n    var inserted;\n    switch (method) {\n      case 'push':\n      case 'unshift':\n        inserted = args;\n        break\n      case 'splice':\n        inserted = args.slice(2);\n        break\n    }\n    if (inserted) { ob.observeArray(inserted); }\n    // notify change\n    ob.dep.notify();\n    return result\n  });\n});\n\n/*  */\n\nvar arrayKeys = Object.getOwnPropertyNames(arrayMethods);\n\n/**\n * In some cases we may want to disable observation inside a component's\n * update computation.\n */\nvar shouldObserve = true;\n\nfunction toggleObserving (value) {\n  shouldObserve = value;\n}\n\n/**\n * Observer class that is attached to each observed\n * object. Once attached, the observer converts the target\n * object's property keys into getter/setters that\n * collect dependencies and dispatch updates.\n */\nvar Observer = function Observer (value) {\n  this.value = value;\n  this.dep = new Dep();\n  this.vmCount = 0;\n  def(value, '__ob__', this);\n  if (Array.isArray(value)) {\n    if (hasProto) {\n      protoAugment(value, arrayMethods);\n    } else {\n      copyAugment(value, arrayMethods, arrayKeys);\n    }\n    this.observeArray(value);\n  } else {\n    this.walk(value);\n  }\n};\n\n/**\n * Walk through all properties and convert them into\n * getter/setters. This method should only be called when\n * value type is Object.\n */\nObserver.prototype.walk = function walk (obj) {\n  var keys = Object.keys(obj);\n  for (var i = 0; i < keys.length; i++) {\n    defineReactive$$1(obj, keys[i]);\n  }\n};\n\n/**\n * Observe a list of Array items.\n */\nObserver.prototype.observeArray = function observeArray (items) {\n  for (var i = 0, l = items.length; i < l; i++) {\n    observe(items[i]);\n  }\n};\n\n// helpers\n\n/**\n * Augment a target Object or Array by intercepting\n * the prototype chain using __proto__\n */\nfunction protoAugment (target, src) {\n  /* eslint-disable no-proto */\n  target.__proto__ = src;\n  /* eslint-enable no-proto */\n}\n\n/**\n * Augment a target Object or Array by defining\n * hidden properties.\n */\n/* istanbul ignore next */\nfunction copyAugment (target, src, keys) {\n  for (var i = 0, l = keys.length; i < l; i++) {\n    var key = keys[i];\n    def(target, key, src[key]);\n  }\n}\n\n/**\n * Attempt to create an observer instance for a value,\n * returns the new observer if successfully observed,\n * or the existing observer if the value already has one.\n */\nfunction observe (value, asRootData) {\n  if (!isObject(value) || value instanceof VNode) {\n    return\n  }\n  var ob;\n  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {\n    ob = value.__ob__;\n  } else if (\n    shouldObserve &&\n    !isServerRendering() &&\n    (Array.isArray(value) || isPlainObject(value)) &&\n    Object.isExtensible(value) &&\n    !value._isVue\n  ) {\n    ob = new Observer(value);\n  }\n  if (asRootData && ob) {\n    ob.vmCount++;\n  }\n  return ob\n}\n\n/**\n * Define a reactive property on an Object.\n */\nfunction defineReactive$$1 (\n  obj,\n  key,\n  val,\n  customSetter,\n  shallow\n) {\n  var dep = new Dep();\n\n  var property = Object.getOwnPropertyDescriptor(obj, key);\n  if (property && property.configurable === false) {\n    return\n  }\n\n  // cater for pre-defined getter/setters\n  var getter = property && property.get;\n  var setter = property && property.set;\n  if ((!getter || setter) && arguments.length === 2) {\n    val = obj[key];\n  }\n\n  var childOb = !shallow && observe(val);\n  Object.defineProperty(obj, key, {\n    enumerable: true,\n    configurable: true,\n    get: function reactiveGetter () {\n      var value = getter ? getter.call(obj) : val;\n      if (Dep.target) {\n        dep.depend();\n        if (childOb) {\n          childOb.dep.depend();\n          if (Array.isArray(value)) {\n            dependArray(value);\n          }\n        }\n      }\n      return value\n    },\n    set: function reactiveSetter (newVal) {\n      var value = getter ? getter.call(obj) : val;\n      /* eslint-disable no-self-compare */\n      if (newVal === value || (newVal !== newVal && value !== value)) {\n        return\n      }\n      /* eslint-enable no-self-compare */\n      if ( true && customSetter) {\n        customSetter();\n      }\n      // #7981: for accessor properties without setter\n      if (getter && !setter) { return }\n      if (setter) {\n        setter.call(obj, newVal);\n      } else {\n        val = newVal;\n      }\n      childOb = !shallow && observe(newVal);\n      dep.notify();\n    }\n  });\n}\n\n/**\n * Set a property on an object. Adds the new property and\n * triggers change notification if the property doesn't\n * already exist.\n */\nfunction set (target, key, val) {\n  if ( true &&\n    (isUndef(target) || isPrimitive(target))\n  ) {\n    warn((\"Cannot set reactive property on undefined, null, or primitive value: \" + ((target))));\n  }\n  if (Array.isArray(target) && isValidArrayIndex(key)) {\n    target.length = Math.max(target.length, key);\n    target.splice(key, 1, val);\n    return val\n  }\n  if (key in target && !(key in Object.prototype)) {\n    target[key] = val;\n    return val\n  }\n  var ob = (target).__ob__;\n  if (target._isVue || (ob && ob.vmCount)) {\n     true && warn(\n      'Avoid adding reactive properties to a Vue instance or its root $data ' +\n      'at runtime - declare it upfront in the data option.'\n    );\n    return val\n  }\n  if (!ob) {\n    target[key] = val;\n    return val\n  }\n  defineReactive$$1(ob.value, key, val);\n  ob.dep.notify();\n  return val\n}\n\n/**\n * Delete a property and trigger change if necessary.\n */\nfunction del (target, key) {\n  if ( true &&\n    (isUndef(target) || isPrimitive(target))\n  ) {\n    warn((\"Cannot delete reactive property on undefined, null, or primitive value: \" + ((target))));\n  }\n  if (Array.isArray(target) && isValidArrayIndex(key)) {\n    target.splice(key, 1);\n    return\n  }\n  var ob = (target).__ob__;\n  if (target._isVue || (ob && ob.vmCount)) {\n     true && warn(\n      'Avoid deleting properties on a Vue instance or its root $data ' +\n      '- just set it to null.'\n    );\n    return\n  }\n  if (!hasOwn(target, key)) {\n    return\n  }\n  delete target[key];\n  if (!ob) {\n    return\n  }\n  ob.dep.notify();\n}\n\n/**\n * Collect dependencies on array elements when the array is touched, since\n * we cannot intercept array element access like property getters.\n */\nfunction dependArray (value) {\n  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {\n    e = value[i];\n    e && e.__ob__ && e.__ob__.dep.depend();\n    if (Array.isArray(e)) {\n      dependArray(e);\n    }\n  }\n}\n\n/*  */\n\n/**\n * Option overwriting strategies are functions that handle\n * how to merge a parent option value and a child option\n * value into the final value.\n */\nvar strats = config.optionMergeStrategies;\n\n/**\n * Options with restrictions\n */\nif (true) {\n  strats.el = strats.propsData = function (parent, child, vm, key) {\n    if (!vm) {\n      warn(\n        \"option \\\"\" + key + \"\\\" can only be used during instance \" +\n        'creation with the `new` keyword.'\n      );\n    }\n    return defaultStrat(parent, child)\n  };\n}\n\n/**\n * Helper that recursively merges two data objects together.\n */\nfunction mergeData (to, from) {\n  if (!from) { return to }\n  var key, toVal, fromVal;\n\n  var keys = hasSymbol\n    ? Reflect.ownKeys(from)\n    : Object.keys(from);\n\n  for (var i = 0; i < keys.length; i++) {\n    key = keys[i];\n    // in case the object is already observed...\n    if (key === '__ob__') { continue }\n    toVal = to[key];\n    fromVal = from[key];\n    if (!hasOwn(to, key)) {\n      set(to, key, fromVal);\n    } else if (\n      toVal !== fromVal &&\n      isPlainObject(toVal) &&\n      isPlainObject(fromVal)\n    ) {\n      mergeData(toVal, fromVal);\n    }\n  }\n  return to\n}\n\n/**\n * Data\n */\nfunction mergeDataOrFn (\n  parentVal,\n  childVal,\n  vm\n) {\n  if (!vm) {\n    // in a Vue.extend merge, both should be functions\n    if (!childVal) {\n      return parentVal\n    }\n    if (!parentVal) {\n      return childVal\n    }\n    // when parentVal & childVal are both present,\n    // we need to return a function that returns the\n    // merged result of both functions... no need to\n    // check if parentVal is a function here because\n    // it has to be a function to pass previous merges.\n    return function mergedDataFn () {\n      return mergeData(\n        typeof childVal === 'function' ? childVal.call(this, this) : childVal,\n        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal\n      )\n    }\n  } else {\n    return function mergedInstanceDataFn () {\n      // instance merge\n      var instanceData = typeof childVal === 'function'\n        ? childVal.call(vm, vm)\n        : childVal;\n      var defaultData = typeof parentVal === 'function'\n        ? parentVal.call(vm, vm)\n        : parentVal;\n      if (instanceData) {\n        return mergeData(instanceData, defaultData)\n      } else {\n        return defaultData\n      }\n    }\n  }\n}\n\nstrats.data = function (\n  parentVal,\n  childVal,\n  vm\n) {\n  if (!vm) {\n    if (childVal && typeof childVal !== 'function') {\n       true && warn(\n        'The \"data\" option should be a function ' +\n        'that returns a per-instance value in component ' +\n        'definitions.',\n        vm\n      );\n\n      return parentVal\n    }\n    return mergeDataOrFn(parentVal, childVal)\n  }\n\n  return mergeDataOrFn(parentVal, childVal, vm)\n};\n\n/**\n * Hooks and props are merged as arrays.\n */\nfunction mergeHook (\n  parentVal,\n  childVal\n) {\n  var res = childVal\n    ? parentVal\n      ? parentVal.concat(childVal)\n      : Array.isArray(childVal)\n        ? childVal\n        : [childVal]\n    : parentVal;\n  return res\n    ? dedupeHooks(res)\n    : res\n}\n\nfunction dedupeHooks (hooks) {\n  var res = [];\n  for (var i = 0; i < hooks.length; i++) {\n    if (res.indexOf(hooks[i]) === -1) {\n      res.push(hooks[i]);\n    }\n  }\n  return res\n}\n\nLIFECYCLE_HOOKS.forEach(function (hook) {\n  strats[hook] = mergeHook;\n});\n\n/**\n * Assets\n *\n * When a vm is present (instance creation), we need to do\n * a three-way merge between constructor options, instance\n * options and parent options.\n */\nfunction mergeAssets (\n  parentVal,\n  childVal,\n  vm,\n  key\n) {\n  var res = Object.create(parentVal || null);\n  if (childVal) {\n     true && assertObjectType(key, childVal, vm);\n    return extend(res, childVal)\n  } else {\n    return res\n  }\n}\n\nASSET_TYPES.forEach(function (type) {\n  strats[type + 's'] = mergeAssets;\n});\n\n/**\n * Watchers.\n *\n * Watchers hashes should not overwrite one\n * another, so we merge them as arrays.\n */\nstrats.watch = function (\n  parentVal,\n  childVal,\n  vm,\n  key\n) {\n  // work around Firefox's Object.prototype.watch...\n  if (parentVal === nativeWatch) { parentVal = undefined; }\n  if (childVal === nativeWatch) { childVal = undefined; }\n  /* istanbul ignore if */\n  if (!childVal) { return Object.create(parentVal || null) }\n  if (true) {\n    assertObjectType(key, childVal, vm);\n  }\n  if (!parentVal) { return childVal }\n  var ret = {};\n  extend(ret, parentVal);\n  for (var key$1 in childVal) {\n    var parent = ret[key$1];\n    var child = childVal[key$1];\n    if (parent && !Array.isArray(parent)) {\n      parent = [parent];\n    }\n    ret[key$1] = parent\n      ? parent.concat(child)\n      : Array.isArray(child) ? child : [child];\n  }\n  return ret\n};\n\n/**\n * Other object hashes.\n */\nstrats.props =\nstrats.methods =\nstrats.inject =\nstrats.computed = function (\n  parentVal,\n  childVal,\n  vm,\n  key\n) {\n  if (childVal && \"development\" !== 'production') {\n    assertObjectType(key, childVal, vm);\n  }\n  if (!parentVal) { return childVal }\n  var ret = Object.create(null);\n  extend(ret, parentVal);\n  if (childVal) { extend(ret, childVal); }\n  return ret\n};\nstrats.provide = mergeDataOrFn;\n\n/**\n * Default strategy.\n */\nvar defaultStrat = function (parentVal, childVal) {\n  return childVal === undefined\n    ? parentVal\n    : childVal\n};\n\n/**\n * Validate component names\n */\nfunction checkComponents (options) {\n  for (var key in options.components) {\n    validateComponentName(key);\n  }\n}\n\nfunction validateComponentName (name) {\n  if (!new RegExp((\"^[a-zA-Z][\\\\-\\\\.0-9_\" + (unicodeRegExp.source) + \"]*$\")).test(name)) {\n    warn(\n      'Invalid component name: \"' + name + '\". Component names ' +\n      'should conform to valid custom element name in html5 specification.'\n    );\n  }\n  if (isBuiltInTag(name) || config.isReservedTag(name)) {\n    warn(\n      'Do not use built-in or reserved HTML elements as component ' +\n      'id: ' + name\n    );\n  }\n}\n\n/**\n * Ensure all props option syntax are normalized into the\n * Object-based format.\n */\nfunction normalizeProps (options, vm) {\n  var props = options.props;\n  if (!props) { return }\n  var res = {};\n  var i, val, name;\n  if (Array.isArray(props)) {\n    i = props.length;\n    while (i--) {\n      val = props[i];\n      if (typeof val === 'string') {\n        name = camelize(val);\n        res[name] = { type: null };\n      } else if (true) {\n        warn('props must be strings when using array syntax.');\n      }\n    }\n  } else if (isPlainObject(props)) {\n    for (var key in props) {\n      val = props[key];\n      name = camelize(key);\n      res[name] = isPlainObject(val)\n        ? val\n        : { type: val };\n    }\n  } else if (true) {\n    warn(\n      \"Invalid value for option \\\"props\\\": expected an Array or an Object, \" +\n      \"but got \" + (toRawType(props)) + \".\",\n      vm\n    );\n  }\n  options.props = res;\n}\n\n/**\n * Normalize all injections into Object-based format\n */\nfunction normalizeInject (options, vm) {\n  var inject = options.inject;\n  if (!inject) { return }\n  var normalized = options.inject = {};\n  if (Array.isArray(inject)) {\n    for (var i = 0; i < inject.length; i++) {\n      normalized[inject[i]] = { from: inject[i] };\n    }\n  } else if (isPlainObject(inject)) {\n    for (var key in inject) {\n      var val = inject[key];\n      normalized[key] = isPlainObject(val)\n        ? extend({ from: key }, val)\n        : { from: val };\n    }\n  } else if (true) {\n    warn(\n      \"Invalid value for option \\\"inject\\\": expected an Array or an Object, \" +\n      \"but got \" + (toRawType(inject)) + \".\",\n      vm\n    );\n  }\n}\n\n/**\n * Normalize raw function directives into object format.\n */\nfunction normalizeDirectives (options) {\n  var dirs = options.directives;\n  if (dirs) {\n    for (var key in dirs) {\n      var def$$1 = dirs[key];\n      if (typeof def$$1 === 'function') {\n        dirs[key] = { bind: def$$1, update: def$$1 };\n      }\n    }\n  }\n}\n\nfunction assertObjectType (name, value, vm) {\n  if (!isPlainObject(value)) {\n    warn(\n      \"Invalid value for option \\\"\" + name + \"\\\": expected an Object, \" +\n      \"but got \" + (toRawType(value)) + \".\",\n      vm\n    );\n  }\n}\n\n/**\n * Merge two option objects into a new one.\n * Core utility used in both instantiation and inheritance.\n */\nfunction mergeOptions (\n  parent,\n  child,\n  vm\n) {\n  if (true) {\n    checkComponents(child);\n  }\n\n  if (typeof child === 'function') {\n    child = child.options;\n  }\n\n  normalizeProps(child, vm);\n  normalizeInject(child, vm);\n  normalizeDirectives(child);\n\n  // Apply extends and mixins on the child options,\n  // but only if it is a raw options object that isn't\n  // the result of another mergeOptions call.\n  // Only merged options has the _base property.\n  if (!child._base) {\n    if (child.extends) {\n      parent = mergeOptions(parent, child.extends, vm);\n    }\n    if (child.mixins) {\n      for (var i = 0, l = child.mixins.length; i < l; i++) {\n        parent = mergeOptions(parent, child.mixins[i], vm);\n      }\n    }\n  }\n\n  var options = {};\n  var key;\n  for (key in parent) {\n    mergeField(key);\n  }\n  for (key in child) {\n    if (!hasOwn(parent, key)) {\n      mergeField(key);\n    }\n  }\n  function mergeField (key) {\n    var strat = strats[key] || defaultStrat;\n    options[key] = strat(parent[key], child[key], vm, key);\n  }\n  return options\n}\n\n/**\n * Resolve an asset.\n * This function is used because child instances need access\n * to assets defined in its ancestor chain.\n */\nfunction resolveAsset (\n  options,\n  type,\n  id,\n  warnMissing\n) {\n  /* istanbul ignore if */\n  if (typeof id !== 'string') {\n    return\n  }\n  var assets = options[type];\n  // check local registration variations first\n  if (hasOwn(assets, id)) { return assets[id] }\n  var camelizedId = camelize(id);\n  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }\n  var PascalCaseId = capitalize(camelizedId);\n  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }\n  // fallback to prototype chain\n  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];\n  if ( true && warnMissing && !res) {\n    warn(\n      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,\n      options\n    );\n  }\n  return res\n}\n\n/*  */\n\n\n\nfunction validateProp (\n  key,\n  propOptions,\n  propsData,\n  vm\n) {\n  var prop = propOptions[key];\n  var absent = !hasOwn(propsData, key);\n  var value = propsData[key];\n  // boolean casting\n  var booleanIndex = getTypeIndex(Boolean, prop.type);\n  if (booleanIndex > -1) {\n    if (absent && !hasOwn(prop, 'default')) {\n      value = false;\n    } else if (value === '' || value === hyphenate(key)) {\n      // only cast empty string / same name to boolean if\n      // boolean has higher priority\n      var stringIndex = getTypeIndex(String, prop.type);\n      if (stringIndex < 0 || booleanIndex < stringIndex) {\n        value = true;\n      }\n    }\n  }\n  // check default value\n  if (value === undefined) {\n    value = getPropDefaultValue(vm, prop, key);\n    // since the default value is a fresh copy,\n    // make sure to observe it.\n    var prevShouldObserve = shouldObserve;\n    toggleObserving(true);\n    observe(value);\n    toggleObserving(prevShouldObserve);\n  }\n  if (\n    true\n  ) {\n    assertProp(prop, key, value, vm, absent);\n  }\n  return value\n}\n\n/**\n * Get the default value of a prop.\n */\nfunction getPropDefaultValue (vm, prop, key) {\n  // no default, return undefined\n  if (!hasOwn(prop, 'default')) {\n    return undefined\n  }\n  var def = prop.default;\n  // warn against non-factory defaults for Object & Array\n  if ( true && isObject(def)) {\n    warn(\n      'Invalid default value for prop \"' + key + '\": ' +\n      'Props with type Object/Array must use a factory function ' +\n      'to return the default value.',\n      vm\n    );\n  }\n  // the raw prop value was also undefined from previous render,\n  // return previous default value to avoid unnecessary watcher trigger\n  if (vm && vm.$options.propsData &&\n    vm.$options.propsData[key] === undefined &&\n    vm._props[key] !== undefined\n  ) {\n    return vm._props[key]\n  }\n  // call factory function for non-Function types\n  // a value is Function if its prototype is function even across different execution context\n  return typeof def === 'function' && getType(prop.type) !== 'Function'\n    ? def.call(vm)\n    : def\n}\n\n/**\n * Assert whether a prop is valid.\n */\nfunction assertProp (\n  prop,\n  name,\n  value,\n  vm,\n  absent\n) {\n  if (prop.required && absent) {\n    warn(\n      'Missing required prop: \"' + name + '\"',\n      vm\n    );\n    return\n  }\n  if (value == null && !prop.required) {\n    return\n  }\n  var type = prop.type;\n  var valid = !type || type === true;\n  var expectedTypes = [];\n  if (type) {\n    if (!Array.isArray(type)) {\n      type = [type];\n    }\n    for (var i = 0; i < type.length && !valid; i++) {\n      var assertedType = assertType(value, type[i], vm);\n      expectedTypes.push(assertedType.expectedType || '');\n      valid = assertedType.valid;\n    }\n  }\n\n  var haveExpectedTypes = expectedTypes.some(function (t) { return t; });\n  if (!valid && haveExpectedTypes) {\n    warn(\n      getInvalidTypeMessage(name, value, expectedTypes),\n      vm\n    );\n    return\n  }\n  var validator = prop.validator;\n  if (validator) {\n    if (!validator(value)) {\n      warn(\n        'Invalid prop: custom validator check failed for prop \"' + name + '\".',\n        vm\n      );\n    }\n  }\n}\n\nvar simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;\n\nfunction assertType (value, type, vm) {\n  var valid;\n  var expectedType = getType(type);\n  if (simpleCheckRE.test(expectedType)) {\n    var t = typeof value;\n    valid = t === expectedType.toLowerCase();\n    // for primitive wrapper objects\n    if (!valid && t === 'object') {\n      valid = value instanceof type;\n    }\n  } else if (expectedType === 'Object') {\n    valid = isPlainObject(value);\n  } else if (expectedType === 'Array') {\n    valid = Array.isArray(value);\n  } else {\n    try {\n      valid = value instanceof type;\n    } catch (e) {\n      warn('Invalid prop type: \"' + String(type) + '\" is not a constructor', vm);\n      valid = false;\n    }\n  }\n  return {\n    valid: valid,\n    expectedType: expectedType\n  }\n}\n\nvar functionTypeCheckRE = /^\\s*function (\\w+)/;\n\n/**\n * Use function string name to check built-in types,\n * because a simple equality check will fail when running\n * across different vms / iframes.\n */\nfunction getType (fn) {\n  var match = fn && fn.toString().match(functionTypeCheckRE);\n  return match ? match[1] : ''\n}\n\nfunction isSameType (a, b) {\n  return getType(a) === getType(b)\n}\n\nfunction getTypeIndex (type, expectedTypes) {\n  if (!Array.isArray(expectedTypes)) {\n    return isSameType(expectedTypes, type) ? 0 : -1\n  }\n  for (var i = 0, len = expectedTypes.length; i < len; i++) {\n    if (isSameType(expectedTypes[i], type)) {\n      return i\n    }\n  }\n  return -1\n}\n\nfunction getInvalidTypeMessage (name, value, expectedTypes) {\n  var message = \"Invalid prop: type check failed for prop \\\"\" + name + \"\\\".\" +\n    \" Expected \" + (expectedTypes.map(capitalize).join(', '));\n  var expectedType = expectedTypes[0];\n  var receivedType = toRawType(value);\n  // check if we need to specify expected value\n  if (\n    expectedTypes.length === 1 &&\n    isExplicable(expectedType) &&\n    isExplicable(typeof value) &&\n    !isBoolean(expectedType, receivedType)\n  ) {\n    message += \" with value \" + (styleValue(value, expectedType));\n  }\n  message += \", got \" + receivedType + \" \";\n  // check if we need to specify received value\n  if (isExplicable(receivedType)) {\n    message += \"with value \" + (styleValue(value, receivedType)) + \".\";\n  }\n  return message\n}\n\nfunction styleValue (value, type) {\n  if (type === 'String') {\n    return (\"\\\"\" + value + \"\\\"\")\n  } else if (type === 'Number') {\n    return (\"\" + (Number(value)))\n  } else {\n    return (\"\" + value)\n  }\n}\n\nvar EXPLICABLE_TYPES = ['string', 'number', 'boolean'];\nfunction isExplicable (value) {\n  return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; })\n}\n\nfunction isBoolean () {\n  var args = [], len = arguments.length;\n  while ( len-- ) args[ len ] = arguments[ len ];\n\n  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })\n}\n\n/*  */\n\nfunction handleError (err, vm, info) {\n  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.\n  // See: https://github.com/vuejs/vuex/issues/1505\n  pushTarget();\n  try {\n    if (vm) {\n      var cur = vm;\n      while ((cur = cur.$parent)) {\n        var hooks = cur.$options.errorCaptured;\n        if (hooks) {\n          for (var i = 0; i < hooks.length; i++) {\n            try {\n              var capture = hooks[i].call(cur, err, vm, info) === false;\n              if (capture) { return }\n            } catch (e) {\n              globalHandleError(e, cur, 'errorCaptured hook');\n            }\n          }\n        }\n      }\n    }\n    globalHandleError(err, vm, info);\n  } finally {\n    popTarget();\n  }\n}\n\nfunction invokeWithErrorHandling (\n  handler,\n  context,\n  args,\n  vm,\n  info\n) {\n  var res;\n  try {\n    res = args ? handler.apply(context, args) : handler.call(context);\n    if (res && !res._isVue && isPromise(res) && !res._handled) {\n      res.catch(function (e) { return handleError(e, vm, info + \" (Promise/async)\"); });\n      // issue #9511\n      // avoid catch triggering multiple times when nested calls\n      res._handled = true;\n    }\n  } catch (e) {\n    handleError(e, vm, info);\n  }\n  return res\n}\n\nfunction globalHandleError (err, vm, info) {\n  if (config.errorHandler) {\n    try {\n      return config.errorHandler.call(null, err, vm, info)\n    } catch (e) {\n      // if the user intentionally throws the original error in the handler,\n      // do not log it twice\n      if (e !== err) {\n        logError(e, null, 'config.errorHandler');\n      }\n    }\n  }\n  logError(err, vm, info);\n}\n\nfunction logError (err, vm, info) {\n  if (true) {\n    warn((\"Error in \" + info + \": \\\"\" + (err.toString()) + \"\\\"\"), vm);\n  }\n  /* istanbul ignore else */\n  if ((inBrowser || inWeex) && typeof console !== 'undefined') {\n    console.error(err);\n  } else {\n    throw err\n  }\n}\n\n/*  */\n\nvar isUsingMicroTask = false;\n\nvar callbacks = [];\nvar pending = false;\n\nfunction flushCallbacks () {\n  pending = false;\n  var copies = callbacks.slice(0);\n  callbacks.length = 0;\n  for (var i = 0; i < copies.length; i++) {\n    copies[i]();\n  }\n}\n\n// Here we have async deferring wrappers using microtasks.\n// In 2.5 we used (macro) tasks (in combination with microtasks).\n// However, it has subtle problems when state is changed right before repaint\n// (e.g. #6813, out-in transitions).\n// Also, using (macro) tasks in event handler would cause some weird behaviors\n// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).\n// So we now use microtasks everywhere, again.\n// A major drawback of this tradeoff is that there are some scenarios\n// where microtasks have too high a priority and fire in between supposedly\n// sequential events (e.g. #4521, #6690, which have workarounds)\n// or even between bubbling of the same event (#6566).\nvar timerFunc;\n\n// The nextTick behavior leverages the microtask queue, which can be accessed\n// via either native Promise.then or MutationObserver.\n// MutationObserver has wider support, however it is seriously bugged in\n// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It\n// completely stops working after triggering a few times... so, if native\n// Promise is available, we will use it:\n/* istanbul ignore next, $flow-disable-line */\nif (typeof Promise !== 'undefined' && isNative(Promise)) {\n  var p = Promise.resolve();\n  timerFunc = function () {\n    p.then(flushCallbacks);\n    // In problematic UIWebViews, Promise.then doesn't completely break, but\n    // it can get stuck in a weird state where callbacks are pushed into the\n    // microtask queue but the queue isn't being flushed, until the browser\n    // needs to do some other work, e.g. handle a timer. Therefore we can\n    // \"force\" the microtask queue to be flushed by adding an empty timer.\n    if (isIOS) { setTimeout(noop); }\n  };\n  isUsingMicroTask = true;\n} else if (!isIE && typeof MutationObserver !== 'undefined' && (\n  isNative(MutationObserver) ||\n  // PhantomJS and iOS 7.x\n  MutationObserver.toString() === '[object MutationObserverConstructor]'\n)) {\n  // Use MutationObserver where native Promise is not available,\n  // e.g. PhantomJS, iOS7, Android 4.4\n  // (#6466 MutationObserver is unreliable in IE11)\n  var counter = 1;\n  var observer = new MutationObserver(flushCallbacks);\n  var textNode = document.createTextNode(String(counter));\n  observer.observe(textNode, {\n    characterData: true\n  });\n  timerFunc = function () {\n    counter = (counter + 1) % 2;\n    textNode.data = String(counter);\n  };\n  isUsingMicroTask = true;\n} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {\n  // Fallback to setImmediate.\n  // Technically it leverages the (macro) task queue,\n  // but it is still a better choice than setTimeout.\n  timerFunc = function () {\n    setImmediate(flushCallbacks);\n  };\n} else {\n  // Fallback to setTimeout.\n  timerFunc = function () {\n    setTimeout(flushCallbacks, 0);\n  };\n}\n\nfunction nextTick (cb, ctx) {\n  var _resolve;\n  callbacks.push(function () {\n    if (cb) {\n      try {\n        cb.call(ctx);\n      } catch (e) {\n        handleError(e, ctx, 'nextTick');\n      }\n    } else if (_resolve) {\n      _resolve(ctx);\n    }\n  });\n  if (!pending) {\n    pending = true;\n    timerFunc();\n  }\n  // $flow-disable-line\n  if (!cb && typeof Promise !== 'undefined') {\n    return new Promise(function (resolve) {\n      _resolve = resolve;\n    })\n  }\n}\n\n/*  */\n\n/* not type checking this file because flow doesn't play well with Proxy */\n\nvar initProxy;\n\nif (true) {\n  var allowedGlobals = makeMap(\n    'Infinity,undefined,NaN,isFinite,isNaN,' +\n    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +\n    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +\n    'require' // for Webpack/Browserify\n  );\n\n  var warnNonPresent = function (target, key) {\n    warn(\n      \"Property or method \\\"\" + key + \"\\\" is not defined on the instance but \" +\n      'referenced during render. Make sure that this property is reactive, ' +\n      'either in the data option, or for class-based components, by ' +\n      'initializing the property. ' +\n      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',\n      target\n    );\n  };\n\n  var warnReservedPrefix = function (target, key) {\n    warn(\n      \"Property \\\"\" + key + \"\\\" must be accessed with \\\"$data.\" + key + \"\\\" because \" +\n      'properties starting with \"$\" or \"_\" are not proxied in the Vue instance to ' +\n      'prevent conflicts with Vue internals. ' +\n      'See: https://vuejs.org/v2/api/#data',\n      target\n    );\n  };\n\n  var hasProxy =\n    typeof Proxy !== 'undefined' && isNative(Proxy);\n\n  if (hasProxy) {\n    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');\n    config.keyCodes = new Proxy(config.keyCodes, {\n      set: function set (target, key, value) {\n        if (isBuiltInModifier(key)) {\n          warn((\"Avoid overwriting built-in modifier in config.keyCodes: .\" + key));\n          return false\n        } else {\n          target[key] = value;\n          return true\n        }\n      }\n    });\n  }\n\n  var hasHandler = {\n    has: function has (target, key) {\n      var has = key in target;\n      var isAllowed = allowedGlobals(key) ||\n        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));\n      if (!has && !isAllowed) {\n        if (key in target.$data) { warnReservedPrefix(target, key); }\n        else { warnNonPresent(target, key); }\n      }\n      return has || !isAllowed\n    }\n  };\n\n  var getHandler = {\n    get: function get (target, key) {\n      if (typeof key === 'string' && !(key in target)) {\n        if (key in target.$data) { warnReservedPrefix(target, key); }\n        else { warnNonPresent(target, key); }\n      }\n      return target[key]\n    }\n  };\n\n  initProxy = function initProxy (vm) {\n    if (hasProxy) {\n      // determine which proxy handler to use\n      var options = vm.$options;\n      var handlers = options.render && options.render._withStripped\n        ? getHandler\n        : hasHandler;\n      vm._renderProxy = new Proxy(vm, handlers);\n    } else {\n      vm._renderProxy = vm;\n    }\n  };\n}\n\n/*  */\n\nvar seenObjects = new _Set();\n\n/**\n * Recursively traverse an object to evoke all converted\n * getters, so that every nested property inside the object\n * is collected as a \"deep\" dependency.\n */\nfunction traverse (val) {\n  _traverse(val, seenObjects);\n  seenObjects.clear();\n}\n\nfunction _traverse (val, seen) {\n  var i, keys;\n  var isA = Array.isArray(val);\n  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {\n    return\n  }\n  if (val.__ob__) {\n    var depId = val.__ob__.dep.id;\n    if (seen.has(depId)) {\n      return\n    }\n    seen.add(depId);\n  }\n  if (isA) {\n    i = val.length;\n    while (i--) { _traverse(val[i], seen); }\n  } else {\n    keys = Object.keys(val);\n    i = keys.length;\n    while (i--) { _traverse(val[keys[i]], seen); }\n  }\n}\n\nvar mark;\nvar measure;\n\nif (true) {\n  var perf = inBrowser && window.performance;\n  /* istanbul ignore if */\n  if (\n    perf &&\n    perf.mark &&\n    perf.measure &&\n    perf.clearMarks &&\n    perf.clearMeasures\n  ) {\n    mark = function (tag) { return perf.mark(tag); };\n    measure = function (name, startTag, endTag) {\n      perf.measure(name, startTag, endTag);\n      perf.clearMarks(startTag);\n      perf.clearMarks(endTag);\n      // perf.clearMeasures(name)\n    };\n  }\n}\n\n/*  */\n\nvar normalizeEvent = cached(function (name) {\n  var passive = name.charAt(0) === '&';\n  name = passive ? name.slice(1) : name;\n  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first\n  name = once$$1 ? name.slice(1) : name;\n  var capture = name.charAt(0) === '!';\n  name = capture ? name.slice(1) : name;\n  return {\n    name: name,\n    once: once$$1,\n    capture: capture,\n    passive: passive\n  }\n});\n\nfunction createFnInvoker (fns, vm) {\n  function invoker () {\n    var arguments$1 = arguments;\n\n    var fns = invoker.fns;\n    if (Array.isArray(fns)) {\n      var cloned = fns.slice();\n      for (var i = 0; i < cloned.length; i++) {\n        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, \"v-on handler\");\n      }\n    } else {\n      // return handler return value for single handlers\n      return invokeWithErrorHandling(fns, null, arguments, vm, \"v-on handler\")\n    }\n  }\n  invoker.fns = fns;\n  return invoker\n}\n\nfunction updateListeners (\n  on,\n  oldOn,\n  add,\n  remove$$1,\n  createOnceHandler,\n  vm\n) {\n  var name, def$$1, cur, old, event;\n  for (name in on) {\n    def$$1 = cur = on[name];\n    old = oldOn[name];\n    event = normalizeEvent(name);\n    if (isUndef(cur)) {\n       true && warn(\n        \"Invalid handler for event \\\"\" + (event.name) + \"\\\": got \" + String(cur),\n        vm\n      );\n    } else if (isUndef(old)) {\n      if (isUndef(cur.fns)) {\n        cur = on[name] = createFnInvoker(cur, vm);\n      }\n      if (isTrue(event.once)) {\n        cur = on[name] = createOnceHandler(event.name, cur, event.capture);\n      }\n      add(event.name, cur, event.capture, event.passive, event.params);\n    } else if (cur !== old) {\n      old.fns = cur;\n      on[name] = old;\n    }\n  }\n  for (name in oldOn) {\n    if (isUndef(on[name])) {\n      event = normalizeEvent(name);\n      remove$$1(event.name, oldOn[name], event.capture);\n    }\n  }\n}\n\n/*  */\n\nfunction mergeVNodeHook (def, hookKey, hook) {\n  if (def instanceof VNode) {\n    def = def.data.hook || (def.data.hook = {});\n  }\n  var invoker;\n  var oldHook = def[hookKey];\n\n  function wrappedHook () {\n    hook.apply(this, arguments);\n    // important: remove merged hook to ensure it's called only once\n    // and prevent memory leak\n    remove(invoker.fns, wrappedHook);\n  }\n\n  if (isUndef(oldHook)) {\n    // no existing hook\n    invoker = createFnInvoker([wrappedHook]);\n  } else {\n    /* istanbul ignore if */\n    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {\n      // already a merged invoker\n      invoker = oldHook;\n      invoker.fns.push(wrappedHook);\n    } else {\n      // existing plain hook\n      invoker = createFnInvoker([oldHook, wrappedHook]);\n    }\n  }\n\n  invoker.merged = true;\n  def[hookKey] = invoker;\n}\n\n/*  */\n\nfunction extractPropsFromVNodeData (\n  data,\n  Ctor,\n  tag\n) {\n  // we are only extracting raw values here.\n  // validation and default values are handled in the child\n  // component itself.\n  var propOptions = Ctor.options.props;\n  if (isUndef(propOptions)) {\n    return\n  }\n  var res = {};\n  var attrs = data.attrs;\n  var props = data.props;\n  if (isDef(attrs) || isDef(props)) {\n    for (var key in propOptions) {\n      var altKey = hyphenate(key);\n      if (true) {\n        var keyInLowerCase = key.toLowerCase();\n        if (\n          key !== keyInLowerCase &&\n          attrs && hasOwn(attrs, keyInLowerCase)\n        ) {\n          tip(\n            \"Prop \\\"\" + keyInLowerCase + \"\\\" is passed to component \" +\n            (formatComponentName(tag || Ctor)) + \", but the declared prop name is\" +\n            \" \\\"\" + key + \"\\\". \" +\n            \"Note that HTML attributes are case-insensitive and camelCased \" +\n            \"props need to use their kebab-case equivalents when using in-DOM \" +\n            \"templates. You should probably use \\\"\" + altKey + \"\\\" instead of \\\"\" + key + \"\\\".\"\n          );\n        }\n      }\n      checkProp(res, props, key, altKey, true) ||\n      checkProp(res, attrs, key, altKey, false);\n    }\n  }\n  return res\n}\n\nfunction checkProp (\n  res,\n  hash,\n  key,\n  altKey,\n  preserve\n) {\n  if (isDef(hash)) {\n    if (hasOwn(hash, key)) {\n      res[key] = hash[key];\n      if (!preserve) {\n        delete hash[key];\n      }\n      return true\n    } else if (hasOwn(hash, altKey)) {\n      res[key] = hash[altKey];\n      if (!preserve) {\n        delete hash[altKey];\n      }\n      return true\n    }\n  }\n  return false\n}\n\n/*  */\n\n// The template compiler attempts to minimize the need for normalization by\n// statically analyzing the template at compile time.\n//\n// For plain HTML markup, normalization can be completely skipped because the\n// generated render function is guaranteed to return Array<VNode>. There are\n// two cases where extra normalization is needed:\n\n// 1. When the children contains components - because a functional component\n// may return an Array instead of a single root. In this case, just a simple\n// normalization is needed - if any child is an Array, we flatten the whole\n// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep\n// because functional components already normalize their own children.\nfunction simpleNormalizeChildren (children) {\n  for (var i = 0; i < children.length; i++) {\n    if (Array.isArray(children[i])) {\n      return Array.prototype.concat.apply([], children)\n    }\n  }\n  return children\n}\n\n// 2. When the children contains constructs that always generated nested Arrays,\n// e.g. <template>, <slot>, v-for, or when the children is provided by user\n// with hand-written render functions / JSX. In such cases a full normalization\n// is needed to cater to all possible types of children values.\nfunction normalizeChildren (children) {\n  return isPrimitive(children)\n    ? [createTextVNode(children)]\n    : Array.isArray(children)\n      ? normalizeArrayChildren(children)\n      : undefined\n}\n\nfunction isTextNode (node) {\n  return isDef(node) && isDef(node.text) && isFalse(node.isComment)\n}\n\nfunction normalizeArrayChildren (children, nestedIndex) {\n  var res = [];\n  var i, c, lastIndex, last;\n  for (i = 0; i < children.length; i++) {\n    c = children[i];\n    if (isUndef(c) || typeof c === 'boolean') { continue }\n    lastIndex = res.length - 1;\n    last = res[lastIndex];\n    //  nested\n    if (Array.isArray(c)) {\n      if (c.length > 0) {\n        c = normalizeArrayChildren(c, ((nestedIndex || '') + \"_\" + i));\n        // merge adjacent text nodes\n        if (isTextNode(c[0]) && isTextNode(last)) {\n          res[lastIndex] = createTextVNode(last.text + (c[0]).text);\n          c.shift();\n        }\n        res.push.apply(res, c);\n      }\n    } else if (isPrimitive(c)) {\n      if (isTextNode(last)) {\n        // merge adjacent text nodes\n        // this is necessary for SSR hydration because text nodes are\n        // essentially merged when rendered to HTML strings\n        res[lastIndex] = createTextVNode(last.text + c);\n      } else if (c !== '') {\n        // convert primitive to vnode\n        res.push(createTextVNode(c));\n      }\n    } else {\n      if (isTextNode(c) && isTextNode(last)) {\n        // merge adjacent text nodes\n        res[lastIndex] = createTextVNode(last.text + c.text);\n      } else {\n        // default key for nested array children (likely generated by v-for)\n        if (isTrue(children._isVList) &&\n          isDef(c.tag) &&\n          isUndef(c.key) &&\n          isDef(nestedIndex)) {\n          c.key = \"__vlist\" + nestedIndex + \"_\" + i + \"__\";\n        }\n        res.push(c);\n      }\n    }\n  }\n  return res\n}\n\n/*  */\n\nfunction initProvide (vm) {\n  var provide = vm.$options.provide;\n  if (provide) {\n    vm._provided = typeof provide === 'function'\n      ? provide.call(vm)\n      : provide;\n  }\n}\n\nfunction initInjections (vm) {\n  var result = resolveInject(vm.$options.inject, vm);\n  if (result) {\n    toggleObserving(false);\n    Object.keys(result).forEach(function (key) {\n      /* istanbul ignore else */\n      if (true) {\n        defineReactive$$1(vm, key, result[key], function () {\n          warn(\n            \"Avoid mutating an injected value directly since the changes will be \" +\n            \"overwritten whenever the provided component re-renders. \" +\n            \"injection being mutated: \\\"\" + key + \"\\\"\",\n            vm\n          );\n        });\n      } else {}\n    });\n    toggleObserving(true);\n  }\n}\n\nfunction resolveInject (inject, vm) {\n  if (inject) {\n    // inject is :any because flow is not smart enough to figure out cached\n    var result = Object.create(null);\n    var keys = hasSymbol\n      ? Reflect.ownKeys(inject)\n      : Object.keys(inject);\n\n    for (var i = 0; i < keys.length; i++) {\n      var key = keys[i];\n      // #6574 in case the inject object is observed...\n      if (key === '__ob__') { continue }\n      var provideKey = inject[key].from;\n      var source = vm;\n      while (source) {\n        if (source._provided && hasOwn(source._provided, provideKey)) {\n          result[key] = source._provided[provideKey];\n          break\n        }\n        source = source.$parent;\n      }\n      if (!source) {\n        if ('default' in inject[key]) {\n          var provideDefault = inject[key].default;\n          result[key] = typeof provideDefault === 'function'\n            ? provideDefault.call(vm)\n            : provideDefault;\n        } else if (true) {\n          warn((\"Injection \\\"\" + key + \"\\\" not found\"), vm);\n        }\n      }\n    }\n    return result\n  }\n}\n\n/*  */\n\n\n\n/**\n * Runtime helper for resolving raw children VNodes into a slot object.\n */\nfunction resolveSlots (\n  children,\n  context\n) {\n  if (!children || !children.length) {\n    return {}\n  }\n  var slots = {};\n  for (var i = 0, l = children.length; i < l; i++) {\n    var child = children[i];\n    var data = child.data;\n    // remove slot attribute if the node is resolved as a Vue slot node\n    if (data && data.attrs && data.attrs.slot) {\n      delete data.attrs.slot;\n    }\n    // named slots should only be respected if the vnode was rendered in the\n    // same context.\n    if ((child.context === context || child.fnContext === context) &&\n      data && data.slot != null\n    ) {\n      var name = data.slot;\n      var slot = (slots[name] || (slots[name] = []));\n      if (child.tag === 'template') {\n        slot.push.apply(slot, child.children || []);\n      } else {\n        slot.push(child);\n      }\n    } else {\n      (slots.default || (slots.default = [])).push(child);\n    }\n  }\n  // ignore slots that contains only whitespace\n  for (var name$1 in slots) {\n    if (slots[name$1].every(isWhitespace)) {\n      delete slots[name$1];\n    }\n  }\n  return slots\n}\n\nfunction isWhitespace (node) {\n  return (node.isComment && !node.asyncFactory) || node.text === ' '\n}\n\n/*  */\n\nfunction isAsyncPlaceholder (node) {\n  return node.isComment && node.asyncFactory\n}\n\n/*  */\n\nfunction normalizeScopedSlots (\n  slots,\n  normalSlots,\n  prevSlots\n) {\n  var res;\n  var hasNormalSlots = Object.keys(normalSlots).length > 0;\n  var isStable = slots ? !!slots.$stable : !hasNormalSlots;\n  var key = slots && slots.$key;\n  if (!slots) {\n    res = {};\n  } else if (slots._normalized) {\n    // fast path 1: child component re-render only, parent did not change\n    return slots._normalized\n  } else if (\n    isStable &&\n    prevSlots &&\n    prevSlots !== emptyObject &&\n    key === prevSlots.$key &&\n    !hasNormalSlots &&\n    !prevSlots.$hasNormal\n  ) {\n    // fast path 2: stable scoped slots w/ no normal slots to proxy,\n    // only need to normalize once\n    return prevSlots\n  } else {\n    res = {};\n    for (var key$1 in slots) {\n      if (slots[key$1] && key$1[0] !== '$') {\n        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);\n      }\n    }\n  }\n  // expose normal slots on scopedSlots\n  for (var key$2 in normalSlots) {\n    if (!(key$2 in res)) {\n      res[key$2] = proxyNormalSlot(normalSlots, key$2);\n    }\n  }\n  // avoriaz seems to mock a non-extensible $scopedSlots object\n  // and when that is passed down this would cause an error\n  if (slots && Object.isExtensible(slots)) {\n    (slots)._normalized = res;\n  }\n  def(res, '$stable', isStable);\n  def(res, '$key', key);\n  def(res, '$hasNormal', hasNormalSlots);\n  return res\n}\n\nfunction normalizeScopedSlot(normalSlots, key, fn) {\n  var normalized = function () {\n    var res = arguments.length ? fn.apply(null, arguments) : fn({});\n    res = res && typeof res === 'object' && !Array.isArray(res)\n      ? [res] // single vnode\n      : normalizeChildren(res);\n    var vnode = res && res[0];\n    return res && (\n      !vnode ||\n      (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391\n    ) ? undefined\n      : res\n  };\n  // this is a slot using the new v-slot syntax without scope. although it is\n  // compiled as a scoped slot, render fn users would expect it to be present\n  // on this.$slots because the usage is semantically a normal slot.\n  if (fn.proxy) {\n    Object.defineProperty(normalSlots, key, {\n      get: normalized,\n      enumerable: true,\n      configurable: true\n    });\n  }\n  return normalized\n}\n\nfunction proxyNormalSlot(slots, key) {\n  return function () { return slots[key]; }\n}\n\n/*  */\n\n/**\n * Runtime helper for rendering v-for lists.\n */\nfunction renderList (\n  val,\n  render\n) {\n  var ret, i, l, keys, key;\n  if (Array.isArray(val) || typeof val === 'string') {\n    ret = new Array(val.length);\n    for (i = 0, l = val.length; i < l; i++) {\n      ret[i] = render(val[i], i);\n    }\n  } else if (typeof val === 'number') {\n    ret = new Array(val);\n    for (i = 0; i < val; i++) {\n      ret[i] = render(i + 1, i);\n    }\n  } else if (isObject(val)) {\n    if (hasSymbol && val[Symbol.iterator]) {\n      ret = [];\n      var iterator = val[Symbol.iterator]();\n      var result = iterator.next();\n      while (!result.done) {\n        ret.push(render(result.value, ret.length));\n        result = iterator.next();\n      }\n    } else {\n      keys = Object.keys(val);\n      ret = new Array(keys.length);\n      for (i = 0, l = keys.length; i < l; i++) {\n        key = keys[i];\n        ret[i] = render(val[key], key, i);\n      }\n    }\n  }\n  if (!isDef(ret)) {\n    ret = [];\n  }\n  (ret)._isVList = true;\n  return ret\n}\n\n/*  */\n\n/**\n * Runtime helper for rendering <slot>\n */\nfunction renderSlot (\n  name,\n  fallbackRender,\n  props,\n  bindObject\n) {\n  var scopedSlotFn = this.$scopedSlots[name];\n  var nodes;\n  if (scopedSlotFn) {\n    // scoped slot\n    props = props || {};\n    if (bindObject) {\n      if ( true && !isObject(bindObject)) {\n        warn('slot v-bind without argument expects an Object', this);\n      }\n      props = extend(extend({}, bindObject), props);\n    }\n    nodes =\n      scopedSlotFn(props) ||\n      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);\n  } else {\n    nodes =\n      this.$slots[name] ||\n      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);\n  }\n\n  var target = props && props.slot;\n  if (target) {\n    return this.$createElement('template', { slot: target }, nodes)\n  } else {\n    return nodes\n  }\n}\n\n/*  */\n\n/**\n * Runtime helper for resolving filters\n */\nfunction resolveFilter (id) {\n  return resolveAsset(this.$options, 'filters', id, true) || identity\n}\n\n/*  */\n\nfunction isKeyNotMatch (expect, actual) {\n  if (Array.isArray(expect)) {\n    return expect.indexOf(actual) === -1\n  } else {\n    return expect !== actual\n  }\n}\n\n/**\n * Runtime helper for checking keyCodes from config.\n * exposed as Vue.prototype._k\n * passing in eventKeyName as last argument separately for backwards compat\n */\nfunction checkKeyCodes (\n  eventKeyCode,\n  key,\n  builtInKeyCode,\n  eventKeyName,\n  builtInKeyName\n) {\n  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;\n  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {\n    return isKeyNotMatch(builtInKeyName, eventKeyName)\n  } else if (mappedKeyCode) {\n    return isKeyNotMatch(mappedKeyCode, eventKeyCode)\n  } else if (eventKeyName) {\n    return hyphenate(eventKeyName) !== key\n  }\n  return eventKeyCode === undefined\n}\n\n/*  */\n\n/**\n * Runtime helper for merging v-bind=\"object\" into a VNode's data.\n */\nfunction bindObjectProps (\n  data,\n  tag,\n  value,\n  asProp,\n  isSync\n) {\n  if (value) {\n    if (!isObject(value)) {\n       true && warn(\n        'v-bind without argument expects an Object or Array value',\n        this\n      );\n    } else {\n      if (Array.isArray(value)) {\n        value = toObject(value);\n      }\n      var hash;\n      var loop = function ( key ) {\n        if (\n          key === 'class' ||\n          key === 'style' ||\n          isReservedAttribute(key)\n        ) {\n          hash = data;\n        } else {\n          var type = data.attrs && data.attrs.type;\n          hash = asProp || config.mustUseProp(tag, type, key)\n            ? data.domProps || (data.domProps = {})\n            : data.attrs || (data.attrs = {});\n        }\n        var camelizedKey = camelize(key);\n        var hyphenatedKey = hyphenate(key);\n        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {\n          hash[key] = value[key];\n\n          if (isSync) {\n            var on = data.on || (data.on = {});\n            on[(\"update:\" + key)] = function ($event) {\n              value[key] = $event;\n            };\n          }\n        }\n      };\n\n      for (var key in value) loop( key );\n    }\n  }\n  return data\n}\n\n/*  */\n\n/**\n * Runtime helper for rendering static trees.\n */\nfunction renderStatic (\n  index,\n  isInFor\n) {\n  var cached = this._staticTrees || (this._staticTrees = []);\n  var tree = cached[index];\n  // if has already-rendered static tree and not inside v-for,\n  // we can reuse the same tree.\n  if (tree && !isInFor) {\n    return tree\n  }\n  // otherwise, render a fresh tree.\n  tree = cached[index] = this.$options.staticRenderFns[index].call(\n    this._renderProxy,\n    null,\n    this // for render fns generated for functional component templates\n  );\n  markStatic(tree, (\"__static__\" + index), false);\n  return tree\n}\n\n/**\n * Runtime helper for v-once.\n * Effectively it means marking the node as static with a unique key.\n */\nfunction markOnce (\n  tree,\n  index,\n  key\n) {\n  markStatic(tree, (\"__once__\" + index + (key ? (\"_\" + key) : \"\")), true);\n  return tree\n}\n\nfunction markStatic (\n  tree,\n  key,\n  isOnce\n) {\n  if (Array.isArray(tree)) {\n    for (var i = 0; i < tree.length; i++) {\n      if (tree[i] && typeof tree[i] !== 'string') {\n        markStaticNode(tree[i], (key + \"_\" + i), isOnce);\n      }\n    }\n  } else {\n    markStaticNode(tree, key, isOnce);\n  }\n}\n\nfunction markStaticNode (node, key, isOnce) {\n  node.isStatic = true;\n  node.key = key;\n  node.isOnce = isOnce;\n}\n\n/*  */\n\nfunction bindObjectListeners (data, value) {\n  if (value) {\n    if (!isPlainObject(value)) {\n       true && warn(\n        'v-on without argument expects an Object value',\n        this\n      );\n    } else {\n      var on = data.on = data.on ? extend({}, data.on) : {};\n      for (var key in value) {\n        var existing = on[key];\n        var ours = value[key];\n        on[key] = existing ? [].concat(existing, ours) : ours;\n      }\n    }\n  }\n  return data\n}\n\n/*  */\n\nfunction resolveScopedSlots (\n  fns, // see flow/vnode\n  res,\n  // the following are added in 2.6\n  hasDynamicKeys,\n  contentHashKey\n) {\n  res = res || { $stable: !hasDynamicKeys };\n  for (var i = 0; i < fns.length; i++) {\n    var slot = fns[i];\n    if (Array.isArray(slot)) {\n      resolveScopedSlots(slot, res, hasDynamicKeys);\n    } else if (slot) {\n      // marker for reverse proxying v-slot without scope on this.$slots\n      if (slot.proxy) {\n        slot.fn.proxy = true;\n      }\n      res[slot.key] = slot.fn;\n    }\n  }\n  if (contentHashKey) {\n    (res).$key = contentHashKey;\n  }\n  return res\n}\n\n/*  */\n\nfunction bindDynamicKeys (baseObj, values) {\n  for (var i = 0; i < values.length; i += 2) {\n    var key = values[i];\n    if (typeof key === 'string' && key) {\n      baseObj[values[i]] = values[i + 1];\n    } else if ( true && key !== '' && key !== null) {\n      // null is a special value for explicitly removing a binding\n      warn(\n        (\"Invalid value for dynamic directive argument (expected string or null): \" + key),\n        this\n      );\n    }\n  }\n  return baseObj\n}\n\n// helper to dynamically append modifier runtime markers to event names.\n// ensure only append when value is already string, otherwise it will be cast\n// to string and cause the type check to miss.\nfunction prependModifier (value, symbol) {\n  return typeof value === 'string' ? symbol + value : value\n}\n\n/*  */\n\nfunction installRenderHelpers (target) {\n  target._o = markOnce;\n  target._n = toNumber;\n  target._s = toString;\n  target._l = renderList;\n  target._t = renderSlot;\n  target._q = looseEqual;\n  target._i = looseIndexOf;\n  target._m = renderStatic;\n  target._f = resolveFilter;\n  target._k = checkKeyCodes;\n  target._b = bindObjectProps;\n  target._v = createTextVNode;\n  target._e = createEmptyVNode;\n  target._u = resolveScopedSlots;\n  target._g = bindObjectListeners;\n  target._d = bindDynamicKeys;\n  target._p = prependModifier;\n}\n\n/*  */\n\nfunction FunctionalRenderContext (\n  data,\n  props,\n  children,\n  parent,\n  Ctor\n) {\n  var this$1 = this;\n\n  var options = Ctor.options;\n  // ensure the createElement function in functional components\n  // gets a unique context - this is necessary for correct named slot check\n  var contextVm;\n  if (hasOwn(parent, '_uid')) {\n    contextVm = Object.create(parent);\n    // $flow-disable-line\n    contextVm._original = parent;\n  } else {\n    // the context vm passed in is a functional context as well.\n    // in this case we want to make sure we are able to get a hold to the\n    // real context instance.\n    contextVm = parent;\n    // $flow-disable-line\n    parent = parent._original;\n  }\n  var isCompiled = isTrue(options._compiled);\n  var needNormalization = !isCompiled;\n\n  this.data = data;\n  this.props = props;\n  this.children = children;\n  this.parent = parent;\n  this.listeners = data.on || emptyObject;\n  this.injections = resolveInject(options.inject, parent);\n  this.slots = function () {\n    if (!this$1.$slots) {\n      normalizeScopedSlots(\n        data.scopedSlots,\n        this$1.$slots = resolveSlots(children, parent)\n      );\n    }\n    return this$1.$slots\n  };\n\n  Object.defineProperty(this, 'scopedSlots', ({\n    enumerable: true,\n    get: function get () {\n      return normalizeScopedSlots(data.scopedSlots, this.slots())\n    }\n  }));\n\n  // support for compiled functional template\n  if (isCompiled) {\n    // exposing $options for renderStatic()\n    this.$options = options;\n    // pre-resolve slots for renderSlot()\n    this.$slots = this.slots();\n    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);\n  }\n\n  if (options._scopeId) {\n    this._c = function (a, b, c, d) {\n      var vnode = createElement(contextVm, a, b, c, d, needNormalization);\n      if (vnode && !Array.isArray(vnode)) {\n        vnode.fnScopeId = options._scopeId;\n        vnode.fnContext = parent;\n      }\n      return vnode\n    };\n  } else {\n    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };\n  }\n}\n\ninstallRenderHelpers(FunctionalRenderContext.prototype);\n\nfunction createFunctionalComponent (\n  Ctor,\n  propsData,\n  data,\n  contextVm,\n  children\n) {\n  var options = Ctor.options;\n  var props = {};\n  var propOptions = options.props;\n  if (isDef(propOptions)) {\n    for (var key in propOptions) {\n      props[key] = validateProp(key, propOptions, propsData || emptyObject);\n    }\n  } else {\n    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }\n    if (isDef(data.props)) { mergeProps(props, data.props); }\n  }\n\n  var renderContext = new FunctionalRenderContext(\n    data,\n    props,\n    children,\n    contextVm,\n    Ctor\n  );\n\n  var vnode = options.render.call(null, renderContext._c, renderContext);\n\n  if (vnode instanceof VNode) {\n    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)\n  } else if (Array.isArray(vnode)) {\n    var vnodes = normalizeChildren(vnode) || [];\n    var res = new Array(vnodes.length);\n    for (var i = 0; i < vnodes.length; i++) {\n      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);\n    }\n    return res\n  }\n}\n\nfunction cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {\n  // #7817 clone node before setting fnContext, otherwise if the node is reused\n  // (e.g. it was from a cached normal slot) the fnContext causes named slots\n  // that should not be matched to match.\n  var clone = cloneVNode(vnode);\n  clone.fnContext = contextVm;\n  clone.fnOptions = options;\n  if (true) {\n    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;\n  }\n  if (data.slot) {\n    (clone.data || (clone.data = {})).slot = data.slot;\n  }\n  return clone\n}\n\nfunction mergeProps (to, from) {\n  for (var key in from) {\n    to[camelize(key)] = from[key];\n  }\n}\n\n/*  */\n\n/*  */\n\n/*  */\n\n/*  */\n\n// inline hooks to be invoked on component VNodes during patch\nvar componentVNodeHooks = {\n  init: function init (vnode, hydrating) {\n    if (\n      vnode.componentInstance &&\n      !vnode.componentInstance._isDestroyed &&\n      vnode.data.keepAlive\n    ) {\n      // kept-alive components, treat as a patch\n      var mountedNode = vnode; // work around flow\n      componentVNodeHooks.prepatch(mountedNode, mountedNode);\n    } else {\n      var child = vnode.componentInstance = createComponentInstanceForVnode(\n        vnode,\n        activeInstance\n      );\n      child.$mount(hydrating ? vnode.elm : undefined, hydrating);\n    }\n  },\n\n  prepatch: function prepatch (oldVnode, vnode) {\n    var options = vnode.componentOptions;\n    var child = vnode.componentInstance = oldVnode.componentInstance;\n    updateChildComponent(\n      child,\n      options.propsData, // updated props\n      options.listeners, // updated listeners\n      vnode, // new parent vnode\n      options.children // new children\n    );\n  },\n\n  insert: function insert (vnode) {\n    var context = vnode.context;\n    var componentInstance = vnode.componentInstance;\n    if (!componentInstance._isMounted) {\n      componentInstance._isMounted = true;\n      callHook(componentInstance, 'mounted');\n    }\n    if (vnode.data.keepAlive) {\n      if (context._isMounted) {\n        // vue-router#1212\n        // During updates, a kept-alive component's child components may\n        // change, so directly walking the tree here may call activated hooks\n        // on incorrect children. Instead we push them into a queue which will\n        // be processed after the whole patch process ended.\n        queueActivatedComponent(componentInstance);\n      } else {\n        activateChildComponent(componentInstance, true /* direct */);\n      }\n    }\n  },\n\n  destroy: function destroy (vnode) {\n    var componentInstance = vnode.componentInstance;\n    if (!componentInstance._isDestroyed) {\n      if (!vnode.data.keepAlive) {\n        componentInstance.$destroy();\n      } else {\n        deactivateChildComponent(componentInstance, true /* direct */);\n      }\n    }\n  }\n};\n\nvar hooksToMerge = Object.keys(componentVNodeHooks);\n\nfunction createComponent (\n  Ctor,\n  data,\n  context,\n  children,\n  tag\n) {\n  if (isUndef(Ctor)) {\n    return\n  }\n\n  var baseCtor = context.$options._base;\n\n  // plain options object: turn it into a constructor\n  if (isObject(Ctor)) {\n    Ctor = baseCtor.extend(Ctor);\n  }\n\n  // if at this stage it's not a constructor or an async component factory,\n  // reject.\n  if (typeof Ctor !== 'function') {\n    if (true) {\n      warn((\"Invalid Component definition: \" + (String(Ctor))), context);\n    }\n    return\n  }\n\n  // async component\n  var asyncFactory;\n  if (isUndef(Ctor.cid)) {\n    asyncFactory = Ctor;\n    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);\n    if (Ctor === undefined) {\n      // return a placeholder node for async component, which is rendered\n      // as a comment node but preserves all the raw information for the node.\n      // the information will be used for async server-rendering and hydration.\n      return createAsyncPlaceholder(\n        asyncFactory,\n        data,\n        context,\n        children,\n        tag\n      )\n    }\n  }\n\n  data = data || {};\n\n  // resolve constructor options in case global mixins are applied after\n  // component constructor creation\n  resolveConstructorOptions(Ctor);\n\n  // transform component v-model data into props & events\n  if (isDef(data.model)) {\n    transformModel(Ctor.options, data);\n  }\n\n  // extract props\n  var propsData = extractPropsFromVNodeData(data, Ctor, tag);\n\n  // functional component\n  if (isTrue(Ctor.options.functional)) {\n    return createFunctionalComponent(Ctor, propsData, data, context, children)\n  }\n\n  // extract listeners, since these needs to be treated as\n  // child component listeners instead of DOM listeners\n  var listeners = data.on;\n  // replace with listeners with .native modifier\n  // so it gets processed during parent component patch.\n  data.on = data.nativeOn;\n\n  if (isTrue(Ctor.options.abstract)) {\n    // abstract components do not keep anything\n    // other than props & listeners & slot\n\n    // work around flow\n    var slot = data.slot;\n    data = {};\n    if (slot) {\n      data.slot = slot;\n    }\n  }\n\n  // install component management hooks onto the placeholder node\n  installComponentHooks(data);\n\n  // return a placeholder vnode\n  var name = Ctor.options.name || tag;\n  var vnode = new VNode(\n    (\"vue-component-\" + (Ctor.cid) + (name ? (\"-\" + name) : '')),\n    data, undefined, undefined, undefined, context,\n    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },\n    asyncFactory\n  );\n\n  return vnode\n}\n\nfunction createComponentInstanceForVnode (\n  // we know it's MountedComponentVNode but flow doesn't\n  vnode,\n  // activeInstance in lifecycle state\n  parent\n) {\n  var options = {\n    _isComponent: true,\n    _parentVnode: vnode,\n    parent: parent\n  };\n  // check inline-template render functions\n  var inlineTemplate = vnode.data.inlineTemplate;\n  if (isDef(inlineTemplate)) {\n    options.render = inlineTemplate.render;\n    options.staticRenderFns = inlineTemplate.staticRenderFns;\n  }\n  return new vnode.componentOptions.Ctor(options)\n}\n\nfunction installComponentHooks (data) {\n  var hooks = data.hook || (data.hook = {});\n  for (var i = 0; i < hooksToMerge.length; i++) {\n    var key = hooksToMerge[i];\n    var existing = hooks[key];\n    var toMerge = componentVNodeHooks[key];\n    if (existing !== toMerge && !(existing && existing._merged)) {\n      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;\n    }\n  }\n}\n\nfunction mergeHook$1 (f1, f2) {\n  var merged = function (a, b) {\n    // flow complains about extra args which is why we use any\n    f1(a, b);\n    f2(a, b);\n  };\n  merged._merged = true;\n  return merged\n}\n\n// transform component v-model info (value and callback) into\n// prop and event handler respectively.\nfunction transformModel (options, data) {\n  var prop = (options.model && options.model.prop) || 'value';\n  var event = (options.model && options.model.event) || 'input'\n  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;\n  var on = data.on || (data.on = {});\n  var existing = on[event];\n  var callback = data.model.callback;\n  if (isDef(existing)) {\n    if (\n      Array.isArray(existing)\n        ? existing.indexOf(callback) === -1\n        : existing !== callback\n    ) {\n      on[event] = [callback].concat(existing);\n    }\n  } else {\n    on[event] = callback;\n  }\n}\n\n/*  */\n\nvar SIMPLE_NORMALIZE = 1;\nvar ALWAYS_NORMALIZE = 2;\n\n// wrapper function for providing a more flexible interface\n// without getting yelled at by flow\nfunction createElement (\n  context,\n  tag,\n  data,\n  children,\n  normalizationType,\n  alwaysNormalize\n) {\n  if (Array.isArray(data) || isPrimitive(data)) {\n    normalizationType = children;\n    children = data;\n    data = undefined;\n  }\n  if (isTrue(alwaysNormalize)) {\n    normalizationType = ALWAYS_NORMALIZE;\n  }\n  return _createElement(context, tag, data, children, normalizationType)\n}\n\nfunction _createElement (\n  context,\n  tag,\n  data,\n  children,\n  normalizationType\n) {\n  if (isDef(data) && isDef((data).__ob__)) {\n     true && warn(\n      \"Avoid using observed data object as vnode data: \" + (JSON.stringify(data)) + \"\\n\" +\n      'Always create fresh vnode data objects in each render!',\n      context\n    );\n    return createEmptyVNode()\n  }\n  // object syntax in v-bind\n  if (isDef(data) && isDef(data.is)) {\n    tag = data.is;\n  }\n  if (!tag) {\n    // in case of component :is set to falsy value\n    return createEmptyVNode()\n  }\n  // warn against non-primitive key\n  if ( true &&\n    isDef(data) && isDef(data.key) && !isPrimitive(data.key)\n  ) {\n    {\n      warn(\n        'Avoid using non-primitive value as key, ' +\n        'use string/number value instead.',\n        context\n      );\n    }\n  }\n  // support single function children as default scoped slot\n  if (Array.isArray(children) &&\n    typeof children[0] === 'function'\n  ) {\n    data = data || {};\n    data.scopedSlots = { default: children[0] };\n    children.length = 0;\n  }\n  if (normalizationType === ALWAYS_NORMALIZE) {\n    children = normalizeChildren(children);\n  } else if (normalizationType === SIMPLE_NORMALIZE) {\n    children = simpleNormalizeChildren(children);\n  }\n  var vnode, ns;\n  if (typeof tag === 'string') {\n    var Ctor;\n    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);\n    if (config.isReservedTag(tag)) {\n      // platform built-in elements\n      if ( true && isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {\n        warn(\n          (\"The .native modifier for v-on is only valid on components but it was used on <\" + tag + \">.\"),\n          context\n        );\n      }\n      vnode = new VNode(\n        config.parsePlatformTagName(tag), data, children,\n        undefined, undefined, context\n      );\n    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {\n      // component\n      vnode = createComponent(Ctor, data, context, children, tag);\n    } else {\n      // unknown or unlisted namespaced elements\n      // check at runtime because it may get assigned a namespace when its\n      // parent normalizes children\n      vnode = new VNode(\n        tag, data, children,\n        undefined, undefined, context\n      );\n    }\n  } else {\n    // direct component options / constructor\n    vnode = createComponent(tag, data, context, children);\n  }\n  if (Array.isArray(vnode)) {\n    return vnode\n  } else if (isDef(vnode)) {\n    if (isDef(ns)) { applyNS(vnode, ns); }\n    if (isDef(data)) { registerDeepBindings(data); }\n    return vnode\n  } else {\n    return createEmptyVNode()\n  }\n}\n\nfunction applyNS (vnode, ns, force) {\n  vnode.ns = ns;\n  if (vnode.tag === 'foreignObject') {\n    // use default namespace inside foreignObject\n    ns = undefined;\n    force = true;\n  }\n  if (isDef(vnode.children)) {\n    for (var i = 0, l = vnode.children.length; i < l; i++) {\n      var child = vnode.children[i];\n      if (isDef(child.tag) && (\n        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {\n        applyNS(child, ns, force);\n      }\n    }\n  }\n}\n\n// ref #5318\n// necessary to ensure parent re-render when deep bindings like :style and\n// :class are used on slot nodes\nfunction registerDeepBindings (data) {\n  if (isObject(data.style)) {\n    traverse(data.style);\n  }\n  if (isObject(data.class)) {\n    traverse(data.class);\n  }\n}\n\n/*  */\n\nfunction initRender (vm) {\n  vm._vnode = null; // the root of the child tree\n  vm._staticTrees = null; // v-once cached trees\n  var options = vm.$options;\n  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree\n  var renderContext = parentVnode && parentVnode.context;\n  vm.$slots = resolveSlots(options._renderChildren, renderContext);\n  vm.$scopedSlots = emptyObject;\n  // bind the createElement fn to this instance\n  // so that we get proper render context inside it.\n  // args order: tag, data, children, normalizationType, alwaysNormalize\n  // internal version is used by render functions compiled from templates\n  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };\n  // normalization is always applied for the public version, used in\n  // user-written render functions.\n  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };\n\n  // $attrs & $listeners are exposed for easier HOC creation.\n  // they need to be reactive so that HOCs using them are always updated\n  var parentData = parentVnode && parentVnode.data;\n\n  /* istanbul ignore else */\n  if (true) {\n    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {\n      !isUpdatingChildComponent && warn(\"$attrs is readonly.\", vm);\n    }, true);\n    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {\n      !isUpdatingChildComponent && warn(\"$listeners is readonly.\", vm);\n    }, true);\n  } else {}\n}\n\nvar currentRenderingInstance = null;\n\nfunction renderMixin (Vue) {\n  // install runtime convenience helpers\n  installRenderHelpers(Vue.prototype);\n\n  Vue.prototype.$nextTick = function (fn) {\n    return nextTick(fn, this)\n  };\n\n  Vue.prototype._render = function () {\n    var vm = this;\n    var ref = vm.$options;\n    var render = ref.render;\n    var _parentVnode = ref._parentVnode;\n\n    if (_parentVnode) {\n      vm.$scopedSlots = normalizeScopedSlots(\n        _parentVnode.data.scopedSlots,\n        vm.$slots,\n        vm.$scopedSlots\n      );\n    }\n\n    // set parent vnode. this allows render functions to have access\n    // to the data on the placeholder node.\n    vm.$vnode = _parentVnode;\n    // render self\n    var vnode;\n    try {\n      // There's no need to maintain a stack because all render fns are called\n      // separately from one another. Nested component's render fns are called\n      // when parent component is patched.\n      currentRenderingInstance = vm;\n      vnode = render.call(vm._renderProxy, vm.$createElement);\n    } catch (e) {\n      handleError(e, vm, \"render\");\n      // return error render result,\n      // or previous vnode to prevent render error causing blank component\n      /* istanbul ignore else */\n      if ( true && vm.$options.renderError) {\n        try {\n          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);\n        } catch (e) {\n          handleError(e, vm, \"renderError\");\n          vnode = vm._vnode;\n        }\n      } else {\n        vnode = vm._vnode;\n      }\n    } finally {\n      currentRenderingInstance = null;\n    }\n    // if the returned array contains only a single node, allow it\n    if (Array.isArray(vnode) && vnode.length === 1) {\n      vnode = vnode[0];\n    }\n    // return empty vnode in case the render function errored out\n    if (!(vnode instanceof VNode)) {\n      if ( true && Array.isArray(vnode)) {\n        warn(\n          'Multiple root nodes returned from render function. Render function ' +\n          'should return a single root node.',\n          vm\n        );\n      }\n      vnode = createEmptyVNode();\n    }\n    // set parent\n    vnode.parent = _parentVnode;\n    return vnode\n  };\n}\n\n/*  */\n\nfunction ensureCtor (comp, base) {\n  if (\n    comp.__esModule ||\n    (hasSymbol && comp[Symbol.toStringTag] === 'Module')\n  ) {\n    comp = comp.default;\n  }\n  return isObject(comp)\n    ? base.extend(comp)\n    : comp\n}\n\nfunction createAsyncPlaceholder (\n  factory,\n  data,\n  context,\n  children,\n  tag\n) {\n  var node = createEmptyVNode();\n  node.asyncFactory = factory;\n  node.asyncMeta = { data: data, context: context, children: children, tag: tag };\n  return node\n}\n\nfunction resolveAsyncComponent (\n  factory,\n  baseCtor\n) {\n  if (isTrue(factory.error) && isDef(factory.errorComp)) {\n    return factory.errorComp\n  }\n\n  if (isDef(factory.resolved)) {\n    return factory.resolved\n  }\n\n  var owner = currentRenderingInstance;\n  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {\n    // already pending\n    factory.owners.push(owner);\n  }\n\n  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {\n    return factory.loadingComp\n  }\n\n  if (owner && !isDef(factory.owners)) {\n    var owners = factory.owners = [owner];\n    var sync = true;\n    var timerLoading = null;\n    var timerTimeout = null\n\n    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });\n\n    var forceRender = function (renderCompleted) {\n      for (var i = 0, l = owners.length; i < l; i++) {\n        (owners[i]).$forceUpdate();\n      }\n\n      if (renderCompleted) {\n        owners.length = 0;\n        if (timerLoading !== null) {\n          clearTimeout(timerLoading);\n          timerLoading = null;\n        }\n        if (timerTimeout !== null) {\n          clearTimeout(timerTimeout);\n          timerTimeout = null;\n        }\n      }\n    };\n\n    var resolve = once(function (res) {\n      // cache resolved\n      factory.resolved = ensureCtor(res, baseCtor);\n      // invoke callbacks only if this is not a synchronous resolve\n      // (async resolves are shimmed as synchronous during SSR)\n      if (!sync) {\n        forceRender(true);\n      } else {\n        owners.length = 0;\n      }\n    });\n\n    var reject = once(function (reason) {\n       true && warn(\n        \"Failed to resolve async component: \" + (String(factory)) +\n        (reason ? (\"\\nReason: \" + reason) : '')\n      );\n      if (isDef(factory.errorComp)) {\n        factory.error = true;\n        forceRender(true);\n      }\n    });\n\n    var res = factory(resolve, reject);\n\n    if (isObject(res)) {\n      if (isPromise(res)) {\n        // () => Promise\n        if (isUndef(factory.resolved)) {\n          res.then(resolve, reject);\n        }\n      } else if (isPromise(res.component)) {\n        res.component.then(resolve, reject);\n\n        if (isDef(res.error)) {\n          factory.errorComp = ensureCtor(res.error, baseCtor);\n        }\n\n        if (isDef(res.loading)) {\n          factory.loadingComp = ensureCtor(res.loading, baseCtor);\n          if (res.delay === 0) {\n            factory.loading = true;\n          } else {\n            timerLoading = setTimeout(function () {\n              timerLoading = null;\n              if (isUndef(factory.resolved) && isUndef(factory.error)) {\n                factory.loading = true;\n                forceRender(false);\n              }\n            }, res.delay || 200);\n          }\n        }\n\n        if (isDef(res.timeout)) {\n          timerTimeout = setTimeout(function () {\n            timerTimeout = null;\n            if (isUndef(factory.resolved)) {\n              reject(\n                 true\n                  ? (\"timeout (\" + (res.timeout) + \"ms)\")\n                  : undefined\n              );\n            }\n          }, res.timeout);\n        }\n      }\n    }\n\n    sync = false;\n    // return in case resolved synchronously\n    return factory.loading\n      ? factory.loadingComp\n      : factory.resolved\n  }\n}\n\n/*  */\n\nfunction getFirstComponentChild (children) {\n  if (Array.isArray(children)) {\n    for (var i = 0; i < children.length; i++) {\n      var c = children[i];\n      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {\n        return c\n      }\n    }\n  }\n}\n\n/*  */\n\n/*  */\n\nfunction initEvents (vm) {\n  vm._events = Object.create(null);\n  vm._hasHookEvent = false;\n  // init parent attached events\n  var listeners = vm.$options._parentListeners;\n  if (listeners) {\n    updateComponentListeners(vm, listeners);\n  }\n}\n\nvar target;\n\nfunction add (event, fn) {\n  target.$on(event, fn);\n}\n\nfunction remove$1 (event, fn) {\n  target.$off(event, fn);\n}\n\nfunction createOnceHandler (event, fn) {\n  var _target = target;\n  return function onceHandler () {\n    var res = fn.apply(null, arguments);\n    if (res !== null) {\n      _target.$off(event, onceHandler);\n    }\n  }\n}\n\nfunction updateComponentListeners (\n  vm,\n  listeners,\n  oldListeners\n) {\n  target = vm;\n  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);\n  target = undefined;\n}\n\nfunction eventsMixin (Vue) {\n  var hookRE = /^hook:/;\n  Vue.prototype.$on = function (event, fn) {\n    var vm = this;\n    if (Array.isArray(event)) {\n      for (var i = 0, l = event.length; i < l; i++) {\n        vm.$on(event[i], fn);\n      }\n    } else {\n      (vm._events[event] || (vm._events[event] = [])).push(fn);\n      // optimize hook:event cost by using a boolean flag marked at registration\n      // instead of a hash lookup\n      if (hookRE.test(event)) {\n        vm._hasHookEvent = true;\n      }\n    }\n    return vm\n  };\n\n  Vue.prototype.$once = function (event, fn) {\n    var vm = this;\n    function on () {\n      vm.$off(event, on);\n      fn.apply(vm, arguments);\n    }\n    on.fn = fn;\n    vm.$on(event, on);\n    return vm\n  };\n\n  Vue.prototype.$off = function (event, fn) {\n    var vm = this;\n    // all\n    if (!arguments.length) {\n      vm._events = Object.create(null);\n      return vm\n    }\n    // array of events\n    if (Array.isArray(event)) {\n      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {\n        vm.$off(event[i$1], fn);\n      }\n      return vm\n    }\n    // specific event\n    var cbs = vm._events[event];\n    if (!cbs) {\n      return vm\n    }\n    if (!fn) {\n      vm._events[event] = null;\n      return vm\n    }\n    // specific handler\n    var cb;\n    var i = cbs.length;\n    while (i--) {\n      cb = cbs[i];\n      if (cb === fn || cb.fn === fn) {\n        cbs.splice(i, 1);\n        break\n      }\n    }\n    return vm\n  };\n\n  Vue.prototype.$emit = function (event) {\n    var vm = this;\n    if (true) {\n      var lowerCaseEvent = event.toLowerCase();\n      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {\n        tip(\n          \"Event \\\"\" + lowerCaseEvent + \"\\\" is emitted in component \" +\n          (formatComponentName(vm)) + \" but the handler is registered for \\\"\" + event + \"\\\". \" +\n          \"Note that HTML attributes are case-insensitive and you cannot use \" +\n          \"v-on to listen to camelCase events when using in-DOM templates. \" +\n          \"You should probably use \\\"\" + (hyphenate(event)) + \"\\\" instead of \\\"\" + event + \"\\\".\"\n        );\n      }\n    }\n    var cbs = vm._events[event];\n    if (cbs) {\n      cbs = cbs.length > 1 ? toArray(cbs) : cbs;\n      var args = toArray(arguments, 1);\n      var info = \"event handler for \\\"\" + event + \"\\\"\";\n      for (var i = 0, l = cbs.length; i < l; i++) {\n        invokeWithErrorHandling(cbs[i], vm, args, vm, info);\n      }\n    }\n    return vm\n  };\n}\n\n/*  */\n\nvar activeInstance = null;\nvar isUpdatingChildComponent = false;\n\nfunction setActiveInstance(vm) {\n  var prevActiveInstance = activeInstance;\n  activeInstance = vm;\n  return function () {\n    activeInstance = prevActiveInstance;\n  }\n}\n\nfunction initLifecycle (vm) {\n  var options = vm.$options;\n\n  // locate first non-abstract parent\n  var parent = options.parent;\n  if (parent && !options.abstract) {\n    while (parent.$options.abstract && parent.$parent) {\n      parent = parent.$parent;\n    }\n    parent.$children.push(vm);\n  }\n\n  vm.$parent = parent;\n  vm.$root = parent ? parent.$root : vm;\n\n  vm.$children = [];\n  vm.$refs = {};\n\n  vm._watcher = null;\n  vm._inactive = null;\n  vm._directInactive = false;\n  vm._isMounted = false;\n  vm._isDestroyed = false;\n  vm._isBeingDestroyed = false;\n}\n\nfunction lifecycleMixin (Vue) {\n  Vue.prototype._update = function (vnode, hydrating) {\n    var vm = this;\n    var prevEl = vm.$el;\n    var prevVnode = vm._vnode;\n    var restoreActiveInstance = setActiveInstance(vm);\n    vm._vnode = vnode;\n    // Vue.prototype.__patch__ is injected in entry points\n    // based on the rendering backend used.\n    if (!prevVnode) {\n      // initial render\n      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);\n    } else {\n      // updates\n      vm.$el = vm.__patch__(prevVnode, vnode);\n    }\n    restoreActiveInstance();\n    // update __vue__ reference\n    if (prevEl) {\n      prevEl.__vue__ = null;\n    }\n    if (vm.$el) {\n      vm.$el.__vue__ = vm;\n    }\n    // if parent is an HOC, update its $el as well\n    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {\n      vm.$parent.$el = vm.$el;\n    }\n    // updated hook is called by the scheduler to ensure that children are\n    // updated in a parent's updated hook.\n  };\n\n  Vue.prototype.$forceUpdate = function () {\n    var vm = this;\n    if (vm._watcher) {\n      vm._watcher.update();\n    }\n  };\n\n  Vue.prototype.$destroy = function () {\n    var vm = this;\n    if (vm._isBeingDestroyed) {\n      return\n    }\n    callHook(vm, 'beforeDestroy');\n    vm._isBeingDestroyed = true;\n    // remove self from parent\n    var parent = vm.$parent;\n    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {\n      remove(parent.$children, vm);\n    }\n    // teardown watchers\n    if (vm._watcher) {\n      vm._watcher.teardown();\n    }\n    var i = vm._watchers.length;\n    while (i--) {\n      vm._watchers[i].teardown();\n    }\n    // remove reference from data ob\n    // frozen object may not have observer.\n    if (vm._data.__ob__) {\n      vm._data.__ob__.vmCount--;\n    }\n    // call the last hook...\n    vm._isDestroyed = true;\n    // invoke destroy hooks on current rendered tree\n    vm.__patch__(vm._vnode, null);\n    // fire destroyed hook\n    callHook(vm, 'destroyed');\n    // turn off all instance listeners.\n    vm.$off();\n    // remove __vue__ reference\n    if (vm.$el) {\n      vm.$el.__vue__ = null;\n    }\n    // release circular reference (#6759)\n    if (vm.$vnode) {\n      vm.$vnode.parent = null;\n    }\n  };\n}\n\nfunction mountComponent (\n  vm,\n  el,\n  hydrating\n) {\n  vm.$el = el;\n  if (!vm.$options.render) {\n    vm.$options.render = createEmptyVNode;\n    if (true) {\n      /* istanbul ignore if */\n      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||\n        vm.$options.el || el) {\n        warn(\n          'You are using the runtime-only build of Vue where the template ' +\n          'compiler is not available. Either pre-compile the templates into ' +\n          'render functions, or use the compiler-included build.',\n          vm\n        );\n      } else {\n        warn(\n          'Failed to mount component: template or render function not defined.',\n          vm\n        );\n      }\n    }\n  }\n  callHook(vm, 'beforeMount');\n\n  var updateComponent;\n  /* istanbul ignore if */\n  if ( true && config.performance && mark) {\n    updateComponent = function () {\n      var name = vm._name;\n      var id = vm._uid;\n      var startTag = \"vue-perf-start:\" + id;\n      var endTag = \"vue-perf-end:\" + id;\n\n      mark(startTag);\n      var vnode = vm._render();\n      mark(endTag);\n      measure((\"vue \" + name + \" render\"), startTag, endTag);\n\n      mark(startTag);\n      vm._update(vnode, hydrating);\n      mark(endTag);\n      measure((\"vue \" + name + \" patch\"), startTag, endTag);\n    };\n  } else {\n    updateComponent = function () {\n      vm._update(vm._render(), hydrating);\n    };\n  }\n\n  // we set this to vm._watcher inside the watcher's constructor\n  // since the watcher's initial patch may call $forceUpdate (e.g. inside child\n  // component's mounted hook), which relies on vm._watcher being already defined\n  new Watcher(vm, updateComponent, noop, {\n    before: function before () {\n      if (vm._isMounted && !vm._isDestroyed) {\n        callHook(vm, 'beforeUpdate');\n      }\n    }\n  }, true /* isRenderWatcher */);\n  hydrating = false;\n\n  // manually mounted instance, call mounted on self\n  // mounted is called for render-created child components in its inserted hook\n  if (vm.$vnode == null) {\n    vm._isMounted = true;\n    callHook(vm, 'mounted');\n  }\n  return vm\n}\n\nfunction updateChildComponent (\n  vm,\n  propsData,\n  listeners,\n  parentVnode,\n  renderChildren\n) {\n  if (true) {\n    isUpdatingChildComponent = true;\n  }\n\n  // determine whether component has slot children\n  // we need to do this before overwriting $options._renderChildren.\n\n  // check if there are dynamic scopedSlots (hand-written or compiled but with\n  // dynamic slot names). Static scoped slots compiled from template has the\n  // \"$stable\" marker.\n  var newScopedSlots = parentVnode.data.scopedSlots;\n  var oldScopedSlots = vm.$scopedSlots;\n  var hasDynamicScopedSlot = !!(\n    (newScopedSlots && !newScopedSlots.$stable) ||\n    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||\n    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||\n    (!newScopedSlots && vm.$scopedSlots.$key)\n  );\n\n  // Any static slot children from the parent may have changed during parent's\n  // update. Dynamic scoped slots may also have changed. In such cases, a forced\n  // update is necessary to ensure correctness.\n  var needsForceUpdate = !!(\n    renderChildren ||               // has new static slots\n    vm.$options._renderChildren ||  // has old static slots\n    hasDynamicScopedSlot\n  );\n\n  vm.$options._parentVnode = parentVnode;\n  vm.$vnode = parentVnode; // update vm's placeholder node without re-render\n\n  if (vm._vnode) { // update child tree's parent\n    vm._vnode.parent = parentVnode;\n  }\n  vm.$options._renderChildren = renderChildren;\n\n  // update $attrs and $listeners hash\n  // these are also reactive so they may trigger child update if the child\n  // used them during render\n  vm.$attrs = parentVnode.data.attrs || emptyObject;\n  vm.$listeners = listeners || emptyObject;\n\n  // update props\n  if (propsData && vm.$options.props) {\n    toggleObserving(false);\n    var props = vm._props;\n    var propKeys = vm.$options._propKeys || [];\n    for (var i = 0; i < propKeys.length; i++) {\n      var key = propKeys[i];\n      var propOptions = vm.$options.props; // wtf flow?\n      props[key] = validateProp(key, propOptions, propsData, vm);\n    }\n    toggleObserving(true);\n    // keep a copy of raw propsData\n    vm.$options.propsData = propsData;\n  }\n\n  // update listeners\n  listeners = listeners || emptyObject;\n  var oldListeners = vm.$options._parentListeners;\n  vm.$options._parentListeners = listeners;\n  updateComponentListeners(vm, listeners, oldListeners);\n\n  // resolve slots + force update if has children\n  if (needsForceUpdate) {\n    vm.$slots = resolveSlots(renderChildren, parentVnode.context);\n    vm.$forceUpdate();\n  }\n\n  if (true) {\n    isUpdatingChildComponent = false;\n  }\n}\n\nfunction isInInactiveTree (vm) {\n  while (vm && (vm = vm.$parent)) {\n    if (vm._inactive) { return true }\n  }\n  return false\n}\n\nfunction activateChildComponent (vm, direct) {\n  if (direct) {\n    vm._directInactive = false;\n    if (isInInactiveTree(vm)) {\n      return\n    }\n  } else if (vm._directInactive) {\n    return\n  }\n  if (vm._inactive || vm._inactive === null) {\n    vm._inactive = false;\n    for (var i = 0; i < vm.$children.length; i++) {\n      activateChildComponent(vm.$children[i]);\n    }\n    callHook(vm, 'activated');\n  }\n}\n\nfunction deactivateChildComponent (vm, direct) {\n  if (direct) {\n    vm._directInactive = true;\n    if (isInInactiveTree(vm)) {\n      return\n    }\n  }\n  if (!vm._inactive) {\n    vm._inactive = true;\n    for (var i = 0; i < vm.$children.length; i++) {\n      deactivateChildComponent(vm.$children[i]);\n    }\n    callHook(vm, 'deactivated');\n  }\n}\n\nfunction callHook (vm, hook) {\n  // #7573 disable dep collection when invoking lifecycle hooks\n  pushTarget();\n  var handlers = vm.$options[hook];\n  var info = hook + \" hook\";\n  if (handlers) {\n    for (var i = 0, j = handlers.length; i < j; i++) {\n      invokeWithErrorHandling(handlers[i], vm, null, vm, info);\n    }\n  }\n  if (vm._hasHookEvent) {\n    vm.$emit('hook:' + hook);\n  }\n  popTarget();\n}\n\n/*  */\n\nvar MAX_UPDATE_COUNT = 100;\n\nvar queue = [];\nvar activatedChildren = [];\nvar has = {};\nvar circular = {};\nvar waiting = false;\nvar flushing = false;\nvar index = 0;\n\n/**\n * Reset the scheduler's state.\n */\nfunction resetSchedulerState () {\n  index = queue.length = activatedChildren.length = 0;\n  has = {};\n  if (true) {\n    circular = {};\n  }\n  waiting = flushing = false;\n}\n\n// Async edge case #6566 requires saving the timestamp when event listeners are\n// attached. However, calling performance.now() has a perf overhead especially\n// if the page has thousands of event listeners. Instead, we take a timestamp\n// every time the scheduler flushes and use that for all event listeners\n// attached during that flush.\nvar currentFlushTimestamp = 0;\n\n// Async edge case fix requires storing an event listener's attach timestamp.\nvar getNow = Date.now;\n\n// Determine what event timestamp the browser is using. Annoyingly, the\n// timestamp can either be hi-res (relative to page load) or low-res\n// (relative to UNIX epoch), so in order to compare time we have to use the\n// same timestamp type when saving the flush timestamp.\n// All IE versions use low-res event timestamps, and have problematic clock\n// implementations (#9632)\nif (inBrowser && !isIE) {\n  var performance = window.performance;\n  if (\n    performance &&\n    typeof performance.now === 'function' &&\n    getNow() > document.createEvent('Event').timeStamp\n  ) {\n    // if the event timestamp, although evaluated AFTER the Date.now(), is\n    // smaller than it, it means the event is using a hi-res timestamp,\n    // and we need to use the hi-res version for event listener timestamps as\n    // well.\n    getNow = function () { return performance.now(); };\n  }\n}\n\n/**\n * Flush both queues and run the watchers.\n */\nfunction flushSchedulerQueue () {\n  currentFlushTimestamp = getNow();\n  flushing = true;\n  var watcher, id;\n\n  // Sort queue before flush.\n  // This ensures that:\n  // 1. Components are updated from parent to child. (because parent is always\n  //    created before the child)\n  // 2. A component's user watchers are run before its render watcher (because\n  //    user watchers are created before the render watcher)\n  // 3. If a component is destroyed during a parent component's watcher run,\n  //    its watchers can be skipped.\n  queue.sort(function (a, b) { return a.id - b.id; });\n\n  // do not cache length because more watchers might be pushed\n  // as we run existing watchers\n  for (index = 0; index < queue.length; index++) {\n    watcher = queue[index];\n    if (watcher.before) {\n      watcher.before();\n    }\n    id = watcher.id;\n    has[id] = null;\n    watcher.run();\n    // in dev build, check and stop circular updates.\n    if ( true && has[id] != null) {\n      circular[id] = (circular[id] || 0) + 1;\n      if (circular[id] > MAX_UPDATE_COUNT) {\n        warn(\n          'You may have an infinite update loop ' + (\n            watcher.user\n              ? (\"in watcher with expression \\\"\" + (watcher.expression) + \"\\\"\")\n              : \"in a component render function.\"\n          ),\n          watcher.vm\n        );\n        break\n      }\n    }\n  }\n\n  // keep copies of post queues before resetting state\n  var activatedQueue = activatedChildren.slice();\n  var updatedQueue = queue.slice();\n\n  resetSchedulerState();\n\n  // call component updated and activated hooks\n  callActivatedHooks(activatedQueue);\n  callUpdatedHooks(updatedQueue);\n\n  // devtool hook\n  /* istanbul ignore if */\n  if (devtools && config.devtools) {\n    devtools.emit('flush');\n  }\n}\n\nfunction callUpdatedHooks (queue) {\n  var i = queue.length;\n  while (i--) {\n    var watcher = queue[i];\n    var vm = watcher.vm;\n    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {\n      callHook(vm, 'updated');\n    }\n  }\n}\n\n/**\n * Queue a kept-alive component that was activated during patch.\n * The queue will be processed after the entire tree has been patched.\n */\nfunction queueActivatedComponent (vm) {\n  // setting _inactive to false here so that a render function can\n  // rely on checking whether it's in an inactive tree (e.g. router-view)\n  vm._inactive = false;\n  activatedChildren.push(vm);\n}\n\nfunction callActivatedHooks (queue) {\n  for (var i = 0; i < queue.length; i++) {\n    queue[i]._inactive = true;\n    activateChildComponent(queue[i], true /* true */);\n  }\n}\n\n/**\n * Push a watcher into the watcher queue.\n * Jobs with duplicate IDs will be skipped unless it's\n * pushed when the queue is being flushed.\n */\nfunction queueWatcher (watcher) {\n  var id = watcher.id;\n  if (has[id] == null) {\n    has[id] = true;\n    if (!flushing) {\n      queue.push(watcher);\n    } else {\n      // if already flushing, splice the watcher based on its id\n      // if already past its id, it will be run next immediately.\n      var i = queue.length - 1;\n      while (i > index && queue[i].id > watcher.id) {\n        i--;\n      }\n      queue.splice(i + 1, 0, watcher);\n    }\n    // queue the flush\n    if (!waiting) {\n      waiting = true;\n\n      if ( true && !config.async) {\n        flushSchedulerQueue();\n        return\n      }\n      nextTick(flushSchedulerQueue);\n    }\n  }\n}\n\n/*  */\n\n\n\nvar uid$2 = 0;\n\n/**\n * A watcher parses an expression, collects dependencies,\n * and fires callback when the expression value changes.\n * This is used for both the $watch() api and directives.\n */\nvar Watcher = function Watcher (\n  vm,\n  expOrFn,\n  cb,\n  options,\n  isRenderWatcher\n) {\n  this.vm = vm;\n  if (isRenderWatcher) {\n    vm._watcher = this;\n  }\n  vm._watchers.push(this);\n  // options\n  if (options) {\n    this.deep = !!options.deep;\n    this.user = !!options.user;\n    this.lazy = !!options.lazy;\n    this.sync = !!options.sync;\n    this.before = options.before;\n  } else {\n    this.deep = this.user = this.lazy = this.sync = false;\n  }\n  this.cb = cb;\n  this.id = ++uid$2; // uid for batching\n  this.active = true;\n  this.dirty = this.lazy; // for lazy watchers\n  this.deps = [];\n  this.newDeps = [];\n  this.depIds = new _Set();\n  this.newDepIds = new _Set();\n  this.expression =  true\n    ? expOrFn.toString()\n    : undefined;\n  // parse expression for getter\n  if (typeof expOrFn === 'function') {\n    this.getter = expOrFn;\n  } else {\n    this.getter = parsePath(expOrFn);\n    if (!this.getter) {\n      this.getter = noop;\n       true && warn(\n        \"Failed watching path: \\\"\" + expOrFn + \"\\\" \" +\n        'Watcher only accepts simple dot-delimited paths. ' +\n        'For full control, use a function instead.',\n        vm\n      );\n    }\n  }\n  this.value = this.lazy\n    ? undefined\n    : this.get();\n};\n\n/**\n * Evaluate the getter, and re-collect dependencies.\n */\nWatcher.prototype.get = function get () {\n  pushTarget(this);\n  var value;\n  var vm = this.vm;\n  try {\n    value = this.getter.call(vm, vm);\n  } catch (e) {\n    if (this.user) {\n      handleError(e, vm, (\"getter for watcher \\\"\" + (this.expression) + \"\\\"\"));\n    } else {\n      throw e\n    }\n  } finally {\n    // \"touch\" every property so they are all tracked as\n    // dependencies for deep watching\n    if (this.deep) {\n      traverse(value);\n    }\n    popTarget();\n    this.cleanupDeps();\n  }\n  return value\n};\n\n/**\n * Add a dependency to this directive.\n */\nWatcher.prototype.addDep = function addDep (dep) {\n  var id = dep.id;\n  if (!this.newDepIds.has(id)) {\n    this.newDepIds.add(id);\n    this.newDeps.push(dep);\n    if (!this.depIds.has(id)) {\n      dep.addSub(this);\n    }\n  }\n};\n\n/**\n * Clean up for dependency collection.\n */\nWatcher.prototype.cleanupDeps = function cleanupDeps () {\n  var i = this.deps.length;\n  while (i--) {\n    var dep = this.deps[i];\n    if (!this.newDepIds.has(dep.id)) {\n      dep.removeSub(this);\n    }\n  }\n  var tmp = this.depIds;\n  this.depIds = this.newDepIds;\n  this.newDepIds = tmp;\n  this.newDepIds.clear();\n  tmp = this.deps;\n  this.deps = this.newDeps;\n  this.newDeps = tmp;\n  this.newDeps.length = 0;\n};\n\n/**\n * Subscriber interface.\n * Will be called when a dependency changes.\n */\nWatcher.prototype.update = function update () {\n  /* istanbul ignore else */\n  if (this.lazy) {\n    this.dirty = true;\n  } else if (this.sync) {\n    this.run();\n  } else {\n    queueWatcher(this);\n  }\n};\n\n/**\n * Scheduler job interface.\n * Will be called by the scheduler.\n */\nWatcher.prototype.run = function run () {\n  if (this.active) {\n    var value = this.get();\n    if (\n      value !== this.value ||\n      // Deep watchers and watchers on Object/Arrays should fire even\n      // when the value is the same, because the value may\n      // have mutated.\n      isObject(value) ||\n      this.deep\n    ) {\n      // set new value\n      var oldValue = this.value;\n      this.value = value;\n      if (this.user) {\n        var info = \"callback for watcher \\\"\" + (this.expression) + \"\\\"\";\n        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);\n      } else {\n        this.cb.call(this.vm, value, oldValue);\n      }\n    }\n  }\n};\n\n/**\n * Evaluate the value of the watcher.\n * This only gets called for lazy watchers.\n */\nWatcher.prototype.evaluate = function evaluate () {\n  this.value = this.get();\n  this.dirty = false;\n};\n\n/**\n * Depend on all deps collected by this watcher.\n */\nWatcher.prototype.depend = function depend () {\n  var i = this.deps.length;\n  while (i--) {\n    this.deps[i].depend();\n  }\n};\n\n/**\n * Remove self from all dependencies' subscriber list.\n */\nWatcher.prototype.teardown = function teardown () {\n  if (this.active) {\n    // remove self from vm's watcher list\n    // this is a somewhat expensive operation so we skip it\n    // if the vm is being destroyed.\n    if (!this.vm._isBeingDestroyed) {\n      remove(this.vm._watchers, this);\n    }\n    var i = this.deps.length;\n    while (i--) {\n      this.deps[i].removeSub(this);\n    }\n    this.active = false;\n  }\n};\n\n/*  */\n\nvar sharedPropertyDefinition = {\n  enumerable: true,\n  configurable: true,\n  get: noop,\n  set: noop\n};\n\nfunction proxy (target, sourceKey, key) {\n  sharedPropertyDefinition.get = function proxyGetter () {\n    return this[sourceKey][key]\n  };\n  sharedPropertyDefinition.set = function proxySetter (val) {\n    this[sourceKey][key] = val;\n  };\n  Object.defineProperty(target, key, sharedPropertyDefinition);\n}\n\nfunction initState (vm) {\n  vm._watchers = [];\n  var opts = vm.$options;\n  if (opts.props) { initProps(vm, opts.props); }\n  if (opts.methods) { initMethods(vm, opts.methods); }\n  if (opts.data) {\n    initData(vm);\n  } else {\n    observe(vm._data = {}, true /* asRootData */);\n  }\n  if (opts.computed) { initComputed(vm, opts.computed); }\n  if (opts.watch && opts.watch !== nativeWatch) {\n    initWatch(vm, opts.watch);\n  }\n}\n\nfunction initProps (vm, propsOptions) {\n  var propsData = vm.$options.propsData || {};\n  var props = vm._props = {};\n  // cache prop keys so that future props updates can iterate using Array\n  // instead of dynamic object key enumeration.\n  var keys = vm.$options._propKeys = [];\n  var isRoot = !vm.$parent;\n  // root instance props should be converted\n  if (!isRoot) {\n    toggleObserving(false);\n  }\n  var loop = function ( key ) {\n    keys.push(key);\n    var value = validateProp(key, propsOptions, propsData, vm);\n    /* istanbul ignore else */\n    if (true) {\n      var hyphenatedKey = hyphenate(key);\n      if (isReservedAttribute(hyphenatedKey) ||\n          config.isReservedAttr(hyphenatedKey)) {\n        warn(\n          (\"\\\"\" + hyphenatedKey + \"\\\" is a reserved attribute and cannot be used as component prop.\"),\n          vm\n        );\n      }\n      defineReactive$$1(props, key, value, function () {\n        if (!isRoot && !isUpdatingChildComponent) {\n          warn(\n            \"Avoid mutating a prop directly since the value will be \" +\n            \"overwritten whenever the parent component re-renders. \" +\n            \"Instead, use a data or computed property based on the prop's \" +\n            \"value. Prop being mutated: \\\"\" + key + \"\\\"\",\n            vm\n          );\n        }\n      });\n    } else {}\n    // static props are already proxied on the component's prototype\n    // during Vue.extend(). We only need to proxy props defined at\n    // instantiation here.\n    if (!(key in vm)) {\n      proxy(vm, \"_props\", key);\n    }\n  };\n\n  for (var key in propsOptions) loop( key );\n  toggleObserving(true);\n}\n\nfunction initData (vm) {\n  var data = vm.$options.data;\n  data = vm._data = typeof data === 'function'\n    ? getData(data, vm)\n    : data || {};\n  if (!isPlainObject(data)) {\n    data = {};\n     true && warn(\n      'data functions should return an object:\\n' +\n      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',\n      vm\n    );\n  }\n  // proxy data on instance\n  var keys = Object.keys(data);\n  var props = vm.$options.props;\n  var methods = vm.$options.methods;\n  var i = keys.length;\n  while (i--) {\n    var key = keys[i];\n    if (true) {\n      if (methods && hasOwn(methods, key)) {\n        warn(\n          (\"Method \\\"\" + key + \"\\\" has already been defined as a data property.\"),\n          vm\n        );\n      }\n    }\n    if (props && hasOwn(props, key)) {\n       true && warn(\n        \"The data property \\\"\" + key + \"\\\" is already declared as a prop. \" +\n        \"Use prop default value instead.\",\n        vm\n      );\n    } else if (!isReserved(key)) {\n      proxy(vm, \"_data\", key);\n    }\n  }\n  // observe data\n  observe(data, true /* asRootData */);\n}\n\nfunction getData (data, vm) {\n  // #7573 disable dep collection when invoking data getters\n  pushTarget();\n  try {\n    return data.call(vm, vm)\n  } catch (e) {\n    handleError(e, vm, \"data()\");\n    return {}\n  } finally {\n    popTarget();\n  }\n}\n\nvar computedWatcherOptions = { lazy: true };\n\nfunction initComputed (vm, computed) {\n  // $flow-disable-line\n  var watchers = vm._computedWatchers = Object.create(null);\n  // computed properties are just getters during SSR\n  var isSSR = isServerRendering();\n\n  for (var key in computed) {\n    var userDef = computed[key];\n    var getter = typeof userDef === 'function' ? userDef : userDef.get;\n    if ( true && getter == null) {\n      warn(\n        (\"Getter is missing for computed property \\\"\" + key + \"\\\".\"),\n        vm\n      );\n    }\n\n    if (!isSSR) {\n      // create internal watcher for the computed property.\n      watchers[key] = new Watcher(\n        vm,\n        getter || noop,\n        noop,\n        computedWatcherOptions\n      );\n    }\n\n    // component-defined computed properties are already defined on the\n    // component prototype. We only need to define computed properties defined\n    // at instantiation here.\n    if (!(key in vm)) {\n      defineComputed(vm, key, userDef);\n    } else if (true) {\n      if (key in vm.$data) {\n        warn((\"The computed property \\\"\" + key + \"\\\" is already defined in data.\"), vm);\n      } else if (vm.$options.props && key in vm.$options.props) {\n        warn((\"The computed property \\\"\" + key + \"\\\" is already defined as a prop.\"), vm);\n      } else if (vm.$options.methods && key in vm.$options.methods) {\n        warn((\"The computed property \\\"\" + key + \"\\\" is already defined as a method.\"), vm);\n      }\n    }\n  }\n}\n\nfunction defineComputed (\n  target,\n  key,\n  userDef\n) {\n  var shouldCache = !isServerRendering();\n  if (typeof userDef === 'function') {\n    sharedPropertyDefinition.get = shouldCache\n      ? createComputedGetter(key)\n      : createGetterInvoker(userDef);\n    sharedPropertyDefinition.set = noop;\n  } else {\n    sharedPropertyDefinition.get = userDef.get\n      ? shouldCache && userDef.cache !== false\n        ? createComputedGetter(key)\n        : createGetterInvoker(userDef.get)\n      : noop;\n    sharedPropertyDefinition.set = userDef.set || noop;\n  }\n  if ( true &&\n      sharedPropertyDefinition.set === noop) {\n    sharedPropertyDefinition.set = function () {\n      warn(\n        (\"Computed property \\\"\" + key + \"\\\" was assigned to but it has no setter.\"),\n        this\n      );\n    };\n  }\n  Object.defineProperty(target, key, sharedPropertyDefinition);\n}\n\nfunction createComputedGetter (key) {\n  return function computedGetter () {\n    var watcher = this._computedWatchers && this._computedWatchers[key];\n    if (watcher) {\n      if (watcher.dirty) {\n        watcher.evaluate();\n      }\n      if (Dep.target) {\n        watcher.depend();\n      }\n      return watcher.value\n    }\n  }\n}\n\nfunction createGetterInvoker(fn) {\n  return function computedGetter () {\n    return fn.call(this, this)\n  }\n}\n\nfunction initMethods (vm, methods) {\n  var props = vm.$options.props;\n  for (var key in methods) {\n    if (true) {\n      if (typeof methods[key] !== 'function') {\n        warn(\n          \"Method \\\"\" + key + \"\\\" has type \\\"\" + (typeof methods[key]) + \"\\\" in the component definition. \" +\n          \"Did you reference the function correctly?\",\n          vm\n        );\n      }\n      if (props && hasOwn(props, key)) {\n        warn(\n          (\"Method \\\"\" + key + \"\\\" has already been defined as a prop.\"),\n          vm\n        );\n      }\n      if ((key in vm) && isReserved(key)) {\n        warn(\n          \"Method \\\"\" + key + \"\\\" conflicts with an existing Vue instance method. \" +\n          \"Avoid defining component methods that start with _ or $.\"\n        );\n      }\n    }\n    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);\n  }\n}\n\nfunction initWatch (vm, watch) {\n  for (var key in watch) {\n    var handler = watch[key];\n    if (Array.isArray(handler)) {\n      for (var i = 0; i < handler.length; i++) {\n        createWatcher(vm, key, handler[i]);\n      }\n    } else {\n      createWatcher(vm, key, handler);\n    }\n  }\n}\n\nfunction createWatcher (\n  vm,\n  expOrFn,\n  handler,\n  options\n) {\n  if (isPlainObject(handler)) {\n    options = handler;\n    handler = handler.handler;\n  }\n  if (typeof handler === 'string') {\n    handler = vm[handler];\n  }\n  return vm.$watch(expOrFn, handler, options)\n}\n\nfunction stateMixin (Vue) {\n  // flow somehow has problems with directly declared definition object\n  // when using Object.defineProperty, so we have to procedurally build up\n  // the object here.\n  var dataDef = {};\n  dataDef.get = function () { return this._data };\n  var propsDef = {};\n  propsDef.get = function () { return this._props };\n  if (true) {\n    dataDef.set = function () {\n      warn(\n        'Avoid replacing instance root $data. ' +\n        'Use nested data properties instead.',\n        this\n      );\n    };\n    propsDef.set = function () {\n      warn(\"$props is readonly.\", this);\n    };\n  }\n  Object.defineProperty(Vue.prototype, '$data', dataDef);\n  Object.defineProperty(Vue.prototype, '$props', propsDef);\n\n  Vue.prototype.$set = set;\n  Vue.prototype.$delete = del;\n\n  Vue.prototype.$watch = function (\n    expOrFn,\n    cb,\n    options\n  ) {\n    var vm = this;\n    if (isPlainObject(cb)) {\n      return createWatcher(vm, expOrFn, cb, options)\n    }\n    options = options || {};\n    options.user = true;\n    var watcher = new Watcher(vm, expOrFn, cb, options);\n    if (options.immediate) {\n      var info = \"callback for immediate watcher \\\"\" + (watcher.expression) + \"\\\"\";\n      pushTarget();\n      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);\n      popTarget();\n    }\n    return function unwatchFn () {\n      watcher.teardown();\n    }\n  };\n}\n\n/*  */\n\nvar uid$3 = 0;\n\nfunction initMixin (Vue) {\n  Vue.prototype._init = function (options) {\n    var vm = this;\n    // a uid\n    vm._uid = uid$3++;\n\n    var startTag, endTag;\n    /* istanbul ignore if */\n    if ( true && config.performance && mark) {\n      startTag = \"vue-perf-start:\" + (vm._uid);\n      endTag = \"vue-perf-end:\" + (vm._uid);\n      mark(startTag);\n    }\n\n    // a flag to avoid this being observed\n    vm._isVue = true;\n    // merge options\n    if (options && options._isComponent) {\n      // optimize internal component instantiation\n      // since dynamic options merging is pretty slow, and none of the\n      // internal component options needs special treatment.\n      initInternalComponent(vm, options);\n    } else {\n      vm.$options = mergeOptions(\n        resolveConstructorOptions(vm.constructor),\n        options || {},\n        vm\n      );\n    }\n    /* istanbul ignore else */\n    if (true) {\n      initProxy(vm);\n    } else {}\n    // expose real self\n    vm._self = vm;\n    initLifecycle(vm);\n    initEvents(vm);\n    initRender(vm);\n    callHook(vm, 'beforeCreate');\n    initInjections(vm); // resolve injections before data/props\n    initState(vm);\n    initProvide(vm); // resolve provide after data/props\n    callHook(vm, 'created');\n\n    /* istanbul ignore if */\n    if ( true && config.performance && mark) {\n      vm._name = formatComponentName(vm, false);\n      mark(endTag);\n      measure((\"vue \" + (vm._name) + \" init\"), startTag, endTag);\n    }\n\n    if (vm.$options.el) {\n      vm.$mount(vm.$options.el);\n    }\n  };\n}\n\nfunction initInternalComponent (vm, options) {\n  var opts = vm.$options = Object.create(vm.constructor.options);\n  // doing this because it's faster than dynamic enumeration.\n  var parentVnode = options._parentVnode;\n  opts.parent = options.parent;\n  opts._parentVnode = parentVnode;\n\n  var vnodeComponentOptions = parentVnode.componentOptions;\n  opts.propsData = vnodeComponentOptions.propsData;\n  opts._parentListeners = vnodeComponentOptions.listeners;\n  opts._renderChildren = vnodeComponentOptions.children;\n  opts._componentTag = vnodeComponentOptions.tag;\n\n  if (options.render) {\n    opts.render = options.render;\n    opts.staticRenderFns = options.staticRenderFns;\n  }\n}\n\nfunction resolveConstructorOptions (Ctor) {\n  var options = Ctor.options;\n  if (Ctor.super) {\n    var superOptions = resolveConstructorOptions(Ctor.super);\n    var cachedSuperOptions = Ctor.superOptions;\n    if (superOptions !== cachedSuperOptions) {\n      // super option changed,\n      // need to resolve new options.\n      Ctor.superOptions = superOptions;\n      // check if there are any late-modified/attached options (#4976)\n      var modifiedOptions = resolveModifiedOptions(Ctor);\n      // update base extend options\n      if (modifiedOptions) {\n        extend(Ctor.extendOptions, modifiedOptions);\n      }\n      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);\n      if (options.name) {\n        options.components[options.name] = Ctor;\n      }\n    }\n  }\n  return options\n}\n\nfunction resolveModifiedOptions (Ctor) {\n  var modified;\n  var latest = Ctor.options;\n  var sealed = Ctor.sealedOptions;\n  for (var key in latest) {\n    if (latest[key] !== sealed[key]) {\n      if (!modified) { modified = {}; }\n      modified[key] = latest[key];\n    }\n  }\n  return modified\n}\n\nfunction Vue (options) {\n  if ( true &&\n    !(this instanceof Vue)\n  ) {\n    warn('Vue is a constructor and should be called with the `new` keyword');\n  }\n  this._init(options);\n}\n\ninitMixin(Vue);\nstateMixin(Vue);\neventsMixin(Vue);\nlifecycleMixin(Vue);\nrenderMixin(Vue);\n\n/*  */\n\nfunction initUse (Vue) {\n  Vue.use = function (plugin) {\n    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));\n    if (installedPlugins.indexOf(plugin) > -1) {\n      return this\n    }\n\n    // additional parameters\n    var args = toArray(arguments, 1);\n    args.unshift(this);\n    if (typeof plugin.install === 'function') {\n      plugin.install.apply(plugin, args);\n    } else if (typeof plugin === 'function') {\n      plugin.apply(null, args);\n    }\n    installedPlugins.push(plugin);\n    return this\n  };\n}\n\n/*  */\n\nfunction initMixin$1 (Vue) {\n  Vue.mixin = function (mixin) {\n    this.options = mergeOptions(this.options, mixin);\n    return this\n  };\n}\n\n/*  */\n\nfunction initExtend (Vue) {\n  /**\n   * Each instance constructor, including Vue, has a unique\n   * cid. This enables us to create wrapped \"child\n   * constructors\" for prototypal inheritance and cache them.\n   */\n  Vue.cid = 0;\n  var cid = 1;\n\n  /**\n   * Class inheritance\n   */\n  Vue.extend = function (extendOptions) {\n    extendOptions = extendOptions || {};\n    var Super = this;\n    var SuperId = Super.cid;\n    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});\n    if (cachedCtors[SuperId]) {\n      return cachedCtors[SuperId]\n    }\n\n    var name = extendOptions.name || Super.options.name;\n    if ( true && name) {\n      validateComponentName(name);\n    }\n\n    var Sub = function VueComponent (options) {\n      this._init(options);\n    };\n    Sub.prototype = Object.create(Super.prototype);\n    Sub.prototype.constructor = Sub;\n    Sub.cid = cid++;\n    Sub.options = mergeOptions(\n      Super.options,\n      extendOptions\n    );\n    Sub['super'] = Super;\n\n    // For props and computed properties, we define the proxy getters on\n    // the Vue instances at extension time, on the extended prototype. This\n    // avoids Object.defineProperty calls for each instance created.\n    if (Sub.options.props) {\n      initProps$1(Sub);\n    }\n    if (Sub.options.computed) {\n      initComputed$1(Sub);\n    }\n\n    // allow further extension/mixin/plugin usage\n    Sub.extend = Super.extend;\n    Sub.mixin = Super.mixin;\n    Sub.use = Super.use;\n\n    // create asset registers, so extended classes\n    // can have their private assets too.\n    ASSET_TYPES.forEach(function (type) {\n      Sub[type] = Super[type];\n    });\n    // enable recursive self-lookup\n    if (name) {\n      Sub.options.components[name] = Sub;\n    }\n\n    // keep a reference to the super options at extension time.\n    // later at instantiation we can check if Super's options have\n    // been updated.\n    Sub.superOptions = Super.options;\n    Sub.extendOptions = extendOptions;\n    Sub.sealedOptions = extend({}, Sub.options);\n\n    // cache constructor\n    cachedCtors[SuperId] = Sub;\n    return Sub\n  };\n}\n\nfunction initProps$1 (Comp) {\n  var props = Comp.options.props;\n  for (var key in props) {\n    proxy(Comp.prototype, \"_props\", key);\n  }\n}\n\nfunction initComputed$1 (Comp) {\n  var computed = Comp.options.computed;\n  for (var key in computed) {\n    defineComputed(Comp.prototype, key, computed[key]);\n  }\n}\n\n/*  */\n\nfunction initAssetRegisters (Vue) {\n  /**\n   * Create asset registration methods.\n   */\n  ASSET_TYPES.forEach(function (type) {\n    Vue[type] = function (\n      id,\n      definition\n    ) {\n      if (!definition) {\n        return this.options[type + 's'][id]\n      } else {\n        /* istanbul ignore if */\n        if ( true && type === 'component') {\n          validateComponentName(id);\n        }\n        if (type === 'component' && isPlainObject(definition)) {\n          definition.name = definition.name || id;\n          definition = this.options._base.extend(definition);\n        }\n        if (type === 'directive' && typeof definition === 'function') {\n          definition = { bind: definition, update: definition };\n        }\n        this.options[type + 's'][id] = definition;\n        return definition\n      }\n    };\n  });\n}\n\n/*  */\n\n\n\n\n\nfunction getComponentName (opts) {\n  return opts && (opts.Ctor.options.name || opts.tag)\n}\n\nfunction matches (pattern, name) {\n  if (Array.isArray(pattern)) {\n    return pattern.indexOf(name) > -1\n  } else if (typeof pattern === 'string') {\n    return pattern.split(',').indexOf(name) > -1\n  } else if (isRegExp(pattern)) {\n    return pattern.test(name)\n  }\n  /* istanbul ignore next */\n  return false\n}\n\nfunction pruneCache (keepAliveInstance, filter) {\n  var cache = keepAliveInstance.cache;\n  var keys = keepAliveInstance.keys;\n  var _vnode = keepAliveInstance._vnode;\n  for (var key in cache) {\n    var entry = cache[key];\n    if (entry) {\n      var name = entry.name;\n      if (name && !filter(name)) {\n        pruneCacheEntry(cache, key, keys, _vnode);\n      }\n    }\n  }\n}\n\nfunction pruneCacheEntry (\n  cache,\n  key,\n  keys,\n  current\n) {\n  var entry = cache[key];\n  if (entry && (!current || entry.tag !== current.tag)) {\n    entry.componentInstance.$destroy();\n  }\n  cache[key] = null;\n  remove(keys, key);\n}\n\nvar patternTypes = [String, RegExp, Array];\n\nvar KeepAlive = {\n  name: 'keep-alive',\n  abstract: true,\n\n  props: {\n    include: patternTypes,\n    exclude: patternTypes,\n    max: [String, Number]\n  },\n\n  methods: {\n    cacheVNode: function cacheVNode() {\n      var ref = this;\n      var cache = ref.cache;\n      var keys = ref.keys;\n      var vnodeToCache = ref.vnodeToCache;\n      var keyToCache = ref.keyToCache;\n      if (vnodeToCache) {\n        var tag = vnodeToCache.tag;\n        var componentInstance = vnodeToCache.componentInstance;\n        var componentOptions = vnodeToCache.componentOptions;\n        cache[keyToCache] = {\n          name: getComponentName(componentOptions),\n          tag: tag,\n          componentInstance: componentInstance,\n        };\n        keys.push(keyToCache);\n        // prune oldest entry\n        if (this.max && keys.length > parseInt(this.max)) {\n          pruneCacheEntry(cache, keys[0], keys, this._vnode);\n        }\n        this.vnodeToCache = null;\n      }\n    }\n  },\n\n  created: function created () {\n    this.cache = Object.create(null);\n    this.keys = [];\n  },\n\n  destroyed: function destroyed () {\n    for (var key in this.cache) {\n      pruneCacheEntry(this.cache, key, this.keys);\n    }\n  },\n\n  mounted: function mounted () {\n    var this$1 = this;\n\n    this.cacheVNode();\n    this.$watch('include', function (val) {\n      pruneCache(this$1, function (name) { return matches(val, name); });\n    });\n    this.$watch('exclude', function (val) {\n      pruneCache(this$1, function (name) { return !matches(val, name); });\n    });\n  },\n\n  updated: function updated () {\n    this.cacheVNode();\n  },\n\n  render: function render () {\n    var slot = this.$slots.default;\n    var vnode = getFirstComponentChild(slot);\n    var componentOptions = vnode && vnode.componentOptions;\n    if (componentOptions) {\n      // check pattern\n      var name = getComponentName(componentOptions);\n      var ref = this;\n      var include = ref.include;\n      var exclude = ref.exclude;\n      if (\n        // not included\n        (include && (!name || !matches(include, name))) ||\n        // excluded\n        (exclude && name && matches(exclude, name))\n      ) {\n        return vnode\n      }\n\n      var ref$1 = this;\n      var cache = ref$1.cache;\n      var keys = ref$1.keys;\n      var key = vnode.key == null\n        // same constructor may get registered as different local components\n        // so cid alone is not enough (#3269)\n        ? componentOptions.Ctor.cid + (componentOptions.tag ? (\"::\" + (componentOptions.tag)) : '')\n        : vnode.key;\n      if (cache[key]) {\n        vnode.componentInstance = cache[key].componentInstance;\n        // make current key freshest\n        remove(keys, key);\n        keys.push(key);\n      } else {\n        // delay setting the cache until update\n        this.vnodeToCache = vnode;\n        this.keyToCache = key;\n      }\n\n      vnode.data.keepAlive = true;\n    }\n    return vnode || (slot && slot[0])\n  }\n};\n\nvar builtInComponents = {\n  KeepAlive: KeepAlive\n};\n\n/*  */\n\nfunction initGlobalAPI (Vue) {\n  // config\n  var configDef = {};\n  configDef.get = function () { return config; };\n  if (true) {\n    configDef.set = function () {\n      warn(\n        'Do not replace the Vue.config object, set individual fields instead.'\n      );\n    };\n  }\n  Object.defineProperty(Vue, 'config', configDef);\n\n  // exposed util methods.\n  // NOTE: these are not considered part of the public API - avoid relying on\n  // them unless you are aware of the risk.\n  Vue.util = {\n    warn: warn,\n    extend: extend,\n    mergeOptions: mergeOptions,\n    defineReactive: defineReactive$$1\n  };\n\n  Vue.set = set;\n  Vue.delete = del;\n  Vue.nextTick = nextTick;\n\n  // 2.6 explicit observable API\n  Vue.observable = function (obj) {\n    observe(obj);\n    return obj\n  };\n\n  Vue.options = Object.create(null);\n  ASSET_TYPES.forEach(function (type) {\n    Vue.options[type + 's'] = Object.create(null);\n  });\n\n  // this is used to identify the \"base\" constructor to extend all plain-object\n  // components with in Weex's multi-instance scenarios.\n  Vue.options._base = Vue;\n\n  extend(Vue.options.components, builtInComponents);\n\n  initUse(Vue);\n  initMixin$1(Vue);\n  initExtend(Vue);\n  initAssetRegisters(Vue);\n}\n\ninitGlobalAPI(Vue);\n\nObject.defineProperty(Vue.prototype, '$isServer', {\n  get: isServerRendering\n});\n\nObject.defineProperty(Vue.prototype, '$ssrContext', {\n  get: function get () {\n    /* istanbul ignore next */\n    return this.$vnode && this.$vnode.ssrContext\n  }\n});\n\n// expose FunctionalRenderContext for ssr runtime helper installation\nObject.defineProperty(Vue, 'FunctionalRenderContext', {\n  value: FunctionalRenderContext\n});\n\nVue.version = '2.6.14';\n\n/*  */\n\n// these are reserved for web because they are directly compiled away\n// during template compilation\nvar isReservedAttr = makeMap('style,class');\n\n// attributes that should be using props for binding\nvar acceptValue = makeMap('input,textarea,option,select,progress');\nvar mustUseProp = function (tag, type, attr) {\n  return (\n    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||\n    (attr === 'selected' && tag === 'option') ||\n    (attr === 'checked' && tag === 'input') ||\n    (attr === 'muted' && tag === 'video')\n  )\n};\n\nvar isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');\n\nvar isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');\n\nvar convertEnumeratedValue = function (key, value) {\n  return isFalsyAttrValue(value) || value === 'false'\n    ? 'false'\n    // allow arbitrary string value for contenteditable\n    : key === 'contenteditable' && isValidContentEditableValue(value)\n      ? value\n      : 'true'\n};\n\nvar isBooleanAttr = makeMap(\n  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +\n  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +\n  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +\n  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +\n  'required,reversed,scoped,seamless,selected,sortable,' +\n  'truespeed,typemustmatch,visible'\n);\n\nvar xlinkNS = 'http://www.w3.org/1999/xlink';\n\nvar isXlink = function (name) {\n  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'\n};\n\nvar getXlinkProp = function (name) {\n  return isXlink(name) ? name.slice(6, name.length) : ''\n};\n\nvar isFalsyAttrValue = function (val) {\n  return val == null || val === false\n};\n\n/*  */\n\nfunction genClassForVnode (vnode) {\n  var data = vnode.data;\n  var parentNode = vnode;\n  var childNode = vnode;\n  while (isDef(childNode.componentInstance)) {\n    childNode = childNode.componentInstance._vnode;\n    if (childNode && childNode.data) {\n      data = mergeClassData(childNode.data, data);\n    }\n  }\n  while (isDef(parentNode = parentNode.parent)) {\n    if (parentNode && parentNode.data) {\n      data = mergeClassData(data, parentNode.data);\n    }\n  }\n  return renderClass(data.staticClass, data.class)\n}\n\nfunction mergeClassData (child, parent) {\n  return {\n    staticClass: concat(child.staticClass, parent.staticClass),\n    class: isDef(child.class)\n      ? [child.class, parent.class]\n      : parent.class\n  }\n}\n\nfunction renderClass (\n  staticClass,\n  dynamicClass\n) {\n  if (isDef(staticClass) || isDef(dynamicClass)) {\n    return concat(staticClass, stringifyClass(dynamicClass))\n  }\n  /* istanbul ignore next */\n  return ''\n}\n\nfunction concat (a, b) {\n  return a ? b ? (a + ' ' + b) : a : (b || '')\n}\n\nfunction stringifyClass (value) {\n  if (Array.isArray(value)) {\n    return stringifyArray(value)\n  }\n  if (isObject(value)) {\n    return stringifyObject(value)\n  }\n  if (typeof value === 'string') {\n    return value\n  }\n  /* istanbul ignore next */\n  return ''\n}\n\nfunction stringifyArray (value) {\n  var res = '';\n  var stringified;\n  for (var i = 0, l = value.length; i < l; i++) {\n    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {\n      if (res) { res += ' '; }\n      res += stringified;\n    }\n  }\n  return res\n}\n\nfunction stringifyObject (value) {\n  var res = '';\n  for (var key in value) {\n    if (value[key]) {\n      if (res) { res += ' '; }\n      res += key;\n    }\n  }\n  return res\n}\n\n/*  */\n\nvar namespaceMap = {\n  svg: 'http://www.w3.org/2000/svg',\n  math: 'http://www.w3.org/1998/Math/MathML'\n};\n\nvar isHTMLTag = makeMap(\n  'html,body,base,head,link,meta,style,title,' +\n  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +\n  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +\n  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +\n  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +\n  'embed,object,param,source,canvas,script,noscript,del,ins,' +\n  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +\n  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +\n  'output,progress,select,textarea,' +\n  'details,dialog,menu,menuitem,summary,' +\n  'content,element,shadow,template,blockquote,iframe,tfoot'\n);\n\n// this map is intentionally selective, only covering SVG elements that may\n// contain child elements.\nvar isSVG = makeMap(\n  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +\n  'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +\n  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',\n  true\n);\n\nvar isReservedTag = function (tag) {\n  return isHTMLTag(tag) || isSVG(tag)\n};\n\nfunction getTagNamespace (tag) {\n  if (isSVG(tag)) {\n    return 'svg'\n  }\n  // basic support for MathML\n  // note it doesn't support other MathML elements being component roots\n  if (tag === 'math') {\n    return 'math'\n  }\n}\n\nvar unknownElementCache = Object.create(null);\nfunction isUnknownElement (tag) {\n  /* istanbul ignore if */\n  if (!inBrowser) {\n    return true\n  }\n  if (isReservedTag(tag)) {\n    return false\n  }\n  tag = tag.toLowerCase();\n  /* istanbul ignore if */\n  if (unknownElementCache[tag] != null) {\n    return unknownElementCache[tag]\n  }\n  var el = document.createElement(tag);\n  if (tag.indexOf('-') > -1) {\n    // http://stackoverflow.com/a/28210364/1070244\n    return (unknownElementCache[tag] = (\n      el.constructor === window.HTMLUnknownElement ||\n      el.constructor === window.HTMLElement\n    ))\n  } else {\n    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))\n  }\n}\n\nvar isTextInputType = makeMap('text,number,password,search,email,tel,url');\n\n/*  */\n\n/**\n * Query an element selector if it's not an element already.\n */\nfunction query (el) {\n  if (typeof el === 'string') {\n    var selected = document.querySelector(el);\n    if (!selected) {\n       true && warn(\n        'Cannot find element: ' + el\n      );\n      return document.createElement('div')\n    }\n    return selected\n  } else {\n    return el\n  }\n}\n\n/*  */\n\nfunction createElement$1 (tagName, vnode) {\n  var elm = document.createElement(tagName);\n  if (tagName !== 'select') {\n    return elm\n  }\n  // false or null will remove the attribute but undefined will not\n  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {\n    elm.setAttribute('multiple', 'multiple');\n  }\n  return elm\n}\n\nfunction createElementNS (namespace, tagName) {\n  return document.createElementNS(namespaceMap[namespace], tagName)\n}\n\nfunction createTextNode (text) {\n  return document.createTextNode(text)\n}\n\nfunction createComment (text) {\n  return document.createComment(text)\n}\n\nfunction insertBefore (parentNode, newNode, referenceNode) {\n  parentNode.insertBefore(newNode, referenceNode);\n}\n\nfunction removeChild (node, child) {\n  node.removeChild(child);\n}\n\nfunction appendChild (node, child) {\n  node.appendChild(child);\n}\n\nfunction parentNode (node) {\n  return node.parentNode\n}\n\nfunction nextSibling (node) {\n  return node.nextSibling\n}\n\nfunction tagName (node) {\n  return node.tagName\n}\n\nfunction setTextContent (node, text) {\n  node.textContent = text;\n}\n\nfunction setStyleScope (node, scopeId) {\n  node.setAttribute(scopeId, '');\n}\n\nvar nodeOps = /*#__PURE__*/Object.freeze({\n  createElement: createElement$1,\n  createElementNS: createElementNS,\n  createTextNode: createTextNode,\n  createComment: createComment,\n  insertBefore: insertBefore,\n  removeChild: removeChild,\n  appendChild: appendChild,\n  parentNode: parentNode,\n  nextSibling: nextSibling,\n  tagName: tagName,\n  setTextContent: setTextContent,\n  setStyleScope: setStyleScope\n});\n\n/*  */\n\nvar ref = {\n  create: function create (_, vnode) {\n    registerRef(vnode);\n  },\n  update: function update (oldVnode, vnode) {\n    if (oldVnode.data.ref !== vnode.data.ref) {\n      registerRef(oldVnode, true);\n      registerRef(vnode);\n    }\n  },\n  destroy: function destroy (vnode) {\n    registerRef(vnode, true);\n  }\n};\n\nfunction registerRef (vnode, isRemoval) {\n  var key = vnode.data.ref;\n  if (!isDef(key)) { return }\n\n  var vm = vnode.context;\n  var ref = vnode.componentInstance || vnode.elm;\n  var refs = vm.$refs;\n  if (isRemoval) {\n    if (Array.isArray(refs[key])) {\n      remove(refs[key], ref);\n    } else if (refs[key] === ref) {\n      refs[key] = undefined;\n    }\n  } else {\n    if (vnode.data.refInFor) {\n      if (!Array.isArray(refs[key])) {\n        refs[key] = [ref];\n      } else if (refs[key].indexOf(ref) < 0) {\n        // $flow-disable-line\n        refs[key].push(ref);\n      }\n    } else {\n      refs[key] = ref;\n    }\n  }\n}\n\n/**\n * Virtual DOM patching algorithm based on Snabbdom by\n * Simon Friis Vindum (@paldepind)\n * Licensed under the MIT License\n * https://github.com/paldepind/snabbdom/blob/master/LICENSE\n *\n * modified by Evan You (@yyx990803)\n *\n * Not type-checking this because this file is perf-critical and the cost\n * of making flow understand it is not worth it.\n */\n\nvar emptyNode = new VNode('', {}, []);\n\nvar hooks = ['create', 'activate', 'update', 'remove', 'destroy'];\n\nfunction sameVnode (a, b) {\n  return (\n    a.key === b.key &&\n    a.asyncFactory === b.asyncFactory && (\n      (\n        a.tag === b.tag &&\n        a.isComment === b.isComment &&\n        isDef(a.data) === isDef(b.data) &&\n        sameInputType(a, b)\n      ) || (\n        isTrue(a.isAsyncPlaceholder) &&\n        isUndef(b.asyncFactory.error)\n      )\n    )\n  )\n}\n\nfunction sameInputType (a, b) {\n  if (a.tag !== 'input') { return true }\n  var i;\n  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;\n  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;\n  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)\n}\n\nfunction createKeyToOldIdx (children, beginIdx, endIdx) {\n  var i, key;\n  var map = {};\n  for (i = beginIdx; i <= endIdx; ++i) {\n    key = children[i].key;\n    if (isDef(key)) { map[key] = i; }\n  }\n  return map\n}\n\nfunction createPatchFunction (backend) {\n  var i, j;\n  var cbs = {};\n\n  var modules = backend.modules;\n  var nodeOps = backend.nodeOps;\n\n  for (i = 0; i < hooks.length; ++i) {\n    cbs[hooks[i]] = [];\n    for (j = 0; j < modules.length; ++j) {\n      if (isDef(modules[j][hooks[i]])) {\n        cbs[hooks[i]].push(modules[j][hooks[i]]);\n      }\n    }\n  }\n\n  function emptyNodeAt (elm) {\n    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)\n  }\n\n  function createRmCb (childElm, listeners) {\n    function remove$$1 () {\n      if (--remove$$1.listeners === 0) {\n        removeNode(childElm);\n      }\n    }\n    remove$$1.listeners = listeners;\n    return remove$$1\n  }\n\n  function removeNode (el) {\n    var parent = nodeOps.parentNode(el);\n    // element may have already been removed due to v-html / v-text\n    if (isDef(parent)) {\n      nodeOps.removeChild(parent, el);\n    }\n  }\n\n  function isUnknownElement$$1 (vnode, inVPre) {\n    return (\n      !inVPre &&\n      !vnode.ns &&\n      !(\n        config.ignoredElements.length &&\n        config.ignoredElements.some(function (ignore) {\n          return isRegExp(ignore)\n            ? ignore.test(vnode.tag)\n            : ignore === vnode.tag\n        })\n      ) &&\n      config.isUnknownElement(vnode.tag)\n    )\n  }\n\n  var creatingElmInVPre = 0;\n\n  function createElm (\n    vnode,\n    insertedVnodeQueue,\n    parentElm,\n    refElm,\n    nested,\n    ownerArray,\n    index\n  ) {\n    if (isDef(vnode.elm) && isDef(ownerArray)) {\n      // This vnode was used in a previous render!\n      // now it's used as a new node, overwriting its elm would cause\n      // potential patch errors down the road when it's used as an insertion\n      // reference node. Instead, we clone the node on-demand before creating\n      // associated DOM element for it.\n      vnode = ownerArray[index] = cloneVNode(vnode);\n    }\n\n    vnode.isRootInsert = !nested; // for transition enter check\n    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {\n      return\n    }\n\n    var data = vnode.data;\n    var children = vnode.children;\n    var tag = vnode.tag;\n    if (isDef(tag)) {\n      if (true) {\n        if (data && data.pre) {\n          creatingElmInVPre++;\n        }\n        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {\n          warn(\n            'Unknown custom element: <' + tag + '> - did you ' +\n            'register the component correctly? For recursive components, ' +\n            'make sure to provide the \"name\" option.',\n            vnode.context\n          );\n        }\n      }\n\n      vnode.elm = vnode.ns\n        ? nodeOps.createElementNS(vnode.ns, tag)\n        : nodeOps.createElement(tag, vnode);\n      setScope(vnode);\n\n      /* istanbul ignore if */\n      {\n        createChildren(vnode, children, insertedVnodeQueue);\n        if (isDef(data)) {\n          invokeCreateHooks(vnode, insertedVnodeQueue);\n        }\n        insert(parentElm, vnode.elm, refElm);\n      }\n\n      if ( true && data && data.pre) {\n        creatingElmInVPre--;\n      }\n    } else if (isTrue(vnode.isComment)) {\n      vnode.elm = nodeOps.createComment(vnode.text);\n      insert(parentElm, vnode.elm, refElm);\n    } else {\n      vnode.elm = nodeOps.createTextNode(vnode.text);\n      insert(parentElm, vnode.elm, refElm);\n    }\n  }\n\n  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {\n    var i = vnode.data;\n    if (isDef(i)) {\n      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;\n      if (isDef(i = i.hook) && isDef(i = i.init)) {\n        i(vnode, false /* hydrating */);\n      }\n      // after calling the init hook, if the vnode is a child component\n      // it should've created a child instance and mounted it. the child\n      // component also has set the placeholder vnode's elm.\n      // in that case we can just return the element and be done.\n      if (isDef(vnode.componentInstance)) {\n        initComponent(vnode, insertedVnodeQueue);\n        insert(parentElm, vnode.elm, refElm);\n        if (isTrue(isReactivated)) {\n          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);\n        }\n        return true\n      }\n    }\n  }\n\n  function initComponent (vnode, insertedVnodeQueue) {\n    if (isDef(vnode.data.pendingInsert)) {\n      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);\n      vnode.data.pendingInsert = null;\n    }\n    vnode.elm = vnode.componentInstance.$el;\n    if (isPatchable(vnode)) {\n      invokeCreateHooks(vnode, insertedVnodeQueue);\n      setScope(vnode);\n    } else {\n      // empty component root.\n      // skip all element-related modules except for ref (#3455)\n      registerRef(vnode);\n      // make sure to invoke the insert hook\n      insertedVnodeQueue.push(vnode);\n    }\n  }\n\n  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {\n    var i;\n    // hack for #4339: a reactivated component with inner transition\n    // does not trigger because the inner node's created hooks are not called\n    // again. It's not ideal to involve module-specific logic in here but\n    // there doesn't seem to be a better way to do it.\n    var innerNode = vnode;\n    while (innerNode.componentInstance) {\n      innerNode = innerNode.componentInstance._vnode;\n      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {\n        for (i = 0; i < cbs.activate.length; ++i) {\n          cbs.activate[i](emptyNode, innerNode);\n        }\n        insertedVnodeQueue.push(innerNode);\n        break\n      }\n    }\n    // unlike a newly created component,\n    // a reactivated keep-alive component doesn't insert itself\n    insert(parentElm, vnode.elm, refElm);\n  }\n\n  function insert (parent, elm, ref$$1) {\n    if (isDef(parent)) {\n      if (isDef(ref$$1)) {\n        if (nodeOps.parentNode(ref$$1) === parent) {\n          nodeOps.insertBefore(parent, elm, ref$$1);\n        }\n      } else {\n        nodeOps.appendChild(parent, elm);\n      }\n    }\n  }\n\n  function createChildren (vnode, children, insertedVnodeQueue) {\n    if (Array.isArray(children)) {\n      if (true) {\n        checkDuplicateKeys(children);\n      }\n      for (var i = 0; i < children.length; ++i) {\n        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);\n      }\n    } else if (isPrimitive(vnode.text)) {\n      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));\n    }\n  }\n\n  function isPatchable (vnode) {\n    while (vnode.componentInstance) {\n      vnode = vnode.componentInstance._vnode;\n    }\n    return isDef(vnode.tag)\n  }\n\n  function invokeCreateHooks (vnode, insertedVnodeQueue) {\n    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {\n      cbs.create[i$1](emptyNode, vnode);\n    }\n    i = vnode.data.hook; // Reuse variable\n    if (isDef(i)) {\n      if (isDef(i.create)) { i.create(emptyNode, vnode); }\n      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }\n    }\n  }\n\n  // set scope id attribute for scoped CSS.\n  // this is implemented as a special case to avoid the overhead\n  // of going through the normal attribute patching process.\n  function setScope (vnode) {\n    var i;\n    if (isDef(i = vnode.fnScopeId)) {\n      nodeOps.setStyleScope(vnode.elm, i);\n    } else {\n      var ancestor = vnode;\n      while (ancestor) {\n        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {\n          nodeOps.setStyleScope(vnode.elm, i);\n        }\n        ancestor = ancestor.parent;\n      }\n    }\n    // for slot content they should also get the scopeId from the host instance.\n    if (isDef(i = activeInstance) &&\n      i !== vnode.context &&\n      i !== vnode.fnContext &&\n      isDef(i = i.$options._scopeId)\n    ) {\n      nodeOps.setStyleScope(vnode.elm, i);\n    }\n  }\n\n  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {\n    for (; startIdx <= endIdx; ++startIdx) {\n      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);\n    }\n  }\n\n  function invokeDestroyHook (vnode) {\n    var i, j;\n    var data = vnode.data;\n    if (isDef(data)) {\n      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }\n      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }\n    }\n    if (isDef(i = vnode.children)) {\n      for (j = 0; j < vnode.children.length; ++j) {\n        invokeDestroyHook(vnode.children[j]);\n      }\n    }\n  }\n\n  function removeVnodes (vnodes, startIdx, endIdx) {\n    for (; startIdx <= endIdx; ++startIdx) {\n      var ch = vnodes[startIdx];\n      if (isDef(ch)) {\n        if (isDef(ch.tag)) {\n          removeAndInvokeRemoveHook(ch);\n          invokeDestroyHook(ch);\n        } else { // Text node\n          removeNode(ch.elm);\n        }\n      }\n    }\n  }\n\n  function removeAndInvokeRemoveHook (vnode, rm) {\n    if (isDef(rm) || isDef(vnode.data)) {\n      var i;\n      var listeners = cbs.remove.length + 1;\n      if (isDef(rm)) {\n        // we have a recursively passed down rm callback\n        // increase the listeners count\n        rm.listeners += listeners;\n      } else {\n        // directly removing\n        rm = createRmCb(vnode.elm, listeners);\n      }\n      // recursively invoke hooks on child component root node\n      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {\n        removeAndInvokeRemoveHook(i, rm);\n      }\n      for (i = 0; i < cbs.remove.length; ++i) {\n        cbs.remove[i](vnode, rm);\n      }\n      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {\n        i(vnode, rm);\n      } else {\n        rm();\n      }\n    } else {\n      removeNode(vnode.elm);\n    }\n  }\n\n  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {\n    var oldStartIdx = 0;\n    var newStartIdx = 0;\n    var oldEndIdx = oldCh.length - 1;\n    var oldStartVnode = oldCh[0];\n    var oldEndVnode = oldCh[oldEndIdx];\n    var newEndIdx = newCh.length - 1;\n    var newStartVnode = newCh[0];\n    var newEndVnode = newCh[newEndIdx];\n    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;\n\n    // removeOnly is a special flag used only by <transition-group>\n    // to ensure removed elements stay in correct relative positions\n    // during leaving transitions\n    var canMove = !removeOnly;\n\n    if (true) {\n      checkDuplicateKeys(newCh);\n    }\n\n    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {\n      if (isUndef(oldStartVnode)) {\n        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left\n      } else if (isUndef(oldEndVnode)) {\n        oldEndVnode = oldCh[--oldEndIdx];\n      } else if (sameVnode(oldStartVnode, newStartVnode)) {\n        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);\n        oldStartVnode = oldCh[++oldStartIdx];\n        newStartVnode = newCh[++newStartIdx];\n      } else if (sameVnode(oldEndVnode, newEndVnode)) {\n        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);\n        oldEndVnode = oldCh[--oldEndIdx];\n        newEndVnode = newCh[--newEndIdx];\n      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right\n        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);\n        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));\n        oldStartVnode = oldCh[++oldStartIdx];\n        newEndVnode = newCh[--newEndIdx];\n      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left\n        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);\n        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);\n        oldEndVnode = oldCh[--oldEndIdx];\n        newStartVnode = newCh[++newStartIdx];\n      } else {\n        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }\n        idxInOld = isDef(newStartVnode.key)\n          ? oldKeyToIdx[newStartVnode.key]\n          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);\n        if (isUndef(idxInOld)) { // New element\n          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);\n        } else {\n          vnodeToMove = oldCh[idxInOld];\n          if (sameVnode(vnodeToMove, newStartVnode)) {\n            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);\n            oldCh[idxInOld] = undefined;\n            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);\n          } else {\n            // same key but different element. treat as new element\n            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);\n          }\n        }\n        newStartVnode = newCh[++newStartIdx];\n      }\n    }\n    if (oldStartIdx > oldEndIdx) {\n      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;\n      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);\n    } else if (newStartIdx > newEndIdx) {\n      removeVnodes(oldCh, oldStartIdx, oldEndIdx);\n    }\n  }\n\n  function checkDuplicateKeys (children) {\n    var seenKeys = {};\n    for (var i = 0; i < children.length; i++) {\n      var vnode = children[i];\n      var key = vnode.key;\n      if (isDef(key)) {\n        if (seenKeys[key]) {\n          warn(\n            (\"Duplicate keys detected: '\" + key + \"'. This may cause an update error.\"),\n            vnode.context\n          );\n        } else {\n          seenKeys[key] = true;\n        }\n      }\n    }\n  }\n\n  function findIdxInOld (node, oldCh, start, end) {\n    for (var i = start; i < end; i++) {\n      var c = oldCh[i];\n      if (isDef(c) && sameVnode(node, c)) { return i }\n    }\n  }\n\n  function patchVnode (\n    oldVnode,\n    vnode,\n    insertedVnodeQueue,\n    ownerArray,\n    index,\n    removeOnly\n  ) {\n    if (oldVnode === vnode) {\n      return\n    }\n\n    if (isDef(vnode.elm) && isDef(ownerArray)) {\n      // clone reused vnode\n      vnode = ownerArray[index] = cloneVNode(vnode);\n    }\n\n    var elm = vnode.elm = oldVnode.elm;\n\n    if (isTrue(oldVnode.isAsyncPlaceholder)) {\n      if (isDef(vnode.asyncFactory.resolved)) {\n        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);\n      } else {\n        vnode.isAsyncPlaceholder = true;\n      }\n      return\n    }\n\n    // reuse element for static trees.\n    // note we only do this if the vnode is cloned -\n    // if the new node is not cloned it means the render functions have been\n    // reset by the hot-reload-api and we need to do a proper re-render.\n    if (isTrue(vnode.isStatic) &&\n      isTrue(oldVnode.isStatic) &&\n      vnode.key === oldVnode.key &&\n      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))\n    ) {\n      vnode.componentInstance = oldVnode.componentInstance;\n      return\n    }\n\n    var i;\n    var data = vnode.data;\n    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {\n      i(oldVnode, vnode);\n    }\n\n    var oldCh = oldVnode.children;\n    var ch = vnode.children;\n    if (isDef(data) && isPatchable(vnode)) {\n      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }\n      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }\n    }\n    if (isUndef(vnode.text)) {\n      if (isDef(oldCh) && isDef(ch)) {\n        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }\n      } else if (isDef(ch)) {\n        if (true) {\n          checkDuplicateKeys(ch);\n        }\n        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }\n        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);\n      } else if (isDef(oldCh)) {\n        removeVnodes(oldCh, 0, oldCh.length - 1);\n      } else if (isDef(oldVnode.text)) {\n        nodeOps.setTextContent(elm, '');\n      }\n    } else if (oldVnode.text !== vnode.text) {\n      nodeOps.setTextContent(elm, vnode.text);\n    }\n    if (isDef(data)) {\n      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }\n    }\n  }\n\n  function invokeInsertHook (vnode, queue, initial) {\n    // delay insert hooks for component root nodes, invoke them after the\n    // element is really inserted\n    if (isTrue(initial) && isDef(vnode.parent)) {\n      vnode.parent.data.pendingInsert = queue;\n    } else {\n      for (var i = 0; i < queue.length; ++i) {\n        queue[i].data.hook.insert(queue[i]);\n      }\n    }\n  }\n\n  var hydrationBailed = false;\n  // list of modules that can skip create hook during hydration because they\n  // are already rendered on the client or has no need for initialization\n  // Note: style is excluded because it relies on initial clone for future\n  // deep updates (#7063).\n  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');\n\n  // Note: this is a browser-only function so we can assume elms are DOM nodes.\n  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {\n    var i;\n    var tag = vnode.tag;\n    var data = vnode.data;\n    var children = vnode.children;\n    inVPre = inVPre || (data && data.pre);\n    vnode.elm = elm;\n\n    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {\n      vnode.isAsyncPlaceholder = true;\n      return true\n    }\n    // assert node match\n    if (true) {\n      if (!assertNodeMatch(elm, vnode, inVPre)) {\n        return false\n      }\n    }\n    if (isDef(data)) {\n      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }\n      if (isDef(i = vnode.componentInstance)) {\n        // child component. it should have hydrated its own tree.\n        initComponent(vnode, insertedVnodeQueue);\n        return true\n      }\n    }\n    if (isDef(tag)) {\n      if (isDef(children)) {\n        // empty element, allow client to pick up and populate children\n        if (!elm.hasChildNodes()) {\n          createChildren(vnode, children, insertedVnodeQueue);\n        } else {\n          // v-html and domProps: innerHTML\n          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {\n            if (i !== elm.innerHTML) {\n              /* istanbul ignore if */\n              if ( true &&\n                typeof console !== 'undefined' &&\n                !hydrationBailed\n              ) {\n                hydrationBailed = true;\n                console.warn('Parent: ', elm);\n                console.warn('server innerHTML: ', i);\n                console.warn('client innerHTML: ', elm.innerHTML);\n              }\n              return false\n            }\n          } else {\n            // iterate and compare children lists\n            var childrenMatch = true;\n            var childNode = elm.firstChild;\n            for (var i$1 = 0; i$1 < children.length; i$1++) {\n              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {\n                childrenMatch = false;\n                break\n              }\n              childNode = childNode.nextSibling;\n            }\n            // if childNode is not null, it means the actual childNodes list is\n            // longer than the virtual children list.\n            if (!childrenMatch || childNode) {\n              /* istanbul ignore if */\n              if ( true &&\n                typeof console !== 'undefined' &&\n                !hydrationBailed\n              ) {\n                hydrationBailed = true;\n                console.warn('Parent: ', elm);\n                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);\n              }\n              return false\n            }\n          }\n        }\n      }\n      if (isDef(data)) {\n        var fullInvoke = false;\n        for (var key in data) {\n          if (!isRenderedModule(key)) {\n            fullInvoke = true;\n            invokeCreateHooks(vnode, insertedVnodeQueue);\n            break\n          }\n        }\n        if (!fullInvoke && data['class']) {\n          // ensure collecting deps for deep class bindings for future updates\n          traverse(data['class']);\n        }\n      }\n    } else if (elm.data !== vnode.text) {\n      elm.data = vnode.text;\n    }\n    return true\n  }\n\n  function assertNodeMatch (node, vnode, inVPre) {\n    if (isDef(vnode.tag)) {\n      return vnode.tag.indexOf('vue-component') === 0 || (\n        !isUnknownElement$$1(vnode, inVPre) &&\n        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())\n      )\n    } else {\n      return node.nodeType === (vnode.isComment ? 8 : 3)\n    }\n  }\n\n  return function patch (oldVnode, vnode, hydrating, removeOnly) {\n    if (isUndef(vnode)) {\n      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }\n      return\n    }\n\n    var isInitialPatch = false;\n    var insertedVnodeQueue = [];\n\n    if (isUndef(oldVnode)) {\n      // empty mount (likely as component), create new root element\n      isInitialPatch = true;\n      createElm(vnode, insertedVnodeQueue);\n    } else {\n      var isRealElement = isDef(oldVnode.nodeType);\n      if (!isRealElement && sameVnode(oldVnode, vnode)) {\n        // patch existing root node\n        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);\n      } else {\n        if (isRealElement) {\n          // mounting to a real element\n          // check if this is server-rendered content and if we can perform\n          // a successful hydration.\n          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {\n            oldVnode.removeAttribute(SSR_ATTR);\n            hydrating = true;\n          }\n          if (isTrue(hydrating)) {\n            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {\n              invokeInsertHook(vnode, insertedVnodeQueue, true);\n              return oldVnode\n            } else if (true) {\n              warn(\n                'The client-side rendered virtual DOM tree is not matching ' +\n                'server-rendered content. This is likely caused by incorrect ' +\n                'HTML markup, for example nesting block-level elements inside ' +\n                '<p>, or missing <tbody>. Bailing hydration and performing ' +\n                'full client-side render.'\n              );\n            }\n          }\n          // either not server-rendered, or hydration failed.\n          // create an empty node and replace it\n          oldVnode = emptyNodeAt(oldVnode);\n        }\n\n        // replacing existing element\n        var oldElm = oldVnode.elm;\n        var parentElm = nodeOps.parentNode(oldElm);\n\n        // create new node\n        createElm(\n          vnode,\n          insertedVnodeQueue,\n          // extremely rare edge case: do not insert if old element is in a\n          // leaving transition. Only happens when combining transition +\n          // keep-alive + HOCs. (#4590)\n          oldElm._leaveCb ? null : parentElm,\n          nodeOps.nextSibling(oldElm)\n        );\n\n        // update parent placeholder node element, recursively\n        if (isDef(vnode.parent)) {\n          var ancestor = vnode.parent;\n          var patchable = isPatchable(vnode);\n          while (ancestor) {\n            for (var i = 0; i < cbs.destroy.length; ++i) {\n              cbs.destroy[i](ancestor);\n            }\n            ancestor.elm = vnode.elm;\n            if (patchable) {\n              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {\n                cbs.create[i$1](emptyNode, ancestor);\n              }\n              // #6513\n              // invoke insert hooks that may have been merged by create hooks.\n              // e.g. for directives that uses the \"inserted\" hook.\n              var insert = ancestor.data.hook.insert;\n              if (insert.merged) {\n                // start at index 1 to avoid re-invoking component mounted hook\n                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {\n                  insert.fns[i$2]();\n                }\n              }\n            } else {\n              registerRef(ancestor);\n            }\n            ancestor = ancestor.parent;\n          }\n        }\n\n        // destroy old node\n        if (isDef(parentElm)) {\n          removeVnodes([oldVnode], 0, 0);\n        } else if (isDef(oldVnode.tag)) {\n          invokeDestroyHook(oldVnode);\n        }\n      }\n    }\n\n    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);\n    return vnode.elm\n  }\n}\n\n/*  */\n\nvar directives = {\n  create: updateDirectives,\n  update: updateDirectives,\n  destroy: function unbindDirectives (vnode) {\n    updateDirectives(vnode, emptyNode);\n  }\n};\n\nfunction updateDirectives (oldVnode, vnode) {\n  if (oldVnode.data.directives || vnode.data.directives) {\n    _update(oldVnode, vnode);\n  }\n}\n\nfunction _update (oldVnode, vnode) {\n  var isCreate = oldVnode === emptyNode;\n  var isDestroy = vnode === emptyNode;\n  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);\n  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);\n\n  var dirsWithInsert = [];\n  var dirsWithPostpatch = [];\n\n  var key, oldDir, dir;\n  for (key in newDirs) {\n    oldDir = oldDirs[key];\n    dir = newDirs[key];\n    if (!oldDir) {\n      // new directive, bind\n      callHook$1(dir, 'bind', vnode, oldVnode);\n      if (dir.def && dir.def.inserted) {\n        dirsWithInsert.push(dir);\n      }\n    } else {\n      // existing directive, update\n      dir.oldValue = oldDir.value;\n      dir.oldArg = oldDir.arg;\n      callHook$1(dir, 'update', vnode, oldVnode);\n      if (dir.def && dir.def.componentUpdated) {\n        dirsWithPostpatch.push(dir);\n      }\n    }\n  }\n\n  if (dirsWithInsert.length) {\n    var callInsert = function () {\n      for (var i = 0; i < dirsWithInsert.length; i++) {\n        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);\n      }\n    };\n    if (isCreate) {\n      mergeVNodeHook(vnode, 'insert', callInsert);\n    } else {\n      callInsert();\n    }\n  }\n\n  if (dirsWithPostpatch.length) {\n    mergeVNodeHook(vnode, 'postpatch', function () {\n      for (var i = 0; i < dirsWithPostpatch.length; i++) {\n        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);\n      }\n    });\n  }\n\n  if (!isCreate) {\n    for (key in oldDirs) {\n      if (!newDirs[key]) {\n        // no longer present, unbind\n        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);\n      }\n    }\n  }\n}\n\nvar emptyModifiers = Object.create(null);\n\nfunction normalizeDirectives$1 (\n  dirs,\n  vm\n) {\n  var res = Object.create(null);\n  if (!dirs) {\n    // $flow-disable-line\n    return res\n  }\n  var i, dir;\n  for (i = 0; i < dirs.length; i++) {\n    dir = dirs[i];\n    if (!dir.modifiers) {\n      // $flow-disable-line\n      dir.modifiers = emptyModifiers;\n    }\n    res[getRawDirName(dir)] = dir;\n    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);\n  }\n  // $flow-disable-line\n  return res\n}\n\nfunction getRawDirName (dir) {\n  return dir.rawName || ((dir.name) + \".\" + (Object.keys(dir.modifiers || {}).join('.')))\n}\n\nfunction callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {\n  var fn = dir.def && dir.def[hook];\n  if (fn) {\n    try {\n      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);\n    } catch (e) {\n      handleError(e, vnode.context, (\"directive \" + (dir.name) + \" \" + hook + \" hook\"));\n    }\n  }\n}\n\nvar baseModules = [\n  ref,\n  directives\n];\n\n/*  */\n\nfunction updateAttrs (oldVnode, vnode) {\n  var opts = vnode.componentOptions;\n  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {\n    return\n  }\n  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {\n    return\n  }\n  var key, cur, old;\n  var elm = vnode.elm;\n  var oldAttrs = oldVnode.data.attrs || {};\n  var attrs = vnode.data.attrs || {};\n  // clone observed objects, as the user probably wants to mutate it\n  if (isDef(attrs.__ob__)) {\n    attrs = vnode.data.attrs = extend({}, attrs);\n  }\n\n  for (key in attrs) {\n    cur = attrs[key];\n    old = oldAttrs[key];\n    if (old !== cur) {\n      setAttr(elm, key, cur, vnode.data.pre);\n    }\n  }\n  // #4391: in IE9, setting type can reset value for input[type=radio]\n  // #6666: IE/Edge forces progress value down to 1 before setting a max\n  /* istanbul ignore if */\n  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {\n    setAttr(elm, 'value', attrs.value);\n  }\n  for (key in oldAttrs) {\n    if (isUndef(attrs[key])) {\n      if (isXlink(key)) {\n        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));\n      } else if (!isEnumeratedAttr(key)) {\n        elm.removeAttribute(key);\n      }\n    }\n  }\n}\n\nfunction setAttr (el, key, value, isInPre) {\n  if (isInPre || el.tagName.indexOf('-') > -1) {\n    baseSetAttr(el, key, value);\n  } else if (isBooleanAttr(key)) {\n    // set attribute for blank value\n    // e.g. <option disabled>Select one</option>\n    if (isFalsyAttrValue(value)) {\n      el.removeAttribute(key);\n    } else {\n      // technically allowfullscreen is a boolean attribute for <iframe>,\n      // but Flash expects a value of \"true\" when used on <embed> tag\n      value = key === 'allowfullscreen' && el.tagName === 'EMBED'\n        ? 'true'\n        : key;\n      el.setAttribute(key, value);\n    }\n  } else if (isEnumeratedAttr(key)) {\n    el.setAttribute(key, convertEnumeratedValue(key, value));\n  } else if (isXlink(key)) {\n    if (isFalsyAttrValue(value)) {\n      el.removeAttributeNS(xlinkNS, getXlinkProp(key));\n    } else {\n      el.setAttributeNS(xlinkNS, key, value);\n    }\n  } else {\n    baseSetAttr(el, key, value);\n  }\n}\n\nfunction baseSetAttr (el, key, value) {\n  if (isFalsyAttrValue(value)) {\n    el.removeAttribute(key);\n  } else {\n    // #7138: IE10 & 11 fires input event when setting placeholder on\n    // <textarea>... block the first input event and remove the blocker\n    // immediately.\n    /* istanbul ignore if */\n    if (\n      isIE && !isIE9 &&\n      el.tagName === 'TEXTAREA' &&\n      key === 'placeholder' && value !== '' && !el.__ieph\n    ) {\n      var blocker = function (e) {\n        e.stopImmediatePropagation();\n        el.removeEventListener('input', blocker);\n      };\n      el.addEventListener('input', blocker);\n      // $flow-disable-line\n      el.__ieph = true; /* IE placeholder patched */\n    }\n    el.setAttribute(key, value);\n  }\n}\n\nvar attrs = {\n  create: updateAttrs,\n  update: updateAttrs\n};\n\n/*  */\n\nfunction updateClass (oldVnode, vnode) {\n  var el = vnode.elm;\n  var data = vnode.data;\n  var oldData = oldVnode.data;\n  if (\n    isUndef(data.staticClass) &&\n    isUndef(data.class) && (\n      isUndef(oldData) || (\n        isUndef(oldData.staticClass) &&\n        isUndef(oldData.class)\n      )\n    )\n  ) {\n    return\n  }\n\n  var cls = genClassForVnode(vnode);\n\n  // handle transition classes\n  var transitionClass = el._transitionClasses;\n  if (isDef(transitionClass)) {\n    cls = concat(cls, stringifyClass(transitionClass));\n  }\n\n  // set the class\n  if (cls !== el._prevClass) {\n    el.setAttribute('class', cls);\n    el._prevClass = cls;\n  }\n}\n\nvar klass = {\n  create: updateClass,\n  update: updateClass\n};\n\n/*  */\n\n/*  */\n\n/*  */\n\n/*  */\n\n// in some cases, the event used has to be determined at runtime\n// so we used some reserved tokens during compile.\nvar RANGE_TOKEN = '__r';\nvar CHECKBOX_RADIO_TOKEN = '__c';\n\n/*  */\n\n// normalize v-model event tokens that can only be determined at runtime.\n// it's important to place the event as the first in the array because\n// the whole point is ensuring the v-model callback gets called before\n// user-attached handlers.\nfunction normalizeEvents (on) {\n  /* istanbul ignore if */\n  if (isDef(on[RANGE_TOKEN])) {\n    // IE input[type=range] only supports `change` event\n    var event = isIE ? 'change' : 'input';\n    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);\n    delete on[RANGE_TOKEN];\n  }\n  // This was originally intended to fix #4521 but no longer necessary\n  // after 2.5. Keeping it for backwards compat with generated code from < 2.4\n  /* istanbul ignore if */\n  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {\n    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);\n    delete on[CHECKBOX_RADIO_TOKEN];\n  }\n}\n\nvar target$1;\n\nfunction createOnceHandler$1 (event, handler, capture) {\n  var _target = target$1; // save current target element in closure\n  return function onceHandler () {\n    var res = handler.apply(null, arguments);\n    if (res !== null) {\n      remove$2(event, onceHandler, capture, _target);\n    }\n  }\n}\n\n// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp\n// implementation and does not fire microtasks in between event propagation, so\n// safe to exclude.\nvar useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);\n\nfunction add$1 (\n  name,\n  handler,\n  capture,\n  passive\n) {\n  // async edge case #6566: inner click event triggers patch, event handler\n  // attached to outer element during patch, and triggered again. This\n  // happens because browsers fire microtask ticks between event propagation.\n  // the solution is simple: we save the timestamp when a handler is attached,\n  // and the handler would only fire if the event passed to it was fired\n  // AFTER it was attached.\n  if (useMicrotaskFix) {\n    var attachedTimestamp = currentFlushTimestamp;\n    var original = handler;\n    handler = original._wrapper = function (e) {\n      if (\n        // no bubbling, should always fire.\n        // this is just a safety net in case event.timeStamp is unreliable in\n        // certain weird environments...\n        e.target === e.currentTarget ||\n        // event is fired after handler attachment\n        e.timeStamp >= attachedTimestamp ||\n        // bail for environments that have buggy event.timeStamp implementations\n        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState\n        // #9681 QtWebEngine event.timeStamp is negative value\n        e.timeStamp <= 0 ||\n        // #9448 bail if event is fired in another document in a multi-page\n        // electron/nw.js app, since event.timeStamp will be using a different\n        // starting reference\n        e.target.ownerDocument !== document\n      ) {\n        return original.apply(this, arguments)\n      }\n    };\n  }\n  target$1.addEventListener(\n    name,\n    handler,\n    supportsPassive\n      ? { capture: capture, passive: passive }\n      : capture\n  );\n}\n\nfunction remove$2 (\n  name,\n  handler,\n  capture,\n  _target\n) {\n  (_target || target$1).removeEventListener(\n    name,\n    handler._wrapper || handler,\n    capture\n  );\n}\n\nfunction updateDOMListeners (oldVnode, vnode) {\n  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {\n    return\n  }\n  var on = vnode.data.on || {};\n  var oldOn = oldVnode.data.on || {};\n  target$1 = vnode.elm;\n  normalizeEvents(on);\n  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);\n  target$1 = undefined;\n}\n\nvar events = {\n  create: updateDOMListeners,\n  update: updateDOMListeners\n};\n\n/*  */\n\nvar svgContainer;\n\nfunction updateDOMProps (oldVnode, vnode) {\n  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {\n    return\n  }\n  var key, cur;\n  var elm = vnode.elm;\n  var oldProps = oldVnode.data.domProps || {};\n  var props = vnode.data.domProps || {};\n  // clone observed objects, as the user probably wants to mutate it\n  if (isDef(props.__ob__)) {\n    props = vnode.data.domProps = extend({}, props);\n  }\n\n  for (key in oldProps) {\n    if (!(key in props)) {\n      elm[key] = '';\n    }\n  }\n\n  for (key in props) {\n    cur = props[key];\n    // ignore children if the node has textContent or innerHTML,\n    // as these will throw away existing DOM nodes and cause removal errors\n    // on subsequent patches (#3360)\n    if (key === 'textContent' || key === 'innerHTML') {\n      if (vnode.children) { vnode.children.length = 0; }\n      if (cur === oldProps[key]) { continue }\n      // #6601 work around Chrome version <= 55 bug where single textNode\n      // replaced by innerHTML/textContent retains its parentNode property\n      if (elm.childNodes.length === 1) {\n        elm.removeChild(elm.childNodes[0]);\n      }\n    }\n\n    if (key === 'value' && elm.tagName !== 'PROGRESS') {\n      // store value as _value as well since\n      // non-string values will be stringified\n      elm._value = cur;\n      // avoid resetting cursor position when value is the same\n      var strCur = isUndef(cur) ? '' : String(cur);\n      if (shouldUpdateValue(elm, strCur)) {\n        elm.value = strCur;\n      }\n    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {\n      // IE doesn't support innerHTML for SVG elements\n      svgContainer = svgContainer || document.createElement('div');\n      svgContainer.innerHTML = \"<svg>\" + cur + \"</svg>\";\n      var svg = svgContainer.firstChild;\n      while (elm.firstChild) {\n        elm.removeChild(elm.firstChild);\n      }\n      while (svg.firstChild) {\n        elm.appendChild(svg.firstChild);\n      }\n    } else if (\n      // skip the update if old and new VDOM state is the same.\n      // `value` is handled separately because the DOM value may be temporarily\n      // out of sync with VDOM state due to focus, composition and modifiers.\n      // This  #4521 by skipping the unnecessary `checked` update.\n      cur !== oldProps[key]\n    ) {\n      // some property updates can throw\n      // e.g. `value` on <progress> w/ non-finite value\n      try {\n        elm[key] = cur;\n      } catch (e) {}\n    }\n  }\n}\n\n// check platforms/web/util/attrs.js acceptValue\n\n\nfunction shouldUpdateValue (elm, checkVal) {\n  return (!elm.composing && (\n    elm.tagName === 'OPTION' ||\n    isNotInFocusAndDirty(elm, checkVal) ||\n    isDirtyWithModifiers(elm, checkVal)\n  ))\n}\n\nfunction isNotInFocusAndDirty (elm, checkVal) {\n  // return true when textbox (.number and .trim) loses focus and its value is\n  // not equal to the updated value\n  var notInFocus = true;\n  // #6157\n  // work around IE bug when accessing document.activeElement in an iframe\n  try { notInFocus = document.activeElement !== elm; } catch (e) {}\n  return notInFocus && elm.value !== checkVal\n}\n\nfunction isDirtyWithModifiers (elm, newVal) {\n  var value = elm.value;\n  var modifiers = elm._vModifiers; // injected by v-model runtime\n  if (isDef(modifiers)) {\n    if (modifiers.number) {\n      return toNumber(value) !== toNumber(newVal)\n    }\n    if (modifiers.trim) {\n      return value.trim() !== newVal.trim()\n    }\n  }\n  return value !== newVal\n}\n\nvar domProps = {\n  create: updateDOMProps,\n  update: updateDOMProps\n};\n\n/*  */\n\nvar parseStyleText = cached(function (cssText) {\n  var res = {};\n  var listDelimiter = /;(?![^(]*\\))/g;\n  var propertyDelimiter = /:(.+)/;\n  cssText.split(listDelimiter).forEach(function (item) {\n    if (item) {\n      var tmp = item.split(propertyDelimiter);\n      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());\n    }\n  });\n  return res\n});\n\n// merge static and dynamic style data on the same vnode\nfunction normalizeStyleData (data) {\n  var style = normalizeStyleBinding(data.style);\n  // static style is pre-processed into an object during compilation\n  // and is always a fresh object, so it's safe to merge into it\n  return data.staticStyle\n    ? extend(data.staticStyle, style)\n    : style\n}\n\n// normalize possible array / string values into Object\nfunction normalizeStyleBinding (bindingStyle) {\n  if (Array.isArray(bindingStyle)) {\n    return toObject(bindingStyle)\n  }\n  if (typeof bindingStyle === 'string') {\n    return parseStyleText(bindingStyle)\n  }\n  return bindingStyle\n}\n\n/**\n * parent component style should be after child's\n * so that parent component's style could override it\n */\nfunction getStyle (vnode, checkChild) {\n  var res = {};\n  var styleData;\n\n  if (checkChild) {\n    var childNode = vnode;\n    while (childNode.componentInstance) {\n      childNode = childNode.componentInstance._vnode;\n      if (\n        childNode && childNode.data &&\n        (styleData = normalizeStyleData(childNode.data))\n      ) {\n        extend(res, styleData);\n      }\n    }\n  }\n\n  if ((styleData = normalizeStyleData(vnode.data))) {\n    extend(res, styleData);\n  }\n\n  var parentNode = vnode;\n  while ((parentNode = parentNode.parent)) {\n    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {\n      extend(res, styleData);\n    }\n  }\n  return res\n}\n\n/*  */\n\nvar cssVarRE = /^--/;\nvar importantRE = /\\s*!important$/;\nvar setProp = function (el, name, val) {\n  /* istanbul ignore if */\n  if (cssVarRE.test(name)) {\n    el.style.setProperty(name, val);\n  } else if (importantRE.test(val)) {\n    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');\n  } else {\n    var normalizedName = normalize(name);\n    if (Array.isArray(val)) {\n      // Support values array created by autoprefixer, e.g.\n      // {display: [\"-webkit-box\", \"-ms-flexbox\", \"flex\"]}\n      // Set them one by one, and the browser will only set those it can recognize\n      for (var i = 0, len = val.length; i < len; i++) {\n        el.style[normalizedName] = val[i];\n      }\n    } else {\n      el.style[normalizedName] = val;\n    }\n  }\n};\n\nvar vendorNames = ['Webkit', 'Moz', 'ms'];\n\nvar emptyStyle;\nvar normalize = cached(function (prop) {\n  emptyStyle = emptyStyle || document.createElement('div').style;\n  prop = camelize(prop);\n  if (prop !== 'filter' && (prop in emptyStyle)) {\n    return prop\n  }\n  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);\n  for (var i = 0; i < vendorNames.length; i++) {\n    var name = vendorNames[i] + capName;\n    if (name in emptyStyle) {\n      return name\n    }\n  }\n});\n\nfunction updateStyle (oldVnode, vnode) {\n  var data = vnode.data;\n  var oldData = oldVnode.data;\n\n  if (isUndef(data.staticStyle) && isUndef(data.style) &&\n    isUndef(oldData.staticStyle) && isUndef(oldData.style)\n  ) {\n    return\n  }\n\n  var cur, name;\n  var el = vnode.elm;\n  var oldStaticStyle = oldData.staticStyle;\n  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};\n\n  // if static style exists, stylebinding already merged into it when doing normalizeStyleData\n  var oldStyle = oldStaticStyle || oldStyleBinding;\n\n  var style = normalizeStyleBinding(vnode.data.style) || {};\n\n  // store normalized style under a different key for next diff\n  // make sure to clone it if it's reactive, since the user likely wants\n  // to mutate it.\n  vnode.data.normalizedStyle = isDef(style.__ob__)\n    ? extend({}, style)\n    : style;\n\n  var newStyle = getStyle(vnode, true);\n\n  for (name in oldStyle) {\n    if (isUndef(newStyle[name])) {\n      setProp(el, name, '');\n    }\n  }\n  for (name in newStyle) {\n    cur = newStyle[name];\n    if (cur !== oldStyle[name]) {\n      // ie9 setting to null has no effect, must use empty string\n      setProp(el, name, cur == null ? '' : cur);\n    }\n  }\n}\n\nvar style = {\n  create: updateStyle,\n  update: updateStyle\n};\n\n/*  */\n\nvar whitespaceRE = /\\s+/;\n\n/**\n * Add class with compatibility for SVG since classList is not supported on\n * SVG elements in IE\n */\nfunction addClass (el, cls) {\n  /* istanbul ignore if */\n  if (!cls || !(cls = cls.trim())) {\n    return\n  }\n\n  /* istanbul ignore else */\n  if (el.classList) {\n    if (cls.indexOf(' ') > -1) {\n      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });\n    } else {\n      el.classList.add(cls);\n    }\n  } else {\n    var cur = \" \" + (el.getAttribute('class') || '') + \" \";\n    if (cur.indexOf(' ' + cls + ' ') < 0) {\n      el.setAttribute('class', (cur + cls).trim());\n    }\n  }\n}\n\n/**\n * Remove class with compatibility for SVG since classList is not supported on\n * SVG elements in IE\n */\nfunction removeClass (el, cls) {\n  /* istanbul ignore if */\n  if (!cls || !(cls = cls.trim())) {\n    return\n  }\n\n  /* istanbul ignore else */\n  if (el.classList) {\n    if (cls.indexOf(' ') > -1) {\n      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });\n    } else {\n      el.classList.remove(cls);\n    }\n    if (!el.classList.length) {\n      el.removeAttribute('class');\n    }\n  } else {\n    var cur = \" \" + (el.getAttribute('class') || '') + \" \";\n    var tar = ' ' + cls + ' ';\n    while (cur.indexOf(tar) >= 0) {\n      cur = cur.replace(tar, ' ');\n    }\n    cur = cur.trim();\n    if (cur) {\n      el.setAttribute('class', cur);\n    } else {\n      el.removeAttribute('class');\n    }\n  }\n}\n\n/*  */\n\nfunction resolveTransition (def$$1) {\n  if (!def$$1) {\n    return\n  }\n  /* istanbul ignore else */\n  if (typeof def$$1 === 'object') {\n    var res = {};\n    if (def$$1.css !== false) {\n      extend(res, autoCssTransition(def$$1.name || 'v'));\n    }\n    extend(res, def$$1);\n    return res\n  } else if (typeof def$$1 === 'string') {\n    return autoCssTransition(def$$1)\n  }\n}\n\nvar autoCssTransition = cached(function (name) {\n  return {\n    enterClass: (name + \"-enter\"),\n    enterToClass: (name + \"-enter-to\"),\n    enterActiveClass: (name + \"-enter-active\"),\n    leaveClass: (name + \"-leave\"),\n    leaveToClass: (name + \"-leave-to\"),\n    leaveActiveClass: (name + \"-leave-active\")\n  }\n});\n\nvar hasTransition = inBrowser && !isIE9;\nvar TRANSITION = 'transition';\nvar ANIMATION = 'animation';\n\n// Transition property/event sniffing\nvar transitionProp = 'transition';\nvar transitionEndEvent = 'transitionend';\nvar animationProp = 'animation';\nvar animationEndEvent = 'animationend';\nif (hasTransition) {\n  /* istanbul ignore if */\n  if (window.ontransitionend === undefined &&\n    window.onwebkittransitionend !== undefined\n  ) {\n    transitionProp = 'WebkitTransition';\n    transitionEndEvent = 'webkitTransitionEnd';\n  }\n  if (window.onanimationend === undefined &&\n    window.onwebkitanimationend !== undefined\n  ) {\n    animationProp = 'WebkitAnimation';\n    animationEndEvent = 'webkitAnimationEnd';\n  }\n}\n\n// binding to window is necessary to make hot reload work in IE in strict mode\nvar raf = inBrowser\n  ? window.requestAnimationFrame\n    ? window.requestAnimationFrame.bind(window)\n    : setTimeout\n  : /* istanbul ignore next */ function (fn) { return fn(); };\n\nfunction nextFrame (fn) {\n  raf(function () {\n    raf(fn);\n  });\n}\n\nfunction addTransitionClass (el, cls) {\n  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);\n  if (transitionClasses.indexOf(cls) < 0) {\n    transitionClasses.push(cls);\n    addClass(el, cls);\n  }\n}\n\nfunction removeTransitionClass (el, cls) {\n  if (el._transitionClasses) {\n    remove(el._transitionClasses, cls);\n  }\n  removeClass(el, cls);\n}\n\nfunction whenTransitionEnds (\n  el,\n  expectedType,\n  cb\n) {\n  var ref = getTransitionInfo(el, expectedType);\n  var type = ref.type;\n  var timeout = ref.timeout;\n  var propCount = ref.propCount;\n  if (!type) { return cb() }\n  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;\n  var ended = 0;\n  var end = function () {\n    el.removeEventListener(event, onEnd);\n    cb();\n  };\n  var onEnd = function (e) {\n    if (e.target === el) {\n      if (++ended >= propCount) {\n        end();\n      }\n    }\n  };\n  setTimeout(function () {\n    if (ended < propCount) {\n      end();\n    }\n  }, timeout + 1);\n  el.addEventListener(event, onEnd);\n}\n\nvar transformRE = /\\b(transform|all)(,|$)/;\n\nfunction getTransitionInfo (el, expectedType) {\n  var styles = window.getComputedStyle(el);\n  // JSDOM may return undefined for transition properties\n  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');\n  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');\n  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);\n  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');\n  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');\n  var animationTimeout = getTimeout(animationDelays, animationDurations);\n\n  var type;\n  var timeout = 0;\n  var propCount = 0;\n  /* istanbul ignore if */\n  if (expectedType === TRANSITION) {\n    if (transitionTimeout > 0) {\n      type = TRANSITION;\n      timeout = transitionTimeout;\n      propCount = transitionDurations.length;\n    }\n  } else if (expectedType === ANIMATION) {\n    if (animationTimeout > 0) {\n      type = ANIMATION;\n      timeout = animationTimeout;\n      propCount = animationDurations.length;\n    }\n  } else {\n    timeout = Math.max(transitionTimeout, animationTimeout);\n    type = timeout > 0\n      ? transitionTimeout > animationTimeout\n        ? TRANSITION\n        : ANIMATION\n      : null;\n    propCount = type\n      ? type === TRANSITION\n        ? transitionDurations.length\n        : animationDurations.length\n      : 0;\n  }\n  var hasTransform =\n    type === TRANSITION &&\n    transformRE.test(styles[transitionProp + 'Property']);\n  return {\n    type: type,\n    timeout: timeout,\n    propCount: propCount,\n    hasTransform: hasTransform\n  }\n}\n\nfunction getTimeout (delays, durations) {\n  /* istanbul ignore next */\n  while (delays.length < durations.length) {\n    delays = delays.concat(delays);\n  }\n\n  return Math.max.apply(null, durations.map(function (d, i) {\n    return toMs(d) + toMs(delays[i])\n  }))\n}\n\n// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers\n// in a locale-dependent way, using a comma instead of a dot.\n// If comma is not replaced with a dot, the input will be rounded down (i.e. acting\n// as a floor function) causing unexpected behaviors\nfunction toMs (s) {\n  return Number(s.slice(0, -1).replace(',', '.')) * 1000\n}\n\n/*  */\n\nfunction enter (vnode, toggleDisplay) {\n  var el = vnode.elm;\n\n  // call leave callback now\n  if (isDef(el._leaveCb)) {\n    el._leaveCb.cancelled = true;\n    el._leaveCb();\n  }\n\n  var data = resolveTransition(vnode.data.transition);\n  if (isUndef(data)) {\n    return\n  }\n\n  /* istanbul ignore if */\n  if (isDef(el._enterCb) || el.nodeType !== 1) {\n    return\n  }\n\n  var css = data.css;\n  var type = data.type;\n  var enterClass = data.enterClass;\n  var enterToClass = data.enterToClass;\n  var enterActiveClass = data.enterActiveClass;\n  var appearClass = data.appearClass;\n  var appearToClass = data.appearToClass;\n  var appearActiveClass = data.appearActiveClass;\n  var beforeEnter = data.beforeEnter;\n  var enter = data.enter;\n  var afterEnter = data.afterEnter;\n  var enterCancelled = data.enterCancelled;\n  var beforeAppear = data.beforeAppear;\n  var appear = data.appear;\n  var afterAppear = data.afterAppear;\n  var appearCancelled = data.appearCancelled;\n  var duration = data.duration;\n\n  // activeInstance will always be the <transition> component managing this\n  // transition. One edge case to check is when the <transition> is placed\n  // as the root node of a child component. In that case we need to check\n  // <transition>'s parent for appear check.\n  var context = activeInstance;\n  var transitionNode = activeInstance.$vnode;\n  while (transitionNode && transitionNode.parent) {\n    context = transitionNode.context;\n    transitionNode = transitionNode.parent;\n  }\n\n  var isAppear = !context._isMounted || !vnode.isRootInsert;\n\n  if (isAppear && !appear && appear !== '') {\n    return\n  }\n\n  var startClass = isAppear && appearClass\n    ? appearClass\n    : enterClass;\n  var activeClass = isAppear && appearActiveClass\n    ? appearActiveClass\n    : enterActiveClass;\n  var toClass = isAppear && appearToClass\n    ? appearToClass\n    : enterToClass;\n\n  var beforeEnterHook = isAppear\n    ? (beforeAppear || beforeEnter)\n    : beforeEnter;\n  var enterHook = isAppear\n    ? (typeof appear === 'function' ? appear : enter)\n    : enter;\n  var afterEnterHook = isAppear\n    ? (afterAppear || afterEnter)\n    : afterEnter;\n  var enterCancelledHook = isAppear\n    ? (appearCancelled || enterCancelled)\n    : enterCancelled;\n\n  var explicitEnterDuration = toNumber(\n    isObject(duration)\n      ? duration.enter\n      : duration\n  );\n\n  if ( true && explicitEnterDuration != null) {\n    checkDuration(explicitEnterDuration, 'enter', vnode);\n  }\n\n  var expectsCSS = css !== false && !isIE9;\n  var userWantsControl = getHookArgumentsLength(enterHook);\n\n  var cb = el._enterCb = once(function () {\n    if (expectsCSS) {\n      removeTransitionClass(el, toClass);\n      removeTransitionClass(el, activeClass);\n    }\n    if (cb.cancelled) {\n      if (expectsCSS) {\n        removeTransitionClass(el, startClass);\n      }\n      enterCancelledHook && enterCancelledHook(el);\n    } else {\n      afterEnterHook && afterEnterHook(el);\n    }\n    el._enterCb = null;\n  });\n\n  if (!vnode.data.show) {\n    // remove pending leave element on enter by injecting an insert hook\n    mergeVNodeHook(vnode, 'insert', function () {\n      var parent = el.parentNode;\n      var pendingNode = parent && parent._pending && parent._pending[vnode.key];\n      if (pendingNode &&\n        pendingNode.tag === vnode.tag &&\n        pendingNode.elm._leaveCb\n      ) {\n        pendingNode.elm._leaveCb();\n      }\n      enterHook && enterHook(el, cb);\n    });\n  }\n\n  // start enter transition\n  beforeEnterHook && beforeEnterHook(el);\n  if (expectsCSS) {\n    addTransitionClass(el, startClass);\n    addTransitionClass(el, activeClass);\n    nextFrame(function () {\n      removeTransitionClass(el, startClass);\n      if (!cb.cancelled) {\n        addTransitionClass(el, toClass);\n        if (!userWantsControl) {\n          if (isValidDuration(explicitEnterDuration)) {\n            setTimeout(cb, explicitEnterDuration);\n          } else {\n            whenTransitionEnds(el, type, cb);\n          }\n        }\n      }\n    });\n  }\n\n  if (vnode.data.show) {\n    toggleDisplay && toggleDisplay();\n    enterHook && enterHook(el, cb);\n  }\n\n  if (!expectsCSS && !userWantsControl) {\n    cb();\n  }\n}\n\nfunction leave (vnode, rm) {\n  var el = vnode.elm;\n\n  // call enter callback now\n  if (isDef(el._enterCb)) {\n    el._enterCb.cancelled = true;\n    el._enterCb();\n  }\n\n  var data = resolveTransition(vnode.data.transition);\n  if (isUndef(data) || el.nodeType !== 1) {\n    return rm()\n  }\n\n  /* istanbul ignore if */\n  if (isDef(el._leaveCb)) {\n    return\n  }\n\n  var css = data.css;\n  var type = data.type;\n  var leaveClass = data.leaveClass;\n  var leaveToClass = data.leaveToClass;\n  var leaveActiveClass = data.leaveActiveClass;\n  var beforeLeave = data.beforeLeave;\n  var leave = data.leave;\n  var afterLeave = data.afterLeave;\n  var leaveCancelled = data.leaveCancelled;\n  var delayLeave = data.delayLeave;\n  var duration = data.duration;\n\n  var expectsCSS = css !== false && !isIE9;\n  var userWantsControl = getHookArgumentsLength(leave);\n\n  var explicitLeaveDuration = toNumber(\n    isObject(duration)\n      ? duration.leave\n      : duration\n  );\n\n  if ( true && isDef(explicitLeaveDuration)) {\n    checkDuration(explicitLeaveDuration, 'leave', vnode);\n  }\n\n  var cb = el._leaveCb = once(function () {\n    if (el.parentNode && el.parentNode._pending) {\n      el.parentNode._pending[vnode.key] = null;\n    }\n    if (expectsCSS) {\n      removeTransitionClass(el, leaveToClass);\n      removeTransitionClass(el, leaveActiveClass);\n    }\n    if (cb.cancelled) {\n      if (expectsCSS) {\n        removeTransitionClass(el, leaveClass);\n      }\n      leaveCancelled && leaveCancelled(el);\n    } else {\n      rm();\n      afterLeave && afterLeave(el);\n    }\n    el._leaveCb = null;\n  });\n\n  if (delayLeave) {\n    delayLeave(performLeave);\n  } else {\n    performLeave();\n  }\n\n  function performLeave () {\n    // the delayed leave may have already been cancelled\n    if (cb.cancelled) {\n      return\n    }\n    // record leaving element\n    if (!vnode.data.show && el.parentNode) {\n      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;\n    }\n    beforeLeave && beforeLeave(el);\n    if (expectsCSS) {\n      addTransitionClass(el, leaveClass);\n      addTransitionClass(el, leaveActiveClass);\n      nextFrame(function () {\n        removeTransitionClass(el, leaveClass);\n        if (!cb.cancelled) {\n          addTransitionClass(el, leaveToClass);\n          if (!userWantsControl) {\n            if (isValidDuration(explicitLeaveDuration)) {\n              setTimeout(cb, explicitLeaveDuration);\n            } else {\n              whenTransitionEnds(el, type, cb);\n            }\n          }\n        }\n      });\n    }\n    leave && leave(el, cb);\n    if (!expectsCSS && !userWantsControl) {\n      cb();\n    }\n  }\n}\n\n// only used in dev mode\nfunction checkDuration (val, name, vnode) {\n  if (typeof val !== 'number') {\n    warn(\n      \"<transition> explicit \" + name + \" duration is not a valid number - \" +\n      \"got \" + (JSON.stringify(val)) + \".\",\n      vnode.context\n    );\n  } else if (isNaN(val)) {\n    warn(\n      \"<transition> explicit \" + name + \" duration is NaN - \" +\n      'the duration expression might be incorrect.',\n      vnode.context\n    );\n  }\n}\n\nfunction isValidDuration (val) {\n  return typeof val === 'number' && !isNaN(val)\n}\n\n/**\n * Normalize a transition hook's argument length. The hook may be:\n * - a merged hook (invoker) with the original in .fns\n * - a wrapped component method (check ._length)\n * - a plain function (.length)\n */\nfunction getHookArgumentsLength (fn) {\n  if (isUndef(fn)) {\n    return false\n  }\n  var invokerFns = fn.fns;\n  if (isDef(invokerFns)) {\n    // invoker\n    return getHookArgumentsLength(\n      Array.isArray(invokerFns)\n        ? invokerFns[0]\n        : invokerFns\n    )\n  } else {\n    return (fn._length || fn.length) > 1\n  }\n}\n\nfunction _enter (_, vnode) {\n  if (vnode.data.show !== true) {\n    enter(vnode);\n  }\n}\n\nvar transition = inBrowser ? {\n  create: _enter,\n  activate: _enter,\n  remove: function remove$$1 (vnode, rm) {\n    /* istanbul ignore else */\n    if (vnode.data.show !== true) {\n      leave(vnode, rm);\n    } else {\n      rm();\n    }\n  }\n} : {};\n\nvar platformModules = [\n  attrs,\n  klass,\n  events,\n  domProps,\n  style,\n  transition\n];\n\n/*  */\n\n// the directive module should be applied last, after all\n// built-in modules have been applied.\nvar modules = platformModules.concat(baseModules);\n\nvar patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });\n\n/**\n * Not type checking this file because flow doesn't like attaching\n * properties to Elements.\n */\n\n/* istanbul ignore if */\nif (isIE9) {\n  // http://www.matts411.com/post/internet-explorer-9-oninput/\n  document.addEventListener('selectionchange', function () {\n    var el = document.activeElement;\n    if (el && el.vmodel) {\n      trigger(el, 'input');\n    }\n  });\n}\n\nvar directive = {\n  inserted: function inserted (el, binding, vnode, oldVnode) {\n    if (vnode.tag === 'select') {\n      // #6903\n      if (oldVnode.elm && !oldVnode.elm._vOptions) {\n        mergeVNodeHook(vnode, 'postpatch', function () {\n          directive.componentUpdated(el, binding, vnode);\n        });\n      } else {\n        setSelected(el, binding, vnode.context);\n      }\n      el._vOptions = [].map.call(el.options, getValue);\n    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {\n      el._vModifiers = binding.modifiers;\n      if (!binding.modifiers.lazy) {\n        el.addEventListener('compositionstart', onCompositionStart);\n        el.addEventListener('compositionend', onCompositionEnd);\n        // Safari < 10.2 & UIWebView doesn't fire compositionend when\n        // switching focus before confirming composition choice\n        // this also fixes the issue where some browsers e.g. iOS Chrome\n        // fires \"change\" instead of \"input\" on autocomplete.\n        el.addEventListener('change', onCompositionEnd);\n        /* istanbul ignore if */\n        if (isIE9) {\n          el.vmodel = true;\n        }\n      }\n    }\n  },\n\n  componentUpdated: function componentUpdated (el, binding, vnode) {\n    if (vnode.tag === 'select') {\n      setSelected(el, binding, vnode.context);\n      // in case the options rendered by v-for have changed,\n      // it's possible that the value is out-of-sync with the rendered options.\n      // detect such cases and filter out values that no longer has a matching\n      // option in the DOM.\n      var prevOptions = el._vOptions;\n      var curOptions = el._vOptions = [].map.call(el.options, getValue);\n      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {\n        // trigger change event if\n        // no matching option found for at least one value\n        var needReset = el.multiple\n          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })\n          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);\n        if (needReset) {\n          trigger(el, 'change');\n        }\n      }\n    }\n  }\n};\n\nfunction setSelected (el, binding, vm) {\n  actuallySetSelected(el, binding, vm);\n  /* istanbul ignore if */\n  if (isIE || isEdge) {\n    setTimeout(function () {\n      actuallySetSelected(el, binding, vm);\n    }, 0);\n  }\n}\n\nfunction actuallySetSelected (el, binding, vm) {\n  var value = binding.value;\n  var isMultiple = el.multiple;\n  if (isMultiple && !Array.isArray(value)) {\n     true && warn(\n      \"<select multiple v-model=\\\"\" + (binding.expression) + \"\\\"> \" +\n      \"expects an Array value for its binding, but got \" + (Object.prototype.toString.call(value).slice(8, -1)),\n      vm\n    );\n    return\n  }\n  var selected, option;\n  for (var i = 0, l = el.options.length; i < l; i++) {\n    option = el.options[i];\n    if (isMultiple) {\n      selected = looseIndexOf(value, getValue(option)) > -1;\n      if (option.selected !== selected) {\n        option.selected = selected;\n      }\n    } else {\n      if (looseEqual(getValue(option), value)) {\n        if (el.selectedIndex !== i) {\n          el.selectedIndex = i;\n        }\n        return\n      }\n    }\n  }\n  if (!isMultiple) {\n    el.selectedIndex = -1;\n  }\n}\n\nfunction hasNoMatchingOption (value, options) {\n  return options.every(function (o) { return !looseEqual(o, value); })\n}\n\nfunction getValue (option) {\n  return '_value' in option\n    ? option._value\n    : option.value\n}\n\nfunction onCompositionStart (e) {\n  e.target.composing = true;\n}\n\nfunction onCompositionEnd (e) {\n  // prevent triggering an input event for no reason\n  if (!e.target.composing) { return }\n  e.target.composing = false;\n  trigger(e.target, 'input');\n}\n\nfunction trigger (el, type) {\n  var e = document.createEvent('HTMLEvents');\n  e.initEvent(type, true, true);\n  el.dispatchEvent(e);\n}\n\n/*  */\n\n// recursively search for possible transition defined inside the component root\nfunction locateNode (vnode) {\n  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)\n    ? locateNode(vnode.componentInstance._vnode)\n    : vnode\n}\n\nvar show = {\n  bind: function bind (el, ref, vnode) {\n    var value = ref.value;\n\n    vnode = locateNode(vnode);\n    var transition$$1 = vnode.data && vnode.data.transition;\n    var originalDisplay = el.__vOriginalDisplay =\n      el.style.display === 'none' ? '' : el.style.display;\n    if (value && transition$$1) {\n      vnode.data.show = true;\n      enter(vnode, function () {\n        el.style.display = originalDisplay;\n      });\n    } else {\n      el.style.display = value ? originalDisplay : 'none';\n    }\n  },\n\n  update: function update (el, ref, vnode) {\n    var value = ref.value;\n    var oldValue = ref.oldValue;\n\n    /* istanbul ignore if */\n    if (!value === !oldValue) { return }\n    vnode = locateNode(vnode);\n    var transition$$1 = vnode.data && vnode.data.transition;\n    if (transition$$1) {\n      vnode.data.show = true;\n      if (value) {\n        enter(vnode, function () {\n          el.style.display = el.__vOriginalDisplay;\n        });\n      } else {\n        leave(vnode, function () {\n          el.style.display = 'none';\n        });\n      }\n    } else {\n      el.style.display = value ? el.__vOriginalDisplay : 'none';\n    }\n  },\n\n  unbind: function unbind (\n    el,\n    binding,\n    vnode,\n    oldVnode,\n    isDestroy\n  ) {\n    if (!isDestroy) {\n      el.style.display = el.__vOriginalDisplay;\n    }\n  }\n};\n\nvar platformDirectives = {\n  model: directive,\n  show: show\n};\n\n/*  */\n\nvar transitionProps = {\n  name: String,\n  appear: Boolean,\n  css: Boolean,\n  mode: String,\n  type: String,\n  enterClass: String,\n  leaveClass: String,\n  enterToClass: String,\n  leaveToClass: String,\n  enterActiveClass: String,\n  leaveActiveClass: String,\n  appearClass: String,\n  appearActiveClass: String,\n  appearToClass: String,\n  duration: [Number, String, Object]\n};\n\n// in case the child is also an abstract component, e.g. <keep-alive>\n// we want to recursively retrieve the real component to be rendered\nfunction getRealChild (vnode) {\n  var compOptions = vnode && vnode.componentOptions;\n  if (compOptions && compOptions.Ctor.options.abstract) {\n    return getRealChild(getFirstComponentChild(compOptions.children))\n  } else {\n    return vnode\n  }\n}\n\nfunction extractTransitionData (comp) {\n  var data = {};\n  var options = comp.$options;\n  // props\n  for (var key in options.propsData) {\n    data[key] = comp[key];\n  }\n  // events.\n  // extract listeners and pass them directly to the transition methods\n  var listeners = options._parentListeners;\n  for (var key$1 in listeners) {\n    data[camelize(key$1)] = listeners[key$1];\n  }\n  return data\n}\n\nfunction placeholder (h, rawChild) {\n  if (/\\d-keep-alive$/.test(rawChild.tag)) {\n    return h('keep-alive', {\n      props: rawChild.componentOptions.propsData\n    })\n  }\n}\n\nfunction hasParentTransition (vnode) {\n  while ((vnode = vnode.parent)) {\n    if (vnode.data.transition) {\n      return true\n    }\n  }\n}\n\nfunction isSameChild (child, oldChild) {\n  return oldChild.key === child.key && oldChild.tag === child.tag\n}\n\nvar isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };\n\nvar isVShowDirective = function (d) { return d.name === 'show'; };\n\nvar Transition = {\n  name: 'transition',\n  props: transitionProps,\n  abstract: true,\n\n  render: function render (h) {\n    var this$1 = this;\n\n    var children = this.$slots.default;\n    if (!children) {\n      return\n    }\n\n    // filter out text nodes (possible whitespaces)\n    children = children.filter(isNotTextNode);\n    /* istanbul ignore if */\n    if (!children.length) {\n      return\n    }\n\n    // warn multiple elements\n    if ( true && children.length > 1) {\n      warn(\n        '<transition> can only be used on a single element. Use ' +\n        '<transition-group> for lists.',\n        this.$parent\n      );\n    }\n\n    var mode = this.mode;\n\n    // warn invalid mode\n    if ( true &&\n      mode && mode !== 'in-out' && mode !== 'out-in'\n    ) {\n      warn(\n        'invalid <transition> mode: ' + mode,\n        this.$parent\n      );\n    }\n\n    var rawChild = children[0];\n\n    // if this is a component root node and the component's\n    // parent container node also has transition, skip.\n    if (hasParentTransition(this.$vnode)) {\n      return rawChild\n    }\n\n    // apply transition data to child\n    // use getRealChild() to ignore abstract components e.g. keep-alive\n    var child = getRealChild(rawChild);\n    /* istanbul ignore if */\n    if (!child) {\n      return rawChild\n    }\n\n    if (this._leaving) {\n      return placeholder(h, rawChild)\n    }\n\n    // ensure a key that is unique to the vnode type and to this transition\n    // component instance. This key will be used to remove pending leaving nodes\n    // during entering.\n    var id = \"__transition-\" + (this._uid) + \"-\";\n    child.key = child.key == null\n      ? child.isComment\n        ? id + 'comment'\n        : id + child.tag\n      : isPrimitive(child.key)\n        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)\n        : child.key;\n\n    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);\n    var oldRawChild = this._vnode;\n    var oldChild = getRealChild(oldRawChild);\n\n    // mark v-show\n    // so that the transition module can hand over the control to the directive\n    if (child.data.directives && child.data.directives.some(isVShowDirective)) {\n      child.data.show = true;\n    }\n\n    if (\n      oldChild &&\n      oldChild.data &&\n      !isSameChild(child, oldChild) &&\n      !isAsyncPlaceholder(oldChild) &&\n      // #6687 component root is a comment node\n      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)\n    ) {\n      // replace old child transition data with fresh one\n      // important for dynamic transitions!\n      var oldData = oldChild.data.transition = extend({}, data);\n      // handle transition mode\n      if (mode === 'out-in') {\n        // return placeholder node and queue update when leave finishes\n        this._leaving = true;\n        mergeVNodeHook(oldData, 'afterLeave', function () {\n          this$1._leaving = false;\n          this$1.$forceUpdate();\n        });\n        return placeholder(h, rawChild)\n      } else if (mode === 'in-out') {\n        if (isAsyncPlaceholder(child)) {\n          return oldRawChild\n        }\n        var delayedLeave;\n        var performLeave = function () { delayedLeave(); };\n        mergeVNodeHook(data, 'afterEnter', performLeave);\n        mergeVNodeHook(data, 'enterCancelled', performLeave);\n        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });\n      }\n    }\n\n    return rawChild\n  }\n};\n\n/*  */\n\nvar props = extend({\n  tag: String,\n  moveClass: String\n}, transitionProps);\n\ndelete props.mode;\n\nvar TransitionGroup = {\n  props: props,\n\n  beforeMount: function beforeMount () {\n    var this$1 = this;\n\n    var update = this._update;\n    this._update = function (vnode, hydrating) {\n      var restoreActiveInstance = setActiveInstance(this$1);\n      // force removing pass\n      this$1.__patch__(\n        this$1._vnode,\n        this$1.kept,\n        false, // hydrating\n        true // removeOnly (!important, avoids unnecessary moves)\n      );\n      this$1._vnode = this$1.kept;\n      restoreActiveInstance();\n      update.call(this$1, vnode, hydrating);\n    };\n  },\n\n  render: function render (h) {\n    var tag = this.tag || this.$vnode.data.tag || 'span';\n    var map = Object.create(null);\n    var prevChildren = this.prevChildren = this.children;\n    var rawChildren = this.$slots.default || [];\n    var children = this.children = [];\n    var transitionData = extractTransitionData(this);\n\n    for (var i = 0; i < rawChildren.length; i++) {\n      var c = rawChildren[i];\n      if (c.tag) {\n        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {\n          children.push(c);\n          map[c.key] = c\n          ;(c.data || (c.data = {})).transition = transitionData;\n        } else if (true) {\n          var opts = c.componentOptions;\n          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;\n          warn((\"<transition-group> children must be keyed: <\" + name + \">\"));\n        }\n      }\n    }\n\n    if (prevChildren) {\n      var kept = [];\n      var removed = [];\n      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {\n        var c$1 = prevChildren[i$1];\n        c$1.data.transition = transitionData;\n        c$1.data.pos = c$1.elm.getBoundingClientRect();\n        if (map[c$1.key]) {\n          kept.push(c$1);\n        } else {\n          removed.push(c$1);\n        }\n      }\n      this.kept = h(tag, null, kept);\n      this.removed = removed;\n    }\n\n    return h(tag, null, children)\n  },\n\n  updated: function updated () {\n    var children = this.prevChildren;\n    var moveClass = this.moveClass || ((this.name || 'v') + '-move');\n    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {\n      return\n    }\n\n    // we divide the work into three loops to avoid mixing DOM reads and writes\n    // in each iteration - which helps prevent layout thrashing.\n    children.forEach(callPendingCbs);\n    children.forEach(recordPosition);\n    children.forEach(applyTranslation);\n\n    // force reflow to put everything in position\n    // assign to this to avoid being removed in tree-shaking\n    // $flow-disable-line\n    this._reflow = document.body.offsetHeight;\n\n    children.forEach(function (c) {\n      if (c.data.moved) {\n        var el = c.elm;\n        var s = el.style;\n        addTransitionClass(el, moveClass);\n        s.transform = s.WebkitTransform = s.transitionDuration = '';\n        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {\n          if (e && e.target !== el) {\n            return\n          }\n          if (!e || /transform$/.test(e.propertyName)) {\n            el.removeEventListener(transitionEndEvent, cb);\n            el._moveCb = null;\n            removeTransitionClass(el, moveClass);\n          }\n        });\n      }\n    });\n  },\n\n  methods: {\n    hasMove: function hasMove (el, moveClass) {\n      /* istanbul ignore if */\n      if (!hasTransition) {\n        return false\n      }\n      /* istanbul ignore if */\n      if (this._hasMove) {\n        return this._hasMove\n      }\n      // Detect whether an element with the move class applied has\n      // CSS transitions. Since the element may be inside an entering\n      // transition at this very moment, we make a clone of it and remove\n      // all other transition classes applied to ensure only the move class\n      // is applied.\n      var clone = el.cloneNode();\n      if (el._transitionClasses) {\n        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });\n      }\n      addClass(clone, moveClass);\n      clone.style.display = 'none';\n      this.$el.appendChild(clone);\n      var info = getTransitionInfo(clone);\n      this.$el.removeChild(clone);\n      return (this._hasMove = info.hasTransform)\n    }\n  }\n};\n\nfunction callPendingCbs (c) {\n  /* istanbul ignore if */\n  if (c.elm._moveCb) {\n    c.elm._moveCb();\n  }\n  /* istanbul ignore if */\n  if (c.elm._enterCb) {\n    c.elm._enterCb();\n  }\n}\n\nfunction recordPosition (c) {\n  c.data.newPos = c.elm.getBoundingClientRect();\n}\n\nfunction applyTranslation (c) {\n  var oldPos = c.data.pos;\n  var newPos = c.data.newPos;\n  var dx = oldPos.left - newPos.left;\n  var dy = oldPos.top - newPos.top;\n  if (dx || dy) {\n    c.data.moved = true;\n    var s = c.elm.style;\n    s.transform = s.WebkitTransform = \"translate(\" + dx + \"px,\" + dy + \"px)\";\n    s.transitionDuration = '0s';\n  }\n}\n\nvar platformComponents = {\n  Transition: Transition,\n  TransitionGroup: TransitionGroup\n};\n\n/*  */\n\n// install platform specific utils\nVue.config.mustUseProp = mustUseProp;\nVue.config.isReservedTag = isReservedTag;\nVue.config.isReservedAttr = isReservedAttr;\nVue.config.getTagNamespace = getTagNamespace;\nVue.config.isUnknownElement = isUnknownElement;\n\n// install platform runtime directives & components\nextend(Vue.options.directives, platformDirectives);\nextend(Vue.options.components, platformComponents);\n\n// install platform patch function\nVue.prototype.__patch__ = inBrowser ? patch : noop;\n\n// public mount method\nVue.prototype.$mount = function (\n  el,\n  hydrating\n) {\n  el = el && inBrowser ? query(el) : undefined;\n  return mountComponent(this, el, hydrating)\n};\n\n// devtools global hook\n/* istanbul ignore next */\nif (inBrowser) {\n  setTimeout(function () {\n    if (config.devtools) {\n      if (devtools) {\n        devtools.emit('init', Vue);\n      } else if (\n        true\n      ) {\n        console[console.info ? 'info' : 'log'](\n          'Download the Vue Devtools extension for a better development experience:\\n' +\n          'https://github.com/vuejs/vue-devtools'\n        );\n      }\n    }\n    if ( true &&\n      config.productionTip !== false &&\n      typeof console !== 'undefined'\n    ) {\n      console[console.info ? 'info' : 'log'](\n        \"You are running Vue in development mode.\\n\" +\n        \"Make sure to turn on production mode when deploying for production.\\n\" +\n        \"See more tips at https://vuejs.org/guide/deployment.html\"\n      );\n    }\n  }, 0);\n}\n\n/*  */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vue);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/vue/dist/vue.runtime.esm.js?");

/***/ }),

/***/ "./node_modules/vuex-webextensions/dist/backgroundScript.js":
/*!******************************************************************!*\
  !*** ./node_modules/vuex-webextensions/dist/backgroundScript.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:!0}),exports[\"default\"]=void 0;var _logger=_interopRequireDefault(__webpack_require__(/*! ./logger */ \"./node_modules/vuex-webextensions/dist/logger.js\")),_utils=__webpack_require__(/*! ./utils */ \"./node_modules/vuex-webextensions/dist/utils.js\");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError(\"Cannot call a class as a function\")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,\"value\"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var BackgroundScript=function(){function a(b,c,d){var e=this;if(_classCallCheck(this,a),this.store=b,this.browser=c,this.settings=d,this.connections=[],this.settings.persistentStates.length&&(_logger[\"default\"].info(\"Persistent states detected on config, reading from localstorage...\"),this.browser.getPersistentStates().then(function(a){if(null===a)_logger[\"default\"].debug(\"No data found on localstorage for persistent states\");else if(_logger[\"default\"].verbose(\"Saved persistent states found on localstorage\"),e.store.commit(\"vweReplaceState\",_objectSpread({},e.store.state,{},(0,_utils.filterObject)(a,e.settings.persistentStates))),0<e.connections.length){_logger[\"default\"].info(\"Sending initial state to other contexts...\");for(var b=e.connections.length-1;0<=b;b--)e.syncCurrentState(e.connections[b])}})),this.store.subscribe(function(a){if(_logger[\"default\"].debug(\"Hooked mutation (\".concat(a.type,\")\")),0<e.settings.ignoredMutations.length&&e.settings.ignoredMutations.includes(a.type))return void _logger[\"default\"].info(\"Mutation (\".concat(a.type,\") are on ignored mutations list, skiping...\"));for(var b=e.connections.length-1;0<=b;b--){e.connections[b].receivedMutations.length||e.sendMutation(e.connections[b],a);for(var d=e.connections[b].receivedMutations.length-1;0<=d;d--)e.connections[b].receivedMutations[d].type==a.type&&e.connections[b].receivedMutations[d].payload==a.payload?e.connections[b].receivedMutations.splice(d,1):0==b&&e.sendMutation(e.connections[b],a)}c.savePersistentStates((0,_utils.filterObject)(e.store.state,e.settings.persistentStates))}),!0==this.settings.syncActions)try{_logger[\"default\"].verbose(\"Listening for actions\"),this.store.subscribeAction(function(a){if(_logger[\"default\"].debug(\"Hooked action (\".concat(a.type,\")\")),0<e.settings.ignoredActions.length&&e.settings.ignoredActions.includes(a.type))return void _logger[\"default\"].info(\"Action (\".concat(a.type,\") are on ignored actions list, skiping...\"));for(var b=e.connections.length-1;0<=b;b--){e.connections[b].receivedActions.length||e.sendAction(e.connections[b],a);for(var c=e.connections[b].receivedActions.length-1;0<=c;c--)e.connections[b].receivedActions[c].type==a.type?e.connections[b].receivedActions.splice(c,1):0==b&&e.sendAction(e.connections[b],a)}})}catch(a){_logger[\"default\"].info(\"Can't sync actions because isn't available in your Vuex version, use Vuex v2.5.0 or later for this feature\")}c.handleConnection(function(a){e.onConnection(a)})}return _createClass(a,[{key:\"onConnection\",value:function onConnection(a){var b=this;a.onDisconnect.addListener(function(a){b.onDisconnect(a)}),a.receivedMutations=[],a.receivedActions=[],a.onMessage.addListener(function(c){b.onMessage(a,c)}),this.connections.push(a),this.syncCurrentState(a)}},{key:\"onDisconnect\",value:function onDisconnect(a){for(var b=this.connections.length-1;0<=b;b--)this.connections[b].name===a.name&&this.connections.splice(b,1)}},{key:\"onMessage\",value:function onMessage(a,b){if(b.type)switch(b.type){case\"@@STORE_SYNC_MUTATION\":{a.receivedMutations.push(b.data),this.store.commit(b.data.type,b.data.payload);break}case\"@@STORE_SYNC_ACTION\":{a.receivedActions.push(b.data),this.store.dispatch(b.data.type,b.data.payload);break}default:}}},{key:\"syncCurrentState\",value:function syncCurrentState(a){try{a.postMessage({type:\"@@STORE_SYNC_STATE\",data:this.store.state})}catch(a){_logger[\"default\"].error(\"Initial state not sent: \".concat(a))}}},{key:\"sendMutation\",value:function sendMutation(a,b){_logger[\"default\"].verbose(\"Sending mutation (\".concat(b.type,\") to connection: \").concat(a.name));try{a.postMessage({type:\"@@STORE_SYNC_MUTATION\",data:b})}catch(a){_logger[\"default\"].error(\"Mutation not sent: \".concat(a))}}},{key:\"sendAction\",value:function sendAction(a,b){_logger[\"default\"].verbose(\"Sending action (\".concat(b.type,\") to connection: \").concat(a.name));try{a.postMessage({type:\"@@STORE_SYNC_ACTION\",data:b})}catch(a){_logger[\"default\"].error(\"Action not sent: \".concat(a))}}}]),a}(),_default=BackgroundScript;exports[\"default\"]=_default;\n\n//# sourceURL=webpack:///./node_modules/vuex-webextensions/dist/backgroundScript.js?");

/***/ }),

/***/ "./node_modules/vuex-webextensions/dist/browser.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuex-webextensions/dist/browser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(browser) {var _logger=_interopRequireDefault(__webpack_require__(/*! ./logger */ \"./node_modules/vuex-webextensions/dist/logger.js\"));Object.defineProperty(exports,\"__esModule\",{value:!0}),exports[\"default\"]=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError(\"Cannot call a class as a function\")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,\"value\"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var browsers=Object.freeze({firefox:{name:\"Mozilla Firefox\",namespace:\"browser\",type:\"promise\"},chrome:{name:\"Google Chrome\",namespace:\"chrome\",type:\"callback\"},edge:{name:\"Microsoft Edge\",namespace:\"browser\",type:\"callback\"}}),Browser=function(){function a(){_classCallCheck(this,a),this.browser=null,this.detectBrowser()}return _createClass(a,[{key:\"detectBrowser\",value:function detectBrowser(){return\"undefined\"==typeof chrome?void(this.browser=browsers.edge):\"undefined\"==typeof browser?void(this.browser=browsers.chrome):void(this.browser=browsers.firefox)}},{key:\"isBackgroundScript\",value:function isBackgroundScript(a){var b=this;return new Promise(function(c){try{b.browser==browsers.chrome?chrome.runtime.getBackgroundPage(function(b){return c(a===b)}):b.browser==browsers.firefox?browser.runtime.getBackgroundPage().then(function(b){return c(a===b)}):b.browser==browsers.edge&&browser.runtime.getBackgroundPage(function(b){return c(a===b)})}catch(a){return c(!1)}return!1})}},{key:\"getPersistentStates\",value:function getPersistentStates(){var a=this;return new Promise(function(b,c){try{a.browser==browsers.chrome?chrome.storage.local.get(\"@@vwe-persistence\",function(a){return a[\"@@vwe-persistence\"]?b(a[\"@@vwe-persistence\"]):b(null)}):a.browser==browsers.firefox?browser.storage.local.get(\"@@vwe-persistence\").then(function(a){return a[\"@@vwe-persistence\"]?b(a[\"@@vwe-persistence\"]):b(null)}):a.browser==browsers.edge&&browser.storage.local.get(\"@@vwe-persistence\",function(a){return a[\"@@vwe-persistence\"]?b(a[\"@@vwe-persistence\"]):b(null)})}catch(a){return c(a)}return!1})}},{key:\"savePersistentStates\",value:function savePersistentStates(a){if(this.browser==browsers.chrome)try{chrome.storage.local.set({\"@@vwe-persistence\":a})}catch(a){_logger[\"default\"].error(\"Can't write persistent states to local storage. Did you grant storage permission to your WebExtension?\")}else if(this.browser==browsers.firefox)try{browser.storage.local.set({\"@@vwe-persistence\":a})}catch(a){_logger[\"default\"].error(\"Can't write persistent states to local storage. Did you grant storage permission to your WebExtension?\")}else if(this.browser==browsers.edge)try{browser.storage.local.set({\"@@vwe-persistence\":a})}catch(a){_logger[\"default\"].error(\"Can't write persistent states to local storage. Did you grant storage permission to your WebExtension?\")}}},{key:\"handleConnection\",value:function handleConnection(a){return this.browser==browsers.chrome?chrome.runtime.onConnect.addListener(a):browser.runtime.onConnect.addListener(a)}},{key:\"connectToBackground\",value:function connectToBackground(a){return this.browser==browsers.chrome?chrome.runtime.connect({name:a}):browser.runtime.connect({name:a})}}]),a}(),_default=Browser;exports[\"default\"]=_default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! webextension-polyfill */ \"./node_modules/webextension-polyfill/dist/browser-polyfill.js\")))\n\n//# sourceURL=webpack:///./node_modules/vuex-webextensions/dist/browser.js?");

/***/ }),

/***/ "./node_modules/vuex-webextensions/dist/contentScript.js":
/*!***************************************************************!*\
  !*** ./node_modules/vuex-webextensions/dist/contentScript.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _logger=_interopRequireDefault(__webpack_require__(/*! ./logger */ \"./node_modules/vuex-webextensions/dist/logger.js\"));Object.defineProperty(exports,\"__esModule\",{value:!0}),exports[\"default\"]=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError(\"Cannot call a class as a function\")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,\"value\"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ContentScript=function(){function a(b,c,d){var e=this;if(_classCallCheck(this,a),this.store=b,this.browser=c,this.settings=d,this.scriptId=Math.random().toString(36).substr(2,9),this.connection=null,this.receivedMutations=[],this.receivedActions=[],this.initialized=!1,this.pendingMutations=[],this.pendingActions=[],this.connection=c.connectToBackground(\"\".concat(this.settings.connectionName,\"_\").concat(this.scriptId)),this.connection.onMessage.addListener(function(a){e.onMessage(a)}),_logger[\"default\"].verbose(\"Listening for mutations\"),this.store.subscribe(function(a){e.hookMutation(a)}),!0==this.settings.syncActions)try{_logger[\"default\"].verbose(\"Listening for actions\"),this.store.subscribeAction(function(a){a.payload instanceof Event&&(a.payload=null),e.hookAction(a)})}catch(a){_logger[\"default\"].info(\"Can't sync actions because isn't available in your Vuex version, use Vuex v2.5.0 or later for this feature\")}}return _createClass(a,[{key:\"onMessage\",value:function onMessage(a){if(_logger[\"default\"].verbose(\"Received message from background\"),!!a.type)switch(a.type){case\"@@STORE_SYNC_STATE\":{_logger[\"default\"].info(\"Received store initial state\"),this.store.commit(\"vweReplaceState\",a.data),this.initialized=!0,this.processPendingMutations();break}case\"@@STORE_SYNC_MUTATION\":{if(_logger[\"default\"].debug(\"Received mutation \".concat(a.data.type)),!this.initialized){_logger[\"default\"].info(\"Received mutation (\".concat(a.data.type,\") but the store isn't initilized yet\"));break}this.receivedMutations.push(a.data),this.store.commit(a.data.type,a.data.payload);break}case\"@@STORE_SYNC_ACTION\":{if(_logger[\"default\"].debug(\"Received action \".concat(a.data.type)),!this.initialized){_logger[\"default\"].info(\"Received action (\".concat(a.data.type,\") but the store isn't initilized yet\"));break}this.receivedActions.push(a.data),this.store.dispatch(a.data);break}default:}}},{key:\"hookMutation\",value:function hookMutation(a){if(_logger[\"default\"].debug(\"Hooked mutation (\".concat(a.type,\")\")),\"vweReplaceState\"===a.type)return void _logger[\"default\"].debug(\"vweReplaceState mutation don't need send to other contexts\");if(0<this.settings.ignoredMutations.length&&this.settings.ignoredMutations.includes(a.type))return void _logger[\"default\"].info(\"Mutation (\".concat(a.type,\") are on ignored mutations list, skiping...\"));if(!this.initialized)return _logger[\"default\"].info(\"Hooked mutation (\".concat(a.type,\") before initialization, enqued on pending mutations\")),this.pendingMutations.push(a);if(!this.receivedMutations.length)return this.sendMutation(a);for(var b=this.receivedMutations.length-1;0<=b;b--)this.receivedMutations[b].type==a.type&&this.receivedMutations[b].payload==a.payload?(_logger[\"default\"].verbose(\"Mutation \".concat(this.receivedMutations[b].type,\" it's received mutation, don't send to background again\")),this.receivedMutations.splice(b,1)):0==b&&this.sendMutation(a)}},{key:\"hookAction\",value:function hookAction(a){if(_logger[\"default\"].debug(\"Hooked action (\".concat(a.type,\")\")),0<this.settings.ignoredActions.length&&this.settings.ignoredActions.includes(a.type))return void _logger[\"default\"].info(\"Action (\".concat(a.type,\") are on ignored action list, skiping...\"));if(!this.initialized)return _logger[\"default\"].info(\"Hooked action (\".concat(a.type,\") before initialization, enqued on pending actions\")),this.pendingActions.push(a);if(!this.receivedActions.length)return this.sendAction(a);for(var b=this.receivedActions.length-1;0<=b;b--)this.receivedActions[b].type==a.type&&this.receivedActions[b].payload==a.payload?(_logger[\"default\"].verbose(\"Action \".concat(this.receivedActions[b].type,\" it's received action, don't send to background again\")),this.receivedActions.splice(b,1)):0==b&&this.sendAction(a)}},{key:\"sendMutation\",value:function sendMutation(a){_logger[\"default\"].debug(\"Sending mutation (\".concat(a.type,\") to background script\")),this.connection.postMessage({type:\"@@STORE_SYNC_MUTATION\",data:a})}},{key:\"sendAction\",value:function sendAction(a){_logger[\"default\"].debug(\"Sending action (\".concat(a.type,\") to background script\")),this.connection.postMessage({type:\"@@STORE_SYNC_ACTION\",data:a})}},{key:\"processPendingMutations\",value:function processPendingMutations(){if(_logger[\"default\"].debug(\"Processing pending mutations list...\"),!this.pendingMutations.length)return void _logger[\"default\"].info(\"The pending mutations list are empty\");for(var a=0;a<this.pendingMutations.length;a++)_logger[\"default\"].verbose(\"Processing pending mutation (\".concat(this.pendingMutations[a].type,\") with payload: \").concat(this.pendingMutations[a].payload)),this.store.commit(this.pendingMutations[a].type,this.pendingMutations[a].payload),this.pendingMutations.splice(a,1)}},{key:\"processPendingActions\",value:function processPendingActions(){if(_logger[\"default\"].debug(\"Processing pending actions list...\"),!this.pendingActions.length)return void _logger[\"default\"].info(\"The pending actions list are empty\");for(var a=0;a<this.pendingActions.length;a++)_logger[\"default\"].verbose(\"Processing pending action (\".concat(this.pendingActions[a].type,\") with payload: \").concat(this.pendingActions[a].payload)),this.store.dispatch(this.pendingActions[a].type,this.pendingActions[a].payload),this.pendingActions.splice(a,1)}}]),a}(),_default=ContentScript;exports[\"default\"]=_default;\n\n//# sourceURL=webpack:///./node_modules/vuex-webextensions/dist/contentScript.js?");

/***/ }),

/***/ "./node_modules/vuex-webextensions/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/vuex-webextensions/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:!0}),exports[\"default\"]=_default;var _backgroundScript=_interopRequireDefault(__webpack_require__(/*! ./backgroundScript */ \"./node_modules/vuex-webextensions/dist/backgroundScript.js\")),_browser=_interopRequireDefault(__webpack_require__(/*! ./browser */ \"./node_modules/vuex-webextensions/dist/browser.js\")),_contentScript=_interopRequireDefault(__webpack_require__(/*! ./contentScript */ \"./node_modules/vuex-webextensions/dist/contentScript.js\")),_logger=_interopRequireDefault(__webpack_require__(/*! ./logger */ \"./node_modules/vuex-webextensions/dist/logger.js\"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var defaultOptions={connectionName:\"vuex-webextensions\",loggerLevel:\"warning\",persistentStates:[],ignoredMutations:[],ignoredActions:[],syncActions:!0};function _default(a){if(\"undefined\"==typeof window)return function(){};var b=_objectSpread({},defaultOptions,{},a);_logger[\"default\"].setLoggerLevel(b.loggerLevel);var c=new _browser[\"default\"];return function(a){a.registerModule(\"@@VWE_Helper\",{mutations:{vweReplaceState:function vweReplaceState(b,c){Object.keys(a.state).forEach(function(b){a.state[b]=c[b]})}}}),c.isBackgroundScript(window).then(function(d){return d?new _backgroundScript[\"default\"](a,c,b):new _contentScript[\"default\"](a,c,b)})}}\n\n//# sourceURL=webpack:///./node_modules/vuex-webextensions/dist/index.js?");

/***/ }),

/***/ "./node_modules/vuex-webextensions/dist/logger.js":
/*!********************************************************!*\
  !*** ./node_modules/vuex-webextensions/dist/logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:!0}),exports[\"default\"]=void 0;function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError(\"Cannot call a class as a function\")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,\"value\"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Logger=function(){function a(){return _classCallCheck(this,a),a.instance||(this.loggerLevel=\"warning\",this.levels=[\"verbose\",\"debug\",\"info\",\"warning\",\"error\",\"none\"],a.instance=this),a.instance}return _createClass(a,[{key:\"setLoggerLevel\",value:function setLoggerLevel(a){this.loggerLevel=a}},{key:\"shouldLog\",value:function shouldLog(a){return this.levels.indexOf(a)>=this.levels.indexOf(this.loggerLevel)}},{key:\"verbose\",value:function verbose(a){this.printMessage(\"verbose\",a)}},{key:\"debug\",value:function debug(a){this.printMessage(\"debug\",a)}},{key:\"info\",value:function info(a){this.printMessage(\"info\",a)}},{key:\"warning\",value:function warning(a){this.printMessage(\"warning\",a)}},{key:\"error\",value:function error(a){this.printMessage(\"error\",a)}},{key:\"printMessage\",value:function printMessage(a,b){if(this.shouldLog(a)){var c=a.charAt(0).toUpperCase()+a.slice(1),d=\"[\".concat(c,\"] Vuex WebExtensions: \").concat(b);\"error\"==a?console.error(d):\"warning\"==a?console.warn(d):\"info\"==a?console.info(d):console.log(d)}}}]),a}(),instance=new Logger,_default=instance;exports[\"default\"]=_default;\n\n//# sourceURL=webpack:///./node_modules/vuex-webextensions/dist/logger.js?");

/***/ }),

/***/ "./node_modules/vuex-webextensions/dist/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/vuex-webextensions/dist/utils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:!0}),exports.filterObject=filterObject;function filterObject(a,b){var c={};return b.forEach(function(b){c[b]=a[b]}),c}\n\n//# sourceURL=webpack:///./node_modules/vuex-webextensions/dist/utils.js?");

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createLogger, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLogger\", function() { return createLogger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNamespacedHelpers\", function() { return createNamespacedHelpers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"install\", function() { return install; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapActions\", function() { return mapActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapGetters\", function() { return mapGetters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapMutations\", function() { return mapMutations; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapState\", function() { return mapState; });\n/*!\n * vuex v3.6.2\n * (c) 2021 Evan You\n * @license MIT\n */\nfunction applyMixin (Vue) {\n  var version = Number(Vue.version.split('.')[0]);\n\n  if (version >= 2) {\n    Vue.mixin({ beforeCreate: vuexInit });\n  } else {\n    // override init and inject vuex init procedure\n    // for 1.x backwards compatibility.\n    var _init = Vue.prototype._init;\n    Vue.prototype._init = function (options) {\n      if ( options === void 0 ) options = {};\n\n      options.init = options.init\n        ? [vuexInit].concat(options.init)\n        : vuexInit;\n      _init.call(this, options);\n    };\n  }\n\n  /**\n   * Vuex init hook, injected into each instances init hooks list.\n   */\n\n  function vuexInit () {\n    var options = this.$options;\n    // store injection\n    if (options.store) {\n      this.$store = typeof options.store === 'function'\n        ? options.store()\n        : options.store;\n    } else if (options.parent && options.parent.$store) {\n      this.$store = options.parent.$store;\n    }\n  }\n}\n\nvar target = typeof window !== 'undefined'\n  ? window\n  : typeof global !== 'undefined'\n    ? global\n    : {};\nvar devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;\n\nfunction devtoolPlugin (store) {\n  if (!devtoolHook) { return }\n\n  store._devtoolHook = devtoolHook;\n\n  devtoolHook.emit('vuex:init', store);\n\n  devtoolHook.on('vuex:travel-to-state', function (targetState) {\n    store.replaceState(targetState);\n  });\n\n  store.subscribe(function (mutation, state) {\n    devtoolHook.emit('vuex:mutation', mutation, state);\n  }, { prepend: true });\n\n  store.subscribeAction(function (action, state) {\n    devtoolHook.emit('vuex:action', action, state);\n  }, { prepend: true });\n}\n\n/**\n * Get the first item that pass the test\n * by second argument function\n *\n * @param {Array} list\n * @param {Function} f\n * @return {*}\n */\nfunction find (list, f) {\n  return list.filter(f)[0]\n}\n\n/**\n * Deep copy the given object considering circular structure.\n * This function caches all nested objects and its copies.\n * If it detects circular structure, use cached copy to avoid infinite loop.\n *\n * @param {*} obj\n * @param {Array<Object>} cache\n * @return {*}\n */\nfunction deepCopy (obj, cache) {\n  if ( cache === void 0 ) cache = [];\n\n  // just return if obj is immutable value\n  if (obj === null || typeof obj !== 'object') {\n    return obj\n  }\n\n  // if obj is hit, it is in circular structure\n  var hit = find(cache, function (c) { return c.original === obj; });\n  if (hit) {\n    return hit.copy\n  }\n\n  var copy = Array.isArray(obj) ? [] : {};\n  // put the copy into cache at first\n  // because we want to refer it in recursive deepCopy\n  cache.push({\n    original: obj,\n    copy: copy\n  });\n\n  Object.keys(obj).forEach(function (key) {\n    copy[key] = deepCopy(obj[key], cache);\n  });\n\n  return copy\n}\n\n/**\n * forEach for object\n */\nfunction forEachValue (obj, fn) {\n  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });\n}\n\nfunction isObject (obj) {\n  return obj !== null && typeof obj === 'object'\n}\n\nfunction isPromise (val) {\n  return val && typeof val.then === 'function'\n}\n\nfunction assert (condition, msg) {\n  if (!condition) { throw new Error((\"[vuex] \" + msg)) }\n}\n\nfunction partial (fn, arg) {\n  return function () {\n    return fn(arg)\n  }\n}\n\n// Base data struct for store's module, package with some attribute and method\nvar Module = function Module (rawModule, runtime) {\n  this.runtime = runtime;\n  // Store some children item\n  this._children = Object.create(null);\n  // Store the origin module object which passed by programmer\n  this._rawModule = rawModule;\n  var rawState = rawModule.state;\n\n  // Store the origin module's state\n  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};\n};\n\nvar prototypeAccessors = { namespaced: { configurable: true } };\n\nprototypeAccessors.namespaced.get = function () {\n  return !!this._rawModule.namespaced\n};\n\nModule.prototype.addChild = function addChild (key, module) {\n  this._children[key] = module;\n};\n\nModule.prototype.removeChild = function removeChild (key) {\n  delete this._children[key];\n};\n\nModule.prototype.getChild = function getChild (key) {\n  return this._children[key]\n};\n\nModule.prototype.hasChild = function hasChild (key) {\n  return key in this._children\n};\n\nModule.prototype.update = function update (rawModule) {\n  this._rawModule.namespaced = rawModule.namespaced;\n  if (rawModule.actions) {\n    this._rawModule.actions = rawModule.actions;\n  }\n  if (rawModule.mutations) {\n    this._rawModule.mutations = rawModule.mutations;\n  }\n  if (rawModule.getters) {\n    this._rawModule.getters = rawModule.getters;\n  }\n};\n\nModule.prototype.forEachChild = function forEachChild (fn) {\n  forEachValue(this._children, fn);\n};\n\nModule.prototype.forEachGetter = function forEachGetter (fn) {\n  if (this._rawModule.getters) {\n    forEachValue(this._rawModule.getters, fn);\n  }\n};\n\nModule.prototype.forEachAction = function forEachAction (fn) {\n  if (this._rawModule.actions) {\n    forEachValue(this._rawModule.actions, fn);\n  }\n};\n\nModule.prototype.forEachMutation = function forEachMutation (fn) {\n  if (this._rawModule.mutations) {\n    forEachValue(this._rawModule.mutations, fn);\n  }\n};\n\nObject.defineProperties( Module.prototype, prototypeAccessors );\n\nvar ModuleCollection = function ModuleCollection (rawRootModule) {\n  // register root module (Vuex.Store options)\n  this.register([], rawRootModule, false);\n};\n\nModuleCollection.prototype.get = function get (path) {\n  return path.reduce(function (module, key) {\n    return module.getChild(key)\n  }, this.root)\n};\n\nModuleCollection.prototype.getNamespace = function getNamespace (path) {\n  var module = this.root;\n  return path.reduce(function (namespace, key) {\n    module = module.getChild(key);\n    return namespace + (module.namespaced ? key + '/' : '')\n  }, '')\n};\n\nModuleCollection.prototype.update = function update$1 (rawRootModule) {\n  update([], this.root, rawRootModule);\n};\n\nModuleCollection.prototype.register = function register (path, rawModule, runtime) {\n    var this$1 = this;\n    if ( runtime === void 0 ) runtime = true;\n\n  if ((true)) {\n    assertRawModule(path, rawModule);\n  }\n\n  var newModule = new Module(rawModule, runtime);\n  if (path.length === 0) {\n    this.root = newModule;\n  } else {\n    var parent = this.get(path.slice(0, -1));\n    parent.addChild(path[path.length - 1], newModule);\n  }\n\n  // register nested modules\n  if (rawModule.modules) {\n    forEachValue(rawModule.modules, function (rawChildModule, key) {\n      this$1.register(path.concat(key), rawChildModule, runtime);\n    });\n  }\n};\n\nModuleCollection.prototype.unregister = function unregister (path) {\n  var parent = this.get(path.slice(0, -1));\n  var key = path[path.length - 1];\n  var child = parent.getChild(key);\n\n  if (!child) {\n    if ((true)) {\n      console.warn(\n        \"[vuex] trying to unregister module '\" + key + \"', which is \" +\n        \"not registered\"\n      );\n    }\n    return\n  }\n\n  if (!child.runtime) {\n    return\n  }\n\n  parent.removeChild(key);\n};\n\nModuleCollection.prototype.isRegistered = function isRegistered (path) {\n  var parent = this.get(path.slice(0, -1));\n  var key = path[path.length - 1];\n\n  if (parent) {\n    return parent.hasChild(key)\n  }\n\n  return false\n};\n\nfunction update (path, targetModule, newModule) {\n  if ((true)) {\n    assertRawModule(path, newModule);\n  }\n\n  // update target module\n  targetModule.update(newModule);\n\n  // update nested modules\n  if (newModule.modules) {\n    for (var key in newModule.modules) {\n      if (!targetModule.getChild(key)) {\n        if ((true)) {\n          console.warn(\n            \"[vuex] trying to add a new module '\" + key + \"' on hot reloading, \" +\n            'manual reload is needed'\n          );\n        }\n        return\n      }\n      update(\n        path.concat(key),\n        targetModule.getChild(key),\n        newModule.modules[key]\n      );\n    }\n  }\n}\n\nvar functionAssert = {\n  assert: function (value) { return typeof value === 'function'; },\n  expected: 'function'\n};\n\nvar objectAssert = {\n  assert: function (value) { return typeof value === 'function' ||\n    (typeof value === 'object' && typeof value.handler === 'function'); },\n  expected: 'function or object with \"handler\" function'\n};\n\nvar assertTypes = {\n  getters: functionAssert,\n  mutations: functionAssert,\n  actions: objectAssert\n};\n\nfunction assertRawModule (path, rawModule) {\n  Object.keys(assertTypes).forEach(function (key) {\n    if (!rawModule[key]) { return }\n\n    var assertOptions = assertTypes[key];\n\n    forEachValue(rawModule[key], function (value, type) {\n      assert(\n        assertOptions.assert(value),\n        makeAssertionMessage(path, key, type, value, assertOptions.expected)\n      );\n    });\n  });\n}\n\nfunction makeAssertionMessage (path, key, type, value, expected) {\n  var buf = key + \" should be \" + expected + \" but \\\"\" + key + \".\" + type + \"\\\"\";\n  if (path.length > 0) {\n    buf += \" in module \\\"\" + (path.join('.')) + \"\\\"\";\n  }\n  buf += \" is \" + (JSON.stringify(value)) + \".\";\n  return buf\n}\n\nvar Vue; // bind on install\n\nvar Store = function Store (options) {\n  var this$1 = this;\n  if ( options === void 0 ) options = {};\n\n  // Auto install if it is not done yet and `window` has `Vue`.\n  // To allow users to avoid auto-installation in some cases,\n  // this code should be placed here. See #731\n  if (!Vue && typeof window !== 'undefined' && window.Vue) {\n    install(window.Vue);\n  }\n\n  if ((true)) {\n    assert(Vue, \"must call Vue.use(Vuex) before creating a store instance.\");\n    assert(typeof Promise !== 'undefined', \"vuex requires a Promise polyfill in this browser.\");\n    assert(this instanceof Store, \"store must be called with the new operator.\");\n  }\n\n  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];\n  var strict = options.strict; if ( strict === void 0 ) strict = false;\n\n  // store internal state\n  this._committing = false;\n  this._actions = Object.create(null);\n  this._actionSubscribers = [];\n  this._mutations = Object.create(null);\n  this._wrappedGetters = Object.create(null);\n  this._modules = new ModuleCollection(options);\n  this._modulesNamespaceMap = Object.create(null);\n  this._subscribers = [];\n  this._watcherVM = new Vue();\n  this._makeLocalGettersCache = Object.create(null);\n\n  // bind commit and dispatch to self\n  var store = this;\n  var ref = this;\n  var dispatch = ref.dispatch;\n  var commit = ref.commit;\n  this.dispatch = function boundDispatch (type, payload) {\n    return dispatch.call(store, type, payload)\n  };\n  this.commit = function boundCommit (type, payload, options) {\n    return commit.call(store, type, payload, options)\n  };\n\n  // strict mode\n  this.strict = strict;\n\n  var state = this._modules.root.state;\n\n  // init root module.\n  // this also recursively registers all sub-modules\n  // and collects all module getters inside this._wrappedGetters\n  installModule(this, state, [], this._modules.root);\n\n  // initialize the store vm, which is responsible for the reactivity\n  // (also registers _wrappedGetters as computed properties)\n  resetStoreVM(this, state);\n\n  // apply plugins\n  plugins.forEach(function (plugin) { return plugin(this$1); });\n\n  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;\n  if (useDevtools) {\n    devtoolPlugin(this);\n  }\n};\n\nvar prototypeAccessors$1 = { state: { configurable: true } };\n\nprototypeAccessors$1.state.get = function () {\n  return this._vm._data.$$state\n};\n\nprototypeAccessors$1.state.set = function (v) {\n  if ((true)) {\n    assert(false, \"use store.replaceState() to explicit replace store state.\");\n  }\n};\n\nStore.prototype.commit = function commit (_type, _payload, _options) {\n    var this$1 = this;\n\n  // check object-style commit\n  var ref = unifyObjectStyle(_type, _payload, _options);\n    var type = ref.type;\n    var payload = ref.payload;\n    var options = ref.options;\n\n  var mutation = { type: type, payload: payload };\n  var entry = this._mutations[type];\n  if (!entry) {\n    if ((true)) {\n      console.error((\"[vuex] unknown mutation type: \" + type));\n    }\n    return\n  }\n  this._withCommit(function () {\n    entry.forEach(function commitIterator (handler) {\n      handler(payload);\n    });\n  });\n\n  this._subscribers\n    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe\n    .forEach(function (sub) { return sub(mutation, this$1.state); });\n\n  if (\n    ( true) &&\n    options && options.silent\n  ) {\n    console.warn(\n      \"[vuex] mutation type: \" + type + \". Silent option has been removed. \" +\n      'Use the filter functionality in the vue-devtools'\n    );\n  }\n};\n\nStore.prototype.dispatch = function dispatch (_type, _payload) {\n    var this$1 = this;\n\n  // check object-style dispatch\n  var ref = unifyObjectStyle(_type, _payload);\n    var type = ref.type;\n    var payload = ref.payload;\n\n  var action = { type: type, payload: payload };\n  var entry = this._actions[type];\n  if (!entry) {\n    if ((true)) {\n      console.error((\"[vuex] unknown action type: \" + type));\n    }\n    return\n  }\n\n  try {\n    this._actionSubscribers\n      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe\n      .filter(function (sub) { return sub.before; })\n      .forEach(function (sub) { return sub.before(action, this$1.state); });\n  } catch (e) {\n    if ((true)) {\n      console.warn(\"[vuex] error in before action subscribers: \");\n      console.error(e);\n    }\n  }\n\n  var result = entry.length > 1\n    ? Promise.all(entry.map(function (handler) { return handler(payload); }))\n    : entry[0](payload);\n\n  return new Promise(function (resolve, reject) {\n    result.then(function (res) {\n      try {\n        this$1._actionSubscribers\n          .filter(function (sub) { return sub.after; })\n          .forEach(function (sub) { return sub.after(action, this$1.state); });\n      } catch (e) {\n        if ((true)) {\n          console.warn(\"[vuex] error in after action subscribers: \");\n          console.error(e);\n        }\n      }\n      resolve(res);\n    }, function (error) {\n      try {\n        this$1._actionSubscribers\n          .filter(function (sub) { return sub.error; })\n          .forEach(function (sub) { return sub.error(action, this$1.state, error); });\n      } catch (e) {\n        if ((true)) {\n          console.warn(\"[vuex] error in error action subscribers: \");\n          console.error(e);\n        }\n      }\n      reject(error);\n    });\n  })\n};\n\nStore.prototype.subscribe = function subscribe (fn, options) {\n  return genericSubscribe(fn, this._subscribers, options)\n};\n\nStore.prototype.subscribeAction = function subscribeAction (fn, options) {\n  var subs = typeof fn === 'function' ? { before: fn } : fn;\n  return genericSubscribe(subs, this._actionSubscribers, options)\n};\n\nStore.prototype.watch = function watch (getter, cb, options) {\n    var this$1 = this;\n\n  if ((true)) {\n    assert(typeof getter === 'function', \"store.watch only accepts a function.\");\n  }\n  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)\n};\n\nStore.prototype.replaceState = function replaceState (state) {\n    var this$1 = this;\n\n  this._withCommit(function () {\n    this$1._vm._data.$$state = state;\n  });\n};\n\nStore.prototype.registerModule = function registerModule (path, rawModule, options) {\n    if ( options === void 0 ) options = {};\n\n  if (typeof path === 'string') { path = [path]; }\n\n  if ((true)) {\n    assert(Array.isArray(path), \"module path must be a string or an Array.\");\n    assert(path.length > 0, 'cannot register the root module by using registerModule.');\n  }\n\n  this._modules.register(path, rawModule);\n  installModule(this, this.state, path, this._modules.get(path), options.preserveState);\n  // reset store to update getters...\n  resetStoreVM(this, this.state);\n};\n\nStore.prototype.unregisterModule = function unregisterModule (path) {\n    var this$1 = this;\n\n  if (typeof path === 'string') { path = [path]; }\n\n  if ((true)) {\n    assert(Array.isArray(path), \"module path must be a string or an Array.\");\n  }\n\n  this._modules.unregister(path);\n  this._withCommit(function () {\n    var parentState = getNestedState(this$1.state, path.slice(0, -1));\n    Vue.delete(parentState, path[path.length - 1]);\n  });\n  resetStore(this);\n};\n\nStore.prototype.hasModule = function hasModule (path) {\n  if (typeof path === 'string') { path = [path]; }\n\n  if ((true)) {\n    assert(Array.isArray(path), \"module path must be a string or an Array.\");\n  }\n\n  return this._modules.isRegistered(path)\n};\n\nStore.prototype.hotUpdate = function hotUpdate (newOptions) {\n  this._modules.update(newOptions);\n  resetStore(this, true);\n};\n\nStore.prototype._withCommit = function _withCommit (fn) {\n  var committing = this._committing;\n  this._committing = true;\n  fn();\n  this._committing = committing;\n};\n\nObject.defineProperties( Store.prototype, prototypeAccessors$1 );\n\nfunction genericSubscribe (fn, subs, options) {\n  if (subs.indexOf(fn) < 0) {\n    options && options.prepend\n      ? subs.unshift(fn)\n      : subs.push(fn);\n  }\n  return function () {\n    var i = subs.indexOf(fn);\n    if (i > -1) {\n      subs.splice(i, 1);\n    }\n  }\n}\n\nfunction resetStore (store, hot) {\n  store._actions = Object.create(null);\n  store._mutations = Object.create(null);\n  store._wrappedGetters = Object.create(null);\n  store._modulesNamespaceMap = Object.create(null);\n  var state = store.state;\n  // init all modules\n  installModule(store, state, [], store._modules.root, true);\n  // reset vm\n  resetStoreVM(store, state, hot);\n}\n\nfunction resetStoreVM (store, state, hot) {\n  var oldVm = store._vm;\n\n  // bind store public getters\n  store.getters = {};\n  // reset local getters cache\n  store._makeLocalGettersCache = Object.create(null);\n  var wrappedGetters = store._wrappedGetters;\n  var computed = {};\n  forEachValue(wrappedGetters, function (fn, key) {\n    // use computed to leverage its lazy-caching mechanism\n    // direct inline function use will lead to closure preserving oldVm.\n    // using partial to return function with only arguments preserved in closure environment.\n    computed[key] = partial(fn, store);\n    Object.defineProperty(store.getters, key, {\n      get: function () { return store._vm[key]; },\n      enumerable: true // for local getters\n    });\n  });\n\n  // use a Vue instance to store the state tree\n  // suppress warnings just in case the user has added\n  // some funky global mixins\n  var silent = Vue.config.silent;\n  Vue.config.silent = true;\n  store._vm = new Vue({\n    data: {\n      $$state: state\n    },\n    computed: computed\n  });\n  Vue.config.silent = silent;\n\n  // enable strict mode for new vm\n  if (store.strict) {\n    enableStrictMode(store);\n  }\n\n  if (oldVm) {\n    if (hot) {\n      // dispatch changes in all subscribed watchers\n      // to force getter re-evaluation for hot reloading.\n      store._withCommit(function () {\n        oldVm._data.$$state = null;\n      });\n    }\n    Vue.nextTick(function () { return oldVm.$destroy(); });\n  }\n}\n\nfunction installModule (store, rootState, path, module, hot) {\n  var isRoot = !path.length;\n  var namespace = store._modules.getNamespace(path);\n\n  // register in namespace map\n  if (module.namespaced) {\n    if (store._modulesNamespaceMap[namespace] && (\"development\" !== 'production')) {\n      console.error((\"[vuex] duplicate namespace \" + namespace + \" for the namespaced module \" + (path.join('/'))));\n    }\n    store._modulesNamespaceMap[namespace] = module;\n  }\n\n  // set state\n  if (!isRoot && !hot) {\n    var parentState = getNestedState(rootState, path.slice(0, -1));\n    var moduleName = path[path.length - 1];\n    store._withCommit(function () {\n      if ((true)) {\n        if (moduleName in parentState) {\n          console.warn(\n            (\"[vuex] state field \\\"\" + moduleName + \"\\\" was overridden by a module with the same name at \\\"\" + (path.join('.')) + \"\\\"\")\n          );\n        }\n      }\n      Vue.set(parentState, moduleName, module.state);\n    });\n  }\n\n  var local = module.context = makeLocalContext(store, namespace, path);\n\n  module.forEachMutation(function (mutation, key) {\n    var namespacedType = namespace + key;\n    registerMutation(store, namespacedType, mutation, local);\n  });\n\n  module.forEachAction(function (action, key) {\n    var type = action.root ? key : namespace + key;\n    var handler = action.handler || action;\n    registerAction(store, type, handler, local);\n  });\n\n  module.forEachGetter(function (getter, key) {\n    var namespacedType = namespace + key;\n    registerGetter(store, namespacedType, getter, local);\n  });\n\n  module.forEachChild(function (child, key) {\n    installModule(store, rootState, path.concat(key), child, hot);\n  });\n}\n\n/**\n * make localized dispatch, commit, getters and state\n * if there is no namespace, just use root ones\n */\nfunction makeLocalContext (store, namespace, path) {\n  var noNamespace = namespace === '';\n\n  var local = {\n    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {\n      var args = unifyObjectStyle(_type, _payload, _options);\n      var payload = args.payload;\n      var options = args.options;\n      var type = args.type;\n\n      if (!options || !options.root) {\n        type = namespace + type;\n        if (( true) && !store._actions[type]) {\n          console.error((\"[vuex] unknown local action type: \" + (args.type) + \", global type: \" + type));\n          return\n        }\n      }\n\n      return store.dispatch(type, payload)\n    },\n\n    commit: noNamespace ? store.commit : function (_type, _payload, _options) {\n      var args = unifyObjectStyle(_type, _payload, _options);\n      var payload = args.payload;\n      var options = args.options;\n      var type = args.type;\n\n      if (!options || !options.root) {\n        type = namespace + type;\n        if (( true) && !store._mutations[type]) {\n          console.error((\"[vuex] unknown local mutation type: \" + (args.type) + \", global type: \" + type));\n          return\n        }\n      }\n\n      store.commit(type, payload, options);\n    }\n  };\n\n  // getters and state object must be gotten lazily\n  // because they will be changed by vm update\n  Object.defineProperties(local, {\n    getters: {\n      get: noNamespace\n        ? function () { return store.getters; }\n        : function () { return makeLocalGetters(store, namespace); }\n    },\n    state: {\n      get: function () { return getNestedState(store.state, path); }\n    }\n  });\n\n  return local\n}\n\nfunction makeLocalGetters (store, namespace) {\n  if (!store._makeLocalGettersCache[namespace]) {\n    var gettersProxy = {};\n    var splitPos = namespace.length;\n    Object.keys(store.getters).forEach(function (type) {\n      // skip if the target getter is not match this namespace\n      if (type.slice(0, splitPos) !== namespace) { return }\n\n      // extract local getter type\n      var localType = type.slice(splitPos);\n\n      // Add a port to the getters proxy.\n      // Define as getter property because\n      // we do not want to evaluate the getters in this time.\n      Object.defineProperty(gettersProxy, localType, {\n        get: function () { return store.getters[type]; },\n        enumerable: true\n      });\n    });\n    store._makeLocalGettersCache[namespace] = gettersProxy;\n  }\n\n  return store._makeLocalGettersCache[namespace]\n}\n\nfunction registerMutation (store, type, handler, local) {\n  var entry = store._mutations[type] || (store._mutations[type] = []);\n  entry.push(function wrappedMutationHandler (payload) {\n    handler.call(store, local.state, payload);\n  });\n}\n\nfunction registerAction (store, type, handler, local) {\n  var entry = store._actions[type] || (store._actions[type] = []);\n  entry.push(function wrappedActionHandler (payload) {\n    var res = handler.call(store, {\n      dispatch: local.dispatch,\n      commit: local.commit,\n      getters: local.getters,\n      state: local.state,\n      rootGetters: store.getters,\n      rootState: store.state\n    }, payload);\n    if (!isPromise(res)) {\n      res = Promise.resolve(res);\n    }\n    if (store._devtoolHook) {\n      return res.catch(function (err) {\n        store._devtoolHook.emit('vuex:error', err);\n        throw err\n      })\n    } else {\n      return res\n    }\n  });\n}\n\nfunction registerGetter (store, type, rawGetter, local) {\n  if (store._wrappedGetters[type]) {\n    if ((true)) {\n      console.error((\"[vuex] duplicate getter key: \" + type));\n    }\n    return\n  }\n  store._wrappedGetters[type] = function wrappedGetter (store) {\n    return rawGetter(\n      local.state, // local state\n      local.getters, // local getters\n      store.state, // root state\n      store.getters // root getters\n    )\n  };\n}\n\nfunction enableStrictMode (store) {\n  store._vm.$watch(function () { return this._data.$$state }, function () {\n    if ((true)) {\n      assert(store._committing, \"do not mutate vuex store state outside mutation handlers.\");\n    }\n  }, { deep: true, sync: true });\n}\n\nfunction getNestedState (state, path) {\n  return path.reduce(function (state, key) { return state[key]; }, state)\n}\n\nfunction unifyObjectStyle (type, payload, options) {\n  if (isObject(type) && type.type) {\n    options = payload;\n    payload = type;\n    type = type.type;\n  }\n\n  if ((true)) {\n    assert(typeof type === 'string', (\"expects string as the type, but found \" + (typeof type) + \".\"));\n  }\n\n  return { type: type, payload: payload, options: options }\n}\n\nfunction install (_Vue) {\n  if (Vue && _Vue === Vue) {\n    if ((true)) {\n      console.error(\n        '[vuex] already installed. Vue.use(Vuex) should be called only once.'\n      );\n    }\n    return\n  }\n  Vue = _Vue;\n  applyMixin(Vue);\n}\n\n/**\n * Reduce the code which written in Vue.js for getting the state.\n * @param {String} [namespace] - Module's namespace\n * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.\n * @param {Object}\n */\nvar mapState = normalizeNamespace(function (namespace, states) {\n  var res = {};\n  if (( true) && !isValidMap(states)) {\n    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');\n  }\n  normalizeMap(states).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    res[key] = function mappedState () {\n      var state = this.$store.state;\n      var getters = this.$store.getters;\n      if (namespace) {\n        var module = getModuleByNamespace(this.$store, 'mapState', namespace);\n        if (!module) {\n          return\n        }\n        state = module.context.state;\n        getters = module.context.getters;\n      }\n      return typeof val === 'function'\n        ? val.call(this, state, getters)\n        : state[val]\n    };\n    // mark vuex getter for devtools\n    res[key].vuex = true;\n  });\n  return res\n});\n\n/**\n * Reduce the code which written in Vue.js for committing the mutation\n * @param {String} [namespace] - Module's namespace\n * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.\n * @return {Object}\n */\nvar mapMutations = normalizeNamespace(function (namespace, mutations) {\n  var res = {};\n  if (( true) && !isValidMap(mutations)) {\n    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');\n  }\n  normalizeMap(mutations).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    res[key] = function mappedMutation () {\n      var args = [], len = arguments.length;\n      while ( len-- ) args[ len ] = arguments[ len ];\n\n      // Get the commit method from store\n      var commit = this.$store.commit;\n      if (namespace) {\n        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);\n        if (!module) {\n          return\n        }\n        commit = module.context.commit;\n      }\n      return typeof val === 'function'\n        ? val.apply(this, [commit].concat(args))\n        : commit.apply(this.$store, [val].concat(args))\n    };\n  });\n  return res\n});\n\n/**\n * Reduce the code which written in Vue.js for getting the getters\n * @param {String} [namespace] - Module's namespace\n * @param {Object|Array} getters\n * @return {Object}\n */\nvar mapGetters = normalizeNamespace(function (namespace, getters) {\n  var res = {};\n  if (( true) && !isValidMap(getters)) {\n    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');\n  }\n  normalizeMap(getters).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    // The namespace has been mutated by normalizeNamespace\n    val = namespace + val;\n    res[key] = function mappedGetter () {\n      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {\n        return\n      }\n      if (( true) && !(val in this.$store.getters)) {\n        console.error((\"[vuex] unknown getter: \" + val));\n        return\n      }\n      return this.$store.getters[val]\n    };\n    // mark vuex getter for devtools\n    res[key].vuex = true;\n  });\n  return res\n});\n\n/**\n * Reduce the code which written in Vue.js for dispatch the action\n * @param {String} [namespace] - Module's namespace\n * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.\n * @return {Object}\n */\nvar mapActions = normalizeNamespace(function (namespace, actions) {\n  var res = {};\n  if (( true) && !isValidMap(actions)) {\n    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');\n  }\n  normalizeMap(actions).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    res[key] = function mappedAction () {\n      var args = [], len = arguments.length;\n      while ( len-- ) args[ len ] = arguments[ len ];\n\n      // get dispatch function from store\n      var dispatch = this.$store.dispatch;\n      if (namespace) {\n        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);\n        if (!module) {\n          return\n        }\n        dispatch = module.context.dispatch;\n      }\n      return typeof val === 'function'\n        ? val.apply(this, [dispatch].concat(args))\n        : dispatch.apply(this.$store, [val].concat(args))\n    };\n  });\n  return res\n});\n\n/**\n * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object\n * @param {String} namespace\n * @return {Object}\n */\nvar createNamespacedHelpers = function (namespace) { return ({\n  mapState: mapState.bind(null, namespace),\n  mapGetters: mapGetters.bind(null, namespace),\n  mapMutations: mapMutations.bind(null, namespace),\n  mapActions: mapActions.bind(null, namespace)\n}); };\n\n/**\n * Normalize the map\n * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]\n * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]\n * @param {Array|Object} map\n * @return {Object}\n */\nfunction normalizeMap (map) {\n  if (!isValidMap(map)) {\n    return []\n  }\n  return Array.isArray(map)\n    ? map.map(function (key) { return ({ key: key, val: key }); })\n    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })\n}\n\n/**\n * Validate whether given map is valid or not\n * @param {*} map\n * @return {Boolean}\n */\nfunction isValidMap (map) {\n  return Array.isArray(map) || isObject(map)\n}\n\n/**\n * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.\n * @param {Function} fn\n * @return {Function}\n */\nfunction normalizeNamespace (fn) {\n  return function (namespace, map) {\n    if (typeof namespace !== 'string') {\n      map = namespace;\n      namespace = '';\n    } else if (namespace.charAt(namespace.length - 1) !== '/') {\n      namespace += '/';\n    }\n    return fn(namespace, map)\n  }\n}\n\n/**\n * Search a special module from store by namespace. if module not exist, print error message.\n * @param {Object} store\n * @param {String} helper\n * @param {String} namespace\n * @return {Object}\n */\nfunction getModuleByNamespace (store, helper, namespace) {\n  var module = store._modulesNamespaceMap[namespace];\n  if (( true) && !module) {\n    console.error((\"[vuex] module namespace not found in \" + helper + \"(): \" + namespace));\n  }\n  return module\n}\n\n// Credits: borrowed code from fcomb/redux-logger\n\nfunction createLogger (ref) {\n  if ( ref === void 0 ) ref = {};\n  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;\n  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };\n  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };\n  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };\n  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };\n  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };\n  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;\n  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;\n  var logger = ref.logger; if ( logger === void 0 ) logger = console;\n\n  return function (store) {\n    var prevState = deepCopy(store.state);\n\n    if (typeof logger === 'undefined') {\n      return\n    }\n\n    if (logMutations) {\n      store.subscribe(function (mutation, state) {\n        var nextState = deepCopy(state);\n\n        if (filter(mutation, prevState, nextState)) {\n          var formattedTime = getFormattedTime();\n          var formattedMutation = mutationTransformer(mutation);\n          var message = \"mutation \" + (mutation.type) + formattedTime;\n\n          startMessage(logger, message, collapsed);\n          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));\n          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);\n          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));\n          endMessage(logger);\n        }\n\n        prevState = nextState;\n      });\n    }\n\n    if (logActions) {\n      store.subscribeAction(function (action, state) {\n        if (actionFilter(action, state)) {\n          var formattedTime = getFormattedTime();\n          var formattedAction = actionTransformer(action);\n          var message = \"action \" + (action.type) + formattedTime;\n\n          startMessage(logger, message, collapsed);\n          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);\n          endMessage(logger);\n        }\n      });\n    }\n  }\n}\n\nfunction startMessage (logger, message, collapsed) {\n  var startMessage = collapsed\n    ? logger.groupCollapsed\n    : logger.group;\n\n  // render\n  try {\n    startMessage.call(logger, message);\n  } catch (e) {\n    logger.log(message);\n  }\n}\n\nfunction endMessage (logger) {\n  try {\n    logger.groupEnd();\n  } catch (e) {\n    logger.log('—— log end ——');\n  }\n}\n\nfunction getFormattedTime () {\n  var time = new Date();\n  return (\" @ \" + (pad(time.getHours(), 2)) + \":\" + (pad(time.getMinutes(), 2)) + \":\" + (pad(time.getSeconds(), 2)) + \".\" + (pad(time.getMilliseconds(), 3)))\n}\n\nfunction repeat (str, times) {\n  return (new Array(times + 1)).join(str)\n}\n\nfunction pad (num, maxLength) {\n  return repeat('0', maxLength - num.toString().length) + num\n}\n\nvar index = {\n  Store: Store,\n  install: install,\n  version: '3.6.2',\n  mapState: mapState,\n  mapMutations: mapMutations,\n  mapGetters: mapGetters,\n  mapActions: mapActions,\n  createNamespacedHelpers: createNamespacedHelpers,\n  createLogger: createLogger\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/vuex/dist/vuex.esm.js?");

/***/ }),

/***/ "./node_modules/webextension-polyfill/dist/browser-polyfill.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/\nvar browser = undefined;\n\n(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function (module) {\n  /* webextension-polyfill - v0.4.0 - Wed Feb 06 2019 11:58:31 */\n  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */\n  /* vim: set sts=2 sw=2 et tw=80: */\n  /* This Source Code Form is subject to the terms of the Mozilla Public\n   * License, v. 2.0. If a copy of the MPL was not distributed with this\n   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n  \"use strict\";\n\n  if (typeof browser === \"undefined\" || Object.getPrototypeOf(browser) !== Object.prototype) {\n    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = \"The message port closed before a response was received.\";\n    const SEND_RESPONSE_DEPRECATION_WARNING = \"Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)\";\n\n    // Wrapping the bulk of this polyfill in a one-time-use function is a minor\n    // optimization for Firefox. Since Spidermonkey does not fully parse the\n    // contents of a function until the first time it's called, and since it will\n    // never actually need to be called, this allows the polyfill to be included\n    // in Firefox nearly for free.\n    const wrapAPIs = extensionAPIs => {\n      // NOTE: apiMetadata is associated to the content of the api-metadata.json file\n      // at build time by replacing the following \"include\" with the content of the\n      // JSON file.\n      const apiMetadata = {\n        \"alarms\": {\n          \"clear\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"clearAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"get\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"bookmarks\": {\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getChildren\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getRecent\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getSubTree\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTree\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"move\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeTree\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"browserAction\": {\n          \"disable\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"enable\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"getBadgeBackgroundColor\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getBadgeText\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"openPopup\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"setBadgeBackgroundColor\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setBadgeText\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"setPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"browsingData\": {\n          \"remove\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"removeCache\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeCookies\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeDownloads\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeFormData\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeHistory\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeLocalStorage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removePasswords\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removePluginData\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"settings\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"commands\": {\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"contextMenus\": {\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"cookies\": {\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAllCookieStores\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"set\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"devtools\": {\n          \"inspectedWindow\": {\n            \"eval\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 2,\n              \"singleCallbackArg\": false\n            }\n          },\n          \"panels\": {\n            \"create\": {\n              \"minArgs\": 3,\n              \"maxArgs\": 3,\n              \"singleCallbackArg\": true\n            }\n          }\n        },\n        \"downloads\": {\n          \"cancel\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"download\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"erase\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getFileIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"open\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"pause\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeFile\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"resume\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"show\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"extension\": {\n          \"isAllowedFileSchemeAccess\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"isAllowedIncognitoAccess\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"history\": {\n          \"addUrl\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"deleteAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"deleteRange\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"deleteUrl\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getVisits\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"i18n\": {\n          \"detectLanguage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAcceptLanguages\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"identity\": {\n          \"launchWebAuthFlow\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"idle\": {\n          \"queryState\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"management\": {\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getSelf\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"setEnabled\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"uninstallSelf\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          }\n        },\n        \"notifications\": {\n          \"clear\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getPermissionLevel\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"pageAction\": {\n          \"getPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"hide\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"setPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"show\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"permissions\": {\n          \"contains\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"request\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"runtime\": {\n          \"getBackgroundPage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getBrowserInfo\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getPlatformInfo\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"openOptionsPage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"requestUpdateCheck\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"sendMessage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 3\n          },\n          \"sendNativeMessage\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"setUninstallURL\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"sessions\": {\n          \"getDevices\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getRecentlyClosed\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"restore\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          }\n        },\n        \"storage\": {\n          \"local\": {\n            \"clear\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 0\n            },\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"remove\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            },\n            \"set\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            }\n          },\n          \"managed\": {\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            }\n          },\n          \"sync\": {\n            \"clear\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 0\n            },\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"remove\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            },\n            \"set\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            }\n          }\n        },\n        \"tabs\": {\n          \"captureVisibleTab\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 2\n          },\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"detectLanguage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"discard\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"duplicate\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"executeScript\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getCurrent\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getZoom\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getZoomSettings\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"highlight\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"insertCSS\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"move\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"query\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"reload\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 2\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeCSS\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"sendMessage\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 3\n          },\n          \"setZoom\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"setZoomSettings\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"update\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          }\n        },\n        \"topSites\": {\n          \"get\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"webNavigation\": {\n          \"getAllFrames\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getFrame\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"webRequest\": {\n          \"handlerBehaviorChanged\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"windows\": {\n          \"create\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getCurrent\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getLastFocused\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        }\n      };\n\n      if (Object.keys(apiMetadata).length === 0) {\n        throw new Error(\"api-metadata.json has not been included in browser-polyfill\");\n      }\n\n      /**\n       * A WeakMap subclass which creates and stores a value for any key which does\n       * not exist when accessed, but behaves exactly as an ordinary WeakMap\n       * otherwise.\n       *\n       * @param {function} createItem\n       *        A function which will be called in order to create the value for any\n       *        key which does not exist, the first time it is accessed. The\n       *        function receives, as its only argument, the key being created.\n       */\n      class DefaultWeakMap extends WeakMap {\n        constructor(createItem, items = undefined) {\n          super(items);\n          this.createItem = createItem;\n        }\n\n        get(key) {\n          if (!this.has(key)) {\n            this.set(key, this.createItem(key));\n          }\n\n          return super.get(key);\n        }\n      }\n\n      /**\n       * Returns true if the given object is an object with a `then` method, and can\n       * therefore be assumed to behave as a Promise.\n       *\n       * @param {*} value The value to test.\n       * @returns {boolean} True if the value is thenable.\n       */\n      const isThenable = value => {\n        return value && typeof value === \"object\" && typeof value.then === \"function\";\n      };\n\n      /**\n       * Creates and returns a function which, when called, will resolve or reject\n       * the given promise based on how it is called:\n       *\n       * - If, when called, `chrome.runtime.lastError` contains a non-null object,\n       *   the promise is rejected with that value.\n       * - If the function is called with exactly one argument, the promise is\n       *   resolved to that value.\n       * - Otherwise, the promise is resolved to an array containing all of the\n       *   function's arguments.\n       *\n       * @param {object} promise\n       *        An object containing the resolution and rejection functions of a\n       *        promise.\n       * @param {function} promise.resolve\n       *        The promise's resolution function.\n       * @param {function} promise.rejection\n       *        The promise's rejection function.\n       * @param {object} metadata\n       *        Metadata about the wrapped method which has created the callback.\n       * @param {integer} metadata.maxResolvedArgs\n       *        The maximum number of arguments which may be passed to the\n       *        callback created by the wrapped async function.\n       *\n       * @returns {function}\n       *        The generated callback function.\n       */\n      const makeCallback = (promise, metadata) => {\n        return (...callbackArgs) => {\n          if (extensionAPIs.runtime.lastError) {\n            promise.reject(extensionAPIs.runtime.lastError);\n          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {\n            promise.resolve(callbackArgs[0]);\n          } else {\n            promise.resolve(callbackArgs);\n          }\n        };\n      };\n\n      const pluralizeArguments = numArgs => numArgs == 1 ? \"argument\" : \"arguments\";\n\n      /**\n       * Creates a wrapper function for a method with the given name and metadata.\n       *\n       * @param {string} name\n       *        The name of the method which is being wrapped.\n       * @param {object} metadata\n       *        Metadata about the method being wrapped.\n       * @param {integer} metadata.minArgs\n       *        The minimum number of arguments which must be passed to the\n       *        function. If called with fewer than this number of arguments, the\n       *        wrapper will raise an exception.\n       * @param {integer} metadata.maxArgs\n       *        The maximum number of arguments which may be passed to the\n       *        function. If called with more than this number of arguments, the\n       *        wrapper will raise an exception.\n       * @param {integer} metadata.maxResolvedArgs\n       *        The maximum number of arguments which may be passed to the\n       *        callback created by the wrapped async function.\n       *\n       * @returns {function(object, ...*)}\n       *       The generated wrapper function.\n       */\n      const wrapAsyncFunction = (name, metadata) => {\n        return function asyncFunctionWrapper(target, ...args) {\n          if (args.length < metadata.minArgs) {\n            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);\n          }\n\n          if (args.length > metadata.maxArgs) {\n            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);\n          }\n\n          return new Promise((resolve, reject) => {\n            if (metadata.fallbackToNoCallback) {\n              // This API method has currently no callback on Chrome, but it return a promise on Firefox,\n              // and so the polyfill will try to call it with a callback first, and it will fallback\n              // to not passing the callback if the first call fails.\n              try {\n                target[name](...args, makeCallback({ resolve, reject }, metadata));\n              } catch (cbError) {\n                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + \"falling back to call it without a callback: \", cbError);\n\n                target[name](...args);\n\n                // Update the API method metadata, so that the next API calls will not try to\n                // use the unsupported callback anymore.\n                metadata.fallbackToNoCallback = false;\n                metadata.noCallback = true;\n\n                resolve();\n              }\n            } else if (metadata.noCallback) {\n              target[name](...args);\n              resolve();\n            } else {\n              target[name](...args, makeCallback({ resolve, reject }, metadata));\n            }\n          });\n        };\n      };\n\n      /**\n       * Wraps an existing method of the target object, so that calls to it are\n       * intercepted by the given wrapper function. The wrapper function receives,\n       * as its first argument, the original `target` object, followed by each of\n       * the arguments passed to the original method.\n       *\n       * @param {object} target\n       *        The original target object that the wrapped method belongs to.\n       * @param {function} method\n       *        The method being wrapped. This is used as the target of the Proxy\n       *        object which is created to wrap the method.\n       * @param {function} wrapper\n       *        The wrapper function which is called in place of a direct invocation\n       *        of the wrapped method.\n       *\n       * @returns {Proxy<function>}\n       *        A Proxy object for the given method, which invokes the given wrapper\n       *        method in its place.\n       */\n      const wrapMethod = (target, method, wrapper) => {\n        return new Proxy(method, {\n          apply(targetMethod, thisObj, args) {\n            return wrapper.call(thisObj, target, ...args);\n          }\n        });\n      };\n\n      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);\n\n      /**\n       * Wraps an object in a Proxy which intercepts and wraps certain methods\n       * based on the given `wrappers` and `metadata` objects.\n       *\n       * @param {object} target\n       *        The target object to wrap.\n       *\n       * @param {object} [wrappers = {}]\n       *        An object tree containing wrapper functions for special cases. Any\n       *        function present in this object tree is called in place of the\n       *        method in the same location in the `target` object tree. These\n       *        wrapper methods are invoked as described in {@see wrapMethod}.\n       *\n       * @param {object} [metadata = {}]\n       *        An object tree containing metadata used to automatically generate\n       *        Promise-based wrapper functions for asynchronous. Any function in\n       *        the `target` object tree which has a corresponding metadata object\n       *        in the same location in the `metadata` tree is replaced with an\n       *        automatically-generated wrapper function, as described in\n       *        {@see wrapAsyncFunction}\n       *\n       * @returns {Proxy<object>}\n       */\n      const wrapObject = (target, wrappers = {}, metadata = {}) => {\n        let cache = Object.create(null);\n        let handlers = {\n          has(proxyTarget, prop) {\n            return prop in target || prop in cache;\n          },\n\n          get(proxyTarget, prop, receiver) {\n            if (prop in cache) {\n              return cache[prop];\n            }\n\n            if (!(prop in target)) {\n              return undefined;\n            }\n\n            let value = target[prop];\n\n            if (typeof value === \"function\") {\n              // This is a method on the underlying object. Check if we need to do\n              // any wrapping.\n\n              if (typeof wrappers[prop] === \"function\") {\n                // We have a special-case wrapper for this method.\n                value = wrapMethod(target, target[prop], wrappers[prop]);\n              } else if (hasOwnProperty(metadata, prop)) {\n                // This is an async method that we have metadata for. Create a\n                // Promise wrapper for it.\n                let wrapper = wrapAsyncFunction(prop, metadata[prop]);\n                value = wrapMethod(target, target[prop], wrapper);\n              } else {\n                // This is a method that we don't know or care about. Return the\n                // original method, bound to the underlying object.\n                value = value.bind(target);\n              }\n            } else if (typeof value === \"object\" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {\n              // This is an object that we need to do some wrapping for the children\n              // of. Create a sub-object wrapper for it with the appropriate child\n              // metadata.\n              value = wrapObject(value, wrappers[prop], metadata[prop]);\n            } else {\n              // We don't need to do any wrapping for this property,\n              // so just forward all access to the underlying object.\n              Object.defineProperty(cache, prop, {\n                configurable: true,\n                enumerable: true,\n                get() {\n                  return target[prop];\n                },\n                set(value) {\n                  target[prop] = value;\n                }\n              });\n\n              return value;\n            }\n\n            cache[prop] = value;\n            return value;\n          },\n\n          set(proxyTarget, prop, value, receiver) {\n            if (prop in cache) {\n              cache[prop] = value;\n            } else {\n              target[prop] = value;\n            }\n            return true;\n          },\n\n          defineProperty(proxyTarget, prop, desc) {\n            return Reflect.defineProperty(cache, prop, desc);\n          },\n\n          deleteProperty(proxyTarget, prop) {\n            return Reflect.deleteProperty(cache, prop);\n          }\n        };\n\n        // Per contract of the Proxy API, the \"get\" proxy handler must return the\n        // original value of the target if that value is declared read-only and\n        // non-configurable. For this reason, we create an object with the\n        // prototype set to `target` instead of using `target` directly.\n        // Otherwise we cannot return a custom object for APIs that\n        // are declared read-only and non-configurable, such as `chrome.devtools`.\n        //\n        // The proxy handlers themselves will still use the original `target`\n        // instead of the `proxyTarget`, so that the methods and properties are\n        // dereferenced via the original targets.\n        let proxyTarget = Object.create(target);\n        return new Proxy(proxyTarget, handlers);\n      };\n\n      /**\n       * Creates a set of wrapper functions for an event object, which handles\n       * wrapping of listener functions that those messages are passed.\n       *\n       * A single wrapper is created for each listener function, and stored in a\n       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`\n       * retrieve the original wrapper, so that  attempts to remove a\n       * previously-added listener work as expected.\n       *\n       * @param {DefaultWeakMap<function, function>} wrapperMap\n       *        A DefaultWeakMap object which will create the appropriate wrapper\n       *        for a given listener function when one does not exist, and retrieve\n       *        an existing one when it does.\n       *\n       * @returns {object}\n       */\n      const wrapEvent = wrapperMap => ({\n        addListener(target, listener, ...args) {\n          target.addListener(wrapperMap.get(listener), ...args);\n        },\n\n        hasListener(target, listener) {\n          return target.hasListener(wrapperMap.get(listener));\n        },\n\n        removeListener(target, listener) {\n          target.removeListener(wrapperMap.get(listener));\n        }\n      });\n\n      // Keep track if the deprecation warning has been logged at least once.\n      let loggedSendResponseDeprecationWarning = false;\n\n      const onMessageWrappers = new DefaultWeakMap(listener => {\n        if (typeof listener !== \"function\") {\n          return listener;\n        }\n\n        /**\n         * Wraps a message listener function so that it may send responses based on\n         * its return value, rather than by returning a sentinel value and calling a\n         * callback. If the listener function returns a Promise, the response is\n         * sent when the promise either resolves or rejects.\n         *\n         * @param {*} message\n         *        The message sent by the other end of the channel.\n         * @param {object} sender\n         *        Details about the sender of the message.\n         * @param {function(*)} sendResponse\n         *        A callback which, when called with an arbitrary argument, sends\n         *        that value as a response.\n         * @returns {boolean}\n         *        True if the wrapped listener returned a Promise, which will later\n         *        yield a response. False otherwise.\n         */\n        return function onMessage(message, sender, sendResponse) {\n          let didCallSendResponse = false;\n\n          let wrappedSendResponse;\n          let sendResponsePromise = new Promise(resolve => {\n            wrappedSendResponse = function (response) {\n              if (!loggedSendResponseDeprecationWarning) {\n                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);\n                loggedSendResponseDeprecationWarning = true;\n              }\n              didCallSendResponse = true;\n              resolve(response);\n            };\n          });\n\n          let result;\n          try {\n            result = listener(message, sender, wrappedSendResponse);\n          } catch (err) {\n            result = Promise.reject(err);\n          }\n\n          const isResultThenable = result !== true && isThenable(result);\n\n          // If the listener didn't returned true or a Promise, or called\n          // wrappedSendResponse synchronously, we can exit earlier\n          // because there will be no response sent from this listener.\n          if (result !== true && !isResultThenable && !didCallSendResponse) {\n            return false;\n          }\n\n          // A small helper to send the message if the promise resolves\n          // and an error if the promise rejects (a wrapped sendMessage has\n          // to translate the message into a resolved promise or a rejected\n          // promise).\n          const sendPromisedResult = promise => {\n            promise.then(msg => {\n              // send the message value.\n              sendResponse(msg);\n            }, error => {\n              // Send a JSON representation of the error if the rejected value\n              // is an instance of error, or the object itself otherwise.\n              let message;\n              if (error && (error instanceof Error || typeof error.message === \"string\")) {\n                message = error.message;\n              } else {\n                message = \"An unexpected error occurred\";\n              }\n\n              sendResponse({\n                __mozWebExtensionPolyfillReject__: true,\n                message\n              });\n            }).catch(err => {\n              // Print an error on the console if unable to send the response.\n              console.error(\"Failed to send onMessage rejected reply\", err);\n            });\n          };\n\n          // If the listener returned a Promise, send the resolved value as a\n          // result, otherwise wait the promise related to the wrappedSendResponse\n          // callback to resolve and send it as a response.\n          if (isResultThenable) {\n            sendPromisedResult(result);\n          } else {\n            sendPromisedResult(sendResponsePromise);\n          }\n\n          // Let Chrome know that the listener is replying.\n          return true;\n        };\n      });\n\n      const wrappedSendMessageCallback = ({ reject, resolve }, reply) => {\n        if (extensionAPIs.runtime.lastError) {\n          // Detect when none of the listeners replied to the sendMessage call and resolve\n          // the promise to undefined as in Firefox.\n          // See https://github.com/mozilla/webextension-polyfill/issues/130\n          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {\n            resolve();\n          } else {\n            reject(extensionAPIs.runtime.lastError);\n          }\n        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {\n          // Convert back the JSON representation of the error into\n          // an Error instance.\n          reject(new Error(reply.message));\n        } else {\n          resolve(reply);\n        }\n      };\n\n      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {\n        if (args.length < metadata.minArgs) {\n          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);\n        }\n\n        if (args.length > metadata.maxArgs) {\n          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);\n        }\n\n        return new Promise((resolve, reject) => {\n          const wrappedCb = wrappedSendMessageCallback.bind(null, { resolve, reject });\n          args.push(wrappedCb);\n          apiNamespaceObj.sendMessage(...args);\n        });\n      };\n\n      const staticWrappers = {\n        runtime: {\n          onMessage: wrapEvent(onMessageWrappers),\n          onMessageExternal: wrapEvent(onMessageWrappers),\n          sendMessage: wrappedSendMessage.bind(null, \"sendMessage\", { minArgs: 1, maxArgs: 3 })\n        },\n        tabs: {\n          sendMessage: wrappedSendMessage.bind(null, \"sendMessage\", { minArgs: 2, maxArgs: 3 })\n        }\n      };\n      const settingMetadata = {\n        clear: { minArgs: 1, maxArgs: 1 },\n        get: { minArgs: 1, maxArgs: 1 },\n        set: { minArgs: 1, maxArgs: 1 }\n      };\n      apiMetadata.privacy = {\n        network: {\n          networkPredictionEnabled: settingMetadata,\n          webRTCIPHandlingPolicy: settingMetadata\n        },\n        services: {\n          passwordSavingEnabled: settingMetadata\n        },\n        websites: {\n          hyperlinkAuditingEnabled: settingMetadata,\n          referrersEnabled: settingMetadata\n        }\n      };\n\n      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);\n    };\n\n    // The build process adds a UMD wrapper around this file, which makes the\n    // `module` variable available.\n    module.exports = wrapAPIs(chrome);\n  } else {\n    module.exports = browser;\n  }\n});\n//# sourceMappingURL=browser-polyfill.js.map\n\n\n\n//# sourceURL=webpack:///./node_modules/webextension-polyfill/dist/browser-polyfill.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(browser) {/* harmony import */ var _Users_hasancan_Documents_Github_staj_projesi_frontend_password_extension_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _Users_hasancan_Documents_Github_staj_projesi_frontend_password_extension_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hasancan_Documents_Github_staj_projesi_frontend_password_extension_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_hasancan_Documents_Github_staj_projesi_frontend_password_extension_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _Users_hasancan_Documents_Github_staj_projesi_frontend_password_extension_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hasancan_Documents_Github_staj_projesi_frontend_password_extension_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_hasancan_Documents_Github_staj_projesi_frontend_password_extension_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _Users_hasancan_Documents_Github_staj_projesi_frontend_password_extension_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_hasancan_Documents_Github_staj_projesi_frontend_password_extension_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_hasancan_Documents_Github_staj_projesi_frontend_password_extension_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _Users_hasancan_Documents_Github_staj_projesi_frontend_password_extension_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_hasancan_Documents_Github_staj_projesi_frontend_password_extension_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_services_localized_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/services/localized-services */ \"./src/services/localized-services.js\");\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/store */ \"./src/store/index.js\");\n\n\n\n\n\n\n\nwindow.userMail = '';\nwindow.userPassword = '';\nwindow.url = ''; // TODO icon url değiştirilecek\n\nfunction createNotifications() {\n  chrome.notifications.create('NOTFICATION_ID', {\n    type: 'basic',\n    iconUrl: 'chrome-extension://abpggcnejmnbfeobnnmljaodkmkbkpcc/img/recenlty-used-icon.f28f8109.svg',\n    title: _src_services_localized_services__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getLocalizedMessages('extName'),\n    message: _src_services_localized_services__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getLocalizedMessages('notificationMessage')\n  });\n}\n\nfunction setLocalStorage(settingsKey) {\n  if (settingsKey.key === 'notifications') {\n    localStorage.setItem('notifications', !_src_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].state.isNotificationsEnable);\n  } else if (settingsKey.key === 'toolbarNotifications') {\n    localStorage.setItem('toolbarNotifications', !_src_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].state.isToolbarNotificationEnable);\n  }\n}\n\nfunction getLocalStorage() {\n  var getNotification = JSON.parse(localStorage.getItem('notification'));\n  var getToolbarNotification = JSON.parse(localStorage.getItem('toolbarNotifications'));\n\n  if (localStorage.getItem('notifications') === null && localStorage.getItem('toolbarNotifications') === null) {} else {\n    _src_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dispatch('setNotifications', getNotification);\n    _src_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dispatch('setToolbarNotifications', getToolbarNotification);\n  }\n}\n\nfunction authControl(auth) {\n  if (auth.key === 'loggedIn') {\n    _src_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dispatch('setLogIn', true);\n    localStorage.setItem('logInfo', true);\n  } else if (auth.key === 'loggedOut') {\n    _src_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dispatch('setLogIn', false);\n    localStorage.setItem('logInfo', false);\n  }\n}\n\nfunction getAuthStatus(message) {\n  if (message.popupOpen) {\n    _src_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dispatch('setLogIn', localStorage.getItem('logInfo'));\n  }\n}\n\nfunction getInfo(mesg) {\n  if (mesg.action === 'getSource') {\n    var temp = document.createElement('html');\n    temp.innerHTML = mesg.source;\n    temp.getElementsByTagName('input').forEach(function (element) {\n      if (element.type === 'text') {\n        window.userMail = element.value;\n      }\n\n      if (element.type === 'password') {\n        window.userPassword = element.value;\n      }\n\n      if (window.userPassword !== '' || window.userMail !== '') {\n        saveUserAccounts();\n      }\n    });\n  }\n}\n\nfunction saveUserAccounts() {\n  if (window.userPassword === '' || window.userMail === '') {\n    return;\n  }\n\n  var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n  var data = JSON.stringify({\n    id: 0,\n    savedUsername: window.userMail,\n    savedPassword: window.userPassword,\n    savedUrl: window.url\n  });\n  var config = {\n    method: 'post',\n    url: 'https://192.168.0.28:5001/api/SaveAccountInfo',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    data: data\n  };\n  axios(config).then(function (response) {}).catch(function (error) {\n    console.log(error);\n  });\n}\n\nfunction activatePopup() {\n  chrome.tabs.query({\n    currentWindow: true,\n    active: true\n  }, function (tabs) {\n    window.url = tabs[0].url;\n  });\n\n  try {\n    chrome.runtime.sendMessage({\n      msg: 'activatePopup'\n    });\n  } catch (error) {\n    console.log(error);\n  }\n} // browser.tabs.onActivated.addListener(saveUserAccounts)\n\n\nbrowser.tabs.onActivated.addListener(getLocalStorage);\nbrowser.runtime.onMessage.addListener(setLocalStorage);\nbrowser.tabs.onActivated.addListener(createNotifications);\nbrowser.runtime.onMessage.addListener(authControl);\nchrome.runtime.onMessage.addListener(getAuthStatus);\nbrowser.runtime.onMessage.addListener(getInfo);\nbrowser.tabs.onUpdated.addListener(activatePopup);\nbrowser.tabs.onActivated.addListener(activatePopup);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! webextension-polyfill */ \"./node_modules/webextension-polyfill/dist/browser-polyfill.js\")))\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/services/localized-services.js":
/*!********************************************!*\
  !*** ./src/services/localized-services.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(browser) {/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getLocalizedMessages: function getLocalizedMessages(messageKey) {\n    return browser.i18n.getMessage(messageKey);\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! webextension-polyfill */ \"./node_modules/webextension-polyfill/dist/browser-polyfill.js\")))\n\n//# sourceURL=webpack:///./src/services/localized-services.js?");

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  setNotifications: function setNotifications(_ref, payload) {\n    var commit = _ref.commit;\n    commit('setNotificationsMutation', payload);\n  },\n  setToolbarNotifications: function setToolbarNotifications(_ref2, payload) {\n    var commit = _ref2.commit;\n    commit('setToolbarNotificationMutation', payload);\n  },\n  setLogIn: function setLogIn(_ref3, payload) {\n    var commit = _ref3.commit;\n    commit('setLogInMutation', payload);\n  }\n});\n\n//# sourceURL=webpack:///./src/store/actions.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var vuex_webextensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex-webextensions */ \"./node_modules/vuex-webextensions/dist/index.js\");\n/* harmony import */ var vuex_webextensions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuex_webextensions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ \"./src/store/state.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ \"./src/store/actions.js\");\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mutations */ \"./src/store/mutations.js\");\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n  state: _state__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  actions: _actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  mutations: _mutations__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  plugins: [vuex_webextensions__WEBPACK_IMPORTED_MODULE_2___default()({\n    syncActions: false,\n    // loggerLevel: 'debug',\n    persistentStates: ['stateone']\n  })]\n}));\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/mutations.js":
/*!********************************!*\
  !*** ./src/store/mutations.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  setNotificationsMutation: function setNotificationsMutation(state, payload) {\n    state.isNotificationsEnable = payload;\n  },\n  setToolbarNotificationMutation: function setToolbarNotificationMutation(state, payload) {\n    state.isToolbarNotificationEnable = payload;\n  },\n  setLogInMutation: function setLogInMutation(state, payload) {\n    state.isLoggedIn = payload;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/mutations.js?");

/***/ }),

/***/ "./src/store/state.js":
/*!****************************!*\
  !*** ./src/store/state.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  isNotificationsEnable: true,\n  isToolbarNotificationEnable: true,\n  isLoggedIn: undefined\n});\n\n//# sourceURL=webpack:///./src/store/state.js?");

/***/ }),

/***/ 2:
/*!*********************************!*\
  !*** multi ./src/background.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/hasancan/Documents/Github/staj-projesi-frontend/password-extension/src/background.js */\"./src/background.js\");\n\n\n//# sourceURL=webpack:///multi_./src/background.js?");

/***/ })

/******/ });