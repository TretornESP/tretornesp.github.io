(self.AMP=self.AMP||[]).push({n:"amp-mustache",ev:"0.2",l:true,v:"2103060631004",m:0,f:(function(AMP,_){
'use strict';var v;function aa(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}aa(this);"function"===typeof Symbol&&Symbol("x");var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ca;
if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var ea;a:{var ja={a:!0},ra={};try{ra.__proto__=ja;ea=ra.a;break a}catch(a){}ea=!1}ca=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=ca;function ta(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}};var ua=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var K=self.AMP_CONFIG||{},Aa=("string"==typeof K.cdnProxyRegex?new RegExp(K.cdnProxyRegex):K.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function Ba(a){if(!self.document||!self.document.head||self.location&&Aa.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
var Ca={thirdParty:K.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:K.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof K.thirdPartyFrameRegex?new RegExp(K.thirdPartyFrameRegex):K.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:K.cdnUrl||Ba("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:Aa,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:K.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:K.betaErrorReportingUrl||
"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:K.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:K.geoApiUrl||Ba("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var Da=self.__AMP_LOG;function Ea(){if(!Da.user)throw Error("failed to call initLogConstructor");return Da.user}function Fa(a,b,c){Ea().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function Ga(a,b){var c=a=a.__AMP_TOP||(a.__AMP_TOP=a),d=Ha(c),h=d.purifier;h||(h=d.purifier={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1});h.ctor||(h.ctor=b,h.context=a,h.sharedInstance=!1,h.resolve&&Ia(c,"purifier"))}function Oa(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return Ia(a,b)}function Pa(a){return a.nodeType?Oa((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}
function Ia(a,b){a=Ha(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function Ha(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function Qa(a){return a||{}};function Ra(a,b){for(var c=a.length,d=0;d<c;d++)b(a[d],d)};function O(a,b){this.element=a;this.win=a.ownerDocument.defaultView||b;a=Pa(this.element);a=Pa(a);a=a.isSingleDoc()?a.win:a;this.L=Ia(a,"viewer");this.compileCallback()}v=O.prototype;v.compileCallback=function(){};v.setHtml=function(){};v.render=function(){};v.renderAsString=function(){};function Sa(a,b){for(a=a.firstChild;null!=a;a=a.nextSibling)if(3==a.nodeType){var c=a.textContent.trim();c&&b(c)}else 8!=a.nodeType&&1==a.nodeType&&b(a)}
v.tryUnwrap=function(a){var b;Sa(a,function(c){b=void 0===b&&c.nodeType?c:null});return b||a};v.unwrapChildren=function(a){var b=this,c=[];Sa(a,function(d){if("string"==typeof d){var h=b.win.document.createElement("div");h.textContent=d;c.push(h)}else c.push(d)});return c};v.viewerCanRenderTemplates=function(){return this.L.hasCapability("viewerRenderTemplate")};function Ta(a){var b=a.documentElement;return["\u26a14email","amp4email"].some(function(c){return b.hasAttribute(c)})};function Ua(){this.J=100;this.B=this.D=0;this.o=Object.create(null)}Ua.prototype.has=function(a){return!!this.o[a]};Ua.prototype.get=function(a){var b=this.o[a];if(b)return b.access=++this.B,b.payload};
Ua.prototype.put=function(a,b){this.has(a)||this.D++;this.o[a]={payload:b,access:this.B};if(!(this.D<=this.J)){if(Da.dev)a=Da.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.o;var c=this.B+1,d;for(d in a){var h=a[d].access;if(h<c){c=h;var r=d}}void 0!==r&&(delete a[r],this.D--)}};Qa({c:!0,v:!0,a:!0,ad:!0});var Va,Wa,Xa=/[?&]amp_js[^&]*/,Ya=/[?&]amp_gsa[^&]*/,Za=/[?&]amp_r[^&]*/,$a=/[?&]amp_kit[^&]*/,ab=/[?&]usqp[^&]*/;
function bb(a){Va||(Va=self.document.createElement("a"),Wa=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Ua));var b=Wa,c=Va;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function lb(a){"string"==typeof a&&(a=bb(a));return Ca.cdnProxyRegex.test(a.origin)}
function mb(a){"string"==typeof a&&(a=bb(a));if(!lb(a))return a.href;var b=a.pathname.split("/"),c=b[2],d="s"==c?"https://"+decodeURIComponent(b[3]):"http://"+decodeURIComponent(c);d.indexOf(".");b.splice(1,"s"==c?3:2);b=d+b.join("/");d=(d=a.search)&&"?"!=d?(d=d.replace(Xa,"").replace(Ya,"").replace(Za,"").replace($a,"").replace(ab,"").replace(/^[?&]/,""))?"?"+d:"":"";return b+d+(a.hash||"")}
function nb(a,b){"string"==typeof b&&(b=bb(b));if("function"==typeof URL)var c=(new URL(a,b.href)).toString();else{c=a;var d=b;"string"==typeof d&&(d=bb(d));c=c.replace(/\\/g,"/");var h=bb(c);c=c.toLowerCase().startsWith(h.protocol)?h.href:c.startsWith("//")?d.protocol+c:c.startsWith("/")?d.origin+c:d.origin+d.pathname.replace(/\/[^/]*$/,"/")+c}return c}
function ob(a){a=bb(a).search;var b=Object.create(null);if(a)for(var c;c=ua.exec(a);){var d=ta(c[1],c[1]);c=c[2]?ta(c[2].replace(/\+/g," "),c[2]):"";b[d]=c}};var pb=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function qb(a){for(var b=[],c;c=pb.exec(a);){var d=c[1],h=void 0,r=void 0;if(c[2]){var x=c[3].toLowerCase();if("w"==x)h=parseInt(c[2],10);else if("x"==x)r=parseFloat(c[2]);else continue}else r=1;b.push({url:d,width:h,dpr:r})}return new rb(b)}
function rb(a){Fa(0<a.length,"Srcset must have at least one source");this.j=a;for(var b=!1,c=!1,d=0;d<a.length;d++){var h=a[d];b=b||!!h.width;c=c||!!h.dpr}Fa(!!(b^c),"Srcset must have width or dpr sources, but not both");a.sort(b?sb:tb);this.I=b}
rb.prototype.select=function(a,b){if(this.I){b*=a;a=this.j;for(var c=0,d=Infinity,h=Infinity,r=0;r<a.length;r++){var x=a[r].width,u=Math.abs(x-b);if(u<=1.1*d||1.2<b/h)c=r,d=u,h=x;else break}b=c}else{a=this.j;c=0;d=Infinity;for(h=0;h<a.length;h++)if(r=Math.abs(a[h].dpr-b),r<=d)c=h,d=r;else break;b=c}return this.j[b].url};rb.prototype.getUrls=function(){return this.j.map(function(a){return a.url})};
rb.prototype.stringify=function(a){for(var b=[],c=this.j,d=0;d<c.length;d++){var h=c[d],r=h.url;a&&(r=a(r));r=this.I?r+(" "+h.width+"w"):r+(" "+h.dpr+"x");b.push(r)}return b.join(", ")};function sb(a,b){Fa(a.width!=b.width,"Duplicate width: %s",a.width);return a.width-b.width}function tb(a,b){Fa(a.dpr!=b.dpr,"Duplicate dpr: %s",a.dpr);return a.dpr-b.dpr};function ub(a,b,c){return vb(b)?wb(a,b,c):c}function vb(a){return"src"==a||"href"==a||"xlink:href"==a||"srcset"==a}function wb(a,b,c){var d=self.location;ob(c);var h=lb(d),r=bb(mb(d));if("href"==b&&!c.startsWith("#"))return nb(c,r);if("src"==b)return"amp-img"==a?xb(c,r,h):nb(c,r);if("srcset"==b){try{var x=qb(c)}catch(u){return Ea().error("URL-REWRITE","Failed to parse srcset: ",u),c}return x.stringify(function(u){return xb(u,r,h)})}return c}
function xb(a,b,c){a=bb(nb(a,b));return"data:"==a.protocol||lb(a)||!c?a.href:Ca.cdn+"/i/"+("https:"==a.protocol?"s/":"")+encodeURIComponent(a.host)+a.pathname+(a.search||"")+(a.hash||"")};var yb={"AMP-IMG":["src","srcset","layout","width","height"]};function zb(a,b){var c=a.tagName.startsWith("AMP-"),d=a.hasAttribute("i-amphtml-binding");if(!d&&yb[a.tagName])a.setAttribute("i-amphtml-ignore","");else if(d||c)a.hasAttribute("i-amphtml-key")||a.setAttribute("i-amphtml-key",b())}
var Ab={applet:!0,audio:!0,base:!0,embed:!0,frame:!0,frameset:!0,iframe:!0,img:!0,link:!0,meta:!0,object:!0,style:!0,video:!0},Bb={"amp-accordion":!0,"amp-anim":!0,"amp-bind-macro":!0,"amp-carousel":!0,"amp-fit-text":!0,"amp-img":!0,"amp-layout":!0,"amp-selector":!0,"amp-sidebar":!0,"amp-timeago":!0},Cb="a amp-img article aside b blockquote br caption code col colgroup dd del details div dl dt em figcaption figure footer h1 h2 h3 header hr i ins li main mark nav ol p pre q s section small span strong sub summary sup table tbody td tfoot th thead time tr u ul".split(" "),
Db="amp-fx fallback heights layout min-font-size max-font-size on option placeholder submitting submit-success submit-error validation-for verify-error visible-when-invalid href style text subscriptions-action subscriptions-actions subscriptions-decorate subscriptions-dialog subscriptions-display subscriptions-section subscriptions-service subscriptions-google-rtc amp-nested-submenu amp-nested-submenu-open amp-nested-submenu-close itemprop".split(" "),Eb={a:["rel","target"],div:["template"],form:["action-xhr",
"verify-xhr","custom-validation-reporting","target"],input:["mask-output"],template:["type"],textarea:["autoexpand"]},Fb=["_top","_blank"],Gb=/^(?:\w+script|data|blob):/i,Hb=/^(?:blob):/i,Ib=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,Jb=Object.freeze(Qa({input:{type:/(?:image|button)/i}})),Kb=Object.freeze(Qa({input:{type:/(?:button|file|image|password)/i}})),Lb=Object.freeze("form formaction formmethod formtarget formnovalidate formenctype".split(" ")),Mb=Object.freeze(Qa({input:Lb,
textarea:Lb,select:Lb})),Nb=Object.freeze(Qa({"amp-anim":["controls"],form:["name"]})),Ob=/!important|position\s*:\s*fixed|position\s*:\s*sticky/i;
function Pb(a,b,c,d){var h=!0,r=h=void 0===h?!1:h,x=c?c.replace(Ib,""):"";if(!r){if(b.startsWith("on")&&"on"!=b)return!1;var u=x.toLowerCase();if(0<=u.indexOf("<script")||0<=u.indexOf("\x3c/script")||Gb.test(x))return!1}if(Hb.test(x))return!1;if("style"==b)return!Ob.test(c);if("class"==b&&c&&/(^|\W)i-amphtml-/i.test(c)||vb(b)&&/__amp_source_origin/.test(c))return!1;var D=Ta(d),E=Object.assign(Object.create(null),Mb,D?Nb:{})[a];if(E&&-1!=E.indexOf(b))return!1;var F=Object.assign(Object.create(null),
Jb,D?Kb:{})[a];if(F){var A=F[b];if(A&&-1!=c.search(A))return!1}return!0};/*
 @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.2.2/LICENSE */
var bc=Object.hasOwnProperty,cc=Object.setPrototypeOf,dc=Object.isFrozen,ec=Object.getPrototypeOf,fc=Object.getOwnPropertyDescriptor,S=Object.freeze,T=Object.seal,gc=Object.create,hc="undefined"!==typeof Reflect&&Reflect,ic=hc.apply,jc=hc.construct;ic||(ic=function(a,b,c){return a.apply(b,c)});S||(S=function(a){return a});T||(T=function(a){return a});
jc||(jc=function(a,b){var c=Function.prototype.bind,d=c.apply,h=[null],r=h.concat;if(Array.isArray(b)){for(var x=0,u=Array(b.length);x<b.length;x++)u[x]=b[x];b=u}else b=Array.from(b);return new (d.call(c,a,r.call(h,b)))});var kc=V(Array.prototype.forEach),lc=V(Array.prototype.pop),mc=V(Array.prototype.push),nc=V(String.prototype.toLowerCase),oc=V(String.prototype.match),pc=V(String.prototype.replace),qc=V(String.prototype.indexOf),rc=V(String.prototype.trim),sc=V(RegExp.prototype.test),uc=tc();
function V(a){return function(b){for(var c=arguments.length,d=Array(1<c?c-1:0),h=1;h<c;h++)d[h-1]=arguments[h];return ic(a,b,d)}}function tc(){var a=TypeError;return function(){for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];return jc(a,c)}}function W(a,b){cc&&cc(a,null);for(var c=b.length;c--;){var d=b[c];if("string"===typeof d){var h=nc(d);h!==d&&(dc(b)||(b[c]=h),d=h)}a[d]=!0}return a}function vc(a){var b=gc(null),c=void 0;for(c in a)ic(bc,a,[c])&&(b[c]=a[c]);return b}
function wc(a,b){for(;null!==a;){var c=fc(a,b);if(c){if(c.get)return V(c.get);if("function"===typeof c.value)return V(c.value)}a=ec(a)}return null}
var xc=S("a abbr acronym address area article aside audio b bdi bdo big blink blockquote body br button canvas caption center cite code col colgroup content data datalist dd decorator del details dfn dialog dir div dl dt element em fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i img input ins kbd label legend li main map mark marquee menu menuitem meter nav nobr ol optgroup option output p picture pre progress q rp rt ruby s samp section select shadow small source spacer span strike strong style sub summary sup table tbody td template textarea tfoot th thead time tr track tt u ul var video wbr".split(" ")),yc=
S("svg a altglyph altglyphdef altglyphitem animatecolor animatemotion animatetransform circle clippath defs desc ellipse filter font g glyph glyphref hkern image line lineargradient marker mask metadata mpath path pattern polygon polyline radialgradient rect stop style switch symbol text textpath title tref tspan view vkern".split(" ")),zc=S("feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence".split(" ")),
Ac=S("animate color-profile cursor discard fedropshadow feimage font-face font-face-format font-face-name font-face-src font-face-uri foreignobject hatch hatchpath mesh meshgradient meshpatch meshrow missing-glyph script set solidcolor unknown use".split(" ")),Bc=S("math menclose merror mfenced mfrac mglyph mi mlabeledtr mmultiscripts mn mo mover mpadded mphantom mroot mrow ms mspace msqrt mstyle msub msup msubsup mtable mtd mtext mtr munder munderover".split(" ")),Cc=S("maction maligngroup malignmark mlongdiv mscarries mscarry msgroup mstack msline msrow semantics annotation annotation-xml mprescripts none".split(" ")),
Dc=S(["#text"]),Ec=S("accept action align alt autocapitalize autocomplete autopictureinpicture autoplay background bgcolor border capture cellpadding cellspacing checked cite class clear color cols colspan controls controlslist coords crossorigin datetime decoding default dir disabled disablepictureinpicture disableremoteplayback download draggable enctype enterkeyhint face for headers height hidden high href hreflang id inputmode integrity ismap kind label lang list loading loop low max maxlength media method min minlength multiple muted name noshade novalidate nowrap open optimum pattern placeholder playsinline poster preload pubdate radiogroup readonly rel required rev reversed role rows rowspan spellcheck scope selected shape size sizes span srclang start src srcset step style summary tabindex title translate type usemap valign value width xmlns".split(" ")),
Fc=S("accent-height accumulate additive alignment-baseline ascent attributename attributetype azimuth basefrequency baseline-shift begin bias by class clip clippathunits clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering cx cy d dx dy diffuseconstant direction display divisor dur edgemode elevation end fill fill-opacity fill-rule filter filterunits flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight fx fy g1 g2 glyph-name glyphref gradientunits gradienttransform height href id image-rendering in in2 k k1 k2 k3 k4 kerning keypoints keysplines keytimes lang lengthadjust letter-spacing kernelmatrix kernelunitlength lighting-color local marker-end marker-mid marker-start markerheight markerunits markerwidth maskcontentunits maskunits max mask media method mode min name numoctaves offset operator opacity order orient orientation origin overflow paint-order path pathlength patterncontentunits patterntransform patternunits points preservealpha preserveaspectratio primitiveunits r rx ry radius refx refy repeatcount repeatdur restart result rotate scale seed shape-rendering specularconstant specularexponent spreadmethod startoffset stddeviation stitchtiles stop-color stop-opacity stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke stroke-width style surfacescale systemlanguage tabindex targetx targety transform text-anchor text-decoration text-rendering textlength type u1 u2 unicode values viewbox visibility version vert-adv-y vert-origin-x vert-origin-y width word-spacing wrap writing-mode xchannelselector ychannelselector x x1 x2 xmlns y y1 y2 z zoomandpan".split(" ")),
Gc=S("accent accentunder align bevelled close columnsalign columnlines columnspan denomalign depth dir display displaystyle encoding fence frame height href id largeop length linethickness lspace lquote mathbackground mathcolor mathsize mathvariant maxsize minsize movablelimits notation numalign open rowalign rowlines rowspacing rowspan rspace rquote scriptlevel scriptminsize scriptsizemultiplier selection separator separators stretchy subscriptshift supscriptshift symmetric voffset width xmlns".split(" ")),
Hc=S(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ic=T(/\{\{[\s\S]*|[\s\S]*\}\}/gm),Jc=T(/<%[\s\S]*|[\s\S]*%>/gm),Kc=T(/^data-[\-\w.\u00B7-\uFFFF]/),Lc=T(/^aria-[\-\w]+$/),Mc=T(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Nc=T(/^(?:\w+script|data):/i),Oc=T(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Pc="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===
typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function Y(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}
function Qc(a,b){if("object"!==("undefined"===typeof a?"undefined":Pc(a))||"function"!==typeof a.createPolicy)return null;var c=null;b.currentScript&&b.currentScript.hasAttribute("data-tt-policy-suffix")&&(c=b.currentScript.getAttribute("data-tt-policy-suffix"));var d="dompurify"+(c?"#"+c:"");try{return a.createPolicy(d,{createHTML:function(h){return h}})}catch(h){return console.warn("TrustedTypes policy "+d+" could not be created."),null}}
function Rc(){function a(e){var g,m;d("beforeSanitizeAttributes",e,null);var n=e.attributes;if(n){var G={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:L};for(m=n.length;m--;){var fa=g=n[m],R=fa.name,Ja=fa.namespaceURI;g=rc(g.value);var X=nc(R);G.attrName=X;G.attrValue=g;G.keepAttr=!0;G.forceKeepAttr=void 0;d("uponSanitizeAttribute",e,G);g=G.attrValue;if(!G.forceKeepAttr&&(D(R,e),G.keepAttr))if(sc(/\/>/i,g))D(R,e);else{ka&&(g=pc(g,Ic," "),g=pc(g,Jc," "));var bd=e.nodeName.toLowerCase();if(b(bd,
X,g))try{Ja?e.setAttributeNS(Ja,R,g):e.setAttribute(R,g),lc(q.removed)}catch(kd){}}}d("afterSanitizeAttributes",e,null)}}function b(e,g,m){if(Qb&&("id"===g||"name"===g)&&(m in P||m in cd))return!1;if(!cb||!sc(Kc,g))if(!Rb||!sc(Lc,g))if(!L[g]||Sb[g]||!(db[g]||sc(va,pc(m,Oc,""))||("src"===g||"xlink:href"===g||"href"===g)&&"script"!==e&&0===qc(m,"data:")&&Tb[e]||Ub&&!sc(Nc,pc(m,Oc,"")))&&m)return!1;return!0}function c(e){d("beforeSanitizeElements",e,null);if(r(e))return E(e),!0;if(oc(e.nodeName,/[\u0080-\uFFFF]/))return E(e),
!0;var g=nc(e.nodeName);d("uponSanitizeElement",e,{tagName:g,allowedTags:B});if(!(h(e.firstElementChild)||h(e.content)&&h(e.content.firstElementChild))&&sc(/<[/\w]/g,e.innerHTML)&&sc(/<[/\w]/g,e.textContent))return E(e),!0;if(!B[g]||eb[g]){if(fb&&!dd[g]){var m=y(e),n=z(e);for(g=n.length-1;0<=g;--g)m.insertBefore(p(n[g],!0),w(e))}E(e);return!0}if(e instanceof Ka&&!F(e)||("noscript"===g||"noembed"===g)&&sc(/<\/no(script|embed)/i,e.innerHTML))return E(e),!0;ka&&3===e.nodeType&&(g=e.textContent,g=pc(g,
Ic," "),g=pc(g,Jc," "),e.textContent!==g&&(mc(q.removed,{element:e.cloneNode()}),e.textContent=g));d("afterSanitizeElements",e,null);return!1}function d(e,g,m){I[e]&&kc(I[e],function(n){n.call(q,g,m,la)})}function h(e){return"object"===("undefined"===typeof ma?"undefined":Pc(ma))?e instanceof ma:e&&"object"===("undefined"===typeof e?"undefined":Pc(e))&&"number"===typeof e.nodeType&&"string"===typeof e.nodeName}function r(e){return e instanceof wa||e instanceof f?!1:"string"===typeof e.nodeName&&"string"===
typeof e.textContent&&"function"===typeof e.removeChild&&e.attributes instanceof gb&&"function"===typeof e.removeAttribute&&"function"===typeof e.setAttribute&&"string"===typeof e.namespaceURI&&"function"===typeof e.insertBefore?!1:!0}function x(e){return H.call(e.ownerDocument||e,e,ha.SHOW_ELEMENT|ha.SHOW_COMMENT|ha.SHOW_TEXT,function(){return ha.FILTER_ACCEPT},!1)}function u(e){var g=void 0,m=void 0;if(hb)e="<remove></remove>"+e;else{var n=oc(e,/^[\r\n\t ]+/);m=n&&n[0]}var G=t?t.createHTML(e):e;
try{g=(new k).parseFromString(G,"text/html")}catch(fa){}g&&g.documentElement||(g=da.createHTMLDocument(""),n=g.body,n.parentNode.removeChild(n.parentNode.firstElementChild),n.outerHTML=G);e&&m&&g.body.insertBefore(P.createTextNode(m),g.body.childNodes[0]||null);return J.call(g,xa?"html":"body")[0]}function D(e,g){try{mc(q.removed,{attribute:g.getAttributeNode(e),from:g})}catch(m){mc(q.removed,{attribute:null,from:g})}g.removeAttribute(e)}function E(e){mc(q.removed,{element:e});try{e.parentNode.removeChild(e)}catch(g){try{e.outerHTML=
M}catch(m){e.remove()}}}function F(e){var g=y(e);g&&g.tagName||(g={namespaceURI:"http://www.w3.org/1999/xhtml",tagName:"template"});var m=nc(e.tagName),n=nc(g.tagName);if("http://www.w3.org/2000/svg"===e.namespaceURI)return"http://www.w3.org/1999/xhtml"===g.namespaceURI?"svg"===m:"http://www.w3.org/1998/Math/MathML"===g.namespaceURI?"svg"===m&&("annotation-xml"===n||Vb[n]):!!La[m];if("http://www.w3.org/1998/Math/MathML"===e.namespaceURI)return"http://www.w3.org/1999/xhtml"===g.namespaceURI?"math"===
m:"http://www.w3.org/2000/svg"===g.namespaceURI?"math"===m&&Wb[n]:!!ib[m];if("http://www.w3.org/1999/xhtml"===e.namespaceURI){if("http://www.w3.org/2000/svg"===g.namespaceURI&&!Wb[n]||"http://www.w3.org/1998/Math/MathML"===g.namespaceURI&&!Vb[n])return!1;var G=W({},["title","style","font","a","script"]);return!ib[m]&&(G[m]||!La[m])}return!1}function A(e){la&&la===e||(e&&"object"===("undefined"===typeof e?"undefined":Pc(e))||(e={}),e=vc(e),B="ALLOWED_TAGS"in e?W({},e.ALLOWED_TAGS):Xb,L="ALLOWED_ATTR"in
e?W({},e.ALLOWED_ATTR):Yb,db="ADD_URI_SAFE_ATTR"in e?W(vc(Zb),e.ADD_URI_SAFE_ATTR):Zb,Tb="ADD_DATA_URI_TAGS"in e?W(vc($b),e.ADD_DATA_URI_TAGS):$b,eb="FORBID_TAGS"in e?W({},e.FORBID_TAGS):{},Sb="FORBID_ATTR"in e?W({},e.FORBID_ATTR):{},na="USE_PROFILES"in e?e.USE_PROFILES:!1,Rb=!1!==e.ALLOW_ARIA_ATTR,cb=!1!==e.ALLOW_DATA_ATTR,Ub=e.ALLOW_UNKNOWN_PROTOCOLS||!1,ka=e.SAFE_FOR_TEMPLATES||!1,xa=e.WHOLE_DOCUMENT||!1,ya=e.RETURN_DOM||!1,jb=e.RETURN_DOM_FRAGMENT||!1,ac=!1!==e.RETURN_DOM_IMPORT,Ma=e.RETURN_TRUSTED_TYPE||
!1,hb=e.FORCE_BODY||!1,Qb=!1!==e.SANITIZE_DOM,fb=!1!==e.KEEP_CONTENT,za=e.IN_PLACE||!1,va=e.ALLOWED_URI_REGEXP||va,ka&&(cb=!1),jb&&(ya=!0),na&&(B=W({},[].concat(Y(Dc))),L=[],!0===na.html&&(W(B,xc),W(L,Ec)),!0===na.svg&&(W(B,yc),W(L,Fc),W(L,Hc)),!0===na.svgFilters&&(W(B,zc),W(L,Fc),W(L,Hc)),!0===na.mathMl&&(W(B,Bc),W(L,Gc),W(L,Hc))),e.ADD_TAGS&&(B===Xb&&(B=vc(B)),W(B,e.ADD_TAGS)),e.ADD_ATTR&&(L===Yb&&(L=vc(L)),W(L,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&W(db,e.ADD_URI_SAFE_ATTR),fb&&(B["#text"]=!0),xa&&
W(B,["html","head","body"]),B.table&&(W(B,["tbody"]),delete eb.tbody),S&&S(e),la=e)}function q(e){return Rc(e)}var C=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"undefined"===typeof window?null:window;q.version="2.2.6";q.removed=[];if(!C||!C.document||9!==C.document.nodeType)return q.isSupported=!1,q;var Q=C.document,P=C.document,Na=C.DocumentFragment,ia=C.HTMLTemplateElement,ma=C.Node,Ka=C.Element,ha=C.NodeFilter,oa=C.NamedNodeMap,gb=void 0===oa?C.NamedNodeMap||C.MozNamedAttrMap:oa,wa=
C.Text,f=C.Comment,k=C.DOMParser;oa=C.trustedTypes;var l=Ka.prototype,p=wc(l,"cloneNode"),w=wc(l,"nextSibling"),z=wc(l,"childNodes"),y=wc(l,"parentNode");"function"===typeof ia&&(ia=P.createElement("template"),ia.content&&ia.content.ownerDocument&&(P=ia.content.ownerDocument));var t=Qc(oa,Q),M=t&&Ma?t.createHTML(""):"",N=P,da=N.implementation,H=N.createNodeIterator,J=N.getElementsByTagName,U=N.createDocumentFragment,pa=Q.importNode,qa={};try{qa=vc(P).documentMode?P.documentMode:{}}catch(e){}var I=
{};q.isSupported=da&&"undefined"!==typeof da.createHTMLDocument&&9!==qa;var va=Mc,B=null,Xb=W({},[].concat(Y(xc),Y(yc),Y(zc),Y(Bc),Y(Dc))),L=null,Yb=W({},[].concat(Y(Ec),Y(Fc),Y(Gc),Y(Hc))),eb=null,Sb=null,Rb=!0,cb=!0,Ub=!1,ka=!1,xa=!1,kb=!1,hb=!1,ya=!1,jb=!1,ac=!0,Ma=!1,Qb=!0,fb=!0,za=!1,na={},dd=W({},"annotation-xml audio colgroup desc foreignobject head iframe math mi mn mo ms mtext noembed noframes noscript plaintext script style svg template thead title video xmp".split(" ")),Tb=null,$b=W({},
"audio video img source image track".split(" ")),db=null,Zb=W({},"alt class for id label name pattern placeholder summary title value style xmlns".split(" ")),la=null,cd=P.createElement("form"),Vb=W({},["mi","mo","mn","ms","mtext"]),Wb=W({},["foreignobject","desc","title","annotation-xml"]),La=W({},yc);W(La,zc);W(La,Ac);var ib=W({},Bc);W(ib,Cc);var ed=function m(g){var n=void 0,G=x(g);for(d("beforeSanitizeShadowDOM",g,null);n=G.nextNode();)d("uponSanitizeShadowNode",n,null),c(n)||(n.content instanceof
Na&&m(n.content),a(n));d("afterSanitizeShadowDOM",g,null)};q.sanitize=function(g,m){var n=void 0,G=void 0,fa=void 0,R=void 0;g||(g="\x3c!--\x3e");if("string"!==typeof g&&!h(g)){if("function"!==typeof g.toString)throw uc("toString is not a function");g=g.toString();if("string"!==typeof g)throw uc("dirty is not a string, aborting");}if(!q.isSupported){if("object"===Pc(C.toStaticHTML)||"function"===typeof C.toStaticHTML){if("string"===typeof g)return C.toStaticHTML(g);if(h(g))return C.toStaticHTML(g.outerHTML)}return g}kb||
A(m);q.removed=[];"string"===typeof g&&(za=!1);if(!za)if(g instanceof ma)n=u("\x3c!----\x3e"),G=n.ownerDocument.importNode(g,!0),1===G.nodeType&&"BODY"===G.nodeName?n=G:"HTML"===G.nodeName?n=G:n.appendChild(G);else{if(!ya&&!ka&&!xa&&-1===g.indexOf("<"))return t&&Ma?t.createHTML(g):g;n=u(g);if(!n)return ya?null:M}n&&hb&&E(n.firstChild);for(var Ja=x(za?g:n);m=Ja.nextNode();)3===m.nodeType&&m===fa||c(m)||(m.content instanceof Na&&ed(m.content),a(m),fa=m);fa=null;if(za)return g;if(ya){if(jb)for(R=U.call(n.ownerDocument);n.firstChild;)R.appendChild(n.firstChild);
else R=n;ac&&(R=pa.call(Q,R,!0));return R}var X=xa?n.outerHTML:n.innerHTML;ka&&(X=pc(X,Ic," "),X=pc(X,Jc," "));return t&&Ma?t.createHTML(X):X};q.setConfig=function(g){A(g);kb=!0};q.clearConfig=function(){la=null;kb=!1};q.isValidAttribute=function(g,m,n){la||A({});g=nc(g);m=nc(m);return b(g,m,n)};q.addHook=function(g,m){"function"===typeof m&&(I[g]=I[g]||[],mc(I[g],m))};q.removeHook=function(g){I[g]&&lc(I[g])};q.removeHooks=function(g){I[g]&&(I[g]=[])};q.removeAllHooks=function(){I={}};return q}
var Sc=Rc();var Tc={script:{attribute:"type",values:["application/json","application/ld+json"]}},Uc={USE_PROFILES:{html:!0,svg:!0,svgFilters:!0}};function Vc(a){this.A=a;this.K=1;this.h=Sc(self);this.F=Sc(self);a=Object.assign({},Object.assign({},Uc,{ADD_ATTR:Db,ADD_TAGS:["use"],FORBID_TAGS:Object.keys(Ab),FORCE_BODY:!0,RETURN_DOM:!0,ALLOW_UNKNOWN_PROTOCOLS:!0}));this.h.setConfig(a);Wc(this,this.h);Xc(this.F)}Vc.prototype.purifyHtml=function(a){return this.h.sanitize(a)};
Vc.prototype.purifyTagsForTripleMustache=function(a){a=this.F.sanitize(a,{ALLOWED_TAGS:Cb,FORCE_BODY:!0,RETURN_DOM_FRAGMENT:!0});var b=this.A.createElement("div");b.appendChild(a);return b.innerHTML};Vc.prototype.getAllowedTags=function(){var a={};this.h.addHook("uponSanitizeElement",function(c,d){Object.assign(a,d.allowedTags)});var b=this.A.createElement("p");this.h.sanitize(b);Object.keys(Ab).forEach(function(c){a[c]=!1});this.h.removeHook("uponSanitizeElement");return a};
Vc.prototype.validateAttributeChange=function(a,b,c){var d=a.nodeName.toLowerCase(),h=Tc[d];if(h){var r=h.values;if(h.attribute===b&&(null==c||!r.includes(c)))return!1}if("a"===d&&"target"===b&&(null==c||!Fb.includes(c)))return!1;if(null==c)return!0;if(Yc(b)!==Zc)return!1;if(!this.h.isValidAttribute(d,b,c)){var x=Eb[d];if(!(x&&x.includes(b)||d.startsWith("amp-")))return!1}a=a.ownerDocument?a.ownerDocument:a;return c&&!Pb(d,b,c,a)?!1:!0};
function Wc(a,b){var c=Ta(a.A),d,h=[],r,x=[];b.addHook("uponSanitizeElement",function(u,D){var E=D.tagName;d=D.allowedTags;E.startsWith("amp-")&&(d[E]=!c||Bb[E]);"a"===E&&u.hasAttribute("href")&&!u.hasAttribute("target")&&u.setAttribute("target","_top");var F=Tc[E];F&&(D=F.attribute,F=F.values,u.hasAttribute(D)&&F.includes(u.getAttribute(D))&&(d[E]=!0,h.push(E)))});b.addHook("afterSanitizeElements",function(){h.forEach(function(u){delete d[u]});h.length=0});b.addHook("uponSanitizeAttribute",function(u,
D){function E(){r[A]||(r[A]=!0,x.push(A))}var F=u.nodeName.toLowerCase(),A=D.attrName,q=D.attrValue;r=D.allowedAttributes;if(F.startsWith("amp-"))E();else{if("a"==F&&"target"==A){var C=q.toLowerCase();q=Fb.includes(C)?C:"_top"}var Q=Eb[F];Q&&Q.includes(A)&&E()}var P=Yc(A);P===$c&&(Q=A.substring(1,A.length-1),u.setAttribute("data-amp-bind-"+Q,q));P!==Zc&&u.setAttribute("i-amphtml-binding","");Pb(F,A,q,a.A)?ub&&q&&!A.startsWith("data-amp-bind-")&&(q=ub(F,A,q)):(D.keepAttr=!1,Ea().error("purifier",'Removed invalid attribute %s[%s="%s"].',
F,A,q));D.attrValue=q});b.addHook("afterSanitizeAttributes",function(u){zb(u,function(){return String(a.K++)});x.forEach(function(D){delete r[D]});x.length=0;"use"===u.nodeName.toLowerCase()&&["href","xlink:href"].forEach(function(D){u.hasAttribute(D)&&!u.getAttribute(D).startsWith("#")&&(u.parentElement&&u.parentElement.removeChild(u),Ea().error("purifier",'Removed invalid <use>. use[href] must start with "#".'))})})}
function Xc(a){var b;a.addHook("uponSanitizeElement",function(c,d){var h=d.tagName;b=d.allowedTags;"template"===h&&(c=c.getAttribute("type"))&&"amp-mustache"===c.toLowerCase()&&(b.template=!0)});a.addHook("afterSanitizeElements",function(){b.template=!1})}var Zc=0,$c=1,ad=2;function Yc(a){return"["==a[0]&&"]"==a[a.length-1]?$c:a.startsWith("data-amp-bind-")?ad:Zc};/*
 mustache.js - Logic-less {{mustache}} templates with JavaScript
 http://github.com/janl/mustache.js
*/
var fd={};
(function(a){function b(f){return"function"===typeof f}function c(f){return Q(f)?"array":typeof f}function d(f){return f.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function h(f,k){return null!=f&&"object"===typeof f&&Object.prototype.hasOwnProperty.call(f,k)}function r(f,k){return P.call(f,k)}function x(f){return!r(Na,f)}function u(f,k){function l(){if(y&&!t)for(;z.length;)delete w[z.pop()];else z=[];t=y=!1}if(!f)return[];var p=[],w=[],z=[],y=!1,t=!1,M,N,da;(function(B){"string"===typeof B&&(B=
B.split(Ka,2));if(!Q(B)||2!==B.length)throw Error("Invalid tags: "+B);M=new RegExp(d(B[0])+"\\s*");N=new RegExp("\\s*"+d(B[1]));da=new RegExp("\\s*"+d("}"+B[1]))})(k||a.tags);for(var H=new F(f),J,U,pa,qa,I;!H.eos();){f=H.pos;if(U=H.scanUntil(M)){J=0;for(var va=U.length;J<va;++J)pa=U.charAt(J),x(pa)?z.push(w.length):t=!0,w.push(["text",pa,f,f+1]),f+=1,"\n"===pa&&l()}if(!H.scan(M))break;y=!0;J=H.scan(gb)||"name";H.scan(ma);"="===J?(U=H.scanUntil(ha),H.scan(ha),H.scanUntil(N)):"{"===J?(U=H.scanUntil(da),
H.scan(oa),H.scanUntil(N),J="&"):U=H.scanUntil(N);if(!H.scan(N))throw Error("Unclosed tag at "+H.pos);qa=[J,U,f,H.pos];w.push(qa);if("#"===J||"^"===J)p.push(qa);else if("/"===J){I=p.pop();if(!I)throw Error('Unopened section "'+U+'" at '+f);if(I[1]!==U)throw Error('Unclosed section "'+I[1]+'" at '+f);}else if("name"===J||"{"===J||"&"===J)t=!0}if(I=p.pop())throw Error('Unclosed section "'+I[1]+'" at '+H.pos);return E(D(w))}function D(f){for(var k=[],l,p,w=0,z=f.length;w<z;++w)if(l=f[w])"text"===l[0]&&
p&&"text"===p[0]?(p[1]+=l[1],p[3]=l[3]):(k.push(l),p=l);return k}function E(f){for(var k=[],l=k,p=[],w,z,y=0,t=f.length;y<t;++y)switch(w=f[y],w[0]){case "#":case "^":l.push(w);p.push(w);l=w[4]=[];break;case "/":z=p.pop();z[5]=w[2];l=0<p.length?p[p.length-1][4]:k;break;default:l.push(w)}return k}function F(f){this.tail=this.string=f;this.pos=0}function A(f,k){this.view=f;this.cache={".":this.view};this.parent=k}function q(){this.cache={}}var C=Object.prototype.toString,Q=Array.isArray||function(f){return"[object Array]"===
C.call(f)},P=RegExp.prototype.test,Na=/\S/,ia={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},ma=/\s*/,Ka=/\s+/,ha=/\s*=/,oa=/\s*\}/,gb=/#|\^|\/|>|\{|&|=|!/;F.prototype.eos=function(){return""===this.tail};F.prototype.scan=function(f){f=this.tail.match(f);if(!f||0!==f.index)return"";f=f[0];this.tail=this.tail.substring(f.length);this.pos+=f.length;return f};F.prototype.scanUntil=function(f){f=this.tail.search(f);switch(f){case -1:var k=this.tail;
this.tail="";break;case 0:k="";break;default:k=this.tail.substring(0,f),this.tail=this.tail.substring(f)}this.pos+=k.length;return k};A.prototype.push=function(f){return new A(f,this)};A.prototype.lookup=function(f){var k=this.cache;if(k.hasOwnProperty(f))var l=k[f];else{for(var p=this,w,z,y=!1;p;){if(0<f.indexOf("."))for(l=p.view,w=f.split("."),z=0;null!=l&&z<w.length;){if(!h(l,w[z])){l=null;break}z===w.length-1&&(y=!0);l=l[w[z++]]}else h(p.view,f)?(l=p.view[f],y=!0):l=null;if(y)break;p=p.parent}k[f]=
l}b(l)&&(l=l.call(this.view));return l};q.prototype.clearCache=function(){this.cache={}};q.prototype.parse=function(f,k){var l=this.cache,p=l[f];null==p&&(p=l[f]=u(f,k));return p};q.prototype.render=function(f,k,l){var p=this.parse(f);k=k instanceof A?k:new A(k);return this.renderTokens(p,k,l,f)};q.prototype.renderTokens=function(f,k,l,p){for(var w="",z,y,t,M=0,N=f.length;M<N;++M)t=void 0,z=f[M],y=z[0],"#"===y?t=this.renderSection(z,k,l,p):"^"===y?t=this.renderInverted(z,k,l,p):">"===y?t=this.renderPartial(z,
k,l,p):"&"===y?t=this.unescapedValue(z,k):"name"===y?t=this.escapedValue(z,k):"text"===y&&(t=this.rawValue(z)),void 0!==t&&(w+=t);return w};q.prototype.renderSection=function(f,k,l,p){function w(da){return z.render(da,k,l)}var z=this,y="",t=k.lookup(f[1]);if(t){if(Q(t))for(var M=0,N=t.length;M<N;++M)y+=this.renderTokens(f[4],k.push(t[M]),l,p);else if("object"===typeof t||"string"===typeof t||"number"===typeof t)y+=this.renderTokens(f[4],k.push(t),l,p);else if(b(t)){if("string"!==typeof p)throw Error("Cannot use higher-order sections without the original template");
t=t.call(k.view,p.slice(f[3],f[5]),w);null!=t&&(y+=t)}else y+=this.renderTokens(f[4],k,l,p);return y}};q.prototype.renderInverted=function(f,k,l,p){var w=k.lookup(f[1]);if(!w||Q(w)&&0===w.length)return this.renderTokens(f[4],k,l,p)};q.prototype.renderPartial=function(f,k,l){if(l&&(f=b(l)?l(f[1]):l[f[1]],null!=f))return this.renderTokens(this.parse(f),k,l,f)};q.prototype.unescapedValue=function(f,k){f=k.lookup(f[1]);if(null!=f)return a.sanitizeUnescaped?a.sanitizeUnescaped(f):f};q.prototype.escapedValue=
function(f,k){f=k.lookup(f[1]);if(null!=f)return a.escape(f)};q.prototype.rawValue=function(f){return f[1]};a.name="mustache.js";a.version="2.2.0";a.tags=["{{","}}"];var wa=new q;a.clearCache=function(){return wa.clearCache()};a.parse=function(f,k){return wa.parse(f,k)};a.render=function(f,k,l){if("string"!==typeof f)throw new TypeError('Invalid template! Template should be a "string" but "'+c(f)+'" was given as the first argument for mustache#render(template, view, partials)');return wa.render(f,
k,l)};a.to_html=function(f,k,l,p){f=a.render(f,k,l);if(b(p))p(f);else return f};a.escape=function(f){return String(f).replace(/[&<>"'`=\/]/g,function(k){return ia[k]})};a.sanitizeUnescaped=null;a.setUnescapedSanitizer=function(f){a.sanitizeUnescaped=f};a.Scanner=F;a.Context=A;a.Writer=q})(fd);function Z(a,b){O.call(this,a,b);var c=this;Ga(b,function(){return new Vc(b.document)});this.C=Oa(b,"purifier");fd.setUnescapedSanitizer(function(d){return c.C.purifyTagsForTripleMustache(d)})}Z.prototype=ba(O.prototype);Z.prototype.constructor=Z;if(sa)sa(Z,O);else for(var gd in O)if("prototype"!=gd)if(Object.defineProperties){var hd=Object.getOwnPropertyDescriptor(O,gd);hd&&Object.defineProperty(Z,gd,hd)}else Z[gd]=O[gd];Z.M=O.prototype;
Z.prototype.compileCallback=function(){if(!this.viewerCanRenderTemplates()){this.G={};if("TEMPLATE"==this.element.tagName){var a=this.element;if("content"in a)var b=a.content.cloneNode(!0);else{b=a.ownerDocument.createDocumentFragment();var c=b.ownerDocument.createDocumentFragment();for(a=a.firstChild;a;a=a.nextSibling)c.appendChild(a.cloneNode(!0));b.appendChild(c)}id(this,b);c=this.element.ownerDocument.createElement("div");c.appendChild(b);b=c.innerHTML}else b="SCRIPT"==this.element.tagName?this.element.textContent:
"";this.H=b;try{fd.parse(this.H,void 0)}catch(d){Ea().error("amp-mustache",d.message,this.element)}}};function id(a,b){var c=b.querySelectorAll("template");Ra(c,function(d,h){h="__AMP_NESTED_TEMPLATE_"+h;a.G[h]=d.outerHTML;var r=a.element.ownerDocument.createTextNode("{{{"+h+"}}}");d.parentNode.replaceChild(r,d)})}Z.prototype.setHtml=function(a){var b=this.tryUnwrap(this.C.purifyHtml("<div><div>"+(a+"</div></div>")).firstElementChild);return this.unwrapChildren(b)};
Z.prototype.render=function(a){return this.tryUnwrap(jd(this,a))};Z.prototype.renderAsString=function(a){return jd(this,a).innerHTML};function jd(a,b){var c=b;"object"===typeof b&&(c=Object.assign({},b,a.G));b=fd.render(a.H,c,void 0);return a.C.purifyHtml("<div>"+b+"</div>").firstElementChild}(function(a){a.registerTemplate("amp-mustache",Z)})(self.AMP);
})});

//# sourceMappingURL=amp-mustache-0.2.js.map
