"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["files-modal"],{38002:(e,t,l)=>{l.r(t),l.d(t,{default:()=>a});var i=l(47450);const n={name:"PublicFilesEditor",components:{Modal:l.n(i)(),EditorWrapper:function(){return Promise.all([l.e("vendors"),l.e("editor")]).then(l.bind(l,57603))}},props:{fileId:{type:Number,default:null},relativePath:{type:String,default:null},active:{type:Boolean,default:!1},shareToken:{type:String,default:null},mimeType:{type:String,default:null}},computed:{fileName:function(){return this.relativePath.substring(this.relativePath.lastIndexOf("/")+1)}},methods:{close:function(){this.$emit("close")}}};const a=(0,l(51900).Z)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return e.active?l("Modal",{attrs:{title:e.fileName},on:{close:e.close}},[l("EditorWrapper",{attrs:{"file-id":e.fileId,"relative-path":e.relativePath,active:e.active,"share-token":e.shareToken,mime:e.mimeType}})],1):e._e()}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=files-modal.js.map?v=2f3f8849f92eccd61419