webpackJsonp([5],{31:function(t,e,r){"use strict";function i(t){r(59)}Object.defineProperty(e,"__esModule",{value:!0});var o=r(41),a=r(61),n=r(1),s=i,c=n(o.a,a.a,!1,s,"data-v-78142d3e",null);e.default=c.exports},41:function(t,e,r){"use strict";var i=r(6);e.a={name:"index",components:{},data:function(){return{projects:[{title:"Seismic Art",subtitle:"The Online Artist Alley",blurb:"Free eCommerce platform for independent creators",image:"statics/seismicart.png",link:"https://seismicart.com"},{title:"GraphQL-Sequelize-Boilerplate",subtitle:"Starter Kit for GraphQL and relational DBs",blurb:"Don't Repeat Yourself. Define a schema, and then let the boilerplate do the rest. Powered by Express, Relay",link:"https://github.com/cguo5520/graphql-sequelize-node-api-boilerplate"},{title:"Cryptocurrency Twitter Trader",subtitle:"Trade crypto via tweet",blurb:"Intuitive trading language. Protects you from mistrading by checking price. Works across multiple exchanges. Never worry about exchange downtime.",link:"https://github.com/cguo5520/crypto-twitter-trader"},{title:"Distributed Producer-Consumer System",subtitle:"For Neat.hk Interview",blurb:"Distributed system using semaphores, monitors, to solve a bounded buffer problem. Written in 3 days with no prior ruby experience.",link:"https://github.com/cguo5520/DistributedProducerConsumer"},{title:"Golang Data Structures",subtitle:"General Data Structures",blurb:"Personal Data Structures Practice in Golang",link:"https://github.com/cguo5520/goDsa"}]}},computed:{},methods:{launch:function(t){Object(i.l)(t)}},mounted:function(){},beforeDestroy:function(){}}},59:function(t,e,r){var i=r(60);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r(26)("441b96de",i,!0,null)},60:function(t,e,r){e=t.exports=r(25)(!1),e.push([t.i,'.about-box[data-v-78142d3e]{color:#000;margin-top:15px;margin-bottom:25px;font-weight:300;text-align:center;-webkit-perspective:800px;perspective:800px;position:absolute;top:100px;left:100px}.card[data-v-78142d3e]{overflow:"auto";color:"secondary";width:250px;padding:5px;margin:5px;margin-top:5px}',""])},61:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row about-box"},t._l(t.projects,function(e){return r("q-card",{staticClass:"shadow-3 card",on:{click:function(r){t.launch(e.link)}}},[r("q-card-title",[r("strong",[t._v(t._s(e.title))])]),t._v(" "),r("q-card-main",[r("p",[t._v(t._s(e.subtitle))]),t._v(" "),r("p",{staticClass:"text-faded"},[t._v(t._s(e.blurb))])]),t._v(" "),r("q-card-media",[r("img",{staticStyle:{width:"230px"},attrs:{src:e.image}})])],1)}))},o=[],a={render:i,staticRenderFns:o};e.a=a}});