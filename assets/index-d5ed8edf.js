(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vd={exports:{}},ko={},wd={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),nm=Symbol.for("react.portal"),rm=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),sm=Symbol.for("react.provider"),am=Symbol.for("react.context"),lm=Symbol.for("react.forward_ref"),um=Symbol.for("react.suspense"),cm=Symbol.for("react.memo"),dm=Symbol.for("react.lazy"),ru=Symbol.iterator;function fm(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var xd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_d=Object.assign,kd={};function tr(e,t,n){this.props=e,this.context=t,this.refs=kd,this.updater=n||xd}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sd(){}Sd.prototype=tr.prototype;function Ia(e,t,n){this.props=e,this.context=t,this.refs=kd,this.updater=n||xd}var za=Ia.prototype=new Sd;za.constructor=Ia;_d(za,tr.prototype);za.isPureReactComponent=!0;var iu=Array.isArray,Pd=Object.prototype.hasOwnProperty,Ba={current:null},Cd={key:!0,ref:!0,__self:!0,__source:!0};function Td(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Pd.call(t,r)&&!Cd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Jr,type:e,key:o,ref:s,props:i,_owner:Ba.current}}function pm(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function hm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ou=/\/+/g;function Qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hm(""+e.key):t.toString(36)}function Ai(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Jr:case nm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Qo(s,0):r,iu(i)?(n="",e!=null&&(n=e.replace(ou,"$&/")+"/"),Ai(i,t,n,"",function(u){return u})):i!=null&&(Ua(i)&&(i=pm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ou,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",iu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Qo(o,a);s+=Ai(o,t,n,l,i)}else if(l=fm(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Qo(o,a++),s+=Ai(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function li(e,t,n){if(e==null)return e;var r=[],i=0;return Ai(e,r,"","",function(o){return t.call(n,o,i++)}),r}function mm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Fi={transition:null},gm={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Fi,ReactCurrentOwner:Ba};function Ed(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:li,forEach:function(e,t,n){li(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return li(e,function(){t++}),t},toArray:function(e){return li(e,function(t){return t})||[]},only:function(e){if(!Ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=tr;N.Fragment=rm;N.Profiler=om;N.PureComponent=Ia;N.StrictMode=im;N.Suspense=um;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm;N.act=Ed;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_d({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ba.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Pd.call(t,l)&&!Cd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Jr,type:e.type,key:i,ref:o,props:r,_owner:s}};N.createContext=function(e){return e={$$typeof:am,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sm,_context:e},e.Consumer=e};N.createElement=Td;N.createFactory=function(e){var t=Td.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:lm,render:e}};N.isValidElement=Ua;N.lazy=function(e){return{$$typeof:dm,_payload:{_status:-1,_result:e},_init:mm}};N.memo=function(e,t){return{$$typeof:cm,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=Fi.transition;Fi.transition={};try{e()}finally{Fi.transition=t}};N.unstable_act=Ed;N.useCallback=function(e,t){return Se.current.useCallback(e,t)};N.useContext=function(e){return Se.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};N.useEffect=function(e,t){return Se.current.useEffect(e,t)};N.useId=function(){return Se.current.useId()};N.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return Se.current.useMemo(e,t)};N.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};N.useRef=function(e){return Se.current.useRef(e)};N.useState=function(e){return Se.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return Se.current.useTransition()};N.version="18.3.1";wd.exports=N;var b=wd.exports;const st=yd(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=b,vm=Symbol.for("react.element"),wm=Symbol.for("react.fragment"),xm=Object.prototype.hasOwnProperty,_m=ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,km={key:!0,ref:!0,__self:!0,__source:!0};function bd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)xm.call(t,r)&&!km.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:vm,type:e,key:o,ref:s,props:i,_owner:_m.current}}ko.Fragment=wm;ko.jsx=bd;ko.jsxs=bd;vd.exports=ko;var V=vd.exports,Ls={},Ad={exports:{}},Ne={},Fd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,M){var R=E.length;E.push(M);e:for(;0<R;){var D=R-1>>>1,O=E[D];if(0<i(O,M))E[D]=M,E[R]=O,R=D;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var M=E[0],R=E.pop();if(R!==M){E[0]=R;e:for(var D=0,O=E.length,ct=O>>>1;D<ct;){var ie=2*(D+1)-1,je=E[ie],le=ie+1,Ie=E[le];if(0>i(je,R))le<O&&0>i(Ie,je)?(E[D]=Ie,E[le]=R,D=le):(E[D]=je,E[ie]=R,D=ie);else if(le<O&&0>i(Ie,R))E[D]=Ie,E[le]=R,D=le;else break e}}return M}function i(E,M){var R=E.sortIndex-M.sortIndex;return R!==0?R:E.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,p=null,h=3,y=!1,x=!1,v=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=E)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function g(E){if(v=!1,f(E),!x)if(n(l)!==null)x=!0,G(w);else{var M=n(u);M!==null&&we(g,M.startTime-E)}}function w(E,M){x=!1,v&&(v=!1,m(S),S=-1),y=!0;var R=h;try{for(f(M),p=n(l);p!==null&&(!(p.expirationTime>M)||E&&!j());){var D=p.callback;if(typeof D=="function"){p.callback=null,h=p.priorityLevel;var O=D(p.expirationTime<=M);M=e.unstable_now(),typeof O=="function"?p.callback=O:p===n(l)&&r(l),f(M)}else r(l);p=n(l)}if(p!==null)var ct=!0;else{var ie=n(u);ie!==null&&we(g,ie.startTime-M),ct=!1}return ct}finally{p=null,h=R,y=!1}}var _=!1,k=null,S=-1,C=5,A=-1;function j(){return!(e.unstable_now()-A<C)}function B(){if(k!==null){var E=e.unstable_now();A=E;var M=!0;try{M=k(!0,E)}finally{M?ae():(_=!1,k=null)}}else _=!1}var ae;if(typeof c=="function")ae=function(){c(B)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,nt=ee.port2;ee.port1.onmessage=B,ae=function(){nt.postMessage(null)}}else ae=function(){P(B,0)};function G(E){k=E,_||(_=!0,ae())}function we(E,M){S=P(function(){E(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,G(w))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var R=h;h=M;try{return E()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,M){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=h;h=E;try{return M()}finally{h=R}},e.unstable_scheduleCallback=function(E,M,R){var D=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?D+R:D):R=D,E){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=R+O,E={id:d++,callback:M,priorityLevel:E,startTime:R,expirationTime:O,sortIndex:-1},R>D?(E.sortIndex=R,t(u,E),n(l)===null&&E===n(u)&&(v?(m(S),S=-1):v=!0,we(g,R-D))):(E.sortIndex=O,t(l,E),x||y||(x=!0,G(w))),E},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(E){var M=h;return function(){var R=h;h=M;try{return E.apply(this,arguments)}finally{h=R}}}})(Md);Fd.exports=Md;var Sm=Fd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm=b,Re=Sm;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dd=new Set,Lr={};function vn(e,t){Kn(e,t),Kn(e+"Capture",t)}function Kn(e,t){for(Lr[e]=t,e=0;e<t.length;e++)Dd.add(t[e])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rs=Object.prototype.hasOwnProperty,Cm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,su={},au={};function Tm(e){return Rs.call(au,e)?!0:Rs.call(su,e)?!1:Cm.test(e)?au[e]=!0:(su[e]=!0,!1)}function Em(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bm(e,t,n,r){if(t===null||typeof t>"u"||Em(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var $a=/[\-:]([a-z])/g;function Ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($a,Ha);pe[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($a,Ha);pe[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($a,Ha);pe[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wa(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bm(t,n,i,r)&&(n=null),r||i===null?Tm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ui=Symbol.for("react.element"),Pn=Symbol.for("react.portal"),Cn=Symbol.for("react.fragment"),Ka=Symbol.for("react.strict_mode"),Vs=Symbol.for("react.profiler"),Ld=Symbol.for("react.provider"),Rd=Symbol.for("react.context"),Ga=Symbol.for("react.forward_ref"),Ns=Symbol.for("react.suspense"),Os=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Vd=Symbol.for("react.offscreen"),lu=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Yo;function mr(e){if(Yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yo=t&&t[1]||""}return`
`+Yo+e}var Xo=!1;function qo(e,t){if(!e||Xo)return"";Xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Xo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function Am(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=qo(e.type,!1),e;case 11:return e=qo(e.type.render,!1),e;case 1:return e=qo(e.type,!0),e;default:return""}}function js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cn:return"Fragment";case Pn:return"Portal";case Vs:return"Profiler";case Ka:return"StrictMode";case Ns:return"Suspense";case Os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rd:return(e.displayName||"Context")+".Consumer";case Ld:return(e._context.displayName||"Context")+".Provider";case Ga:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qa:return t=e.displayName||null,t!==null?t:js(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return js(e(t))}catch{}}return null}function Fm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return js(t);case 8:return t===Ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mm(e){var t=Nd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ci(e){e._valueTracker||(e._valueTracker=Mm(e))}function Od(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Nd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Is(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function uu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jd(e,t){t=t.checked,t!=null&&Wa(e,"checked",t,!1)}function zs(e,t){jd(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bs(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bs(e,t,n){(t!=="number"||$i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gr=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function du(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(gr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function Id(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $s(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var di,Bd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(di=di||document.createElement("div"),di.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dm=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(e){Dm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xr[t]=xr[e]})});function Ud(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xr.hasOwnProperty(e)&&xr[e]?(""+t).trim():t+"px"}function $d(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ud(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lm=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hs(e,t){if(t){if(Lm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Ws(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ks=null;function Ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Bn=null,Un=null;function pu(e){if(e=ni(e)){if(typeof Gs!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Eo(t),Gs(e.stateNode,e.type,t))}}function Hd(e){Bn?Un?Un.push(e):Un=[e]:Bn=e}function Wd(){if(Bn){var e=Bn,t=Un;if(Un=Bn=null,pu(e),t)for(e=0;e<t.length;e++)pu(t[e])}}function Kd(e,t){return e(t)}function Gd(){}var Zo=!1;function Qd(e,t,n){if(Zo)return e(t,n);Zo=!0;try{return Kd(e,t,n)}finally{Zo=!1,(Bn!==null||Un!==null)&&(Gd(),Wd())}}function Vr(e,t){var n=e.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Qs=!1;if(wt)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Qs=!1}function Rm(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var _r=!1,Hi=null,Wi=!1,Ys=null,Vm={onError:function(e){_r=!0,Hi=e}};function Nm(e,t,n,r,i,o,s,a,l){_r=!1,Hi=null,Rm.apply(Vm,arguments)}function Om(e,t,n,r,i,o,s,a,l){if(Nm.apply(this,arguments),_r){if(_r){var u=Hi;_r=!1,Hi=null}else throw Error(T(198));Wi||(Wi=!0,Ys=u)}}function wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hu(e){if(wn(e)!==e)throw Error(T(188))}function jm(e){var t=e.alternate;if(!t){if(t=wn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return hu(i),e;if(o===r)return hu(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Xd(e){return e=jm(e),e!==null?qd(e):null}function qd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qd(e);if(t!==null)return t;e=e.sibling}return null}var Zd=Re.unstable_scheduleCallback,mu=Re.unstable_cancelCallback,Im=Re.unstable_shouldYield,zm=Re.unstable_requestPaint,te=Re.unstable_now,Bm=Re.unstable_getCurrentPriorityLevel,Xa=Re.unstable_ImmediatePriority,Jd=Re.unstable_UserBlockingPriority,Ki=Re.unstable_NormalPriority,Um=Re.unstable_LowPriority,ef=Re.unstable_IdlePriority,So=null,at=null;function $m(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(So,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Km,Hm=Math.log,Wm=Math.LN2;function Km(e){return e>>>=0,e===0?32:31-(Hm(e)/Wm|0)|0}var fi=64,pi=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=yr(a):(o&=s,o!==0&&(r=yr(o)))}else s=n&~i,s!==0?r=yr(s):o!==0&&(r=yr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function Gm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Je(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Gm(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tf(){var e=fi;return fi<<=1,!(fi&4194240)&&(fi=64),e}function Jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Ym(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rf,Za,of,sf,af,qs=!1,hi=[],Vt=null,Nt=null,Ot=null,Nr=new Map,Or=new Map,Mt=[],Xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gu(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function ar(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ni(t),t!==null&&Za(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qm(e,t,n,r,i){switch(t){case"focusin":return Vt=ar(Vt,e,t,n,r,i),!0;case"dragenter":return Nt=ar(Nt,e,t,n,r,i),!0;case"mouseover":return Ot=ar(Ot,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Nr.set(o,ar(Nr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Or.set(o,ar(Or.get(o)||null,e,t,n,r,i)),!0}return!1}function lf(e){var t=an(e.target);if(t!==null){var n=wn(t);if(n!==null){if(t=n.tag,t===13){if(t=Yd(n),t!==null){e.blockedOn=t,af(e.priority,function(){of(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ks=r,n.target.dispatchEvent(r),Ks=null}else return t=ni(n),t!==null&&Za(t),e.blockedOn=n,!1;t.shift()}return!0}function yu(e,t,n){Mi(e)&&n.delete(t)}function Zm(){qs=!1,Vt!==null&&Mi(Vt)&&(Vt=null),Nt!==null&&Mi(Nt)&&(Nt=null),Ot!==null&&Mi(Ot)&&(Ot=null),Nr.forEach(yu),Or.forEach(yu)}function lr(e,t){e.blockedOn===t&&(e.blockedOn=null,qs||(qs=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Zm)))}function jr(e){function t(i){return lr(i,e)}if(0<hi.length){lr(hi[0],e);for(var n=1;n<hi.length;n++){var r=hi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&lr(Vt,e),Nt!==null&&lr(Nt,e),Ot!==null&&lr(Ot,e),Nr.forEach(t),Or.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)lf(n),n.blockedOn===null&&Mt.shift()}var $n=Pt.ReactCurrentBatchConfig,Qi=!0;function Jm(e,t,n,r){var i=z,o=$n.transition;$n.transition=null;try{z=1,Ja(e,t,n,r)}finally{z=i,$n.transition=o}}function eg(e,t,n,r){var i=z,o=$n.transition;$n.transition=null;try{z=4,Ja(e,t,n,r)}finally{z=i,$n.transition=o}}function Ja(e,t,n,r){if(Qi){var i=Zs(e,t,n,r);if(i===null)us(e,t,r,Yi,n),gu(e,r);else if(qm(i,e,t,n,r))r.stopPropagation();else if(gu(e,r),t&4&&-1<Xm.indexOf(e)){for(;i!==null;){var o=ni(i);if(o!==null&&rf(o),o=Zs(e,t,n,r),o===null&&us(e,t,r,Yi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else us(e,t,r,null,n)}}var Yi=null;function Zs(e,t,n,r){if(Yi=null,e=Ya(r),e=an(e),e!==null)if(t=wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yi=e,null}function uf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bm()){case Xa:return 1;case Jd:return 4;case Ki:case Um:return 16;case ef:return 536870912;default:return 16}default:return 16}}var Lt=null,el=null,Di=null;function cf(){if(Di)return Di;var e,t=el,n=t.length,r,i="value"in Lt?Lt.value:Lt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Di=i.slice(e,1<r?1-r:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mi(){return!0}function vu(){return!1}function Oe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?mi:vu,this.isPropagationStopped=vu,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Oe(nr),ti=q({},nr,{view:0,detail:0}),tg=Oe(ti),es,ts,ur,Po=q({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(es=e.screenX-ur.screenX,ts=e.screenY-ur.screenY):ts=es=0,ur=e),es)},movementY:function(e){return"movementY"in e?e.movementY:ts}}),wu=Oe(Po),ng=q({},Po,{dataTransfer:0}),rg=Oe(ng),ig=q({},ti,{relatedTarget:0}),ns=Oe(ig),og=q({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),sg=Oe(og),ag=q({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lg=Oe(ag),ug=q({},nr,{data:0}),xu=Oe(ug),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fg[e])?!!t[e]:!1}function nl(){return pg}var hg=q({},ti,{key:function(e){if(e.key){var t=cg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nl,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=Oe(hg),gg=q({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=Oe(gg),yg=q({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nl}),vg=Oe(yg),wg=q({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=Oe(wg),_g=q({},Po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kg=Oe(_g),Sg=[9,13,27,32],rl=wt&&"CompositionEvent"in window,kr=null;wt&&"documentMode"in document&&(kr=document.documentMode);var Pg=wt&&"TextEvent"in window&&!kr,df=wt&&(!rl||kr&&8<kr&&11>=kr),ku=String.fromCharCode(32),Su=!1;function ff(e,t){switch(e){case"keyup":return Sg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function Cg(e,t){switch(e){case"compositionend":return pf(t);case"keypress":return t.which!==32?null:(Su=!0,ku);case"textInput":return e=t.data,e===ku&&Su?null:e;default:return null}}function Tg(e,t){if(Tn)return e==="compositionend"||!rl&&ff(e,t)?(e=cf(),Di=el=Lt=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return df&&t.locale!=="ko"?null:t.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Eg[e.type]:t==="textarea"}function hf(e,t,n,r){Hd(r),t=Xi(t,"onChange"),0<t.length&&(n=new tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Sr=null,Ir=null;function bg(e){Cf(e,0)}function Co(e){var t=An(e);if(Od(t))return e}function Ag(e,t){if(e==="change")return t}var mf=!1;if(wt){var rs;if(wt){var is="oninput"in document;if(!is){var Cu=document.createElement("div");Cu.setAttribute("oninput","return;"),is=typeof Cu.oninput=="function"}rs=is}else rs=!1;mf=rs&&(!document.documentMode||9<document.documentMode)}function Tu(){Sr&&(Sr.detachEvent("onpropertychange",gf),Ir=Sr=null)}function gf(e){if(e.propertyName==="value"&&Co(Ir)){var t=[];hf(t,Ir,e,Ya(e)),Qd(bg,t)}}function Fg(e,t,n){e==="focusin"?(Tu(),Sr=t,Ir=n,Sr.attachEvent("onpropertychange",gf)):e==="focusout"&&Tu()}function Mg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Ir)}function Dg(e,t){if(e==="click")return Co(t)}function Lg(e,t){if(e==="input"||e==="change")return Co(t)}function Rg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:Rg;function zr(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rs.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function Eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bu(e,t){var n=Eu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eu(n)}}function yf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vf(){for(var e=window,t=$i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vg(e){var t=vf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yf(n.ownerDocument.documentElement,n)){if(r!==null&&il(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=bu(n,o);var s=bu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ng=wt&&"documentMode"in document&&11>=document.documentMode,En=null,Js=null,Pr=null,ea=!1;function Au(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ea||En==null||En!==$i(r)||(r=En,"selectionStart"in r&&il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&zr(Pr,r)||(Pr=r,r=Xi(Js,"onSelect"),0<r.length&&(t=new tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function gi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},os={},wf={};wt&&(wf=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function To(e){if(os[e])return os[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wf)return os[e]=t[n];return e}var xf=To("animationend"),_f=To("animationiteration"),kf=To("animationstart"),Sf=To("transitionend"),Pf=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){Pf.set(e,t),vn(t,[e])}for(var ss=0;ss<Fu.length;ss++){var as=Fu[ss],Og=as.toLowerCase(),jg=as[0].toUpperCase()+as.slice(1);Xt(Og,"on"+jg)}Xt(xf,"onAnimationEnd");Xt(_f,"onAnimationIteration");Xt(kf,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Sf,"onTransitionEnd");Kn("onMouseEnter",["mouseout","mouseover"]);Kn("onMouseLeave",["mouseout","mouseover"]);Kn("onPointerEnter",["pointerout","pointerover"]);Kn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ig=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function Mu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Om(r,t,void 0,e),e.currentTarget=null}function Cf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Mu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Mu(i,a,u),o=l}}}if(Wi)throw e=Ys,Wi=!1,Ys=null,e}function H(e,t){var n=t[oa];n===void 0&&(n=t[oa]=new Set);var r=e+"__bubble";n.has(r)||(Tf(t,e,2,!1),n.add(r))}function ls(e,t,n){var r=0;t&&(r|=4),Tf(n,e,r,t)}var yi="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[yi]){e[yi]=!0,Dd.forEach(function(n){n!=="selectionchange"&&(Ig.has(n)||ls(n,!1,e),ls(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yi]||(t[yi]=!0,ls("selectionchange",!1,t))}}function Tf(e,t,n,r){switch(uf(t)){case 1:var i=Jm;break;case 4:i=eg;break;default:i=Ja}n=i.bind(null,t,n,e),i=void 0,!Qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function us(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=an(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Qd(function(){var u=o,d=Ya(n),p=[];e:{var h=Pf.get(e);if(h!==void 0){var y=tl,x=e;switch(e){case"keypress":if(Li(n)===0)break e;case"keydown":case"keyup":y=mg;break;case"focusin":x="focus",y=ns;break;case"focusout":x="blur",y=ns;break;case"beforeblur":case"afterblur":y=ns;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=vg;break;case xf:case _f:case kf:y=sg;break;case Sf:y=xg;break;case"scroll":y=tg;break;case"wheel":y=kg;break;case"copy":case"cut":case"paste":y=lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=_u}var v=(t&4)!==0,P=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var c=u,f;c!==null;){f=c;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,m!==null&&(g=Vr(c,m),g!=null&&v.push(Ur(c,g,f)))),P)break;c=c.return}0<v.length&&(h=new y(h,x,null,n,d),p.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Ks&&(x=n.relatedTarget||n.fromElement)&&(an(x)||x[xt]))break e;if((y||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?an(x):null,x!==null&&(P=wn(x),x!==P||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(v=wu,g="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=_u,g="onPointerLeave",m="onPointerEnter",c="pointer"),P=y==null?h:An(y),f=x==null?h:An(x),h=new v(g,c+"leave",y,n,d),h.target=P,h.relatedTarget=f,g=null,an(d)===u&&(v=new v(m,c+"enter",x,n,d),v.target=f,v.relatedTarget=P,g=v),P=g,y&&x)t:{for(v=y,m=x,c=0,f=v;f;f=Sn(f))c++;for(f=0,g=m;g;g=Sn(g))f++;for(;0<c-f;)v=Sn(v),c--;for(;0<f-c;)m=Sn(m),f--;for(;c--;){if(v===m||m!==null&&v===m.alternate)break t;v=Sn(v),m=Sn(m)}v=null}else v=null;y!==null&&Du(p,h,y,v,!1),x!==null&&P!==null&&Du(p,P,x,v,!0)}}e:{if(h=u?An(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var w=Ag;else if(Pu(h))if(mf)w=Lg;else{w=Mg;var _=Fg}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=Dg);if(w&&(w=w(e,u))){hf(p,w,n,d);break e}_&&_(e,h,u),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&Bs(h,"number",h.value)}switch(_=u?An(u):window,e){case"focusin":(Pu(_)||_.contentEditable==="true")&&(En=_,Js=u,Pr=null);break;case"focusout":Pr=Js=En=null;break;case"mousedown":ea=!0;break;case"contextmenu":case"mouseup":case"dragend":ea=!1,Au(p,n,d);break;case"selectionchange":if(Ng)break;case"keydown":case"keyup":Au(p,n,d)}var k;if(rl)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Tn?ff(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(df&&n.locale!=="ko"&&(Tn||S!=="onCompositionStart"?S==="onCompositionEnd"&&Tn&&(k=cf()):(Lt=d,el="value"in Lt?Lt.value:Lt.textContent,Tn=!0)),_=Xi(u,S),0<_.length&&(S=new xu(S,e,null,n,d),p.push({event:S,listeners:_}),k?S.data=k:(k=pf(n),k!==null&&(S.data=k)))),(k=Pg?Cg(e,n):Tg(e,n))&&(u=Xi(u,"onBeforeInput"),0<u.length&&(d=new xu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=k))}Cf(p,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vr(e,n),o!=null&&r.unshift(Ur(e,o,i)),o=Vr(e,t),o!=null&&r.push(Ur(e,o,i))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Du(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Vr(n,o),l!=null&&s.unshift(Ur(n,l,a))):i||(l=Vr(n,o),l!=null&&s.push(Ur(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var zg=/\r\n?/g,Bg=/\u0000|\uFFFD/g;function Lu(e){return(typeof e=="string"?e:""+e).replace(zg,`
`).replace(Bg,"")}function vi(e,t,n){if(t=Lu(t),Lu(e)!==t&&n)throw Error(T(425))}function qi(){}var ta=null,na=null;function ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ia=typeof setTimeout=="function"?setTimeout:void 0,Ug=typeof clearTimeout=="function"?clearTimeout:void 0,Ru=typeof Promise=="function"?Promise:void 0,$g=typeof queueMicrotask=="function"?queueMicrotask:typeof Ru<"u"?function(e){return Ru.resolve(null).then(e).catch(Hg)}:ia;function Hg(e){setTimeout(function(){throw e})}function cs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);jr(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),ot="__reactFiber$"+rr,$r="__reactProps$"+rr,xt="__reactContainer$"+rr,oa="__reactEvents$"+rr,Wg="__reactListeners$"+rr,Kg="__reactHandles$"+rr;function an(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vu(e);e!==null;){if(n=e[ot])return n;e=Vu(e)}return t}e=n,n=e.parentNode}return null}function ni(e){return e=e[ot]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Eo(e){return e[$r]||null}var sa=[],Fn=-1;function qt(e){return{current:e}}function W(e){0>Fn||(e.current=sa[Fn],sa[Fn]=null,Fn--)}function U(e,t){Fn++,sa[Fn]=e.current,e.current=t}var Gt={},ve=qt(Gt),Ee=qt(!1),pn=Gt;function Gn(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function be(e){return e=e.childContextTypes,e!=null}function Zi(){W(Ee),W(ve)}function Nu(e,t,n){if(ve.current!==Gt)throw Error(T(168));U(ve,t),U(Ee,n)}function Ef(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,Fm(e)||"Unknown",i));return q({},n,r)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,pn=ve.current,U(ve,e),U(Ee,Ee.current),!0}function Ou(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Ef(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,W(Ee),W(ve),U(ve,e)):W(Ee),U(Ee,n)}var ft=null,bo=!1,ds=!1;function bf(e){ft===null?ft=[e]:ft.push(e)}function Gg(e){bo=!0,bf(e)}function Zt(){if(!ds&&ft!==null){ds=!0;var e=0,t=z;try{var n=ft;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,bo=!1}catch(i){throw ft!==null&&(ft=ft.slice(e+1)),Zd(Xa,Zt),i}finally{z=t,ds=!1}}return null}var Mn=[],Dn=0,eo=null,to=0,$e=[],He=0,hn=null,pt=1,ht="";function tn(e,t){Mn[Dn++]=to,Mn[Dn++]=eo,eo=e,to=t}function Af(e,t,n){$e[He++]=pt,$e[He++]=ht,$e[He++]=hn,hn=e;var r=pt;e=ht;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var o=32-Je(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,pt=1<<32-Je(t)+i|n<<i|r,ht=o+e}else pt=1<<o|n<<i|r,ht=e}function ol(e){e.return!==null&&(tn(e,1),Af(e,1,0))}function sl(e){for(;e===eo;)eo=Mn[--Dn],Mn[Dn]=null,to=Mn[--Dn],Mn[Dn]=null;for(;e===hn;)hn=$e[--He],$e[He]=null,ht=$e[--He],$e[He]=null,pt=$e[--He],$e[He]=null}var Le=null,De=null,K=!1,Ze=null;function Ff(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ju(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,De=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hn!==null?{id:pt,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,De=null,!0):!1;default:return!1}}function aa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function la(e){if(K){var t=De;if(t){var n=t;if(!ju(e,t)){if(aa(e))throw Error(T(418));t=jt(n.nextSibling);var r=Le;t&&ju(e,t)?Ff(r,n):(e.flags=e.flags&-4097|2,K=!1,Le=e)}}else{if(aa(e))throw Error(T(418));e.flags=e.flags&-4097|2,K=!1,Le=e}}}function Iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function wi(e){if(e!==Le)return!1;if(!K)return Iu(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ra(e.type,e.memoizedProps)),t&&(t=De)){if(aa(e))throw Mf(),Error(T(418));for(;t;)Ff(e,t),t=jt(t.nextSibling)}if(Iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Le?jt(e.stateNode.nextSibling):null;return!0}function Mf(){for(var e=De;e;)e=jt(e.nextSibling)}function Qn(){De=Le=null,K=!1}function al(e){Ze===null?Ze=[e]:Ze.push(e)}var Qg=Pt.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function xi(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zu(e){var t=e._init;return t(e._payload)}function Df(e){function t(m,c){if(e){var f=m.deletions;f===null?(m.deletions=[c],m.flags|=16):f.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function i(m,c){return m=Ut(m,c),m.index=0,m.sibling=null,m}function o(m,c,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<c?(m.flags|=2,c):f):(m.flags|=2,c)):(m.flags|=1048576,c)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,c,f,g){return c===null||c.tag!==6?(c=vs(f,m.mode,g),c.return=m,c):(c=i(c,f),c.return=m,c)}function l(m,c,f,g){var w=f.type;return w===Cn?d(m,c,f.props.children,g,f.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===bt&&zu(w)===c.type)?(g=i(c,f.props),g.ref=cr(m,c,f),g.return=m,g):(g=zi(f.type,f.key,f.props,null,m.mode,g),g.ref=cr(m,c,f),g.return=m,g)}function u(m,c,f,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=ws(f,m.mode,g),c.return=m,c):(c=i(c,f.children||[]),c.return=m,c)}function d(m,c,f,g,w){return c===null||c.tag!==7?(c=fn(f,m.mode,g,w),c.return=m,c):(c=i(c,f),c.return=m,c)}function p(m,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=vs(""+c,m.mode,f),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ui:return f=zi(c.type,c.key,c.props,null,m.mode,f),f.ref=cr(m,null,c),f.return=m,f;case Pn:return c=ws(c,m.mode,f),c.return=m,c;case bt:var g=c._init;return p(m,g(c._payload),f)}if(gr(c)||or(c))return c=fn(c,m.mode,f,null),c.return=m,c;xi(m,c)}return null}function h(m,c,f,g){var w=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return w!==null?null:a(m,c,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ui:return f.key===w?l(m,c,f,g):null;case Pn:return f.key===w?u(m,c,f,g):null;case bt:return w=f._init,h(m,c,w(f._payload),g)}if(gr(f)||or(f))return w!==null?null:d(m,c,f,g,null);xi(m,f)}return null}function y(m,c,f,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(f)||null,a(c,m,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ui:return m=m.get(g.key===null?f:g.key)||null,l(c,m,g,w);case Pn:return m=m.get(g.key===null?f:g.key)||null,u(c,m,g,w);case bt:var _=g._init;return y(m,c,f,_(g._payload),w)}if(gr(g)||or(g))return m=m.get(f)||null,d(c,m,g,w,null);xi(c,g)}return null}function x(m,c,f,g){for(var w=null,_=null,k=c,S=c=0,C=null;k!==null&&S<f.length;S++){k.index>S?(C=k,k=null):C=k.sibling;var A=h(m,k,f[S],g);if(A===null){k===null&&(k=C);break}e&&k&&A.alternate===null&&t(m,k),c=o(A,c,S),_===null?w=A:_.sibling=A,_=A,k=C}if(S===f.length)return n(m,k),K&&tn(m,S),w;if(k===null){for(;S<f.length;S++)k=p(m,f[S],g),k!==null&&(c=o(k,c,S),_===null?w=k:_.sibling=k,_=k);return K&&tn(m,S),w}for(k=r(m,k);S<f.length;S++)C=y(k,m,S,f[S],g),C!==null&&(e&&C.alternate!==null&&k.delete(C.key===null?S:C.key),c=o(C,c,S),_===null?w=C:_.sibling=C,_=C);return e&&k.forEach(function(j){return t(m,j)}),K&&tn(m,S),w}function v(m,c,f,g){var w=or(f);if(typeof w!="function")throw Error(T(150));if(f=w.call(f),f==null)throw Error(T(151));for(var _=w=null,k=c,S=c=0,C=null,A=f.next();k!==null&&!A.done;S++,A=f.next()){k.index>S?(C=k,k=null):C=k.sibling;var j=h(m,k,A.value,g);if(j===null){k===null&&(k=C);break}e&&k&&j.alternate===null&&t(m,k),c=o(j,c,S),_===null?w=j:_.sibling=j,_=j,k=C}if(A.done)return n(m,k),K&&tn(m,S),w;if(k===null){for(;!A.done;S++,A=f.next())A=p(m,A.value,g),A!==null&&(c=o(A,c,S),_===null?w=A:_.sibling=A,_=A);return K&&tn(m,S),w}for(k=r(m,k);!A.done;S++,A=f.next())A=y(k,m,S,A.value,g),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?S:A.key),c=o(A,c,S),_===null?w=A:_.sibling=A,_=A);return e&&k.forEach(function(B){return t(m,B)}),K&&tn(m,S),w}function P(m,c,f,g){if(typeof f=="object"&&f!==null&&f.type===Cn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ui:e:{for(var w=f.key,_=c;_!==null;){if(_.key===w){if(w=f.type,w===Cn){if(_.tag===7){n(m,_.sibling),c=i(_,f.props.children),c.return=m,m=c;break e}}else if(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===bt&&zu(w)===_.type){n(m,_.sibling),c=i(_,f.props),c.ref=cr(m,_,f),c.return=m,m=c;break e}n(m,_);break}else t(m,_);_=_.sibling}f.type===Cn?(c=fn(f.props.children,m.mode,g,f.key),c.return=m,m=c):(g=zi(f.type,f.key,f.props,null,m.mode,g),g.ref=cr(m,c,f),g.return=m,m=g)}return s(m);case Pn:e:{for(_=f.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(m,c.sibling),c=i(c,f.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=ws(f,m.mode,g),c.return=m,m=c}return s(m);case bt:return _=f._init,P(m,c,_(f._payload),g)}if(gr(f))return x(m,c,f,g);if(or(f))return v(m,c,f,g);xi(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(m,c.sibling),c=i(c,f),c.return=m,m=c):(n(m,c),c=vs(f,m.mode,g),c.return=m,m=c),s(m)):n(m,c)}return P}var Yn=Df(!0),Lf=Df(!1),no=qt(null),ro=null,Ln=null,ll=null;function ul(){ll=Ln=ro=null}function cl(e){var t=no.current;W(no),e._currentValue=t}function ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hn(e,t){ro=e,ll=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(ll!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(ro===null)throw Error(T(308));Ln=e,ro.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var ln=null;function dl(e){ln===null?ln=[e]:ln.push(e)}function Rf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,dl(t)):(n.next=i.next,i.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function It(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,_t(e,n)}return i=r.interleaved,i===null?(t.next=t,dl(r)):(t.next=i.next,i.next=t),r.interleaved=t,_t(e,n)}function Ri(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qa(e,n)}}function Bu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function io(e,t,n,r){var i=e.updateQueue;At=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,d=u=l=null,a=o;do{var h=a.lane,y=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,v=a;switch(h=t,y=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){p=x.call(y,p,h);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,h=typeof x=="function"?x.call(y,p,h):x,h==null)break e;p=q({},p,h);break e;case 2:At=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=p):d=d.next=y,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);gn|=s,e.lanes=s,e.memoizedState=p}}function Uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var ri={},lt=qt(ri),Hr=qt(ri),Wr=qt(ri);function un(e){if(e===ri)throw Error(T(174));return e}function pl(e,t){switch(U(Wr,t),U(Hr,e),U(lt,ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$s(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$s(t,e)}W(lt),U(lt,t)}function Xn(){W(lt),W(Hr),W(Wr)}function Nf(e){un(Wr.current);var t=un(lt.current),n=$s(t,e.type);t!==n&&(U(Hr,e),U(lt,n))}function hl(e){Hr.current===e&&(W(lt),W(Hr))}var Q=qt(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fs=[];function ml(){for(var e=0;e<fs.length;e++)fs[e]._workInProgressVersionPrimary=null;fs.length=0}var Vi=Pt.ReactCurrentDispatcher,ps=Pt.ReactCurrentBatchConfig,mn=0,X=null,oe=null,ue=null,so=!1,Cr=!1,Kr=0,Yg=0;function he(){throw Error(T(321))}function gl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function yl(e,t,n,r,i,o){if(mn=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vi.current=e===null||e.memoizedState===null?Jg:ey,e=n(r,i),Cr){o=0;do{if(Cr=!1,Kr=0,25<=o)throw Error(T(301));o+=1,ue=oe=null,t.updateQueue=null,Vi.current=ty,e=n(r,i)}while(Cr)}if(Vi.current=ao,t=oe!==null&&oe.next!==null,mn=0,ue=oe=X=null,so=!1,t)throw Error(T(300));return e}function vl(){var e=Kr!==0;return Kr=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?X.memoizedState=ue=e:ue=ue.next=e,ue}function Qe(){if(oe===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?X.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(T(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?X.memoizedState=ue=e:ue=ue.next=e}return ue}function Gr(e,t){return typeof t=="function"?t(e):t}function hs(e){var t=Qe(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((mn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,X.lanes|=d,gn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,tt(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,gn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ms(e){var t=Qe(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);tt(o,t.memoizedState)||(Te=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Of(){}function jf(e,t){var n=X,r=Qe(),i=t(),o=!tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Te=!0),r=r.queue,wl(Bf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Qr(9,zf.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(T(349));mn&30||If(n,t,i)}return i}function If(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zf(e,t,n,r){t.value=n,t.getSnapshot=r,Uf(t)&&$f(e)}function Bf(e,t,n){return n(function(){Uf(t)&&$f(e)})}function Uf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function $f(e){var t=_t(e,1);t!==null&&et(t,e,1,-1)}function $u(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zg.bind(null,X,e),[t.memoizedState,e]}function Qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hf(){return Qe().memoizedState}function Ni(e,t,n,r){var i=it();X.flags|=e,i.memoizedState=Qr(1|t,n,void 0,r===void 0?null:r)}function Ao(e,t,n,r){var i=Qe();r=r===void 0?null:r;var o=void 0;if(oe!==null){var s=oe.memoizedState;if(o=s.destroy,r!==null&&gl(r,s.deps)){i.memoizedState=Qr(t,n,o,r);return}}X.flags|=e,i.memoizedState=Qr(1|t,n,o,r)}function Hu(e,t){return Ni(8390656,8,e,t)}function wl(e,t){return Ao(2048,8,e,t)}function Wf(e,t){return Ao(4,2,e,t)}function Kf(e,t){return Ao(4,4,e,t)}function Gf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qf(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4,4,Gf.bind(null,t,e),n)}function xl(){}function Yf(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xf(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qf(e,t,n){return mn&21?(tt(n,t)||(n=tf(),X.lanes|=n,gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function Xg(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=ps.transition;ps.transition={};try{e(!1),t()}finally{z=n,ps.transition=r}}function Zf(){return Qe().memoizedState}function qg(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jf(e))ep(t,n);else if(n=Rf(e,t,n,r),n!==null){var i=ke();et(n,e,r,i),tp(n,t,r)}}function Zg(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jf(e))ep(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,tt(a,s)){var l=t.interleaved;l===null?(i.next=i,dl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Rf(e,t,i,r),n!==null&&(i=ke(),et(n,e,r,i),tp(n,t,r))}}function Jf(e){var t=e.alternate;return e===X||t!==null&&t===X}function ep(e,t){Cr=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qa(e,n)}}var ao={readContext:Ge,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Jg={readContext:Ge,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ni(4194308,4,Gf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qg.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:$u,useDebugValue:xl,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=$u(!1),t=e[0];return e=Xg.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=it();if(K){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ce===null)throw Error(T(349));mn&30||If(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Hu(Bf.bind(null,r,o,e),[e]),r.flags|=2048,Qr(9,zf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=it(),t=ce.identifierPrefix;if(K){var n=ht,r=pt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ey={readContext:Ge,useCallback:Yf,useContext:Ge,useEffect:wl,useImperativeHandle:Qf,useInsertionEffect:Wf,useLayoutEffect:Kf,useMemo:Xf,useReducer:hs,useRef:Hf,useState:function(){return hs(Gr)},useDebugValue:xl,useDeferredValue:function(e){var t=Qe();return qf(t,oe.memoizedState,e)},useTransition:function(){var e=hs(Gr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Of,useSyncExternalStore:jf,useId:Zf,unstable_isNewReconciler:!1},ty={readContext:Ge,useCallback:Yf,useContext:Ge,useEffect:wl,useImperativeHandle:Qf,useInsertionEffect:Wf,useLayoutEffect:Kf,useMemo:Xf,useReducer:ms,useRef:Hf,useState:function(){return ms(Gr)},useDebugValue:xl,useDeferredValue:function(e){var t=Qe();return oe===null?t.memoizedState=e:qf(t,oe.memoizedState,e)},useTransition:function(){var e=ms(Gr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Of,useSyncExternalStore:jf,useId:Zf,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fo={isMounted:function(e){return(e=e._reactInternals)?wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Bt(e),o=gt(r,i);o.payload=t,n!=null&&(o.callback=n),t=It(e,o,i),t!==null&&(et(t,e,i,r),Ri(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Bt(e),o=gt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=It(e,o,i),t!==null&&(et(t,e,i,r),Ri(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Bt(e),i=gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=It(e,i,r),t!==null&&(et(t,e,r,n),Ri(t,e,r))}};function Wu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(i,o):!0}function np(e,t,n){var r=!1,i=Gt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(i=be(t)?pn:ve.current,r=t.contextTypes,o=(r=r!=null)?Gn(e,i):Gt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fo.enqueueReplaceState(t,t.state,null)}function da(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},fl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ge(o):(o=be(t)?pn:ve.current,i.context=Gn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ca(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fo.enqueueReplaceState(i,i.state,null),io(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qn(e,t){try{var n="",r=t;do n+=Am(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function gs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ny=typeof WeakMap=="function"?WeakMap:Map;function rp(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){uo||(uo=!0,ka=r),fa(e,t)},n}function ip(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){fa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fa(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ny;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gy.bind(null,e,t,n),t.then(e,e))}function Qu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,It(n,t,1))),n.lanes|=1),e)}var ry=Pt.ReactCurrentOwner,Te=!1;function _e(e,t,n,r){t.child=e===null?Lf(t,null,n,r):Yn(t,e.child,n,r)}function Xu(e,t,n,r,i){n=n.render;var o=t.ref;return Hn(t,i),r=yl(e,t,n,r,o,i),n=vl(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(K&&n&&ol(t),t.flags|=1,_e(e,t,r,i),t.child)}function qu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!bl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,op(e,t,o,r,i)):(e=zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:zr,n(s,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=Ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function op(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(zr(o,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,kt(e,t,i)}return pa(e,t,n,r,i)}function sp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Vn,Me),Me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Vn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(Vn,Me),Me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(Vn,Me),Me|=r;return _e(e,t,i,n),t.child}function ap(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pa(e,t,n,r,i){var o=be(n)?pn:ve.current;return o=Gn(t,o),Hn(t,i),n=yl(e,t,n,r,o,i),r=vl(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(K&&r&&ol(t),t.flags|=1,_e(e,t,n,i),t.child)}function Zu(e,t,n,r,i){if(be(n)){var o=!0;Ji(t)}else o=!1;if(Hn(t,i),t.stateNode===null)Oi(e,t),np(t,n,r),da(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=be(n)?pn:ve.current,u=Gn(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ku(t,s,r,u),At=!1;var h=t.memoizedState;s.state=h,io(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Ee.current||At?(typeof d=="function"&&(ca(t,n,d,r),l=t.memoizedState),(a=At||Wu(t,n,a,r,h,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Vf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Xe(t.type,a),s.props=u,p=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ge(l):(l=be(n)?pn:ve.current,l=Gn(t,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||h!==l)&&Ku(t,s,r,l),At=!1,h=t.memoizedState,s.state=h,io(t,r,s,i);var x=t.memoizedState;a!==p||h!==x||Ee.current||At?(typeof y=="function"&&(ca(t,n,y,r),x=t.memoizedState),(u=At||Wu(t,n,u,r,h,x,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ha(e,t,n,r,o,i)}function ha(e,t,n,r,i,o){ap(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Ou(t,n,!1),kt(e,t,o);r=t.stateNode,ry.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Yn(t,e.child,null,o),t.child=Yn(t,null,a,o)):_e(e,t,a,o),t.memoizedState=r.state,i&&Ou(t,n,!0),t.child}function lp(e){var t=e.stateNode;t.pendingContext?Nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nu(e,t.context,!1),pl(e,t.containerInfo)}function Ju(e,t,n,r,i){return Qn(),al(i),t.flags|=256,_e(e,t,n,r),t.child}var ma={dehydrated:null,treeContext:null,retryLane:0};function ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function up(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(Q,i&1),e===null)return la(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Lo(s,r,0,null),e=fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ga(n),t.memoizedState=ma,e):_l(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iy(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ut(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ut(a,o):(o=fn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ga(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ma,r}return o=e.child,e=o.sibling,r=Ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _l(e,t){return t=Lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _i(e,t,n,r){return r!==null&&al(r),Yn(t,e.child,null,n),e=_l(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iy(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=gs(Error(T(422))),_i(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Lo({mode:"visible",children:r.children},i,0,null),o=fn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Yn(t,e.child,null,s),t.child.memoizedState=ga(s),t.memoizedState=ma,o);if(!(t.mode&1))return _i(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(T(419)),r=gs(o,r,void 0),_i(e,t,s,r)}if(a=(s&e.childLanes)!==0,Te||a){if(r=ce,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,_t(e,i),et(r,e,i,-1))}return El(),r=gs(Error(T(421))),_i(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=yy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,De=jt(i.nextSibling),Le=t,K=!0,Ze=null,e!==null&&($e[He++]=pt,$e[He++]=ht,$e[He++]=hn,pt=e.id,ht=e.overflow,hn=t),t=_l(t,r.children),t.flags|=4096,t)}function ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ua(e.return,t,n)}function ys(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function cp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(_e(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ec(e,n,t);else if(e.tag===19)ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ys(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ys(t,!0,n,null,o);break;case"together":ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function oy(e,t,n){switch(t.tag){case 3:lp(t),Qn();break;case 5:Nf(t);break;case 1:be(t.type)&&Ji(t);break;case 4:pl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(no,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?up(e,t,n):(U(Q,Q.current&1),e=kt(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,sp(e,t,n)}return kt(e,t,n)}var dp,ya,fp,pp;dp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ya=function(){};fp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(lt.current);var o=null;switch(n){case"input":i=Is(e,i),r=Is(e,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=Us(e,i),r=Us(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qi)}Hs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};pp=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sy(e,t,n){var r=t.pendingProps;switch(sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return be(t.type)&&Zi(),me(t),null;case 3:return r=t.stateNode,Xn(),W(Ee),W(ve),ml(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Ca(Ze),Ze=null))),ya(e,t),me(t),null;case 5:hl(t);var i=un(Wr.current);if(n=t.type,e!==null&&t.stateNode!=null)fp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return me(t),null}if(e=un(lt.current),wi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ot]=t,r[$r]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<vr.length;i++)H(vr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":uu(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":du(r,o),H("invalid",r)}Hs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,a,e),i=["children",""+a]):Lr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&H("scroll",r)}switch(n){case"input":ci(r),cu(r,o,!0);break;case"textarea":ci(r),fu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ot]=t,e[$r]=r,dp(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ws(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<vr.length;i++)H(vr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":uu(e,r),i=Is(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":du(e,r),i=Us(e,r),H("invalid",e);break;default:i=r}Hs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?$d(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Rr(e,l):typeof l=="number"&&Rr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Lr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&H("scroll",e):l!=null&&Wa(e,o,l,s))}switch(n){case"input":ci(e),cu(e,r,!1);break;case"textarea":ci(e),fu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)pp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=un(Wr.current),un(lt.current),wi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(o=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return me(t),null;case 13:if(W(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&De!==null&&t.mode&1&&!(t.flags&128))Mf(),Qn(),t.flags|=98560,o=!1;else if(o=wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[ot]=t}else Qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),o=!1}else Ze!==null&&(Ca(Ze),Ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?se===0&&(se=3):El())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Xn(),ya(e,t),e===null&&Br(t.stateNode.containerInfo),me(t),null;case 10:return cl(t.type._context),me(t),null;case 17:return be(t.type)&&Zi(),me(t),null;case 19:if(W(Q),o=t.memoizedState,o===null)return me(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)dr(o,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=oo(e),s!==null){for(t.flags|=128,dr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>Zn&&(t.flags|=128,r=!0,dr(o,!1),t.lanes=4194304)}else{if(!r)if(e=oo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!K)return me(t),null}else 2*te()-o.renderingStartTime>Zn&&n!==1073741824&&(t.flags|=128,r=!0,dr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Tl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function ay(e,t){switch(sl(t),t.tag){case 1:return be(t.type)&&Zi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),W(Ee),W(ve),ml(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hl(t),null;case 13:if(W(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Q),null;case 4:return Xn(),null;case 10:return cl(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var ki=!1,ye=!1,ly=typeof WeakSet=="function"?WeakSet:Set,F=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function va(e,t,n){try{n()}catch(r){Z(e,t,r)}}var tc=!1;function uy(e,t){if(ta=Qi,e=vf(),il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(y=p.firstChild)!==null;)h=p,p=y;for(;;){if(p===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++d===r&&(l=s),(y=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(na={focusedElem:e,selectionRange:n},Qi=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,P=x.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:Xe(t.type,v),P);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(g){Z(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return x=tc,tc=!1,x}function Tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&va(t,n,o)}i=i.next}while(i!==r)}}function Mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hp(e){var t=e.alternate;t!==null&&(e.alternate=null,hp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[$r],delete t[oa],delete t[Wg],delete t[Kg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mp(e){return e.tag===5||e.tag===3||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qi));else if(r!==4&&(e=e.child,e!==null))for(xa(e,t,n),e=e.sibling;e!==null;)xa(e,t,n),e=e.sibling}function _a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_a(e,t,n),e=e.sibling;e!==null;)_a(e,t,n),e=e.sibling}var de=null,qe=!1;function Tt(e,t,n){for(n=n.child;n!==null;)gp(e,t,n),n=n.sibling}function gp(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 5:ye||Rn(n,t);case 6:var r=de,i=qe;de=null,Tt(e,t,n),de=r,qe=i,de!==null&&(qe?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(qe?(e=de,n=n.stateNode,e.nodeType===8?cs(e.parentNode,n):e.nodeType===1&&cs(e,n),jr(e)):cs(de,n.stateNode));break;case 4:r=de,i=qe,de=n.stateNode.containerInfo,qe=!0,Tt(e,t,n),de=r,qe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&va(n,t,s),i=i.next}while(i!==r)}Tt(e,t,n);break;case 1:if(!ye&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,t,a)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Tt(e,t,n),ye=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function rc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ly),t.forEach(function(r){var i=vy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,qe=!1;break e;case 3:de=a.stateNode.containerInfo,qe=!0;break e;case 4:de=a.stateNode.containerInfo,qe=!0;break e}a=a.return}if(de===null)throw Error(T(160));gp(o,s,i),de=null,qe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Z(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yp(t,e),t=t.sibling}function yp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),rt(e),r&4){try{Tr(3,e,e.return),Mo(3,e)}catch(v){Z(e,e.return,v)}try{Tr(5,e,e.return)}catch(v){Z(e,e.return,v)}}break;case 1:Ye(t,e),rt(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(Ye(t,e),rt(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var i=e.stateNode;try{Rr(i,"")}catch(v){Z(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&jd(i,o),Ws(a,s);var u=Ws(a,o);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?$d(i,p):d==="dangerouslySetInnerHTML"?Bd(i,p):d==="children"?Rr(i,p):Wa(i,d,p,u)}switch(a){case"input":zs(i,o);break;case"textarea":Id(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?zn(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?zn(i,!!o.multiple,o.defaultValue,!0):zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[$r]=o}catch(v){Z(e,e.return,v)}}break;case 6:if(Ye(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Z(e,e.return,v)}}break;case 3:if(Ye(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jr(t.containerInfo)}catch(v){Z(e,e.return,v)}break;case 4:Ye(t,e),rt(e);break;case 13:Ye(t,e),rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Pl=te())),r&4&&rc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||d,Ye(t,e),ye=u):Ye(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(p=F=d;F!==null;){switch(h=F,y=h.child,h.tag){case 0:case 11:case 14:case 15:Tr(4,h,h.return);break;case 1:Rn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){Z(r,n,v)}}break;case 5:Rn(h,h.return);break;case 22:if(h.memoizedState!==null){oc(p);continue}}y!==null?(y.return=h,F=y):oc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ud("display",s))}catch(v){Z(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){Z(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ye(t,e),rt(e),r&4&&rc(e);break;case 21:break;default:Ye(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mp(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rr(i,""),r.flags&=-33);var o=nc(e);_a(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=nc(e);xa(e,a,s);break;default:throw Error(T(161))}}catch(l){Z(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cy(e,t,n){F=e,vp(e)}function vp(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ki;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=ki;var u=ye;if(ki=s,(ye=l)&&!u)for(F=i;F!==null;)s=F,l=s.child,s.tag===22&&s.memoizedState!==null?sc(i):l!==null?(l.return=s,F=l):sc(i);for(;o!==null;)F=o,vp(o),o=o.sibling;F=i,ki=a,ye=u}ic(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):ic(e)}}function ic(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Uu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&jr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}ye||t.flags&512&&wa(t)}catch(h){Z(t,t.return,h)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function oc(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function sc(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mo(4,t)}catch(l){Z(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Z(t,i,l)}}var o=t.return;try{wa(t)}catch(l){Z(t,o,l)}break;case 5:var s=t.return;try{wa(t)}catch(l){Z(t,s,l)}}}catch(l){Z(t,t.return,l)}if(t===e){F=null;break}var a=t.sibling;if(a!==null){a.return=t.return,F=a;break}F=t.return}}var dy=Math.ceil,lo=Pt.ReactCurrentDispatcher,kl=Pt.ReactCurrentOwner,Ke=Pt.ReactCurrentBatchConfig,I=0,ce=null,re=null,fe=0,Me=0,Vn=qt(0),se=0,Yr=null,gn=0,Do=0,Sl=0,Er=null,Ce=null,Pl=0,Zn=1/0,dt=null,uo=!1,ka=null,zt=null,Si=!1,Rt=null,co=0,br=0,Sa=null,ji=-1,Ii=0;function ke(){return I&6?te():ji!==-1?ji:ji=te()}function Bt(e){return e.mode&1?I&2&&fe!==0?fe&-fe:Qg.transition!==null?(Ii===0&&(Ii=tf()),Ii):(e=z,e!==0||(e=window.event,e=e===void 0?16:uf(e.type)),e):1}function et(e,t,n,r){if(50<br)throw br=0,Sa=null,Error(T(185));ei(e,n,r),(!(I&2)||e!==ce)&&(e===ce&&(!(I&2)&&(Do|=n),se===4&&Dt(e,fe)),Ae(e,r),n===1&&I===0&&!(t.mode&1)&&(Zn=te()+500,bo&&Zt()))}function Ae(e,t){var n=e.callbackNode;Qm(e,t);var r=Gi(e,e===ce?fe:0);if(r===0)n!==null&&mu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mu(n),t===1)e.tag===0?Gg(ac.bind(null,e)):bf(ac.bind(null,e)),$g(function(){!(I&6)&&Zt()}),n=null;else{switch(nf(r)){case 1:n=Xa;break;case 4:n=Jd;break;case 16:n=Ki;break;case 536870912:n=ef;break;default:n=Ki}n=Tp(n,wp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wp(e,t){if(ji=-1,Ii=0,I&6)throw Error(T(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=Gi(e,e===ce?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fo(e,r);else{t=r;var i=I;I|=2;var o=_p();(ce!==e||fe!==t)&&(dt=null,Zn=te()+500,dn(e,t));do try{hy();break}catch(a){xp(e,a)}while(1);ul(),lo.current=o,I=i,re!==null?t=0:(ce=null,fe=0,t=se)}if(t!==0){if(t===2&&(i=Xs(e),i!==0&&(r=i,t=Pa(e,i))),t===1)throw n=Yr,dn(e,0),Dt(e,r),Ae(e,te()),n;if(t===6)Dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!fy(i)&&(t=fo(e,r),t===2&&(o=Xs(e),o!==0&&(r=o,t=Pa(e,o))),t===1))throw n=Yr,dn(e,0),Dt(e,r),Ae(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:nn(e,Ce,dt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=Pl+500-te(),10<t)){if(Gi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ia(nn.bind(null,e,Ce,dt),t);break}nn(e,Ce,dt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Je(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dy(r/1960))-r,10<r){e.timeoutHandle=ia(nn.bind(null,e,Ce,dt),r);break}nn(e,Ce,dt);break;case 5:nn(e,Ce,dt);break;default:throw Error(T(329))}}}return Ae(e,te()),e.callbackNode===n?wp.bind(null,e):null}function Pa(e,t){var n=Er;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=fo(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Ca(t)),e}function Ca(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function fy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Sl,t&=~Do,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function ac(e){if(I&6)throw Error(T(327));Wn();var t=Gi(e,0);if(!(t&1))return Ae(e,te()),null;var n=fo(e,t);if(e.tag!==0&&n===2){var r=Xs(e);r!==0&&(t=r,n=Pa(e,r))}if(n===1)throw n=Yr,dn(e,0),Dt(e,t),Ae(e,te()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,Ce,dt),Ae(e,te()),null}function Cl(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Zn=te()+500,bo&&Zt())}}function yn(e){Rt!==null&&Rt.tag===0&&!(I&6)&&Wn();var t=I;I|=1;var n=Ke.transition,r=z;try{if(Ke.transition=null,z=1,e)return e()}finally{z=r,Ke.transition=n,I=t,!(I&6)&&Zt()}}function Tl(){Me=Vn.current,W(Vn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ug(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zi();break;case 3:Xn(),W(Ee),W(ve),ml();break;case 5:hl(r);break;case 4:Xn();break;case 13:W(Q);break;case 19:W(Q);break;case 10:cl(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(ce=e,re=e=Ut(e.current,null),fe=Me=t,se=0,Yr=null,Sl=Do=gn=0,Ce=Er=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ln=null}return e}function xp(e,t){do{var n=re;try{if(ul(),Vi.current=ao,so){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}so=!1}if(mn=0,ue=oe=X=null,Cr=!1,Kr=0,kl.current=null,n===null||n.return===null){se=1,Yr=t,re=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Qu(s);if(y!==null){y.flags&=-257,Yu(y,s,a,o,t),y.mode&1&&Gu(o,u,t),t=y,l=u;var x=t.updateQueue;if(x===null){var v=new Set;v.add(l),t.updateQueue=v}else x.add(l);break e}else{if(!(t&1)){Gu(o,u,t),El();break e}l=Error(T(426))}}else if(K&&a.mode&1){var P=Qu(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Yu(P,s,a,o,t),al(qn(l,a));break e}}o=l=qn(l,a),se!==4&&(se=2),Er===null?Er=[o]:Er.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=rp(o,l,t);Bu(o,m);break e;case 1:a=l;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(zt===null||!zt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=ip(o,a,t);Bu(o,g);break e}}o=o.return}while(o!==null)}Sp(n)}catch(w){t=w,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function _p(){var e=lo.current;return lo.current=ao,e===null?ao:e}function El(){(se===0||se===3||se===2)&&(se=4),ce===null||!(gn&268435455)&&!(Do&268435455)||Dt(ce,fe)}function fo(e,t){var n=I;I|=2;var r=_p();(ce!==e||fe!==t)&&(dt=null,dn(e,t));do try{py();break}catch(i){xp(e,i)}while(1);if(ul(),I=n,lo.current=r,re!==null)throw Error(T(261));return ce=null,fe=0,se}function py(){for(;re!==null;)kp(re)}function hy(){for(;re!==null&&!Im();)kp(re)}function kp(e){var t=Cp(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Sp(e):re=t,kl.current=null}function Sp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ay(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,re=null;return}}else if(n=sy(n,t,Me),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);se===0&&(se=5)}function nn(e,t,n){var r=z,i=Ke.transition;try{Ke.transition=null,z=1,my(e,t,n,r)}finally{Ke.transition=i,z=r}return null}function my(e,t,n,r){do Wn();while(Rt!==null);if(I&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ym(e,o),e===ce&&(re=ce=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Si||(Si=!0,Tp(Ki,function(){return Wn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ke.transition,Ke.transition=null;var s=z;z=1;var a=I;I|=4,kl.current=null,uy(e,n),yp(n,e),Vg(na),Qi=!!ta,na=ta=null,e.current=n,cy(n),zm(),I=a,z=s,Ke.transition=o}else e.current=n;if(Si&&(Si=!1,Rt=e,co=i),o=e.pendingLanes,o===0&&(zt=null),$m(n.stateNode),Ae(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uo)throw uo=!1,e=ka,ka=null,e;return co&1&&e.tag!==0&&Wn(),o=e.pendingLanes,o&1?e===Sa?br++:(br=0,Sa=e):br=0,Zt(),null}function Wn(){if(Rt!==null){var e=nf(co),t=Ke.transition,n=z;try{if(Ke.transition=null,z=16>e?16:e,Rt===null)var r=!1;else{if(e=Rt,Rt=null,co=0,I&6)throw Error(T(331));var i=I;for(I|=4,F=e.current;F!==null;){var o=F,s=o.child;if(F.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:Tr(8,d,o)}var p=d.child;if(p!==null)p.return=d,F=p;else for(;F!==null;){d=F;var h=d.sibling,y=d.return;if(hp(d),d===u){F=null;break}if(h!==null){h.return=y,F=h;break}F=y}}}var x=o.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var P=v.sibling;v.sibling=null,v=P}while(v!==null)}}F=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,F=s;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,F=m;break e}F=o.return}}var c=e.current;for(F=c;F!==null;){s=F;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,F=f;else e:for(s=c;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mo(9,a)}}catch(w){Z(a,a.return,w)}if(a===s){F=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,F=g;break e}F=a.return}}if(I=i,Zt(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(So,e)}catch{}r=!0}return r}finally{z=n,Ke.transition=t}}return!1}function lc(e,t,n){t=qn(n,t),t=rp(e,t,1),e=It(e,t,1),t=ke(),e!==null&&(ei(e,1,t),Ae(e,t))}function Z(e,t,n){if(e.tag===3)lc(e,e,n);else for(;t!==null;){if(t.tag===3){lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=qn(n,e),e=ip(t,e,1),t=It(t,e,1),e=ke(),t!==null&&(ei(t,1,e),Ae(t,e));break}}t=t.return}}function gy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(fe&n)===n&&(se===4||se===3&&(fe&130023424)===fe&&500>te()-Pl?dn(e,0):Sl|=n),Ae(e,t)}function Pp(e,t){t===0&&(e.mode&1?(t=pi,pi<<=1,!(pi&130023424)&&(pi=4194304)):t=1);var n=ke();e=_t(e,t),e!==null&&(ei(e,t,n),Ae(e,n))}function yy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pp(e,n)}function vy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Pp(e,n)}var Cp;Cp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,oy(e,t,n);Te=!!(e.flags&131072)}else Te=!1,K&&t.flags&1048576&&Af(t,to,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oi(e,t),e=t.pendingProps;var i=Gn(t,ve.current);Hn(t,n),i=yl(null,t,r,e,i,n);var o=vl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(r)?(o=!0,Ji(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fl(t),i.updater=Fo,t.stateNode=i,i._reactInternals=t,da(t,r,e,n),t=ha(null,t,r,!0,o,n)):(t.tag=0,K&&o&&ol(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xy(r),e=Xe(r,e),i){case 0:t=pa(null,t,r,e,n);break e;case 1:t=Zu(null,t,r,e,n);break e;case 11:t=Xu(null,t,r,e,n);break e;case 14:t=qu(null,t,r,Xe(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),pa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Zu(e,t,r,i,n);case 3:e:{if(lp(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vf(e,t),io(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=qn(Error(T(423)),t),t=Ju(e,t,r,n,i);break e}else if(r!==i){i=qn(Error(T(424)),t),t=Ju(e,t,r,n,i);break e}else for(De=jt(t.stateNode.containerInfo.firstChild),Le=t,K=!0,Ze=null,n=Lf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qn(),r===i){t=kt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Nf(t),e===null&&la(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ra(r,i)?s=null:o!==null&&ra(r,o)&&(t.flags|=32),ap(e,t),_e(e,t,s,n),t.child;case 6:return e===null&&la(t),null;case 13:return up(e,t,n);case 4:return pl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Xu(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,U(no,r._currentValue),r._currentValue=s,o!==null)if(tt(o.value,s)){if(o.children===i.children&&!Ee.current){t=kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=gt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ua(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(T(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ua(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Hn(t,n),i=Ge(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=Xe(r,t.pendingProps),i=Xe(r.type,i),qu(e,t,r,i,n);case 15:return op(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Oi(e,t),t.tag=1,be(r)?(e=!0,Ji(t)):e=!1,Hn(t,n),np(t,r,i),da(t,r,i,n),ha(null,t,r,!0,e,n);case 19:return cp(e,t,n);case 22:return sp(e,t,n)}throw Error(T(156,t.tag))};function Tp(e,t){return Zd(e,t)}function wy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new wy(e,t,n,r)}function bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xy(e){if(typeof e=="function")return bl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ga)return 11;if(e===Qa)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")bl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Cn:return fn(n.children,i,o,t);case Ka:s=8,i|=8;break;case Vs:return e=We(12,n,t,i|2),e.elementType=Vs,e.lanes=o,e;case Ns:return e=We(13,n,t,i),e.elementType=Ns,e.lanes=o,e;case Os:return e=We(19,n,t,i),e.elementType=Os,e.lanes=o,e;case Vd:return Lo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ld:s=10;break e;case Rd:s=9;break e;case Ga:s=11;break e;case Qa:s=14;break e;case bt:s=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=We(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function fn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function Lo(e,t,n,r){return e=We(22,e,r,t),e.elementType=Vd,e.lanes=n,e.stateNode={isHidden:!1},e}function vs(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function ws(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _y(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Al(e,t,n,r,i,o,s,a,l){return e=new _y(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=We(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(o),e}function ky(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ep(e){if(!e)return Gt;e=e._reactInternals;e:{if(wn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(be(n))return Ef(e,n,t)}return t}function bp(e,t,n,r,i,o,s,a,l){return e=Al(n,r,!0,e,i,o,s,a,l),e.context=Ep(null),n=e.current,r=ke(),i=Bt(n),o=gt(r,i),o.callback=t??null,It(n,o,i),e.current.lanes=i,ei(e,i,r),Ae(e,r),e}function Ro(e,t,n,r){var i=t.current,o=ke(),s=Bt(i);return n=Ep(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=It(i,t,s),e!==null&&(et(e,i,s,o),Ri(e,i,s)),s}function po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fl(e,t){uc(e,t),(e=e.alternate)&&uc(e,t)}function Sy(){return null}var Ap=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ml(e){this._internalRoot=e}Vo.prototype.render=Ml.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Ro(e,t,null,null)};Vo.prototype.unmount=Ml.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){Ro(null,e,null,null)}),t[xt]=null}};function Vo(e){this._internalRoot=e}Vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=sf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&lf(e)}};function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cc(){}function Py(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=po(s);o.call(u)}}var s=bp(t,r,e,0,null,!1,!1,"",cc);return e._reactRootContainer=s,e[xt]=s.current,Br(e.nodeType===8?e.parentNode:e),yn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=po(l);a.call(u)}}var l=Al(e,0,!1,null,null,!1,!1,"",cc);return e._reactRootContainer=l,e[xt]=l.current,Br(e.nodeType===8?e.parentNode:e),yn(function(){Ro(t,l,n,r)}),l}function Oo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=po(s);a.call(l)}}Ro(t,s,e,i)}else s=Py(n,t,e,i,r);return po(s)}rf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yr(t.pendingLanes);n!==0&&(qa(t,n|1),Ae(t,te()),!(I&6)&&(Zn=te()+500,Zt()))}break;case 13:yn(function(){var r=_t(e,1);if(r!==null){var i=ke();et(r,e,1,i)}}),Fl(e,1)}};Za=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=ke();et(t,e,134217728,n)}Fl(e,134217728)}};of=function(e){if(e.tag===13){var t=Bt(e),n=_t(e,t);if(n!==null){var r=ke();et(n,e,t,r)}Fl(e,t)}};sf=function(){return z};af=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};Gs=function(e,t,n){switch(t){case"input":if(zs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Eo(r);if(!i)throw Error(T(90));Od(r),zs(r,i)}}}break;case"textarea":Id(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}};Kd=Cl;Gd=yn;var Cy={usingClientEntryPoint:!1,Events:[ni,An,Eo,Hd,Wd,Cl]},fr={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ty={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xd(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||Sy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{So=Pi.inject(Ty),at=Pi}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cy;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dl(t))throw Error(T(200));return ky(e,t,null,n)};Ne.createRoot=function(e,t){if(!Dl(e))throw Error(T(299));var n=!1,r="",i=Ap;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Al(e,1,!1,null,null,n,!1,r,i),e[xt]=t.current,Br(e.nodeType===8?e.parentNode:e),new Ml(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Xd(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return yn(e)};Ne.hydrate=function(e,t,n){if(!No(t))throw Error(T(200));return Oo(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Dl(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Ap;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=bp(t,null,e,1,n??null,i,!1,o,s),e[xt]=t.current,Br(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Vo(t)};Ne.render=function(e,t,n){if(!No(t))throw Error(T(200));return Oo(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!No(e))throw Error(T(40));return e._reactRootContainer?(yn(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};Ne.unstable_batchedUpdates=Cl;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!No(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Oo(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fp)}catch(e){console.error(e)}}Fp(),Ad.exports=Ne;var Ey=Ad.exports,dc=Ey;Ls.createRoot=dc.createRoot,Ls.hydrateRoot=dc.hydrateRoot;const Mp=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),jo=b.createContext({}),Io=b.createContext(null),zo=typeof document<"u",Ll=zo?b.useLayoutEffect:b.useEffect,Dp=b.createContext({strict:!1}),Rl=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),by="framerAppearId",Lp="data-"+Rl(by);function Ay(e,t,n,r){const{visualElement:i}=b.useContext(jo),o=b.useContext(Dp),s=b.useContext(Io),a=b.useContext(Mp).reducedMotion,l=b.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;b.useInsertionEffect(()=>{u&&u.update(n,s)});const d=b.useRef(!!(n[Lp]&&!window.HandoffComplete));return Ll(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),b.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function Nn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Fy(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Nn(n)&&(n.current=r))},[t])}function Xr(e){return typeof e=="string"||Array.isArray(e)}function Bo(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Vl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Nl=["initial",...Vl];function Uo(e){return Bo(e.animate)||Nl.some(t=>Xr(e[t]))}function Rp(e){return!!(Uo(e)||e.variants)}function My(e,t){if(Uo(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Xr(n)?n:void 0,animate:Xr(r)?r:void 0}}return e.inherit!==!1?t:{}}function Dy(e){const{initial:t,animate:n}=My(e,b.useContext(jo));return b.useMemo(()=>({initial:t,animate:n}),[fc(t),fc(n)])}function fc(e){return Array.isArray(e)?e.join(" "):e}const pc={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},qr={};for(const e in pc)qr[e]={isEnabled:t=>pc[e].some(n=>!!t[n])};function Ly(e){for(const t in e)qr[t]={...qr[t],...e[t]}}const Ol=b.createContext({}),Vp=b.createContext({}),Ry=Symbol.for("motionComponentSymbol");function Vy({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Ly(e);function o(a,l){let u;const d={...b.useContext(Mp),...a,layoutId:Ny(a)},{isStatic:p}=d,h=Dy(a),y=r(a,p);if(!p&&zo){h.visualElement=Ay(i,y,d,t);const x=b.useContext(Vp),v=b.useContext(Dp).strict;h.visualElement&&(u=h.visualElement.loadFeatures(d,v,e,x))}return b.createElement(jo.Provider,{value:h},u&&h.visualElement?b.createElement(u,{visualElement:h.visualElement,...d}):null,n(i,a,Fy(y,h.visualElement,l),y,p,h.visualElement))}const s=b.forwardRef(o);return s[Ry]=i,s}function Ny({layoutId:e}){const t=b.useContext(Ol).id;return t&&e!==void 0?t+"-"+e:e}function Oy(e){function t(r,i={}){return Vy(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const jy=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function jl(e){return typeof e!="string"||e.includes("-")?!1:!!(jy.indexOf(e)>-1||/[A-Z]/.test(e))}const ho={};function Iy(e){Object.assign(ho,e)}const ii=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],xn=new Set(ii);function Np(e,{layout:t,layoutId:n}){return xn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ho[e]||e==="opacity")}const Fe=e=>!!(e&&e.getVelocity),zy={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},By=ii.length;function Uy(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<By;s++){const a=ii[s];if(e[a]!==void 0){const l=zy[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const Op=e=>t=>typeof t=="string"&&t.startsWith(e),jp=Op("--"),Ta=Op("var(--"),$y=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Hy=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Qt=(e,t,n)=>Math.min(Math.max(n,e),t),_n={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ar={..._n,transform:e=>Qt(0,1,e)},Ci={..._n,default:1},Fr=e=>Math.round(e*1e5)/1e5,$o=/(-)?([\d]*\.?[\d])+/g,Ip=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Wy=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function oi(e){return typeof e=="string"}const si=e=>({test:t=>oi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Et=si("deg"),ut=si("%"),L=si("px"),Ky=si("vh"),Gy=si("vw"),hc={...ut,parse:e=>ut.parse(e)/100,transform:e=>ut.transform(e*100)},mc={..._n,transform:Math.round},zp={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,radius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,size:L,top:L,right:L,bottom:L,left:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,rotate:Et,rotateX:Et,rotateY:Et,rotateZ:Et,scale:Ci,scaleX:Ci,scaleY:Ci,scaleZ:Ci,skew:Et,skewX:Et,skewY:Et,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:Ar,originX:hc,originY:hc,originZ:L,zIndex:mc,fillOpacity:Ar,strokeOpacity:Ar,numOctaves:mc};function Il(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,u=!1,d=!0;for(const p in t){const h=t[p];if(jp(p)){o[p]=h;continue}const y=zp[p],x=Hy(h,y);if(xn.has(p)){if(l=!0,s[p]=x,!d)continue;h!==(y.default||0)&&(d=!1)}else p.startsWith("origin")?(u=!0,a[p]=x):i[p]=x}if(t.transform||(l||r?i.transform=Uy(e.transform,n,d,r):i.transform&&(i.transform="none")),u){const{originX:p="50%",originY:h="50%",originZ:y=0}=a;i.transformOrigin=`${p} ${h} ${y}`}}const zl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Bp(e,t,n){for(const r in t)!Fe(t[r])&&!Np(r,n)&&(e[r]=t[r])}function Qy({transformTemplate:e},t,n){return b.useMemo(()=>{const r=zl();return Il(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Yy(e,t,n){const r=e.style||{},i={};return Bp(i,r,e),Object.assign(i,Qy(e,t,n)),e.transformValues?e.transformValues(i):i}function Xy(e,t,n){const r={},i=Yy(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const qy=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function mo(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||qy.has(e)}let Up=e=>!mo(e);function Zy(e){e&&(Up=t=>t.startsWith("on")?!mo(t):e(t))}try{Zy(require("@emotion/is-prop-valid").default)}catch{}function Jy(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Up(i)||n===!0&&mo(i)||!t&&!mo(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function gc(e,t,n){return typeof e=="string"?e:L.transform(t+n*e)}function ev(e,t,n){const r=gc(t,e.x,e.width),i=gc(n,e.y,e.height);return`${r} ${i}`}const tv={offset:"stroke-dashoffset",array:"stroke-dasharray"},nv={offset:"strokeDashoffset",array:"strokeDasharray"};function rv(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?tv:nv;e[o.offset]=L.transform(-r);const s=L.transform(t),a=L.transform(n);e[o.array]=`${s} ${a}`}function Bl(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},d,p,h){if(Il(e,u,d,h),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:x,dimensions:v}=e;y.transform&&(v&&(x.transform=y.transform),delete y.transform),v&&(i!==void 0||o!==void 0||x.transform)&&(x.transformOrigin=ev(v,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(y.x=t),n!==void 0&&(y.y=n),r!==void 0&&(y.scale=r),s!==void 0&&rv(y,s,a,l,!1)}const $p=()=>({...zl(),attrs:{}}),Ul=e=>typeof e=="string"&&e.toLowerCase()==="svg";function iv(e,t,n,r){const i=b.useMemo(()=>{const o=$p();return Bl(o,t,{enableHardwareAcceleration:!1},Ul(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Bp(o,e.style,e),i.style={...o,...i.style}}return i}function ov(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(jl(n)?iv:Xy)(r,o,s,n),d={...Jy(r,typeof n=="string",e),...l,ref:i},{children:p}=r,h=b.useMemo(()=>Fe(p)?p.get():p,[p]);return b.createElement(n,{...d,children:h})}}function Hp(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Wp=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Kp(e,t,n,r){Hp(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Wp.has(i)?i:Rl(i),t.attrs[i])}function $l(e,t){const{style:n}=e,r={};for(const i in n)(Fe(n[i])||t.style&&Fe(t.style[i])||Np(i,e))&&(r[i]=n[i]);return r}function Gp(e,t){const n=$l(e,t);for(const r in e)if(Fe(e[r])||Fe(t[r])){const i=ii.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Hl(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function Qp(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const go=e=>Array.isArray(e),sv=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),av=e=>go(e)?e[e.length-1]||0:e;function Bi(e){const t=Fe(e)?e.get():e;return sv(t)?t.toValue():t}function lv({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:uv(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const Yp=e=>(t,n)=>{const r=b.useContext(jo),i=b.useContext(Io),o=()=>lv(e,t,r,i);return n?o():Qp(o)};function uv(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=Bi(o[h]);let{initial:s,animate:a}=e;const l=Uo(e),u=Rp(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const p=d?a:s;return p&&typeof p!="boolean"&&!Bo(p)&&(Array.isArray(p)?p:[p]).forEach(y=>{const x=Hl(e,y);if(!x)return;const{transitionEnd:v,transition:P,...m}=x;for(const c in m){let f=m[c];if(Array.isArray(f)){const g=d?f.length-1:0;f=f[g]}f!==null&&(i[c]=f)}for(const c in v)i[c]=v[c]}),i}const J=e=>e;class yc{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function cv(e){let t=new yc,n=new yc,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,u=!1,d=!1)=>{const p=d&&i,h=p?t:n;return u&&s.add(l),h.add(l)&&p&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const d=t.order[u];d(l),s.has(d)&&(a.schedule(d),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const Ti=["prepare","read","update","preRender","render","postRender"],dv=40;function fv(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Ti.reduce((p,h)=>(p[h]=cv(()=>n=!0),p),{}),s=p=>o[p].process(i),a=()=>{const p=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,dv),1),i.timestamp=p,i.isProcessing=!0,Ti.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:Ti.reduce((p,h)=>{const y=o[h];return p[h]=(x,v=!1,P=!1)=>(n||l(),y.schedule(x,v,P)),p},{}),cancel:p=>Ti.forEach(h=>o[h].cancel(p)),state:i,steps:o}}const{schedule:$,cancel:St,state:ge,steps:xs}=fv(typeof requestAnimationFrame<"u"?requestAnimationFrame:J,!0),pv={useVisualState:Yp({scrapeMotionValuesFromProps:Gp,createRenderState:$p,onMount:(e,t,{renderState:n,latestValues:r})=>{$.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),$.render(()=>{Bl(n,r,{enableHardwareAcceleration:!1},Ul(t.tagName),e.transformTemplate),Kp(t,n)})}})},hv={useVisualState:Yp({scrapeMotionValuesFromProps:$l,createRenderState:zl})};function mv(e,{forwardMotionProps:t=!1},n,r){return{...jl(e)?pv:hv,preloadedFeatures:n,useRender:ov(t),createVisualElement:r,Component:e}}function mt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Xp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Ho(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const gv=e=>t=>Xp(t)&&e(t,Ho(t));function yt(e,t,n,r){return mt(e,t,gv(n),r)}const yv=(e,t)=>n=>t(e(n)),$t=(...e)=>e.reduce(yv);function qp(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const vc=qp("dragHorizontal"),wc=qp("dragVertical");function Zp(e){let t=!1;if(e==="y")t=wc();else if(e==="x")t=vc();else{const n=vc(),r=wc();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Jp(){const e=Zp(!0);return e?(e(),!1):!0}class Jt{constructor(t){this.isMounted=!1,this.node=t}update(){}}function xc(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||Jp())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&$.update(()=>a[r](o,s))};return yt(e.current,n,i,{passive:!e.getProps()[r]})}class vv extends Jt{mount(){this.unmount=$t(xc(this.node,!0),xc(this.node,!1))}unmount(){}}class wv extends Jt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$t(mt(this.node.current,"focus",()=>this.onFocus()),mt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const eh=(e,t)=>t?e===t?!0:eh(e,t.parentElement):!1;function _s(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Ho(n))}class xv extends Jt{constructor(){super(...arguments),this.removeStartListeners=J,this.removeEndListeners=J,this.removeAccessibleListeners=J,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=yt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:p}=this.node.getProps();$.update(()=>{!p&&!eh(this.node.current,a.target)?d&&d(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=yt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=$t(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||_s("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&$.update(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=mt(this.node.current,"keyup",s),_s("down",(a,l)=>{this.startPress(a,l)})},n=mt(this.node.current,"keydown",t),r=()=>{this.isPressing&&_s("cancel",(o,s)=>this.cancelPress(o,s))},i=mt(this.node.current,"blur",r);this.removeAccessibleListeners=$t(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&$.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Jp()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&$.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=yt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=mt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=$t(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Ea=new WeakMap,ks=new WeakMap,_v=e=>{const t=Ea.get(e.target);t&&t(e)},kv=e=>{e.forEach(_v)};function Sv({root:e,...t}){const n=e||document;ks.has(n)||ks.set(n,{});const r=ks.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(kv,{root:e,...t})),r[i]}function Pv(e,t,n){const r=Sv(t);return Ea.set(e,n),r.observe(e),()=>{Ea.delete(e),r.unobserve(e)}}const Cv={some:0,all:1};class Tv extends Jt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Cv[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:p}=this.node.getProps(),h=u?d:p;h&&h(l)};return Pv(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Ev(t,n))&&this.startObserver()}unmount(){}}function Ev({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const bv={inView:{Feature:Tv},tap:{Feature:xv},focus:{Feature:wv},hover:{Feature:vv}};function th(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Av(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function Fv(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Wo(e,t,n){const r=e.getProps();return Hl(r,t,n!==void 0?n:r.custom,Av(e),Fv(e))}let Mv=J,Wl=J;const Ht=e=>e*1e3,vt=e=>e/1e3,Dv={current:!1},nh=e=>Array.isArray(e)&&typeof e[0]=="number";function rh(e){return!!(!e||typeof e=="string"&&ih[e]||nh(e)||Array.isArray(e)&&e.every(rh))}const wr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ih={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:wr([0,.65,.55,1]),circOut:wr([.55,0,1,.45]),backIn:wr([.31,.01,.66,-.59]),backOut:wr([.33,1.53,.69,.99])};function oh(e){if(e)return nh(e)?wr(e):Array.isArray(e)?e.map(oh):ih[e]}function Lv(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=oh(a);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function Rv(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const sh=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Vv=1e-7,Nv=12;function Ov(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=sh(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>Vv&&++a<Nv);return s}function ai(e,t,n,r){if(e===t&&n===r)return J;const i=o=>Ov(o,0,1,e,n);return o=>o===0||o===1?o:sh(i(o),t,r)}const jv=ai(.42,0,1,1),Iv=ai(0,0,.58,1),ah=ai(.42,0,.58,1),zv=e=>Array.isArray(e)&&typeof e[0]!="number",lh=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,uh=e=>t=>1-e(1-t),Kl=e=>1-Math.sin(Math.acos(e)),ch=uh(Kl),Bv=lh(Kl),dh=ai(.33,1.53,.69,.99),Gl=uh(dh),Uv=lh(Gl),$v=e=>(e*=2)<1?.5*Gl(e):.5*(2-Math.pow(2,-10*(e-1))),Hv={linear:J,easeIn:jv,easeInOut:ah,easeOut:Iv,circIn:Kl,circInOut:Bv,circOut:ch,backIn:Gl,backInOut:Uv,backOut:dh,anticipate:$v},_c=e=>{if(Array.isArray(e)){Wl(e.length===4);const[t,n,r,i]=e;return ai(t,n,r,i)}else if(typeof e=="string")return Hv[e];return e},Ql=(e,t)=>n=>!!(oi(n)&&Wy.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),fh=(e,t,n)=>r=>{if(!oi(r))return r;const[i,o,s,a]=r.match($o);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},Wv=e=>Qt(0,255,e),Ss={..._n,transform:e=>Math.round(Wv(e))},cn={test:Ql("rgb","red"),parse:fh("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Ss.transform(e)+", "+Ss.transform(t)+", "+Ss.transform(n)+", "+Fr(Ar.transform(r))+")"};function Kv(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const ba={test:Ql("#"),parse:Kv,transform:cn.transform},On={test:Ql("hsl","hue"),parse:fh("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ut.transform(Fr(t))+", "+ut.transform(Fr(n))+", "+Fr(Ar.transform(r))+")"},xe={test:e=>cn.test(e)||ba.test(e)||On.test(e),parse:e=>cn.test(e)?cn.parse(e):On.test(e)?On.parse(e):ba.parse(e),transform:e=>oi(e)?e:e.hasOwnProperty("red")?cn.transform(e):On.transform(e)},Y=(e,t,n)=>-n*e+n*t+e;function Ps(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Gv({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Ps(l,a,e+1/3),o=Ps(l,a,e),s=Ps(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const Cs=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},Qv=[ba,cn,On],Yv=e=>Qv.find(t=>t.test(e));function kc(e){const t=Yv(e);let n=t.parse(e);return t===On&&(n=Gv(n)),n}const ph=(e,t)=>{const n=kc(e),r=kc(t),i={...n};return o=>(i.red=Cs(n.red,r.red,o),i.green=Cs(n.green,r.green,o),i.blue=Cs(n.blue,r.blue,o),i.alpha=Y(n.alpha,r.alpha,o),cn.transform(i))};function Xv(e){var t,n;return isNaN(e)&&oi(e)&&(((t=e.match($o))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Ip))===null||n===void 0?void 0:n.length)||0)>0}const hh={regex:$y,countKey:"Vars",token:"${v}",parse:J},mh={regex:Ip,countKey:"Colors",token:"${c}",parse:xe.parse},gh={regex:$o,countKey:"Numbers",token:"${n}",parse:_n.parse};function Ts(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function yo(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Ts(n,hh),Ts(n,mh),Ts(n,gh),n}function yh(e){return yo(e).values}function vh(e){const{values:t,numColors:n,numVars:r,tokenised:i}=yo(e),o=t.length;return s=>{let a=i;for(let l=0;l<o;l++)l<r?a=a.replace(hh.token,s[l]):l<r+n?a=a.replace(mh.token,xe.transform(s[l])):a=a.replace(gh.token,Fr(s[l]));return a}}const qv=e=>typeof e=="number"?0:e;function Zv(e){const t=yh(e);return vh(e)(t.map(qv))}const Yt={test:Xv,parse:yh,createTransformer:vh,getAnimatableNone:Zv},wh=(e,t)=>n=>`${n>0?t:e}`;function xh(e,t){return typeof e=="number"?n=>Y(e,t,n):xe.test(e)?ph(e,t):e.startsWith("var(")?wh(e,t):kh(e,t)}const _h=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>xh(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},Jv=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=xh(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},kh=(e,t)=>{const n=Yt.createTransformer(t),r=yo(e),i=yo(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?$t(_h(r.values,i.values),n):wh(e,t)},Zr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Sc=(e,t)=>n=>Y(e,t,n);function e0(e){return typeof e=="number"?Sc:typeof e=="string"?xe.test(e)?ph:kh:Array.isArray(e)?_h:typeof e=="object"?Jv:Sc}function t0(e,t,n){const r=[],i=n||e0(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||J:t;a=$t(l,a)}r.push(a)}return r}function Sh(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Wl(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=t0(t,r,i),a=s.length,l=u=>{let d=0;if(a>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const p=Zr(e[d],e[d+1],u);return s[d](p)};return n?u=>l(Qt(e[0],e[o-1],u)):l}function n0(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Zr(0,t,r);e.push(Y(n,1,i))}}function r0(e){const t=[0];return n0(t,e.length-1),t}function i0(e,t){return e.map(n=>n*t)}function o0(e,t){return e.map(()=>t||ah).splice(0,e.length-1)}function vo({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=zv(r)?r.map(_c):_c(r),o={done:!1,value:t[0]},s=i0(n&&n.length===t.length?n:r0(t),e),a=Sh(s,t,{ease:Array.isArray(i)?i:o0(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function Ph(e,t){return t?e*(1e3/t):0}const s0=5;function Ch(e,t,n){const r=Math.max(t-s0,0);return Ph(n-e(r),t-r)}const Es=.001,a0=.01,Pc=10,l0=.05,u0=1;function c0({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;Mv(e<=Ht(Pc));let s=1-t;s=Qt(l0,u0,s),e=Qt(a0,Pc,vt(e)),s<1?(i=u=>{const d=u*s,p=d*e,h=d-n,y=Aa(u,s),x=Math.exp(-p);return Es-h/y*x},o=u=>{const p=u*s*e,h=p*n+n,y=Math.pow(s,2)*Math.pow(u,2)*e,x=Math.exp(-p),v=Aa(Math.pow(u,2),s);return(-i(u)+Es>0?-1:1)*((h-y)*x)/v}):(i=u=>{const d=Math.exp(-u*e),p=(u-n)*e+1;return-Es+d*p},o=u=>{const d=Math.exp(-u*e),p=(n-u)*(e*e);return d*p});const a=5/e,l=f0(i,o,a);if(e=Ht(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const d0=12;function f0(e,t,n){let r=n;for(let i=1;i<d0;i++)r=r-e(r)/t(r);return r}function Aa(e,t){return e*Math.sqrt(1-t*t)}const p0=["duration","bounce"],h0=["stiffness","damping","mass"];function Cc(e,t){return t.some(n=>e[n]!==void 0)}function m0(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Cc(e,h0)&&Cc(e,p0)){const n=c0(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Th({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:d,velocity:p,isResolvedFromDuration:h}=m0({...r,velocity:-vt(r.velocity||0)}),y=p||0,x=l/(2*Math.sqrt(a*u)),v=o-i,P=vt(Math.sqrt(a/u)),m=Math.abs(v)<5;n||(n=m?.01:2),t||(t=m?.005:.5);let c;if(x<1){const f=Aa(P,x);c=g=>{const w=Math.exp(-x*P*g);return o-w*((y+x*P*v)/f*Math.sin(f*g)+v*Math.cos(f*g))}}else if(x===1)c=f=>o-Math.exp(-P*f)*(v+(y+P*v)*f);else{const f=P*Math.sqrt(x*x-1);c=g=>{const w=Math.exp(-x*P*g),_=Math.min(f*g,300);return o-w*((y+x*P*v)*Math.sinh(_)+f*v*Math.cosh(_))/f}}return{calculatedDuration:h&&d||null,next:f=>{const g=c(f);if(h)s.done=f>=d;else{let w=y;f!==0&&(x<1?w=Ch(c,f,g):w=0);const _=Math.abs(w)<=n,k=Math.abs(o-g)<=t;s.done=_&&k}return s.value=s.done?o:g,s}}}function Tc({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:d}){const p=e[0],h={done:!1,value:p},y=S=>a!==void 0&&S<a||l!==void 0&&S>l,x=S=>a===void 0?l:l===void 0||Math.abs(a-S)<Math.abs(l-S)?a:l;let v=n*t;const P=p+v,m=s===void 0?P:s(P);m!==P&&(v=m-p);const c=S=>-v*Math.exp(-S/r),f=S=>m+c(S),g=S=>{const C=c(S),A=f(S);h.done=Math.abs(C)<=u,h.value=h.done?m:A};let w,_;const k=S=>{y(h.value)&&(w=S,_=Th({keyframes:[h.value,x(h.value)],velocity:Ch(f,S,h.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return k(0),{calculatedDuration:null,next:S=>{let C=!1;return!_&&w===void 0&&(C=!0,g(S),k(S)),w!==void 0&&S>w?_.next(S-w):(!C&&g(S),h)}}}const g0=e=>{const t=({timestamp:n})=>e(n);return{start:()=>$.update(t,!0),stop:()=>St(t),now:()=>ge.isProcessing?ge.timestamp:performance.now()}},Ec=2e4;function bc(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Ec;)t+=n,r=e.next(t);return t>=Ec?1/0:t}const y0={decay:Tc,inertia:Tc,tween:vo,keyframes:vo,spring:Th};function wo({autoplay:e=!0,delay:t=0,driver:n=g0,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:d,onUpdate:p,...h}){let y=1,x=!1,v,P;const m=()=>{P=new Promise(D=>{v=D})};m();let c;const f=y0[i]||vo;let g;f!==vo&&typeof r[0]!="number"&&(g=Sh([0,100],r,{clamp:!1}),r=[0,100]);const w=f({...h,keyframes:r});let _;a==="mirror"&&(_=f({...h,keyframes:[...r].reverse(),velocity:-(h.velocity||0)}));let k="idle",S=null,C=null,A=null;w.calculatedDuration===null&&o&&(w.calculatedDuration=bc(w));const{calculatedDuration:j}=w;let B=1/0,ae=1/0;j!==null&&(B=j+s,ae=B*(o+1)-s);let ee=0;const nt=D=>{if(C===null)return;y>0&&(C=Math.min(C,D)),y<0&&(C=Math.min(D-ae/y,C)),S!==null?ee=S:ee=Math.round(D-C)*y;const O=ee-t*(y>=0?1:-1),ct=y>=0?O<0:O>ae;ee=Math.max(O,0),k==="finished"&&S===null&&(ee=ae);let ie=ee,je=w;if(o){const kn=Math.min(ee,ae)/B;let Ct=Math.floor(kn),ze=kn%1;!ze&&kn>=1&&(ze=1),ze===1&&Ct--,Ct=Math.min(Ct,o+1),!!(Ct%2)&&(a==="reverse"?(ze=1-ze,s&&(ze-=s/B)):a==="mirror"&&(je=_)),ie=Qt(0,1,ze)*B}const le=ct?{done:!1,value:r[0]}:je.next(ie);g&&(le.value=g(le.value));let{done:Ie}=le;!ct&&j!==null&&(Ie=y>=0?ee>=ae:ee<=0);const ir=S===null&&(k==="finished"||k==="running"&&Ie);return p&&p(le.value),ir&&E(),le},G=()=>{c&&c.stop(),c=void 0},we=()=>{k="idle",G(),v(),m(),C=A=null},E=()=>{k="finished",d&&d(),G(),v()},M=()=>{if(x)return;c||(c=n(nt));const D=c.now();l&&l(),S!==null?C=D-S:(!C||k==="finished")&&(C=D),k==="finished"&&m(),A=C,S=null,k="running",c.start()};e&&M();const R={then(D,O){return P.then(D,O)},get time(){return vt(ee)},set time(D){D=Ht(D),ee=D,S!==null||!c||y===0?S=D:C=c.now()-D/y},get duration(){const D=w.calculatedDuration===null?bc(w):w.calculatedDuration;return vt(D)},get speed(){return y},set speed(D){D===y||!c||(y=D,R.time=vt(ee))},get state(){return k},play:M,pause:()=>{k="paused",S=ee},stop:()=>{x=!0,k!=="idle"&&(k="idle",u&&u(),we())},cancel:()=>{A!==null&&nt(A),we()},complete:()=>{k="finished"},sample:D=>(C=0,nt(D))};return R}function v0(e){let t;return()=>(t===void 0&&(t=e()),t)}const w0=v0(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),x0=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Ei=10,_0=2e4,k0=(e,t)=>t.type==="spring"||e==="backgroundColor"||!rh(t.ease);function S0(e,t,{onUpdate:n,onComplete:r,...i}){if(!(w0()&&x0.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,u=!1;const d=()=>{l=new Promise(f=>{a=f})};d();let{keyframes:p,duration:h=300,ease:y,times:x}=i;if(k0(t,i)){const f=wo({...i,repeat:0,delay:0});let g={done:!1,value:p[0]};const w=[];let _=0;for(;!g.done&&_<_0;)g=f.sample(_),w.push(g.value),_+=Ei;x=void 0,p=w,h=_-Ei,y="linear"}const v=Lv(e.owner.current,t,p,{...i,duration:h,ease:y,times:x}),P=()=>{u=!1,v.cancel()},m=()=>{u=!0,$.update(P),a(),d()};return v.onfinish=()=>{u||(e.set(Rv(p,i)),r&&r(),m())},{then(f,g){return l.then(f,g)},attachTimeline(f){return v.timeline=f,v.onfinish=null,J},get time(){return vt(v.currentTime||0)},set time(f){v.currentTime=Ht(f)},get speed(){return v.playbackRate},set speed(f){v.playbackRate=f},get duration(){return vt(h)},play:()=>{s||(v.play(),St(P))},pause:()=>v.pause(),stop:()=>{if(s=!0,v.playState==="idle")return;const{currentTime:f}=v;if(f){const g=wo({...i,autoplay:!1});e.setWithVelocity(g.sample(f-Ei).value,g.sample(f).value,Ei)}m()},complete:()=>{u||v.finish()},cancel:m}}function P0({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:J,pause:J,stop:J,then:o=>(o(),Promise.resolve()),cancel:J,complete:J});return t?wo({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const C0={type:"spring",stiffness:500,damping:25,restSpeed:10},T0=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),E0={type:"keyframes",duration:.8},b0={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},A0=(e,{keyframes:t})=>t.length>2?E0:xn.has(e)?e.startsWith("scale")?T0(t[1]):C0:b0,Fa=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Yt.test(t)||t==="0")&&!t.startsWith("url(")),F0=new Set(["brightness","contrast","saturate","opacity"]);function M0(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match($o)||[];if(!r)return e;const i=n.replace(r,"");let o=F0.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const D0=/([a-z-]*)\(.*?\)/g,Ma={...Yt,getAnimatableNone:e=>{const t=e.match(D0);return t?t.map(M0).join(" "):e}},L0={...zp,color:xe,backgroundColor:xe,outlineColor:xe,fill:xe,stroke:xe,borderColor:xe,borderTopColor:xe,borderRightColor:xe,borderBottomColor:xe,borderLeftColor:xe,filter:Ma,WebkitFilter:Ma},Yl=e=>L0[e];function Eh(e,t){let n=Yl(e);return n!==Ma&&(n=Yt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const bh=e=>/^0[^.\s]+$/.test(e);function R0(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||bh(e)}function V0(e,t,n,r){const i=Fa(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<o.length;u++)o[u]===null&&(o[u]=u===0?s:o[u-1]),R0(o[u])&&l.push(u),typeof o[u]=="string"&&o[u]!=="none"&&o[u]!=="0"&&(a=o[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const d=l[u];o[d]=Eh(t,a)}return o}function N0({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}function Xl(e,t){return e[t]||e.default||e}const O0={skipAnimations:!1},ql=(e,t,n,r={})=>i=>{const o=Xl(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Ht(s);const l=V0(t,e,n,o),u=l[0],d=l[l.length-1],p=Fa(e,u),h=Fa(e,d);let y={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:x=>{t.set(x),o.onUpdate&&o.onUpdate(x)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(N0(o)||(y={...y,...A0(e,y)}),y.duration&&(y.duration=Ht(y.duration)),y.repeatDelay&&(y.repeatDelay=Ht(y.repeatDelay)),!p||!h||Dv.current||o.type===!1||O0.skipAnimations)return P0(y);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const x=S0(t,e,y);if(x)return x}return wo(y)};function xo(e){return!!(Fe(e)&&e.add)}const Ah=e=>/^\-?\d*\.?\d+$/.test(e);function Zl(e,t){e.indexOf(t)===-1&&e.push(t)}function Jl(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class eu{constructor(){this.subscriptions=[]}add(t){return Zl(this.subscriptions,t),()=>Jl(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const j0=e=>!isNaN(parseFloat(e));class I0{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=ge;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,$.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>$.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=j0(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new eu);const r=this.events[t].add(n);return t==="change"?()=>{r(),$.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ph(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Jn(e,t){return new I0(e,t)}const Fh=e=>t=>t.test(e),z0={test:e=>e==="auto",parse:e=>e},Mh=[_n,L,ut,Et,Gy,Ky,z0],pr=e=>Mh.find(Fh(e)),B0=[...Mh,xe,Yt],U0=e=>B0.find(Fh(e));function $0(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Jn(n))}function H0(e,t){const n=Wo(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const a=av(o[s]);$0(e,s,a)}}function W0(e,t,n){var r,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],u=t[l];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),d!=null&&(typeof d=="string"&&(Ah(d)||bh(d))?d=parseFloat(d):!U0(d)&&Yt.test(u)&&(d=Eh(l,u)),e.addValue(l,Jn(d,{owner:e})),n[l]===void 0&&(n[l]=d),d!==null&&e.setBaseTarget(l,d))}}function K0(e,t){return t?(t[e]||t.default||t).from:void 0}function G0(e,t,n){const r={};for(const i in e){const o=K0(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function Q0({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Y0(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Dh(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const p in a){const h=e.getValue(p),y=a[p];if(!h||y===void 0||d&&Q0(d,p))continue;const x={delay:n,elapsed:0,...Xl(o||{},p)};if(window.HandoffAppearAnimations){const m=e.getProps()[Lp];if(m){const c=window.HandoffAppearAnimations(m,p,h,$);c!==null&&(x.elapsed=c,x.isHandoff=!0)}}let v=!x.isHandoff&&!Y0(h,y);if(x.type==="spring"&&(h.getVelocity()||x.velocity)&&(v=!1),h.animation&&(v=!1),v)continue;h.start(ql(p,h,y,e.shouldReduceMotion&&xn.has(p)?{type:!1}:x));const P=h.animation;xo(l)&&(l.add(p),P.then(()=>l.remove(p))),u.push(P)}return s&&Promise.all(u).then(()=>{s&&H0(e,s)}),u}function Da(e,t,n={}){const r=Wo(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Dh(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:p}=i;return X0(e,t,u+l,d,p,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function X0(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(q0).forEach((u,d)=>{u.notify("AnimationStart",t),s.push(Da(u,t,{...o,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function q0(e,t){return e.sortNodePosition(t)}function Z0(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Da(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Da(e,t,n);else{const i=typeof t=="function"?Wo(e,t,n.custom):t;r=Promise.all(Dh(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const J0=[...Vl].reverse(),e1=Vl.length;function t1(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Z0(e,n,r)))}function n1(e){let t=t1(e);const n=i1();let r=!0;const i=(l,u)=>{const d=Wo(e,u);if(d){const{transition:p,transitionEnd:h,...y}=d;l={...l,...y,...h}}return l};function o(l){t=l(e)}function s(l,u){const d=e.getProps(),p=e.getVariantContext(!0)||{},h=[],y=new Set;let x={},v=1/0;for(let m=0;m<e1;m++){const c=J0[m],f=n[c],g=d[c]!==void 0?d[c]:p[c],w=Xr(g),_=c===u?f.isActive:null;_===!1&&(v=m);let k=g===p[c]&&g!==d[c]&&w;if(k&&r&&e.manuallyAnimateOnMount&&(k=!1),f.protectedKeys={...x},!f.isActive&&_===null||!g&&!f.prevProp||Bo(g)||typeof g=="boolean")continue;let C=r1(f.prevProp,g)||c===u&&f.isActive&&!k&&w||m>v&&w,A=!1;const j=Array.isArray(g)?g:[g];let B=j.reduce(i,{});_===!1&&(B={});const{prevResolvedValues:ae={}}=f,ee={...ae,...B},nt=G=>{C=!0,y.has(G)&&(A=!0,y.delete(G)),f.needsAnimating[G]=!0};for(const G in ee){const we=B[G],E=ae[G];if(x.hasOwnProperty(G))continue;let M=!1;go(we)&&go(E)?M=!th(we,E):M=we!==E,M?we!==void 0?nt(G):y.add(G):we!==void 0&&y.has(G)?nt(G):f.protectedKeys[G]=!0}f.prevProp=g,f.prevResolvedValues=B,f.isActive&&(x={...x,...B}),r&&e.blockInitialAnimation&&(C=!1),C&&(!k||A)&&h.push(...j.map(G=>({animation:G,options:{type:c,...l}})))}if(y.size){const m={};y.forEach(c=>{const f=e.getBaseTarget(c);f!==void 0&&(m[c]=f)}),h.push({animation:m})}let P=!!h.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(P=!1),r=!1,P?t(h):Promise.resolve()}function a(l,u,d){var p;if(n[l].isActive===u)return Promise.resolve();(p=e.variantChildren)===null||p===void 0||p.forEach(y=>{var x;return(x=y.animationState)===null||x===void 0?void 0:x.setActive(l,u)}),n[l].isActive=u;const h=s(d,l);for(const y in n)n[y].protectedKeys={};return h}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function r1(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!th(t,e):!1}function en(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function i1(){return{animate:en(!0),whileInView:en(),whileHover:en(),whileTap:en(),whileDrag:en(),whileFocus:en(),exit:en()}}class o1 extends Jt{constructor(t){super(t),t.animationState||(t.animationState=n1(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Bo(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let s1=0;class a1 extends Jt{constructor(){super(...arguments),this.id=s1++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const l1={animation:{Feature:o1},exit:{Feature:a1}},Ac=(e,t)=>Math.abs(e-t);function u1(e,t){const n=Ac(e.x,t.x),r=Ac(e.y,t.y);return Math.sqrt(n**2+r**2)}class Lh{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=As(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,y=u1(p.offset,{x:0,y:0})>=3;if(!h&&!y)return;const{point:x}=p,{timestamp:v}=ge;this.history.push({...x,timestamp:v});const{onStart:P,onMove:m}=this.handlers;h||(P&&P(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,p)},this.handlePointerMove=(p,h)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=bs(h,this.transformPagePoint),$.update(this.updatePoint,!0)},this.handlePointerUp=(p,h)=>{this.end();const{onEnd:y,onSessionEnd:x,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const P=As(p.type==="pointercancel"?this.lastMoveEventInfo:bs(h,this.transformPagePoint),this.history);this.startEvent&&y&&y(p,P),x&&x(p,P)},!Xp(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Ho(t),a=bs(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=ge;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,As(a,this.history)),this.removeListeners=$t(yt(this.contextWindow,"pointermove",this.handlePointerMove),yt(this.contextWindow,"pointerup",this.handlePointerUp),yt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),St(this.updatePoint)}}function bs(e,t){return t?{point:t(e.point)}:e}function Fc(e,t){return{x:e.x-t.x,y:e.y-t.y}}function As({point:e},t){return{point:e,delta:Fc(e,Rh(t)),offset:Fc(e,c1(t)),velocity:d1(t,.1)}}function c1(e){return e[0]}function Rh(e){return e[e.length-1]}function d1(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Rh(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ht(t)));)n--;if(!r)return{x:0,y:0};const o=vt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Ve(e){return e.max-e.min}function La(e,t=0,n=.01){return Math.abs(e-t)<=n}function Mc(e,t,n,r=.5){e.origin=r,e.originPoint=Y(t.min,t.max,e.origin),e.scale=Ve(n)/Ve(t),(La(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Y(n.min,n.max,e.origin)-e.originPoint,(La(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Mr(e,t,n,r){Mc(e.x,t.x,n.x,r?r.originX:void 0),Mc(e.y,t.y,n.y,r?r.originY:void 0)}function Dc(e,t,n){e.min=n.min+t.min,e.max=e.min+Ve(t)}function f1(e,t,n){Dc(e.x,t.x,n.x),Dc(e.y,t.y,n.y)}function Lc(e,t,n){e.min=t.min-n.min,e.max=e.min+Ve(t)}function Dr(e,t,n){Lc(e.x,t.x,n.x),Lc(e.y,t.y,n.y)}function p1(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Y(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Y(n,e,r.max):Math.min(e,n)),e}function Rc(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function h1(e,{top:t,left:n,bottom:r,right:i}){return{x:Rc(e.x,n,i),y:Rc(e.y,t,r)}}function Vc(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function m1(e,t){return{x:Vc(e.x,t.x),y:Vc(e.y,t.y)}}function g1(e,t){let n=.5;const r=Ve(e),i=Ve(t);return i>r?n=Zr(t.min,t.max-r,e.min):r>i&&(n=Zr(e.min,e.max-i,t.min)),Qt(0,1,n)}function y1(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Ra=.35;function v1(e=Ra){return e===!1?e=0:e===!0&&(e=Ra),{x:Nc(e,"left","right"),y:Nc(e,"top","bottom")}}function Nc(e,t,n){return{min:Oc(e,t),max:Oc(e,n)}}function Oc(e,t){return typeof e=="number"?e:e[t]||0}const jc=()=>({translate:0,scale:1,origin:0,originPoint:0}),jn=()=>({x:jc(),y:jc()}),Ic=()=>({min:0,max:0}),ne=()=>({x:Ic(),y:Ic()});function Ue(e){return[e("x"),e("y")]}function Vh({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function w1({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function x1(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Fs(e){return e===void 0||e===1}function Va({scale:e,scaleX:t,scaleY:n}){return!Fs(e)||!Fs(t)||!Fs(n)}function rn(e){return Va(e)||Nh(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Nh(e){return zc(e.x)||zc(e.y)}function zc(e){return e&&e!=="0%"}function _o(e,t,n){const r=e-n,i=t*r;return n+i}function Bc(e,t,n,r,i){return i!==void 0&&(e=_o(e,i,r)),_o(e,n,r)+t}function Na(e,t=0,n=1,r,i){e.min=Bc(e.min,t,n,r,i),e.max=Bc(e.max,t,n,r,i)}function Oh(e,{x:t,y:n}){Na(e.x,t.translate,t.scale,t.originPoint),Na(e.y,n.translate,n.scale,n.originPoint)}function _1(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&In(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Oh(e,s)),r&&rn(o.latestValues)&&In(e,o.latestValues))}t.x=Uc(t.x),t.y=Uc(t.y)}function Uc(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Ft(e,t){e.min=e.min+t,e.max=e.max+t}function $c(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=Y(e.min,e.max,o);Na(e,t[n],t[r],s,t.scale)}const k1=["x","scaleX","originX"],S1=["y","scaleY","originY"];function In(e,t){$c(e.x,t,k1),$c(e.y,t,S1)}function jh(e,t){return Vh(x1(e.getBoundingClientRect(),t))}function P1(e,t,n){const r=jh(e,n),{scroll:i}=t;return i&&(Ft(r.x,i.offset.x),Ft(r.y,i.offset.y)),r}const Ih=({current:e})=>e?e.ownerDocument.defaultView:null,C1=new WeakMap;class T1{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ne(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ho(d,"page").point)},o=(d,p)=>{const{drag:h,dragPropagation:y,onDragStart:x}=this.getProps();if(h&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Zp(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ue(P=>{let m=this.getAxisMotionValue(P).get()||0;if(ut.test(m)){const{projection:c}=this.visualElement;if(c&&c.layout){const f=c.layout.layoutBox[P];f&&(m=Ve(f)*(parseFloat(m)/100))}}this.originPoint[P]=m}),x&&$.update(()=>x(d,p),!1,!0);const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},s=(d,p)=>{const{dragPropagation:h,dragDirectionLock:y,onDirectionLock:x,onDrag:v}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:P}=p;if(y&&this.currentDirection===null){this.currentDirection=E1(P),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",p.point,P),this.updateAxis("y",p.point,P),this.visualElement.render(),v&&v(d,p)},a=(d,p)=>this.stop(d,p),l=()=>Ue(d=>{var p;return this.getAnimationState(d)==="paused"&&((p=this.getAxisMotionValue(d).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Lh(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Ih(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&$.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!bi(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=p1(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Nn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=h1(i.layoutBox,n):this.constraints=!1,this.elastic=v1(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Ue(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=y1(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Nn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=P1(r,i.root,this.visualElement.getTransformPagePoint());let s=m1(i.layout.layoutBox,o);if(n){const a=n(w1(s));this.hasMutatedConstraints=!!a,a&&(s=Vh(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Ue(d=>{if(!bi(d,n,this.currentDirection))return;let p=l&&l[d]||{};s&&(p={min:0,max:0});const h=i?200:1e6,y=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...o,...p};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(ql(t,r,0,n))}stopAnimation(){Ue(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ue(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ue(n=>{const{drag:r}=this.getProps();if(!bi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-Y(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Nn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ue(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=g1({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ue(s=>{if(!bi(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(Y(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;C1.set(this.visualElement,this);const t=this.visualElement.current,n=yt(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Nn(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=mt(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ue(d=>{const p=this.getAxisMotionValue(d);p&&(this.originPoint[d]+=l[d].translate,p.set(p.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Ra,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function bi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function E1(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class b1 extends Jt{constructor(t){super(t),this.removeGroupControls=J,this.removeListeners=J,this.controls=new T1(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||J}unmount(){this.removeGroupControls(),this.removeListeners()}}const Hc=e=>(t,n)=>{e&&$.update(()=>e(t,n))};class A1 extends Jt{constructor(){super(...arguments),this.removePointerDownListener=J}onPointerDown(t){this.session=new Lh(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ih(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Hc(t),onStart:Hc(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&$.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=yt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function F1(){const e=b.useContext(Io);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=b.useId();return b.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const Ui={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Wc(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const hr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(L.test(e))e=parseFloat(e);else return e;const n=Wc(e,t.target.x),r=Wc(e,t.target.y);return`${n}% ${r}%`}},M1={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Yt.parse(e);if(i.length>5)return r;const o=Yt.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=Y(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class D1 extends st.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;Iy(L1),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Ui.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||$.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function zh(e){const[t,n]=F1(),r=b.useContext(Ol);return st.createElement(D1,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(Vp),isPresent:t,safeToRemove:n})}const L1={borderRadius:{...hr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hr,borderTopRightRadius:hr,borderBottomLeftRadius:hr,borderBottomRightRadius:hr,boxShadow:M1},Bh=["TopLeft","TopRight","BottomLeft","BottomRight"],R1=Bh.length,Kc=e=>typeof e=="string"?parseFloat(e):e,Gc=e=>typeof e=="number"||L.test(e);function V1(e,t,n,r,i,o){i?(e.opacity=Y(0,n.opacity!==void 0?n.opacity:1,N1(r)),e.opacityExit=Y(t.opacity!==void 0?t.opacity:1,0,O1(r))):o&&(e.opacity=Y(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<R1;s++){const a=`border${Bh[s]}Radius`;let l=Qc(t,a),u=Qc(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Gc(l)===Gc(u)?(e[a]=Math.max(Y(Kc(l),Kc(u),r),0),(ut.test(u)||ut.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=Y(t.rotate||0,n.rotate||0,r))}function Qc(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const N1=Uh(0,.5,ch),O1=Uh(.5,.95,J);function Uh(e,t,n){return r=>r<e?0:r>t?1:n(Zr(e,t,r))}function Yc(e,t){e.min=t.min,e.max=t.max}function Be(e,t){Yc(e.x,t.x),Yc(e.y,t.y)}function Xc(e,t,n,r,i){return e-=t,e=_o(e,1/n,r),i!==void 0&&(e=_o(e,1/i,r)),e}function j1(e,t=0,n=1,r=.5,i,o=e,s=e){if(ut.test(t)&&(t=parseFloat(t),t=Y(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=Y(o.min,o.max,r);e===o&&(a-=t),e.min=Xc(e.min,t,n,a,i),e.max=Xc(e.max,t,n,a,i)}function qc(e,t,[n,r,i],o,s){j1(e,t[n],t[r],t[i],t.scale,o,s)}const I1=["x","scaleX","originX"],z1=["y","scaleY","originY"];function Zc(e,t,n,r){qc(e.x,t,I1,n?n.x:void 0,r?r.x:void 0),qc(e.y,t,z1,n?n.y:void 0,r?r.y:void 0)}function Jc(e){return e.translate===0&&e.scale===1}function $h(e){return Jc(e.x)&&Jc(e.y)}function B1(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Hh(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function ed(e){return Ve(e.x)/Ve(e.y)}class U1{constructor(){this.members=[]}add(t){Zl(this.members,t),t.scheduleRender()}remove(t){if(Jl(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function td(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:d}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),d&&(r+=`rotateY(${d}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const $1=(e,t)=>e.depth-t.depth;class H1{constructor(){this.children=[],this.isDirty=!1}add(t){Zl(this.children,t),this.isDirty=!0}remove(t){Jl(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort($1),this.isDirty=!1,this.children.forEach(t)}}function W1(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(St(r),e(o-t))};return $.read(r,!0),()=>St(r)}function K1(e){window.MotionDebug&&window.MotionDebug.record(e)}function G1(e){return e instanceof SVGElement&&e.tagName!=="svg"}function Q1(e,t,n){const r=Fe(e)?e:Jn(e);return r.start(ql("",r,t,n)),r.animation}const nd=["","X","Y","Z"],Y1={visibility:"hidden"},rd=1e3;let X1=0;const on={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Wh({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=X1++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,on.totalNodes=on.resolvedTargetDeltas=on.recalculatedProjection=0,this.nodes.forEach(J1),this.nodes.forEach(iw),this.nodes.forEach(ow),this.nodes.forEach(ew),K1(on)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new H1)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new eu),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=G1(s),this.instance=s;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let p;const h=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=W1(h,250),Ui.hasAnimatedSinceResize&&(Ui.hasAnimatedSinceResize=!1,this.nodes.forEach(od))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:h,hasRelativeTargetChanged:y,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||d.getDefaultTransition()||cw,{onLayoutAnimationStart:P,onLayoutAnimationComplete:m}=d.getProps(),c=!this.targetLayout||!Hh(this.targetLayout,x)||y,f=!h&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||f||h&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,f);const g={...Xl(v,"layout"),onPlay:P,onComplete:m};(d.shouldReduceMotion||this.options.layoutRoot)&&(g.delay=0,g.type=!1),this.startAnimation(g)}else h||od(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,St(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(sw),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(id);return}this.isUpdating||this.nodes.forEach(nw),this.isUpdating=!1,this.nodes.forEach(rw),this.nodes.forEach(q1),this.nodes.forEach(Z1),this.clearAllSnapshots();const a=performance.now();ge.delta=Qt(0,1e3/60,a-ge.timestamp),ge.timestamp=a,ge.isProcessing=!0,xs.update.process(ge),xs.preRender.process(ge),xs.render.process(ge),ge.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(tw),this.sharedNodes.forEach(aw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ne(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!$h(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&(a||rn(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),dw(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return ne();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(Ft(a.x,l.offset.x),Ft(a.y,l.offset.y)),a}removeElementScroll(s){const a=ne();Be(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:d,options:p}=u;if(u!==this.root&&d&&p.layoutScroll){if(d.isRoot){Be(a,s);const{scroll:h}=this.root;h&&(Ft(a.x,-h.offset.x),Ft(a.y,-h.offset.y))}Ft(a.x,d.offset.x),Ft(a.y,d.offset.y)}}return a}applyTransform(s,a=!1){const l=ne();Be(l,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&In(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),rn(d.latestValues)&&In(l,d.latestValues)}return rn(this.latestValues)&&In(l,this.latestValues),l}removeTransform(s){const a=ne();Be(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!rn(u.latestValues))continue;Va(u.latestValues)&&u.updateSnapshot();const d=ne(),p=u.measurePageBox();Be(d,p),Zc(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return rn(this.latestValues)&&Zc(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ge.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:p,layoutId:h}=this.options;if(!(!this.layout||!(p||h))){if(this.resolvedRelativeTargetAt=ge.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ne(),this.relativeTargetOrigin=ne(),Dr(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Be(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ne(),this.targetWithTransforms=ne()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),f1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Be(this.target,this.layout.layoutBox),Oh(this.target,this.targetDelta)):Be(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ne(),this.relativeTargetOrigin=ne(),Dr(this.relativeTargetOrigin,this.target,y.target),Be(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}on.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Va(this.parent.latestValues)||Nh(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===ge.timestamp&&(u=!1),u)return;const{layout:d,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||p))return;Be(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,y=this.treeScale.y;_1(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:x}=a;if(!x){this.projectionTransform&&(this.projectionDelta=jn(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=jn(),this.projectionDeltaWithTransform=jn());const v=this.projectionTransform;Mr(this.projectionDelta,this.layoutCorrected,x,this.latestValues),this.projectionTransform=td(this.projectionDelta,this.treeScale),(this.projectionTransform!==v||this.treeScale.x!==h||this.treeScale.y!==y)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),on.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},p=jn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=ne(),y=l?l.source:void 0,x=this.layout?this.layout.source:void 0,v=y!==x,P=this.getStack(),m=!P||P.members.length<=1,c=!!(v&&!m&&this.options.crossfade===!0&&!this.path.some(uw));this.animationProgress=0;let f;this.mixTargetDelta=g=>{const w=g/1e3;sd(p.x,s.x,w),sd(p.y,s.y,w),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Dr(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),lw(this.relativeTarget,this.relativeTargetOrigin,h,w),f&&B1(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||(f=ne()),Be(f,this.relativeTarget)),v&&(this.animationValues=d,V1(d,u,this.latestValues,w,c,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(St(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$.update(()=>{Ui.hasAnimatedSinceResize=!0,this.currentAnimation=Q1(0,rd,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(rd),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&Kh(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ne();const p=Ve(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+p;const h=Ve(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}Be(a,l),In(a,d),Mr(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new U1),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let d=0;d<nd.length;d++){const p="rotate"+nd[d];l[p]&&(u[p]=l[p],s.setStaticValue(p,0))}s.render();for(const d in u)s.setStaticValue(d,u[d]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Y1;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Bi(s==null?void 0:s.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=Bi(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!rn(this.latestValues)&&(v.transform=d?d({},""):"none",this.hasProjected=!1),v}const h=p.animationValues||p.latestValues;this.applyTransformsToTarget(),u.transform=td(this.projectionDeltaWithTransform,this.treeScale,h),d&&(u.transform=d(h,u.transform));const{x:y,y:x}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${x.origin*100}% 0`,p.animationValues?u.opacity=p===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=p===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const v in ho){if(h[v]===void 0)continue;const{correct:P,applyTo:m}=ho[v],c=u.transform==="none"?h[v]:P(h[v],p);if(m){const f=m.length;for(let g=0;g<f;g++)u[m[g]]=c}else u[v]=c}return this.options.layoutId&&(u.pointerEvents=p===this?Bi(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(id),this.root.sharedNodes.clear()}}}function q1(e){e.updateLayout()}function Z1(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?Ue(p=>{const h=s?n.measuredBox[p]:n.layoutBox[p],y=Ve(h);h.min=r[p].min,h.max=h.min+y}):Kh(o,n.layoutBox,r)&&Ue(p=>{const h=s?n.measuredBox[p]:n.layoutBox[p],y=Ve(r[p]);h.max=h.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+y)});const a=jn();Mr(a,r,n.layoutBox);const l=jn();s?Mr(l,e.applyTransform(i,!0),n.measuredBox):Mr(l,r,n.layoutBox);const u=!$h(a);let d=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:h,layout:y}=p;if(h&&y){const x=ne();Dr(x,n.layoutBox,h.layoutBox);const v=ne();Dr(v,r,y.layoutBox),Hh(x,v)||(d=!0),p.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=x,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function J1(e){on.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function ew(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function tw(e){e.clearSnapshot()}function id(e){e.clearMeasurements()}function nw(e){e.isLayoutDirty=!1}function rw(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function od(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function iw(e){e.resolveTargetDelta()}function ow(e){e.calcProjection()}function sw(e){e.resetRotation()}function aw(e){e.removeLeadSnapshot()}function sd(e,t,n){e.translate=Y(t.translate,0,n),e.scale=Y(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ad(e,t,n,r){e.min=Y(t.min,n.min,r),e.max=Y(t.max,n.max,r)}function lw(e,t,n,r){ad(e.x,t.x,n.x,r),ad(e.y,t.y,n.y,r)}function uw(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const cw={duration:.45,ease:[.4,0,.1,1]},ld=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),ud=ld("applewebkit/")&&!ld("chrome/")?Math.round:J;function cd(e){e.min=ud(e.min),e.max=ud(e.max)}function dw(e){cd(e.x),cd(e.y)}function Kh(e,t,n){return e==="position"||e==="preserve-aspect"&&!La(ed(t),ed(n),.2)}const fw=Wh({attachResizeListener:(e,t)=>mt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ms={current:void 0},Gh=Wh({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ms.current){const e=new fw({});e.mount(window),e.setOptions({layoutScroll:!0}),Ms.current=e}return Ms.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),pw={pan:{Feature:A1},drag:{Feature:b1,ProjectionNode:Gh,MeasureLayout:zh}},hw=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function mw(e){const t=hw.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Oa(e,t,n=1){const[r,i]=mw(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Ah(s)?parseFloat(s):s}else return Ta(i)?Oa(i,t,n+1):i}function gw(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!Ta(o))return;const s=Oa(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!Ta(o))continue;const s=Oa(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const yw=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Qh=e=>yw.has(e),vw=e=>Object.keys(e).some(Qh),dd=e=>e===_n||e===L,fd=(e,t)=>parseFloat(e.split(", ")[t]),pd=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return fd(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?fd(o[1],e):0}},ww=new Set(["x","y","z"]),xw=ii.filter(e=>!ww.has(e));function _w(e){const t=[];return xw.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const er={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:pd(4,13),y:pd(5,14)};er.translateX=er.x;er.translateY=er.y;const kw=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=er[u](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const d=t.getValue(u);d&&d.jump(a[u]),e[u]=er[u](l,o)}),e},Sw=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(Qh);let o=[],s=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let d=n[l],p=pr(d);const h=t[l];let y;if(go(h)){const x=h.length,v=h[0]===null?1:0;d=h[v],p=pr(d);for(let P=v;P<x&&h[P]!==null;P++)y?Wl(pr(h[P])===y):y=pr(h[P])}else y=pr(h);if(p!==y)if(dd(p)&&dd(y)){const x=u.get();typeof x=="string"&&u.set(parseFloat(x)),typeof h=="string"?t[l]=parseFloat(h):Array.isArray(h)&&y===L&&(t[l]=h.map(parseFloat))}else p!=null&&p.transform&&(y!=null&&y.transform)&&(d===0||h===0)?d===0?u.set(y.transform(d)):t[l]=p.transform(h):(s||(o=_w(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(h))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=kw(t,e,a);return o.length&&o.forEach(([d,p])=>{e.getValue(d).set(p)}),e.render(),zo&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function Pw(e,t,n,r){return vw(t)?Sw(e,t,n,r):{target:t,transitionEnd:r}}const Cw=(e,t,n,r)=>{const i=gw(e,t,r);return t=i.target,r=i.transitionEnd,Pw(e,t,n,r)},ja={current:null},Yh={current:!1};function Tw(){if(Yh.current=!0,!!zo)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ja.current=e.matches;e.addListener(t),t()}else ja.current=!1}function Ew(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(Fe(o))e.addValue(i,o),xo(r)&&r.add(i);else if(Fe(s))e.addValue(i,Jn(o,{owner:e})),xo(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,Jn(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const hd=new WeakMap,Xh=Object.keys(qr),bw=Xh.length,md=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Aw=Nl.length;class Fw{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>$.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=Uo(n),this.isVariantNode=Rp(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const p in d){const h=d[p];a[p]!==void 0&&Fe(h)&&(h.set(a[p],!1),xo(u)&&u.add(p))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,hd.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Yh.current||Tw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ja.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){hd.delete(this.current),this.projection&&this.projection.unmount(),St(this.notifyUpdate),St(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=xn.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&$.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,a;for(let l=0;l<bw;l++){const u=Xh[l],{isEnabled:d,Feature:p,ProjectionNode:h,MeasureLayout:y}=qr[u];h&&(s=h),d(n)&&(!this.features[u]&&p&&(this.features[u]=new p(this)),y&&(a=y))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:d,dragConstraints:p,layoutScroll:h,layoutRoot:y}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!d||p&&Nn(p),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:h,layoutRoot:y})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ne()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<md.length;r++){const i=md[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Ew(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<Aw;r++){const i=Nl[r],o=this.props[i];(Xr(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Jn(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Hl(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Fe(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new eu),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class qh extends Fw{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=G0(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){W0(this,r,s);const a=Cw(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function Mw(e){return window.getComputedStyle(e)}class Dw extends qh{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(xn.has(n)){const r=Yl(n);return r&&r.default||0}else{const r=Mw(t),i=(jp(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return jh(t,n)}build(t,n,r,i){Il(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return $l(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Fe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){Hp(t,n,r,i)}}class Lw extends qh{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(xn.has(n)){const r=Yl(n);return r&&r.default||0}return n=Wp.has(n)?n:Rl(n),t.getAttribute(n)}measureInstanceViewportBox(){return ne()}scrapeMotionValuesFromProps(t,n){return Gp(t,n)}build(t,n,r,i){Bl(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Kp(t,n,r,i)}mount(t){this.isSVGTag=Ul(t.tagName),super.mount(t)}}const Rw=(e,t)=>jl(e)?new Lw(t,{enableHardwareAcceleration:!1}):new Dw(t,{enableHardwareAcceleration:!0}),Vw={layout:{ProjectionNode:Gh,MeasureLayout:zh}},Nw={...l1,...bv,...pw,...Vw},Ow=Oy((e,t)=>mv(e,t,Nw,Rw));function Zh(){const e=b.useRef(!1);return Ll(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function jw(){const e=Zh(),[t,n]=b.useState(0),r=b.useCallback(()=>{e.current&&n(t+1)},[t]);return[b.useCallback(()=>$.postRender(r),[r]),t]}class Iw extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function zw({children:e,isPresent:t}){const n=b.useId(),r=b.useRef(null),i=b.useRef({width:0,height:0,top:0,left:0});return b.useInsertionEffect(()=>{const{width:o,height:s,top:a,left:l}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),b.createElement(Iw,{isPresent:t,childRef:r,sizeRef:i},b.cloneElement(e,{ref:r}))}const Ds=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=Qp(Bw),l=b.useId(),u=b.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:d=>{a.set(d,!0);for(const p of a.values())if(!p)return;r&&r()},register:d=>(a.set(d,!1),()=>a.delete(d))}),o?void 0:[n]);return b.useMemo(()=>{a.forEach((d,p)=>a.set(p,!1))},[n]),b.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=b.createElement(zw,{isPresent:n},e)),b.createElement(Io.Provider,{value:u},e)};function Bw(){return new Map}function Uw(e){return b.useEffect(()=>()=>e(),[])}const sn=e=>e.key||"";function $w(e,t){e.forEach(n=>{const r=sn(n);t.set(r,n)})}function Hw(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const Ww=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=b.useContext(Ol).forceRender||jw()[0],l=Zh(),u=Hw(e);let d=u;const p=b.useRef(new Map).current,h=b.useRef(d),y=b.useRef(new Map).current,x=b.useRef(!0);if(Ll(()=>{x.current=!1,$w(u,y),h.current=d}),Uw(()=>{x.current=!0,y.clear(),p.clear()}),x.current)return b.createElement(b.Fragment,null,d.map(c=>b.createElement(Ds,{key:sn(c),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:s},c)));d=[...d];const v=h.current.map(sn),P=u.map(sn),m=v.length;for(let c=0;c<m;c++){const f=v[c];P.indexOf(f)===-1&&!p.has(f)&&p.set(f,void 0)}return s==="wait"&&p.size&&(d=[]),p.forEach((c,f)=>{if(P.indexOf(f)!==-1)return;const g=y.get(f);if(!g)return;const w=v.indexOf(f);let _=c;if(!_){const k=()=>{p.delete(f);const S=Array.from(y.keys()).filter(C=>!P.includes(C));if(S.forEach(C=>y.delete(C)),h.current=u.filter(C=>{const A=sn(C);return A===f||S.includes(A)}),!p.size){if(l.current===!1)return;a(),r&&r()}};_=b.createElement(Ds,{key:sn(g),isPresent:!1,onExitComplete:k,custom:t,presenceAffectsLayout:o,mode:s},g),p.set(f,_)}d.splice(w,0,_)}),d=d.map(c=>{const f=c.key;return p.has(f)?c:b.createElement(Ds,{key:sn(c),isPresent:!0,presenceAffectsLayout:o,mode:s},c)}),b.createElement(b.Fragment,null,p.size?d:d.map(c=>b.cloneElement(c)))};var Jh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gd=st.createContext&&st.createContext(Jh),Wt=globalThis&&globalThis.__assign||function(){return Wt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Wt.apply(this,arguments)},Kw=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function em(e){return e&&e.map(function(t,n){return st.createElement(t.tag,Wt({key:n},t.attr),em(t.child))})}function Ko(e){return function(t){return st.createElement(Gw,Wt({attr:Wt({},e.attr)},t),em(e.child))}}function Gw(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=Kw(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),st.createElement("svg",Wt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Wt(Wt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&st.createElement("title",null,o),e.children)};return gd!==void 0?st.createElement(gd.Consumer,null,function(n){return t(n)}):t(Jh)}function Qw(e){return Ko({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{tag:"polyline",attr:{points:"15 3 21 3 21 9"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"}}]})(e)}function Yw(e){return Ko({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}},{tag:"polyline",attr:{points:"13 2 13 9 20 9"}}]})(e)}function Xw(e){return Ko({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}},{tag:"line",attr:{x1:"9",y1:"14",x2:"15",y2:"14"}}]})(e)}function qw(e){return Ko({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}},{tag:"line",attr:{x1:"12",y1:"11",x2:"12",y2:"17"}},{tag:"line",attr:{x1:"9",y1:"14",x2:"15",y2:"14"}}]})(e)}const Zw=({project:e,isOpen:t,onToggle:n,onFileSelect:r})=>V.jsxs("div",{className:"bg-lightgray rounded-md p-2 cursor-pointer hover:bg-hoverovercolor transition-colors",children:[V.jsxs("div",{className:"flex items-center cursor-pointer select-none",onClick:n,children:[V.jsx("div",{className:"mr-2",children:t?V.jsx(Xw,{}):V.jsx(qw,{})}),V.jsx("span",{className:"font-medium",children:e.name})]}),V.jsx(Ww,{children:t&&V.jsx(Ow.ul,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},className:"mt-2 pl-6 space-y-1 overflow-hidden",children:e.files.map((i,o)=>V.jsxs("li",{className:"flex items-center cursor-pointer hover:text-blue-400",onClick:()=>r(e,i),children:[V.jsx(Yw,{className:"mr-2"}),V.jsx("span",{children:i.name})]},o))})})]}),Jw=({projects:e,onFileSelect:t})=>{const[n,r]=b.useState(null),i=o=>{r(s=>s===o?null:o)};return V.jsxs("div",{className:"mt-6",children:[V.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Projects"}),V.jsx("div",{className:"space-y-2",children:e.map(o=>V.jsx(Zw,{project:o,isOpen:n===o.id,onToggle:()=>i(o.id),onFileSelect:t},o.id))})]})};var tm={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,s={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function c(f){return f instanceof l?new l(f.type,c(f.content),f.alias):Array.isArray(f)?f.map(c):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(c){return Object.prototype.toString.call(c).slice(8,-1)},objId:function(c){return c.__id||Object.defineProperty(c,"__id",{value:++o}),c.__id},clone:function c(f,g){g=g||{};var w,_;switch(a.util.type(f)){case"Object":if(_=a.util.objId(f),g[_])return g[_];w={},g[_]=w;for(var k in f)f.hasOwnProperty(k)&&(w[k]=c(f[k],g));return w;case"Array":return _=a.util.objId(f),g[_]?g[_]:(w=[],g[_]=w,f.forEach(function(S,C){w[C]=c(S,g)}),w);default:return f}},getLanguage:function(c){for(;c;){var f=i.exec(c.className);if(f)return f[1].toLowerCase();c=c.parentElement}return"none"},setLanguage:function(c,f){c.className=c.className.replace(RegExp(i,"gi"),""),c.classList.add("language-"+f)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(w){var c=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack)||[])[1];if(c){var f=document.getElementsByTagName("script");for(var g in f)if(f[g].src==c)return f[g]}return null}},isActive:function(c,f,g){for(var w="no-"+f;c;){var _=c.classList;if(_.contains(f))return!0;if(_.contains(w))return!1;c=c.parentElement}return!!g}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(c,f){var g=a.util.clone(a.languages[c]);for(var w in f)g[w]=f[w];return g},insertBefore:function(c,f,g,w){w=w||a.languages;var _=w[c],k={};for(var S in _)if(_.hasOwnProperty(S)){if(S==f)for(var C in g)g.hasOwnProperty(C)&&(k[C]=g[C]);g.hasOwnProperty(S)||(k[S]=_[S])}var A=w[c];return w[c]=k,a.languages.DFS(a.languages,function(j,B){B===A&&j!=c&&(this[j]=k)}),k},DFS:function c(f,g,w,_){_=_||{};var k=a.util.objId;for(var S in f)if(f.hasOwnProperty(S)){g.call(f,S,f[S],w||S);var C=f[S],A=a.util.type(C);A==="Object"&&!_[k(C)]?(_[k(C)]=!0,c(C,g,null,_)):A==="Array"&&!_[k(C)]&&(_[k(C)]=!0,c(C,g,S,_))}}},plugins:{},highlightAll:function(c,f){a.highlightAllUnder(document,c,f)},highlightAllUnder:function(c,f,g){var w={callback:g,container:c,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",w),w.elements=Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)),a.hooks.run("before-all-elements-highlight",w);for(var _=0,k;k=w.elements[_++];)a.highlightElement(k,f===!0,w.callback)},highlightElement:function(c,f,g){var w=a.util.getLanguage(c),_=a.languages[w];a.util.setLanguage(c,w);var k=c.parentElement;k&&k.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(k,w);var S=c.textContent,C={element:c,language:w,grammar:_,code:S};function A(B){C.highlightedCode=B,a.hooks.run("before-insert",C),C.element.innerHTML=C.highlightedCode,a.hooks.run("after-highlight",C),a.hooks.run("complete",C),g&&g.call(C.element)}if(a.hooks.run("before-sanity-check",C),k=C.element.parentElement,k&&k.nodeName.toLowerCase()==="pre"&&!k.hasAttribute("tabindex")&&k.setAttribute("tabindex","0"),!C.code){a.hooks.run("complete",C),g&&g.call(C.element);return}if(a.hooks.run("before-highlight",C),!C.grammar){A(a.util.encode(C.code));return}if(f&&r.Worker){var j=new Worker(a.filename);j.onmessage=function(B){A(B.data)},j.postMessage(JSON.stringify({language:C.language,code:C.code,immediateClose:!0}))}else A(a.highlight(C.code,C.grammar,C.language))},highlight:function(c,f,g){var w={code:c,grammar:f,language:g};if(a.hooks.run("before-tokenize",w),!w.grammar)throw new Error('The language "'+w.language+'" has no grammar.');return w.tokens=a.tokenize(w.code,w.grammar),a.hooks.run("after-tokenize",w),l.stringify(a.util.encode(w.tokens),w.language)},tokenize:function(c,f){var g=f.rest;if(g){for(var w in g)f[w]=g[w];delete f.rest}var _=new p;return h(_,_.head,c),d(c,_,f,_.head,0),x(_)},hooks:{all:{},add:function(c,f){var g=a.hooks.all;g[c]=g[c]||[],g[c].push(f)},run:function(c,f){var g=a.hooks.all[c];if(!(!g||!g.length))for(var w=0,_;_=g[w++];)_(f)}},Token:l};r.Prism=a;function l(c,f,g,w){this.type=c,this.content=f,this.alias=g,this.length=(w||"").length|0}l.stringify=function c(f,g){if(typeof f=="string")return f;if(Array.isArray(f)){var w="";return f.forEach(function(A){w+=c(A,g)}),w}var _={type:f.type,content:c(f.content,g),tag:"span",classes:["token",f.type],attributes:{},language:g},k=f.alias;k&&(Array.isArray(k)?Array.prototype.push.apply(_.classes,k):_.classes.push(k)),a.hooks.run("wrap",_);var S="";for(var C in _.attributes)S+=" "+C+'="'+(_.attributes[C]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+S+">"+_.content+"</"+_.tag+">"};function u(c,f,g,w){c.lastIndex=f;var _=c.exec(g);if(_&&w&&_[1]){var k=_[1].length;_.index+=k,_[0]=_[0].slice(k)}return _}function d(c,f,g,w,_,k){for(var S in g)if(!(!g.hasOwnProperty(S)||!g[S])){var C=g[S];C=Array.isArray(C)?C:[C];for(var A=0;A<C.length;++A){if(k&&k.cause==S+","+A)return;var j=C[A],B=j.inside,ae=!!j.lookbehind,ee=!!j.greedy,nt=j.alias;if(ee&&!j.pattern.global){var G=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,G+"g")}for(var we=j.pattern||j,E=w.next,M=_;E!==f.tail&&!(k&&M>=k.reach);M+=E.value.length,E=E.next){var R=E.value;if(f.length>c.length)return;if(!(R instanceof l)){var D=1,O;if(ee){if(O=u(we,M,c,ae),!O||O.index>=c.length)break;var le=O.index,ct=O.index+O[0].length,ie=M;for(ie+=E.value.length;le>=ie;)E=E.next,ie+=E.value.length;if(ie-=E.value.length,M=ie,E.value instanceof l)continue;for(var je=E;je!==f.tail&&(ie<ct||typeof je.value=="string");je=je.next)D++,ie+=je.value.length;D--,R=c.slice(M,ie),O.index-=M}else if(O=u(we,0,R,ae),!O)continue;var le=O.index,Ie=O[0],ir=R.slice(0,le),kn=R.slice(le+Ie.length),Ct=M+R.length;k&&Ct>k.reach&&(k.reach=Ct);var ze=E.prev;ir&&(ze=h(f,ze,ir),M+=ir.length),y(f,ze,D);var tu=new l(S,B?a.tokenize(Ie,B):Ie,nt,Ie);if(E=h(f,ze,tu),kn&&h(f,E,kn),D>1){var Go={cause:S+","+A,reach:Ct};d(c,f,g,E.prev,M,Go),k&&Go.reach>k.reach&&(k.reach=Go.reach)}}}}}}function p(){var c={value:null,prev:null,next:null},f={value:null,prev:c,next:null};c.next=f,this.head=c,this.tail=f,this.length=0}function h(c,f,g){var w=f.next,_={value:g,prev:f,next:w};return f.next=_,w.prev=_,c.length++,_}function y(c,f,g){for(var w=f.next,_=0;_<g&&w!==c.tail;_++)w=w.next;f.next=w,w.prev=f,c.length-=_}function x(c){for(var f=[],g=c.head.next;g!==c.tail;)f.push(g.value),g=g.next;return f}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(c){var f=JSON.parse(c.data),g=f.language,w=f.code,_=f.immediateClose;r.postMessage(a.highlight(w,a.languages[g],g)),_&&r.close()},!1)),a;var v=a.util.currentScript();v&&(a.filename=v.src,v.hasAttribute("data-manual")&&(a.manual=!0));function P(){a.manual||a.highlightAll()}if(!a.manual){var m=document.readyState;m==="loading"||m==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",P):window.requestAnimationFrame?window.requestAnimationFrame(P):window.setTimeout(P,16)}return a}(t);e.exports&&(e.exports=n),typeof nu<"u"&&(nu.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,o){var s={};s["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[o]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};a["language-"+o]={pattern:/[\s\S]+/,inside:n.languages[o]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var o=r.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(v,P){return"✖ Error "+v+" while fetching file: "+P},o="✖ Error: File does not exist or is empty",s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",u="loaded",d="failed",p="pre[data-src]:not(["+a+'="'+u+'"]):not(['+a+'="'+l+'"])';function h(v,P,m){var c=new XMLHttpRequest;c.open("GET",v,!0),c.onreadystatechange=function(){c.readyState==4&&(c.status<400&&c.responseText?P(c.responseText):c.status>=400?m(i(c.status,c.statusText)):m(o))},c.send(null)}function y(v){var P=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(P){var m=Number(P[1]),c=P[2],f=P[3];return c?f?[m,Number(f)]:[m,void 0]:[m,m]}}n.hooks.add("before-highlightall",function(v){v.selector+=", "+p}),n.hooks.add("before-sanity-check",function(v){var P=v.element;if(P.matches(p)){v.code="",P.setAttribute(a,l);var m=P.appendChild(document.createElement("CODE"));m.textContent=r;var c=P.getAttribute("data-src"),f=v.language;if(f==="none"){var g=(/\.(\w+)$/.exec(c)||[,"none"])[1];f=s[g]||g}n.util.setLanguage(m,f),n.util.setLanguage(P,f);var w=n.plugins.autoloader;w&&w.loadLanguages(f),h(c,function(_){P.setAttribute(a,u);var k=y(P.getAttribute("data-range"));if(k){var S=_.split(/\r\n?|\n/g),C=k[0],A=k[1]==null?S.length:k[1];C<0&&(C+=S.length),C=Math.max(0,Math.min(C-1,S.length)),A<0&&(A+=S.length),A=Math.max(0,Math.min(A,S.length)),_=S.slice(C,A).join(`
`),P.hasAttribute("data-start")||P.setAttribute("data-start",String(C+1))}m.textContent=_,n.highlightElement(m)},function(_){P.setAttribute(a,d),m.textContent=_})}}),n.plugins.fileHighlight={highlight:function(P){for(var m=(P||document).querySelectorAll(p),c=0,f;f=m[c++];)n.highlightElement(f)}};var x=!1;n.fileHighlight=function(){x||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),x=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(tm);var ex=tm.exports;const tx=yd(ex);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};i["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var o={};o[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:i},Prism.languages.insertBefore("markup","cdata",o)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(l,u){return l=l.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return i}),RegExp(l,u)}i=o(i).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var s=function(l){return l?typeof l=="string"?l:typeof l.content=="string"?l.content:l.content.map(s).join(""):""},a=function(l){for(var u=[],d=0;d<l.length;d++){var p=l[d],h=!1;if(typeof p!="string"&&(p.type==="tag"&&p.content[0]&&p.content[0].type==="tag"?p.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===s(p.content[0].content[1])&&u.pop():p.content[p.content.length-1].content==="/>"||u.push({tagName:s(p.content[0].content[1]),openedBraces:0}):u.length>0&&p.type==="punctuation"&&p.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&p.type==="punctuation"&&p.content==="}"?u[u.length-1].openedBraces--:h=!0),(h||typeof p=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var y=s(p);d<l.length-1&&(typeof l[d+1]=="string"||l[d+1].type==="plain-text")&&(y+=s(l[d+1]),l.splice(d+1,1)),d>0&&(typeof l[d-1]=="string"||l[d-1].type==="plain-text")&&(y=s(l[d-1])+y,l.splice(d-1,1),d--),l[d]=new e.Token("plain-text",y,null,y)}p.content&&typeof p.content!="string"&&a(p.content)}};e.hooks.add("after-tokenize",function(l){l.language!=="jsx"&&l.language!=="tsx"||a(l.tokens)})})(Prism);const nx=({file:e,project:t})=>{const n=b.useRef(null),i=(o=>{switch(o.split(".").pop().toLowerCase()){case"js":return"javascript";case"jsx":return"jsx";case"py":return"python";case"html":return"markup";case"css":return"css";case"txt":return"none";default:return"javascript"}})(e.name);return b.useEffect(()=>{n.current&&i!=="none"&&tx.highlightElement(n.current)},[e,i]),V.jsxs("div",{className:"bg-lightgray rounded-md p-4 shadow-lg w-full overflow-hidden min-w-0",children:[V.jsxs("div",{className:"flex justify-between items-center mb-4",children:[V.jsx("h2",{className:"text-xl font-semibold",children:e.name}),t.githubUrl&&V.jsxs("a",{href:t.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-blue-400 hover:underline",children:["View on GitHub ",V.jsx(Qw,{className:"ml-1"})]})]}),V.jsx("div",{className:"overflow-auto max-h-[calc(100vh-150px)]",children:i==="none"?V.jsx("pre",{className:"max-w-full",children:V.jsx("code",{ref:n,className:"whitespace-pre",children:e.content})}):V.jsx("pre",{className:`language-${i} max-w-full`,children:V.jsx("code",{ref:n,className:`language-${i} whitespace-pre`,children:e.content})})})]})},rx="/my-portfolio/assets/profile-32a7178a.jpg",ix=()=>V.jsxs("div",{className:"mb-8 text-center",children:[V.jsx("img",{src:rx,alt:"Profile",className:"w-[70%] mx-auto object-contain rounded-lg"}),V.jsx("h1",{className:"mt-4 text-xl font-bold",children:"Matias Turpeinen"}),V.jsx("p",{className:"text-gray-300 mt-2",children:"I'm an AI enthusiast with a strong interest in Language Models and their potential, along with a basic understanding of coding. This self-made portfolio page showcases my AI-assisted coding projects, built through curiosity, learning, and plenty of trial and error."})]}),ox=()=>V.jsxs("div",{className:"mt-8 text-center",children:[V.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Connect with Me"}),V.jsxs("div",{className:"flex justify-center space-x-4",children:[V.jsx("a",{href:"mailto:matias.tyot@gmail.com",className:"hover:text-blue-400",children:"Email"}),V.jsx("a",{href:"https://www.linkedin.com/in/matias-turpeinen-85a20a1b6/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-blue-400",children:"LinkedIn"}),V.jsx("a",{href:"https://github.com/MatiasTTT",target:"_blank",rel:"noopener noreferrer",className:"hover:text-blue-400",children:"GitHub"})]})]}),sx=[{id:1,name:"PDF_to_Excel",githubUrl:"https://github.com/MatiasTTT/My-projects/tree/main/PDF_to_Excel",files:[{name:"README.txt",content:`With the help of ChatGPT, I developed this Python program to automate order processing and tracking,
drastically reducing the time spent handling incoming PDF orders and managing billing. By extracting
order details from PDFs and converting them into an easily processable Excel format, the program
streamlined the workflow, replacing a previously manual and time-consuming process.`},{name:"gui.py",content:`import customtkinter as ctk
from tkinter import filedialog, messagebox, BOTH, LEFT, END
from logic import start_extraction
from phase1 import phase1_validation
from phase2 import phase2_update_with_reporting
import shutil
import os

class Application(ctk.CTk):
    def __init__(self):
        super().__init__()

        self.title("Metso PDF to Excel")
        self.geometry("800x600")

        ctk.set_appearance_mode("dark")
        ctk.set_default_color_theme("dark-blue")

        # Initialize the variable to store the Excel file path
        self.excel_file = None

        # Left side of the GUI
        left_frame = ctk.CTkFrame(self)
        left_frame.pack(side=LEFT, fill=BOTH, expand=True, padx=10, pady=10)

        # Add the "info" button inside the left_frame
        info_button = ctk.CTkButton(left_frame, text="i", width=20, height=20, command=self.show_contact_info, fg_color="#fc9d30", text_color="#FFFFFF", hover_color="#ff8903")
        info_button.pack(anchor="nw", pady=5, padx=5)

        self.pdf_files_label = ctk.CTkLabel(left_frame, text="No PDF Files Selected")
        self.pdf_files_label.pack()

        select_pdf_button = ctk.CTkButton(left_frame, text="Select PDF Files", command=self.select_pdf_files)
        select_pdf_button.pack(pady=5)

        self.excel_file_label = ctk.CTkLabel(left_frame, text="No Excel File Selected")
        self.excel_file_label.pack()

        select_excel_button = ctk.CTkButton(left_frame, text="Select Excel File", command=self.select_excel_file)
        select_excel_button.pack(pady=5)



        self.extract_button = ctk.CTkButton(left_frame, text="Extract", command=self.extract_data, fg_color="#d3d3d3", text_color="#a9a9a9", hover_color="#c0c0c0", state="disabled")
        self.extract_button.pack(pady=(50, 5))

        self.log_text = ctk.CTkTextbox(left_frame, height=200, state='disabled')
        self.log_text.pack(fill=BOTH, expand=True, pady=5)

        # Right side of the GUI
        right_frame = ctk.CTkFrame(self)
        right_frame.pack(side=LEFT, fill=BOTH, expand=True, padx=10, pady=10)

        self.validate_button = ctk.CTkButton(right_frame, text="Validate shipment", command=self.validate_shipment, fg_color="#d3d3d3", text_color="#a9a9a9", hover_color="#c0c0c0", state="disabled")
        self.validate_button.pack(pady=(20, 5))

        self.validation_text = ctk.CTkTextbox(right_frame, height=100, state='normal')
        self.validation_text.pack(fill=BOTH, expand=True, pady=5)
        self.validation_text.configure(state='disabled')

        self.update_button = ctk.CTkButton(right_frame, text="Update the order ledger", command=self.update_order_ledger, fg_color="#d3d3d3", text_color="#a9a9a9", hover_color="#c0c0c0", state="disabled")
        self.update_button.pack(pady=(20, 5))

        self.update_text = ctk.CTkTextbox(right_frame, height=100, state='normal')
        self.update_text.pack(fill=BOTH, expand=True, pady=5)
        self.update_text.configure(state='disabled')

    def show_contact_info(self):
        contact_info = (
            "For support, please contact:"
            "Email: Matias.Turpeinen@outlook.com"
        )
        messagebox.showinfo("Contact Information", contact_info)

    def select_pdf_files(self):
        self.pdf_files = filedialog.askopenfilenames(filetypes=[("PDF files", "*.pdf")])
        self.pdf_files_label.configure(text=f"{len(self.pdf_files)} PDF Files Selected")

    def select_excel_file(self):
        self.excel_file = filedialog.askopenfilename(filetypes=[("Excel files", "*.xlsx")])
        self.excel_file_label.configure(text="Excel File Selected")
        self.update_button_states()

    def update_button_states(self):
        if self.excel_file:
            self.extract_button.configure(state="normal", fg_color="#28B463", text_color="#FFFFFF", hover_color="#1E8449")
            self.validate_button.configure(state="normal", fg_color="#1f538d", text_color="#FFFFFF", hover_color="#14375e")
            self.update_button.configure(state="normal", fg_color="#1f538d", text_color="#FFFFFF", hover_color="#14375e")
        else:
            self.extract_button.configure(state="disabled", fg_color="#d3d3d3", text_color="#a9a9a9", hover_color="#c0c0c0")
            self.validate_button.configure(state="disabled", fg_color="#d3d3d3", text_color="#a9a9a9", hover_color="#c0c0c0")
            self.update_button.configure(state="disabled", fg_color="#d3d3d3", text_color="#a9a9a9", hover_color="#c0c0c0")

    def backup_excel_file(self):
        if self.excel_file:
            backup_path = os.path.join(os.path.dirname(self.excel_file), "backup_" + os.path.basename(self.excel_file))
            shutil.copyfile(self.excel_file, backup_path)
            print(f"Backup created at {backup_path}")

    def extract_data(self):
        self.backup_excel_file()
        self.log_text.configure(state='normal')
        self.log_text.insert(END, "Extracting data...")
        self.log_text.configure(state='disabled')
        start_extraction(self.pdf_files, self.excel_file, self.log_text)

    def validate_shipment(self):
        self.backup_excel_file()
        try:
            self.validation_text.configure(state='normal')
            self.validation_text.delete(1.0, END)
            phase1_validation(self.excel_file, self.validation_text)
        except Exception as e:
            self.validation_text.configure(state='normal')
            self.validation_text.insert(END, f"Validation error: {str(e)}")
            self.validation_text.configure(state='disabled')

    def update_order_ledger(self):
        self.backup_excel_file()
        try:
            self.update_text.configure(state='normal')
            self.update_text.delete(1.0, END)
            
            # Get the new formatted message
            message_parts, message_tags = phase2_update_with_reporting(self.excel_file)
            
            # Insert the message into the update_text widget with tags
            for part, tag in zip(message_parts, message_tags):
                if tag:
                    self.update_text.insert(END, part, tag)
                else:
                    self.update_text.insert(END, part)
            
            # Configure the tags for coloring
            self.update_text.tag_config("full_rows", foreground="#99fc77")
            self.update_text.tag_config("partial_rows", foreground="#fcd465")
            
            self.update_text.configure(state='disabled')
        except Exception as e:
            self.update_text.configure(state='normal')
            self.update_text.insert(END, f"Order ledger update error: {str(e)}")
            self.update_text.configure(state='disabled')
      

if __name__ == "__main__":
    app = Application()
    app.mainloop()`},{name:"logic.py",content:`import fitz  # PyMuPDF
import re
import pandas as pd
from datetime import datetime
from openpyxl import load_workbook
from tkinter import messagebox, END

def remove_all_annotations(pdf_path):
    try:
        doc = fitz.open(pdf_path)
        for page_num in range(len(doc)):
            page = doc[page_num]
            annotations = page.annots()
            if annotations:
                for annot in annotations:
                    page.delete_annot(annot)
        doc.saveIncr()  # Save the changes to the same file
        print(f"All annotations removed from: {pdf_path}")
    except Exception as e:
        print(f"Error processing {pdf_path}: {str(e)}")

def extract_words_from_box(page, rect):
    words = page.get_text("words")
    return [word for word in words if rect.intersects(fitz.Rect(word[:4]))]

def clean_price_format(price_str):
    price_str = price_str.replace('.', '').replace(',', '.')
    try:
        return float(price_str)
    except ValueError:
        return None

def extract_item_info(doc, page_num, item_rect, box_definitions, po_number, destination, item_number):
    page = doc[page_num]
    item_info = {'PO number': po_number, 'Destination': destination, 'Item number': item_number}
    for box_name, (x0, y0_offset, x1, y1_offset) in box_definitions.items():
        rect = fitz.Rect(x0, item_rect.y0 + y0_offset, x1, item_rect.y0 + y1_offset)
        words_in_box = extract_words_from_box(page, rect)
        
        if words_in_box:
            words_in_box.sort(key=lambda word: (word[3], word[0]))
            item_info[box_name] = ' '.join(word[4] for word in words_in_box)
        else:
            item_info[box_name] = "No text found"
    
    if 'material_revision_box' in item_info:
        material_revision_text = item_info['material_revision_box']
        revision_match = re.search(r"Material Revision:s*([w-]+)", material_revision_text)
        if revision_match:
            item_info['Revision'] = revision_match.group(1)
        else:
            # Check the next page for material revision if not found on the current page
            if page_num + 1 < len(doc):
                next_page = doc[page_num + 1]
                next_page_rect = fitz.Rect(80, 98, 192, 154)  # coordinates for the next page material revision box
                next_page_words = extract_words_from_box(next_page, next_page_rect)
                if next_page_words:
                    next_page_words.sort(key=lambda word: (word[3], word[0]))
                    next_page_text = ' '.join(word[4] for word in next_page_words)
                    revision_match_next = re.search(r"Material Revision:s*([w-]+)", next_page_text)
                    item_info['Revision'] = revision_match_next.group(1) if revision_match_next else "No revision found"
                else:
                    item_info['Revision'] = "No revision found"
            else:
                item_info['Revision'] = "No revision found"
    
    if 'net_price' in item_info:
        item_info['net_price'] = clean_price_format(item_info['net_price'])

    return item_info

def determine_destination(destination_text):
    destination_text_lower = destination_text.lower()
    if "india" in destination_text_lower:
        return "India"
    elif "china" in destination_text_lower:
        return "China"
    elif "hankkion" in destination_text_lower:
        return "Etu"
    elif "crusher" in destination_text_lower:
        return "Mob"
    elif "scm" in destination_text_lower:
        return "SCM"
    elif "holtum noordweg 5" in destination_text_lower:
        return "HO5"
    elif "holtum noordweg 11" in destination_text_lower:
        return "HO11"
    elif "helsinki" in destination_text_lower:
        return "VA"
    elif "huko" in destination_text_lower:
        return "Lokomo"
    elif "urusvuorenkatu 5" in destination_text_lower:
        return "Turku"         
    else:
        return "Unknown"

def convert_date_format(date_str):
    try:
        return datetime.strptime(date_str, '%Y%b%d').strftime('%d.%m.%Y')
    except ValueError:
        return date_str

def print_text_in_boxes(pdf_path):
    item_number_box_def = (40, 85, 70, 705)
    po_number_box_def = (330, 40, 570, 115)
    destination_box_def = (40, 200, 330, 300)
    other_boxes_definitions = {
        'product_code': (72, -2, 131, 15),
        'due_date': (217, -2, 270, 15),
        'qty': (286, -2, 314, 15),
        'net_price': (350, -2, 399, 15),
        'material_revision_box': (80, 15, 192, 80)
    }

    po_number = None
    destination = "Unknown"
    extracted_data = []

    try:
        doc = fitz.open(pdf_path)
        for page_num in range(len(doc)):
            page = doc[page_num]
            if page_num == 0:
                po_number_rect = fitz.Rect(*po_number_box_def)
                words_in_po_number_box = extract_words_from_box(page, po_number_rect)
                po_numbers = [word[4] for word in words_in_po_number_box if word[4].isdigit() and len(word[4]) == 10]
                if po_numbers:
                    po_number = po_numbers[0]

                destination_rect = fitz.Rect(*destination_box_def)
                words_in_destination_box = extract_words_from_box(page, destination_rect)
                destination_text = ' '.join(word[4] for word in words_in_destination_box)
                destination = determine_destination(destination_text)

            item_number_rect = fitz.Rect(*item_number_box_def)
            words_in_item_number_box = extract_words_from_box(page, item_number_rect)
            
            item_numbers = [word for word in words_in_item_number_box if word[4].isdigit() and len(word[4]) == 5 and word[4][0] == '0' and int(word[4]) % 10 == 0]
            for item_number in item_numbers:
                item_number_value = str(int(item_number[4]))  # Remove leading zeros
                item_number_rect = fitz.Rect(item_number[:4])
                item_info = extract_item_info(doc, page_num, item_number_rect, other_boxes_definitions, po_number, destination, item_number_value)
                
                if 'product_code' in item_info:
                    description_parts = item_info['product_code'].split(' ', 1)
                    if len(description_parts) == 2:
                        item_info['product_code'] = description_parts[0]
                        item_info['product_name'] = description_parts[1]
                    else:
                        item_info['product_code'] = description_parts[0]
                        item_info['product_name'] = 'No text found'

                if 'due_date' in item_info:
                    item_info['due_date'] = convert_date_format(item_info['due_date'])

                extracted_data.append(item_info)

    except Exception as e:
        print(f"Error processing {pdf_path}: {str(e)}")

    return extracted_data

def find_last_non_empty_row(sheet):
    last_row = sheet.max_row
    while last_row > 0:
        if any(cell.value is not None for cell in sheet[last_row]):
            break
        last_row -= 1
    return last_row

def start_extraction(pdf_file_paths, excel_file_path, log_text):
    if not pdf_file_paths:
        messagebox.showinfo("No selection", "No PDF files selected. Exiting.")
        return

    if not excel_file_path:
        messagebox.showinfo("No selection", "No Excel file selected. Exiting.")
        return

    all_data = []
    po_numbers = []

    try:
        log_text.configure(state='normal')
        log_text.delete(1.0, END)
        log_text.insert(END, "Attempting to open PDF files:")
        log_text.insert(END, "Removing annotations:")
        log_text.insert(END, "Processing:")

        for pdf_path in pdf_file_paths:
            # Remove all annotations before processing
            remove_all_annotations(pdf_path)

            extracted_data = print_text_in_boxes(pdf_path)
            if extracted_data:
                po_numbers.append(extracted_data[0]['PO number'])
            all_data.extend(extracted_data)


        df = pd.DataFrame(all_data)    

        cols = df.columns.tolist()
        destination_index = cols.index('Destination')
        cols.insert(destination_index + 1, cols.pop(cols.index('Item number')))
        

        # Directly select and order the columns as needed
        df = df[['Destination', 'PO number', 'Item number', 'product_code', 'Revision', 'product_name', 'due_date', 'qty', 'net_price']]
        df.columns = ['Destination:', 'PO number:', 'Pos:', 'Product code:', 'Revision:', 'Product name:', 'Due date:', 'Qty:', 'Net price:']

        # Convert to appropriate types
        df['PO number:'] = pd.to_numeric(df['PO number:'], errors='coerce')
        df['Pos:'] = pd.to_numeric(df['Pos:'], errors='coerce')
        df['Qty:'] = pd.to_numeric(df['Qty:'], errors='coerce')
        df['Net price:'] = pd.to_numeric(df['Net price:'], errors='coerce').round(2)

        if df.empty:
            messagebox.showinfo("Error", "No data extracted from the PDFs.")
            log_text.insert(END, "No data extracted.")
            log_text.configure(state='disabled')
            return

        log_text.insert(END, "Data extracted:")

        book = load_workbook(excel_file_path)
        
        # Ensure the sheet "TILAUKSET" exists
        if "TILAUKSET" not in book.sheetnames:
            messagebox.showinfo("Error", "Sheet 'TILAUKSET' not found in the Excel file.")
            log_text.insert(END, "Sheet 'TILAUKSET' not found.")
            log_text.configure(state='disabled')
            return
        
        sheet = book["TILAUKSET"]
        last_row = find_last_non_empty_row(sheet)
        start_row = last_row + 1

        for r_idx, row in df.iterrows():
            for c_idx, value in enumerate(row):
                sheet.cell(row=start_row + r_idx, column=c_idx + 1, value=value)

        book.save(excel_file_path)

        log_text.insert(END, f"Data successfully appended to the Excel file:{excel_file_path}")
        log_text.insert(END, "Processed PO Numbers:")
        for po in po_numbers:
            log_text.insert(END, po + "")

        log_text.configure(state='disabled')

        messagebox.showinfo("Success", "Data successfully appended to the Excel file.")

    except Exception as e:
        messagebox.showerror("Error", str(e))
        log_text.insert(END, f"Error: {str(e)}")
        log_text.configure(state='disabled')`},{name:"main.py",content:`from gui import Application

if __name__ == "__main__":
    app = Application()
    app.mainloop()`},{name:"phase1.py",content:`import pandas as pd
from openpyxl import load_workbook
from openpyxl.styles import PatternFill, Font
import re
from tkinter import END

def phase1_validation(excel_file_path, validation_log):
    try:
        # Load the workbook and the necessary sheets
        wb = load_workbook(excel_file_path)
        ws_kuormat = wb['KUORMAT']
        ws_p4t = wb['P4T']

        # Convert the data from the sheets into pandas DataFrames
        df_kuormat = pd.DataFrame(ws_kuormat.values)
        df_p4t = pd.DataFrame(ws_p4t.values)

        # Assuming the first row is the header
        df_kuormat.columns = df_kuormat.iloc[0]
        df_kuormat = df_kuormat[1:].reset_index(drop=True)
        df_p4t.columns = df_p4t.iloc[0]
        df_p4t = df_p4t[1:].reset_index(drop=True)

        # Print first few rows of the P4T dataframe for verification
        print("First few rows of P4T dataframe:")
        print(df_p4t.head())

        # UUSI Strip exclamation marks from 'Del. Qty:' column in the DataFrame
        df_kuormat['Del. Qty:'] = df_kuormat['Del. Qty:'].astype(str).str.replace('!', '')

        # UUSI Write the cleaned 'Del. Qty:' column back to the worksheet
        for idx, value in enumerate(df_kuormat['Del. Qty:']):
            if value.strip().isdigit():  # Ensure the value is numeric
                ws_kuormat.cell(row=idx+2, column=7, value=float(value))
            else:
                ws_kuormat.cell(row=idx+2, column=7, value=None)  # Leave empty if not numeric

        # Ensure numeric columns are correctly formatted
        df_kuormat['PO nr.:'] = pd.to_numeric(df_kuormat['PO nr.:'], errors='coerce').astype('Int64')
        df_kuormat['Del. Qty:'] = pd.to_numeric(df_kuormat['Del. Qty:'], errors='coerce')
        df_kuormat['Total'] = pd.to_numeric(df_kuormat['Total'], errors='coerce')
        df_p4t['Contract no.'] = pd.to_numeric(df_p4t['Contract no.'], errors='coerce')
        df_p4t['Shipped qty'] = pd.to_numeric(df_p4t['Shipped qty'], errors='coerce')

        # Ensure the 'Code:' column is treated as a string and trim spaces
        df_kuormat['Code:'] = df_kuormat['Code:'].astype(str).str.strip()
        df_p4t['Material no.'] = df_p4t['Material no.'].astype(str).str.strip()

        # Function to strip revision indicators
        def strip_revision(code):
            # Remove any part of the code after a space or dash
            return re.split(r'[s-]', code)[0]

        # Track rows with total price as 0
        zero_price_rows = []
        # Track rows that failed validation
        failed_validation_rows = []

        # Iterate through each row in KUORMAT
        for index, row in df_kuormat.iterrows():
            po_nr = row['PO nr.:']
            code = row['Code:']
            del_qty = row['Del. Qty:']
            total = row['Total']
            if pd.isna(po_nr) or pd.isna(code) or pd.isna(del_qty):
                print(f"Skipping row {index+2}: Invalid data found.")
                continue

            # Strip the revision from the code
            code_base = strip_revision(code)
            print(f"Processing row {index+2}: PO nr.: {po_nr}, Code: {code}, Base Code: {code_base}, Del. Qty: {del_qty}")

            # Find matching rows in P4T
            match = df_p4t[
                (df_p4t['Contract no.'] == po_nr) &
                (df_p4t['Material no.'].str.startswith(code_base)) &
                (df_p4t['Shipped qty'] == del_qty)
            ]

            if match.empty:
                print(f"No match found for row {index+2}: PO nr.: {po_nr}, Base Code: {code_base}, Del. Qty: {del_qty}")
                print(f"Relevant rows in P4T for PO nr. {po_nr} and Base Code {code_base}:")
                print(df_p4t[(df_p4t['Contract no.'] == po_nr)])
                if len(str(po_nr)) == 10:  # Ensure the PO number is 10 digits
                    failed_validation_rows.append((int(po_nr), code))  # Ensure po_nr is an integer
            else:
                print(f"Match found for row {index+2}: PO nr.: {po_nr}, Base Code: {code_base}, Del. Qty: {del_qty}")
                # If a match is found, highlight the row in KUORMAT
                for cell in ws_kuormat.iter_rows(min_row=index + 2, max_row=index + 2, min_col=1, max_col=14):
                    for c in cell:
                        c.fill = PatternFill(start_color="C6EFCE", end_color="C6EFCE", fill_type="solid")

                # Check if the total is 0 after validation
                if total == 0 and len(str(po_nr)) == 10:
                    zero_price_rows.append((int(po_nr), code))  # Ensure po_nr is an integer
                    for cell in ws_kuormat.iter_rows(min_row=index + 2, max_row=index + 2, min_col=14, max_col=14):  # Column N is the 14th column
                        for c in cell:
                            c.fill = PatternFill(start_color="FFC7CE", end_color="FFC7CE", fill_type="solid")
                            c.font = Font(color="9C0006")

        # Save the workbook
        wb.save(excel_file_path)
        print("Phase 1 validation completed successfully.")

        # Report zero price rows and failed validation rows in the GUI
        validation_log.configure(state='normal')
        if zero_price_rows:
            validation_log.insert(END, "Price detected as 0,00 for the following rows:")
            for po_nr, code in zero_price_rows:
                validation_log.insert(END, f"-PO: {po_nr}. Code: {code}.", "zero_price")
        if failed_validation_rows:
            validation_log.insert(END, "Validation was unsuccessful for the following rows:")
            for po_nr, code in failed_validation_rows:
                validation_log.insert(END, f"-PO: {po_nr}. Code: {code}.", "failed_validation")
        validation_log.insert(END, "Validation completed.")
        validation_log.tag_config("zero_price", foreground="#7984f7")
        validation_log.tag_config("failed_validation", foreground="#fc4949")
        validation_log.configure(state='disabled')

    except Exception as e:
        print(f"An error occurred during Phase 1 validation: {str(e)}")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        phase1_validation(sys.argv[1])
    else:
        print("Please provide the path to the Excel file.")`},{name:"phase2.py",content:`import pandas as pd
from openpyxl import load_workbook
from openpyxl.styles import PatternFill, Font
from datetime import datetime
from tkinter import Text

def phase2_update(excel_file_path):
    fully_delivered_rows = []
    partially_delivered_rows = []
    df_tilaukset = None
    
    try:
        # Load the workbook and the necessary sheets
        wb = load_workbook(excel_file_path)
        ws_tilaukset = wb['TILAUKSET']
        ws_kuormat = wb['KUORMAT']
        ws_p4t = wb['P4T']

        # Convert the data from the sheets into pandas DataFrames
        df_tilaukset = pd.DataFrame(ws_tilaukset.values)
        df_kuormat = pd.DataFrame(ws_kuormat.values)
        df_p4t = pd.DataFrame(ws_p4t.values)

        # Assuming the first row is the header
        df_tilaukset.columns = df_tilaukset.iloc[0]
        df_tilaukset = df_tilaukset[1:].reset_index(drop=True)
        df_kuormat.columns = df_kuormat.iloc[0]
        df_kuormat = df_kuormat[1:].reset_index(drop=True)
        df_p4t.columns = df_p4t.iloc[0]
        df_p4t = df_p4t[1:].reset_index(drop=True)

        # Ensure numeric columns are correctly formatted
        df_tilaukset['PO number:'] = pd.to_numeric(df_tilaukset['PO number:'], errors='coerce')
        df_tilaukset['Pos:'] = pd.to_numeric(df_tilaukset['Pos:'], errors='coerce')
        df_tilaukset['Qty:'] = pd.to_numeric(df_tilaukset['Qty:'], errors='coerce')
        df_tilaukset['Delivered:'] = pd.to_numeric(df_tilaukset['Delivered:'], errors='coerce').fillna(0)
        df_tilaukset['Remaining:'] = pd.to_numeric(df_tilaukset['Remaining:'], errors='coerce').fillna(df_tilaukset['Qty:'])

        df_kuormat['PO nr.:'] = pd.to_numeric(df_kuormat['PO nr.:'], errors='coerce')
        df_kuormat['Order Qty:'] = pd.to_numeric(df_kuormat['Order Qty:'], errors='coerce')
        df_kuormat['Del. Qty:'] = pd.to_numeric(df_kuormat['Del. Qty:'], errors='coerce')

        df_p4t['PO position no.'] = pd.to_numeric(df_p4t['PO position no.'], errors='coerce')
        df_p4t['Shipped qty'] = pd.to_numeric(df_p4t['Shipped qty'], errors='coerce')

        # Function to strip revision indicators and handle numeric codes
        def strip_revision(code):
            if pd.isna(code):
                return None, None
            code_str = str(code).strip()
            parts = code_str.split(' ', 1)
            return parts[0], parts[1] if len(parts) > 1 else None

        # To keep track of rows that are matched and updated
        updated_indices = set()

        # Iterate through each row in TILAUKSET
        for index, row in df_tilaukset.iterrows():
            po_number = row['PO number:']
            pos = row['Pos:']
            product_code = row['Product code:']
            revision = row['Revision:']
            qty = row['Qty:']
            delivered = row['Delivered:']

            if pd.isna(po_number) or pd.isna(pos) or pd.isna(product_code):
                print(f"Skipping row {index + 2}: Invalid data found.")
                continue

            print(f"Processing row {index + 2}: PO number: {po_number}, Pos: {pos}, Product code: {product_code}, Revision: {revision}, Qty: {qty}, Delivered: {delivered}")

            # Match with KUORMAT
            product_code_base, product_revision = strip_revision(product_code)
            if product_code_base is None:
                print(f"Skipping row {index + 2}: Invalid product code.")
                continue
            
            if product_revision is None:
                product_revision = ''
            revision = str(revision).lstrip('0').replace('-', '')  # Remove dash and leading zeros from revision

            print(f"Stripped product code: {product_code_base}, Stripped revision: {revision}")

            # Improved matching logic
            kuormat_match = df_kuormat[
                (df_kuormat['PO nr.:'] == po_number) & 
                (df_kuormat['Code:'].apply(lambda x: str(x).startswith(str(product_code_base))))
            ]

            if kuormat_match.empty:
                print(f"No match found in KUORMAT for PO number: {po_number}, Product code: {product_code}")
                continue

            for k_index, k_row in kuormat_match.iterrows():
                k_product_code_base, k_product_revision = strip_revision(k_row['Code:'])
                print(f"Checking KUORMAT row {k_index + 2}: PO nr.: {k_row['PO nr.:']}, Code: {k_row['Code:']}, Order Qty: {k_row['Order Qty:']}, Del. Qty: {k_row['Del. Qty:']}")

                # Skip if the revisions do not match, ignoring dashes
                k_product_revision = str(k_product_revision).replace('-', '') if k_product_revision else ''
                if k_product_revision and k_product_revision != revision:
                    print(f"Skipping KUORMAT row {k_index + 2} due to revision mismatch: {k_product_revision} != {revision}")
                    continue

                print(f"Matched KUORMAT row {k_index + 2}: PO nr.: {k_row['PO nr.:']}, Code: {k_row['Code:']}, Order Qty: {k_row['Order Qty:']}, Del. Qty: {k_row['Del. Qty:']}")

                # Match with P4T
                p4t_match = df_p4t[
                    (df_p4t['Contract no.'] == po_number) & 
                    (df_p4t['PO position no.'] == pos)
                ]

                if p4t_match.empty:
                    print(f"No match found in P4T for PO number: {po_number}, Pos: {pos}")
                    continue

                for p_index, p_row in p4t_match.iterrows():
                    shipped_qty = p_row['Shipped qty']
                    print(f"Matched P4T row {p_index + 2}: Contract no.: {p_row['Contract no.']}, PO position no.: {p_row['PO position no.']}, Shipped qty: {shipped_qty}")

                    # Update Delivered and Remaining
                    new_delivered = delivered + shipped_qty
                    new_remaining = qty - new_delivered

                    df_tilaukset.at[index, 'Delivered:'] = new_delivered
                    df_tilaukset.at[index, 'Remaining:'] = max(new_remaining, 0)
                    updated_indices.add(index)

                    if new_remaining != 0:
                        partially_delivered_rows.append(index + 2)

        # Write back to the TILAUKSET sheet only for updated rows
        for r_idx in updated_indices:
            row = df_tilaukset.iloc[r_idx]
            for c_idx, value in enumerate(row):
                ws_tilaukset.cell(row=r_idx + 2, column=c_idx + 1, value=value)

        # Apply coloring after all updates are done
        fully_delivered_rows = apply_coloring(ws_tilaukset, df_tilaukset, updated_indices)

        wb.save(excel_file_path)
        print("Phase 2 update completed successfully.")
        
    except Exception as e:
        import traceback
        print(f"An error occurred during Phase 2 update: {str(e)}")
        traceback.print_exc()
    
    return fully_delivered_rows, partially_delivered_rows, df_tilaukset



def phase2_update_with_reporting(excel_file_path):
    fully_delivered_rows, partially_delivered_rows, df_tilaukset = phase2_update(excel_file_path)

    fully_delivered_count = len(fully_delivered_rows)
    partially_delivered_count = len(partially_delivered_rows)
    
    # Prepare the new message format
    message_parts = []
    message_tags = []
    
    message_parts.append("Fully delivered rows:")
    message_tags.append(None)
    
    message_parts.append(f"-Count: {fully_delivered_count}")
    message_tags.append("full_rows")
    
    if partially_delivered_count > 0:
        message_parts.append("Partially delivered rows:")
        message_tags.append(None)
        
        message_parts.append(f"-Count: {partially_delivered_count}")
        message_tags.append("partial_rows")
        
        for row in partially_delivered_rows:
            po_nr = df_tilaukset.at[row - 2, 'PO number:']
            code = df_tilaukset.at[row - 2, 'Product code:']
            message_parts.append(f"-PO: {po_nr}. Code: {code}.")
            message_tags.append("partial_rows")
    
    message_parts.append("Order ledger update completed.")
    message_tags.append(None)
    
    return message_parts, message_tags



def apply_coloring(ws_tilaukset, df_tilaukset, updated_indices):
    # Define the fills for the different conditions
    green_fill = PatternFill(start_color="C6EFCE", end_color="C6EFCE", fill_type="solid")
    orange_fill = PatternFill(start_color="FFD966", end_color="FFD966", fill_type="solid")
    blue_fill = PatternFill(start_color="ADD8E6", end_color="ADD8E6", fill_type="solid")

    # Get the current date in Finnish standard format
    current_date = datetime.now().strftime("%d.%m.%Y")
    italic_font = Font(italic=True)

    fully_delivered_rows = []

    for index in updated_indices:
        row = df_tilaukset.iloc[index]
        qty = row['Qty:']
        delivered = row['Delivered:']
        remaining = row['Remaining:']

        # Apply green fill if fully delivered
        if remaining == 0 and delivered == qty:
            for cell in ws_tilaukset.iter_rows(min_row=index + 2, max_row=index + 2, min_col=1, max_col=11):  # Ensure it covers all columns
                for c in cell:
                    c.fill = green_fill
            fully_delivered_rows.append(index + 2)  # Record as fully delivered

        # Apply orange fill if there are remaining quantities
        if remaining > 0:
            ws_tilaukset.cell(row=index + 2, column=11).fill = orange_fill

        # Apply blue fill if partially delivered
        if delivered != 0 and delivered != qty:
            ws_tilaukset.cell(row=index + 2, column=10).fill = blue_fill

        # Log the current date in the "Updated:" column (Column L) with italic font
        updated_cell = ws_tilaukset.cell(row=index + 2, column=12, value=current_date)
        updated_cell.font = italic_font

    return fully_delivered_rows


if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        fully_delivered, partially_delivered = phase2_update(sys.argv[1])
        print(f"Fully delivered rows: {fully_delivered}")
        print(f"Partially delivered rows: {partially_delivered}")
    else:
        print("Please provide the path to the Excel file.")`}]},{id:2,name:"Website",githubUrl:"https://github.com/MatiasTTT/My-projects/tree/main/Website",files:[{name:"README.txt",content:`Without the assistance of AI, I created this HTML and CSS web page as part of a web development
course during my BBA studies. This project was completed using traditional learning 
methods—following examples, researching online, and applying fundamental web development principles.
At the time, large language models like ChatGPT did not exist, so I relied on self-guided learning
to structure content, style elements, and build a functional layout.`},{name:"about.html",content:`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="with=device-width, initial-scale=1.0">
	<title> The King Maker Company </title>
	<link rel="stylesheet" href="style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
</head>
<body>
	<section class="sub-header">
		<nav>
			<a href="index.html"><img src="images/kinglvalkonen.png"</a>
			<div class="nav-links" id="navLinks">
				<ul>
					<li><a href="index.html">HOME</a></li>
					<li><a href="about.html">ABOUT</a></li>
					<li><a href="services.html">SERVICES</a></li>
					<li><a href="blog.html">BLOG</a></li>
					<li><a href="contact.html">CONTACT</a></li>
				</ul>
			</div>
		</nav>
		<h1>About US</h1>
	</section>
	
<!-- About us sisältöä -->


<section class="about-us">
	<div class="row">
		<div class="about-col">
			<h1> We are the world leading commuications trainers </h1>
			<p> Professional Personal Development
			The ordinary, run-of-the-mill and predictable just don’t do it for us here at King Maker and frankly, we prefer clients who feel the same way. <br> 
			<br>
			Join our ranks and become the master of your own communication
			</p>
			<a href="" class="hero-btn red-btn">EXPLORE NOW</a>      
		</div>
		<div class="about-col">
			<img src="images/professor.jpg">
		</div>
	</div>
</section>	

	

	
<!-- footer  -->

<section class="footer">
	<h2> Find us in the social media</h2>
	<div class="social">
	<p>---------------------------------------------------------------------------------------------<br>
	Facebook: The King Maker Company <br>
	Twitter: @TheKingMakerCompany<br>
	Instagram: KMC 
	<br>---------------------------------------------------------------------------------------------</p>
	</div>
	<p>Pieced together by: Matias Turpeinen</p>
</section>
	
	
	
	
	
	
	
	
<!-- js valikolle -->	
<script>
	
	var navLinks = document.getElementById("navLinks");
	
	function showMenu(){
		navLinks.style.right = "0";
	}
	function hideMenu(){
		navLinks.style.right = "-200px";
	}
	
<\/script>	
	
</body>
</html>`},{name:"blog.html",content:`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="with=device-width, initial-scale=1.0">
	<title> The King Maker Company </title>
	<link rel="stylesheet" href="style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
</head>
<body>
	<section class="sub-header2">
		<nav>
			<a href="index.html"><img src="images/kinglvalkonen.png"</a>
			<div class="nav-links" id="navLinks">
				<ul>
					<li><a href="index.html">HOME</a></li>
					<li><a href="about.html">ABOUT</a></li>
					<li><a href="services.html">SERVICES</a></li>
					<li><a href="blog.html">BLOG</a></li>
					<li><a href="contact.html">CONTACT</a></li>
				</ul>
			</div>
		</nav>
		<h1>BLOG: How to improve your communication skills</h1>
	</section>
	
<!-- blogi sisältö -->

<section class="blog-content">
	
	<div class="row">
		<div class="blog-left">
		<h2>How to improve your communication skills</h2>
		<img src="images/bam.gif">
		<h3>Discover why good communication matters and what you can do to be a better communicator.</h3>
		<p>It’s well known that having good communication skills is important at work – it’s why ‘I’m a great communicator’ is a staple of every CV.</p><br>
		<p>However, it’s less clear why communication matters. Similarly, we all know what bad communication looks like.</p><br>
		<p>But what does it mean to be a good communicator? And how can you improve your communication skills?</p><br>
		<p>Luckily for you, The King Maker offers a diverse selection of courses designed to hone your communication abilities, 
		whether by learning how to create killer presentations or improving your spoken English.</p><br>
		<p>But before you get stuck into a course, we’ve put together a handy rundown of quick tips for turning yourself into a top talker. </p><br>
		<h3>1. Know your audience</h3>
		<p>Understanding exactly who you’re talking to is vital.</p><br>
		<p>You might be a whizz with facts and figures, but if you’re addressing a room full of creatives you might want to use less jargon, and more visual aids.</p><br>
		<p>Being stiff and serious might be appropriate when dealing with senior executives, but with junior staff a more relaxed approach could be better.</p><br>
		<p>It all comes down to being flexible. Try to read the room – and prepare in advance.</p><br>
		<p>Before you go into a meeting or a presentation think carefully about who’ll be there, and the best way to adjust your words and body language to appeal to them.</p><br>
		<p>Good communication isn’t about imposing yourself on others but adapting your tone of voice to make sure you get your message across.</p><br>
		<h3>2. Be concise</h3>
		<p>There’s nothing worse than a meeting being dominated by someone waffling on about a topic, when just a few words would have sufficed. </p><br>
		<p>People sacrifice productive time to attend a meeting or a presentation, so think about how to communicate what you want to say in a simple and straightforward way.</p><br>
		<p>It’s also worth considering the backgrounds of those in the room when you talk. Remember that the clearer you are, the more likely it is that your ideas will land.</p><br>
		<p>It’s also important to bear in mind that English might not be everyone’s first language. If you work with an international team, the University of Sussex has a course designed to help you better communicate with diverse audiences.</p><br>
		<p>Equally, if English is your second language, and you’re worried about being clear in your communication, you might want to consider taking a course to improve your confidence in using English for the workplace.</p><br>
		<h3>3. Be clear</h3>
		<p>Clarity is the cousin of conciseness. Just as it’s vital to not use ten words when one would work, good communication also rests on using the right words.</p><br>
		<p>What is it exactly you want to communicate, and what are the points you want to make?</p><br>
		<p>You might want to think about this in advance, preparing and structuring your ideas to keep on point. Make a plan of what you want to talk about, and the key issues you want to address. </p><br>
		<p>You could even share your objectives with people in advance, so participants know precisely what you want to discuss – and how to stay on topic.</p><br>
		<h3>4. The medium is the message</h3>
		<p>Face-to-face communication is vital for building trust and responsibility in an organisation – it’s never good to hide behind emails or Slack (as tempting as it can be).</p><br>
		<p>However, it’s just as important to know whether what you want to communicate is really worthy of a meeting, or could just be discussed in an email or a group chat.</p><br>
		<p>Increasingly, the future of business communication is moving online, so familiarising yourself with how to write emails is key for success. Fortunately, the British Council have a course for that!</p><br>
		<h3>5. Listen</h3>
		<p>Good communication is a two-way street – great communicators are also great listeners. </p><br>
		<p>After all, communication is all about being able to facilitate those around you to do their jobs better. That means taking people’s opinions into account.</p><br>
		<p>Make sure you listen to feedback and really hear what your colleagues are saying to you.</p><br>
		<p>If you’re giving a presentation, leave time for questions and discussion. If you’re in a meeting, don’t hog the floor and let others talk – especially if you’re a man and no women have spoken yet. And if you’re in the office, take the time to ask people how they are, and remember what they say so you can follow up later.</p><br>
		<p>It never hurts to ask too many questions – it shows you’re interested and attentive. </p><br>
		
		<div class="comment-box">
		
			<h3>Leave a comment</h3>
			
			<form class="comment-form">
				<input type="text" placeholder="Enter Name">
				<input type="email" placeholder="Enter Email">
				<p>Tell us your toughts on the matter</p>
				<textarea rows="5" placeholder="Your comment">
				</textarea>
				<button type="submit" class="hero-btn red-btn">POST COMMENT
				</button>
			</form>
		</div>
	
		</div>
		<div class="blog-right">	
			<h3>Post Categories</h3>
			<div>
				<span>Non-Verbal Communication</span>
				<span>23</span>
			</div>
			<div>
				<span>Verbal communication</span>
				<span>56</span>
			</div>
			<div>
				<span>Understanding the context</span>
				<span>14</span>
			</div>
			<div>
				<span>Visual communication</span>
				<span>18</span>
			</div>
			<div>
				<span>Written communication</span>
				<span>6</span>
			</div>
			<div>
				<span>Phone Etiquette</span>
				<span>10</span>
			</div>
			<div>
				<span>Mastering The Five C's Of Influential Communication</span>
				<span>5</span>
			</div>
		</div>
	
</section>
	
<!-- footer  -->

<section class="footer">
	<h2> Find us in the social media</h2>
	<div class="social">
	<p>---------------------------------------------------------------------------------------------<br>
	Facebook: The King Maker Company <br>
	Twitter: @TheKingMakerCompany<br>
	Instagram: KMC 
	<br>---------------------------------------------------------------------------------------------</p>
	</div>
	<p>Pieced together by: Matias Turpeinen</p>
</section>
	
	
	
	
	
	
	
	
<!-- js valikolle -->	
<script>
	
	var navLinks = document.getElementById("navLinks");
	
	function showMenu(){
		navLinks.style.right = "0";
	}
	function hideMenu(){
		navLinks.style.right = "-200px";
	}
	
<\/script>	
	
</body>
</html>`},{name:"contact.html",content:`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="with=device-width, initial-scale=1.0">
	<title> The King Maker Company </title>
	<link rel="stylesheet" href="style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
</head>
<body>
	<section class="sub-header3">
		<nav>
			<a href="index.html"><img src="images/kinglvalkonen.png"</a>
			<div class="nav-links" id="navLinks">
				<ul>
					<li><a href="index.html">HOME</a></li>
					<li><a href="about.html">ABOUT</a></li>
					<li><a href="services.html">SERVICES</a></li>
					<li><a href="blog.html">BLOG</a></li>
					<li><a href="contact.html">CONTACT</a></li>
				</ul>
			</div>
		</nav>
		<h1>Contact US</h1>
	</section>
	
<!-- Contact us sisältöä -->


<section class="location">

	<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1824.5207927686752!2d22.819767508356286!3d62.
	787355217867805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4687cb94653f1ed5%3A0xdabf7aab958fe6e9!2sFrami!5e0!3m2!1sfi!2sfi
	!4v1636015629358!5m2!1sfi!2sfi" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

</section>	

<section class="contact-us">

	<div class="row">
		<div class="contact-col">
			<div>
				<h3>HOME</h3>
				<span>
					<h5>Kampusranta 9, Building F</h5>
					<p>60320, Seinäjoki</p>
				</span>
				<h3>PHONE</h3>
				<span>
					<h5>040-5348757</h5>
					<p>Monday to saturday, 8AM to 5PM</p>
				</span>
				<h3>EMAIL</h3>
				<span>
					<h5>info@tkmc.com</h5>
					<p>Email us your questions</p>
				</span>
			</div>
		</div>
		<div class="contact-col">
			
			<form action="">
				<input type="text" placeholder="Enter your name" required>
				<input type="email" placeholder="Enter your email address" required>
				<input type="text" placeholder="Enter your subject" required>
				<textarea rows="8" placeholder="Message" required></textarea>
				<button type="submit" class="hero-btn red-btn">Send message</button>
			</form>
	
	
	
		</div>
	</div>

</section>

<section class="infotable">

	<div class="row">
		<div class="table">
		<h3>Contact information of our managing trainers</h3>
			<table>
			  <tr>
				<th>Name</th>
				<th>Phone</th>
				<th>Email</th>
				<th>Office</th>
			  </tr>
			  <tr>
				<td>Terrell Linwood</td>
				<td>040-6436482</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Terrell.Linwood@tkmc.com</a></td>
				<td>147</td>
			  </tr>
			  <tr>
				<td>Marlin Kingston</td>
				<td>044-9386667</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Marlin.Kingston@tkmc.com</a></td>
				<td>201</td>
			  </tr>
			  <tr>
				<td>Neville Keyes</td>
				<td>040-3535735</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Neville.Keyes@tkmc.com</a></td>
				<td>215</td>
			  </tr>
			  <tr>
				<td>Ann White</td>
				<td>040-4895164</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Ann.White@tkmc.com</a></td>
				<td>109</td>
			  </tr>
			  <tr>
				<td>Kerrie Forester</td>
				<td>050-7291923</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Kerrie.Forester@tkmc.com</a></td>
				<td>117</td>
			  </tr>
			  <tr>
				<td>Isaac Tifft</td>
				<td>040-8729262</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Isaac.Tifft@tkmc.com</a></td>
				<td>194</td>
			  </tr>
			  <tr>
				<td>Jacob Wilson</td>
				<td>040-4467789</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Jacob.Wilson@tkmc.com</a></td>
				<td>310</td>
			  </tr>
			</table>
		</div>
	</div>
	
</section>
	
<!-- footer  -->

<section class="footer">
	<h2> Find us in the social media</h2>
	<div class="social">
	<p>---------------------------------------------------------------------------------------------<br>
	Facebook: The King Maker Company <br>
	Twitter: @TheKingMakerCompany<br>
	Instagram: KMC 
	<br>---------------------------------------------------------------------------------------------</p>
	</div>
	<p>Pieced together by: Matias Turpeinen</p>
</section>
	
	
	
	
	
	
	
	
<!-- js valikolle -->	
<script>
	
	var navLinks = document.getElementById("navLinks");
	
	function showMenu(){
		navLinks.style.right = "0";
	}
	function hideMenu(){
		navLinks.style.right = "-200px";
	}
	
<\/script>	
	
</body>
</html>`},{name:"index.html",content:`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="with=device-width, initial-scale=1.0">
	<title> The King Maker Company </title>
	<link rel="stylesheet" href="style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
</head>
<body>
	<section class="header">
		<nav>
			<a href="index.html"><img src="images/kinglvalkonen.png"</a>
			<div class="nav-links" id="navLinks">
				<ul>
					<li><a href="index.html">HOME</a></li>
					<li><a href="about.html">ABOUT</a></li>
					<li><a href="services.html">SERVICES</a></li>
					<li><a href="blog.html">BLOG</a></li>
					<li><a href="contact.html">CONTACT</a></li>
				</ul>
			</div>
		</nav>
	
	<div class="text-box">
		<h1> The king Maker Consulting</h1>
		<p>Become the king of your own communication. </p>
		<a href="services.html" class="hero-btn">Visit Us To Know More</a>
	</div>
	
	</section>
	
<!-- kohta 2 ekalla sivulla -->
	
<section class="services">
	<h1>What sort of services we offer</h1>
	<p>this is the part for the information about the services</p>
	
	<div class="row">
		<div class="course-col">
			<h3>Presentations</h3>
			<p>Having problems with giving clear and powerful presentations with confidence is not uncommon.
			Here at King Maker Consulting we will teach you to become the best presentator that you can possibly be.</p>
		</div>
		<div class="course-col">
			<h3>Public speaking</h3>
			<p>Public speaking is also a weak spot for many, and staying in the spot light can be frightening,
			but with the tools and help we offer you, you can gain aconfidence for it like never before and become the pro of the craft with out a sliver of fear.  </p>
		</div>
		<div class="course-col">
			<h3>Introductions</h3>
			<p>Presenting is not always about giving presentations or public speaking. Introductions are the personal minipresentations of your self.
			They are manytimes the most important things you can do when meeting a new person, and we will help you to give the best one out there.</p>
		</div>
	</div>
	
</section>	
	
	
<!-- kohta 3 ekalla sivulla -->	
	
<section class="something">
	<h1>This is what your future will look like if you trust in our guidance</h1>
	<p>Take the first step and we handle the rest</p>
	
	<div class="row">
		<div class="something-col">
			<img src="images/presentation.jpg">
			<div class="layer">
				<h3>PRESENTATIONS</h3>
			</div>
		</div>
		<div class="something-col">
			<img src="images/speaking.jpg">
			<div class="layer">
				<h3>PUBLIC SPEAKING</h3>
			</div>
		</div>
		<div class="something-col">
			<img src="images/handshake.jpeg">
			<div class="layer">
				<h3>INTRODUCTIONS</h3>
			</div>
		</div>
	</div>
	 
</section>
	
<!-- kohta 4 ekalla sivulla -->

<section class="facilities">
	<h1>Our training facilities</h1>
	<p>From here you can check out what our training facilities look like</p>
	
	<div class="row">
		<div class="facilities-col">
			<img src="images/conferenceroom.jpg">
			<h3>State of the art conference room</h3>
			<p>Our conference room that is equipped with the state of the art technology to help you become solid professional at giving presentations from 
			corporate level to literally anything.</p>
		</div>
		<div class="facilities-col">
			<img src="images/auditorium.jpg">
			<h3>Auditorium for confidence</h3>
			<p>In our auditorium we will tarin you in the art of the publick speaking, so that you can loose all the fears it may cause you right now
			and you will become the most charismatic speaker out there.</p>
		</div>
		<div class="facilities-col">
			<img src="images/introlongue.jpg">
			<h3>Cozy longue for introductions</h3>
			<p>This works as the perfect are where you can mingle with people and practise the theories which you have learned about giving
			a perfect first impression</p>
		</div>
	</div>
	
</section>

<!-- kohta 5 ekalla sivulla  -->

<section class="comments">
	<h1>What our customers say about us</h1>
	<p>here are some unbiased comments from our customers and their experiences that they have had with us</p>
	
	<div class="row">
		<div class="comments-col">
			<img src="images/man.jpg">
			<div>
				<p>A fantastic organisation! Great support from beginning to end of the process. 
				The team are really informed and go the extra mile at every stage. I would recommend them unreservedly. </p>
				<h3>John Marston</h3>
			</div>
		</div>
		<div class="comments-col">
			<img src="images/woman.jpg">
			<div>
				<p> The King Maker Company went above and beyond to help me out with my shortcomings. I would recommend the services they 
					provide to everyone.</p>
				<h3>Betty Cenan</h3>
			</div>
		</div>
	</div>
	
</section>

<!-- kohta 6 ekalla sivulla  -->

<section class="cta">
	<h1> Enroll for our various online courses <br> anywhere from the world</h1>
	<a href="contact.html" class="hero-btn">CONTACT US</a>
</section>
	
<!-- kohta 7 ekalla sivulla  -->

<section class="footer">
	<h2> Find us in the social media</h2>
	<div class="social">
	<p>---------------------------------------------------------------------------------------------<br>
	<a href="https://www.facebook.com/" target="_blank">Facebook: The King Maker Company</a><br>
	<a href="https://twitter.com/" target="_blank">Twitter: @TheKingMakerCompany</a><br>
	<a href="https://www.instagram.com/" target="_blank">Instagram: KMC</a>
	<br>---------------------------------------------------------------------------------------------</p>
	</div>
	<p>Pieced together by: Matias Turpeinen</p>
</section>
	
	
	
	
	
	
	
	
<!-- js valikolle -->	
<script>
	
	var navLinks = document.getElementById("navLinks");
	
	function showMenu(){
		navLinks.style.right = "0";
	}
	function hideMenu(){
		navLinks.style.right = "-200px";
	}
	
<\/script>	
	
</body>
</html>`},{name:"services.html",content:`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="with=device-width, initial-scale=1.0">
	<title> The King Maker Company </title>
	<link rel="stylesheet" href="style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
</head>
<body>
	<section class="sub-header1">
		<nav>
			<a href="index.html"><img src="images/kinglvalkonen.png"</a>
			<div class="nav-links" id="navLinks">
				<ul>
					<li><a href="index.html">HOME</a></li>
					<li><a href="about.html">ABOUT</a></li>
					<li><a href="services.html">SERVICES</a></li>
					<li><a href="blog.html">BLOG</a></li>
					<li><a href="contact.html">CONTACT</a></li>
				</ul>
			</div>
		</nav>
		<h1>Our Services</h1>
	</section>
	
<!-- Services -->
	
<section class="services">
	<h1>What sort of services we offer</h1>
	<p>this is the part for the information about the services</p>
	
	<div class="row">
		<div class="course-col">
			<h3>Presentations</h3>
			<p>Having problems with giving clear and powerful presentations with confidence is not uncommon.
			Here at King Maker Consulting we will teach you to become the best presentator that you can possibly be.</p>
		</div>
		<div class="course-col">
			<h3>Public speaking</h3>
			<p>Public speaking is also a weak spot for many, and staying in the spot light can be frightening,
			but with the tools and help we offer you, you can gain aconfidence for it like never before and become the pro of the craft with out a sliver of fear.  </p>
		</div>
		<div class="course-col">
			<h3>Introductions</h3>
			<p>Presenting is not always about giving presentations or public speaking. Introductions are the personal minipresentations of your self.
			They are manytimes the most important things you can do when meeting a new person, and we will help you to give the best one out there.</p>
		</div>
	</div>
	
</section>	

<!-- facilities -->

<section class="facilities">
	<h1>Our training facilities</h1>
	<p>From here you can check out what our training facilities look like</p>
	
	<div class="row">
		<div class="facilities-col">
			<img src="images/conferenceroom.jpg">
			<h3>State of the art conference room</h3>
			<p>Our conference room that is equipped with the state of the art technology to help you become solid professional at giving presentations from 
			corporate level to literally anything. <br><br> The room holds in it the following equipment:</p>
			<ul>
			<li>Epson EH-TW7100 4K projector</li>
			<li>Herman Miller Aeron Office seats</li>
			<li>Virtual reality readiness</li>
			<li><a href="https://www.raflaamo.fi/fi/seinajoki/talriikki-seinajoki" target="_blank">With catering service proided by TALRIIKKI</a></li>
			</ul>
		</div>
		<div class="facilities-col">
			<img src="images/auditorium.jpg">
			<h3>Auditorium for confidence</h3>
			<p>In our auditorium we will tarin you in the art of the publick speaking, so that you can loose all the fears it may cause you right now
			and you will become the most charismatic speaker out there. <br><br> This is supported with great technology like:</p>
			<ul>
			<li>Harman Kardon Surround</li>
			<li>Sennheiser EW 112P G4 B-Band wireless mics</li>
			<li>Unbliding spotlights</li>
			<li>Epson EH-TW7100 4K projector</li>
			</ul>
		</div>
		<div class="facilities-col">
			<img src="images/introlongue.jpg">
			<h3>Cozy longue for introductions</h3>
			<p>This works as the perfect are where you can mingle with people and practise the theories which you have learned about giving
			a perfect first impression <br><br> The cozy facilities consist out of:</p>
			<ul>
			<li>Beanbags</li>
			<li>Sofas</li>
			<li>Smooth Jazz</li>
			<li><a href="https://valkoinenpuu.fi/?gclid=Cj0KCQjw5oiMBhDtARIsAJi0qk2u87Lml2PpZumE-DYXscBdtPSlBErTeddGPEDu8fnIejltP2fDfYkaAgNqEALw_wcB" target="_blank">And cakes and coffee provided by Valkoine Puu</a></li>
			</ul>
		</div>
	</div>
	
</section>
	
<!-- footer  -->

<section class="footer">
	<h2> Find us in the social media</h2>
	<div class="social">
	<p>---------------------------------------------------------------------------------------------<br>
	<a href="https://www.facebook.com/" target="_blank">Facebook: The King Maker Company</a><br>
	<a href="https://twitter.com/" target="_blank">Twitter: @TheKingMakerCompany</a><br>
	<a href="https://www.instagram.com/" target="_blank">Instagram: KMC</a>
	<br>---------------------------------------------------------------------------------------------</p>
	</div>
	<p>Pieced together by: Matias Turpeinen</p>
</section>
	
	
	
	
	
	
	
	
<!-- js valikolle -->	
<script>
	
	var navLinks = document.getElementById("navLinks");
	
	function showMenu(){
		navLinks.style.right = "0";
	}
	function hideMenu(){
		navLinks.style.right = "-200px";
	}
	
<\/script>	
	
</body>
</html>`},{name:"style.css",content:`*{
	margin: 0;
	padding: 0;
	font-family: 'Montserrat', sans-serif;font-family: 'Montserrat', sans-serif;
}
.header{
	min-height: 100vh;
	width: 100%;
	background-image: linear-gradient(rgba(1,1,1,0.6),rgba(1,1,1,0.6)),url(images/back.jpg); /* muokkaa tausta värin tummuutta*/
	background-position:center;
	background-size:cover;
	position:relative;
	
}
nav{
	display: flex;
	padding: 2% 6%;
	justify-content: space-between;
	align-items: center;
}
nav img{
	width:400px;
	
} /*nav img:llä voi muokata pikku logon kokoa*/
.nav-links{
	flex:1;
	text-align: right;
}
.nav-links ul li{
	list-style:none;
	display:inline-block;
	padding: 8px 12px;
	position:relative;
}
.nav-links ul li a{
	color:#fff;
	text-decoration:none;
	font-size:17px;
}
.nav-links ul li::after{
	content: '';
	width:0%;
	height:2px;
	background: #f44336;
	display: block;
	margin: auto;
	transition: 0.5s;
}
.nav-links ul li:hover::after{
	width:100%;
}
.text-box{
	width:90%;
	color: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	text-align: center;
}
.text-box h1{
	font-size: 62px;
}
.text-box p{
	margin: 10px 0 40px;
	font-size:20px;
	color: #fff;
}
.hero-btn{
	display: inline-block;
	text-decoration: none;
	color: #fff;
	border: 1px solid #fff;
	padding: 12px 34px;
	font-size: 20px;
	background: transparent;
	position: relative;
	cursor: pointer;
}
.hero-btn:hover{
	border: 1px solid #fff;
	background: #f44336;
	transition: 1s;
}
nav .fa{
	display: none;
}

/*------- services (kohta 2 ekalla sivulla) -------*/

.services{
	width: 80%;
	margin: auto;
	text-align: center;
	padding-top: 100px;
}

h1{
	font-size: 36px;
	font-weight: 600;
}

.services p{
	color: #fff;
	font-size: 20px;
	font-weight: 300;
	line-height: 22px;
	padding: 10px;
}
.row{
	margin-top: 5%;
	display: flex;
	justify-content: space-between;
}
.course-col{
	flex-basis: 31%;
	background: #f44336;
	border-radius: 10px;
	margin-bottom: 5%;
	padding: 20px 12px;
	box-sizing: border-box;
}
.services h3{
	text-align:center;
	font-weight: 600;
	margin: 10px 0;
	font-size: 30px;
	color: #fff;
}
.course-col:hover{
	box-shadow: 0 0 20px 0px rgba(0,0,0,0.4);
}

/*----- "something" (kohta 3 ekalla sivulla) ---*/

.something{
	width: 80%;
	margin: auto;
	text-align: center;
	padding-top: 50px;
}
.something-col{
	flex-basis: 32%;
	border-radius: 10px;
	margin-bottom: 30px;
	position: relative;
	overflow: hidden;
}
.something-col img{
	width:100%;
	display: block;
}
.something p{
	color: #3d3d3d;
	font-size: 20px;
	font-weight: 300;
	line-height: 22px;
	padding: 10px;
}
.layer{
	background: transparent;
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	transition: 0.5s;
}
.layer:hover{
	background: rgba(244,67,54,0.6);
}
.layer h3{
	width: 100%;
	font-weight: 500;
	color: #fff;
	font-size: 26px;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	position:absolute;
	opacity: 0;
	transition: 0.5s;
}
.layer:hover h3{
	bottom: 49%;
	opacity: 1;
}

/*----- "facilities" (kohta 4 ekalla sivulla) -----*/

.facilities {
	width: 80%;
	margin: auto;
	text-align: center;
	padding-top: 100px;
}
.facilities-col{
	flex-basis: 31%;
	border-radius: 10px;
	margin-bottom: 5%;
	text-align: left;
}
.facilities-col img{
	width: 100%;
	border-radius: 10px;
}
.facilities-col p{
	padding: 0;
}
.facilities-col h3{
	margin-top: 16px;
	margin-bottom: 15px;
	text-align: left;
}
.facilities-col ul{
	padding: 5px;
	margin-left: 15px;
}
/*------ "comments" (kohta 5 ekalla sivulla) -----*/

.comments {
	width: 80%;
	margin: auto;
	padding-top: 60px;
	text-align: center;
}
.comments-col{
	flex-basis: 44%;
	border-radius: 10px;
	margin-bottom: 5%;
	text-align: left;
	background: #404040;
	padding: 25px;
	cursor: pointer;
	display: flex;
}
.comments-col h3{
	color: #fff;
	margin-top: 15px;
	text-align: left;
}
.comments-col p{
	color: #fff;
	padding: 0;
}
.comments-col img{
	height: 40px;
	margin-left: 5px;
	margin-right: 30px;
	border-radius: 50%;
}

/*------ "cta" (kohta 6 ekalla sivulla) -----*/

.cta{
	margin: 100px;
	width: 80%;
	margin-left: auto;
	margin-right:auto;
	background-image: linear-gradient(rgba(1,1,1,0.6),rgba(1,1,1,0.6)),url(images/mic.jpg);
	background-position: center;
	background-size: cover;
	border-radius: 10px;
	text-align: center;
	padding: 100px 0;
}
.cta h1{
	color:#fff;
	margin-bottom: 40px;
	padding: 0;
}

/*------ "footer" (kohta 6 ekalla sivulla) -----*/

.footer{
	width: 100%;
	text-align: center;
	padding:30px 0;
}
.footer h2{
	margin-bottom: 25px;
	margin-top: 20px;
	font-weight: 600;
	font-size:40px
}
.social{
	margin: 40px;
	margin-left: auto;
	margin-right:auto;
	width: 80%;
	background-image: linear-gradient(rgba(1,1,1,0),rgba(1,1,1,0)), url(images/social.gif);
	border-color:#1a1a1a;
	background-position: center;
	background-size: cover;
	border-radius: 10px;
	text-align: center;
	padding: 20px 0;
	font-size:20px;
	display: block;
}
.social p{
	padding: 10px 0;
	background-image: linear-gradient(rgba(1,1,1,0.7),rgba(1,1,1,0.7));
	color: #fff;
	border-radius: 10px;
}
.social a:link {
	color: #fff;
	text-decoration:none
	
}
.social a:visited {
	color: #fff;
	text-decoration:none;
}
.social a:hover {
	color:#f44336;
	text-decoration:none;
	
}

/*-------- Abut Us sivu -----------*/

.sub-header{
	height: 50vh;
	width: 100%;
	background-image: linear-gradient(rgba(1,1,1,0.7),rgba(1,1,1,0.7)), url(images/hands.jpg);
	background-position: center;
	background-size: cover;
	text-align: center;
	color: #fff;
}
.sub-header h1{
	margin-top:100px;
}
.about-us{
	width: 80%;
	margin: auto;
	padding-top: 80px;
	padding-bottom: 50px;
}
.about-col{
	flex-basis: 48%;
	padding: 30px 2px;
}
.about-col img{
	width:100%;
	border-radius: 10px;
	
}
.about-col h1{
	padding-top: 0;
}
.about-col p{
	padding: 15px 0 25px;
}

.red-btn{
	border: 1px solid #f44336;
	background: transparent;
	color: #f44336;
}
.red-btn:hover{
	color:#fff;
}
.new1{
	border: solid 1px;
}
.facilities-col a:link {
	color: #000000;
	
}
.facilities-col a:visited {
	color: #878787;
	text-decoration:none;
}
.facilities-col a:hover {
	color:#f44336;
	text-decoration:none;
	
}
.sub-header1{
	height: 50vh;
	width: 100%;
	background-image: linear-gradient(rgba(1,1,1,0.7),rgba(1,1,1,0.7)), url(images/handshake.jpg);
	background-position: center;
	background-size: cover;
	text-align: center;
	color: #fff;
}

/*-------- blogi sisältöä -----------*/

.sub-header2{
	height: 50vh;
	width: 100%;
	background-image: linear-gradient(rgba(1,1,1,0.7),rgba(1,1,1,0.7)), url(images/book.jpeg);
	background-position: center;
	background-size: cover;
	text-align: center;
	color: #fff;
}
.blog-content{
	width: 80%;
	margin: auto;
	padding: 60px 0;
}
.blog-left{
	flex-basis: 65%;
}
.blog-left img{
	width: 100%;
	border-radius: 10px;
}
.blog-left h2{
	color: #222;
	font-weight: 600;
	margin: 30px 0;
}
.blog-left h3{
	color: #222;
	font-weight: 600;
	margin: 30px 0;
}
.blog-left p{
	color: #404040;
	padding: 0;
}
.blog-right{
	flex-basis: 32%;
	padding-top: 33px;
}
.blog-right h3{
	background: #f44336;
	color: #fff;
	padding: 7px 0;
	font-size: 16px;
	margin-bottom: 20px;
}
.blog-right div{
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #555;
	padding: 8px;
	box-sizing: border-box;
}
.comment-box{
	border: 1px solid #ccc;
	margin: 50px 0;
	padding: 10px 20px;
}
.comment-box h3{
	text-align: left;
}
.comment-form input, .comment-form textarea{
	width:100%;
	padding: 10px;
	margin: 15px 0;
	box-sizing: border-box;
	border: none;
	outline: none;
	background: #f0f0f0;
}
.comment-form button{
	margin: 10px 0;
}

/*-------- contact sisältöä -----------*/

.sub-header3{
	height: 50vh;
	width: 100%;
	background-image: linear-gradient(rgba(1,1,1,0.7),rgba(1,1,1,0.7)), url(images/mail.jpg);
	background-position: center;
	background-size: cover;
	text-align: center;
	color: #fff;
}
.location{
	width: 80%;
	margin: auto;
	padding: 80px 0;
}
.location iframe{
	width: 100%;
	border-radius: 10px;
}
.contact-us{
	width: 80%;
	margin: auto;
}
.contact-col{
	flex-basis: 48%;
	margin-bottom:30px;
}
.contact-col div{
	align-items: center;
	margin-bottom: 40px;
}
.contact-col div h3{
	font-size: 28px;
	color: #f44336;
	margin-bottom: 5px;
	margin-top: 10px;
	margin-right: 30px;
	font-weight: 600;
}
.contact-col div p{
	padding: 0;
	color: #555;
}
.contact-col div h5{
	font-size: 20px;
	margin-bottom: 5px;
	font-weight: 400;
}
.contact-col input, .contact-col textarea{
	width: 100%;
	padding: 15px;
	margin-bottom: 17px;
	outline: none;
	border: 1px solid #ccc;
	box-sizing: border-box;
}
.infotable{
	width: 80%;
	margin: auto;
}
.table{
	text-align: center;
	border-collapse: collapse;
	margin: 25px 0;
	font-size: 0.9em;
	min-width: 400px;
	margin-left: auto;
	margin-right: auto;
	padding-top: 10px;
	
}
.table th, .table td{
	border: 1px solid #ccc;
	padding: 5px;
	width: 90%;
}
.table a:link {
	color: #000000;
	
}
.table a:visited {
	color: #878787;
	text-decoration:none;
}
.table a:hover {
	color:#f44336;
	text-decoration:none;
}`}]}],ax=()=>{const[e,t]=b.useState(null),[n,r]=b.useState(null),i=(o,s)=>{r(o),t(s)};return V.jsxs("div",{className:"min-h-screen flex flex-col md:flex-row",children:[V.jsxs("aside",{className:"md:w-1/3 lg:w-1/4 border-r border-gray-700 p-4 flex flex-col justify-between min-h-screen",children:[V.jsx(ix,{}),V.jsxs("div",{className:"pt-8",children:[V.jsx(Jw,{projects:sx,onFileSelect:i}),V.jsx(ox,{})]})]}),V.jsx("main",{className:"flex-1 p-4 relative min-w-0",children:e?V.jsx(nx,{file:e,project:n}):V.jsx("div",{className:"h-full flex items-center justify-center text-center",children:V.jsx("p",{className:"text-lg text-gray-500",children:"Select a file from a project folder to view its content."})})})]})};Ls.createRoot(document.getElementById("root")).render(V.jsx(st.StrictMode,{children:V.jsx(ax,{})}));
