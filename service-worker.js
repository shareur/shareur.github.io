if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let l={};const s=e=>a(e,d),b={module:{uri:d},exports:l,require:s};i[d]=Promise.all(r.map((e=>b[e]||s(e)))).then((e=>(c(...e),l)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/05/XSX添加电视直播.html",revision:"b28d9882c67b77bbe4b001a6ed622928"},{url:"2022/05/双人游戏评测.html",revision:"88e35ad617db87aff1637f64256c9c14"},{url:"2023/10/EvenlyDistributed.html",revision:"058bc419176074b7c88972605c871aee"},{url:"2023/10/hello-world.html",revision:"f618272f0e884277723f76bf150d639f"},{url:"404.html",revision:"c1b01ea7479a1bb53d2ee0a9a5c7e784"},{url:"about/index.html",revision:"ed8eb328c512adf87d72852a9810c3d4"},{url:"archives/2022/05/index.html",revision:"282b4ab6a9307292608e18c0a4c25df5"},{url:"archives/2022/index.html",revision:"72e7ae8e3380c839661b5814cff717a0"},{url:"archives/2023/10/index.html",revision:"11e84ab4bd4a9f2247aa9878a4594e42"},{url:"archives/2023/index.html",revision:"a8e5e3cf73d1ef16d5b6e1a49545f6d8"},{url:"archives/index.html",revision:"78fbaaa0b974261cad5ccf9c24a7bb95"},{url:"categories/index.html",revision:"27fb3c6d7d8a33fac283b80d263c5f3d"},{url:"categories/xbox/index.html",revision:"4c0606f44c7921a1a5491804f9e7d79a"},{url:"css/index.css",revision:"57afb728ce545c66b281b1c6f8a7ad7c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"20a44fc9d0464d6b76448e0899b4744b"},{url:"Gallery/marvel/index.html",revision:"d11d422329c546632dca6e3e7f350a34"},{url:"Gallery/ohmygirl/index.html",revision:"de37a3dc99d624544768a71d1a582c54"},{url:"Gallery/wallpaper/index.html",revision:"4b64b06a1fcf56bdb07fb3b2a8f5fdec"},{url:"image/avatar.png",revision:"b35ece7dcd9e37a6bc713ff3601ea45d"},{url:"image/avatar1.png",revision:"1c8a9a431720b01c748913f8ac995b42"},{url:"image/avatar2.png",revision:"45ab5ffeaf90a993952648e03ff66526"},{url:"image/avatar21.png",revision:"1ecb70e54ebc1143bb6d902e27bbc0e2"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.png",revision:"1c8a9a431720b01c748913f8ac995b42"},{url:"img/butterfly.jpg",revision:"40553cdd0035be52fba66f49151301e5"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"90348b87c7d140787c83341b3a7010e6"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/markmap.js",revision:"a0c1a7b518367082b3ab51c66c90a5f5"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"a3e3f15fcad894ef0610b6ee2d9f4934"},{url:"messageboard/index.html",revision:"5b99cc7607e6351ce1c86f34a0f1b4b8"},{url:"selfjs/localsearch.js",revision:"cf1c14a788790754dc1a41fc580db475"},{url:"selfjs/tw_cn.js",revision:"04298651b90ad9444f0377a3344b87b7"},{url:"tags/index.html",revision:"7327735c440c13a7fc22c164d67b062c"},{url:"tags/Seth-s-Blog/index.html",revision:"743ac783bd4799bb0a9b0a189ea087a9"},{url:"tags/xbox/index.html",revision:"f1e7a032246df9596539203083157091"},{url:"tags/双人游戏/index.html",revision:"5e814aa088800e5a9b25e493791889e9"},{url:"tags/折腾/index.html",revision:"1aa28cfeb5cadf3170e6f6a0de14a897"},{url:"tags/机顶盒/index.html",revision:"64e87c16c0060df07db77ead904767a6"},{url:"tags/英语学习/index.html",revision:"4e0c145a1b9052ee85e80932ee7e73b5"},{url:"tags/评测/index.html",revision:"1b1b97c5b5c6eb119a2b06a11921863c"},{url:"talking/index.html",revision:"1eb3bc7f473603f78161924f2877b102"}],{})}));
//# sourceMappingURL=service-worker.js.map
