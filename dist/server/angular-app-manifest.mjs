
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
      "chunk-CKPF4YOU.js"
    ],
    "route": "/*/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CKPF4YOU.js"
    ],
    "route": "/*/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CKPF4YOU.js"
    ],
    "route": "/*/register/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CKPF4YOU.js"
    ],
    "route": "/*/register/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CKPF4YOU.js"
    ],
    "route": "/*/register/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CKPF4YOU.js"
    ],
    "route": "/*/register/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CKPF4YOU.js"
    ],
    "route": "/*/register/*/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CKPF4YOU.js"
    ],
    "route": "/*/register/*/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CKPF4YOU.js"
    ],
    "route": "/*/register/*/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EDU4SIYJ.js"
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
      "chunk-MPBWHYJE.js"
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
      "chunk-HTRCVAXO.js"
    ],
    "route": "/*/product-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GL7BY23B.js",
      "chunk-ARX5VFEU.js",
      "chunk-YUVZ233Z.js",
      "chunk-56F7FXA4.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-72ENTOLD.js",
      "chunk-ARX5VFEU.js",
      "chunk-YUVZ233Z.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EHLARSVD.js",
      "chunk-ARX5VFEU.js"
    ],
    "route": "/*/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NTABYJEZ.js"
    ],
    "redirectTo": "/*/profile/personal",
    "route": "/*/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NTABYJEZ.js"
    ],
    "route": "/*/profile/personal"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NTABYJEZ.js"
    ],
    "route": "/*/profile/orders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NTABYJEZ.js"
    ],
    "route": "/*/profile/address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NTABYJEZ.js"
    ],
    "route": "/*/profile/password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NTABYJEZ.js"
    ],
    "route": "/*/profile/account-management"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-PEU6PC6R.js"
    ],
    "route": "/*/privacy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BNOIVLZW.js",
      "chunk-ARX5VFEU.js"
    ],
    "redirectTo": "/*/checkout/checkout-address",
    "route": "/*/checkout"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BNOIVLZW.js",
      "chunk-ARX5VFEU.js"
    ],
    "route": "/*/checkout/checkout-address"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BNOIVLZW.js",
      "chunk-ARX5VFEU.js"
    ],
    "route": "/*/checkout/payment"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BNOIVLZW.js",
      "chunk-ARX5VFEU.js"
    ],
    "route": "/*/checkout/track-order"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BNOIVLZW.js",
      "chunk-ARX5VFEU.js"
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
    'index.csr.html': {size: 43758, hash: '20687c1b786df2012f1cac953498bb97ee81c87a05e18b6c0a21fd21ee4cda75', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4651, hash: '19ef567a576d0480b69a0cc63366f73e2821f79982ab9d85a283bb13fd5b40aa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AQPTAHVX.css': {size: 234863, hash: 'h5ksG2BBpms', text: () => import('./assets-chunks/styles-AQPTAHVX_css.mjs').then(m => m.default)}
  },
};
