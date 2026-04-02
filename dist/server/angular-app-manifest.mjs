
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
      "chunk-A7R52U4S.js"
    ],
    "route": "/*/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A7R52U4S.js"
    ],
    "route": "/*/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A7R52U4S.js"
    ],
    "route": "/*/register/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A7R52U4S.js"
    ],
    "route": "/*/register/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A7R52U4S.js"
    ],
    "route": "/*/register/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A7R52U4S.js"
    ],
    "route": "/*/register/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A7R52U4S.js"
    ],
    "route": "/*/register/*/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A7R52U4S.js"
    ],
    "route": "/*/register/*/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A7R52U4S.js"
    ],
    "route": "/*/register/*/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-I2HKTHSG.js"
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
      "chunk-KGGQ7ZOA.js"
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
      "chunk-F7UPDJRH.js"
    ],
    "route": "/*/product-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-PZLGNXA3.js",
      "chunk-DMCI4CT4.js",
      "chunk-C7MRQI3E.js",
      "chunk-CLSUTX37.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D2ACPFCF.js",
      "chunk-DMCI4CT4.js",
      "chunk-C7MRQI3E.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EUW3C7AQ.js",
      "chunk-DMCI4CT4.js"
    ],
    "route": "/*/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-X3OMXABR.js"
    ],
    "redirectTo": "/*/profile/personal",
    "route": "/*/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-X3OMXABR.js"
    ],
    "route": "/*/profile/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-X3OMXABR.js"
    ],
    "route": "/*/profile/orders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-X3OMXABR.js"
    ],
    "route": "/*/profile/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-X3OMXABR.js"
    ],
    "route": "/*/profile/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-X3OMXABR.js"
    ],
    "route": "/*/profile/account-management"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-42AWUEDZ.js"
    ],
    "route": "/*/privacy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IFOKGUI7.js",
      "chunk-DMCI4CT4.js"
    ],
    "redirectTo": "/*/checkout/checkout-address",
    "route": "/*/checkout"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IFOKGUI7.js",
      "chunk-DMCI4CT4.js"
    ],
    "route": "/*/checkout/checkout-address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IFOKGUI7.js",
      "chunk-DMCI4CT4.js"
    ],
    "route": "/*/checkout/payment"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IFOKGUI7.js",
      "chunk-DMCI4CT4.js"
    ],
    "route": "/*/checkout/track-order"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IFOKGUI7.js",
      "chunk-DMCI4CT4.js"
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
    'index.csr.html': {size: 43758, hash: '708062f313801b8f073125955f4e6bfd90ca9498046f08452410490f2fd7e6c4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4651, hash: 'd3a73eaf0d1dd8a39f85ae8316ab3eda7161b2b0b967375ecbb667e3162a80d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TZU5ZL42.css': {size: 234953, hash: '2MVsQ1CMooo', text: () => import('./assets-chunks/styles-TZU5ZL42_css.mjs').then(m => m.default)}
  },
};
