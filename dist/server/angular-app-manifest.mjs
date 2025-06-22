
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/ar",
    "route": "/"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "redirectTo": "/*/home",
    "route": "/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BLSBMVYJ.js"
    ],
    "route": "/*/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BLSBMVYJ.js"
    ],
    "route": "/*/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BLSBMVYJ.js"
    ],
    "route": "/*/register/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BLSBMVYJ.js"
    ],
    "route": "/*/register/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BLSBMVYJ.js"
    ],
    "route": "/*/register/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BLSBMVYJ.js"
    ],
    "route": "/*/register/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BLSBMVYJ.js"
    ],
    "route": "/*/register/*/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BLSBMVYJ.js"
    ],
    "route": "/*/register/*/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BLSBMVYJ.js"
    ],
    "route": "/*/register/*/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/home"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/wishlist"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/blog/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/shopping"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/product-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "redirectTo": "/*/profile/personal",
    "route": "/*/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/profile/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/profile/orders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/profile/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/profile/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/profile/account-management"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/privacy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "redirectTo": "/*/checkout/checkout-address",
    "route": "/*/checkout"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/checkout/checkout-address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/checkout/payment"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/checkout/track-order"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-M3ZFZW2A.js"
    ],
    "route": "/*/checkout/track-order/*"
  },
  {
    "renderMode": 0,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 43312, hash: 'e1445c0c3a204f757497bef9d3a409b01d7ab5e9f334ef94d0d955988f2243c1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4246, hash: '50ffb608687706b6a0363385b924ff5f18ce57827e175667a01015a44f85fe2f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6B4DTSUU.css': {size: 234343, hash: 'ehiwBXj9yZ4', text: () => import('./assets-chunks/styles-6B4DTSUU_css.mjs').then(m => m.default)}
  },
};
