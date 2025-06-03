
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
      "chunk-WNU2D6BW.js"
    ],
    "redirectTo": "/*/home",
    "route": "/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZXYIUK4N.js"
    ],
    "route": "/*/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZXYIUK4N.js"
    ],
    "route": "/*/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZXYIUK4N.js"
    ],
    "route": "/*/register/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZXYIUK4N.js"
    ],
    "route": "/*/register/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZXYIUK4N.js"
    ],
    "route": "/*/register/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZXYIUK4N.js"
    ],
    "route": "/*/register/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZXYIUK4N.js"
    ],
    "route": "/*/register/*/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZXYIUK4N.js"
    ],
    "route": "/*/register/*/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZXYIUK4N.js"
    ],
    "route": "/*/register/*/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/home"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/wishlist"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/blog/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/shopping"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/product-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "redirectTo": "/*/profile/personal",
    "route": "/*/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/profile/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/profile/orders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/profile/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/profile/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/profile/account-management"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/privacy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "redirectTo": "/*/checkout/checkout-address",
    "route": "/*/checkout"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/checkout/checkout-address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/checkout/payment"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/checkout/track-order"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNU2D6BW.js"
    ],
    "route": "/*/checkout/track-order/*"
  },
  {
    "renderMode": 0,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 43152, hash: '6ddeb03240e0512e0f5eacdc41633f0f2320346cc39f1abb3f5de53c378828ae', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4151, hash: '99b1fe1a7e9a3038e1dd7ef95162c4e6d042fa1746186d7e937428df96f99351', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QPKJLW7C.css': {size: 235195, hash: 'Qocip+dxHK4', text: () => import('./assets-chunks/styles-QPKJLW7C_css.mjs').then(m => m.default)}
  },
};
