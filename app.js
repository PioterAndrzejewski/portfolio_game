!function(e){function t(t){for(var r,a,s=t[0],l=t[1],u=t[2],d=0,h=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);h.length;)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={0:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push([7,1]),n()}([,function(e,t,n){"use strict";var r=n(4),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,'html,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: black;\r\n}\r\n\r\na {\r\n  all: unset;\r\n}\r\n\r\ndialog {\r\n  max-width: 600px;\r\n  padding: 0;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n@media (max-width: 1024px) and (orientation: landscape) {\r\n  dialog {\r\n    max-width: 90vw;\r\n    max-height: 95vh;\r\n  }\r\n}\r\n\r\n.modal {\r\n  padding: 40px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  box-shadow: 2px 2px 8px #444444;\r\n  background-color: #4d4641;\r\n  font-family: "Josefin Sans", sans-serif;\r\n  color: #f4ece7;\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .modal {\r\n    padding: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1024px) and (orientation: landscape) {\r\n  .modal {\r\n    display: grid;\r\n    grid-template-areas: "name description" "img description" "buttons buttons";\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 15vh 60vh 15vh;\r\n    padding: 10px;\r\n  }\r\n}\r\n\r\n.modal h2 {\r\n  margin: 0;\r\n  font-size: 44px;\r\n  font-family: "Josefin Sans", sans-serif;\r\n  font-weight: 100;\r\n  font-style: normal;\r\n  letter-spacing: 0.125em;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .modal h2 {\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1024px) and (orientation: landscape) {\r\n  .modal h2 {\r\n    font-size: 36px;\r\n    grid-area: name;\r\n  }\r\n}\r\n\r\n.modal ul {\r\n  padding-inline-start: 0;\r\n}\r\n\r\n@media (max-width: 1024px) and (orientation: landscape) {\r\n  .modal ul {\r\n    grid-area: img;\r\n    max-width: 40vw;\r\n    justify-self: center;\r\n    align-self: center;\r\n  }\r\n}\r\n\r\n.modal li {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 40px 0;\r\n  list-style: none;\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  li {\r\n    border-radius: 3px;\r\n  }\r\n}\r\n\r\n.modal img {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  height: auto;\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .modal img {\r\n    max-width: 300px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1024px) and (orientation: landscape) {\r\n  .modal .description {\r\n    padding: 0 20px;\r\n    grid-area: description;\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n.modal p {\r\n  padding: 0 80px;\r\n  line-height: 1.5;\r\n  font-size: 16px;\r\n  text-align: justify;\r\n  color: #f4ece7;\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .modal p {\r\n    padding: 0 40px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1024px) and (orientation: landscape) {\r\n  .modal p {\r\n    padding: 0 20px;\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n.modal footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 80px;\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .modal footer {\r\n    flex-direction: column;\r\n    padding: 0 40px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1024px) and (orientation: landscape) {\r\n  .modal footer {\r\n    grid-area: buttons;\r\n    max-height: 10vh;\r\n    align-self: center;\r\n  }\r\n}\r\n\r\n.modal a,\r\n.modal button {\r\n  font-weight: 600;\r\n  margin-right: 10px;\r\n  padding: 0;\r\n  line-height: 1.5;\r\n  font-size: 16px;\r\n  text-align: justify;\r\n  color: #8a7e4e;\r\n  background-color: #22273300;\r\n  box-shadow: none;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.modal a:hover,\r\n.modal button:hover {\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 2px -2px #8a7e4e;\r\n}\r\n\r\n.modal a.link-disabled:hover {\r\n  box-shadow: none;\r\n  cursor: unset;\r\n}\r\n\r\n.modal span {\r\n  font-size: 12px;\r\n}\r\n',""]),t.a=i},,,,function(e,t){var n,r,i=document.querySelector(".gallery"),o=!1;i.addEventListener("mousedown",(function(e){o=!0,i.classList.add("active"),n=e.pageX-i.offsetLeft,r=i.scrollLeft})),i.addEventListener("mouseleave",(function(e){o=!1,i.classList.remove("active")})),i.addEventListener("mouseup",(function(e){o=!1,i.classList.remove("active")})),i.addEventListener("mousemove",(function(e){if(o){e.preventDefault();var t=3*(e.pageX-i.offsetLeft-n);i.scrollLeft=r-t}}))},function(e,t){var n=function(){r=!1,i.forEach((function(e){return e.close()}));var e=new Event("resume");document.dispatchEvent(e),setTimeout((function(){r=!0}),1e3)},r=!0,i=document.querySelectorAll("dialog"),o=document.querySelectorAll(".resume-btn");document.querySelector("#configurator").showModal(),document.addEventListener("openModal",(function(e){r&&(document.dispatchEvent(new Event("canPause")),document.querySelector("#"+e.detail).showModal())})),o.forEach((function(e){return e.addEventListener("click",n)}))},function(e,t,n){"use strict";n.r(t);n(5),n(6);var r=n(3),i=n.n(r),o=n(1),a={insert:"head",singleton:!1},s=(i()(o.a,a),o.a.locals,n(0)),l=n.n(s),u={type:l.a.AUTO,parent:"game",backgroundColor:"#dae6ed",scale:{width:1200,height:600,mode:l.a.Scale.FIT,autoCenter:l.a.Scale.CENTER_BOTH},render:{pixelArt:!0,antialias:!1,autoRound:!0,roundPixels:!0},physics:{default:"arcade",arcade:{gravity:{y:750}}}},c=n(2),d=n.n(c);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var i=x(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(o,e);var t,n,r,i=b(o);function o(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r=i.call(this,e,t,n,"hero-run-sheet",0),e.add.existing(w(r)),e.physics.add.existing(w(r)),r.anims.play("hero-running"),r.body.setCollideWorldBounds(!0),r.body.setSize(12,40),r.body.setOffset(12,23),r.body.setMaxVelocity(250,400),r.body.setDragX(750),r.keys=e.cursorKeys,r.input={},r.setupAnimations(),r.setupMovement(),r.justJumped=!1,r.canJump=!0,r}return t=o,(n=[{key:"setupAnimations",value:function(){var e=this;this.animState=new d.a({init:"idle",transitions:[{name:"idle",from:["falling","running","pivoting"],to:"idle"},{name:"run",from:["falling","idle","pivoting"],to:"running"},{name:"pivot",from:["falling","running"],to:"pivoting"},{name:"jump",from:["idle","running","pivoting"],to:"jumping"},{name:"flip",from:["jumping","falling"],to:"flipping"},{name:"fall",from:["falling","idle","running","pivoting","jumping","flipping"],to:"falling"},{name:"die",from:"*",to:"dead"}],methods:{onEnterState:function(t){e.anims.play("hero-"+t.to)}}}),this.animPredicates={idle:function(){return e.body.onFloor()&&0===e.body.velocity.x},run:function(){return e.body.onFloor()&&Math.sign(e.body.velocity.x)===(e.flipX?-1:1)},pivot:function(){return e.body.onFloor()&&Math.sign(e.body.velocity.x)===(e.flipX?1:-1)},jump:function(){return e.body.velocity.y<0},flip:function(){return e.body.velocity.y<0&&e.moveState.is("flipping")},fall:function(){return e.body.velocity.y>0}}}},{key:"setupMovement",value:function(){var e=this;this.moveState=new d.a({init:"standing",transitions:[{name:"jump",from:"standing",to:"jumping"},{name:"flip",from:"jumping",to:"flipping"},{name:"fall",from:"standing",to:"falling"},{name:"touchdown",from:["jumping","flipping","falling"],to:"standing"},{name:"die",from:"*",to:"dead"}],methods:{onJump:function(){e.body.setVelocityY(-400)},onFlip:function(){e.body.setVelocityY(-300)},onDie:function(){e.body.setVelocity(0,-500),e.body.setAcceleration(0)}}}),this.movePredicates={jump:function(){return e.input.didPressJump},flip:function(){return e.input.didPressJump},fall:function(){return!e.body.onFloor()},touchdown:function(){return e.body.onFloor()}}}},{key:"kill",value:function(){this.moveState.die(),this.animState.die()}},{key:"isDead",value:function(){return this.moveState.is("dead")}},{key:"preUpdate",value:function(e,t){y(x(o.prototype),"preUpdate",this).call(this,e,t),this.canJump&&this.keys.up.isDown&&!this.justJumped&&(this.justJumped=!0,this.canJump=!1),this.input.didPressJump=!this.isDead()&&this.justJumped,this.justJumped&&(this.justJumped=!1),this.keys.up.isDown||(this.canJump=!0),!this.isDead()&&this.keys.left.isDown?(this.body.setAccelerationX(-1e3),this.setFlipX(!0),this.body.offset.x=8):!this.isDead()&&this.keys.right.isDown?(this.body.setAccelerationX(1e3),this.setFlipX(!1),this.body.offset.x=12):this.body.setAccelerationX(0),(this.moveState.is("jumping")||this.moveState.is("flipping"))&&!this.keys.up.isDown&&this.body.velocity.y<-150&&this.body.setVelocityY(-150);var n,r=p(this.moveState.transitions());try{for(r.s();!(n=r.n()).done;){var i=n.value;if(i in this.movePredicates&&this.movePredicates[i]()){this.moveState[i]();break}}}catch(e){r.e(e)}finally{r.f()}var a,s=p(this.animState.transitions());try{for(s.s();!(a=s.n()).done;){var l=a.value;if(l in this.animPredicates&&this.animPredicates[l]()){this.animState[l]();break}}}catch(e){s.e(e)}finally{s.f()}}}])&&m(t.prototype,n),r&&m(t,r),o}(l.a.GameObjects.Sprite);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var i=E(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return D(this,n)}}function D(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(o,e);var t,n,r,i=P(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),i.call(this,{key:"GameScene"})}return t=o,(n=[{key:"preload",value:function(){this.load.tilemapTiledJSON("level-1","assets/tilesets/level-1.json"),this.load.spritesheet("world-1-sheet","assets/tilesets/world-1.png",{frameWidth:32,frameHeight:32,margin:1,spacing:2}),this.load.image("cave-sheet","assets/tilesets/bg-cave.png"),this.load.image("project-sheet","assets/tilesets/project-sheet.png"),this.load.image("bg-sheet","assets/tilesets/bg-sheet.png"),this.load.image("cloud-sheet","assets/tilesets/cloud.png"),this.load.spritesheet("hero-idle-sheet","assets/hero/idle.png",{frameWidth:32,frameHeight:64}),this.load.spritesheet("hero-run-sheet","assets/hero/run.png",{frameWidth:32,frameHeight:64}),this.load.spritesheet("hero-pivot-sheet","assets/hero/pivot.png",{frameWidth:32,frameHeight:64}),this.load.spritesheet("hero-jump-sheet","assets/hero/jump.png",{frameWidth:32,frameHeight:64}),this.load.spritesheet("hero-flip-sheet","assets/hero/spinjump.png",{frameWidth:32,frameHeight:64}),this.load.spritesheet("hero-fall-sheet","assets/hero/fall.png",{frameWidth:32,frameHeight:64}),this.load.spritesheet("hero-die-sheet","assets/hero/bonk.png",{frameWidth:32,frameHeight:64}),this.load.css("style","./style.css"),this.load.plugin("rexvirtualjoystickplugin","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js",!0)}},{key:"create",value:function(e){var t=this;this.cursorKeys=this.input.keyboard.createCursorKeys(),this.anims.create({key:"hero-idle",frames:this.anims.generateFrameNumbers("hero-idle-sheet")}),this.anims.create({key:"hero-running",frames:this.anims.generateFrameNumbers("hero-run-sheet"),frameRate:10,repeat:-1}),this.anims.create({key:"hero-pivoting",frames:this.anims.generateFrameNumbers("hero-pivot-sheet")}),this.anims.create({key:"hero-jumping",frames:this.anims.generateFrameNumbers("hero-jump-sheet"),frameRate:10,repeat:-1}),this.anims.create({key:"hero-flipping",frames:this.anims.generateFrameNumbers("hero-flip-sheet"),frameRate:30,repeat:0}),this.anims.create({key:"hero-falling",frames:this.anims.generateFrameNumbers("hero-fall-sheet"),frameRate:10,repeat:-1}),this.anims.create({key:"hero-dead",frames:this.anims.generateFrameNumbers("hero-die-sheet")}),this.addMap(),this.addHero(),this.cameras.main.setBounds(0,0,this.map.widthInPixels-10,this.map.heightInPixels),this.cameras.main.startFollow(this.hero).setFollowOffset(0,70),this.physics.add.collider(this.hero,this.map.getLayer("Background-projects").tilemapLayer),this.linkGroup.forEach((function(e){t.physics.add.existing(e,!0),t.physics.add.collider(t.hero,e,(function(){return t.pauseGame(e)}))})),this.joyStick=this.plugins.get("rexvirtualjoystickplugin").add(this,{x:120,y:450,radius:100,base:this.add.circle(0,0,100,8947848),thumb:this.add.circle(0,0,50,13421772),dir:"8dir",enable:!0}).on("update",this.dumpJoyStickState,this),this.joyStick.base.setAlpha(.5),this.joyStick.thumb.setAlpha(.5),this.dumpJoyStickState()}},{key:"dumpJoyStickState",value:function(){var e=this.joyStick.createCursorKeys();e.left.isDown?this.hero.keys.left.isDown=!0:this.hero.keys.left.isDown=!1,e.right.isDown?this.hero.keys.right.isDown=!0:this.hero.keys.right.isDown=!1,e.up.isDown?this.hero.keys.up.isDown=!0:this.hero.keys.up.isDown=!1}},{key:"pauseGame",value:function(e){var t=this;document.dispatchEvent(new CustomEvent("openModal",{detail:e.linkTo})),document.addEventListener("canPause",(function(){t.scene.pause(),t.hero.keys.up.isDown=!1,t.hero.keys.left.isDown=!1,t.hero.keys.right.isDown=!1})),document.addEventListener("resume",(function(){t.scene.resume(),t.hero.keys.up.isDown=!1,t.hero.keys.left.isDown=!1,t.hero.keys.right.isDown=!1}))}},{key:"addHero",value:function(){this.hero=new k(this,420,100),this.physics.add.collider(this.hero,this.map.getLayer("Ground").tilemapLayer)}},{key:"addMap",value:function(){var e=this;this.map=this.make.tilemap({key:"level-1"});var t=this.map.addTilesetImage("world-1","world-1-sheet"),n=this.map.addTilesetImage("bg-cave","cave-sheet"),r=this.map.addTilesetImage("projects","project-sheet"),i=this.map.addTilesetImage("bg-sheet","bg-sheet"),o=this.map.addTilesetImage("Background-cloud","cloud-sheet"),a=this.map.createStaticLayer("Background-cloud",o),s=this.map.createStaticLayer("Background",i),l=(this.map.createStaticLayer("Background-cave",n),this.map.createStaticLayer("Ground",t));this.map.createStaticLayer("Background-projects",r),a.setScrollFactor(.8),s.setScrollFactor(.9),l.setCollision([1,2],!0),this.physics.world.setBounds(0,0,this.map.widthInPixels,this.map.heightInPixels),this.physics.world.setBoundsCollision(!0,!0,!1,!0),this.spikeGroup=this.physics.add.group({immovable:!0,allowGravity:!1}),this.linkGroup=[],this.map.getObjectLayer("Objects").objects.forEach((function(t){if(7===t.gid){var n=e.spikeGroup.create(t.x,t.y,"world-1-sheet",t.gid-1);n.setOrigin(0,1),n.setSize(t.width-10,t.height-10)}if("link"===t.type){var r=e.add.rectangle(t.x+t.width/2,t.y+t.height/2,t.width,t.height,"rgba(0, 0, 0, 0.1)");r.setAlpha(.01),r.linkTo=t.name,e.linkGroup.push(r)}}))}},{key:"update",value:function(e,t){}}])&&S(t.prototype,n),r&&S(t,r),o}(l.a.Scene);new l.a.Game(Object.assign(u,{scene:[L]}))}]);