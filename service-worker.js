if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let l={};const f=e=>a(e,d),s={module:{uri:d},exports:l,require:f};i[d]=Promise.all(r.map((e=>s[e]||f(e)))).then((e=>(c(...e),l)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/05/XSX添加电视直播.html",revision:"9fae41869fca8eb300a314d9e09b2d59"},{url:"2022/05/双人游戏评测.html",revision:"728db3fb7bdfcdfd71c118fa7336d238"},{url:"2023/10/EvenlyDistributed.html",revision:"291176f42d9cd53717c12cfecd086aa0"},{url:"2023/10/hello-world.html",revision:"40cbcc58879d4e1a890d4b0e4fe9fd90"},{url:"2024/04/HowToCreateAGoogleBlogger.html",revision:"e7d9d263fce3217b5cc49be2447be77a"},{url:"404.html",revision:"89c44f034999a24e22ce0d7afcec810e"},{url:"about/index.html",revision:"40ae27afa8e27cdd00422cd335b1a290"},{url:"archives/2022/05/index.html",revision:"c381c7c679a81aaa80e94db050e9de17"},{url:"archives/2022/index.html",revision:"e44be61ba7730f98582da850af7f8126"},{url:"archives/2023/10/index.html",revision:"5fa9378023b0059f7fe53377cd5f0536"},{url:"archives/2023/index.html",revision:"64086b08bf5fb7a37658f83a517ab059"},{url:"archives/2024/04/index.html",revision:"6f190c0232d6ff7e724d610a4c0e4b72"},{url:"archives/2024/index.html",revision:"7cb2f293866508a1469f783068318d83"},{url:"archives/index.html",revision:"bd039c5a4c1b2ee43a04a27eece6a91a"},{url:"categories/index.html",revision:"1c91f82298c5e27208fd80c8ba883088"},{url:"categories/xbox/index.html",revision:"3ecbb450b69f1e61dc18610fef151693"},{url:"css/index.css",revision:"57afb728ce545c66b281b1c6f8a7ad7c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"ca64b47eb569985edbca1aaa14591d29"},{url:"Gallery/marvel/index.html",revision:"828ed5ff71189c62e85b75200bf8f9b9"},{url:"Gallery/ohmygirl/index.html",revision:"018c88d2ee4d7137cf821fc8131429ee"},{url:"Gallery/wallpaper/index.html",revision:"6262974dd63922329bbe802b12ddbf18"},{url:"image/avatar.png",revision:"b35ece7dcd9e37a6bc713ff3601ea45d"},{url:"image/avatar1.png",revision:"1c8a9a431720b01c748913f8ac995b42"},{url:"image/avatar2.png",revision:"45ab5ffeaf90a993952648e03ff66526"},{url:"image/avatar21.png",revision:"1ecb70e54ebc1143bb6d902e27bbc0e2"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"1c8a9a431720b01c748913f8ac995b42"},{url:"img/butterfly.jpg",revision:"40553cdd0035be52fba66f49151301e5"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"44af0c0d1829ab59ed379821c4ffe598"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/markmap.js",revision:"a0c1a7b518367082b3ab51c66c90a5f5"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"b369c82578d9009090ece9f02e1b5447"},{url:"messageboard/index.html",revision:"7aaad8afc9401f99e6a2571b98dc63a0"},{url:"selfjs/localsearch.js",revision:"cf1c14a788790754dc1a41fc580db475"},{url:"selfjs/tw_cn.js",revision:"04298651b90ad9444f0377a3344b87b7"},{url:"tags/index.html",revision:"0927a6e8af3a6c6601597aa93eb7df36"},{url:"tags/Seth-s-Blog/index.html",revision:"e43cf247745fb4c431ec4436cd5d6d54"},{url:"tags/xbox/index.html",revision:"e44c3059f3c037a95f3d7210958bf360"},{url:"tags/双人游戏/index.html",revision:"ac7662084731aacc34b2f7075b8b0904"},{url:"tags/折腾/index.html",revision:"edf73a60c8d5034c186aec45de3c1ee6"},{url:"tags/机顶盒/index.html",revision:"263c7e95a7e7bc4f0061b1edfd7e3b63"},{url:"tags/英语学习/index.html",revision:"53c1e2501361590f683340540ff1d0a7"},{url:"tags/评测/index.html",revision:"ff20806200c7994a51509db8cf157076"},{url:"talking/index.html",revision:"ad3270ba0e297fbb64117ce144319a9e"}],{})}));
//# sourceMappingURL=service-worker.js.map
