/*! For license information please see user_status-dashboard.js.LICENSE.txt */
(()=>{var s,e={63261:(s,e,n)=>{"use strict";var a=n(20144),r=n(77958),o=n(31352),u=n(79954),j=n(75925),i=n.n(j),l=n(72175),d=n.n(l),c=n(81817),m=n.n(c),p=n(80351),h=n.n(p),f=n(25108);const b={name:"Dashboard",components:{NcAvatar:i(),NcDashboardWidget:d(),NcDashboardWidgetItem:m()},data:()=>({statuses:[],loading:!0}),computed:{items(){return this.statuses.map((s=>{const e=s.icon||"";let n=s.message||"";""===n&&("away"===s.status&&(n=t("user_status","Away")),"dnd"===s.status&&(n=t("user_status","Do not disturb")));const a=""!==s.icon?"".concat(e," ").concat(n):n;let r;return r=null===s.icon&&""===n&&null===s.timestamp?"":null===s.icon&&""===n&&null!==s.timestamp?h()(s.timestamp,"X").fromNow():null!==s.timestamp?this.t("user_status","{status}, {timestamp}",{status:a,timestamp:h()(s.timestamp,"X").fromNow()},null,{escape:!1,sanitize:!1}):a,{mainText:s.displayName,subText:r,avatarUsername:s.userId}}))}},mounted(){try{this.statuses=(0,u.j)("user_status","dashboard_data"),this.loading=!1}catch(s){f.error(s)}}};var v=n(93379),g=n.n(v),y=n(7795),k=n.n(y),A=n(90569),x=n.n(A),z=n(3565),w=n.n(z),C=n(19216),O=n.n(C),_=n(44589),N=n.n(_),D=n(82879),T={};T.styleTagTransform=N(),T.setAttributes=w(),T.insert=x().bind(null,"head"),T.domAPI=k(),T.insertStyleElement=O(),g()(D.Z,T),D.Z&&D.Z.locals&&D.Z.locals;const I=(0,n(51900).Z)(b,(function(){var s=this,t=s._self._c;return t("NcDashboardWidget",{attrs:{id:"user-status_panel",items:s.items,loading:s.loading,"empty-content-message":s.t("user_status","No recent status changes")},scopedSlots:s._u([{key:"default",fn:function(e){let{item:n}=e;return[t("NcDashboardWidgetItem",{attrs:{"main-text":n.mainText,"sub-text":n.subText},scopedSlots:s._u([{key:"avatar",fn:function(){return[t("NcAvatar",{staticClass:"item-avatar",attrs:{size:44,user:n.avatarUsername,"display-name":n.mainText,"show-user-status":!1,"show-user-status-compact":!1}})]},proxy:!0}],null,!0)})]}},{key:"emptyContentIcon",fn:function(){return[t("div",{staticClass:"icon-user-status-dark"})]},proxy:!0}])})}),[],!1,null,null,null).exports;n.nc=btoa((0,r.IH)()),a.default.prototype.t=o.Iu,a.default.prototype.n=o.uN,a.default.prototype.OC=OC,a.default.prototype.OCA=OCA,document.addEventListener("DOMContentLoaded",(function(){OCA.Dashboard.register("user_status",(s=>{new(a.default.extend(I))({propsData:{}}).$mount(s)}))}))},82879:(s,t,e)=>{"use strict";e.d(t,{Z:()=>u});var n=e(87537),a=e.n(n),r=e(23645),o=e.n(r)()(a());o.push([s.id,".icon-user-status-dark{width:64px;height:64px;background-size:64px;filter:var(--background-invert-if-dark)}","",{version:3,sources:["webpack://./apps/user_status/src/views/Dashboard.vue"],names:[],mappings:"AACA,uBACC,UAAA,CACA,WAAA,CACA,oBAAA,CACA,uCAAA",sourcesContent:["\n.icon-user-status-dark {\n\twidth: 64px;\n\theight: 64px;\n\tbackground-size: 64px;\n\tfilter: var(--background-invert-if-dark);\n}\n"],sourceRoot:""}]);const u=o},46700:(s,t,e)=>{var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function a(s){var t=r(s);return e(t)}function r(s){if(!e.o(n,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return n[s]}a.keys=function(){return Object.keys(n)},a.resolve=r,s.exports=a,a.id=46700}},n={};function a(s){var t=n[s];if(void 0!==t)return t.exports;var r=n[s]={id:s,loaded:!1,exports:{}};return e[s].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,s=[],a.O=(t,e,n,r)=>{if(!e){var o=1/0;for(l=0;l<s.length;l++){e=s[l][0],n=s[l][1],r=s[l][2];for(var u=!0,j=0;j<e.length;j++)(!1&r||o>=r)&&Object.keys(a.O).every((s=>a.O[s](e[j])))?e.splice(j--,1):(u=!1,r<o&&(o=r));if(u){s.splice(l--,1);var i=n();void 0!==i&&(t=i)}}return t}r=r||0;for(var l=s.length;l>0&&s[l-1][2]>r;l--)s[l]=s[l-1];s[l]=[e,n,r]},a.n=s=>{var t=s&&s.__esModule?()=>s.default:()=>s;return a.d(t,{a:t}),t},a.d=(s,t)=>{for(var e in t)a.o(t,e)&&!a.o(s,e)&&Object.defineProperty(s,e,{enumerable:!0,get:t[e]})},a.e=()=>Promise.resolve(),a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"==typeof window)return window}}(),a.o=(s,t)=>Object.prototype.hasOwnProperty.call(s,t),a.r=s=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.nmd=s=>(s.paths=[],s.children||(s.children=[]),s),a.j=7063,(()=>{a.b=document.baseURI||self.location.href;var s={7063:0};a.O.j=t=>0===s[t];var t=(t,e)=>{var n,r,o=e[0],u=e[1],j=e[2],i=0;if(o.some((t=>0!==s[t]))){for(n in u)a.o(u,n)&&(a.m[n]=u[n]);if(j)var l=j(a)}for(t&&t(e);i<o.length;i++)r=o[i],a.o(s,r)&&s[r]&&s[r][0](),s[r]=0;return a.O(l)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))})(),a.nc=void 0;var r=a.O(void 0,[7874],(()=>a(63261)));r=a.O(r)})();
//# sourceMappingURL=user_status-dashboard.js.map?v=c9fdfcb3fd4099460462