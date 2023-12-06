/*! For license information please see src_helpers_files_js.js.LICENSE.txt */
(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["src_helpers_files_js","src_store_index_js"],{62556:(t,e,n)=>{"use strict";e.Kc=function(t){return new o.default(t)};var o=r(n(71957)),i=r(n(48971));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e){Object.keys(t).filter((t=>!e||e(t))).map(t.removeItem.bind(t))}},48971:(t,e)=>{"use strict";function n(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;class o{constructor(t,e,i){n(this,"scope",void 0),n(this,"wrapped",void 0),this.scope=`${i?o.GLOBAL_SCOPE_PERSISTENT:o.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`,this.wrapped=e}scopeKey(t){return`${this.scope}${t}`}setItem(t,e){this.wrapped.setItem(this.scopeKey(t),e)}getItem(t){return this.wrapped.getItem(this.scopeKey(t))}removeItem(t){this.wrapped.removeItem(this.scopeKey(t))}clear(){Object.keys(this.wrapped).filter((t=>t.startsWith(this.scope))).map(this.wrapped.removeItem.bind(this.wrapped))}}e.default=o,n(o,"GLOBAL_SCOPE_VOLATILE","nextcloud_vol"),n(o,"GLOBAL_SCOPE_PERSISTENT","nextcloud_per")},71957:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=(o=n(48971))&&o.__esModule?o:{default:o};function r(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default=class{constructor(t){r(this,"appId",void 0),r(this,"persisted",!1),r(this,"clearedOnLogout",!1),this.appId=t}persist(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.persisted=t,this}clearOnLogout(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.clearedOnLogout=t,this}build(){return new i.default(this.appId,this.persisted?window.localStorage:window.sessionStorage,!this.clearedOnLogout)}}},94091:(e,n,o)=>{"use strict";o.d(n,{FilesWorkspaceHeader:()=>m,Lz:()=>d,registerFileActionFallback:()=>p});o(69183);var i=o(77377),r=o(79753),s=o(42397),a=o(74411),c=o(25030),u=(o(77958),o(64024),o(47845),o(43935));o(19611);const l="Edit with text app",d=function(t,e){const n=t.split("/"),o=e.split("/");for(n.pop();n[0]===o[0];)if(n.shift(),o.shift(),0===n.length&&0===o.length)return".";const i=n.fill("..").concat(o),r=e.split("/");return i.length<r.length?i.join("/"):e},p=()=>{const e=(0,s.a)(),n=document.querySelector("#preview table.files-filestable");if(!e||!n){const n=document.createElement("div");n.id="text-viewer-fallback",document.body.appendChild(n);const i=i=>OCA.Files.fileActions.register(i,l,OC.PERMISSION_UPDATE|OC.PERMISSION_READ,(0,r.imagePath)("core","actions/rename"),(t=>{const i=window.FileList.findFile(t);Promise.all([Promise.resolve().then(o.bind(o,20144)),Promise.all([o.e("vendors-node_modules_nextcloud_vue_dist_index_mjs"),o.e("files-modal")]).then(o.bind(o,49142))]).then((o=>{const r=window.FileList.getCurrentDirectory()+"/"+t,s=o[0].default;s.prototype.t=window.t,s.prototype.n=window.n,s.prototype.OCA=window.OCA;const a=o[1].default;new s({render:function(t){const n=this;return t(a,{props:{fileId:i?i.id:null,active:!0,shareToken:e,relativePath:r,mimeType:i.mimetype},on:{close:function(){n.$destroy()}}})}}).$mount(n)}))}),t("text","Edit"));for(let t=0;t<a.SP.length;t++)i(a.SP[t]),OCA.Files.fileActions.setDefault(a.SP[t],l)}};let f=!1;let h=null;const m=new i.h4({id:"workspace",order:10,enabled:(t,e)=>"files"===e.id,async render(t,e,n){h&&(h.$destroy(),h=null);const i=!!e.attributes["rich-workspace-file"]||!!f,r=f?(0,u.dirname)(f.path):e.path,s=f?"":e.attributes["rich-workspace"];f=!1;const{default:a}=await Promise.all([o.e("mermaid"),o.e("vendors-node_modules_nextcloud_vue_dist_index_mjs"),o.e("vendors-node_modules_braintree_sanitize-url_dist_index_js-node_modules_quartzy_markdown-it-me-a38efe"),o.e("src_extensions_index_js-src_components_Editor_EditorOutline_vue-data_image_svg_xml_base64_PCE-a8d943"),o.e("src_views_RichWorkspace_vue-node_modules_nextcloud_vue_dist_Functions_emoji_mjs-node_modules_-0e99a0")]).then(o.bind(o,62716));Promise.resolve().then(o.bind(o,20144)).then((e=>{t.id="files-workspace-wrapper";const n=e.default;n.prototype.t=window.t,n.prototype.n=window.n,n.prototype.OCA=window.OCA;const o=n.extend(a);h=new o({propsData:{path:r,hasRichWorkspace:i,content:s},store:c.default}).$mount(t)}))},updated(t,e){f=!1;const n=!!t.attributes["rich-workspace-file"];h.path=t.path,h.hasRichWorkspace=n,h.content=t.attributes["rich-workspace"]}})},74411:(t,e,n)=>{"use strict";var o,i;n.d(e,{SP:()=>s});const r=["text/plain","application/cmd","application/x-empty","application/x-msdos-program","application/javascript","application/json","application/x-perl","application/x-php","application/x-tex","application/xml","application/yaml","text/asciidoc","text/css","text/html","text/org","text/x-c","text/x-c++src","text/x-h","text/x-java-source","text/x-ldif","text/x-python","text/x-shellscript"];null!==(o=OC.appswebroots)&&void 0!==o&&o.richdocuments||null!==(i=OC.appswebroots)&&void 0!==i&&i.onlyoffice||r.push("text/csv");const s=["text/markdown",...r]},42397:(t,e,n)=>{"use strict";n.d(e,{a:()=>o});const o=()=>document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null},25030:(t,e,n)=>{"use strict";n.d(e,{default:()=>y,D:()=>g});var o=n(20144),i=n(20629),r=n(62556),s=n(79753),a=n(47845);const c="SET_VIEW_WIDTH",u="SET_SHOW_AUTHOR_ANNOTATIONS",l="SET_CURRENT_SESSION",d="SET_HEADINGS",p="SET_ATTACHMENT_LIST";var f=n(20296),h=n.n(f);const m=()=>document.documentElement.clientWidth,v=t=>{let{commit:e}=t;const n=h()((()=>{e("text/".concat(c),m())}),100);window.addEventListener("resize",n)},_=(0,r.Kc)("text").persist().build();o.default.use(i.ZP);const g={state:{showAuthorAnnotations:"true"===_.getItem("showAuthorAnnotations"),currentSession:_.getItem("currentSession"),viewWidth:m(),headings:Object.freeze([]),attachmentList:[]},getters:{imageAttachments:t=>t.attachmentList.filter((t=>t.isImage)),findAttachment:t=>e=>t.attachmentList.find((t=>t.name===e))},mutations:{[c](t,e){t.viewWidth=e},[u](t,e){t.showAuthorAnnotations=e,_.setItem("showAuthorAnnotations",""+e)},[l](t,e){t.currentSession=e,_.setItem("currentSession",e)},[d](t,e){if(t.headings.length!==e.length)return void(t.headings=Object.freeze(e));const n=t.headings,o=e.map(((t,e)=>{const o=n[e].level;return Object.freeze({...t,previous:o})}));t.headings=Object.freeze(o)},[p](t,e){t.attachmentList=e}},actions:{setShowAuthorAnnotations(t,e){let{commit:n}=t;n(u,e)},setCurrentSession(t,e){let{commit:n}=t;n(l,e)},setHeadings(t,e){let{commit:n}=t;n(d,e)},async setAttachmentList(t,e){var n,o,i,r;let{commit:c,state:u}=t,{documentId:l,shareToken:d}=e;const f=await a.Z.post((0,s.generateUrl)("/apps/text/attachments"),{documentId:null!==(n=null===(o=u.currentSession)||void 0===o?void 0:o.documentId)&&void 0!==n?n:l,sessionId:null===(i=u.currentSession)||void 0===i?void 0:i.id,sessionToken:null===(r=u.currentSession)||void 0===r?void 0:r.token,shareToken:d});c(p,f.data)}}},y=new i.yh({plugins:[v],modules:{text:{namespaced:!0,...g}}})},20296:t=>{function e(t,e,n){var o,i,r,s,a;function c(){var u=Date.now()-s;u<e&&u>=0?o=setTimeout(c,e-u):(o=null,n||(a=t.apply(r,i),r=i=null))}null==e&&(e=100);var u=function(){r=this,i=arguments,s=Date.now();var u=n&&!o;return o||(o=setTimeout(c,e)),u&&(a=t.apply(r,i),r=i=null),a};return u.clear=function(){o&&(clearTimeout(o),o=null)},u.flush=function(){o&&(a=t.apply(r,i),r=i=null,clearTimeout(o),o=null)},u}e.debounce=e,t.exports=e},20629:(t,e,n)=>{"use strict";n.d(e,{Se:()=>O,ZP:()=>T,nv:()=>E,rn:()=>b,yh:()=>p});var o=("undefined"!=typeof window?window:void 0!==n.g?n.g:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t,e){if(void 0===e&&(e=[]),null===t||"object"!=typeof t)return t;var n,o=(n=function(e){return e.original===t},e.filter(n)[0]);if(o)return o.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=i(t[n],e)})),r}function r(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function s(t){return null!==t&&"object"==typeof t}var a=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},c={namespaced:{configurable:!0}};c.namespaced.get=function(){return!!this._rawModule.namespaced},a.prototype.addChild=function(t,e){this._children[t]=e},a.prototype.removeChild=function(t){delete this._children[t]},a.prototype.getChild=function(t){return this._children[t]},a.prototype.hasChild=function(t){return t in this._children},a.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},a.prototype.forEachChild=function(t){r(this._children,t)},a.prototype.forEachGetter=function(t){this._rawModule.getters&&r(this._rawModule.getters,t)},a.prototype.forEachAction=function(t){this._rawModule.actions&&r(this._rawModule.actions,t)},a.prototype.forEachMutation=function(t){this._rawModule.mutations&&r(this._rawModule.mutations,t)},Object.defineProperties(a.prototype,c);var u=function(t){this.register([],t,!1)};function l(t,e,n){if(e.update(n),n.modules)for(var o in n.modules){if(!e.getChild(o))return void 0;l(t.concat(o),e.getChild(o),n.modules[o])}}u.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},u.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")}),"")},u.prototype.update=function(t){l([],this.root,t)},u.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var i=new a(e,n);0===t.length?this.root=i:this.get(t.slice(0,-1)).addChild(t[t.length-1],i);e.modules&&r(e.modules,(function(e,i){o.register(t.concat(i),e,n)}))},u.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],o=e.getChild(n);o&&o.runtime&&e.removeChild(n)},u.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var d;var p=function(t){var e=this;void 0===t&&(t={}),!d&&"undefined"!=typeof window&&window.Vue&&w(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new u(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new d,this._makeLocalGettersCache=Object.create(null);var r=this,s=this.dispatch,a=this.commit;this.dispatch=function(t,e){return s.call(r,t,e)},this.commit=function(t,e,n){return a.call(r,t,e,n)},this.strict=i;var c=this._modules.root.state;_(this,c,[],this._modules.root),v(this,c),n.forEach((function(t){return t(e)})),(void 0!==t.devtools?t.devtools:d.config.devtools)&&function(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}(this)},f={state:{configurable:!0}};function h(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function m(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;_(t,n,[],t._modules.root,!0),v(t,n,e)}function v(t,e,n){var o=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};r(i,(function(e,n){s[n]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var a=d.config.silent;d.config.silent=!0,t._vm=new d({data:{$$state:e},computed:s}),d.config.silent=a,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}(t),o&&(n&&t._withCommit((function(){o._data.$$state=null})),d.nextTick((function(){return o.$destroy()})))}function _(t,e,n,o,i){var r=!n.length,s=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=o),!r&&!i){var a=g(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){d.set(a,c,o.state)}))}var u=o.context=function(t,e,n){var o=""===e,i={dispatch:o?t.dispatch:function(n,o,i){var r=y(n,o,i),s=r.payload,a=r.options,c=r.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:o?t.commit:function(n,o,i){var r=y(n,o,i),s=r.payload,a=r.options,c=r.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:o?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var n={},o=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,o)===e){var r=i.slice(o);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return g(t.state,n)}}}),i}(t,s,n);o.forEachMutation((function(e,n){!function(t,e,n,o){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,o.state,e)}))}(t,s+n,e,u)})),o.forEachAction((function(e,n){var o=e.root?n:s+n,i=e.handler||e;!function(t,e,n,o){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i,r=n.call(t,{dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e);return(i=r)&&"function"==typeof i.then||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}(t,o,i,u)})),o.forEachGetter((function(e,n){!function(t,e,n,o){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)}}(t,s+n,e,u)})),o.forEachChild((function(o,r){_(t,e,n.concat(r),o,i)}))}function g(t,e){return e.reduce((function(t,e){return t[e]}),t)}function y(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function w(t){d&&t===d||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(d=t)}f.state.get=function(){return this._vm._data.$$state},f.state.set=function(t){0},p.prototype.commit=function(t,e,n){var o=this,i=y(t,e,n),r=i.type,s=i.payload,a=(i.options,{type:r,payload:s}),c=this._mutations[r];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,o.state)})))},p.prototype.dispatch=function(t,e){var n=this,o=y(t,e),i=o.type,r=o.payload,s={type:i,payload:r},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(t){0}var c=a.length>1?Promise.all(a.map((function(t){return t(r)}))):a[0](r);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(t){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(t){0}e(t)}))}))}},p.prototype.subscribe=function(t,e){return h(t,this._subscribers,e)},p.prototype.subscribeAction=function(t,e){return h("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},p.prototype.watch=function(t,e,n){var o=this;return this._watcherVM.$watch((function(){return t(o.state,o.getters)}),e,n)},p.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},p.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),_(this,this.state,t,this._modules.get(t),n.preserveState),v(this,this.state)},p.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=g(e.state,t.slice(0,-1));d.delete(n,t[t.length-1])})),m(this)},p.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},p.prototype.hotUpdate=function(t){this._modules.update(t),m(this,!0)},p.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(p.prototype,f);var b=A((function(t,e){var n={};return S(e).forEach((function(e){var o=e.key,i=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=C(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof i?i.call(this,e,n):e[i]},n[o].vuex=!0})),n})),x=A((function(t,e){var n={};return S(e).forEach((function(e){var o=e.key,i=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.commit;if(t){var r=C(this.$store,"mapMutations",t);if(!r)return;o=r.context.commit}return"function"==typeof i?i.apply(this,[o].concat(e)):o.apply(this.$store,[i].concat(e))}})),n})),O=A((function(t,e){var n={};return S(e).forEach((function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){if(!t||C(this.$store,"mapGetters",t))return this.$store.getters[i]},n[o].vuex=!0})),n})),E=A((function(t,e){var n={};return S(e).forEach((function(e){var o=e.key,i=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.dispatch;if(t){var r=C(this.$store,"mapActions",t);if(!r)return;o=r.context.dispatch}return"function"==typeof i?i.apply(this,[o].concat(e)):o.apply(this.$store,[i].concat(e))}})),n}));function S(t){return function(t){return Array.isArray(t)||s(t)}(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function A(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function C(t,e,n){return t._modulesNamespaceMap[n]}function j(t,e,n){var o=n?t.groupCollapsed:t.group;try{o.call(t,e)}catch(n){t.log(e)}}function k(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function M(){var t=new Date;return" @ "+P(t.getHours(),2)+":"+P(t.getMinutes(),2)+":"+P(t.getSeconds(),2)+"."+P(t.getMilliseconds(),3)}function P(t,e){return n="0",o=e-t.toString().length,new Array(o+1).join(n)+t;var n,o}const T={Store:p,install:w,version:"3.6.2",mapState:b,mapMutations:x,mapGetters:O,mapActions:E,createNamespacedHelpers:function(t){return{mapState:b.bind(null,t),mapGetters:O.bind(null,t),mapMutations:x.bind(null,t),mapActions:E.bind(null,t)}},createLogger:function(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var o=t.transformer;void 0===o&&(o=function(t){return t});var r=t.mutationTransformer;void 0===r&&(r=function(t){return t});var s=t.actionFilter;void 0===s&&(s=function(t,e){return!0});var a=t.actionTransformer;void 0===a&&(a=function(t){return t});var c=t.logMutations;void 0===c&&(c=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var d=i(t.state);void 0!==l&&(c&&t.subscribe((function(t,s){var a=i(s);if(n(t,d,a)){var c=M(),u=r(t),p="mutation "+t.type+c;j(l,p,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",o(d)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",o(a)),k(l)}d=a})),u&&t.subscribeAction((function(t,n){if(s(t,n)){var o=M(),i=a(t),r="action "+t.type+o;j(l,r,e),l.log("%c action","color: #03A9F4; font-weight: bold",i),k(l)}})))}}}},19611:t=>{"use strict";t.exports='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-file-plus" viewBox="0 0 24 24"><path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H13.81C13.28 21.09 13 20.05 13 19C13 15.69 15.69 13 19 13C19.34 13 19.67 13.03 20 13.08V8L14 2M13 9V3.5L18.5 9H13M23 20H20V23H18V20H15V18H18V15H20V18H23V20Z" /></svg>'}}]);
//# sourceMappingURL=src_helpers_files_js.js.map?v=cefaf92a66d182f830af