/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-75a787e8'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/css/chunk-017688c9.49571e62.css",
    "revision": "f89e7f57a9c3bc8ef7146f57674f6cc2"
  }, {
    "url": "/css/chunk-185c98c3.a35cb250.css",
    "revision": "5e36f96096cb1eb0885e362dfaa2771e"
  }, {
    "url": "/css/chunk-5315b6c8.1bbdeee3.css",
    "revision": "a2ed51c4eabdc6012faa6216b32b9e89"
  }, {
    "url": "/css/chunk-5a3ba2a6.eaf55aaf.css",
    "revision": "51c86dfe515e0e2f0d04743500096195"
  }, {
    "url": "/css/chunk-vendors.9a0d0b05.css",
    "revision": "6b201191d2fd7fc733c6960be1008bcc"
  }, {
    "url": "/css/main.222c53d8.css",
    "revision": "a68c17210634d29f4519eebc3f9ce9a9"
  }, {
    "url": "/favicon.ico",
    "revision": "1ba2ae710d927f13d483fd5d1e548c9b"
  }, {
    "url": "/index.html",
    "revision": "12c1600b4cae7ea9bc375c3db512cfb2"
  }, {
    "url": "/js/chunk-017688c9.af522dd4.js",
    "revision": "22e24886426ae149c3643aa15341a4e1"
  }, {
    "url": "/js/chunk-185c98c3.0557a170.js",
    "revision": "f037eb2a7779fa3b6cf57477e651d8b6"
  }, {
    "url": "/js/chunk-5315b6c8.1a3064f1.js",
    "revision": "5fa8e4f9cbb9cab55332f76e4ee9ce3f"
  }, {
    "url": "/js/chunk-5a3ba2a6.8ebe6bb0.js",
    "revision": "de13b9da37981561ff71c3711da8e007"
  }, {
    "url": "/js/main.5f9889ae.js",
    "revision": "adc82161782ff3a6058b5c5898dc7af2"
  }, {
    "url": "/manifest.json",
    "revision": "cbf02fd162baf7d25022b8fa16356dc0"
  }, {
    "url": "/runtime~main.js",
    "revision": "a31a5d0d89c2fbac973f45cdc917071e"
  }], {});
  workbox.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.CacheFirst({
    "cacheName": "images",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      purgeOnQuotaError: true
    })]
  }), 'GET');

});
//# sourceMappingURL=service-worker.js.map
