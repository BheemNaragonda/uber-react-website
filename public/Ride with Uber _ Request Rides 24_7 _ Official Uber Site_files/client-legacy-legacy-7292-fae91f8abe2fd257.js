"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([["legacy-7292"],{30214:function(e,t,r){r.d(t,{Z:function(){return n},q:function(){return o}});var n={ANIMATION_BUILDER:"ANIMATION_BUILDER",ARRAY:"ARRAY",BACKGROUND_COLOR:"BACKGROUND_COLOR",BUTTON_GROUP:"BUTTON_GROUP",CHECKBOX:"CHECKBOX",DYNAMIC_PHOTO:"DYNAMIC_PHOTO",ENUM_COLUMNS:"ENUM_COLUMNS",ENUM_CUSTOM:"ENUM_CUSTOM",ENUM_SIDE:"ENUM_SIDE",HEX_SLIDER:"HEX_SLIDER",HIDDEN:"HIDDEN",MARKDOWN:"MARKDOWN",MAP_LAT:"MAP_LAT",MAP_LNG:"MAP_LNG",MAX_ITEMS_SLIDER:"MAX_ITEMS_SLIDER",OBJECT:"OBJECT",SLUG:"SLUG",TABBED_FIELDS:"TABBED_FIELDS",TEXT_COLOR:"TEXT_COLOR",TEXT_LINK:"TEXT_LINK",TEXT_LINK_MODAL:"TEXT_LINK_MODAL",TEXT_MULTILINE:"TEXT_MULTILINE",TOGGLE_SWITCH:"TOGGLE_SWITCH",URL:"URL",YOUTUBE_EMBED_URL:"YOUTUBE_EMBED_URL",COLLAPSIBLE:"COLLAPSIBLE",EVENTS_TAB:"EVENTS_TAB",TEXT_LINE:"TEXT_LINE",TEXT_LINE_CONSTANT:"TEXT_LINE_CONSTANT",COW_EVENT_FORM:"COW_EVENT_FORM"},o={DESIGN:"DESIGN",CONTENT:"CONTENT",ADVANCED:"ADVANCED"}},6241:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(30214),o=["b2b","courier","driver","rider","corporate","shipper","carrier","merchants"].map((function(e){return{field:e,label:e[0].toUpperCase()+e.substring(1),required:!1,type:n.Z.CHECKBOX,defaultValue:!1}})),i={fields:[{label:"Content Container Settings",type:n.Z.COLLAPSIBLE,category:n.q.DESIGN,itemSchema:{fields:[{field:"removePaddingSides",fieldLabel:"Remove side padding",required:!1,type:n.Z.CHECKBOX,defaultValue:!1},{field:"removePaddingTop",fieldLabel:"Remove top padding",required:!1,type:n.Z.CHECKBOX,defaultValue:!1},{field:"removePaddingBottom",fieldLabel:"Remove bottom padding",required:!1,type:n.Z.CHECKBOX,defaultValue:!1},{field:"containerFullWidth",label:"Full width container",required:!1,type:n.Z.TOGGLE_SWITCH,defaultValue:!1},{field:"containerBackgroundColor",label:"Content background color",required:!1,type:n.Z.BACKGROUND_COLOR},{field:"containerBackgroundTransparent",label:"Transparent background",fieldLabel:"Check here to make grid container transparent",required:!1,type:n.Z.CHECKBOX,defaultValue:!0}]}},{label:"Block Container Settings",type:n.Z.COLLAPSIBLE,category:n.q.DESIGN,itemSchema:{fields:[{field:"marginTop",label:"Add padding top",type:n.Z.BUTTON_GROUP,options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}]},{field:"marginBottom",label:"Add padding bottom",required:!1,type:n.Z.BUTTON_GROUP,options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}]},{field:"textColor",label:"Text color",required:!1,type:n.Z.TEXT_COLOR},{field:"backgroundColor",label:"Background color",required:!1,type:n.Z.BACKGROUND_COLOR},{field:"backgroundImageLarge",label:"Background image large",required:!1,type:n.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundImageMedium",label:"Background image medium",required:!1,type:n.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundImageSmall",label:"Background image small",required:!1,type:n.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundOverlay",label:"Background image overlay hex color",required:!1,type:n.Z.HEX_SLIDER},{field:"backgroundPosition",label:"Background image position",required:!1,type:n.Z.ENUM_CUSTOM,options:[{label:"Center",value:"center center"},{label:"Top",value:"center top"},{label:"Bottom",value:"center bottom"}]},{field:"autoplayVideo",label:"Background video",required:!1,type:n.Z.OBJECT,itemSchema:{fields:[{field:"videoUrl1080Mp4",label:"Video desktop URL - 1080p - MP4",required:!1,type:n.Z.TEXT_LINE},{field:"videoUrl720Mp4",label:"Video tablet URL - 720p - MP4",required:!1,type:n.Z.TEXT_LINE},{field:"videoUrl480Mp4",label:"Video mobile URL - 480p - MP4",required:!1,type:n.Z.TEXT_LINE},{field:"videoUrl360Mp4",label:"Video URL - 360p - MP4",required:!1,type:n.Z.TEXT_LINE},{field:"videoUrl1080Webm",label:"Video desktop URL - 1080p - WEBM",required:!1,type:n.Z.TEXT_LINE},{field:"videoUrl720Webm",label:"Video tablet URL - 720p - WEBM",required:!1,type:n.Z.TEXT_LINE},{field:"videoUrl480Webm",label:"Video mobile URL - 480p - WEBM",required:!1,type:n.Z.TEXT_LINE},{field:"videoUrl360Webm",label:"Video URL - 360p - WEBM",required:!1,type:n.Z.TEXT_LINE}]}},{field:"height",label:"Block height",required:!1,type:n.Z.TABBED_FIELDS,itemSchema:{fields:[{field:"desktop",label:"Desktop",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:n.Z.TEXT_LINE},{field:"tablet",label:"Tablet",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:n.Z.TEXT_LINE},{field:"mobile",label:"Mobile",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:n.Z.TEXT_LINE}]}},{field:"alignContainer",label:"Align container (height must be set)",required:!1,type:n.Z.ENUM_CUSTOM,options:[{label:"Top",value:"flex-start"},{label:"Center",value:"center"},{label:"Bottom",value:"flex-end"}]},{field:"anchorName",label:"Block anchor name",required:!1,type:n.Z.SLUG}]}},{label:"Rules Based Personalization (Logged-out User) Settings",type:n.Z.COLLAPSIBLE,category:n.q.ADVANCED,itemSchema:{fields:[{field:"visibleOn",label:"Visible for following user types",type:n.Z.OBJECT,required:!1,itemSchema:{fields:o}},{field:"hiddenOn",label:"Hidden for following user types",type:n.Z.OBJECT,required:!1,itemSchema:{fields:o}}]}}]}},26731:function(e,t,r){r.d(t,{G:function(){return i}});var n=r(30214),o=r(60487);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map((function(e){var r=e.elementName,i=e.elementId,l=e.elementType;return{field:i,label:r,type:n.Z.COW_EVENT_FORM,options:o.Mg.filter((function(e){var r=e.id;return t.includes(r)})),elementType:l}}))}},43749:function(e,t,r){r.d(t,{D:function(){return b}});var n=r(30214),o=r(26731),i=r(60487);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e){return e.reduce((function(e,t){return t.type===n.Z.COLLAPSIBLE?[].concat(d(e),d(t.itemSchema.fields)):[].concat(d(e),[t])}),[])}function m(e,t){var r=e.reduce((function(e,t){var r=t.category||n.q.ADVANCED;return u(u({},e),{},c({},r,[].concat(d(e[r]||[]),[t])))}),{});return Object.keys(n.q).reduce((function(e,o){var i=r[o]||[];return[].concat(d(e),d(t?[{field:"loggedOutProps",label:"For Logged-out users",type:n.Z.OBJECT,category:o,itemSchema:{fields:s(i)}}]:[]),[{field:"loggedInProps",label:"For Logged-in users",type:n.Z.OBJECT,category:o,itemSchema:{fields:s(i)}}])}),[])}var p=function(e){return{label:"Event tracking",type:n.Z.EVENTS_TAB,category:n.q.ADVANCED,itemSchema:{fields:[].concat(d(e.itemSchema.fields),d((0,o.G)([{elementId:i.aM,elementName:"Logged-in State"}],[i.ci.VISIBLE])))}}},b=function(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{title:e,previewSettingsFields:[{field:"loggedIn",label:"User is logged-in",type:n.Z.TOGGLE_SWITCH,defaultValue:!1}],fields:[].concat(d(o?[]:[{field:"isPersonalized",label:"LoggedIn Personalization",type:n.Z.TOGGLE_SWITCH,defaultValue:!1,category:n.q.CONTENT}].concat(d(t))),d(m(t,o)),[p(r)])}}},77286:function(e,t,r){r.d(t,{H$:function(){return s}});var n="click",o="visible",i="submit";var l=r(9944);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,l,a=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.label,o=void 0===n?"":n,i=r.category,l=void 0===i?"":i,a=r.redirectUrl,u=void 0===a?"":a;return e.filter((function(e){return e.eventType===t})).map((function(e){var r=e.selectedCampaigns,n=e.eventName;return{campaignId:Array.isArray(r)&&r[0]?r[0]:null,eventType:t,eventName:n,label:o,category:l,redirectUrl:u}}))}var d=function(e,t){return{trackClickEvents:function(r){t(c(e,n,r))},trackVisibleEvents:function(r){t(c(e,o,r))},trackSubmitEvents:function(r){t(c(e,i,r))}}},f=function e(t,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(!(o>=5))return Array.isArray(r[0])?(o++,r.map((function(t,r){return e(r,t,n,o)})).filter(Boolean)):d(r,n)};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.d;return Object.fromEntries(Object.entries(e).map((function(e){var r=a(e,2),n=r[0],o=r[1];return[n,f(n,o,t)]})))}},__fusion__46:function(e,t,r){r.r(t),r.d(t,{Illustration:function(){return H},default:function(){return U},schema:function(){return V}});var n=r(58844),o=r(36833),i=r(29570),l=r(77286),a=r(36151),u=r(43915),c=r(46412),d=r(41053),f=r(93970),s=r(76408),m=r(66744);Object.freeze({DESKTOP:"desktop",PORTABLE:"portable",PALM:"palm"}),Object.freeze({RTL:"rtl",LTR:"ltr"}),Object.freeze({FLUSH:"flush",FLUSH_END:"flush--ends",FLUSH_TOP:"flush--top",FLUSH_BOTTOM:"flush--top",FLUSH_VERTICAL:"flush--vertical",INSET:"inset",HALF:"half",BLOCK:"block",QUARTER:"quarter",DEFAULT:"default"}),Object.freeze({R4X3:"aspect_4_3",R16X9:"aspect_16_9",R263X1:"aspect_263_1",R9X16:"aspect_9_16",R3X4:"aspect_3_4",R1X1:"aspect_1_1",AUTO:"auto"}),Object.freeze({DOWN:40,LEFT:37,RIGHT:39,SPACE:32,UP:38,TAB:9});var p=r(62142),b=r(33990);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,l,a=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function T(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=(0,u.zo)("div",(function(e){var t=e.$theme,r=e.$backgroundColor,n=e.$isMouseOver,o=e.$textColor,i=t.mediaQuery,l=t.colors,a=t.animation;return T(T(T({backgroundColor:r||l.backgroundPrimary,borderBottom:"1px solid ".concat(o),borderColor:n?l.contentSecondary:"none",textDecoration:"none",transition:"".concat(a.timing100," ").concat(a.easeInOutCurve),position:"relative",width:"100%",height:"100%",display:"flex",alignItems:"stretch",boxSizing:"border-box",color:o},i.small,{paddingBottom:"23px"}),i.medium,{paddingBottom:"35px"}),i.large,{paddingBottom:"40px"})})),S=(0,u.zo)("div",(function(e){var t=e.$theme.mediaQuery;return T(T(T({display:"grid",width:"100%",alignItems:"center",justifyContent:"center"},t.small,{alignItems:"inherit",gridTemplateColumns:"70% 30%"}),t.medium,{gridTemplateColumns:"70% 30%"}),t.large,{gridTemplateColumns:"60% 40%"})})),C=(0,u.zo)("div",(function(){return{gridColumnStart:1,gridColumnEnd:2}})),L=(0,u.zo)("div",(function(){return{gridColumnStart:2,gridColumnEnd:3,display:"flex",justifyContent:"flex-end",alignItems:"center"}})),I=(0,u.zo)("div",(function(e){var t="rtl"===e.$theme.direction;return{overflow:"hidden",display:"block",float:t?"left":"right",transform:t?"scale(-1)":"none",width:"30px"}})),A=(0,u.zo)("div",(function(e){var t=e.$theme;return{transform:"translateX(0)",width:"7em",display:"flex",animationName:e.$isMouseEnter?{from:{transform:"translateX(-50%)"},to:{transform:"translateX(0)"}}:"",animationFillMode:"forwards",animationPlayState:"running",animationTimingFunction:t.animation.easeInOutCurve,animationDuration:"650ms",justifyContent:"space-between"}})),_=(0,u.zo)("div",(function(e){var t=e.$theme,r=e.$color,n=t.mediaQuery,o=t.animation;return T(T({display:"flex",alignItems:"center",width:"1em",animationTimingFunction:o.easeInOutCurve,transition:o.timing100,overflow:"hidden",color:r},n.small,{fontSize:"36px"}),n.large,{fontSize:"44px",position:"relative",left:"-3px"})})),N=function(e){var t=O((0,a.useState)(!1),2),r=t[0],n=t[1],o=O((0,u.hQ)(),2)[1],i=o.mediaQuery,l=(0,m.a)(i.small),y=(0,m.a)(i.medium),g=(0,m.a)(i.large),E=e.backgroundColor,T=e.textColor,N=e.cta,B=e.isLoading;function P(){return function(e,t,r){return("string"==typeof t?t.replace(/\[(\d+)]/g,".$1"):t.join(".")).split(".").filter(Boolean).every((function(t){return void 0!==(e=e[t])}))?e:r}(e,"cta.text",void 0)}function k(){return g?"36px":y&&!g?"30px":l&&!y?"27px":"30px"}function D(){n(!0)}function U(){n(!1)}return(0,f.Q)(N)?(0,b.tZ)(s.Z,v(v({},N),{},{onClick:e.onClick,render:function(e,t){var n=e||t;return(0,b.tZ)(h,{$isMouseOver:n,$backgroundColor:E,$textColor:T||o.colors.black,onMouseEnter:D,children:(0,b.tZ)(S,{children:P()&&(0,b.BX)(b.HY,{children:[(0,b.tZ)(C,{children:(0,b.tZ)(c.O,{isLoading:Boolean(B),children:(0,b.tZ)(d.Z,{color:n?o.colors.contentSecondary:T,heading:N.text,level:2})})}),(0,b.tZ)(L,{children:(0,b.tZ)(I,{children:(0,b.BX)(A,{$isMouseEnter:r,onAnimationEnd:U,children:[(0,b.tZ)(_,{$color:n?o.colors.contentSecondary:T,children:(0,b.tZ)(p.Z,{size:k()})}),(0,b.tZ)(_,{$color:n?o.colors.contentSecondary:T,children:(0,b.tZ)(p.Z,{size:k()})})]})})})]})})})},width:["100%","100%","100%"],height:"100%",isLoading:Boolean(B)})):null};function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==B(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===B(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var U=function(e){var t=e.animations,r=e.activeLanguage,a=e.items,u=e.alignContainer,c=e.anchorName,d=e.autoplayVideo,f=e.backgroundColor,s=e.backgroundFullBleed,m=e.backgroundImageLarge,p=e.backgroundImageMedium,y=e.backgroundImageSmall,g=e.backgroundOverlay,v=e.containerBackgroundColor,O=e.containerBackgroundTransparent,E=void 0===O||O,T=e.height,h=e.marginTop,S=e.removePaddingBottom,C=e.removePaddingSides,L=e.removePaddingTop,I=e.textColor,A=e.userData,_=e.isPersonalized,B=e.analyticsEvents,P=e.analyticsHandler,D=(0,l.H$)(B,P),U=A||{},M=U.loading,Z=U.user,j=Boolean(null==Z?void 0:Z.firstName),R=a&&a.length?a.map((function(e,t){return k(k({},e),{},{index:t})})).filter((function(e){var t;return!(null!=e&&null!==(t=e.cta)&&void 0!==t&&t.hidden||null!=e&&e.hidden)})):[];function w(){return r&&r.languageSlug&&["fi","ru"].includes(r.languageSlug)}function X(){return!(!R||!R.length)}return(0,b.tZ)(o.l,{animations:t,target:"fullBlock",children:(0,b.tZ)(i.V,{alignContainer:u,anchorName:c,autoplayVideo:d,backgroundColor:f,backgroundFullBleed:s,backgroundImageLarge:m,backgroundImageMedium:p,backgroundImageSmall:y,backgroundOverlay:g,containerBackgroundColor:v,containerBackgroundTransparent:E,hasHeading:!1,height:T,marginTop:h,removePaddingBottom:S,removePaddingSides:C,removePaddingTop:L,textColor:I,children:X()&&function(){var e=function(e,r){return(0,b.tZ)(n.P,{$gridColumn:["1/-1","1/-1","span 4","span 6"],children:(0,b.tZ)(o.l,{animations:t,target:"multilinkItems",children:(0,b.tZ)(N,k(k({textColor:I,backgroundColor:f},e),{},{specialSizing:w,onClick:function(){var t,r;null==D||null===(t=D.items)||void 0===t||null===(t=t[e.index])||void 0===t||null===(r=t.trackClickEvents)||void 0===r||r.call(t,{label:_?j?"logged-in":"logged-out":""})},isLoading:M}))})},"multilink-bold-item-".concat(r))};return X()&&R.map(e)}()})})},M=r(30214),Z=r(26731),j=r(60487),R=r(6241),w=r(43749);function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var q={label:"Event Tracking",type:M.Z.EVENTS_TAB,category:M.q.ADVANCED,itemSchema:{fields:(0,Z.G)([{elementId:"items",elementName:"Item",elementType:M.Z.ARRAY}],[j.ci.CLICK])}},x=[{field:"items",label:"Multilink Bold Items",labelItemsBy:"heading",required:!0,type:M.Z.ARRAY,category:M.q.CONTENT,itemSchema:{fields:[{field:"cta",label:"Item CTA",required:!1,type:M.Z.TEXT_LINK}]}},{label:"Animations",type:M.Z.COLLAPSIBLE,category:M.q.ADVANCED,itemSchema:{fields:[{field:"animations",type:M.Z.ANIMATION_BUILDER,options:[{label:"Full block",value:"fullBlock"},{label:"Multilink items",value:"multilinkItems"}]}]}}].concat(function(e){return function(e){if(Array.isArray(e))return X(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return X(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(R.Z.fields)),V=(0,w.D)("Multilink Bold",x,q),H=function(e){var t=e.width,r=e.height;return(0,b.tZ)("img",{src:"https://terrablob.uberinternal.com/_gateway/prod/uber-static/chameleon-fusion/Multilink-Bold.png",alt:"",width:t||"auto",height:r||"200px"})}}}]);