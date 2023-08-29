"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["files-modal"],{49142:(i,I,g)=>{g.r(I),g.d(I,{default:()=>t});const N={name:"PublicFilesEditor",components:{NcModal:g(70441).Jc,Editor:()=>Promise.all([g.e("vendors"),g.e("editor")]).then(g.bind(g,42344))},props:{fileId:{type:Number,default:null},relativePath:{type:String,default:null},active:{type:Boolean,default:!1},shareToken:{type:String,default:null},mimeType:{type:String,default:null}},computed:{fileName(){return this.relativePath.substring(this.relativePath.lastIndexOf("/")+1)}},methods:{close(){this.$emit("close")}}};const t=(0,g(51900).Z)(N,(function(){var i=this,I=i._self._c;return i.active?I("NcModal",{attrs:{name:i.fileName},on:{close:i.close}},[I("Editor",{attrs:{"file-id":i.fileId,"relative-path":i.relativePath,active:i.active,"share-token":i.shareToken,mime:i.mimeType}})],1):i._e()}),[],!1,null,null,null).exports},42761:i=>{i.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTS00LTRoMjR2MjRILTRWLTR6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTggMEMzLjYgMCAwIDMuNiAwIDhzMy42IDggOCA4IDgtMy42IDgtOC0zLjYtOC04LTh6IiBmaWxsPSIjZWQ0ODRjIi8+PHBhdGggZD0iTTUgNi41aDZjLjggMCAxLjUuNyAxLjUgMS41cy0uNyAxLjUtMS41IDEuNUg1Yy0uOCAwLTEuNS0uNy0xLjUtMS41UzQuMiA2LjUgNSA2LjV6IiBmaWxsPSIjZmRmZmZmIi8+PC9zdmc+Cg=="},87210:i=>{i.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTQuOCAxMS4yaDYuNFY0LjhINC44djYuNHpNOCAwQzMuNiAwIDAgMy42IDAgOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHoiIGZpbGw9IiM0OWIzODIiLz48L3N2Zz4K"},94659:i=>{i.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS00LTRoMjR2MjRILTR6Ii8+PHBhdGggZD0iTTYuOS4xQzMgLjYtLjEgNC0uMSA4YzAgNC40IDMuNiA4IDggOCA0IDAgNy40LTMgOC02LjktMS4yIDEuMy0yLjkgMi4xLTQuNyAyLjEtMy41IDAtNi40LTIuOS02LjQtNi40IDAtMS45LjgtMy42IDIuMS00Ljd6IiBmaWxsPSIjZjRhMzMxIi8+PC9zdmc+Cg=="},11530:i=>{i.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iI2QyZDJkMiI+PHBhdGggZD0iTTE1LjQgMTYuNkwxMC44IDEybDQuNi00LjZMMTQgNmwtNiA2IDYgNiAxLjQtMS40eiIvPjwvc3ZnPg=="},71124:i=>{i.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iI2QyZDJkMiI+PHBhdGggZD0iTTE4LjQgNy40TDE3IDZsLTYgNiA2IDYgMS40LTEuNC00LjYtNC42IDQuNi00LjZtLTYgMEwxMSA2bC02IDYgNiA2IDEuNC0xLjRMNy44IDEybDQuNi00LjZ6Ii8+PC9zdmc+"},48461:i=>{i.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iI2QyZDJkMiI+PHBhdGggZD0iTTUuNiA3LjRMNyA2bDYgNi02IDYtMS40LTEuNCA0LjYtNC42LTQuNi00LjZtNiAwTDEzIDZsNiA2LTYgNi0xLjQtMS40IDQuNi00LjYtNC42LTQuNnoiLz48L3N2Zz4="},23427:i=>{i.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iI2QyZDJkMiI+PHBhdGggZD0iTTguNiAxNi42bDQuNi00LjYtNC42LTQuNkwxMCA2bDYgNi02IDYtMS40LTEuNHoiLz48L3N2Zz4="},39896:i=>{i.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTE1LjQgMTYuNkwxMC44IDEybDQuNi00LjZMMTQgNmwtNiA2IDYgNiAxLjQtMS40eiIvPjwvc3ZnPg=="},76899:i=>{i.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTE4LjQgNy40TDE3IDZsLTYgNiA2IDYgMS40LTEuNC00LjYtNC42IDQuNi00LjZtLTYgMEwxMSA2bC02IDYgNiA2IDEuNC0xLjRMNy44IDEybDQuNi00LjZ6Ii8+PC9zdmc+"},88931:i=>{i.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTUuNiA3LjRMNyA2bDYgNi02IDYtMS40LTEuNCA0LjYtNC42LTQuNi00LjZtNiAwTDEzIDZsNiA2LTYgNi0xLjQtMS40IDQuNi00LjYtNC42LTQuNnoiLz48L3N2Zz4="},16556:i=>{i.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTguNiAxNi42bDQuNi00LjYtNC42LTQuNkwxMCA2bDYgNi02IDYtMS40LTEuNHoiLz48L3N2Zz4="}}]);
//# sourceMappingURL=files-modal.js.map?v=a376c48832f3ffd39814