(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{76306:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campaigns/requests/new",function(){return n(43606)}])},43606:function(e,t,n){"use strict";n.r(t);var r=n(28520),i=n.n(r),o=n(85893),s=n(67294),a=n(75424),u=n(60416),c=n(68156),l=n(80967),f=n(14148),p=n(1508),h=n(96215),d=n(83544);function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t,n,r,i,o,s){try{var a=e[o](s),u=a.value}catch(c){return void n(c)}a.done?t(u):Promise.resolve(u).then(r,i)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function s(e){b(o,r,i,s,a,"next",e)}function a(e){b(o,r,i,s,a,"throw",e)}s(void 0)}))}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?v(e):t}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function Z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var i=j(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return w(this,n)}}var S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(b,e);var t,n,r,s=Z(b);function b(){var e;return g(this,b),x(v(e=s.apply(this,arguments)),"state",{value:"",description:"",recipient:"",loading:!1,errorMessage:""}),x(v(e),"onSubmit",y(i().mark((function e(t){var n,r,o,s,a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=(0,f.Z)(this.props.address),r=this.state,o=r.description,s=r.value,a=r.recipient,this.setState({loading:!0,errorMessage:""}),e.prev=4,e.next=7,p.Z.eth.getAccounts();case 7:return u=e.sent,e.next=10,n.methods.createRequest(o,p.Z.utils.toWei(s,"ether"),a).send({from:u[0]});case 10:h.Router.pushRoute("/campaigns/".concat(this.props.address,"/requests")),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),this.setState({errorMessage:e.t0.message});case 16:this.setState({loading:!1});case 17:case"end":return e.stop()}}),e,this,[[4,13]])})).bind(e)).bind(v(e))),e}return t=b,r=[{key:"getInitialProps",value:function(e){return y(i().mark((function t(){var n,r,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query.address,r=(0,f.Z)(n),t.next=4,r.methods.getSummary().call();case 4:return o=t.sent,t.abrupt("return",{address:n,minimumContribution:o[0],balance:o[1],requestsCount:o[2]});case 6:case"end":return t.stop()}}),t)})))()}}],(n=[{key:"render",value:function(){var e=this,t=this,n=this;return(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(h.Link,{route:"/campaigns/".concat(this.props.address,"/requests"),children:(0,o.jsx)("a",{children:"Back"})}),(0,o.jsx)("h3",{children:"Create a Request"}),(0,o.jsxs)(a.Z,{onSubmit:this.onSubmit,error:!!this.state.errorMessage,children:[(0,o.jsxs)(a.Z.Field,{children:[(0,o.jsx)("label",{children:"Description"}),(0,o.jsx)(u.Z,{value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})}})]}),(0,o.jsxs)(a.Z.Field,{children:[(0,o.jsx)("label",{children:"Value"}),(0,o.jsx)(u.Z,{value:this.state.value,onChange:function(e){return t.setState({value:e.target.value})}})]}),(0,o.jsxs)(a.Z.Field,{children:[(0,o.jsx)("label",{children:"Recipient"}),(0,o.jsx)(u.Z,{value:this.state.recipient,onChange:function(e){return n.setState({recipient:e.target.value})}})]}),(0,o.jsx)(c.Z,{error:!0,header:"Oops!",content:this.state.errorMessage}),(0,o.jsx)(l.Z,{primary:!0,loading:this.state.loading,children:"Create!"})]})]})}}])&&m(t.prototype,n),r&&m(t,r),b}(s.Component);t.default=S}},function(e){e.O(0,[774,482,406,578,416,888,179],(function(){return t=76306,e(e.s=t);var t}));var t=e.O();_N_E=t}]);