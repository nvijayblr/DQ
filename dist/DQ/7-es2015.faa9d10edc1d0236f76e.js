(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"58zm":function(l,n,i){"use strict";i.r(n);var a=i("8Y7J");class t{}var b=i("NcP4"),o=i("t68o"),u=i("xYTU"),c=i("zbXB"),s=i("fo5T"),e=i("pMnS"),r=i("zF2Y"),d=i("No7X"),R=i("bIR2"),p=i("W7UG"),f=i("mM23"),h=i("1iX9"),g=i("VvaF"),m=i("1A4A"),v=i("lhjK"),x=i("7GhP"),w=i("v0Wg"),H=i("KWJf"),M=i("qUfE"),k=i("FnWr"),y=i("X3Rd"),I=i("OKrL"),N=i("HQMb"),L=i("h9v1"),G=i("Mr+X"),A=i("Gi4r"),z=i("lzlj"),F=i("igqZ"),U=i("omvX"),K=i("SVse"),O=i("aR35");class j{constructor(l,n,i,a,t,b,o){this.route=l,this.http=n,this.router=i,this.activatedRoute=a,this.authGuardService=t,this.messageService=b,this.fb=o,this.user={},this.userId="",this.isCurrentUser=!1,this.appConfig={},this.notifications=[],this.isLoading=!1,this.loaderMsg="Loading notifications...",this.isUserLoggedIn=!1,this.appConfig=O.a,this.isUserLoggedIn=this.authGuardService.isUserLoggedIn(),this.user=this.authGuardService.getLoggedInUserDetails(),this.userId=this.user.user_id}ngOnInit(){this.getAllNotifications()}getAllNotifications(){this.loaderMsg="Loading notifications...",this.isLoading=!0,this.http.getNotifications(this.userId).subscribe(l=>{this.isLoading=!1,this.notifications=l},l=>{this.isLoading=!1})}makeNotificationRead(l){l.showMsg=!l.showMsg,l.status||this.http.makeNotificationRead({Id:l.Id,userName:this.user.userName,isRead:"Read",status:"Active"}).subscribe(n=>{this.isLoading=!1,l.isRead="Read",this.messageService.sendCommonMessage({topic:"notifications",reason:"Read Notification"})},l=>{this.isLoading=!1})}ngOnDestroy(){}}var J=i("iInd"),T=i("mKmO"),W=i("MKys"),P=i("tZre"),X=i("s7LF"),q=a.Fb({encapsulation:2,styles:[[".notification-body .unread-icon{margin-top:20px;font-size:14px;color:#b00100}.notification-body .unread{font-weight:400!important}.notification-body .list.notification{padding-bottom:0;cursor:pointer}.notification-body .mat-card{box-shadow:0 3px 6px #00000029;border:1px solid #ebebeb!important;border-radius:20px!important;padding:30px 30px 10px!important;margin-bottom:22px!important}.notification-body .label{font-size:18px!important;color:#888;font-weight:400!important;margin-bottom:16px!important}"]],data:{}});function C(l){return a.dc(0,[(l()(),a.Hb(0,0,null,null,1,"app-progress-bar",[["class","page"]],null,null,null,N.b,N.a)),a.Gb(1,114688,null,0,L.a,[],{message:[0,"message"]},null)],(function(l,n){l(n,1,0,n.component.loaderMsg)}),null)}function E(l){return a.dc(0,[(l()(),a.Hb(0,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.description)}))}function Q(l){return a.dc(0,[(l()(),a.Hb(0,0,null,null,3,"div",[["class","flex-item"]],null,null,null,null,null)),(l()(),a.Hb(1,0,null,null,2,"mat-icon",[["class","unread-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,G.b,G.a)),a.Gb(2,9158656,null,0,A.b,[a.n,A.d,[8,null],[2,A.a],[2,a.o]],null,null),(l()(),a.bc(-1,0,["brightness_1"]))],(function(l,n){l(n,2,0)}),(function(l,n){l(n,1,0,a.Tb(n,2).inline,"primary"!==a.Tb(n,2).color&&"accent"!==a.Tb(n,2).color&&"warn"!==a.Tb(n,2).color)}))}function V(l){return a.dc(0,[(l()(),a.Hb(0,0,null,null,11,"mat-card",[["class","list notification flex-containers space-between mat-card"]],[[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,i){var a=!0;return"click"===n&&(a=!1!==l.component.makeNotificationRead(l.context.$implicit)&&a),a}),z.b,z.a)),a.Gb(1,49152,null,0,F.a,[[2,U.a]],null,null),(l()(),a.Hb(2,0,null,0,7,"div",[["class","flex-item"]],null,null,null,null,null)),(l()(),a.Hb(3,0,null,null,2,"label",[["class","label"]],null,null,null,null,null)),(l()(),a.bc(4,null,["",""])),a.Xb(5,2),(l()(),a.Hb(6,0,null,null,1,"h4",[],[[2,"unread",null]],null,null,null,null)),(l()(),a.bc(7,null,["",""])),(l()(),a.wb(16777216,null,null,1,null,E)),a.Gb(9,16384,null,0,K.o,[a.ab,a.W],{ngIf:[0,"ngIf"]},null),(l()(),a.wb(16777216,null,0,1,null,Q)),a.Gb(11,16384,null,0,K.o,[a.ab,a.W],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,9,0,n.context.$implicit.showMsg),l(n,11,0,!n.context.$implicit.status)}),(function(l,n){l(n,0,0,"NoopAnimations"===a.Tb(n,1)._animationMode);var i=a.cc(n,4,0,l(n,5,0,a.Tb(n.parent,0),n.context.$implicit.createdAt,"MMM dd, yyyy hh:mm a"));l(n,4,0,i),l(n,6,0,!n.context.$implicit.status),l(n,7,0,n.context.$implicit.subject)}))}function Z(l){return a.dc(0,[a.Vb(0,K.e,[a.A]),(l()(),a.Hb(1,0,null,null,12,"section",[["class","page-body notification-body home-body"]],null,null,null,null,null)),(l()(),a.Hb(2,0,null,null,11,"div",[["class","container"]],null,null,null,null,null)),(l()(),a.Hb(3,0,null,null,3,"div",[["class","flex-containers space-between page-heading-action"]],null,null,null,null,null)),(l()(),a.Hb(4,0,null,null,2,"div",[["class","flex-item"]],null,null,null,null,null)),(l()(),a.Hb(5,0,null,null,1,"h4",[["class","name"]],null,null,null,null,null)),(l()(),a.bc(-1,null,["Notifications"])),(l()(),a.Hb(7,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),a.wb(16777216,null,null,1,null,C)),a.Gb(9,16384,null,0,K.o,[a.ab,a.W],{ngIf:[0,"ngIf"]},null),(l()(),a.Hb(10,0,null,null,3,"div",[["class","col-xs-12 col-sm-12 col-md-12"]],null,null,null,null,null)),(l()(),a.Hb(11,0,null,null,2,"div",[["class","noti-wrapper"]],null,null,null,null,null)),(l()(),a.wb(16777216,null,null,1,null,V)),a.Gb(13,278528,null,0,K.n,[a.ab,a.W,a.y],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var i=n.component;l(n,9,0,i.isLoading),l(n,13,0,i.notifications)}),null)}function D(l){return a.dc(0,[(l()(),a.Hb(0,0,null,null,1,"app-notifications",[],null,null,null,Z,q)),a.Gb(1,245760,null,0,j,[J.a,T.a,J.l,J.a,W.a,P.a,X.f],null,null)],(function(l,n){l(n,1,0)}),null)}var S=a.Db("app-notifications",j,D,{},{},[]),Y=i("QQfA"),$=i("IP0z"),B=i("gavF"),_=i("POq0"),ll=i("7kcP"),nl=i("Xd0L"),il=i("JjoW"),al=i("cUpR"),tl=i("Mz6y"),bl=i("s6ns"),ol=i("/Co4"),ul=i("OIZN"),cl=i("821u"),sl=i("/HVE"),el=i("qJ5m"),rl=i("Mc5n"),dl=i("hOhj"),Rl=i("KMir"),pl=i("Tq4R"),fl=i("rAFq"),hl=i("4D9t"),gl=i("bMPK"),ml=i("UiI2"),vl=i("E4Uz"),xl=i("JUyF"),wl=i("Fwaw"),Hl=i("zMNK"),Ml=i("BzsH"),kl=i("r0V8"),yl=i("FVPZ"),Il=i("BV1i"),Nl=i("zQui"),Ll=i("8rEH"),Gl=i("oapL"),Al=i("HsOI"),zl=i("ZwOa"),Fl=i("lT8R"),Ul=i("elxJ"),Kl=i("02hT"),Ol=i("Q+lL"),jl=i("W5yJ"),Jl=i("kNGD"),Tl=i("5GAg"),Wl=i("5Bek"),Pl=i("c9fC"),Xl=i("rWV4"),ql=i("pBi1"),Cl=i("dFDH"),El=i("8P0U"),Ql=i("KPQW"),Vl=i("mkRZ"),Zl=i("qJ50"),Dl=i("cw5Z"),Sl=i("NA4g"),Yl=i("YD+O"),$l=i("YbOK"),Bl=i("jRYl"),_l=i("KL2N"),ln=i("QX+E"),nn=i("YFAK"),an=i("PCNd");class tn{}var bn=i("dvZr"),on=i("EFU/");i.d(n,"NotificationsModuleNgFactory",(function(){return un}));var un=a.Eb(t,[],(function(l){return a.Qb([a.Rb(512,a.l,a.nb,[[8,[b.a,o.a,u.a,u.b,c.b,c.a,s.c,e.a,r.a,d.a,R.a,p.a,f.a,h.a,g.a,m.a,v.a,x.a,w.a,H.a,M.a,k.a,y.a,I.a,S]],[3,a.l],a.E]),a.Rb(4608,K.q,K.p,[a.A,[2,K.M]]),a.Rb(4608,Y.d,Y.d,[Y.j,Y.f,a.l,Y.i,Y.g,a.w,a.G,K.d,$.b,[2,K.k]]),a.Rb(5120,Y.k,Y.l,[Y.d]),a.Rb(5120,B.c,B.j,[Y.d]),a.Rb(4608,_.c,_.c,[]),a.Rb(5120,ll.d,ll.a,[[3,ll.d]]),a.Rb(4608,nl.d,nl.d,[]),a.Rb(5120,il.a,il.b,[Y.d]),a.Rb(4608,al.e,nl.e,[[2,nl.i],[2,nl.n]]),a.Rb(5120,tl.b,tl.c,[Y.d]),a.Rb(5120,bl.c,bl.d,[Y.d]),a.Rb(135680,bl.e,bl.e,[Y.d,a.w,[2,K.k],[2,bl.b],bl.c,[3,bl.e],Y.f]),a.Rb(5120,ol.a,ol.b,[Y.d]),a.Rb(5120,ul.c,ul.a,[[3,ul.c]]),a.Rb(4608,cl.i,cl.i,[]),a.Rb(5120,cl.a,cl.b,[Y.d]),a.Rb(4608,nl.c,nl.y,[[2,nl.h],sl.a]),a.Rb(5120,el.g,el.a,[[3,el.g]]),a.Rb(4608,rl.g,rl.g,[K.d,a.G,dl.e,rl.i]),a.Rb(4608,X.A,X.A,[]),a.Rb(4608,Rl.i,Rl.j,[]),a.Rb(5120,Rl.h,Rl.k,[Rl.i,a.J]),a.Rb(4608,Rl.t,Rl.t,[al.d]),a.Rb(4608,Rl.m,Rl.n,[]),a.Rb(5120,Rl.l,Rl.o,[Rl.m,a.J]),a.Rb(4608,Rl.f,Rl.f,[a.o]),a.Rb(4608,X.f,X.f,[]),a.Rb(5120,pl.b,pl.d,[Y.d]),a.Rb(4608,pl.e,pl.e,[Y.d,a.w,[2,K.k],pl.b,[2,pl.a],[3,pl.e],Y.f]),a.Rb(4608,fl.a,fl.a,[]),a.Rb(5120,hl.a,hl.c,[Y.d]),a.Rb(4608,gl.a,ml.a,[[2,gl.b],sl.a]),a.Rb(4608,vl.d,vl.d,[]),a.Rb(4608,K.e,K.e,[a.A]),a.Rb(1073742336,K.c,K.c,[]),a.Rb(1073742336,xl.b,xl.b,[]),a.Rb(1073742336,$.a,$.a,[]),a.Rb(1073742336,nl.n,nl.n,[[2,nl.f],[2,al.f]]),a.Rb(1073742336,sl.b,sl.b,[]),a.Rb(1073742336,nl.x,nl.x,[]),a.Rb(1073742336,wl.c,wl.c,[]),a.Rb(1073742336,Hl.g,Hl.g,[]),a.Rb(1073742336,dl.c,dl.c,[]),a.Rb(1073742336,Y.h,Y.h,[]),a.Rb(1073742336,B.i,B.i,[]),a.Rb(1073742336,B.f,B.f,[]),a.Rb(1073742336,Ml.a,Ml.a,[]),a.Rb(1073742336,A.c,A.c,[]),a.Rb(1073742336,F.c,F.c,[]),a.Rb(1073742336,_.d,_.d,[]),a.Rb(1073742336,kl.d,kl.d,[]),a.Rb(1073742336,kl.c,kl.c,[]),a.Rb(1073742336,nl.o,nl.o,[]),a.Rb(1073742336,yl.a,yl.a,[]),a.Rb(1073742336,Il.h,Il.h,[]),a.Rb(1073742336,ll.e,ll.e,[]),a.Rb(1073742336,Nl.p,Nl.p,[]),a.Rb(1073742336,Ll.m,Ll.m,[]),a.Rb(1073742336,Gl.c,Gl.c,[]),a.Rb(1073742336,Al.e,Al.e,[]),a.Rb(1073742336,zl.c,zl.c,[]),a.Rb(1073742336,nl.v,nl.v,[]),a.Rb(1073742336,nl.s,nl.s,[]),a.Rb(1073742336,il.d,il.d,[]),a.Rb(1073742336,Fl.b,Fl.b,[]),a.Rb(1073742336,Ul.d,Ul.d,[]),a.Rb(1073742336,Kl.b,Kl.b,[]),a.Rb(1073742336,Ol.c,Ol.c,[]),a.Rb(1073742336,jl.c,jl.c,[]),a.Rb(1073742336,Jl.d,Jl.d,[]),a.Rb(1073742336,Tl.a,Tl.a,[]),a.Rb(1073742336,tl.e,tl.e,[]),a.Rb(1073742336,Wl.c,Wl.c,[]),a.Rb(1073742336,Pl.d,Pl.d,[]),a.Rb(1073742336,bl.k,bl.k,[]),a.Rb(1073742336,ol.c,ol.c,[]),a.Rb(1073742336,Xl.k,Xl.k,[]),a.Rb(1073742336,ql.b,ql.b,[]),a.Rb(1073742336,ql.a,ql.a,[]),a.Rb(1073742336,ul.d,ul.d,[]),a.Rb(1073742336,Cl.d,Cl.d,[]),a.Rb(1073742336,El.c,El.c,[]),a.Rb(1073742336,cl.j,cl.j,[]),a.Rb(1073742336,nl.z,nl.z,[]),a.Rb(1073742336,nl.p,nl.p,[]),a.Rb(1073742336,Ql.b,Ql.b,[]),a.Rb(1073742336,Vl.a,Vl.a,[]),a.Rb(1073742336,Zl.e,Zl.e,[]),a.Rb(1073742336,el.h,el.h,[]),a.Rb(1073742336,rl.h,rl.h,[]),a.Rb(1073742336,X.z,X.z,[]),a.Rb(1073742336,X.k,X.k,[]),a.Rb(1073742336,Dl.h,Dl.h,[]),a.Rb(1073742336,Sl.a,Sl.a,[]),a.Rb(1073742336,Yl.a,Yl.a,[]),a.Rb(1073742336,Rl.b,Rl.b,[]),a.Rb(1073742336,J.p,J.p,[[2,J.u],[2,J.l]]),a.Rb(1073742336,X.v,X.v,[]),a.Rb(1073742336,$l.a,$l.a,[]),a.Rb(1073742336,Bl.a,Bl.a,[]),a.Rb(1073742336,_l.a,_l.a,[]),a.Rb(1073742336,ln.a,ln.a,[]),a.Rb(1073742336,ln.b,ln.b,[]),a.Rb(1073742336,vl.c,vl.c,[]),a.Rb(1073742336,nn.c,nn.c,[]),a.Rb(1073742336,an.a,an.a,[]),a.Rb(1073742336,tn,tn,[]),a.Rb(1073742336,t,t,[]),a.Rb(256,Jl.a,{separatorKeyCodes:[bn.f]},[]),a.Rb(256,nl.g,nl.k,[]),a.Rb(256,on.a,ln.c,[]),a.Rb(1024,J.j,(function(){return[[{path:"",component:j}]]}),[])])}))}}]);