(this["webpackJsonpsheara-deal-dash"]=this["webpackJsonpsheara-deal-dash"]||[]).push([[0],{303:function(e,t,n){"use strict";n.r(t);n(157);var r=n(0),a=n.n(r),c=n(25),s=n.n(c),i=n(64),o=n(8),l=(n(162),n(310)),d=n(143),j=n(49),u=n(2);var b=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(j.c,{style:{height:"100vh",minHeight:"100vh",position:"fixed"},children:[Object(u.jsx)(j.a,{children:Object(u.jsx)("h5",{style:{textAlign:"center"},children:"HK Dashboard"})}),Object(u.jsx)(j.a,{iconShape:"square",style:{justifyContent:"space-around",display:"flex"},children:Object(u.jsx)("button",{className:"btn btn-info m-1",children:"Welcome Back"})}),Object(u.jsxs)(j.a,{iconShape:"square",children:[Object(u.jsx)(j.b,{children:Object(u.jsx)(i.b,{to:"/admin/addUser",children:"Add User"})}),Object(u.jsx)(j.b,{children:Object(u.jsx)(i.b,{to:"/admin/allUsers",children:"All Users"})})]})]})})},h=n(313),m=n(309),x=n(154),O=n(311);var f=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(h.a,{bg:"light",expand:!1,children:Object(u.jsxs)(m.a,{fluid:!0,children:[Object(u.jsx)(h.a.Brand,{href:"#",children:"HK Dashboard"}),Object(u.jsx)(h.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(u.jsxs)(h.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(u.jsx)(x.a.Header,{closeButton:!0,children:Object(u.jsx)("button",{className:"btn btn-info m-1",children:"Welcome Back"})}),Object(u.jsxs)(x.a.Body,{children:[Object(u.jsx)(O.a.Item,{className:"p-2 bg-info rounded m-2",href:"/admin/addUser",children:"Add User"}),Object(u.jsx)(O.a.Item,{className:"p-2 bg-info rounded m-2",href:"/admin/allUsers",children:"All Users"})]})]})]})})})},p=n(11),g=n(17),v=n(5),w=n(59),y=n.n(w),k=n(31),C=n(3),N=n(312),S=n(142),A=["Manufacturing","Construction materials","Electronics and Optics","Food and Beverage","Bakery","confectionery products","Beverages","Bathroom/sauna","Bedroom","Repair and maintenance service","Metalworking","Construction of metal structures","Houses and buildings","Metal products","Metal works","CNC-machining","Forgings, Fasteners ","Gas, Plasma, Laser cutting","MIG, TIG, Aluminum welding","Plastic and Rubber","Packaging","Plastic goods","Plastic processing technology","Blowing","Moulding","Plastics welding and processing","Plastic profiles","Printing","Advertising","Book/Periodicals printing","Textile","Wooden building materials","Wooden houses","Creative industries","Energy technology","Environment","Service","Business services","Engineering","Information Technology and Telecommunications","Data processing, Web portals, E-marketing","Programming, Consultancy","Software, Hardware","Tourism","Translation services","Transport and Logistics","Air","Rail","Road","Water"];var B=function(e){var t=e.setInfo,n=e.formAction,r=(e.type,e.info);return Object(u.jsxs)(N.a,{onSubmit:n,children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("h1",{children:"Add New"}),Object(u.jsx)("div",{className:"col-md-12",children:Object(u.jsxs)(N.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsxs)(N.a.Label,{children:["Name ",Object(u.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(u.jsx)(N.a.Control,{value:r.name||"",required:!0,type:"text",placeholder:"Name",onChange:function(e){return t((function(t){return Object(C.a)(Object(C.a)({},t),{},{name:e.target.value})}))}})]})}),Object(u.jsxs)("div",{className:"col-md-12",children:[Object(u.jsxs)(N.a.Label,{children:["Select Sectors ",Object(u.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(u.jsx)(N.a.Group,{className:"mb-3",children:Object(u.jsxs)(N.a.Select,{value:r.sector||"",required:!0,"aria-label":"Default select example",onChange:function(e){return t((function(t){return Object(C.a)(Object(C.a)({},t),{},{sector:e.target.value})}))},children:[Object(u.jsx)("option",{children:"Select Sector"}),A&&A.map((function(e,t){return Object(u.jsx)("option",{value:e,children:e},"c-".concat(t))}))]})})]}),Object(u.jsx)("div",{className:"col-md-12",children:Object(u.jsx)(N.a.Check,{inline:!0,label:"Agree to terms",name:"terms",type:"checkbox",checked:(null===r||void 0===r?void 0:r.terms)||!1,onChange:function(e){return t((function(t){return Object(C.a)(Object(C.a)({},t),{},{terms:e.target.checked})}))}})})]}),Object(u.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-end",children:Object(u.jsx)(S.a,{variant:"primary",type:"submit",className:"h-50",children:"Submit"})})]})},L=n(67),T=L.b().shape({name:L.c().required(),sector:L.c().required(),terms:L.a().required()});var E,H,I=function(){var e=Object(r.useState)({}),t=Object(v.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(g.a)(Object(p.a)().mark((function e(t){var r;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,T.isValid(n);case 4:if(!e.sent){e.next=12;break}return e.next=8,y.a.post("".concat("https://hk-admin.onrender.com","/api/user/add"),n);case 8:200===(r=e.sent).data.code?(k.b.success("Saved successfully"),a({})):k.b.success(r.data.message),e.next=13;break;case 12:k.b.error("All felid are required");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"row mt-5",children:Object(u.jsx)("div",{className:"col-md-10",children:Object(u.jsx)(B,{formAction:c,setInfo:a,info:n})})})},U=n(147),F=n.n(U),M=n(54),P=n.n(M),q=n(153),D=n(152),R=n(103),W=n(86),G=W.default.input.attrs((function(e){return{type:"text",size:e.small?5:void 0}}))(E||(E=Object(R.a)(["\n  height: 32px;\n  width: 200px;\n  border-radius: 3px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border: 1px solid #e5e5e5;\n  padding: 0 32px 0 16px;\n"]))),_=W.default.button(H||(H=Object(R.a)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 34px;\n  width: 32px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),K=function(e){var t=e.filterText,n=e.onFilter,r=e.onClear;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(G,{id:"search",type:"text",placeholder:"Filter table data...",value:t,onChange:n}),Object(u.jsx)(_,{onClick:r,children:"X"})]})},J=n(314);var z=function(e){var t=e.title,n=void 0===t?"HK Dashboard":t,r=e.children;return Object(u.jsxs)(J.a,{children:[Object(u.jsx)(J.a.Header,{children:Object(u.jsx)(J.a.Title,{children:n})}),Object(u.jsx)(J.a.Body,{children:r})]})},V={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"300px",height:"155px",padding:"0px"}};function X(e,t){var n=e.action,a=Object(r.useState)(!1),c=Object(v.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(v.a)(o,2),d=l[0],j=l[1];Object(r.useImperativeHandle)(t,(function(){return{makeAlert:function(e){j(e),i(!0)}}}));return Object(u.jsx)("div",{children:Object(u.jsx)(P.a,{isOpen:s,style:V,contentLabel:"Example Modal",children:Object(u.jsxs)(z,{title:"are you sure, want to delete this item?",children:[Object(u.jsx)("button",{onClick:function(){j(""),i(!1)},className:"btn btn-info m-3",children:"cancel"}),Object(u.jsx)("button",{className:"btn btn-danger m-3",onClick:function(){n(d),setTimeout((function(){i(!1)}),1e3)},children:"delete"})]})})})}var Q=a.a.forwardRef(X),Y=n(151),Z=n.n(Y),$={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"50%",height:"100%"}};var ee=function(){var e=Object(r.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(v.a)(c,2),i=s[0],o=s[1],l=Object(r.useState)({}),d=Object(v.a)(l,2),j=d[0],b=d[1],h=Object(r.useRef)(),m=function(){y.a.get("".concat("https://hk-admin.onrender.com","/api/user")).then((function(e){return a(e.data.response)})).catch((function(e){return console.log(e)}))};Object(r.useEffect)((function(){m()}),[]);var x=Object(r.useState)(""),O=Object(v.a)(x,2),f=O[0],w=O[1],C=Object(r.useState)(!1),N=Object(v.a)(C,2),A=N[0],L=N[1],T=n.filter((function(e){return e.name&&e.name.toLowerCase().includes(f.toLowerCase())||e.terms&&e.terms.toLowerCase().includes(f.toLowerCase())||e.sector&&e.sector.toLowerCase().includes(f.toLowerCase())})),E=Object(r.useMemo)((function(){return Object(u.jsx)(K,{onFilter:function(e){return w(e.target.value)},onClear:function(){f&&(L(!A),w(""))},filterText:f})}),[f,A]),H=function(){var e=Object(g.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,y.a.put("".concat("https://hk-admin.onrender.com","/api/user/").concat(j._id),j);case 4:200===e.sent.data.code?(k.b.success("update successfully"),b({}),o(!1),m()):k.b.error("Something want contact with shanto"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(g.a)(Object(p.a)().mark((function e(t){var r;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.delete("".concat("https://hk-admin.onrender.com","/api/user/").concat(t));case 2:200===(r=e.sent).data.code?(a(n.filter((function(e){return e._id!==r.data.response._id}))),k.b.success("delete successfully")):k.b.success(r.data.message);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=[{name:"Name",selector:function(e){return e.name},width:"200px"},{name:"Sector",selector:function(e){return e.sector},width:"200px"},{name:"Terms",selector:function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(Z.a,{disabled:!0,checked:e.terms})})},width:"120px",center:!0},{name:"Action",width:"150px",center:!0,selector:function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:function(){return b(e),void o(!0)},className:"btn m-2 border",children:Object(u.jsx)(D.a,{})}),Object(u.jsx)("button",{onClick:function(){return h.current.makeAlert(e._id)},className:"btn m-2 border",children:Object(u.jsx)(q.a,{})})]})}}];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"mt-5",children:"All Data"}),Object(u.jsx)(F.a,{columns:U,data:T,pagination:!0,subHeader:!0,subHeaderComponent:E,dense:!0}),Object(u.jsx)(Q,{action:I,ref:h}),Object(u.jsxs)(P.a,{isOpen:i,style:$,contentLabel:"Example Modal",children:[Object(u.jsx)(B,{formAction:H,setInfo:b,info:j,type:"edit"}),Object(u.jsx)(S.a,{className:"bg-danger",style:{margin:"10px  0"},onClick:function(){return o(!1)},children:"Close"})]})]})};var te=function(){return Object(u.jsxs)(l.a,{children:[Object(u.jsx)(d.a,{lg:"3",children:window.innerWidth<800?Object(u.jsx)(f,{}):Object(u.jsx)(b,{})}),Object(u.jsx)(d.a,{lg:"9",children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"addUser",element:Object(u.jsx)(I,{})}),Object(u.jsx)(o.b,{path:"allUsers",element:Object(u.jsx)(ee,{})})]})})]})};var ne=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/",element:Object(u.jsx)(o.a,{to:"/admin/addUser"})}),Object(u.jsx)(o.b,{path:"/admin/*",element:Object(u.jsx)(te,{})})]})})};n(302);var re=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(ne,{}),Object(u.jsx)(k.a,{})]})};P.a.setAppElement("#root"),s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(re,{})}),document.getElementById("root"))}},[[303,1,2]]]);
//# sourceMappingURL=main.148faf5c.chunk.js.map