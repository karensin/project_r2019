(this.webpackJsonpproject_r2019=this.webpackJsonpproject_r2019||[]).push([[0],{240:function(e,t,a){e.exports=a(404)},245:function(e,t,a){},246:function(e,t,a){},404:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(33),i=a.n(s),o=(a(245),a(25)),c=a(26),l=a(27),u=a(28),h=a(29),d=(a(246),a(75),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"})}}]),t}(n.Component)),g=a(17),m=a.n(g),p=a(415),v=a(426),f=a(202),_=a(416),E=a(113);a(200),a(226);var y=a(228),w=a(423),b=a(86),k=a(55),C=a(405);var x=function(e){var t=e.items,a=Object(n.useState)([]),s=Object(E.a)(a,2);function i(e){return e.photos[0]?null!==e.photos[0].full?e.photos[0].full:void 0:"Cat"===e.species?"/project_r2019/imgs/cat2.jpeg":"Dog"===e.species?"/project_r2019/imgs/goofyDog.jpeg":"/project_r2019/imgs/smilingDog.jpeg"}function o(e){return e?e.includes("*")?Object(y.a)(e).filter((function(e){return"*"!==e})).join(""):e:"This fur baby does not have a name yet"}return s[0],s[1],Object(n.useEffect)((function(){!function(){for(var e=0;e<t.length;e++){var a=t[e];console.log(a,"_______",a.photos,a.photos[0],"lookie")}}()}),[t]),r.a.createElement(p.a,null,r.a.createElement(w.a.Group,null,t.map((function(e){return r.a.createElement(w.a,{className:"columnBox"},r.a.createElement(w.a.Image,{className:"crop",size:"medium",src:i(e),wrapped:!0,ui:!1}),r.a.createElement(w.a.Content,null,r.a.createElement(w.a.Header,null,o(e.name)," "),r.a.createElement(w.a.Meta,null,r.a.createElement(k.a,{name:"mail"}),"  ",e.contact.email,r.a.createElement(k.a,{name:"phone"})," ",e.contact.phone," "),r.a.createElement(w.a.Description,null,r.a.createElement(b.a,null,"  ",r.a.createElement("strong",null," Age:")," ",e.age," "),r.a.createElement(b.a,null,r.a.createElement("strong",null," Gender: "),"  ",e.gender),r.a.createElement(b.a,null,r.a.createElement("strong",null,"  Size: "),"   ",e.size),r.a.createElement("br",null)," ",r.a.createElement("div",null," ",o(e.name)," is a ",function(e){return null===e.colors?null:e.colors[["primary"]]?e.colors.primary:void 0}(e)," ",e.breeds.primary,",our fury friend was admitted to the shelter since ",(t=e.published_at,new Date(t).getFullYear())," and has been in the shelter for ",function(e){var t=new Date,a=t.getFullYear(),n=t.getUTCMonth(),r=new Date(e),s=r.getFullYear(),i=r.getUTCMonth(),o=n-i+1;return o<0&&(o*=-1),a-s+" Year and "+o+" Months"}(e.published_at))),r.a.createElement(w.a.Extra,null,"  ",function(e){var t=[];for(var a in e.environment)null!==e.environment[a]&&!0===e.environment[a]&&t.push(r.a.createElement(b.a,null," ",a," friendly"));for(var n in e.attributes)null!==e.attributes[n]&&!0===e.attributes[n]&&t.push(r.a.createElement(b.a,null," ",n," "));return t}(e))),r.a.createElement(C.a,{className:"detailsbtn",href:e.url}," Click for more details "));var t}))))},j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).token="",a.state={error:null,isLoaded:!1,items:[]},W.subscribe((function(){return a.updateData()})),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"updateData",value:function(){var e=W.getState();this.setState({items:e.petData})}},{key:"render",value:function(){this.props.isLoaded;var e=this.state.items;return e=e||[],!0,r.a.createElement("div",{className:"dataBox"},r.a.createElement(x,{items:e}))}}]),t}(r.a.Component),S=a(424),O=a(421),N=a(419),D=a(428),T=a(427),P=a(417),A=a(418),L=a(429),B="https://api.petfinder.com",q=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).contextRef=Object(n.createRef)(),e.handleToggle=function(){return e.setState((function(e){return{active:!e.active}}))},e.state={empty:"",active:!0,petType:"Dog",page:1,location:"94112",sort:"-recent",coat:"",age:"",good_with_children:"",good_with_dogs:"",good_with_cats:"",input:"",hasError:!1,limit:"20",totalPageCount:"",currentPage:"",isloading:null,loadingMessage:"loading..."},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getToken",value:function(){var e,t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.awrap(fetch("".concat(B).concat("/v2/oauth2/token"),{body:"grant_type=client_credentials&client_id=cx1Q1hP2mvR6jeG447cARka8URjwpWlyn6myKedV3w6ap3qy0v&client_secret=S0dclp9P1odBVYNRx9MrotL78XE0tAU4L57YCYH2",headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"}));case 2:return e=a.sent,a.next=5,m.a.awrap(e.json());case 5:t=a.sent,this.token=t.access_token;case 7:case"end":return a.stop()}}),null,this)}},{key:"requestData",value:function(){var e,t,a,n,r,s;return m.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:for(a in e={type:this.state.petType,page:this.state.page,totalPageCount:this.state.totalPageCount,location:this.state.location,sort:this.state.sort,age:this.state.age,good_with_children:this.state.good_with_children,good_with_dogs:this.state.good_with_dogs,good_with_cats:this.state.good_with_cats,coat:this.state.coat,limit:this.state.limit},t="",e)""!==e[a]&&(t+=a+"="+e[a]+"&");return n="Bearer ".concat(this.token),i.prev=4,i.next=7,m.a.awrap(fetch(B+"/v2/animals?"+t,{withCredentials:!0,headers:{Authorization:n,"Content-Type":"application/json"}}));case 7:return r=i.sent,i.next=10,m.a.awrap(r.json());case 10:s=i.sent,this.setState({isLoaded:!0,items:s.animals}),o=s.animals,W.dispatch(function(e){return{type:"PET_DATA",petData:e}}(o)),s.animals.length||(console.log("empty page"),this.setState({empty:"Sorry! Looks like we ran out of furries in your area, Please check back for new furry updates!"})),s.pagination&&this.setState({totalPageCount:s.pagination.total_pages,currentPage:s.pagination.current_page}),console.log(s,"response",s.pagination,this.state.totalPageCount,this.state.currentPage),i.next=21;break;case 18:i.prev=18,i.t0=i.catch(4),console.log(i.t0);case 21:case"end":return i.stop()}var o}),null,this,[[4,18]])}},{key:"handleChange",value:function(e){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({petType:e}),t.next=3,m.a.awrap(this.getToken());case 3:return t.next=5,m.a.awrap(this.requestData());case 5:case"end":return t.stop()}}),null,this)}},{key:"handleChangePetAge",value:function(e){var t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=this.state.age,t=""!==this.state.age?this.state.age+","+e:e,this.setState({age:t,isloading:!0}),a.next=5,m.a.awrap(this.getToken());case 5:return a.next=7,m.a.awrap(this.requestData());case 7:this.setState({isloading:!1});case 8:case"end":return a.stop()}}),null,this)}},{key:"handleChangePetCoat",value:function(e){var t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=this.state.coat,t=""!==this.state.age?this.state.coat+" ,"+e:e,this.setState({coat:t}),a.next=5,m.a.awrap(this.getToken());case 5:return a.next=7,m.a.awrap(this.requestData());case 7:case"end":return a.stop()}}),null,this)}},{key:"handleChangeCats",value:function(e){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return""===this.state.good_with_cats&&this.setState({good_with_cats:!0}),!0===this.state.good_with_cats&&this.setState({good_with_cats:!1}),!1===this.state.good_with_cats&&this.setState({good_with_cats:!0}),!0===this.state.good_with_children&&!0===this.state.good_with_dogs&&!0===this.state.good_with_cats&&this.setState({good_with_children:!0,good_with_dogs:!0,good_with_cats:!0}),e.next=6,m.a.awrap(this.getToken());case 6:return e.next=8,m.a.awrap(this.requestData());case 8:case"end":return e.stop()}}),null,this)}},{key:"handleChangeDogs",value:function(e){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return!0===this.state.good_with_dogs&&this.setState({good_with_dogs:!1}),!1===this.state.good_with_dogs&&this.setState({good_with_dogs:!0}),!0===this.state.good_with_children&&!0===this.state.good_with_dogs&&!0===this.state.good_with_cats&&(console.log("did u happen"),this.setState({good_with_children:!0,good_with_dogs:!0,good_with_cats:!0})),e.next=5,m.a.awrap(this.getToken());case 5:return e.next=7,m.a.awrap(this.requestData());case 7:case"end":return e.stop()}}),null,this)}},{key:"handleChangeChildren",value:function(e){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return!0===this.state.good_with_children&&this.setState({good_with_children:!1}),!1===this.state.good_with_children&&this.setState({good_with_children:!0}),!0===this.state.good_with_children&&!0===this.state.good_with_dogs&&!0===this.state.good_with_cats&&this.setState({good_with_children:!0,good_with_dogs:!0,good_with_cats:!0}),e.next=5,m.a.awrap(this.getToken());case 5:return e.next=7,m.a.awrap(this.requestData());case 7:case"end":return e.stop()}}),null,this)}},{key:"onClickPageNext",value:function(){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({page:this.state.page+=1,isloading:!0}),console.log(this.state.page,"page"),e.next=4,m.a.awrap(this.getToken());case 4:return e.next=6,m.a.awrap(this.requestData());case 6:this.setState({page:this.state.page+=1,isloading:!1});case 7:case"end":return e.stop()}}),null,this)}},{key:"onClickPagePrev",value:function(){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==this.state.page){e.next=3;break}return console.log("first Page"),e.abrupt("return");case 3:return this.setState({page:this.state.page-=1}),e.next=6,m.a.awrap(this.getToken());case 6:return e.next=8,m.a.awrap(this.requestData());case 8:case"end":return e.stop()}}),null,this)}},{key:"onChangeSearchCity",value:function(e){console.log(e.target.value,"look at me"),this.setState({input:e.target.value}),this.onSubmitSearchCity&&(e.target.value="")}},{key:"onSubmitSearchCity",value:function(e,t){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e,"clicked"),e.preventDefault(),this.setState({location:this.state.input}),this.setState({input:""}),t.next=6,m.a.awrap(this.getToken());case 6:return t.next=8,m.a.awrap(this.requestData());case 8:case"end":return t.stop()}}),null,this)}},{key:"test",value:function(e,t){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("____my data",t),this.setState({isloading:!0,page:t.activePage}),e.next=4,m.a.awrap(this.getToken());case 4:return e.next=6,m.a.awrap(this.requestData());case 6:this.setState({isloading:!1});case 7:case"end":return e.stop()}}),null,this)}},{key:"isLoading",value:function(){if(this.state.isloading)return this.state.loadingMessage}},{key:"render",value:function(){var e=this;return!0===this.state.isLoading?r.a.createElement("div",null," loading...."):r.a.createElement(p.a,{className:"dataBox"},r.a.createElement(D.a,null,r.a.createElement(D.a.Column,{columns:2},r.a.createElement(T.a,{innerRef:this.contextRef},r.a.createElement(p.a,{className:"databox"},r.a.createElement(p.a,{className:"displayData mt-auto p-2"},r.a.createElement(P.a,{className:"stickyDirectionBar d-flex justfiy-content-center"},r.a.createElement(S.a,{onPageChange:function(t,a){return e.test(t,a)},defaultActivePage:this.state.page,totalPages:this.state.totalPageCount})),r.a.createElement("div",null,"  ",this.state.empty," "),r.a.createElement(j,{className:"dataBox displayData mt-auto p-2",items:this.state.items,isLoaded:this.state.isLoaded})),r.a.createElement(A.a,null,r.a.createElement(P.a,{className:"stickySearchBar"},r.a.createElement(L.a,{className:"positionSticky"},r.a.createElement("div",null," "),r.a.createElement(O.a,{onSubmit:this.onSubmitSearchCity.bind(this)},r.a.createElement(O.a.Field,{type:"submit"},"Zip code",r.a.createElement(N.a,{placeholder:"94112....",onChange:this.onChangeSearchCity.bind(this),icon:r.a.createElement(k.a,{name:"search",inverted:!0,circular:!0,link:!0,onClick:this.onSubmitSearchCity.bind(this)})}))),r.a.createElement("div",null," Pick your favorite furry "),r.a.createElement(C.a.Group,null,r.a.createElement(v.a,{type:"radio",name:"options",onChange:this.handleChange.bind(this)},r.a.createElement("div",null," Species "),r.a.createElement(f.a,{variant:"secondary",size:"lg",className:"speciesBtn",value:"dog"},"Dog"),r.a.createElement(C.a.Or,null),r.a.createElement(f.a,{variant:"secondary",size:"lg",className:"speciesBtn",value:"cat"},"Cat"),r.a.createElement(C.a.Or,null),r.a.createElement(f.a,{variant:"secondary",size:"lg",className:"speciesBtn",value:"rabbit"},"Rabbit"))),r.a.createElement("div",null," Age "),r.a.createElement(_.a,{className:"m-1"},r.a.createElement(v.a,{type:"checkbox",onChange:this.handleChangePetAge.bind(this)},r.a.createElement(f.a,{variant:"secondary",value:"baby"},"baby"),r.a.createElement(f.a,{variant:"secondary",value:"young"},"young "),r.a.createElement(f.a,{variant:"secondary",value:"adult"},"adult"),r.a.createElement(f.a,{variant:"secondary",value:"senior"},"Senior"))),r.a.createElement("div",null," Environment"),r.a.createElement(_.a,{className:"m-1"},r.a.createElement(C.a.Group,{type:"checkbox"},r.a.createElement(C.a,{variant:"secondary",onClick:this.handleChangeCats.bind(this),value:"good_with_cats"},"cats"),r.a.createElement(C.a,{variant:"secondary",onClick:this.handleChangeDogs.bind(this),value:"good_with_dogs"},"dogs "),r.a.createElement(C.a,{variant:"secondary",onClick:this.handleChangeChildren.bind(this),value:"good_with_children"},"children"))),r.a.createElement("div",null," Coat length"),r.a.createElement(_.a,{className:" m-1"},r.a.createElement(v.a,{className:"wrapper",type:"checkbox",onChange:this.handleChangePetCoat.bind(this)},r.a.createElement(f.a,{variant:"secondary",value:"short"},"short"),r.a.createElement(f.a,{variant:"secondary",value:"medium"},"medium "),r.a.createElement(f.a,{variant:"secondary",value:"long"},"long"))),r.a.createElement("div",null," Coat type"),r.a.createElement(_.a,{className:" m-1"},r.a.createElement(v.a,{className:"wrapper",type:"checkbox",onChange:this.handleChangePetCoat.bind(this)},r.a.createElement(f.a,{variant:"secondary",value:"wire"},"wire"),r.a.createElement(f.a,{variant:"secondary",value:"hairless"},"hairless"),r.a.createElement(f.a,{variant:"secondary",value:"curly"},"curly")))))))))))}}]),t}(n.Component);var R=function(){return r.a.createElement("main",{role:"main",className:"header h-100 landing Aligner"},r.a.createElement(q,null))},F=a(73),M=a(149),Y=a(420),z=a(422),G=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Y.a,null,r.a.createElement(M.a,{className:"navbar-default container d-flex flex-column flex-md-row justify-content-end",s:!0,variant:"dark"},r.a.createElement(M.a.Brand,{className:"background labelFont d-flex flex-column justify-content-start"},"Project Crateless"),r.a.createElement(F.a,{className:"navbar-collapse collapse justify-content-end"},r.a.createElement(F.a.Link,{className:"nav-link nav-font",href:"#home"},"Adopt"),r.a.createElement(z.a,{trigger:r.a.createElement(F.a.Link,{className:"nav-link nav-font",content:"Foster"}," Foster "),on:"hover",content:"Coming soon!"}),r.a.createElement(z.a,{trigger:r.a.createElement(F.a.Link,{className:"nav-link nav-font",content:"Foster"}," News "),on:"hover",content:"Coming soon!"}),r.a.createElement(F.a.Link,{className:"nav-link nav-font",href:"#about"},"About"))))}}]),t}(n.Component);function U(){return r.a.createElement("hero",null,r.a.createElement(p.a,{className:"landing Aligner position-relative overflow-hidden text-center bg-light ",style:{background:'url("'.concat("/project_r2019/imgs/landing.png",'") no-repeat center / cover ')}},r.a.createElement("p",{className:"Aligner-item col-md-8 col-lg-7"},"Saving one pet won\u2019t change the world,"),"  ",r.a.createElement("p",{className:"Aligner-item right row justify-content-center align-items-cente col-md-8"},"but for that one pet the world will change forever...")))}var I=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(G,null),r.a.createElement(U,null),r.a.createElement(R,null),r.a.createElement(d,null))}}]),t}(n.Component),V=a(225),H=a(112),J=a(72),K={petType:"dog",petData:[],vistorCount:0,petAge:"",petEnvoriment:""},Q=function(e,t){if("undefined"===typeof e)return K;switch(t.type){case"PET_TYPE":return Object(J.a)({},e,{petType:t.petType});case"PET_DATA":return Object(J.a)({},e,{petData:t.petData});case"PET_AGE":return Object(J.a)({},e,{petAge:t.petAge});case"PET_ENVIRONMENT":return Object(J.a)({},e,{petEnvoriment:t.petEnvoriment});case"VISTOR_COUNT":return Object(J.a)({},e,{vistorCount:e.vistorCount+1});default:return e}};a.d(t,"store",(function(){return W}));var W=Object(H.b)(Q);console.log(W.getState()),i.a.render(r.a.createElement(V.a,{store:W},r.a.createElement(I,null)),document.getElementById("root"))}},[[240,1,2]]]);
//# sourceMappingURL=main.57d105b6.chunk.js.map