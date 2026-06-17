
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
      "chunk-YWBNPCLL.js"
    ],
    "route": "/*/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YWBNPCLL.js"
    ],
    "route": "/*/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YWBNPCLL.js"
    ],
    "route": "/*/register/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YWBNPCLL.js"
    ],
    "route": "/*/register/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YWBNPCLL.js"
    ],
    "route": "/*/register/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YWBNPCLL.js"
    ],
    "route": "/*/register/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YWBNPCLL.js"
    ],
    "route": "/*/register/*/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YWBNPCLL.js"
    ],
    "route": "/*/register/*/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YWBNPCLL.js"
    ],
    "route": "/*/register/*/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5ZAA4HPX.js"
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
      "chunk-MP3KFPB4.js"
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
      "chunk-TNSC7NJX.js"
    ],
    "route": "/*/product-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Y5GPJDRS.js",
      "chunk-ABOP5K7A.js",
      "chunk-A3RMNX25.js",
      "chunk-CTTUW553.js",
      "chunk-BSRQOXT3.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RWZ25KE3.js",
      "chunk-DMHZ22DI.js",
      "chunk-A3RMNX25.js",
      "chunk-CTTUW553.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ONEJWB4S.js",
      "chunk-ABOP5K7A.js",
      "chunk-A3RMNX25.js"
    ],
    "route": "/*/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-V4FAVMJM.js"
    ],
    "redirectTo": "/*/profile/personal",
    "route": "/*/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-V4FAVMJM.js"
    ],
    "route": "/*/profile/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-V4FAVMJM.js"
    ],
    "route": "/*/profile/orders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-V4FAVMJM.js"
    ],
    "route": "/*/profile/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-V4FAVMJM.js"
    ],
    "route": "/*/profile/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-V4FAVMJM.js"
    ],
    "route": "/*/profile/account-management"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7ZUAPL2Y.js"
    ],
    "route": "/*/privacy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3WBKYSX6.js",
      "chunk-DMHZ22DI.js",
      "chunk-A3RMNX25.js"
    ],
    "redirectTo": "/*/checkout/checkout-address",
    "route": "/*/checkout"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3WBKYSX6.js",
      "chunk-DMHZ22DI.js",
      "chunk-A3RMNX25.js"
    ],
    "route": "/*/checkout/checkout-address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3WBKYSX6.js",
      "chunk-DMHZ22DI.js",
      "chunk-A3RMNX25.js"
    ],
    "route": "/*/checkout/payment"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3WBKYSX6.js",
      "chunk-DMHZ22DI.js",
      "chunk-A3RMNX25.js"
    ],
    "route": "/*/checkout/track-order"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3WBKYSX6.js",
      "chunk-DMHZ22DI.js",
      "chunk-A3RMNX25.js"
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
    'index.csr.html': {size: 43644, hash: 'b7e0d058deb8f828aad38b1988a03f5148e1b13b3cb26dc3f74df8a253454db2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4499, hash: '1544dca1f848aa21f46a5bac88a9a6bfa2a0cba1486241c8659a38d598a4d345', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TZU5ZL42.css': {size: 234953, hash: '2MVsQ1CMooo', text: () => import('./assets-chunks/styles-TZU5ZL42_css.mjs').then(m => m.default)}
  },
};
