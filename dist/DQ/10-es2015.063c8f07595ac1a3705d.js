(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"58zm":function(l,n,i){"use strict";i.r(n);var a=i("8Y7J");class t{}var b=i("NcP4"),o=i("t68o"),u=i("xYTU"),s=i("zbXB"),c=i("fo5T"),e=i("pMnS"),r=i("zF2Y"),Q=i("No7X"),d=i("bIR2"),f=i("W7UG"),p=i("mM23"),h=i("1iX9"),g=i("VvaF"),m=i("1A4A"),v=i("HQMb"),x=i("h9v1"),w=i("Mr+X"),G=i("Gi4r"),y=i("lzlj"),F=i("igqZ"),M=i("omvX"),I=i("SVse"),k=i("aR35");class L{constructor(l,n,i,a,t,b,o){this.route=l,this.http=n,this.router=i,this.activatedRoute=a,this.authGuardService=t,this.messageService=b,this.fb=o,this.user={},this.userId="",this.isCurrentUser=!1,this.appConfig={},this.notifications=[],this.isLoading=!1,this.loaderMsg="Loading notifications...",this.isUserLoggedIn=!1,this.appConfig=k.a,this.isUserLoggedIn=this.authGuardService.isUserLoggedIn(),this.user=this.authGuardService.getLoggedInUserDetails(),this.userId=this.user.user_id}ngOnInit(){this.getAllNotifications()}getAllNotifications(){this.loaderMsg="Loading notifications...",this.isLoading=!0,this.http.getNotifications(this.userId).subscribe(l=>{this.isLoading=!1,this.notifications=l},l=>{this.isLoading=!1})}makeNotificationRead(l){l.showMsg=!l.showMsg,l.status||this.http.makeNotificationRead(this.userId,l.id).subscribe(n=>{this.isLoading=!1,l.status=!0,this.messageService.sendCommonMessage({topic:"notifications",reason:"Read Notification"})},l=>{this.isLoading=!1})}ngOnDestroy(){}}var N=i("iInd"),z=i("mKmO"),A=i("MKys"),S=i("tZre"),U=i("s7LF"),O=a.Eb({encapsulation:2,styles:[[".notification-body .unread-icon{margin-top:20px;font-size:14px;color:#b00100}.notification-body .unread{font-weight:400!important}.notification-body .list.notification{padding-bottom:0;cursor:pointer}.notification-body .mat-card{box-shadow:0 3px 6px #00000029;border:1px solid #ebebeb!important;border-radius:20px!important;padding:30px 30px 10px!important;margin-bottom:22px!important}.notification-body .label{font-size:18px!important;color:#888;font-weight:400!important;margin-bottom:16px!important}"]],data:{}});function R(l){return a.bc(0,[(l()(),a.Gb(0,0,null,null,1,"app-progress-bar",[["class","page"]],null,null,null,v.b,v.a)),a.Fb(1,114688,null,0,x.a,[],{message:[0,"message"]},null)],(function(l,n){l(n,1,0,n.component.loaderMsg)}),null)}function Z(l){return a.bc(0,[(l()(),a.Gb(0,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.description)}))}function j(l){return a.bc(0,[(l()(),a.Gb(0,0,null,null,3,"div",[["class","flex-item"]],null,null,null,null,null)),(l()(),a.Gb(1,0,null,null,2,"mat-icon",[["class","unread-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),a.Fb(2,9158656,null,0,G.b,[a.n,G.d,[8,null],[2,G.a],[2,a.o]],null,null),(l()(),a.Zb(-1,0,["brightness_1"]))],(function(l,n){l(n,2,0)}),(function(l,n){l(n,1,0,a.Sb(n,2).inline,"primary"!==a.Sb(n,2).color&&"accent"!==a.Sb(n,2).color&&"warn"!==a.Sb(n,2).color)}))}function J(l){return a.bc(0,[(l()(),a.Gb(0,0,null,null,11,"mat-card",[["class","list notification flex-containers space-between mat-card"]],[[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,i){var a=!0;return"click"===n&&(a=!1!==l.component.makeNotificationRead(l.context.$implicit)&&a),a}),y.b,y.a)),a.Fb(1,49152,null,0,F.a,[[2,M.a]],null,null),(l()(),a.Gb(2,0,null,0,7,"div",[["class","flex-item"]],null,null,null,null,null)),(l()(),a.Gb(3,0,null,null,2,"label",[["class","label"]],null,null,null,null,null)),(l()(),a.Zb(4,null,["",""])),a.Vb(5,2),(l()(),a.Gb(6,0,null,null,1,"h4",[],[[2,"unread",null]],null,null,null,null)),(l()(),a.Zb(7,null,["",""])),(l()(),a.vb(16777216,null,null,1,null,Z)),a.Fb(9,16384,null,0,I.m,[a.ab,a.W],{ngIf:[0,"ngIf"]},null),(l()(),a.vb(16777216,null,0,1,null,j)),a.Fb(11,16384,null,0,I.m,[a.ab,a.W],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,9,0,n.context.$implicit.showMsg),l(n,11,0,!n.context.$implicit.status)}),(function(l,n){l(n,0,0,"NoopAnimations"===a.Sb(n,1)._animationMode);var i=a.ac(n,4,0,l(n,5,0,a.Sb(n.parent,0),n.context.$implicit.createdAt,"MMM dd, yyyy hh:mm a"));l(n,4,0,i),l(n,6,0,!n.context.$implicit.status),l(n,7,0,n.context.$implicit.subject)}))}function K(l){return a.bc(0,[a.Tb(0,I.e,[a.A]),(l()(),a.Gb(1,0,null,null,12,"section",[["class","page-body notification-body home-body"]],null,null,null,null,null)),(l()(),a.Gb(2,0,null,null,11,"div",[["class","container"]],null,null,null,null,null)),(l()(),a.Gb(3,0,null,null,3,"div",[["class","flex-containers space-between page-heading-action"]],null,null,null,null,null)),(l()(),a.Gb(4,0,null,null,2,"div",[["class","flex-item"]],null,null,null,null,null)),(l()(),a.Gb(5,0,null,null,1,"h4",[["class","name"]],null,null,null,null,null)),(l()(),a.Zb(-1,null,["Notifications"])),(l()(),a.Gb(7,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),a.vb(16777216,null,null,1,null,R)),a.Fb(9,16384,null,0,I.m,[a.ab,a.W],{ngIf:[0,"ngIf"]},null),(l()(),a.Gb(10,0,null,null,3,"div",[["class","col-xs-12 col-sm-12 col-md-12"]],null,null,null,null,null)),(l()(),a.Gb(11,0,null,null,2,"div",[["class","noti-wrapper"]],null,null,null,null,null)),(l()(),a.vb(16777216,null,null,1,null,J)),a.Fb(13,278528,null,0,I.l,[a.ab,a.W,a.y],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var i=n.component;l(n,9,0,i.isLoading),l(n,13,0,i.notifications)}),null)}function P(l){return a.bc(0,[(l()(),a.Gb(0,0,null,null,1,"app-notifications",[],null,null,null,K,O)),a.Fb(1,245760,null,0,L,[N.a,z.a,N.l,N.a,A.a,S.a,U.f],null,null)],(function(l,n){l(n,1,0)}),null)}var C=a.Cb("app-notifications",L,P,{},{},[]),W=i("QQfA"),V=i("IP0z"),D=i("gavF"),E=i("POq0"),H=i("7kcP"),T=i("Xd0L"),X=i("JjoW"),Y=i("cUpR"),$=i("Mz6y"),q=i("s6ns"),B=i("/Co4"),_=i("OIZN"),ll=i("821u"),nl=i("/HVE"),il=i("qJ5m"),al=i("Mc5n"),tl=i("hOhj"),bl=i("KMir"),ol=i("Tq4R"),ul=i("rAFq"),sl=i("4D9t"),cl=i("bMPK"),el=i("UiI2"),rl=i("E4Uz"),Ql=i("JUyF"),dl=i("Fwaw"),fl=i("zMNK"),pl=i("BzsH"),hl=i("r0V8"),gl=i("FVPZ"),ml=i("BV1i"),vl=i("zQui"),xl=i("8rEH"),wl=i("oapL"),Gl=i("HsOI"),yl=i("ZwOa"),Fl=i("lT8R"),Ml=i("elxJ"),Il=i("02hT"),kl=i("Q+lL"),Ll=i("W5yJ"),Nl=i("kNGD"),zl=i("5GAg"),Al=i("5Bek"),Sl=i("c9fC"),Ul=i("rWV4"),Ol=i("pBi1"),Rl=i("dFDH"),Zl=i("8P0U"),jl=i("KPQW"),Jl=i("mkRZ"),Kl=i("qJ50"),Pl=i("cw5Z"),Cl=i("NA4g"),Wl=i("YD+O"),Vl=i("YbOK"),Dl=i("jRYl"),El=i("KL2N"),Hl=i("QX+E"),Tl=i("YFAK"),Xl=i("PCNd");class Yl{}var $l=i("dvZr"),ql=i("EFU/");i.d(n,"NotificationsModuleNgFactory",(function(){return Bl}));var Bl=a.Db(t,[],(function(l){return a.Pb([a.Qb(512,a.l,a.nb,[[8,[b.a,o.a,u.a,u.b,s.b,s.a,c.c,e.a,r.a,Q.a,d.a,f.a,p.a,h.a,g.a,m.a,C]],[3,a.l],a.E]),a.Qb(4608,I.o,I.n,[a.A,[2,I.F]]),a.Qb(4608,W.d,W.d,[W.j,W.f,a.l,W.i,W.g,a.w,a.G,I.d,V.b,[2,I.i]]),a.Qb(5120,W.k,W.l,[W.d]),a.Qb(5120,D.c,D.j,[W.d]),a.Qb(4608,E.c,E.c,[]),a.Qb(5120,H.b,H.a,[[3,H.b]]),a.Qb(4608,T.d,T.d,[]),a.Qb(5120,X.a,X.b,[W.d]),a.Qb(4608,Y.e,T.e,[[2,T.i],[2,T.n]]),a.Qb(5120,$.b,$.c,[W.d]),a.Qb(5120,q.c,q.d,[W.d]),a.Qb(135680,q.e,q.e,[W.d,a.w,[2,I.i],[2,q.b],q.c,[3,q.e],W.f]),a.Qb(5120,B.a,B.b,[W.d]),a.Qb(5120,_.b,_.a,[[3,_.b]]),a.Qb(4608,ll.i,ll.i,[]),a.Qb(5120,ll.a,ll.b,[W.d]),a.Qb(4608,T.c,T.y,[[2,T.h],nl.a]),a.Qb(5120,il.g,il.a,[[3,il.g]]),a.Qb(4608,al.g,al.g,[I.d,a.G,tl.e,al.i]),a.Qb(4608,U.x,U.x,[]),a.Qb(4608,bl.i,bl.j,[]),a.Qb(5120,bl.h,bl.k,[bl.i,a.J]),a.Qb(4608,bl.t,bl.t,[Y.d]),a.Qb(4608,bl.m,bl.n,[]),a.Qb(5120,bl.l,bl.o,[bl.m,a.J]),a.Qb(4608,bl.f,bl.f,[a.o]),a.Qb(4608,U.f,U.f,[]),a.Qb(5120,ol.b,ol.d,[W.d]),a.Qb(4608,ol.e,ol.e,[W.d,a.w,[2,I.i],ol.b,[2,ol.a],[3,ol.e],W.f]),a.Qb(4608,ul.a,ul.a,[]),a.Qb(5120,sl.a,sl.c,[W.d]),a.Qb(4608,cl.a,el.a,[[2,cl.b],nl.a]),a.Qb(4608,rl.d,rl.d,[]),a.Qb(4608,I.e,I.e,[a.A]),a.Qb(1073742336,I.c,I.c,[]),a.Qb(1073742336,Ql.a,Ql.a,[]),a.Qb(1073742336,V.a,V.a,[]),a.Qb(1073742336,T.n,T.n,[[2,T.f],[2,Y.f]]),a.Qb(1073742336,nl.b,nl.b,[]),a.Qb(1073742336,T.x,T.x,[]),a.Qb(1073742336,dl.c,dl.c,[]),a.Qb(1073742336,fl.g,fl.g,[]),a.Qb(1073742336,tl.c,tl.c,[]),a.Qb(1073742336,W.h,W.h,[]),a.Qb(1073742336,D.i,D.i,[]),a.Qb(1073742336,D.f,D.f,[]),a.Qb(1073742336,pl.a,pl.a,[]),a.Qb(1073742336,G.c,G.c,[]),a.Qb(1073742336,F.c,F.c,[]),a.Qb(1073742336,E.d,E.d,[]),a.Qb(1073742336,hl.b,hl.b,[]),a.Qb(1073742336,hl.a,hl.a,[]),a.Qb(1073742336,T.o,T.o,[]),a.Qb(1073742336,gl.a,gl.a,[]),a.Qb(1073742336,ml.h,ml.h,[]),a.Qb(1073742336,H.c,H.c,[]),a.Qb(1073742336,vl.o,vl.o,[]),a.Qb(1073742336,xl.a,xl.a,[]),a.Qb(1073742336,wl.c,wl.c,[]),a.Qb(1073742336,Gl.e,Gl.e,[]),a.Qb(1073742336,yl.c,yl.c,[]),a.Qb(1073742336,T.v,T.v,[]),a.Qb(1073742336,T.s,T.s,[]),a.Qb(1073742336,X.d,X.d,[]),a.Qb(1073742336,Fl.b,Fl.b,[]),a.Qb(1073742336,Ml.a,Ml.a,[]),a.Qb(1073742336,Il.b,Il.b,[]),a.Qb(1073742336,kl.c,kl.c,[]),a.Qb(1073742336,Ll.a,Ll.a,[]),a.Qb(1073742336,Nl.b,Nl.b,[]),a.Qb(1073742336,zl.a,zl.a,[]),a.Qb(1073742336,$.e,$.e,[]),a.Qb(1073742336,Al.c,Al.c,[]),a.Qb(1073742336,Sl.d,Sl.d,[]),a.Qb(1073742336,q.k,q.k,[]),a.Qb(1073742336,B.c,B.c,[]),a.Qb(1073742336,Ul.k,Ul.k,[]),a.Qb(1073742336,Ol.b,Ol.b,[]),a.Qb(1073742336,Ol.a,Ol.a,[]),a.Qb(1073742336,_.c,_.c,[]),a.Qb(1073742336,Rl.d,Rl.d,[]),a.Qb(1073742336,Zl.c,Zl.c,[]),a.Qb(1073742336,ll.j,ll.j,[]),a.Qb(1073742336,T.z,T.z,[]),a.Qb(1073742336,T.p,T.p,[]),a.Qb(1073742336,jl.a,jl.a,[]),a.Qb(1073742336,Jl.a,Jl.a,[]),a.Qb(1073742336,Kl.e,Kl.e,[]),a.Qb(1073742336,il.h,il.h,[]),a.Qb(1073742336,al.h,al.h,[]),a.Qb(1073742336,U.w,U.w,[]),a.Qb(1073742336,U.k,U.k,[]),a.Qb(1073742336,Pl.h,Pl.h,[]),a.Qb(1073742336,Cl.a,Cl.a,[]),a.Qb(1073742336,Wl.a,Wl.a,[]),a.Qb(1073742336,bl.b,bl.b,[]),a.Qb(1073742336,N.o,N.o,[[2,N.t],[2,N.l]]),a.Qb(1073742336,U.t,U.t,[]),a.Qb(1073742336,Vl.a,Vl.a,[]),a.Qb(1073742336,Dl.a,Dl.a,[]),a.Qb(1073742336,El.a,El.a,[]),a.Qb(1073742336,Hl.a,Hl.a,[]),a.Qb(1073742336,Hl.b,Hl.b,[]),a.Qb(1073742336,rl.c,rl.c,[]),a.Qb(1073742336,Tl.c,Tl.c,[]),a.Qb(1073742336,Xl.a,Xl.a,[]),a.Qb(1073742336,Yl,Yl,[]),a.Qb(1073742336,t,t,[]),a.Qb(256,Nl.a,{separatorKeyCodes:[$l.f]},[]),a.Qb(256,T.g,T.k,[]),a.Qb(256,ql.a,Hl.c,[]),a.Qb(1024,N.j,(function(){return[[{path:"",component:L}]]}),[])])}))}}]);