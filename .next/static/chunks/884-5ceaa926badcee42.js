(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[884],{83544:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var i=t(85893),a=(t(67294),t(63272)),s=t(96215),u=function(){return(0,i.jsxs)(a.Z,{style:{marginTop:"10px"},children:[(0,i.jsx)(s.Link,{route:"/",children:(0,i.jsx)("a",{className:"item",children:"CrowdCoin"})}),(0,i.jsxs)(a.Z.Menu,{position:"right",children:[(0,i.jsx)(s.Link,{route:"/",children:(0,i.jsx)("a",{className:"item",children:"Campaigns"})}),(0,i.jsx)(s.Link,{route:"/campaigns/new",children:(0,i.jsx)("a",{className:"item",children:"+"})})]})]})},c=t(95712),r=t(9008),o=function(n){return(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(r.default,{children:(0,i.jsx)("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"})}),(0,i.jsx)(u,{}),n.children]})}},12889:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var i=t(1508),a=JSON.parse('{"w3":"[{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"deployedCampaigns\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getDeployedCampaigns\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"minimum\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"createCampaign\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}]"}'),s=new i.Z.eth.Contract(JSON.parse(a.w3),"0x18dEe2aD2C54f8F29EF148CC019f520D76a4421a")},1508:function(n,e,t){"use strict";var i,a=t(3283),s=t.n(a);if("undefined"!==typeof window.ethereum)window.ethereum.request({method:"eth_requestAccounts"}),i=new(s())(window.ethereum);else{var u=new(s().providers.HttpProvider)("https://rinkeby.infura.io/v3/d55c4f57b80445d284aa7754f355aaeb");i=new(s())(u)}e.Z=i},96215:function(n,e,t){"use strict";var i=t(37018)();i.add("/campaigns/new","/campaigns/new").add("/campaigns/:address","/campaigns/show").add("/campaigns/:address/requests","/campaigns/requests/index").add("/campaigns/:address/requests/new","/campaigns/requests/new"),n.exports=i},62859:function(){},75304:function(){},46601:function(){},89214:function(){},71922:function(){},2363:function(){},96419:function(){},56353:function(){},69386:function(){},31616:function(){},29120:function(){},46586:function(){},6567:function(){},69862:function(){},40964:function(){},71408:function(){},23646:function(){},56773:function(){},33557:function(){}}]);