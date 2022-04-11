var k=Object.defineProperty,E=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var y=(s,t,a)=>t in s?k(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,v=(s,t)=>{for(var a in t||(t={}))F.call(t,a)&&y(s,a,t[a]);if(x)for(var a of x(t))C.call(t,a)&&y(s,a,t[a]);return s},S=(s,t)=>E(s,A(t));import{y as D,aj as _,aV as N,z as V,t as q,N as B,O as I,aW as P,I as f,o as T,D as j,S as n,H as i,q as r,C as d,G as b}from"./index.c7e85ff7.js";var g=D({name:"el-tree-line",props:{node:{type:Object,required:!0},data:{type:Array,default:()=>{}},treeData:{type:Array,default:()=>[]},indent:{type:Number,default:16},showLabelLine:{type:Boolean,default:!0}},setup(s,t){const{slots:a}=t;return{getScopedSlot:l=>{if(!l)return null;const u=l.split("||");let e=null;for(let o=0;o<u.length;o++){const h=u[o];e=(a||{})[h]}return e},getSlotValue:(l,u,e=null)=>N(l)?l(u)||e:l||e}},render(){const s=this.getScopedSlot("default"),t=this.getScopedSlot("node-label"),a=this.getScopedSlot("after-node-label"),m=s?this.getSlotValue(s,{node:this.node,data:this.data}):[t?this.getSlotValue(t,{node:this.node,data:this.data}):_("span",{class:"element-tree-node-label"},this.node.label),this.showLabelLine?_("span",{class:"element-tree-node-label-line"}):null,this.getSlotValue(a,{node:this.node,data:this.data})],c=[];let l=this.node;for(;l;){let e=l.parent;if(l.level===1&&!l.parent){if(!this.treeData||!Array.isArray(this.treeData))throw Error("if you using el-tree-v2 (Virtualized Tree) of element-plus,element-tree-line required data.");e={children:Array.isArray(this.treeData)?this.treeData.map(o=>S(v({},o),{key:o.id})):[],level:0,key:"node-0",parent:null}}if(e){const o=(e.children||e.childNodes).findIndex(h=>(h.key||h.id)===(l.key||l.id));c.unshift(o===(e.children||e.childNodes).length-1)}l=e}const u=[];for(let e=0;e<this.node.level;e++)u.push(_("span",{class:{"element-tree-node-line-ver":!0,"last-node-line":c[e]&&this.node.level-1!==e,"last-node-isLeaf-line":c[e]&&this.node.level-1===e},style:{left:this.indent*e+"px"}}));return _("span",{class:"element-tree-node-label-wrapper"},[m].concat(u).concat([_("span",{class:"element-tree-node-line-hor",style:{width:(this.node.isLeaf?24:8)+"px",left:(this.node.level-1)*this.indent+"px"}})]))}});const z=r("div",{class:"card-header"},[r("span",{class:"font-medium"}," \u6269\u5C55elemenet-plus\u7684\u6811\u5F62\u7EC4\u4EF6\u5305\u62EC\u865A\u62DF\u6811\u7EC4\u4EF6\uFF0C\u652F\u6301\u8FDE\u63A5\u7EBF ")],-1),H=r("div",{class:"card-header"},[r("span",{class:"font-medium"}," \u666E\u901A\u6811\u7ED3\u6784 ")],-1),O={class:"max-h-550px overflow-y-auto"},G={class:"text-sm"},K=r("div",{class:"card-header"},[r("span",{class:"font-medium"}," \u865A\u62DF\u6811\u7ED3\u6784 ")],-1),W={class:"max-h-550px overflow-y-auto"},J={class:"text-sm"},R=D({setup(s){const{t}=V();let a=q(()=>B(I().menusTree)),m=P(a.value),c={value:"uniqueId",children:"children"};return(l,u)=>{const e=f("el-tree"),o=f("el-card"),h=f("el-col"),w=f("el-tree-v2"),L=f("el-row");return T(),j(o,null,{header:n(()=>[z]),default:n(()=>[i(L,{gutter:24},{default:n(()=>[i(h,{xs:24,sm:24,md:12,lg:12,xl:12,class:"mb-20px"},{default:n(()=>[i(o,null,{header:n(()=>[H]),default:n(()=>[r("div",O,[i(e,{data:d(a),props:d(c),"show-checkbox":"","default-expand-all":"","node-key":"uniqueId",indent:30},{default:n(({node:p})=>[i(d(g),{node:p,showLabelLine:!0},{"node-label":n(()=>[r("span",G,b(d(t)(p.data.meta.title)),1)]),_:2},1032,["node"])]),_:1},8,["data","props"])])]),_:1})]),_:1}),i(h,{xs:24,sm:24,md:12,lg:12,xl:12},{default:n(()=>[i(o,null,{header:n(()=>[K]),default:n(()=>[r("div",W,[i(w,{data:d(a),props:d(c),"show-checkbox":"",height:550,"default-expanded-keys":d(m)},{default:n(({node:p})=>[i(d(g),{node:p,treeData:d(a),showLabelLine:!0,indent:30},{"node-label":n(()=>[r("span",J,b(d(t)(p.data.meta.title)),1)]),_:2},1032,["node","treeData"])]),_:1},8,["data","props","default-expanded-keys"])])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{R as default};
