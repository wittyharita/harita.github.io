'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "acc0c5e2d11328776978d3f6afbaade9",
"assets/assets/coin.json": "d0daeba9ccf6c48e2ce4efcb99484ff7",
"assets/assets/images/ai_campus.jpg": "550a45a1557bfd956cd94ef3d7490538",
"assets/assets/images/banner1.jpg": "76b016b1191fe1088c5a2993d1c1cbbb",
"assets/assets/images/banner2.jpg": "645c76790f37cec7d3ac546b1f51b44c",
"assets/assets/images/carousel_1.jpeg": "d80c8cd52c03a96c477c827eec04a02d",
"assets/assets/images/carousel_2.jpg": "8e022d81e9ba81cca1062233291d0c97",
"assets/assets/images/carousel_3.jpg": "639676bda3d1065a1e49c85374872c12",
"assets/assets/images/course1.png": "6363d7898f87ac3ac7a0e161ef9acc0c",
"assets/assets/images/online_course.jpeg": "5380b04d3278ff10e1f61f22383f8ade",
"assets/assets/images/profile.png": "223a8bc2e2a001b6c57f888ef97b4ce6",
"assets/assets/images/profile2.png": "499a6a5386bca8ee7b9b94015eb7cea1",
"assets/assets/loading.json": "c39e89fadac75f06dfc46f633a8ec575",
"assets/assets/vector/dart_logo.png": "4026a372439e06145a2f38b446816a8a",
"assets/assets/vector/dislike.png": "3395b99045e314940f8ad594ef1cdb31",
"assets/assets/vector/dislike.svg": "cbad8def70cb55fd741f25840b0ded3d",
"assets/assets/vector/Java_Logo.png": "6505cdab6723f46e154569052ba36ac0",
"assets/assets/vector/kotlin_2_logo.png": "3fbb6d9a942516629cfad56e6fbed445",
"assets/assets/vector/like.svg": "7dd853bcb72cbb9aa20f0431f63eabef",
"assets/assets/vector/profile.svg": "1f4ad396fa4c79fa5e69c20bbe174bdf",
"assets/assets/vector/Python_Logo.png": "138a1dd0b29135c619eae783c9f4aa21",
"assets/assets/vector/search.svg": "caa95d131d16f6dc0a6d46263dedd1cf",
"assets/assets/vector/search2.svg": "6de3d20305978ae3544f51122aa4ca03",
"assets/assets/vector/splash.png": "8555f8928681a5658fe5f0869adfe31d",
"assets/assets/vector/splash.svg": "1ff81a65d5a242e79d8d7c5451c000f6",
"assets/assets/vector/Star.svg": "885b05817909ad5d3c4d8dc4b3933c61",
"assets/assets/vector/user.svg": "372bd7316c4a53ad616b618e17816c48",
"assets/assets/wave.json": "c58c23b7906e0330c24b80f2b7dbc1aa",
"assets/FontManifest.json": "3f32ff43e69c5c35be485dceacada750",
"assets/fonts/LEMONMILK-Bold.otf": "8daf0546ac7662756f96d34988f75b4d",
"assets/fonts/LEMONMILK-Medium.otf": "51cab81ef06302b3a4f10723c2396e83",
"assets/fonts/LEMONMILK-Regular.otf": "be29f3c5ccd30b97f9c394a02c9ce5d7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "28439d600b1faec576c9a0903bb0bc35",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "23ef006207960e72bc3f6b33992914f9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e6412511f87399873dcd45e84f9f327f",
"/": "e6412511f87399873dcd45e84f9f327f",
"main.dart.js": "2cdbe264396a6a2c448f693858dd0ef3",
"manifest.json": "48d5131af17cd76baed1d1a5cea9f645",
"version.json": "5e2d2405283f59c6b682515ec1a543e8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
