if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let l={};const s=e=>a(e,d),f={module:{uri:d},exports:l,require:s};i[d]=Promise.all(c.map((e=>f[e]||s(e)))).then((e=>(r(...e),l)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/05/XSX添加电视直播.html",revision:"49d78fcee4e4851e25d5bba6cf88c0c6"},{url:"2022/05/五颜六色.html",revision:"bf63d40b9dae25f060c52c5c9798c7aa"},{url:"2022/05/双人游戏评测.html",revision:"03e0db75e68c0aaa14600d7c2836d875"},{url:"2023/10/EvenlyDistributed.html",revision:"4a17e957e0329230ae4f9a263d6c9a16"},{url:"2023/10/hello-world.html",revision:"05a419c584c6a2699eff1a0e3f869442"},{url:"404.html",revision:"6e4e8f6a2b486ec981282393b1e1beb1"},{url:"about/index.html",revision:"0ed03ef79a8d56bc218c541ecb083b66"},{url:"archives/2022/05/index.html",revision:"57430087e61c93b22eb6d5ffc2923f41"},{url:"archives/2022/index.html",revision:"b84886d9910d70805e8bc1a45b7e0e6d"},{url:"archives/2023/10/index.html",revision:"fcde8113599b4313ef82b3a5e8c298e6"},{url:"archives/2023/index.html",revision:"b7112bdec48b7ea7196f0aaf61f74440"},{url:"archives/index.html",revision:"6343fcdc5d9d327be7622c98f16521ac"},{url:"categories/index.html",revision:"196e00821fb8112c7f0cf3c90fa217e4"},{url:"categories/xbox/index.html",revision:"7d5d48af1b6b761fa3a5bda4482c424f"},{url:"categories/读书/index.html",revision:"d13b77535674e44e656afd338462b45b"},{url:"css/index.css",revision:"57afb728ce545c66b281b1c6f8a7ad7c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"6a2e925c1e30f1f1cc8504668312f4cf"},{url:"Gallery/marvel/index.html",revision:"7d201eec47937dfc6418123574d2a183"},{url:"Gallery/ohmygirl/index.html",revision:"cee79d3baac6f9819cdcd6c048f8882c"},{url:"Gallery/wallpaper/index.html",revision:"e47166744cc7873b0061aafdf14e8313"},{url:"image/avatar.png",revision:"b35ece7dcd9e37a6bc713ff3601ea45d"},{url:"image/avatar1.png",revision:"1c8a9a431720b01c748913f8ac995b42"},{url:"image/avatar2.png",revision:"45ab5ffeaf90a993952648e03ff66526"},{url:"image/avatar21.png",revision:"1ecb70e54ebc1143bb6d902e27bbc0e2"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"1c8a9a431720b01c748913f8ac995b42"},{url:"img/butterfly.jpg",revision:"40553cdd0035be52fba66f49151301e5"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"3e9c5d5df85c024fddf9c2d434867cc6"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/markmap.js",revision:"a0c1a7b518367082b3ab51c66c90a5f5"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"1b0daeaf8916227736bf048db5e6f16a"},{url:"messageboard/index.html",revision:"3801935c7eda58bbb59bc0f3c3faa513"},{url:"selfjs/localsearch.js",revision:"cf1c14a788790754dc1a41fc580db475"},{url:"selfjs/tw_cn.js",revision:"04298651b90ad9444f0377a3344b87b7"},{url:"tags/index.html",revision:"ec2d0657791ebb16a9fe2c49df85317c"},{url:"tags/Seth-s-Blog/index.html",revision:"26e516fb3c042467c87501ac33013347"},{url:"tags/xbox/index.html",revision:"916042f9cd95d753cca5b90bc7a622a4"},{url:"tags/书里的颜色/index.html",revision:"a582a0063193cadd7fce706538e4aa7e"},{url:"tags/双人游戏/index.html",revision:"c47c561c2739014fa044f945fcbfb7f6"},{url:"tags/折腾/index.html",revision:"797571e951d214b0c3d3c980fa68796a"},{url:"tags/机顶盒/index.html",revision:"82d73b3ef9cef16b26edfab4ce46cd0d"},{url:"tags/看书/index.html",revision:"e55c4737c972b1a852ef8e08765c54bf"},{url:"tags/评测/index.html",revision:"5d2a28638f8455d2c446d43919be76ad"},{url:"talking/index.html",revision:"5bc761a395132c45f815cb1efda70167"}],{})}));
//# sourceMappingURL=service-worker.js.map
