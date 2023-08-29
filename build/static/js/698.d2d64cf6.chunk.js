"use strict";(self.webpackChunkmui_status_helper=self.webpackChunkmui_status_helper||[]).push([[698],{2705:function(t,e,n){var r=n(4836);e.Z=void 0;var o=r(n(5649)),i=n(184),a=(0,o.default)((0,i.jsx)("path",{d:"m7 10 5 5 5-5H7z"}),"ArrowDropDownOutlined");e.Z=a},1438:function(t,e,n){var r=n(4836);e.Z=void 0;var o=r(n(5649)),i=n(184),a=(0,o.default)((0,i.jsx)("path",{d:"m7 14 5-5 5 5H7z"}),"ArrowDropUpOutlined");e.Z=a},3698:function(t,e,n){n.r(e),n.d(e,{StatusCore:function(){return S},default:function(){return k}});var r=n(184),o=n(5814),i=n(2791),a=n(4164),u=n(5782),l=n(6943),s=n(2705),c=n(1438),d=n(6863),f=function(t,e){switch(e){case"primary":return t.palette.primary.main;case"secondary":return t.palette.secondary.main;default:return""}},p=function(t,e){switch(e){case"primary":return t.palette.primary.dark;case"secondary":return t.palette.secondary.dark;default:return t.palette.divider}},v=function(t,e,n){return"false"===n&&"true"===t||"true"===n&&"true"===e},h=function(t,e,n){return"false"===n&&"true"===e||"true"===n&&"true"===t},x=(0,d.ZP)("span")((function(t){var e=t.theme;return{padding:"1px 10px",display:"flex",flexWrap:"nowrap",alignItems:"stretch",fontSize:"14px",gap:"".concat(e.spacing(.5)),"& > *":{fontSize:"14px !important"}}})),g=((0,d.ZP)(s.Z)((function(t){var e=t.position;return{position:"absolute",zIndex:102,bottom:"top"!==e?"-10px":"unset",top:"top"===e?"16px":"unset"}})),(0,d.ZP)("div")((function(){return{fontSize:"13px",display:"flex",flexWrap:"nowrap",gap:"8px",alignItems:"center",maxHeight:"300px",overflow:"scroll"}}))),m=((0,d.ZP)(c.Z)((function(){return{position:"absolute",bottom:"unset",top:"-14px",zIndex:102}})),(0,d.ZP)("div")((function(t){var e=t.theme,n=t.secondary,r=t.hasclick,o=t.highlight,i=t.startSeparator,a=t.endSeparator,u=t.isdisabled;return{WebkitFontSmoothing:"auto",height:"100%",display:"flex",flex:"0 0 auto",flexDirection:"row",alignItems:"stretch",gap:"16px",justifyContent:"center",alignSelf:"center",position:"relative",borderLeft:v(i,a,n)?"1px solid ".concat(e.palette.divider):"none",borderRight:h(i,a,n)?"1px solid ".concat(e.palette.divider):"none",cursor:"true"===r&&"false"===u?"pointer":"",backgroundColor:f(e,o),color:e.palette.text.primary,"& > div > *":{color:"default"!==o?"".concat(e.palette.background.default," !important"):""},"& > span > div > *":{color:"default"!==o?"".concat(e.palette.background.default," !important"):""},"&:hover":"true"===r&&"false"===u?{backgroundColor:p(e,o),color:"".concat(e.palette.text.primary)}:{}}}))),y=function(){return y=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},y.apply(this,arguments)},b={start:!1,end:!1},S=(0,i.forwardRef)((function(t,e){var n,s,c=t,d=c.id,f=c.order,p=c.style,v=c.onClick,h=c.onContextMenu,S=c.disabled,k=void 0!==S&&S,w=c.highlight,C=void 0===w?u.y$.DEFAULT:w,Z=c.tooltip,j=c.children,P=c.options,E=c.secondary,I=void 0!==E&&E,z=c.onLoad,D=void 0===z?function(){}:z,O=(0,i.useContext)(l.ZP),_=O.status,A=O.handleStatusAnnouncement,L=(0,i.useContext)(l.ZP).settings.allowRightClick,F=(0,i.useState)(),H=F[0],M=F[1],R=(0,i.useState)(null),W=R[0],q=R[1],B=(0,i.useState)(null),U=B[0],T=B[1],$=y(y({},b),null===P||void 0===P?void 0:P.separators),G=(0,i.useCallback)((function(){A({id:d,ownId:H,options:P})}),[d,H,P,A]);return(0,i.useEffect)((function(){d&&H&&null===W&&!_.some((function(t){return t.uniqueId===d}))&&G()}),[d,H,W,_,G]),(0,i.useEffect)((function(){var t=_.find((function(t){return t.uniqueId===d}));null!==W&&(null===W||void 0===W?void 0:W.visible)===(null===t||void 0===t?void 0:t.visible)||!t||q(t)}),[_,d,W]),(0,i.useLayoutEffect)((function(){null!==W&&T(document.getElementById((0,l._j)("statusBar",[I?"secondary":"primary"]))||null)}),[I,W]),(0,i.useEffect)((function(){M((Math.random()+1).toString(36).substring(7))}),[]),(0,i.useEffect)((function(){d||console.error("Please define an id for the status bar item")}),[d]),(0,i.useEffect)((function(){return function(){}}),[]),(0,i.useEffect)((function(){null!==W&&d&&U&&D(e)}),[W,d,U,e,D]),(0,r.jsx)(r.Fragment,{children:null!==W&&!!d&&U&&(0,a.createPortal)(W.visible&&j&&(0,r.jsx)(m,y({},{id:d,ref:e,key:"mui-status-".concat(d),onClick:function(t){void 0===v||k||(t.preventDefault(),v(t))},onContextMenu:function(t){t.preventDefault(),L&&void 0!==h&&!k&&h(t)},style:y(y({},p),{order:f||W.index}),highlight:C,secondary:I.toString(),startSeparator:null===(n=$.start)||void 0===n?void 0:n.toString(),endSeparator:null===(s=$.end)||void 0===s?void 0:s.toString(),hasclick:(!!v).toString(),isdisabled:k.toString()},{children:Z?(0,r.jsx)(o.Z,y({title:(0,r.jsx)(g,{children:Z}),arrow:!0},{children:(0,r.jsx)(x,{children:j})})):(0,r.jsx)(x,{children:j})})),U)})})),k=S}}]);
//# sourceMappingURL=698.d2d64cf6.chunk.js.map