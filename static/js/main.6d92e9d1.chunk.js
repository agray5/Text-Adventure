(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t){},127:function(e,t){},140:function(e,t,n){e.exports=n(204)},145:function(e,t,n){},161:function(e,t){},200:function(e,t,n){var r={"./description.json":201,"./room.json":202,"./scene.json":203};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=200},201:function(e){e.exports=[{name:"field_intro",next:"field_standard",text:["You stand waist deep in a field of flowers. Their long stalks sway in ","the breeze, forming violet waves that gently brush against you. ","A normal person may have been overwhelmed by the strong sharp scent ","but have little effect on you after years spent gathering herbs and crafting medicines. ","The nearly brimming basket beside you and the setting sun nag out you to go back inside. ","Still your gloved hand reaches to gather more. When winter strikes what can be harvested ","naturally is very limited and you often have to rely on your stores. Lacking even a single ","needed herb could be devastating for the village. ",".... \n","Your fingers have passed the point of simply aching awhile ago. The sky is transitioning from ","its earlier pinkish hue into the darker tones of the night sky and you are forced to admit that your time is up.","Even so, the sight of the overflowing stack of flora you've gathered fills your chest with pride, even the slightest ","jostle would send it toppling! Covering the top of the basket carefully with your free hand you decide to make your way home."]},{name:"field_standard",text:["You stand in a field of purple sage stretching out about an acre. ","Each gust of wind sends waves rippling throughout the stalky plants. At the ","edge of the field to the west sits a charming cottage that you call home. Along ","the opposite way, to the east, grand oaks fill your view. An inky blackness between ","their trunks obscure any hidden treasures."]},{name:"forest_standard",text:["You hesitantly take a few steps into into the forested depths. The trees are ","densely packed, their branches overlapping, blocking out but the faintest traces of sunlight. "]},{name:"home_standard",text:["You are inside a house."]}]},202:function(e){e.exports=[{name:"Field",exits:{E:"Forest",W:"Home"},description:"field_intro"},{name:"Forest",exits:{W:"Home"},description:"forest_standard"},{name:"Home",exits:{E:"Field"},description:"home_standard"}]},203:function(e){e.exports=[{name:"town_edge",rooms:["Field","Forest","Home"]}]},204:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),o=n(66),i=n.n(o),c=(n(145),n(47)),s=n(12),u=n(15),l=n(22),h=n(18),f=n(21),d=n(54),p=n(44),m={colors:{background:"#967bb6",links:"#665d1e",text:"#3a1f04"}},b=n(39),v=n(120),y=n.n(v),g=n(121),w=n.n(g),O=n(62),j=n(209),k=n(212),x=n(210),E=n(20),C=n.n(E),T=n(30),R=n(211),_=n(206),A=n(213),S=n(207),D=n(208);function N(e,t){this.only=t,this.tag=e,this.i=0}N.prototype.log=function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(!this.only||this.only&&this.i===this.only)&&(e=console).log.apply(e,["tag: ",this.tag,"i: ",this.i].concat(n)),this.i++};var q=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.every(function(e){return void 0!==e&&null!==e})},L=function(){var e=Object(T.a)(C.a.mark(function e(t,n){var r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<t.length)){e.next=7;break}return e.next=4,n(t[r],r,t);case 4:r++,e.next=1;break;case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),M=function e(t,n,r){Object(s.a)(this,e),this.managers=t,this.database=n,this.world=r};function F(e,t){this.text=t}function W(e,t){this.room=t}function I(e){}function P(e,t){this.capacity=t}function H(e){}function U(e,t,n){this.container=t,this.weight=n}function Y(e,t){this.label=t}function B(e,t,n,r){this.dir=r,this.link=n,this.backwardLink=t}function z(e,t,n){return e.createEntity().addComponent(Y,t).addComponent(F,n).addTag("room")}var J,X,V=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"loadScene",value:function(){var e=Object(T.a)(C.a.mark(function e(t){var n,r,a=this;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.managers.DataManager.get("scene",t).catch(function(e){return console.log("ERROR:",e.message)});case 2:return n=e.sent,r={},e.t0=L,e.next=7,n.rooms_;case 7:return e.t1=e.sent,e.t2=function(){var e=Object(T.a)(C.a.mark(function e(t){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.description_;case 2:n=e.sent,console.log("room.name",t,t.name),r[t.name]={room:z(a.world,t.name,n.text.join("")),exits:(o=function(e,t){return void 0!==t},i=t.exits,Object(R.a)(_.a,Object(A.a)(Object(S.a)(o)),D.a)(i))};case 5:case"end":return e.stop()}var o,i},e,this)}));return function(t){return e.apply(this,arguments)}}(),e.next=11,(0,e.t0)(e.t1,e.t2);case 11:return console.log("Room Map",r),Object(j.a)(function(e,t){Object(j.a)(function(t,n){var o,i,c,s;o=a.world,i=e.room,c=r[t].room,s=n,o.createEntity().addComponent(Y,c.name.label).addComponent(B,i,c,s).addTag("exit")},e.exits)},r),e.abrupt("return",this);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(M),$=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"get",value:function(){var e=Object(T.a)(C.a.mark(function e(t,n){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.database[t].findOne(n).exec().catch(function(e){return console.log(e.message)}));case 1:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}]),t}(M),G=(n(114),function(){function e(t,n){Object(s.a)(this,e),this.managers=t,this.world=n}return Object(u.a)(e,[{key:"update",value:function(e,t){return t}},{key:"isTriggered",value:function(e,t){return!0}},{key:"getCurrRoom",value:function(){return this.world.queryTag("player")[0].presence.room}}]),e}()),K=(new N("Room System"),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"update",value:function(e,t){return this.currRoom=this.moveTo(this.world.queryTag("player")[0],t.events.moveTo),t}},{key:"isTriggered",value:function(e,t){return!!t.events.moveTo}},{key:"moveTo",value:function(e,t){if(!e.hasComponent(W))return!1;var n=this.world.queryTag("room").filter(function(e){return e.name.label===t});return e.presence.room=n[0],n}}]),t}(G)),Q=n(69),Z=n(138),ee=n(71),te=n.n(ee),ne=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=function(e,t){var n=oe(e,!0),r=n.nlp.articles()[0].article;return t?{article:r,noun:n.noun}:r}(e,!0),r=n.article+" ";return t&&"the"===n.article&&(r=""),"".concat(r).concat(n.noun)},re=function(e,t){var n,r=te()(e).match("#pronoun").data();if(r.length>0){switch(r[0].text.toLowerCase()){case"i":n="am";break;case"you":case"we":case"they":n="are";break;default:n="is"}return t?{noun:r[0].text,toBe:n}:n}var a=ae(e,!0);return n=a.isPlural?"are":"is",t?{noun:a.noun,toBe:n}:n},ae=function(e,t){var n=oe(e,!0),r=n.nlp.isPlural().data().length;return t?{noun:n.noun,isPlural:r}:r},oe=function(e,t){var n=te()(e),r=n.nouns(0).data();if(0===r.length)throw new ie(e);return t?{noun:r[0].text,nlp:n.nouns(0)}:r[0].text},ie=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,"No noun was found in text: '".concat(e,"'")))).name="NoNounError",n}return Object(f.a)(t,e),t}(Object(Z.a)(Error)),ce=(new N("SightSystem",0),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"update",value:function(e,t){var n=this.describeRoom(this.getCurrRoom());return Object(Q.setIn)(t,["world","description"],n)}},{key:"isTriggered",value:function(e,t){return!!t.events.actions.look}},{key:"describeRoom",value:function(e){return e||(e=this.getCurrRoom()),this.appendDescription(e.description.text,e)}},{key:"appendDescription",value:function(e,t){var n=e,r=this.entitiesInRoom(this.world,t);for(var a in r)a!==this.world.queryTag("player")[0]&&(a.hasComponent(I)&&(n+=this.describe(a)),n+="\n".concat(this.describeContainerContents(a)));return n}},{key:"describeContainerContents",value:function(e){if(!e.hasComponent(P))return"";var t=e.name.label||"nearby container",n=e.name.label?"The":"A",r=this.listContainerContents(e);return r.length<0?"":"".concat(n," ").concat(t," contains:\n  ").concat(r.join("\n  "))}},{key:"listContainerContents",value:function(e){var t=this;return e.hasComponent(P)?e.hasComponent(H)&&!e.openable.isOpen?[]:this.fetchContainedEntities(this.world,e).map(function(e){return t.describe(t.world,e,!0)}):[]}},{key:"fetchContainedEntities",value:function(e){return this.world.queryComponents([U]).filter(function(t){return t.containable.container===e})}},{key:"entitiesInRoom",value:function(e){return e||(e=this.getCurrRoom()),this.world.queryComponents([W]).filter(function(t){return t===e})}}],[{key:"describe",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.hasComponent(F)&&e.description.inRoom&&(t=e.description.inRoom),t&&!n||!e.hasComponent(Y)||(t="\nThere ".concat(re(e.name.label)," ").concat(ne(e.name.label,!0)[0]," here.")),t||"unknown object"}}]),t}(G)),se=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"update",value:function(e,t){var n=this.getCurrRoom(),r=this.world.queryTag("exit").filter(function(e){return e.portal.backwardLink===n}).map(function(e){return e.name.label});return Object(Q.setIn)(t,["world","exitNames"],r)}},{key:"isTriggered",value:function(e,t){return!!t.events.moveTo}}]),t}(G),ue=[function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.apply(void 0,r.concat(n))}}(function(e){return function(e,t,n){return e.createEntity().addComponent(Y,t).addComponent(W,n).addTag("actor")}(e,"player","undefinedRoom").addTag("player")})],le=[K,ce,se],he={SceneManager:V,DataManager:$},fe={events:{moveTo:"Home",actions:{look:!0}},world:{description:"",exitNames:[]}},de={},pe=function(){function e(t){var n=t.database,r=t.callback,a=t.managers,o=void 0===a?he:a,i=t.systems,c=void 0===i?le:i,u=t.entities,l=void 0===u?ue:u;if(Object(s.a)(this,e),!q(n))throw new Error("Database must be defined");if(e.instance)return e.instance;X=w()(),e.instance=this,console.log("AM LOAD New WOrld"),Object(j.a)(function(e,t){de[t]=new e(de,n,X)},o),J=Object(k.a)(function(e){return new e(de,X)},c),l=Object(x.a)(function(e){return e(X)},l),de.SceneManager.loadScene("town_edge").then(function(e){return"function"===typeof r?r():""}).catch(function(e){return console.log("ERROR:",e.message)})}return Object(u.a)(e,null,[{key:"getState",value:function(){return Object.assign({},fe)}}]),e}();pe.update=function(e){J.forEach(function(t){t.isTriggered(e,fe)&&(fe=t.update(e,fe))}),fe.events={actions:{}}},pe.takeAction=function(e){fe.events.actions[e]=!0},pe.triggerEvent=function(e,t){fe.events[e]=t};var me=pe,be=me.getState().world,ve=Object(b.c)({world:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE":return t.payload;default:return e}}}),ye=[y.a],ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,we=Object(b.e)(ve,{},ge(b.a.apply(void 0,ye))),Oe=function(e){return a.a.createElement("div",{className:"TextWindow"},e.children)},je=function(e){me.triggerEvent("moveTo",e),me.takeAction("look")};function ke(){var e=Object(c.a)(["\n    margin-top: 0;\n    & p {\n        white-space: pre-line;\n    }\n"]);return ke=function(){return e},e}var xe=p.b.div(ke()),Ee=function(e){return a.a.createElement(xe,{className:"Description"},a.a.createElement("p",null,e.description))};function Ce(){var e=Object(c.a)(["\n  margin-top: 0;\n"]);return Ce=function(){return e},e}var Te=p.b.ul(Ce()),Re=function(e){return a.a.createElement(Te,{className:"Exits"},e.exits.map(function(t,n){return a.a.createElement("li",{key:n,onClick:e.handleClick.bind(void 0,t)},t)}))},_e=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(Re,this.props)}}]),t}(a.a.Component),Ae=Object(d.b)(function(e){return{exits:e.world.exitNames}},function(e){return{handleClick:function(e){je(e)}}})(_e),Se=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(Oe,null,a.a.createElement(Ae,null),a.a.createElement(Ee,{description:this.props.desc}))}}]),t}(a.a.Component),De=Object(d.b)(function(e){return{desc:e.world.description}})(Se),Ne=n(136),qe=n.n(Ne),Le=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"onAnimationFrame",value:function(e,t){var n=e-t;this.props.store.dispatch(function(e){return me.update(e),{type:"UPDATE",payload:me.getState().world}}(n))}},{key:"render",value:function(){return null}}]),t}(a.a.Component),Me=qe()(Le,1e3);function Fe(){var e=Object(c.a)(["\n    height: 100%;\n    width: 100%;\n    margin-top: 0;\n    position: absolute;\n    top: 0;\n    background: ","\n"]);return Fe=function(){return e},e}var We=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(p.a,{theme:m},a.a.createElement(d.a,{store:we},a.a.createElement(Ie,{className:"App"},a.a.createElement(Me,{store:we}),a.a.createElement(De,null))))}}]),t}(r.Component),Ie=p.b.div(Fe(),function(e){return e.theme.colors.background}),Pe=We;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var He=[{name:"scene",schema:{version:0,type:"object",properties:{name:{type:"string",primary:!0},rooms:{type:"array",uniqueItems:!0,ref:"room",items:{type:"string"}}}}},{name:"room",schema:{version:0,type:"object",properties:{name:{type:"string",primary:!0},description:{type:"string",ref:"description"},exits:{type:"object",properties:{N:{type:"string",ref:"room",optional:!0},E:{type:"string",ref:"room",optional:!0},S:{type:"string",ref:"room",optional:!0},W:{type:"string",ref:"room",optional:!0}}},flags:{type:"object",properties:{hasEntered:{type:"boolean",default:!1}}}},required:["description"]}},{name:"description",schema:{version:0,type:"object",properties:{name:{type:"string",primary:!0},text:{type:"array",item:{type:"string"}},next:{type:"string",ref:"description"}},required:["text"]}}],Ue=null,Ye=function(){var e=Object(T.a)(C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O.b(n(205)),"idb",console.log("DatabaseService: creating database.."),e.next=5,O.a({name:"apothecary_game",adapter:"idb"});case 5:return t=e.sent,console.log("DatabaseService: created database"),console.log("DatabaseService: create collections"),e.next=10,Promise.all(He.map(function(e){return t.collection(e)}));case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=Object(T.a)(C.a.mark(function e(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Ue){e.next=4;break}return e.next=3,Ye();case 3:Ue=e.sent;case 4:return e.abrupt("return",Ue);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),ze=function(){var e=Object(T.a)(C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Be();case 2:return t=e.sent,e.next=5,t.getLocal("initialized");case 5:if(!e.sent){e.next=7;break}return e.abrupt("return",t);case 7:return["scene","room","description"].forEach(function(e){return Je(e,t)}),e.next=10,t.insertLocal("initialized",{isTrue:!0});case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),Je=function(e,t){n(200)("./".concat(e,".json")).forEach(function(n){return t[e].insert(n)})};ze().then(function(e){new me({database:e,callback:Xe})});var Xe=function(){console.log("AM LOAD"),i.a.render(a.a.createElement(Pe,null),document.getElementById("root"))};"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[140,2,1]]]);
//# sourceMappingURL=main.6d92e9d1.chunk.js.map