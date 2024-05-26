(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[788],{70788:(t,e,i)=>{"use strict";i.d(e,{S:()=>j,C:()=>_});var o=i(43193),n=i(2433),s=i(42797),r=i(19316),a=i.n(r),l=i(31578),p=i(7825),c=i(36151),u=i(89313),d=i(33990);class h extends c.Component{render(){return(0,d.tZ)(u.Z,{viewBox:"0 0 24 24",...this.props,children:(0,d.tZ)("path",{d:"M10.5 13.5L.5 11 21 3l-8 20.5-2.5-10z"})})}}var g=i(36882);class f extends o.PureComponent{render(){return(0,d.tZ)(g.$,{$color:this.props.color})}}const m=f;function v(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const{colors:x}=n.v,b=(0,s.zo)("div",(t=>{let{$rtl:e}=t;return{position:"absolute",height:"100%",[e?"left":"right"]:"15px",cursor:"pointer",fontSize:"16px",width:"1em",display:"flex",alignItems:"center",justifyContent:"center"}})),I=t=>{let{$error:e,$isLoadingCurrentLocation:i}=t;return{color:e?x.negative400:x.black,opacity:e||i?1:.2,":hover":{color:x.primary600,opacity:1},":focus":{color:e?x.negative400:x.primary600,opacity:1}}},k=(0,s.zo)(p.Z,I),D=(0,s.zo)(h,I);class y extends o.PureComponent{constructor(){super(...arguments),v(this,"clearSelection",(()=>{this.props.clearSelection(this.props.type)})),v(this,"handleLocationKeyPress",(t=>{t&&"Enter"===t.key&&this.props.fetchCurrentLocation()})),v(this,"handleDeleteKeyPress",(t=>{t&&"Enter"===t.key&&this.clearSelection()}))}render(){const{rtl:t,isVisible:e,fetchCurrentLocation:i,localization:o,isLoadingCurrentLocation:n,error:s}=this.props;return n?(0,d.tZ)(b,{$rtl:t,children:(0,d.tZ)(m,{color:x.primary300})}):(0,d.tZ)(b,{$rtl:t,children:e?(0,d.tZ)(k,{width:"12px",height:"12px",onClick:this.clearSelection,onKeyPress:this.handleDeleteKeyPress,tabIndex:"0",role:"button",size:"small","aria-label":o.clearPickupAriaLabel,$error:s,$isLoadingCurrentLocation:n,className:"pe-location-clear"}):(0,d.tZ)(D,{width:"16px",height:"16px",onClick:i,onKeyPress:this.handleLocationKeyPress,tabIndex:"0",role:"button",size:"small","aria-label":o.locationLabel,$error:s,$isLoadingCurrentLocation:n,className:"pe-location-fetch"})})}}var L=i(24671),C=i.n(L),P=i(85057);function S(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const{colors:w}=n.v,$=(0,s.zo)("ul",{border:0,left:0,right:0,listStyle:"none",margin:0,padding:"16px 0",overflowY:"auto",position:"absolute",zIndex:2,backgroundColor:w.primary50}),z=(0,s.zo)("div",{backgroundColor:w.black,opacity:.1,position:"absolute",top:0,left:"18px",right:"18px",height:"1px"}),Z=(0,s.zo)("li",(t=>{let{$focused:e,$isLast:i}=t;return{color:w.primary,backgroundColor:e?w.primary200:w.primary50,display:"flex",alignItems:"center",cursor:"pointer",minHeight:"45px",padding:"0 43px",boxSizing:"border-box",fontSize:"16px",lineHeight:"26px"}})),E=(0,s.zo)("span",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"});class B extends o.PureComponent{constructor(){super(...arguments),S(this,"handleKeysPressed",(t=>{const{items:e,closeList:i,type:o,focusedIndex:n}=this.props;if(e){let s;if("ArrowDown"===t.key&&(s=null===n||n>=e.length-1?0:n+1,t.preventDefault&&t.preventDefault(),this.props.focusIndex(s)),"ArrowUp"===t.key&&(s=null===n||n<=0?e.length-1:n-1,t.preventDefault&&t.preventDefault(),this.props.focusIndex(s)),"Enter"===t.key){const{id:i,provider:o}=e[n];return t.preventDefault&&t.preventDefault(),this.props.onClickItem(i,o,n)}if("Escape"===t.key&&o)return t.preventDefault&&t.preventDefault(),i(o)}})),S(this,"findFirstStringIndices",((t,e)=>{const i=e.toLowerCase(),o=(t||"").trim().toLowerCase(),n=[];if(o){let t=!0;for(;t;){const e=n.length?n[n.length-1]-1:void 0,s=i.lastIndexOf(o,e);-1!==s&&n.push(s),-1!==s&&s||(t=!1)}}return n})),S(this,"getSuggestionItem",(t=>{const e=(this.props.inputValue||"").trim();if(e){const i=this.findFirstStringIndices(e,t);if(i.length){let o=t;return i.forEach((t=>{o=o.slice(0,t)+"<strong>".concat(o.slice(t,t+e.length),"</strong>")+o.slice(t+e.length,o.length)})),o}}return t}))}componentDidMount(){C()&&C().addEventListener("keydown",this.handleKeysPressed)}componentWillUnmount(){C()&&C().removeEventListener("keydown",this.handleKeysPressed)}render(){const{type:t,items:e,listBoxId:i,focusedIndex:o}=this.props;return t&&(0,d.BX)($,{id:i,className:"pe-suggestions",role:"listbox",children:[(0,d.tZ)(z,{}),e&&e.map(((i,n)=>{const{addressLine1:s,addressLine2:r,id:a,provider:l}=i,p="".concat(s).concat(r?", ".concat(r):"");return(0,d.tZ)(Z,{$focused:o===n,$isLast:n===e.length-1,onClick:t=>this.props.onClickItem(a,l,n),className:"pe-suggestions-item",role:"option","aria-selected":o===n,"aria-label":"location suggestion item",id:a,...P.ki,children:(0,d.tZ)(E,{dangerouslySetInnerHTML:{__html:this.getSuggestionItem(p)}})},"".concat(t,"-suggestion-").concat(n))}))]})}}function T(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const{colors:F}=n.v,{values:{fontFamily:K,mediaQueries:R}}=l.ZP,j=1,N={content:'""',position:"absolute",left:"-3px",width:"6px",height:"6px"},V=(0,s.zo)("div",(t=>{let{$rtl:e,$hidden:i,$pickup:o,$destination:n}=t;return{position:"absolute",top:"33px",bottom:"33px",[e?"right":"left"]:"22px",width:"1px",backgroundColor:i?"none":F.black,":before":{...N,bottom:"-10px",border:"1px solid ".concat(F.black),backgroundColor:n?F.black:F.primary50,width:"5px",height:"5px"},":after":{...N,top:"-10px",borderRadius:"50%",border:"1px solid ".concat(F.black),backgroundColor:o?F.black:F.primary50}}})),A=(0,s.zo)("div",(t=>{let{$removeTopMargin:e}=t;return{flex:"0 0 auto",fontFamily:K.body,marginBottom:"13px",marginTop:e?0:"31px",position:"relative",[R.palm]:{marginBottom:"26px",marginTop:e?0:"20px"}}})),M=(0,s.zo)("div",(t=>{let{$gutter:e}=t;return{position:"relative",display:"flex",flexDirection:"row",width:"100%",marginTop:e?0:"8px"}})),H=(0,s.zo)("div",{position:"relative",display:"flex",flexDirection:"row",flex:"1 1 auto"}),O=(0,s.zo)("input",(t=>{let{$theme:e,$error:i,$rtl:o}=t;const{typography:n}=e;return{position:"relative",zIndex:0,flex:1,minHeight:"52px",backgroundColor:F.primary50,[o?"paddingLeft":"paddingRight"]:"33px",[o?"paddingRight":"paddingLeft"]:"41px",paddingTop:"11px",paddingBottom:"11px",border:"none",color:i?F.negative400:F.black,outline:"none",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",boxSizing:"border-box",margin:0,width:"100%",...n.font300}})),U=(0,s.zo)("div",(t=>{let{$rtl:e}=t;return{position:"absolute",height:"100%",width:"16px",[e?"left":"right"]:"15px",cursor:"pointer",fontSize:"23px",display:"flex",alignItems:"center",justifyContent:"center"}})),X=(0,s.zo)(p.Z,{color:F.black,opacity:.2,":hover":{color:F.primary600,opacity:1},":focus":{color:F.primary600,opacity:1}});class _ extends o.PureComponent{constructor(t){super(t),T(this,"state",{isDetectionError:!1,pickupInput:"",destinationInput:"",focusedInput:null,prevPickupDetails:null,prevDestinationDetails:null,focusedPickupIndex:0,focusedDestinationIndex:0}),T(this,"destinationListBoxId","destination-suggestions-listbox-".concat(Math.random())),T(this,"pickupListBoxId","pickup-suggestions-listbox-".concat(Math.random())),T(this,"mapToSubmitEstimatePoint",((t,e)=>({id:t.id,provider:t.provider,locale:e,latitude:t.lat,longitude:t.long}))),T(this,"setInputValue",((t,e)=>{this.setState({["".concat(t,"Input")]:this.getInputValueFromPoint(e)})})),T(this,"getInputValueFromPoint",(t=>t.addressLine1&&t.addressLine2?"".concat(t.addressLine1,", ").concat(t.addressLine2):"".concat(t.fullAddress))),T(this,"fetchSuggestions",(t=>{const{locale:e}=this.props,{lat:i,long:o}=this.getTargetLatLng();this.props.getSuggestions({type:t.name,q:t.value,locale:e,lat:i,long:o})})),T(this,"getTargetLatLng",(()=>{const{mapCenter:t,pickupDetails:e,destinationDetails:i}=this.props;return e&&e.lat?{lat:e.lat,long:e.long}:i&&i.lat?{lat:i.lat,long:i.long}:{lat:null==t?void 0:t.latitude,long:null==t?void 0:t.longitude}})),T(this,"clickSuggestionItem",((t,e,i)=>{const o=this.state.focusedInput,{locale:n,suggestions:s}=this.props;var r,a;o&&s&&s[o]&&(this.props.loadPlaceDetails({type:o,locale:n,id:(null===(r=s[o])||void 0===r?void 0:r[i].id)||"",provider:(null===(a=s[o])||void 0===a?void 0:a[i].provider)||""}),this.loadNextChangedPlace("pickup"===this.state.focusedInput?"destination":"pickup"))})),T(this,"focusIndex",(t=>{const e=this.state.focusedInput;if(e){const i="pickup"===e?"focusedPickupIndex":"focusedDestinationIndex";this.setState({[i]:t})}})),T(this,"loadNextChangedPlace",(t=>{var e,i,o;this.props.suggestions[t]&&null!==(e=this.props.suggestions[t])&&void 0!==e&&e.length&&(!this.props["".concat(t,"Details")]&&this.state["".concat(t,"Input")]||this.props["".concat(t,"Details")]&&this.state["".concat(t,"Input")]!==this.getInputValueFromPoint(this.props["".concat(t,"Details")]))&&this.props.loadPlaceDetails({type:t,locale:this.props.locale,id:(null===(i=this.props.suggestions[t])||void 0===i?void 0:i[0].id)||"",provider:(null===(o=this.props.suggestions[t])||void 0===o?void 0:o[0].provider)||""});this.setState({focusedInput:null})})),T(this,"focusPickup",(()=>{this.pickupRef.focus()})),T(this,"focusDestination",(()=>{this.destinationRef.focus()})),T(this,"clearInput",(t=>{this.setState({["".concat(t,"Input")]:"",focusedInput:null,["".concat(t,"InputChanged")]:!1}),this.fetchSuggestions({name:t,value:""}),this.props["".concat(t,"Details")]&&(this.props.clearFEPlaceDetails(t),this.props.clearFEDirections())})),T(this,"closeSuggestionsList",(t=>{this.setState({focusedInput:null}),this["".concat(t,"Ref")].blur()})),T(this,"triggerDetactionError",((t,e)=>{this.setState({isDetectionError:t&&e===j},(()=>{this.props.setDetectionError(t,e)}))})),T(this,"fetchCurrentLocation",(()=>{this.triggerDetactionError(!1),window&&navigator.geolocation.getCurrentPosition((t=>{t&&t.coords?(this.props.fetchCurrentLocation({lat:t.coords.latitude,lng:t.coords.longitude,lang:this.props.locale}),this.loadNextChangedPlace("destination")):this.triggerDetactionError(!0)}),(t=>{this.triggerDetactionError(!0,t.code)}))})),T(this,"onInputChanged",(t=>{let{target:e}=t;this.setState({["".concat(e.name,"Input")]:e.value,focusedInput:e.name,["".concat(e.name,"InputChanged")]:!0},(()=>{this.triggerDetactionError(!1),this.fetchSuggestions(e)}))})),T(this,"onInputFocused",(t=>{let{target:e}=t;return this.setState({focusedInput:e.name})})),T(this,"onInputBlured",(t=>{let{target:e}=t;setTimeout((()=>{e.name===this.state.focusedInput&&this.setState({focusedInput:null})}),150),this.props.dataTrackingHandler&&this.props.dataTrackingHandler(e.value,e.name)})),T(this,"clearDestinationSelection",(()=>this.clearInput("destination"))),T(this,"saveDestRef",(t=>this.destinationRef=t)),T(this,"savePickupRef",(t=>this.pickupRef=t)),T(this,"handleDeleteDestinationKeyPress",(t=>{t&&"Enter"===t.key&&this.clearDestinationSelection()})),this.fetchSuggestions=a()(this.fetchSuggestions,300)}static getDerivedStateFromProps(t,e){const{isPickupUsingCurrentLocation:i,destinationDetails:o,pickupDetails:n}=t,{prevDestinationDetails:s,prevPickupDetails:r,destinationInput:a}=e,l=!r||n!==r,p=n&&l&&{prevPickupDetails:n,pickupInput:n.addressLine1};if(i&&p){const t=o&&!a?{destinationInput:o.fullAddress}:{};return{...p,...t}}const c=o&&(!s||o!==s)&&{prevDestinationDetails:o,destinationInput:o.fullAddress},u=n&&l&&{prevPickupDetails:n,pickupInput:n.fullAddress};return c||u?{...c||{},...u||{}}:e}componentDidUpdate(t){let e=!1;this.props.pickupDetails&&t.pickupDetails!==this.props.pickupDetails&&(this.setInputValue("pickup",this.props.pickupDetails),e=!0),this.props.destinationDetails&&t.destinationDetails!==this.props.destinationDetails&&(this.setInputValue("destination",this.props.destinationDetails),e=!0),!e||this.props.placeDetailsLoading.pickup||this.props.placeDetailsLoading.destination||(this.props.destinationDetails&&this.props.pickupDetails&&(this.props.loadFEDirections&&this.props.loadFEDirections({destinationDetails:this.props.destinationDetails,pickupDetails:this.props.pickupDetails}),this.props.loadFareEstimates&&this.props.loadFareEstimates({origin:this.mapToSubmitEstimatePoint(this.props.pickupDetails,this.props.locale),destination:this.mapToSubmitEstimatePoint(this.props.destinationDetails,this.props.locale),locale:this.props.locale})),this.props.pickupDetails&&!this.props.destinationDetails?this.focusDestination():!this.props.pickupDetails&&this.props.destinationDetails&&this.focusPickup())}render(){var t,e,i;const{localization:o,suggestions:n,errors:s,isLoadingCurrentLocation:r,rtl:a,pickupDetails:l,destinationDetails:p,removeTopMargin:c}=this.props,{pickupInput:u,destinationInput:h,focusedInput:g,isDetectionError:f,focusedPickupIndex:m,focusedDestinationIndex:v}=this.state,x=g&&n&&n[g],b=!(null==x||!x.length)&&"pickup"===g,I=!(null==x||!x.length)&&"destination"===g,k=b&&(null==x||null===(t=x[m])||void 0===t?void 0:t.id),D=I&&(null==x||null===(e=x[v])||void 0===e?void 0:e.id);return(0,d.BX)(A,{$removeTopMargin:c,children:[(0,d.BX)(M,{$gutter:!0,role:"combobox","aria-expanded":b,"aria-owns":this.pickupListBoxId,"aria-haspopup":"listbox",children:[(0,d.tZ)(O,{name:"pickup",$error:s&&s.pickup||f,ref:this.savePickupRef,value:u,title:u,"aria-label":this.props.localization.pickupAriaLabel,placeholder:this.props.localization.pickupPlaceholder,onChange:this.onInputChanged,onFocus:this.onInputFocused,onBlur:this.onInputBlured,autoComplete:"off",$rtl:a,type:"text","aria-autocomplete":"list","aria-controls":this.pickupListBoxId,"aria-activedescendant":k}),(0,d.tZ)(y,{rtl:a,type:"pickup",isLoadingCurrentLocation:r,isVisible:!(null==u||!u.length),clearSelection:this.clearInput,fetchCurrentLocation:this.fetchCurrentLocation,localization:o,error:f})]}),b&&(0,d.tZ)(B,{inputValue:u,type:g,items:x,onClickItem:this.clickSuggestionItem,closeList:this.closeSuggestionsList,listBoxId:this.pickupListBoxId,focusIndex:this.focusIndex,focusedIndex:m}),(0,d.tZ)(M,{$gutter:!1,role:"combobox","aria-expanded":I,"aria-owns":this.destinationListBoxId,"aria-haspopup":"listbox",children:(0,d.BX)(H,{children:[(0,d.tZ)(O,{name:"destination",$error:s&&s.destination,ref:this.saveDestRef,value:h,title:h,"aria-label":this.props.localization.destinationAriaLabel,placeholder:this.props.localization.destinationPlaceholder,onChange:this.onInputChanged,onFocus:this.onInputFocused,onBlur:this.onInputBlured,autoComplete:"off",$rtl:a,type:"text","aria-autocomplete":"list","aria-controls":this.destinationListBoxId,"aria-activedescendant":D}),!(!h||!h.length)&&(0,d.tZ)(U,{$rtl:a,children:(0,d.tZ)(X,{width:"12px",height:"12px",onClick:this.clearDestinationSelection,onKeyPress:this.handleDeleteDestinationKeyPress,tabIndex:"0",role:"button",size:"small","aria-label":this.props.localization.clearDestinationAriaLabel,className:"pe-location-clear"})})]})}),I&&(0,d.tZ)(B,{inputValue:h,type:g,items:x,onClickItem:this.clickSuggestionItem,closeList:this.closeSuggestionsList,listBoxId:this.destinationListBoxId,focusIndex:this.focusIndex,focusedIndex:v}),(0,d.tZ)(V,{$rtl:a,$hidden:"pickup"===g&&n&&n[g]&&!(null===(i=n[g])||void 0===i||!i.length),$pickup:!!l,$destination:!!p})]})}}T(_,"defaultProps",{placeDetailsLoading:{},removeTopMargin:!1})},7825:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var o=i(36151),n=i(89313),s=i(33990);class r extends o.Component{render(){return(0,s.tZ)(n.Z,{viewBox:"0 0 12 12",...this.props,children:(0,s.tZ)("path",{d:"M10.595 0L6 4.596 1.405 0 0 1.404 4.596 6 0 10.595 1.405 12 6 7.404 10.595 12 12 10.595 7.404 6 12 1.404z"})})}}},89313:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var o=i(43193),n=i(33990);class s extends o.Component{render(){const{children:t,...e}=this.props;return t&&(0,n.tZ)("svg",{"aria-hidden":"true",focusable:"false",width:"1em",height:"1em",fill:"currentColor",...e,children:t})}}},19316:t=>{t.exports=function(t,e,i){var o=null,n=null,s=function(){o&&(clearTimeout(o),n=null,o=null)},r=function(){if(!e)return t.apply(this,arguments);var r=this,a=arguments,l=i&&!o;return s(),n=function(){t.apply(r,a)},o=setTimeout((function(){if(o=null,!l){var t=n;return n=null,t()}}),e),l?n():void 0};return r.cancel=s,r.flush=function(){var t=n;s(),t&&t()},r}}}]);