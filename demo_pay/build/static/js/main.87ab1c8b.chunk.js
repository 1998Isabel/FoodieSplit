(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(85),a(86),a(16)),i=a(7),s=a(13),m=a(24),u=a(67),p=a(68),d=a(19),E=a(9),f={users:[{id:"u01",name:"Isabel",person_price:135,profile:"png-avatar/005-woman.png"},{id:"u02",name:"Rose",person_price:70,profile:"png-avatar/039-boy.png"},{id:"u03",name:"Irene",person_price:25,profile:"png-avatar/024-woman.png"}],menu:{categories:[{id:"c01",name:"\u98ef\u98df"},{id:"c02",name:"\u9eb5\u98df"},{id:"c03",name:"\u9ede\u5fc3\u70b8\u7269"},{id:"c04",name:"\u98f2\u6599"}],products:[{id:"p01",name:"\u9999\u5674\u5674\u96de\u8089\u98ef",category:"c01",price:50,image:"png-food2/026-friedrice.png"},{id:"p02",name:"\u6cf0\u5f0f\u6912\u9ebb\u96de\u98ef",category:"c01",price:90,image:"png-food2/048-bulgogi.png"},{id:"p03",name:"\u6253\u62cb\u8c6c\u98ef",category:"c01",price:80,image:"png-food2/019-curry.png"},{id:"p04",name:"\u6d77\u9bae\u4ec0\u9326\u7092\u9eb5",category:"c02",price:100,image:"png-food2/017-tomyumgoong.png"},{id:"p05",name:"\u65e5\u5f0f\u7092\u70cf\u9f8d\u9eb5",category:"c02",price:90,image:"png-food2/002-ramen.png"},{id:"p06",name:"\u5496\u54e9\u6e6f\u70cf\u9f8d\u9eb5",category:"c02",price:100,image:"png-food2/031-oyakodon.png"},{id:"p07",name:"\u70b8\u7269\u62fc\u76e4",category:"c03",price:160,image:"png-food2/038-satay.png"},{id:"p08",name:"\u6dbc\u62cc\u9752\u6728\u74dc\u7d72",category:"c03",price:120,image:"png-food2/045-narutomaki.png"},{id:"p09",name:"\u6b63\u5b97\u6cf0\u5f0f\u5976\u8336",category:"c04",price:40,image:"png-food2/050-thaitea.png"},{id:"p10",name:"\u6930\u6c41\u897f\u7c73\u9732",category:"c04",price:50,image:"png-food2/008-greentea.png"}]},orders:[{productid:"p01",product_price:50,amount:2,users:[["u03","u02"],["u01"]]},{productid:"p02",product_price:50,amount:1,users:[["u02","u01"]]},{productid:"p09",product_price:50,amount:1,users:[["u01"]]}]},h=Object(E.a)(Object(E.a)({},f),{},{loginuser:f.users.find((function(e){return"u01"===e.id})),payment:{method:"myself",paylist:["u01"],paidlist:["u01","u02"],notpaidlist:["u03"]}}),g=Object(m.combineReducers)({shop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":console.log("SET USER",t.payload);var a=t.payload,n=e.db.users.find((function(e){return e.id===a}));return Object(E.a)(Object(E.a)({},e),{},{loginuser:n});case"ADD_TO_ORDER":var r=t.payload,c=r.product,l=r.user,o=r.idx,i=Object(d.a)(e.orders),s=i.findIndex((function(e){return e.productid==c}));if(-1===o&&-1===s)i.push({productid:c,product_price:e.menu.products.find((function(e){return e.id===c})).price,amount:1,users:[[l]]});else if(-1===o){var m=Object(E.a)({},i[s]);m.users.push([l]),i[s]=m}else{var u=Object(E.a)({},i[s]);u.users[o].push(l),i[s]=u}return Object(E.a)(Object(E.a)({},e),{},{orders:i});case"REMOVE_FROM_ORDER":var p=t.payload,f=p.product,g=p.user,y=p.idx,v=Object(d.a)(e.orders),b=v.findIndex((function(e){return e.productid==f})),O=Object(E.a)({},v[b]);return O.users[y]=O.users[y].filter((function(e){return e!==g})),O.users=O.users.filter((function(e){return 0!==e.length})),v[b]=O,Object(E.a)(Object(E.a)({},e),{},{orders:v});case"SET_PERSONAL_PRICE":var j=t.payload,x=j.user,N=j.price,k=e.users.findIndex((function(e){return e.id===x}));console.log("reducer",k,x,e.users,N);var _=Object(E.a)({},e.loginuser);_.person_price=N;var w=Object(d.a)(e.users);return w[k]=_,Object(E.a)(Object(E.a)({},e),{},{loginuser:_,users:w});case"SET_PAY_LIST":var P=t.payload,S=P.method,R=P.paylist;return Object(E.a)(Object(E.a)({},e),{},{payment:Object(E.a)(Object(E.a)({},e.payment),{},{method:S,paylist:R})});default:return e}}}),y=[p.a],v=Object(m.createStore)(g,{},Object(u.composeWithDevTools)(m.applyMiddleware.apply(void 0,y))),b=(a(91),a(113)),O=a(107),j=a(111),x=a(112),N=a(75),k=a(74);var _=function(){return r.a.createElement(b.a,{bg:"dark",expand:"lg"},r.a.createElement(b.a.Brand,{href:"/#"},"\u6cf0\u5abd\u5abd\u9910\u5ef3 ",r.a.createElement("small",null,"by FoodieSplit")),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(O.a,{className:"mr-auto"},r.a.createElement(O.a.Link,{href:"/#menu"},"\u83dc\u55ae"),r.a.createElement(O.a.Link,{href:"link"},"Link"),r.a.createElement(j.a,{title:"Dropdown",id:"basic-nav-dropdown"},r.a.createElement(j.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(j.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(j.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(j.a.Divider,null),r.a.createElement(j.a.Item,{href:"#action/3.4"},"Separated link"))),r.a.createElement(x.a,{inline:!0},r.a.createElement(N.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(k.a,{variant:"outline-success"},"Search"))))},w=a(109),P=a(110),S=a(108);var R=function(e){return r.a.createElement(S.a,Object.assign({roundedCircle:!0},e))};var I=Object(s.b)((function(e){return{user:e.shop.loginuser}}),{setLoginUser:function(e){return function(t){t({type:"SET_USER",payload:e})}}})((function(e){var t=e.user;return r.a.createElement(w.a,{className:"container-home"},r.a.createElement(P.a,null,r.a.createElement(R,{src:t.profile,width:130,height:130})),r.a.createElement(P.a,{className:"mt-2"},r.a.createElement("h4",null,t.name)),r.a.createElement(P.a,null,r.a.createElement(o.b,{to:"/menu",className:"text-white"},r.a.createElement(k.a,null,"\u958b\u59cb\u9ede\u9910"))))})),C=a(61),T=a(116),L=a(76),A=a(114),D=a(115);var $=function(e){var t=e.pid,a=e.name,n=e.price,c=e.order,l=e.users,o=e.loginuser,i=e.image,s=e.addfunc,m=e.removefunc,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;console.log("Add!",t,o,e),s(t,o,e)},p=c.map((function(e,a){return r.a.createElement(T.a.Item,null,r.a.createElement(P.a,{className:"ml-3"},r.a.createElement(L.a,{xs:1,style:{padding:"unset"}},r.a.createElement("span",null,a+1,".")),r.a.createElement(L.a,{style:{padding:"unset"}},r.a.createElement("span",{className:"mr-1"},1===e.length?"\u7368\u4eab":"\u5206\u98df","\uff1a"),e.map((function(e){return r.a.createElement(R,{src:l.find((function(t){return t.id===e})).profile,width:30,className:"ml-1"})}))),r.a.createElement(L.a,{xs:2,style:{padding:"unset"}},e.includes(o)?r.a.createElement(k.a,{variant:"secondary",size:"sm",onClick:function(){return function(e){console.log("Remove!",t,o,e),m(t,o,e)}(a)}},"\u79fb\u9664"):r.a.createElement(k.a,{size:"sm",onClick:function(){return u(a)}},"\u52a0\u5165"))))}));return r.a.createElement(A.a,null,r.a.createElement(D.a,{style:{borderRadius:"unset"}},r.a.createElement(A.a.Toggle,{as:D.a.Header,eventKey:"0"},r.a.createElement(P.a,null,r.a.createElement(L.a,{xs:2},r.a.createElement(S.a,{src:i,width:50})),r.a.createElement(L.a,null,r.a.createElement("h5",{style:{margin:"unset"}},a),r.a.createElement("div",{className:"pt-1"},"$ ",n)),r.a.createElement(L.a,{xs:3,className:"d-flex align-items-center"},r.a.createElement("h5",null,c.length,"\u4efd",r.a.createElement(k.a,{size:"sm",variant:"outline-primary",className:"ml-1",onClick:function(){return u()}},"\uff0b"))))),r.a.createElement(A.a.Collapse,{eventKey:"0"},r.a.createElement(T.a,{variant:"flush"},p))))};var M=Object(s.b)((function(e){return{shop:e.shop}}),{addProductToOrder:function(e,t,a){return function(n){n({type:"ADD_TO_ORDER",payload:{product:e,user:t,idx:a}})}},removeProductfromOrder:function(e,t,a){return function(n){n({type:"REMOVE_FROM_ORDER",payload:{product:e,user:t,idx:a}})}}})((function(e){var t=e.addProductToOrder,a=e.removeProductfromOrder,n=e.shop,c=n.menu,l=n.users,o=n.orders,i=n.loginuser,s=c.categories.map((function(e){return r.a.createElement(O.a.Link,{active:!0},r.a.createElement(C.Link,{to:e.id,smooth:!0,duration:400,offset:-60},e.name))})),m=c.categories.map((function(e){var n=c.products.filter((function(t){return t.category===e.id}));return r.a.createElement(C.Element,{name:e.id},r.a.createElement("h5",{className:"m-2 pl-2"},e.name),n.map((function(e){var n=o.find((function(t){return t.productid===e.id}));return r.a.createElement($,{pid:e.id,name:e.name,price:e.price,users:l,loginuser:i.id,order:n?n.users:[],image:e.image,addfunc:t,removefunc:a})})))}));return r.a.createElement("div",{style:{marginBottom:"50px"}},r.a.createElement(b.a,{variant:"dark",bg:"primary",sticky:"top"},r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(O.a,{className:"mr-auto"},s))),m,r.a.createElement(b.a,{variant:"dark",bg:"secondary",fixed:"bottom",style:{display:"flex",justifyContent:"center"}},r.a.createElement(O.a,null,r.a.createElement(O.a.Link,{style:{width:"100%"},href:"#checkout"},r.a.createElement("span",{className:"text-white",style:{margin:"unset"}},"\u9ede\u597d\u9910\u56c9\uff01")))))})),U=a(22);var B=Object(s.b)((function(e){return{orders:e.shop.orders,products:e.shop.menu.products,loginuser:e.shop.loginuser}}),{setPersonPrice:function(e,t){return function(a){console.log("setPersonPrice",e,t),a({type:"SET_PERSONAL_PRICE",payload:{user:e,price:t}})}}})((function(e){var t=e.orders,a=e.products,c=e.loginuser,l=e.setPersonPrice,i=Object(n.useState)([]),s=Object(U.a)(i,2),m=s[0],u=s[1],p=Object(n.useState)(0),E=Object(U.a)(p,2),f=E[0],h=E[1];Object(n.useEffect)((function(){console.log("Effect",m,f),g()}),[t]);var g=function(){var e=[],n=0;t.forEach((function(t){var r;(r=e).push.apply(r,Object(d.a)(Array.from(t.users,(function(e){if(e.includes("u01")){var r=a.find((function(e){return e.id===t.productid})),c=Math.ceil(r.price/e.length);return n+=c,{product_price:r.price,product_name:r.name,product_eachPrice:c,shareUsers:e.length,product_image:r.image}}}))))})),e=e.filter((function(e){return void 0!==e})),u(e),h(n)};return r.a.createElement(w.a,{style:{margin:"0 0 80px 0",padding:"initial"}},r.a.createElement("div",null,r.a.createElement(b.a,{bg:"primary",sticky:"top"},r.a.createElement(D.a.Title,{className:"navbar-checkout-personal"},"\u500b\u4eba\u9ede\u9910\u78ba\u8a8d")),r.a.createElement(T.a,{style:{borderRadius:"unset"}},(m||[]).map((function(e,t){return r.a.createElement(T.a.Item,{style:{backgroundColor:"rgba(0,0,0,0.05)"}},r.a.createElement(P.a,null,r.a.createElement(L.a,{xs:2},r.a.createElement(S.a,{src:e.product_image,width:50})),r.a.createElement(L.a,null,r.a.createElement("h5",{style:{margin:"unset"}},e.product_name),r.a.createElement("div",{className:"pt-1"},"$ ",e.product_price," / ",e.shareUsers," = $",e.product_eachPrice)),r.a.createElement(L.a,{xs:3,className:"d-flex align-items-center"},r.a.createElement("h5",null,"1 \u4efd"))))})),r.a.createElement(T.a.Item,null,r.a.createElement(L.a,{style:{width:"fit-content",float:"right"},className:"d-flex align-items-center"},r.a.createElement("h5",null,"\u7e3d\u5171: $",f))))),r.a.createElement(P.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(L.a,{xs:2},r.a.createElement(o.b,{to:"/menu",className:"text-white"},r.a.createElement(k.a,{style:{position:"fixed",bottom:"30px"},variant:"primary"},"\u8fd4\u56de"))),r.a.createElement(L.a,{xs:2},r.a.createElement(o.b,{to:"/pause",className:"text-white"},r.a.createElement(k.a,{style:{position:"fixed",bottom:"30px"},variant:"secondary",onClick:function(){console.log("Comfirm"),l(c.id,f)}},"\u78ba\u8a8d")))))})),F=a(34);var K=Object(s.b)((function(e){return{loginuser:e.shop.loginuser,users:e.shop.users}}),{setPaymentList:function(e,t){return function(a){a({type:"SET_PAY_LIST",payload:{method:e,paylist:t}})}}})((function(e){var t,a=e.loginuser,c=e.users,l=e.setPaymentList,o=Object(n.useState)("none"),i=Object(U.a)(o,2),s=i[0],m=i[1],u=Object(n.useState)([]),p=Object(U.a)(u,2),E=p[0],f=p[1];Object(n.useEffect)((function(){for(var e=Object(d.a)(E),t=0;t<c.length;t++)e.push(!1);f(e)}),[c]);var h=c.map((function(e,t){return r.a.createElement(T.a.Item,null,r.a.createElement(P.a,null,r.a.createElement(L.a,{xs:3},r.a.createElement(R,{width:25,height:25,src:e.profile})),r.a.createElement(L.a,null,e.name," $",e.person_price),r.a.createElement(L.a,{xs:2},r.a.createElement(x.a.Check,{checked:E[t],onChange:function(e){return function(e,t){var a=Object(d.a)(E);a[t]=e,f(a)}(e.target.checked,t)}}))))}));return r.a.createElement("div",{style:{marginBottom:"50px"}},r.a.createElement(w.a,{style:{marginBottom:"80px"},className:"container-home"},r.a.createElement(P.a,{className:"mb-3"},r.a.createElement(R,{src:a.profile,width:130,height:130})),r.a.createElement("h5",null,"\u9078\u64c7\u8981\u7d50\u5e33\u7684\u5c0d\u8c61"),r.a.createElement(A.a,null,r.a.createElement(P.a,null,r.a.createElement(L.a,{xs:6},r.a.createElement(k.a,{variant:"myself"==s?"secondary":"outline-secondary",onClick:function(){return m("myself")}},"\u81ea\u5df1\u7d50\u5e33")),r.a.createElement(L.a,{xs:6},r.a.createElement(A.a.Toggle,(t={as:k.a,variant:"link",eventKey:"0"},Object(F.a)(t,"variant","other"==s?"primary":"outline-primary"),Object(F.a)(t,"onClick",(function(){return m("other")})),t),"\u5e6b\u5176\u4ed6\u4eba"))),r.a.createElement(A.a.Collapse,{eventKey:"0"},"other"===s?r.a.createElement(T.a,{className:"mt-3"},h):r.a.createElement(r.a.Fragment,null))),r.a.createElement(b.a,{variant:"dark",bg:"secondary",fixed:"bottom",style:{width:"100%"}},r.a.createElement(O.a,{className:"justify-content-center text-center",style:{width:"100%"}},r.a.createElement(O.a.Link,{style:{width:"100%"},href:"#payment/final",onClick:function(){var e=[];"other"===s?E.forEach((function(t,a){t&&e.push(c[a].id)})):e.push(a.id),l(s,e)},disabled:"none"===s},r.a.createElement("h5",{className:"text-white",style:{margin:"unset"}},"\u9032\u5165\u7d50\u5e33"))))))}));var Y=function(){return r.a.createElement(w.a,{className:"container-home"},r.a.createElement("h4",null,"\u7a0d\u7b49\u4e00\u4e0b\uff5e"),r.a.createElement("h4",null,"\u7b49\u5927\u5bb6\u5b8c\u6210\u9ede\u9910\uff01"),r.a.createElement("p",null,"\u53ef\u4ee5\u5148\u95dc\u9589\u5206\u9801\uff0c\u56de\u5230\u804a\u5929\u9801\u9762"),r.a.createElement(o.b,{to:"/checkout",className:"text-white"},r.a.createElement(k.a,{variant:"primary"},"\u8fd4\u56de")))};var z=Object(s.b)((function(e){return{users:e.shop.users,orders:e.shop.orders,products:e.shop.menu.products,payment:e.shop.payment}}),null)((function(e){var t=e.orders,a=e.products,c=e.users,l=e.payment,o=Object(n.useState)([]),i=Object(U.a)(o,2),s=i[0],m=i[1];Object(n.useEffect)((function(){u()}),[l]);var u=function(){var e=l.paylist.map((function(e,n){var r=[],c=0;return t.forEach((function(t){var n;(n=r).push.apply(n,Object(d.a)(Array.from(t.users,(function(n){if(n.includes(e)){var r=a.find((function(e){return e.id===t.productid})),l=Math.ceil(r.price/n.length);return c+=l,{product_price:r.price,product_name:r.name,product_eachPrice:l,shareUsers:n.length,product_image:r.image}}}))))})),{order:r=r.filter((function(e){return void 0!==e})),totalPrice:c}}));m(e)},p=s.map((function(e,t){var a=c.find((function(e){return e.id===l.paylist[t]}));return r.a.createElement("div",{key:t},r.a.createElement(b.a,{variant:"light",bg:"light",sticky:"top"},r.a.createElement(D.a.Title,{className:"navbar-checkout-all"},r.a.createElement(R,{width:30,src:a.profile}),r.a.createElement("span",{className:"ml-2"},a.name),r.a.createElement("div",{style:{position:"absolute",right:"8%"}},"\u500b\u4eba\u91d1\u984d\uff1a$",e.totalPrice))),r.a.createElement(T.a,{style:{borderRadius:"unset"}},(e.order||[]).map((function(e,t){return r.a.createElement(T.a.Item,{key:"order".concat(t)},r.a.createElement(P.a,null,r.a.createElement(L.a,{xs:2},r.a.createElement(S.a,{src:e.product_image,width:50})),r.a.createElement(L.a,null,r.a.createElement("h5",{style:{margin:"unset"}},e.product_name),r.a.createElement("div",{className:"pt-1"},"$ ",e.product_price," / ",e.shareUsers," = $",e.product_eachPrice)),r.a.createElement(L.a,{xs:3,className:"d-flex align-items-center"},r.a.createElement("h5",null,"1 \u4efd"))))}))))}));return r.a.createElement("div",null,r.a.createElement("div",{style:{marginBottom:"120px"}},p,r.a.createElement("div",{style:{width:"fit-content",float:"right"},className:"d-flex align-items-center m-3"},r.a.createElement("h5",null,"\u7e3d\u5171\u7d50\u5e33\u91d1\u984d: $",s.map((function(e){return e.totalPrice})).reduce((function(e,t){return e+t}),0)))),r.a.createElement(b.a,{variant:"dark",bg:"primary",fixed:"bottom",style:{width:"100%"}},r.a.createElement(O.a,{className:"justify-content-center text-center",style:{width:"100%"}},r.a.createElement(O.a.Link,{style:{width:"100%"},href:"#payment/success",onClick:function(){console.log("\u7d50\u5e33")}},r.a.createElement("h5",{className:"text-white",style:{margin:"unset"}},"LINE PAY \u8f49\u5e33\u7d66\u5e97\u5bb6")))))}));var W=function(e){var t=Object(n.useState)(3),a=Object(U.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){setInterval((function(){l(c-1)}),1e3),setTimeout((function(){e.history.push("/payment/detail")}),3e3)})),r.a.createElement(w.a,{className:"container-home"},r.a.createElement("h4",null,"LINE PAY \u8f49\u5e33\u4e2d\uff5e"),r.a.createElement("h6",null,c," \u79d2..."))};var J=Object(s.b)((function(e){return{payment:e.shop.payment,users:e.shop.users}}),null)((function(e){var t=e.users,a=e.payment,n=a.paidlist,c=a.notpaidlist;console.log(e);var l=(n||[]).map((function(e,a){var n=t.find((function(t){return t.id===e}));return r.a.createElement(R,{src:n.profile,width:40,className:"mx-1"})})),o=(c||[]).map((function(e,a){var n=t.find((function(t){return t.id===e}));return r.a.createElement(R,{src:n.profile,width:40,className:"mx-1"})}));return r.a.createElement(w.a,{className:"container-home"},r.a.createElement("h4",null,"\u5df2\u4ed8\u6b3e"),r.a.createElement("div",{className:"my-3"},l),r.a.createElement("h4",null,"\u672a\u4ed8\u6b3e"),r.a.createElement("div",{className:"my-3"},o),r.a.createElement("h6",{className:"mt-3"},"\u8d95\u5feb\u50ac\u4ed6\u5011\u53bb\u4ed8\u6b3e\u5427\uff01"),r.a.createElement("h6",null,"\u8a02\u55ae\u624d\u80fd\u6210\u529f\u9001\u51fa\u5594\uff5e"),r.a.createElement("p",null,"\uff08\u53ef\u4ee5\u95dc\u9589\u5206\u9801\uff0c\u56de\u5230\u804a\u5929\u9801\u9762\uff09"))}));var V=function(){return r.a.createElement(s.a,{store:v},r.a.createElement(o.a,null,r.a.createElement(_,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:I}),r.a.createElement(i.a,{path:"/menu",component:M}),r.a.createElement(i.a,{path:"/checkout",component:B}),r.a.createElement(i.a,{path:"/pause",component:Y}),r.a.createElement(i.a,{exact:!0,path:"/payment",component:K}),r.a.createElement(i.a,{path:"/payment/final",component:z}),r.a.createElement(i.a,{path:"/payment/success",component:W}),r.a.createElement(i.a,{path:"/payment/detail",component:J}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(102)},85:function(e,t,a){},91:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.87ab1c8b.chunk.js.map