import{H as J,I as K,J as Q,K as tt,L as et,V as ot,b as U,c as G,d as $,e as W,f as X,g as d,h as Y,i as v,k as x,w as Z,z as q}from"./chunk-SHZ34U7G.js";import{$a as R,Ab as a,Bb as s,Bc as z,Cb as C,Fb as T,Ia as S,Ib as j,Kb as L,Kc as H,Sb as B,Tb as m,Vb as V,Xa as M,Ya as p,Z as P,Za as F,aa as O,ba as g,bb as A,db as D,eb as E,ga as h,la as l,ma as y,oa as w,ob as k,qb as b,ta as I,ua as N}from"./chunk-IDCTCBMT.js";var rt=(()=>{let t=class t{constructor(o,e){this.authService=o,this.router=e,this.userFullName=""}ngOnInit(){let o=this.authService.getLoginResponse();if(o&&this.authService.isLoggedIn()){let{firstName:e,lastName:i}=o.user;this.userFullName=`${e} ${i}`}}};t.\u0275fac=function(e){return new(e||t)(p(x),p(d))},t.\u0275cmp=l({type:t,selectors:[["app-home"]],decls:3,vars:1,consts:[[1,"container","py-5"],[1,"fw-bold","text-center"]],template:function(e,i){e&1&&(a(0,"div",0)(1,"h1",1),m(2),s()()),e&2&&(M(2),V("Bienvenido a EDTeam Store , ",i.userFullName,""))},styles:[".container[_ngcontent-%COMP%]{max-width:1000px;margin:0 auto;padding-top:20px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{color:#333;text-align:center;margin-bottom:24px}.input-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:20px}.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{flex:1}.input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-left:10px}.date-range[_ngcontent-%COMP%]{display:flex;gap:20px;margin-bottom:20px}.card-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:20px;justify-content:space-between}.mat-card[_ngcontent-%COMP%]{width:100%;max-width:250px;box-shadow:0 4px 8px #0000001a;border-radius:8px;overflow:hidden}.mat-card-title[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:.5rem}.transaction-info[_ngcontent-%COMP%]{font-size:.9rem;color:#666;margin-bottom:1rem}.card-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:8px;background-color:#f5f5f5}.card-actions[_ngcontent-%COMP%]   button.primary-button[_ngcontent-%COMP%]{color:#fff;background-color:#1976d2}.card-actions[_ngcontent-%COMP%]   button.primary-button[_ngcontent-%COMP%]:hover{background-color:#0056d3}@media (max-width: 768px){.card-container[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}}@media (max-width: 576px){.card-container[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}}.datepicker[_ngcontent-%COMP%]{width:100%}"]});let r=t;return r})();var it=(r,t)=>(h(d).navigate([""]),!1);var ut=[{path:"",loadChildren:()=>import("./chunk-KIQ3KC47.js").then(r=>r.UserModule)},{path:"home",component:rt,canActivate:[it]},{path:"product",loadChildren:()=>import("./chunk-7GHSQOBT.js").then(r=>r.ProductModule)}],at=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=y({type:t}),t.\u0275inj=g({imports:[v.forRoot(ut),v]});let r=t;return r})();function ft(r,t){if(r&1){let n=T();a(0,"mat-toolbar",2)(1,"span"),m(2,"EDTeam Store"),s(),a(3,"button",3),m(4," Inicio "),s(),a(5,"button",4),m(6," Catalogo de productos "),s(),C(7,"span",5),a(8,"button",6)(9,"mat-icon"),m(10,"account_circle"),s()(),a(11,"mat-menu",null,0)(13,"button",7),j("click",function(){I(n);let e=L();return N(e.logout())}),a(14,"mat-icon"),m(15,"logout"),s(),m(16," Cerrar sesi\xF3n "),s()()()}if(r&2){let n=B(12);M(8),b("matMenuTriggerFor",n)}}var st=(()=>{let t=class t{constructor(o,e){this.authService=o,this.router=e}logout(){this.authService.logout(),this.router.navigate([""])}isLoggedIn(){return this.authService.isLoggedIn()}};t.\u0275fac=function(e){return new(e||t)(p(x),p(d))},t.\u0275cmp=l({type:t,selectors:[["app-navbar"]],decls:1,vars:1,consts:[["userMenu",""],["color","primary",4,"ngIf"],["color","primary"],["mat-button","","routerLink","/home",1,"ms-3"],["mat-button","","routerLink","/product/catalog",1,"ms-3"],[1,"spacer"],["mat-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"]],template:function(e,i){e&1&&k(0,ft,17,1,"mat-toolbar",1),e&2&&b("ngIf",i.isLoggedIn())},dependencies:[H,Y,q,K,J,tt,Q,et],styles:["mat-toolbar[_ngcontent-%COMP%]{background-color:#009739;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:0 16px}mat-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:16px;color:#fff}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.ms-3[_ngcontent-%COMP%]{margin-left:16px}mat-icon[_ngcontent-%COMP%]{vertical-align:middle;margin-right:8px;color:#fff}button[mat-button][_ngcontent-%COMP%]{display:flex;align-items:center;color:#000}mat-menu[_ngcontent-%COMP%]{background-color:#fff;color:#000}mat-menu[_ngcontent-%COMP%]   button[mat-menu-item][_ngcontent-%COMP%]{display:flex;align-items:center;color:#000}"]});let r=t;return r})();var mt=(()=>{let t=class t{constructor(){this.title="banking-app"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-root"]],decls:2,vars:0,template:function(e,i){e&1&&C(0,"app-navbar")(1,"router-outlet")},dependencies:[X,st]});let r=t;return r})();var ht="@",yt=(()=>{let t=class t{constructor(o,e,i,c,f){this.doc=o,this.delegate=e,this.zone=i,this.animationType=c,this.moduleImpl=f,this._rendererFactoryPromise=null,this.scheduler=h(R,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-6NKVCYB2.js")).catch(e=>{throw new P(5300,!1)}).then(({\u0275createEngine:e,\u0275AnimationRendererFactory:i})=>{this._engine=e(this.animationType,this.doc,this.scheduler);let c=new i(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(o,e){let i=this.delegate.createRenderer(o,e);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let c=new _(i);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(f=>{let pt=f.createRenderer(o,e);c.use(pt)}).catch(f=>{c.use(i)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(e){F()},t.\u0275prov=O({token:t,factory:t.\u0275fac});let r=t;return r})(),_=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let n of this.replay)n(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,n){return this.delegate.createElement(t,n)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,n){this.delegate.appendChild(t,n)}insertBefore(t,n,o,e){this.delegate.insertBefore(t,n,o,e)}removeChild(t,n,o){this.delegate.removeChild(t,n,o)}selectRootElement(t,n){return this.delegate.selectRootElement(t,n)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,n,o,e){this.delegate.setAttribute(t,n,o,e)}removeAttribute(t,n,o){this.delegate.removeAttribute(t,n,o)}addClass(t,n){this.delegate.addClass(t,n)}removeClass(t,n){this.delegate.removeClass(t,n)}setStyle(t,n,o,e){this.delegate.setStyle(t,n,o,e)}removeStyle(t,n,o){this.delegate.removeStyle(t,n,o)}setProperty(t,n,o){this.shouldReplay(n)&&this.replay.push(e=>e.setProperty(t,n,o)),this.delegate.setProperty(t,n,o)}setValue(t,n){this.delegate.setValue(t,n)}listen(t,n,o){return this.shouldReplay(n)&&this.replay.push(e=>e.listen(t,n,o)),this.delegate.listen(t,n,o)}shouldReplay(t){return this.replay!==null&&t.startsWith(ht)}};function ct(r="animations"){return D("NgAsyncAnimations"),w([{provide:A,useFactory:(t,n,o)=>new yt(t,n,o,r),deps:[z,G,E]},{provide:S,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var lt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=y({type:t,bootstrap:[mt]}),t.\u0275inj=g({providers:[ct()],imports:[W,at,ot,U,Z]});let r=t;return r})();$().bootstrapModule(lt).catch(r=>console.error(r));