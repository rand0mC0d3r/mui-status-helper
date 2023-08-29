"use strict";(self.webpackChunkmui_status_helper=self.webpackChunkmui_status_helper||[]).push([[812,698],{2705:function(t,e,n){var o=n(4836);e.Z=void 0;var r=o(n(5649)),i=n(184),a=(0,r.default)((0,i.jsx)("path",{d:"m7 10 5 5 5-5H7z"}),"ArrowDropDownOutlined");e.Z=a},1438:function(t,e,n){var o=n(4836);e.Z=void 0;var r=o(n(5649)),i=n(184),a=(0,r.default)((0,i.jsx)("path",{d:"m7 14 5-5 5 5H7z"}),"ArrowDropUpOutlined");e.Z=a},3698:function(t,e,n){n.r(e),n.d(e,{StatusCore:function(){return k},default:function(){return w}});var o=n(184),r=n(5814),i=n(2791),a=n(4164),l=n(5782),u=n(6943),c=n(2705),s=n(1438),d=n(6863),p=function(t,e){switch(e){case"primary":return t.palette.primary.main;case"secondary":return t.palette.secondary.main;default:return""}},f=function(t,e){switch(e){case"primary":return t.palette.primary.dark;case"secondary":return t.palette.secondary.dark;default:return t.palette.divider}},v=function(t,e,n){return"false"===n&&"true"===t||"true"===n&&"true"===e},h=function(t,e,n){return"false"===n&&"true"===e||"true"===n&&"true"===t},g=(0,d.ZP)("span")((function(t){var e=t.theme;return{padding:"1px 10px",display:"flex",flexWrap:"nowrap",alignItems:"stretch",fontSize:"14px",gap:"".concat(e.spacing(.5)),"& > *":{fontSize:"14px !important"}}})),x=((0,d.ZP)(c.Z)((function(t){var e=t.position;return{position:"absolute",zIndex:102,bottom:"top"!==e?"-10px":"unset",top:"top"===e?"16px":"unset"}})),(0,d.ZP)("div")((function(){return{fontSize:"13px",display:"flex",flexWrap:"nowrap",gap:"8px",alignItems:"center",maxHeight:"300px",overflow:"scroll"}}))),m=((0,d.ZP)(s.Z)((function(){return{position:"absolute",bottom:"unset",top:"-14px",zIndex:102}})),(0,d.ZP)("div")((function(t){var e=t.theme,n=t.secondary,o=t.hasclick,r=t.highlight,i=t.startSeparator,a=t.endSeparator,l=t.isdisabled;return{WebkitFontSmoothing:"auto",height:"100%",display:"flex",flex:"0 0 auto",flexDirection:"row",alignItems:"stretch",gap:"16px",justifyContent:"center",alignSelf:"center",position:"relative",borderLeft:v(i,a,n)?"1px solid ".concat(e.palette.divider):"none",borderRight:h(i,a,n)?"1px solid ".concat(e.palette.divider):"none",cursor:"true"===o&&"false"===l?"pointer":"",backgroundColor:p(e,r),color:e.palette.text.primary,"& > div > *":{color:"default"!==r?"".concat(e.palette.background.default," !important"):""},"& > span > div > *":{color:"default"!==r?"".concat(e.palette.background.default," !important"):""},"&:hover":"true"===o&&"false"===l?{backgroundColor:f(e,r),color:"".concat(e.palette.text.primary)}:{}}}))),y=function(){return y=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},y.apply(this,arguments)},b={start:!1,end:!1},k=(0,i.forwardRef)((function(t,e){var n,c,s=t,d=s.id,p=s.order,f=s.style,v=s.onClick,h=s.onContextMenu,k=s.disabled,w=void 0!==k&&k,j=s.highlight,C=void 0===j?l.y$.DEFAULT:j,S=s.tooltip,E=s.children,Z=s.options,O=s.secondary,P=void 0!==O&&O,I=s.onLoad,A=void 0===I?function(){}:I,D=(0,i.useContext)(u.ZP),R=D.status,F=D.handleStatusAnnouncement,L=(0,i.useContext)(u.ZP).settings.allowRightClick,z=(0,i.useState)(),M=z[0],T=z[1],$=(0,i.useState)(null),_=$[0],B=$[1],U=(0,i.useState)(null),q=U[0],H=U[1],W=y(y({},b),null===Z||void 0===Z?void 0:Z.separators),N=(0,i.useCallback)((function(){F({id:d,ownId:M,options:Z})}),[d,M,Z,F]);return(0,i.useEffect)((function(){d&&M&&null===_&&!R.some((function(t){return t.uniqueId===d}))&&N()}),[d,M,_,R,N]),(0,i.useEffect)((function(){var t=R.find((function(t){return t.uniqueId===d}));null!==_&&(null===_||void 0===_?void 0:_.visible)===(null===t||void 0===t?void 0:t.visible)||!t||B(t)}),[R,d,_]),(0,i.useLayoutEffect)((function(){null!==_&&H(document.getElementById((0,u._j)("statusBar",[P?"secondary":"primary"]))||null)}),[P,_]),(0,i.useEffect)((function(){T((Math.random()+1).toString(36).substring(7))}),[]),(0,i.useEffect)((function(){d||console.error("Please define an id for the status bar item")}),[d]),(0,i.useEffect)((function(){return function(){}}),[]),(0,i.useEffect)((function(){null!==_&&d&&q&&A(e)}),[_,d,q,e,A]),(0,o.jsx)(o.Fragment,{children:null!==_&&!!d&&q&&(0,a.createPortal)(_.visible&&E&&(0,o.jsx)(m,y({},{id:d,ref:e,key:"mui-status-".concat(d),onClick:function(t){void 0===v||w||(t.preventDefault(),v(t))},onContextMenu:function(t){t.preventDefault(),L&&void 0!==h&&!w&&h(t)},style:y(y({},f),{order:p||_.index}),highlight:C,secondary:P.toString(),startSeparator:null===(n=W.start)||void 0===n?void 0:n.toString(),endSeparator:null===(c=W.end)||void 0===c?void 0:c.toString(),hasclick:(!!v).toString(),isdisabled:w.toString()},{children:S?(0,o.jsx)(r.Z,y({title:(0,o.jsx)(x,{children:S}),arrow:!0},{children:(0,o.jsx)(g,{children:E})})):(0,o.jsx)(g,{children:E})})),q)})})),w=k},8812:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var o=n(184),r=n(2791),i=n(5782),a=n(6943),l=n(3698),u=n(3767),c=n(4277),s=n(6015),d=n(3245),p=n(2065),f=n(6863),v=(0,f.ZP)(s.Z)((function(t){var e=t.theme,n=t.width,o=t.height;return{width:"".concat(n?"".concat(e.breakpoints.values[n]/1.42,"px"):"auto"),height:"".concat(o?"".concat(e.breakpoints.values[o]/1.69,"px"):"auto"),maxHeight:"calc(75vh)",minWidth:"calc(15vw)",overflow:"scroll",borderBottom:"1px dotted ".concat(e.palette.divider)}})),h=(0,f.ZP)(d.Z)((function(){return{zIndex:"101"}})),g=(0,f.ZP)("div")((function(t){var e=t.theme,n=t.elevation,o=t.highlight,r=t.variant,i=t.decoration;return{display:"flex",alignItems:"stretch",position:"relative",flexDirection:"column",padding:0,backdropFilter:"blur(8px)",backgroundColor:"".concat((0,p.Fq)(e.palette.background.default,.75)),borderRadius:"".concat(e.shape.borderRadius,"px"),margin:"".concat("true"===i?e.spacing(.75):e.spacing(.25)," 0px"),border:"default"===r?"2px solid transparent":"2px solid ".concat("default"!==o?e.palette[o].main:"transparent"),boxShadow:e.shadows[n||2]}})),x=function(){return x=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},x.apply(this,arguments)},m=function(t){var e,n=t.id,l=t.enrichedPopper,s=t.highlight,d=void 0===s?i.y$.DEFAULT:s,p=t.statusObject,f=t.anchorEl,m=t.setAnchorEl,y=t.options,b=t.open,k=t.secondary,w=void 0!==k&&k,j=(0,r.useContext)(a.ZP).settings,C=(null===p||void 0===p?void 0:p.keepOpen)||b?i.y$.PRIMARY:d,S=function(t){l.onClose&&!(null===p||void 0===p?void 0:p.keepOpen)&&l.onClose(t),(null===p||void 0===p?void 0:p.keepOpen)&&j.hasLock||m(null)},E=(0,r.useRef)(null);return(0,r.useEffect)((function(){E.current&&E.current.focus()}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(h,x({},{keepMounted:null===p||void 0===p?void 0:p.keepOpen,open:b&&Boolean(f),anchorEl:f,onClose:l.onClose,elevation:l.elevation,placement:"".concat(j.position===i._w.TOP?"bottom":"top","-").concat(w?"end":"start"),id:"mui-status-panel-popover-".concat(n)},{children:(0,o.jsx)(u.Z,x({onClickAway:function(t){return S(t)}},{children:(0,o.jsxs)(g,x({},{elevation:l.elevation,highlight:C.toString(),variant:j.variant.toString(),decoration:null===(e=l.hasDecoration)||void 0===e?void 0:e.toString()},{children:[(0,o.jsx)(v,x({ref:E,tabIndex:0,onKeyDown:function(t){"Escape"===t.key&&S(t)},display:"flex",alignItems:"stretch",justifyContent:"space-between",flexDirection:"column",width:l.width,height:l.height},{children:null===y||void 0===y?void 0:y.content})),l.hasToolbar&&(0,o.jsx)(c.Z,x({},{sx:{p:1},id:n,topBorder:!0,actions:y.actions,title:null===y||void 0===y?void 0:y.title}))]}))}))}))})},y=function(){return y=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},y.apply(this,arguments)},b={elevation:4,hasToolbar:!0,onClose:function(){},open:!1,hasArrow:!1,hasDecoration:!1},k={start:!1,end:!1},w=function(t){var e=t.id,n=t.order,u=t.disabled,c=t.highlight,s=void 0===c?i.y$.DEFAULT:c,d=t.options,p=t.secondary,f=void 0!==p&&p,v=t.tooltip,h=void 0===v?"":v,g=t.onClick,x=t.onContextMenu,w=t.style,j=t.className,C=t.children,S=(0,r.useState)(null),E=S[0],Z=S[1],O=(0,r.useState)(null),P=O[0],I=O[1],A=(0,r.useState)(!1),D=A[0],R=A[1],F=(0,r.useContext)(a.ZP).status,L=(0,r.useRef)(),z=y(y({},b),null===d||void 0===d?void 0:d.popper),M=y(y({},k),null===d||void 0===d?void 0:d.separators);(0,r.useEffect)((function(){var t=F.find((function(t){return t.uniqueId===e}));t&&Z(t)}),[F,e]),(0,r.useEffect)((function(){P||R(!1)}),[P]),(0,r.useEffect)((function(){(null===d||void 0===d?void 0:d.open)&&R(null===d||void 0===d?void 0:d.open)}),[d.open]),(0,r.useEffect)((function(){d.open?(null===L||void 0===L?void 0:L.current)&&I(L.current):(null===E||void 0===E?void 0:E.keepOpen)||I(null)}),[E,d]);var T=((null===E||void 0===E?void 0:E.keepOpen)||void 0!==d.open)&&d.open?s!==i.y$.DEFAULT?s:i.y$.PRIMARY:s;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,y({},{ref:L,onLoad:function(t){I(t.current)},id:e,order:n,disabled:u,tooltip:d.open?null:h,highlight:T,secondary:f,options:{separators:M,popper:y(y({},z),{hasArrow:d.open&&z.hasArrow})},onClick:function(t){(null===E||void 0===E?void 0:E.keepOpen)||(g&&g(t),I(D?null:null===t||void 0===t?void 0:t.currentTarget),R((function(t){return!t})))},onContextMenu:x,style:y(y({},w),{cursor:(null===E||void 0===E?void 0:E.keepOpen)?"not-allowed":"pointer"}),className:j},{children:C})),(0,o.jsx)(m,y({},{id:e,enrichedPopper:z,highlight:s,statusObject:E,open:D,anchorEl:P,setAnchorEl:I,options:d,secondary:f}))]})}}}]);
//# sourceMappingURL=812.dad8715c.chunk.js.map