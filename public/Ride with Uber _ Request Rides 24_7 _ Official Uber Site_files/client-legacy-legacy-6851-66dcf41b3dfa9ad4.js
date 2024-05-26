"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([["legacy-6851"],{26731:function(e,t,l){l.d(t,{G:function(){return r}});var a=l(30214),i=l(60487);function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map((function(e){var l=e.elementName,r=e.elementId,o=e.elementType;return{field:r,label:l,type:a.Z.COW_EVENT_FORM,options:i.Mg.filter((function(e){var l=e.id;return t.includes(l)})),elementType:o}}))}},__fusion__25:function(e,t,l){l.r(t),l.d(t,{Illustration:function(){return m},default:function(){return a.X},schema:function(){return c}});var a=l(15419),i=l(30214),r=l(26731),o=l(60487),n=l(6241),d=l(68092);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}var c={excludeFromAuthoring:!1,title:"Content Items",fields:[{field:"itemStyle",label:"Item style",type:i.Z.BUTTON_GROUP,category:i.q.DESIGN,options:[{label:"Text",value:"text"},{label:"Card",value:"card"}]},{field:"columns",label:"Columns",required:!0,hideCondition:function(e){return"card"===(null==e?void 0:e.itemStyle)},type:i.Z.ENUM_COLUMNS,category:i.q.DESIGN},{field:"centerAlign",label:"Center align 1up layout",hideCondition:function(e){return"card"===(null==e?void 0:e.itemStyle)},type:i.Z.CHECKBOX,category:i.q.DESIGN},{field:"singleColRow",label:"Force row 1up layout",hideCondition:function(e){return"card"===(null==e?void 0:e.itemStyle)},type:i.Z.CHECKBOX,category:i.q.DESIGN},{field:"itemHeadingFontSize",label:"Item heading font size",hideCondition:function(e){return"card"===(null==e?void 0:e.itemStyle)},type:i.Z.BUTTON_GROUP,category:i.q.DESIGN,options:[{label:"Normal",value:4},{label:"Large",value:3}]},{field:"heading",label:"Heading",required:!1,type:i.Z.TEXT_LINE,category:i.q.CONTENT},{field:"body",label:"Body copy",required:!1,type:i.Z.MARKDOWN,category:i.q.CONTENT},{field:"image",label:"Header image desktop",required:!1,type:i.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD",category:i.q.CONTENT},{field:"imageTablet",label:"Header image tablet",required:!1,type:i.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD",category:i.q.CONTENT},{field:"imageMobile",label:"Header image mobile",required:!1,type:i.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD",category:i.q.CONTENT},{field:"cta",label:"CTA",required:!1,type:i.Z.OBJECT,category:i.q.CONTENT,itemSchema:{fields:[{field:"ctaPrimaryType",label:"CTA primary",type:i.Z.BUTTON_GROUP,options:[{label:"Link",value:d.Zj},{label:"Button",value:d.q0},{label:"Inverted",value:d.k$}]},{field:"ctaPrimary",label:"CTA primary",required:!1,type:i.Z.TEXT_LINK_MODAL},{field:"ctaSecondaryType",label:"CTA secondary",type:i.Z.BUTTON_GROUP,options:[{label:"Link",value:d.Zj},{label:"Button",value:d.q0},{label:"Inverted",value:d.k$}]},{field:"ctaSecondary",label:"CTA secondary",required:!1,type:i.Z.TEXT_LINK_MODAL}]}},{label:"Content Filtering",type:i.Z.COLLAPSIBLE,category:i.q.CONTENT,itemSchema:{fields:[{field:"filterTagsBool",label:"Use filter tags",required:!1,type:i.Z.TOGGLE_SWITCH},{field:"maxItemsBool",label:"Use content items limit",required:!1,type:i.Z.TOGGLE_SWITCH},{field:"maxItems",label:"Content items limit",required:!1,hideCondition:function(e){return!0!==(null==e?void 0:e.maxItemsBool)},type:i.Z.MAX_ITEMS_SLIDER},{field:"filterTags",label:"Filter tags",labelItemsBy:"filterTag",required:!1,hideCondition:function(e){return!0!==(null==e?void 0:e.filterTagsBool)},type:i.Z.ARRAY,itemSchema:{fields:[{field:"filterTagIcon",label:"Filter tag icon",type:i.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"filterTag",label:"Label",required:!1,type:i.Z.TEXT_LINE}]}}]}},{field:"ctaColorTheme",label:"Modal CTA color theme",required:!1,type:i.Z.BUTTON_GROUP,options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"}],category:i.q.DESIGN},{field:"ctaPosition",label:"CTA position",required:!1,type:i.Z.ENUM_CUSTOM,category:i.q.DESIGN,options:[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}]},{field:"imageType",label:"Image aspect ratio",required:!1,hideCondition:function(e){return"card"===(null==e?void 0:e.itemStyle)},type:i.Z.ENUM_CUSTOM,category:i.q.DESIGN,options:[{label:"Icon - 24x24",value:"icon"},{label:"Badge - 48x48",value:"badge-small"},{label:"16:9",value:"aspect_16_9"},{label:"3:2",value:"aspect_3_2"},{label:"1:1",value:"aspect_1_1"},{label:"4:5",value:"aspect_4_5"}]},{field:"items",label:"Content Items",labelItemsBy:"heading",labelLengthLimit:50,required:!1,type:i.Z.ARRAY,category:i.q.CONTENT,itemSchema:{fields:[{field:"image",label:"Item image",required:!1,type:i.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"videoObject",label:"YouTube embed URL",required:!1,type:i.Z.OBJECT,itemSchema:{fields:[{field:"videoUrl",label:"Embed URL",required:!1,type:i.Z.YOUTUBE_EMBED_URL},{field:"playButtonTheme",label:"Play button theme",required:!1,type:i.Z.BUTTON_GROUP,options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"}]}]}},{field:"eyebrowIcon",label:"Eyebrow icon",type:i.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"eyebrow",label:"Eyebrow",type:i.Z.TEXT_LINE},{field:"heading",label:"Item heading",required:!1,type:i.Z.TEXT_LINE},{field:"body",label:"Item body",hideCondition:function(e){return"card"===(null==e?void 0:e.itemStyle)},type:i.Z.MARKDOWN},{field:"cta",label:"Item CTA",required:!1,type:i.Z.OBJECT,itemSchema:{fields:[{field:"ctaPrimaryType",label:"CTA primary",type:i.Z.BUTTON_GROUP,options:[{label:"Link",value:d.Zj},{label:"Button",value:d.q0},{label:"Inverted",value:d.k$}]},{field:"ctaPrimary",label:"CTA primary",required:!1,type:i.Z.TEXT_LINK_MODAL},{field:"ctaSecondaryType",label:"CTA secondary",type:i.Z.BUTTON_GROUP,options:[{label:"Link",value:d.Zj},{label:"Button",value:d.q0},{label:"Inverted",value:d.k$}]},{field:"ctaSecondary",label:"CTA secondary",required:!1,type:i.Z.TEXT_LINK_MODAL}]}},{field:"filterTag",label:"Filter tags (separated by commas, if multiple)",required:!1,hideCondition:function(e){return!0!==(null==e?void 0:e.filterTagsBool)},type:i.Z.TEXT_LINE},{field:"cardDesignOptions",label:"Card design options",type:i.Z.OBJECT,hideCondition:function(e){return"card"!==(null==e?void 0:e.itemStyle)},itemSchema:{fields:[{field:"cardTextColor",label:"Card text color",type:i.Z.TEXT_COLOR},{field:"cardBackgroundColor",label:"Card background color",type:i.Z.BACKGROUND_COLOR}]}}]}},{label:"Animations",type:i.Z.COLLAPSIBLE,category:i.q.ADVANCED,itemSchema:{fields:[{field:"animations",type:i.Z.ANIMATION_BUILDER,options:[{label:"Full block",value:"fullBlock"},{label:"Content group header",value:"contentGroupHeader"},{label:"Content group body",value:"contentGroupBody"},{label:"Content group CTA",value:"contentGroupCta"},{label:"Content group image",value:"contentGroupImage"},{label:"Content items",value:"contentItems"}]}]}},{label:"Event tracking",type:i.Z.EVENTS_TAB,category:i.q.ADVANCED,itemSchema:{fields:(0,r.G)([{elementId:"ctaPrimary",elementName:"CTA Primary"},{elementId:"ctaSecondary",elementName:"CTA Secondary"}],[o.ci.CLICK])}}].concat(function(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n.Z.fields))},y=l(33990),m=function(e){var t=e.width,l=e.height;return(0,y.tZ)("img",{src:"https://terrablob.uberinternal.com/_gateway/prod/uber-static/chameleon-fusion/Content%20Items.png",alt:"",width:t||"auto",height:l||"200px"})}}}]);