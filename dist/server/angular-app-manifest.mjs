
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
    "redirectTo": "/ar/thankYou",
    "route": "/thankYou"
  },
  {
    "renderMode": 0,
    "route": "/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NLCUBEPA.js"
    ],
    "route": "/*/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NLCUBEPA.js"
    ],
    "route": "/*/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NLCUBEPA.js"
    ],
    "route": "/*/register/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NLCUBEPA.js"
    ],
    "route": "/*/register/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NLCUBEPA.js"
    ],
    "route": "/*/register/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NLCUBEPA.js"
    ],
    "route": "/*/register/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NLCUBEPA.js"
    ],
    "route": "/*/register/*/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NLCUBEPA.js"
    ],
    "route": "/*/register/*/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NLCUBEPA.js"
    ],
    "route": "/*/register/*/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GK3OM5SP.js"
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
      "chunk-WV3TG3KM.js"
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
      "chunk-KVGSNZC7.js"
    ],
    "route": "/*/product-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AHYTMJLB.js",
      "chunk-75DB2AES.js",
      "chunk-3UMWYW3P.js",
      "chunk-2ZXNW4J6.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-47ABY723.js",
      "chunk-75DB2AES.js",
      "chunk-3UMWYW3P.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CN66MZOO.js"
    ],
    "route": "/*/thankYou"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TRCZE45Q.js",
      "chunk-75DB2AES.js"
    ],
    "route": "/*/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-B4DJ7G6B.js"
    ],
    "redirectTo": "/*/profile/personal",
    "route": "/*/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-B4DJ7G6B.js"
    ],
    "route": "/*/profile/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-B4DJ7G6B.js"
    ],
    "route": "/*/profile/orders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-B4DJ7G6B.js"
    ],
    "route": "/*/profile/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-B4DJ7G6B.js"
    ],
    "route": "/*/profile/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-B4DJ7G6B.js"
    ],
    "route": "/*/profile/account-management"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7FSRNMTL.js"
    ],
    "route": "/*/privacy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EGMIAQHL.js",
      "chunk-75DB2AES.js"
    ],
    "redirectTo": "/*/checkout/checkout-address",
    "route": "/*/checkout"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EGMIAQHL.js",
      "chunk-75DB2AES.js"
    ],
    "route": "/*/checkout/checkout-address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EGMIAQHL.js",
      "chunk-75DB2AES.js"
    ],
    "route": "/*/checkout/payment"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EGMIAQHL.js",
      "chunk-75DB2AES.js"
    ],
    "route": "/*/checkout/track-order"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EGMIAQHL.js",
      "chunk-75DB2AES.js"
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
    'index.csr.html': {size: 44949, hash: 'c8f646521f52803fe76cd395752195e489ccf9b4daf372bbbf88c8201601e587', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4545, hash: '70cd5ae538cb4caea43f1623d9c6f9259999312e025448ee6ed7462641a7109f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WON3WVLW.css': {size: 242708, hash: 'U6pyJ1tjnvY', text: () => import('./assets-chunks/styles-WON3WVLW_css.mjs').then(m => m.default)}
  },
};
