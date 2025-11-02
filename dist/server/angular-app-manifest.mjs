
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
    "route": "/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GZKPZHDK.js"
    ],
    "route": "/*/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GZKPZHDK.js"
    ],
    "route": "/*/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GZKPZHDK.js"
    ],
    "route": "/*/register/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GZKPZHDK.js"
    ],
    "route": "/*/register/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GZKPZHDK.js"
    ],
    "route": "/*/register/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GZKPZHDK.js"
    ],
    "route": "/*/register/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GZKPZHDK.js"
    ],
    "route": "/*/register/*/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GZKPZHDK.js"
    ],
    "route": "/*/register/*/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GZKPZHDK.js"
    ],
    "route": "/*/register/*/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5ANTHOMW.js"
    ],
    "route": "/*/wishlist"
  },
  {
    "renderMode": 0,
    "route": "/*/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TWKKYYQR.js"
    ],
    "route": "/*/blog/*"
  },
  {
    "renderMode": 0,
    "route": "/*/shopping"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-S64PAGIB.js"
    ],
    "route": "/*/product-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-665ZUUVK.js",
      "chunk-XFSWSC4K.js",
      "chunk-C7MRQI3E.js",
      "chunk-S7RDUP52.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YYML2VHA.js",
      "chunk-XFSWSC4K.js",
      "chunk-C7MRQI3E.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DTOS5W4U.js",
      "chunk-XFSWSC4K.js"
    ],
    "route": "/*/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6LBKW3IF.js"
    ],
    "redirectTo": "/*/profile/personal",
    "route": "/*/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6LBKW3IF.js"
    ],
    "route": "/*/profile/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6LBKW3IF.js"
    ],
    "route": "/*/profile/orders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6LBKW3IF.js"
    ],
    "route": "/*/profile/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6LBKW3IF.js"
    ],
    "route": "/*/profile/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6LBKW3IF.js"
    ],
    "route": "/*/profile/account-management"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-K3KEL6UK.js"
    ],
    "route": "/*/privacy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OVKGUNQM.js",
      "chunk-XFSWSC4K.js"
    ],
    "redirectTo": "/*/checkout/checkout-address",
    "route": "/*/checkout"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OVKGUNQM.js",
      "chunk-XFSWSC4K.js"
    ],
    "route": "/*/checkout/checkout-address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OVKGUNQM.js",
      "chunk-XFSWSC4K.js"
    ],
    "route": "/*/checkout/payment"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OVKGUNQM.js",
      "chunk-XFSWSC4K.js"
    ],
    "route": "/*/checkout/track-order"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OVKGUNQM.js",
      "chunk-XFSWSC4K.js"
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
    'index.csr.html': {size: 43758, hash: '5ac4879796a004b3758e937929d56855fff8b889b9ddcfbec9c1a968c4771390', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4651, hash: '0f4ca413c50f21463640f343893bcdf2da079368496c2c43cd9fd964d069dc2a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MNOPQSBW.css': {size: 234821, hash: '62B/Xjqb78A', text: () => import('./assets-chunks/styles-MNOPQSBW_css.mjs').then(m => m.default)}
  },
};
