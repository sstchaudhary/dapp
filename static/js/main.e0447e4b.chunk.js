(this.webpackJsonpfunding=this.webpackJsonpfunding||[]).push([[0],{1067:function(t,e){},1330:function(t,e){},1341:function(t,e){},1358:function(t,e,n){"use strict";n.r(e);var c=n(64),r=n.n(c),a=n(464),u=n.n(a),s=(n(478),n(1)),o=n(23),i=n(20),f=(n(479),n(465)),b=n.n(f),j=n(466),l=n.n(j),d=n(467),p=n.n(d),O=function(){var t=Object(o.a)(Object(s.a)().mark((function t(e,n){var c,r,a,u;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/contracts/".concat(e,".json"));case 2:return c=t.sent,t.next=5,c.json();case 5:return r=t.sent,(a=p()(r)).setProvider(n),t.next=10,a.deployed();case 10:return u=t.sent,t.abrupt("return",u);case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=n(54);var v=function(){var t=Object(c.useState)({provider:null,web3:null,contract:null}),e=Object(i.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(null),u=Object(i.a)(a,2),f=u[0],j=u[1],d=Object(c.useState)(null),p=Object(i.a)(d,2),v=p[0],x=p[1],w=Object(c.useState)(null),m=Object(i.a)(w,2),y=m[0],k=m[1],g=function(){return k(!y)};Object(c.useEffect)((function(){var t=function(){var t=Object(o.a)(Object(s.a)().mark((function t(){var e,n;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l()();case 2:return e=t.sent,t.next=5,O("Funder",e);case 5:n=t.sent,e?(e.request({method:"eth_requestAccounts"}),r({web3:new b.a(e),provider:e,contract:n})):console.error("please install meta mask");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),console.log(n.web3),Object(c.useEffect)((function(){var t=function(){var t=Object(o.a)(Object(s.a)().mark((function t(){var e,c,r;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.contract,c=n.web3,t.next=3,c.eth.getBalance(e.address);case 3:r=t.sent,x(c.utils.fromWei(r,"ether"));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();n.contract&&t()}),[n,y]),Object(c.useEffect)((function(){var t=function(){var t=Object(o.a)(Object(s.a)().mark((function t(){var e;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.web3.eth.getAccounts();case 2:e=t.sent,j(e[0]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();n.web3&&t()}),[n.web3]);var N=function(){var t=Object(o.a)(Object(s.a)().mark((function t(){var e,c;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.contract,c=n.web3,t.next=3,e.transfer({from:f,value:c.utils.toWei("0.000000000000000001","ether")});case 3:g();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(o.a)(Object(s.a)().mark((function t(){var e,c,r;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.contract,c=n.web3,r=c.utils.toWei("0.000000000000000001","ether"),t.next=4,e.withdraw(r,{from:f});case 4:g();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"card text-center",children:[Object(h.jsx)("div",{className:"card-header",children:"Funding"}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("h5",{className:"card-title",children:["Balance: ",v," ETH "]}),Object(h.jsxs)("p",{className:"card-text",children:["Account:",f||"not connected"]}),"\xa0",Object(h.jsx)("button",{type:"button",className:"btn btn-success ",onClick:N,children:"Transfer"}),"\xa0",Object(h.jsx)("button",{type:"button",className:"btn btn-primary ",onClick:S,children:"Withdraw"})]}),Object(h.jsx)("div",{className:"card-footer text-muted",children:"Sarvagya Chaudhary"})]})})};u.a.createRoot(document.getElementById("root")).render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(v,{})}))},478:function(t,e,n){},479:function(t,e,n){},542:function(t,e){},544:function(t,e){},547:function(t,e){},551:function(t,e){},552:function(t,e){},577:function(t,e){},579:function(t,e){},592:function(t,e){},594:function(t,e){},608:function(t,e){},623:function(t,e){},625:function(t,e){},637:function(t,e){},638:function(t,e){},713:function(t,e){},714:function(t,e){},822:function(t,e){}},[[1358,1,2]]]);
//# sourceMappingURL=main.e0447e4b.chunk.js.map