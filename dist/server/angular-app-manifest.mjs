
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
    'index.csr.html': {size: 43312, hash: 'e9ebbcb480082cae5c3249e16e42a70f7e88268241cb2f74de362ffd74706742', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4246, hash: '764833b048fbb0dac807b7f06c1150ca9a357491084e360dce9c7552f08f237b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-USNHOUTP.css': {size: 234383, hash: 'YJMb/FkbWLU', text: () => import('./assets-chunks/styles-USNHOUTP_css.mjs').then(m => m.default)}
  },
};
