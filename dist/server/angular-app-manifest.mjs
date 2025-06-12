
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
      "chunk-HYM4JYLC.js"
    ],
    "redirectTo": "/*/home",
    "route": "/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DUBNX7C2.js"
    ],
    "route": "/*/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DUBNX7C2.js"
    ],
    "route": "/*/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DUBNX7C2.js"
    ],
    "route": "/*/register/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DUBNX7C2.js"
    ],
    "route": "/*/register/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DUBNX7C2.js"
    ],
    "route": "/*/register/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DUBNX7C2.js"
    ],
    "route": "/*/register/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DUBNX7C2.js"
    ],
    "route": "/*/register/*/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DUBNX7C2.js"
    ],
    "route": "/*/register/*/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DUBNX7C2.js"
    ],
    "route": "/*/register/*/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/home"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/wishlist"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/blog/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/shopping"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/product-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "redirectTo": "/*/profile/personal",
    "route": "/*/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/profile/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/profile/orders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/profile/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/profile/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/profile/account-management"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/privacy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "redirectTo": "/*/checkout/checkout-address",
    "route": "/*/checkout"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/checkout/checkout-address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/checkout/payment"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
    ],
    "route": "/*/checkout/track-order"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYM4JYLC.js"
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
    'index.csr.html': {size: 42991, hash: '7c32c5ef27a9c9f9c6bb892f0090fb86b74035c95d07bb972b943cbce84bf270', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3926, hash: 'a476215a7fcd36f79cb7f8a64113dcb8719340a1476e87ab40391b8dc7f8604c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YJTVJWCJ.css': {size: 233936, hash: 'mZzjk7XCqOA', text: () => import('./assets-chunks/styles-YJTVJWCJ_css.mjs').then(m => m.default)}
  },
};
