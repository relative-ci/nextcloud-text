"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["src_views_FilesSettings_vue"],{86478:(e,s,t)=>{t.d(s,{default:()=>c});var o=t(69183),n=t(47845),r=t(79753);const a={name:"FilesSettings",data:()=>({showWorkspace:OCA.Text.RichWorkspaceEnabled}),methods:{toggle(){this.showWorkspace?((0,o.j8)("Text::showRichWorkspace"),n.Z.post((0,r.nu)("/apps/text/settings"),{key:"workspace_enabled",value:"1"})):((0,o.j8)("Text::hideRichWorkspace"),n.Z.post((0,r.nu)("/apps/text/settings"),{key:"workspace_enabled",value:"0"}))}}};const c=(0,t(51900).Z)(a,(function(){var e=this,s=e._self._c;return s("div",{attrs:{id:"files-setting-richworkspace"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.showWorkspace,expression:"showWorkspace"}],staticClass:"checkbox",attrs:{id:"showRichWorkspacesToggle",type:"checkbox"},domProps:{checked:Array.isArray(e.showWorkspace)?e._i(e.showWorkspace,null)>-1:e.showWorkspace},on:{change:[function(s){var t=e.showWorkspace,o=s.target,n=!!o.checked;if(Array.isArray(t)){var r=e._i(t,null);o.checked?r<0&&(e.showWorkspace=t.concat([null])):r>-1&&(e.showWorkspace=t.slice(0,r).concat(t.slice(r+1)))}else e.showWorkspace=n},e.toggle]}}),e._v(" "),s("label",{attrs:{for:"showRichWorkspacesToggle"}},[e._v(e._s(e.t("text","Show folder description")))])])}),[],!1,null,null,null).exports},51900:(e,s,t)=>{function o(e,s,t,o,n,r,a,c){var i,l="function"==typeof e?e.options:e;if(s&&(l.render=s,l.staticRenderFns=t,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),a?(i=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=i):n&&(i=c?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),i)if(l.functional){l._injectStyles=i;var p=l.render;l.render=function(e,s){return i.call(s),p(e,s)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,i):[i]}return{exports:e,options:l}}t.d(s,{Z:()=>o})}}]);
//# sourceMappingURL=src_views_FilesSettings_vue.js.map?v=1099adfdad167edf36e0