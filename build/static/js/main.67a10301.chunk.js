(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{133:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return g}));var r=n(1),c=n.n(r),a=n(4),i=n(32),o=n(64),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),b=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,b,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>3&&void 0!==l[3]?l[3]:"recent",o=l.length>4&&void 0!==l[4]&&l[4],s=!1,u={slot:0,confirmations:0,err:null},b=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(l,f){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),f({timeout:!0}))}),n);try{b=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),f(u)):(console.log("Resolved via websocket",e),l(u))}),i)}catch(p){s=!0,console.error("WS error in setup",t,p)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,f(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,l(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,h(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[b]&&r.removeSignatureListener(b),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),f=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},p=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,b,l,f,p,d,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),b={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return l=e.sent,f=l.data.itemsAvailable.toNumber(),p=l.itemsRedeemed.toNumber(),d=f-p,m=l.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:f,itemsRedeemed:p,itemsRemaining:d,goLiveDate:m}),e.abrupt("return",{candyMachine:b,itemsAvailable:f,itemsRedeemed:p,itemsRemaining:d,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer(),e.from("edition")],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,l,p,x,g,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,l=t.connection,p=t.program,e.next=7,m(s.publicKey);case 7:return x=e.sent,e.next=10,d(s.publicKey);case 10:return g=e.sent,e.next=13,l.getMinimumBalanceForRentExemption(o.a.span);case 13:return h=e.sent,e.next=16,p.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:x,masterEdition:g,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:b,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:h,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),f(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},h=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},352:function(e,t,n){},353:function(e,t,n){},354:function(e,t,n){},355:function(e,t){},357:function(e,t){},373:function(e,t){},374:function(e,t){},407:function(e,t){},463:function(e,t){},465:function(e,t){},479:function(e,t){},483:function(e,t){},485:function(e,t){},495:function(e,t){},497:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},541:function(e,t){},553:function(e,t){},556:function(e,t){},568:function(e,t){},569:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(2),s=n.n(o),u=n(29),b=n.n(u),l=(n(352),n(353),n(12)),f=n(1),p=n.n(f),d=n(4),m=n(13),j=n(132),x=n(134),g=n(596),h=n(604),O=n(603),y=(n(354),n(14)),v=n(52),S=n(175),w=n(133),k=n(27),A=Object(x.a)(S.a)(r||(r=Object(j.a)([""]))),P=(x.a.span(c||(c=Object(j.a)([""]))),x.a.div(a||(a=Object(j.a)([""])))),R=(Object(x.a)(g.a)(i||(i=Object(j.a)([""]))),function(e){var t=Object(o.useState)(),n=Object(m.a)(t,2),r=n[0],c=n[1],a=Object(o.useState)(!1),i=Object(m.a)(a,2),s=(i[0],i[1],Object(o.useState)(!1)),u=Object(m.a)(s,2),b=(u[0],u[1]),f=Object(o.useState)(!1),j=Object(m.a)(f,2),x=(j[0],j[1],Object(o.useState)(0)),g=Object(m.a)(x,2),S=(g[0],g[1]),R=Object(o.useState)(0),T=Object(m.a)(R,2),K=(T[0],T[1]),L=Object(o.useState)(0),B=Object(m.a)(L,2),E=(B[0],B[1]),C=Object(o.useState)({open:!1,message:"",severity:void 0}),M=Object(m.a)(C,2),I=M[0],W=M[1],D=Object(o.useState)(new Date(e.startDate)),N=Object(m.a)(D,2),Y=(N[0],N[1]),V=Object(v.c)(),_=Object(o.useState)(),F=Object(m.a)(_,2),Z=(F[0],F[1]),q=function(){Object(d.a)(p.a.mark((function t(){var n,r,c,a,i,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(V){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(w.b)(V,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,S(a),E(i),K(o),b(0===i),Y(c),Z(r);case 16:case"end":return t.stop()}}),t)})))()};return Object(o.useEffect)((function(){Object(d.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!V){t.next=5;break}return t.next=3,e.connection.getBalance(V.publicKey);case 3:n=t.sent,c(n/y.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[V,e.connection]),Object(o.useEffect)(q,[V,e.candyMachineId,e.connection]),Object(k.jsxs)("main",{children:[Object(k.jsx)("a",{href:"https://discord.gg/DA66tre4bV",children:Object(k.jsx)("img",{src:"https://i.imgur.com/Ts4m4ad.png",style:{width:"45px",height:"45px",position:"absolute",left:"15px",top:"20px"}})}),Object(k.jsx)("a",{href:"https://twitter.com/SolanaCityNFT",children:Object(k.jsx)("img",{src:"https://i.imgur.com/yLmYRXw.png",style:{width:"40px",height:"40px",position:"absolute",left:"105px",top:"20px"}})}),Object(k.jsxs)("div",{className:"wallet",children:[V&&Object(k.jsxs)("h4",{style:{color:"black",position:"relative",top:"10px"},children:["Wallet ",Object(w.d)(V.publicKey.toBase58()||"")]}),V&&Object(k.jsxs)("p",{style:{color:"black",position:"relative",bottom:"10px",fontSize:"16px"},children:["Balance: ",(r||0).toLocaleString()," SOL"]})]}),Object(k.jsxs)("div",{className:"box",children:[V&&Object(k.jsx)("h1",{style:{textAlignLast:"center",fontSize:"70px",position:"relative",top:"20px"},children:"0/10000"}),Object(k.jsx)("h2",{style:{textAlignLast:"center"},children:" PRICE: 0.2 SOL"}),Object(k.jsx)("h2",{style:{textAlignLast:"center"},children:" CONTRACT: "}),Object(k.jsx)("div",{className:"Gif",style:{position:"relative"},children:!V&&Object(k.jsx)("img",{src:"https://i.imgur.com/5rV3hWn.gif"})}),Object(k.jsx)(P,{children:V?Object(k.jsx)("h2",{style:{position:"relative",color:"black",left:"145px"},children:"NOT YET"}):Object(k.jsx)(A,{style:{backgroundColor:"#FAEDDA",color:"black",left:"133px",bottom:"460px",position:"relative"},children:"Connect Wallet"})})]}),Object(k.jsx)(h.a,{open:I.open,autoHideDuration:6e3,onClose:function(){return W(Object(l.a)(Object(l.a)({},I),{},{open:!1}))},children:Object(k.jsx)(O.a,{onClose:function(){return W(Object(l.a)(Object(l.a)({},I),{},{open:!1}))},severity:I.severity,children:I.message})})]})}),T=n(32),K=n(116),L=n(339),B=n(601),E=new T.d.PublicKey("974Mafj578qrR1nAYD2nSPgoeZGNVmphwhAmS5mTEpnu"),C=new T.d.PublicKey("9CLsd5qfmsaLLLzeEiWga8jDYZ9a4Kk4AbCNK8CwZqQ9"),M=new T.d.PublicKey("271zoeMkYA7ASbZZfZQFuTVyQWyVHgfuTTyrsLRdUSeW"),I="devnet",W=new T.d.Connection("https://explorer-api.devnet.solana.com"),D=parseInt("983401200",10),N=Object(L.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),Y=function(){var e=Object(o.useMemo)((function(){return Object(y.clusterApiUrl)(I)}),[]),t=Object(o.useMemo)((function(){return[Object(K.a)(),Object(K.b)(),Object(K.c)(),Object(K.e)({network:I}),Object(K.d)({network:I})]}),[]);return Object(k.jsx)(B.a,{theme:N,children:Object(k.jsx)(v.a,{endpoint:e,children:Object(k.jsx)(v.b,{wallets:t,autoConnect:!0,children:Object(k.jsx)(S.b,{children:Object(k.jsx)(R,{candyMachineId:M,config:C,connection:W,startDate:D,treasury:E,txTimeout:3e4})})})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,605)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};b.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(Y,{})}),document.getElementById("root")),V()}},[[569,1,2]]]);
//# sourceMappingURL=main.67a10301.chunk.js.map