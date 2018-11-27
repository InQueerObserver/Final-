!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/",r(r.s=24)}({0:function(e,t){e.exports=jQuery},1:function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},24:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=r(25),n=r.n(t);e(window).on("load",function(){var t={input:"#search-field",results:"#searchResults",on:{beforeFetch:function(){e("body").addClass("is-loading")},afterFetch:function(){setTimeout(function(){e("body").removeClass("is-loading")},4e3)}}};"object"==typeof searchSettings&&null!==searchSettings&&Object.assign(t,searchSettings),e(".search-toggle").on("click",function(t){t.preventDefault(),e("body").toggleClass("is-search").removeClass("is-showNavMob")}),new n.a(t)})}.call(t,r(0))},25:function(e,t,r){var n=r(26),i=function(e){this.check=!1;var t={input:"#ghost-search-field",results:"#ghost-search-results",button:"",development:!1,template:function(e){return'<a href="'+[location.protocol,"//",location.host].join("")+"/"+e.slug+'/">'+e.title+"</a>"},trigger:"focus",options:{keys:["title"],limit:10,threshold:-3500,allowTypo:!1},api:{resource:"posts",parameters:{limit:"all",fields:["title","slug"],filter:"",include:"",order:"",formats:""}},on:{beforeDisplay:function(){},afterDisplay:function(e){},beforeFetch:function(){},afterFetch:function(e){}}},r=this.mergeDeep(t,e);Object.assign(this,r),this.init()};i.prototype.mergeDeep=function(e,t){var r=this;return e&&"object"==typeof e&&!Array.isArray(e)&&null!==e&&t&&"object"==typeof t&&!Array.isArray(t)&&null!==t&&Object.keys(t).forEach(function(n){if(t[n]&&"object"==typeof t[n]&&!Array.isArray(t[n])&&null!==t[n]){var i;if(!e[n])Object.assign(e,((i={})[n]={},i));r.mergeDeep(e[n],t[n])}else{var o;Object.assign(e,((o={})[n]=t[n],o))}}),e},i.prototype.url=function(){"posts"==this.api.resource&&this.api.parameters.include.match(/(tags|authors)/)&&delete this.api.parameters.fields;var e=ghost.url.api(this.api.resource,this.api.parameters);return e},i.prototype.fetch=function(){var e=this,t=this.url();this.on.beforeFetch(),fetch(t).then(function(e){return e.json()}).then(function(t){return e.search(t)}).catch(function(e){})},i.prototype.createElementFromHTML=function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild},i.prototype.cleanup=function(e){return e.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"-")},i.prototype.displayResults=function(e){if(null!==document.querySelectorAll(this.results)[0].firstChild&&""!==document.querySelectorAll(this.results)[0].firstChild)for(;document.querySelectorAll(this.results)[0].firstChild;)document.querySelectorAll(this.results)[0].removeChild(document.querySelectorAll(this.results)[0].firstChild);var t=document.querySelectorAll(this.input)[0].value,r=n.go(t,e,{keys:this.options.keys,limit:this.options.limit,allowTypo:this.options.allowTypo,threshold:this.options.threshold});for(var i in r)i<r.length&&document.querySelectorAll(this.results)[0].appendChild(this.createElementFromHTML(this.template(r[i].obj)));this.on.afterDisplay(r)},i.prototype.search=function(e){var t=this,r=e[this.api.resource];if(this.on.afterFetch(r),this.check=!0,""!=this.button){var n=document.querySelectorAll(this.button)[0];"INPUT"==n.tagName&&"submit"==n.type&&n.closest("form").addEventListener("submit",function(e){e.preventDefault()}),n.addEventListener("click",function(e){e.preventDefault(),t.on.beforeDisplay(),t.displayResults(r)})}else document.querySelectorAll(this.input)[0].addEventListener("keyup",function(){t.on.beforeDisplay(),t.displayResults(r)})},i.prototype.checkGhostAPI=function(){return"undefined"!=typeof ghost},i.prototype.checkElements=function(){return!!document.querySelectorAll(this.input).length&&(!!document.querySelectorAll(this.results).length&&!(""!=this.button&&!document.querySelectorAll(this.button).length))},i.prototype.checkFields=function(){var e=[];"posts"==this.api.resource?e=["amp","authors","codeinjection_foot","codeinjection_head","comment_id","created_at","created_by","custom_excerpt","custom_template","feature_image","featured","html","id","locale","meta_description","meta_title","mobiledoc","og_description","og_image","og_title","page","plaintext","primary_author","primary_tag","published_at","published_by","slug","status","tags","title","twitter_description","twitter_image","twitter_title","updated_at","updated_by","url","uuid","visibility"]:"tags"==this.api.resource?e=["count","created_at","created_by","description","feature_image","id","meta_description","meta_title","name","parent","slug","updated_at","updated_by","visibility"]:"users"==this.api.resource&&(e=["accessibility","bio","count","cover_image","facebook","id","locale","location","meta_description","meta_title","name","profile_image","slug","tour","twitter","visibility","website"]);for(var t=0;t<this.api.parameters.fields.length;t++)e.includes(this.api.parameters.fields[t])},i.prototype.checkFormats=function(){if("posts"==this.api.resource&&this.api.parameters.fields&&"object"==typeof this.api.parameters.fields&&this.api.parameters.fields.constructor===Array)for(var e=0;e<this.api.parameters.fields.length;e++)!this.api.parameters.formats.includes(this.api.parameters.fields[e])&&this.api.parameters.fields[e].match(/(plaintext|mobiledoc|amp)/)||"html"==this.api.parameters.fields[e]&&this.api.parameters.formats.length>0&&this.api.parameters.formats.includes("html")},i.prototype.checkKeys=function(){var e=this;this.options.keys.every(function(t){return e.api.parameters.fields.indexOf(t)>-1})},i.prototype.validate=function(){return!(!this.checkGhostAPI()||!this.checkElements())&&(this.development&&(this.checkFields(),this.checkFormats(),this.checkKeys()),!0)},i.prototype.init=function(){var e=this;this.validate()&&("focus"==this.trigger?document.querySelectorAll(this.input)[0].addEventListener("focus",function(){e.check||e.fetch()}):"load"==this.trigger&&(window.onload=function(){e.check||e.fetch()}))},e.exports=i},26:function(e,t,r){(function(r){var n,i,o;i=[],void 0===(o="function"==typeof(n=function(){var e="undefined"==typeof window,t=new Map,n=new Map,i=[];i.total=0;var o=[],a=[];function s(){t.clear(),n.clear(),o=[],a=[]}function l(e){for(var t=-9007199254740991,r=e.length-1;r>=0;--r){var n=e[r];if(null!==n){var i=n.score;i>t&&(t=i)}}return-9007199254740991===t?null:t}function c(e,t){var r=e[t];if(void 0!==r)return r;var n=t;Array.isArray(t)||(n=t.split("."));for(var i=n.length,o=-1;e&&++o<i;)e=e[n[o]];return e}function u(e){return"object"==typeof e}var f=function(){var e=[],t=0,r={};function n(){for(var r=0,n=e[r],i=1;i<t;){var o=i+1;r=i,o<t&&e[o].score<e[i].score&&(r=o),e[r-1>>1]=e[r],i=1+(r<<1)}for(var a=r-1>>1;r>0&&n.score<e[a].score;a=(r=a)-1>>1)e[r]=e[a];e[r]=n}return r.add=function(r){var n=t;e[t++]=r;for(var i=n-1>>1;n>0&&r.score<e[i].score;i=(n=i)-1>>1)e[n]=e[i];e[n]=r},r.poll=function(){if(0!==t){var r=e[0];return e[0]=e[--t],n(),r}},r.peek=function(r){if(0!==t)return e[0]},r.replaceTop=function(t){e[0]=t,n()},r},p=f();return function d(h){var m={single:function(e,t,r){return e?(u(e)||(e=m.getPreparedSearch(e)),t?(u(t)||(t=m.getPrepared(t)),((r&&void 0!==r.allowTypo?r.allowTypo:!h||void 0===h.allowTypo||h.allowTypo)?m.algorithm:m.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,r){if(!e)return i;var n=(e=m.prepareSearch(e))[0],o=r&&r.threshold||h&&h.threshold||-9007199254740991,a=r&&r.limit||h&&h.limit||9007199254740991,s=(r&&void 0!==r.allowTypo?r.allowTypo:!h||void 0===h.allowTypo||h.allowTypo)?m.algorithm:m.algorithmNoTypo,f=0,d=0,g=t.length;if(r&&r.keys)for(var y=r.scoreFn||l,v=r.keys,b=v.length,w=g-1;w>=0;--w){for(var T=t[w],_=new Array(b),k=b-1;k>=0;--k)(I=c(T,A=v[k]))?(u(I)||(I=m.getPrepared(I)),_[k]=s(e,I,n)):_[k]=null;_.obj=T;var x=y(_);null!==x&&(x<o||(_.score=x,f<a?(p.add(_),++f):(++d,x>p.peek().score&&p.replaceTop(_))))}else if(r&&r.key){var A=r.key;for(w=g-1;w>=0;--w)(I=c(T=t[w],A))&&(u(I)||(I=m.getPrepared(I)),null!==(j=s(e,I,n))&&(j.score<o||(j={target:j.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:j.score,indexes:j.indexes,obj:T},f<a?(p.add(j),++f):(++d,j.score>p.peek().score&&p.replaceTop(j)))))}else for(w=g-1;w>=0;--w){var I,j;(I=t[w])&&(u(I)||(I=m.getPrepared(I)),null!==(j=s(e,I,n))&&(j.score<o||(f<a?(p.add(j),++f):(++d,j.score>p.peek().score&&p.replaceTop(j)))))}if(0===f)return i;var C=new Array(f);for(w=f-1;w>=0;--w)C[w]=p.poll();return C.total=f+d,C},goAsync:function(t,n,o){var a=!1,s=new Promise(function(s,p){if(!t)return s(i);var d=(t=m.prepareSearch(t))[0],g=f(),y=n.length-1,v=o&&o.threshold||h&&h.threshold||-9007199254740991,b=o&&o.limit||h&&h.limit||9007199254740991,w=(o&&void 0!==o.allowTypo?o.allowTypo:!h||void 0===h.allowTypo||h.allowTypo)?m.algorithm:m.algorithmNoTypo,T=0,_=0;function k(){if(a)return p("canceled");var f=Date.now();if(o&&o.keys)for(var h=o.scoreFn||l,x=o.keys,A=x.length;y>=0;--y){for(var I=n[y],j=new Array(A),C=A-1;C>=0;--C)(E=c(I,S=x[C]))?(u(E)||(E=m.getPrepared(E)),j[C]=w(t,E,d)):j[C]=null;j.obj=I;var L=h(j);if(null!==L&&!(L<v)&&(j.score=L,T<b?(g.add(j),++T):(++_,L>g.peek().score&&g.replaceTop(j)),y%1e3==0&&Date.now()-f>=10))return void(e?r(k):setTimeout(k))}else if(o&&o.key){for(var S=o.key;y>=0;--y)if((E=c(I=n[y],S))&&(u(E)||(E=m.getPrepared(E)),null!==(F=w(t,E,d))&&!(F.score<v)&&(F={target:F.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:F.score,indexes:F.indexes,obj:I},T<b?(g.add(F),++T):(++_,F.score>g.peek().score&&g.replaceTop(F)),y%1e3==0&&Date.now()-f>=10)))return void(e?r(k):setTimeout(k))}else for(;y>=0;--y){var E,F;if((E=n[y])&&(u(E)||(E=m.getPrepared(E)),null!==(F=w(t,E,d))&&!(F.score<v)&&(T<b?(g.add(F),++T):(++_,F.score>g.peek().score&&g.replaceTop(F)),y%1e3==0&&Date.now()-f>=10)))return void(e?r(k):setTimeout(k))}if(0===T)return s(i);for(var P=new Array(T),O=T-1;O>=0;--O)P[O]=g.poll();P.total=T+_,s(P)}e?r(k):k()});return s.cancel=function(){a=!0},s},highlight:function(e,t,r){if(null===e)return null;void 0===t&&(t="<b>"),void 0===r&&(r="</b>");for(var n="",i=0,o=!1,a=e.target,s=a.length,l=e.indexes,c=0;c<s;++c){var u=a[c];if(l[i]===c){if(++i,o||(o=!0,n+=t),i===l.length){n+=u+r+a.substr(c+1);break}}else o&&(o=!1,n+=r);n+=u}return n},prepare:function(e){if(e)return{target:e,_targetLowerCodes:m.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){if(e)return{target:e,_targetLowerCodes:m.prepareLowerCodes(e),_nextBeginningIndexes:m.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}},prepareSearch:function(e){if(e)return m.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return m.prepare(e);var r=t.get(e);return void 0!==r?r:(r=m.prepare(e),t.set(e,r),r)},getPreparedSearch:function(e){if(e.length>999)return m.prepareSearch(e);var t=n.get(e);return void 0!==t?t:(t=m.prepareSearch(e),n.set(e,t),t)},algorithm:function(e,t,r){for(var n=t._targetLowerCodes,i=e.length,s=n.length,l=0,c=0,u=0,f=0;;){if(r===n[c]){if(o[f++]=c,++l===i)break;r=e[0===u?l:u===l?l+1:u===l-1?l-1:l]}if(++c>=s)for(;;){if(l<=1)return null;if(0===u){if(r===e[--l])continue;u=l}else{if(1===u)return null;if((r=e[1+(l=--u)])===e[l])continue}c=o[(f=l)-1]+1;break}}l=0;var p=0,d=!1,h=0,g=t._nextBeginningIndexes;null===g&&(g=t._nextBeginningIndexes=m.prepareNextBeginningIndexes(t.target));var y=c=0===o[0]?0:g[o[0]-1];if(c!==s)for(;;)if(c>=s){if(l<=0){if(++p>i-2)break;if(e[p]===e[p+1])continue;c=y;continue}--l,c=g[a[--h]]}else if(e[0===p?l:p===l?l+1:p===l-1?l-1:l]===n[c]){if(a[h++]=c,++l===i){d=!0;break}++c}else c=g[c];if(d)var v=a,b=h;else v=o,b=f;for(var w=0,T=-1,_=0;_<i;++_)T!==(c=v[_])-1&&(w-=c),T=c;for(d?0!==p&&(w+=-20):(w*=1e3,0!==u&&(w+=-20)),w-=s-i,t.score=w,t.indexes=new Array(b),_=b-1;_>=0;--_)t.indexes[_]=v[_];return t},algorithmNoTypo:function(e,t,r){for(var n=t._targetLowerCodes,i=e.length,s=n.length,l=0,c=0,u=0;;){if(r===n[c]){if(o[u++]=c,++l===i)break;r=e[l]}if(++c>=s)return null}l=0;var f=!1,p=0,d=t._nextBeginningIndexes;if(null===d&&(d=t._nextBeginningIndexes=m.prepareNextBeginningIndexes(t.target)),(c=0===o[0]?0:d[o[0]-1])!==s)for(;;)if(c>=s){if(l<=0)break;--l,c=d[a[--p]]}else if(e[l]===n[c]){if(a[p++]=c,++l===i){f=!0;break}++c}else c=d[c];if(f)var h=a,g=p;else h=o,g=u;for(var y=0,v=-1,b=0;b<i;++b)v!==(c=h[b])-1&&(y-=c),v=c;for(f||(y*=1e3),y-=s-i,t.score=y,t.indexes=new Array(g),b=g-1;b>=0;--b)t.indexes[b]=h[b];return t},prepareLowerCodes:function(e){for(var t=e.length,r=[],n=e.toLowerCase(),i=0;i<t;++i)r[i]=n.charCodeAt(i);return r},prepareBeginningIndexes:function(e){for(var t=e.length,r=[],n=0,i=!1,o=!1,a=0;a<t;++a){var s=e.charCodeAt(a),l=s>=65&&s<=90,c=l||s>=97&&s<=122||s>=48&&s<=57,u=l&&!i||!o||!c;i=l,o=c,u&&(r[n++]=a)}return r},prepareNextBeginningIndexes:function(e){for(var t=e.length,r=m.prepareBeginningIndexes(e),n=[],i=r[0],o=0,a=0;a<t;++a)i>a?n[a]=i:(i=r[++o],n[a]=void 0===i?t:i);return n},cleanup:s,new:d};return m}()})?n.apply(t,i):n)||(e.exports=o)}).call(t,r(27).setImmediate)},27:function(e,t,r){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},r(28),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(t,r(1))},28:function(e,t,r){(function(e,t){!function(e,r){"use strict";if(!e.setImmediate){var n,i,o,a,s,l=1,c={},u=!1,f=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick(function(){h(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){h(e.data)},n=function(e){o.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,n=function(e){var t=f.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):n=function(e){setTimeout(h,0,e)}:(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),n=function(t){e.postMessage(a+t,"*")}),p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var i={callback:e,args:t};return c[l]=i,n(l),l++},p.clearImmediate=d}function d(e){delete c[e]}function h(e){if(u)setTimeout(h,0,e);else{var t=c[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(r,n)}}(t)}finally{d(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,r(1),r(29))},29:function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l,c=[],u=!1,f=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):f=-1,c.length&&d())}function d(){if(!u){var e=s(p);u=!0;for(var t=c.length;t;){for(l=c,c=[];++f<t;)l&&l[f].run();f=-1,t=c.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||u||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}});