
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
      "chunk-VSFTVTHD.js"
    ],
    "route": "/*/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VSFTVTHD.js"
    ],
    "route": "/*/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VSFTVTHD.js"
    ],
    "route": "/*/register/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VSFTVTHD.js"
    ],
    "route": "/*/register/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VSFTVTHD.js"
    ],
    "route": "/*/register/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VSFTVTHD.js"
    ],
    "route": "/*/register/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VSFTVTHD.js"
    ],
    "route": "/*/register/*/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VSFTVTHD.js"
    ],
    "route": "/*/register/*/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VSFTVTHD.js"
    ],
    "route": "/*/register/*/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7WOK54ZW.js"
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
      "chunk-OWLEET5K.js"
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
      "chunk-YI2X5OAA.js"
    ],
    "route": "/*/product-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GWYQZKKE.js",
      "chunk-YVRKQXA7.js",
      "chunk-N563L273.js",
      "chunk-ACQOO2SM.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WMSLJSDR.js",
      "chunk-YVRKQXA7.js",
      "chunk-N563L273.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WCDDCH7B.js",
      "chunk-YVRKQXA7.js"
    ],
    "route": "/*/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QZ3G3VEI.js"
    ],
    "redirectTo": "/*/profile/personal",
    "route": "/*/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QZ3G3VEI.js"
    ],
    "route": "/*/profile/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QZ3G3VEI.js"
    ],
    "route": "/*/profile/orders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QZ3G3VEI.js"
    ],
    "route": "/*/profile/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QZ3G3VEI.js"
    ],
    "route": "/*/profile/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QZ3G3VEI.js"
    ],
    "route": "/*/profile/account-management"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OAWQZ5M2.js"
    ],
    "route": "/*/privacy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YOPMOSV5.js",
      "chunk-YVRKQXA7.js"
    ],
    "redirectTo": "/*/checkout/checkout-address",
    "route": "/*/checkout"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YOPMOSV5.js",
      "chunk-YVRKQXA7.js"
    ],
    "route": "/*/checkout/checkout-address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YOPMOSV5.js",
      "chunk-YVRKQXA7.js"
    ],
    "route": "/*/checkout/payment"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YOPMOSV5.js",
      "chunk-YVRKQXA7.js"
    ],
    "route": "/*/checkout/track-order"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YOPMOSV5.js",
      "chunk-YVRKQXA7.js"
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
    'index.csr.html': {size: 43758, hash: 'a160e0e916a7f16c78543031b411b111987675bffeca57e09954eca37d73fea3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4651, hash: '1e1355be75d15745bfa3e39a86fc3a6383234f7715f03e2c0089d457b447d248', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BNYTQSCU.css': {size: 234811, hash: 'ThTCG7WRwj8', text: () => import('./assets-chunks/styles-BNYTQSCU_css.mjs').then(m => m.default)}
  },
};
