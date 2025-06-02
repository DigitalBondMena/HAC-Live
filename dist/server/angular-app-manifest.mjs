
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
    'index.csr.html': {size: 43152, hash: 'df1d9d7044c5cdb0667cb4651d70f8634cff19e3b94259c1502516811eaa47c2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4151, hash: '2f4bdb57c89903745221a4c2c4f2e1bef24f092798a776a579d4b6a66dceb6fd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MWJF626Z.css': {size: 234945, hash: '5J9LTwZS+hA', text: () => import('./assets-chunks/styles-MWJF626Z_css.mjs').then(m => m.default)}
  },
};
