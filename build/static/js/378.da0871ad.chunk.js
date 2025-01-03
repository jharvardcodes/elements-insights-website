"use strict";(self.webpackChunkelements_insights_website=self.webpackChunkelements_insights_website||[]).push([[378],{5378:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var n=a(5043),i=a(6240),r=a(6446),o=a(9252),s=a(5865),l=a(8903),d=a(2110),c=a(8587),m=a(8168),u=a(8387),p=a(8610),h=a(8206),g=a(4535),x=a(2532),b=a(2372);function v(e){return(0,b.Ay)("MuiCardMedia",e)}(0,x.A)("MuiCardMedia",["root","media","img"]);var y=a(579);const A=["children","className","component","image","src","style"],f=(0,g.Ay)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e,{isMediaComponent:n,isImageComponent:i}=a;return[t.root,n&&t.media,i&&t.img]}})((e=>{let{ownerState:t}=e;return(0,m.A)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),j=["video","audio","picture","iframe","img"],C=["picture","img"],w=n.forwardRef((function(e,t){const a=(0,h.b)({props:e,name:"MuiCardMedia"}),{children:n,className:i,component:r="div",image:o,src:s,style:l}=a,d=(0,c.A)(a,A),g=-1!==j.indexOf(r),x=!g&&o?(0,m.A)({backgroundImage:`url("${o}")`},l):l,b=(0,m.A)({},a,{component:r,isMediaComponent:g,isImageComponent:-1!==C.indexOf(r)}),w=(e=>{const{classes:t,isMediaComponent:a,isImageComponent:n}=e,i={root:["root",a&&"media",n&&"img"]};return(0,p.A)(i,v,t)})(b);return(0,y.jsx)(f,(0,m.A)({className:(0,u.A)(w.root,i),as:r,role:!g&&o?"img":void 0,ref:t,style:x,ownerState:b,src:g?o||s:void 0},d,{children:n}))}));var S=a(6494),$=a(3673),M=a(906),k=a(3336),z=a(8253),O=a(7266),B=a(1475),I=a(1347),W=a(9727),N=a(5013),R=a(5849);const q=(0,x.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var F=a(1424),P=a(5671);function T(e){return(0,b.Ay)("MuiMenuItem",e)}const V=(0,x.A)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),L=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],G=(0,g.Ay)(W.A,{shouldForwardProp:e=>(0,B.A)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:a}=e;return(0,m.A)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${V.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,O.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${V.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,O.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${V.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,O.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,O.X4)(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${V.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${V.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${q.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${q.inset}`]:{marginLeft:52},[`& .${P.A.root}`]:{marginTop:0,marginBottom:0},[`& .${P.A.inset}`]:{paddingLeft:36},[`& .${F.A.root}`]:{minWidth:36}},!a.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&(0,m.A)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${F.A.root} svg`]:{fontSize:"1.25rem"}}))})),D=n.forwardRef((function(e,t){const a=(0,h.b)({props:e,name:"MuiMenuItem"}),{autoFocus:i=!1,component:r="li",dense:o=!1,divider:s=!1,disableGutters:l=!1,focusVisibleClassName:d,role:g="menuitem",tabIndex:x,className:b}=a,v=(0,c.A)(a,L),A=n.useContext(I.A),f=n.useMemo((()=>({dense:o||A.dense||!1,disableGutters:l})),[A.dense,o,l]),j=n.useRef(null);(0,N.A)((()=>{i&&j.current&&j.current.focus()}),[i]);const C=(0,m.A)({},a,{dense:f.dense,divider:s,disableGutters:l}),w=(e=>{const{disabled:t,dense:a,divider:n,disableGutters:i,selected:r,classes:o}=e,s={root:["root",a&&"dense",t&&"disabled",!i&&"gutters",n&&"divider",r&&"selected"]},l=(0,p.A)(s,T,o);return(0,m.A)({},o,l)})(a),S=(0,R.A)(j,t);let $;return a.disabled||($=void 0!==x?x:-1),(0,y.jsx)(I.A.Provider,{value:f,children:(0,y.jsx)(G,(0,m.A)({ref:S,role:g,tabIndex:$,component:r,focusVisibleClassName:(0,u.A)(w.focusVisible,d),className:(0,u.A)(w.root,b)},v,{ownerState:C,classes:w}))})}));var E=a(1906),H=a(794),X=a(4194),_=a(7010);const Y=()=>{const e=(0,i.A)(),{state:t,handleSubmit:a}=(0,_.Fo)(),[o,d]=(0,n.useState)([{name:"",quantity:1}]),[c,m]=(0,n.useState)({name:"",email:"",phone:"",address:"",notes:""}),u=["Vanilla Bean & Amber","Lavender Fields","Sea Salt & Jasmine","Autumn Spice","Fresh Linen","Eucalyptus Mint"],p=(e,t,a)=>{const n=[...o];n[e]={...n[e],[t]:a},d(n)},h=(e,t)=>{m({...c,[e]:t})};return n.useEffect((()=>{t.succeeded&&(d([{name:"",quantity:1}]),m({name:"",email:"",phone:"",address:"",notes:""}))}),[t.succeeded]),(0,y.jsxs)(k.A,{elevation:3,sx:{p:4,maxWidth:800,mx:"auto",my:4},children:[(0,y.jsx)(s.A,{variant:"h4",gutterBottom:!0,color:"primary",align:"center",children:"Place Your Order"}),(0,y.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const t=o.map((e=>`${e.quantity}x ${e.name}`)).join("\n");a({orderDetails:t,...c})},children:[(0,y.jsxs)(r.A,{sx:{mb:4},children:[(0,y.jsx)(s.A,{variant:"h6",gutterBottom:!0,children:"Order Items"}),o.map(((e,t)=>(0,y.jsxs)(l.Ay,{container:!0,spacing:2,sx:{mb:2},children:[(0,y.jsx)(l.Ay,{item:!0,xs:12,sm:6,children:(0,y.jsx)(z.A,{select:!0,fullWidth:!0,label:"Candle",value:e.name,onChange:e=>p(t,"name",e.target.value),required:!0,children:u.map((e=>(0,y.jsx)(D,{value:e,children:e},e)))})}),(0,y.jsx)(l.Ay,{item:!0,xs:8,sm:4,children:(0,y.jsx)(z.A,{type:"number",fullWidth:!0,label:"Quantity",value:e.quantity,onChange:e=>p(t,"quantity",parseInt(e.target.value)),InputProps:{inputProps:{min:1}},required:!0})}),(0,y.jsx)(l.Ay,{item:!0,xs:4,sm:2,children:o.length>1&&(0,y.jsx)(E.A,{variant:"outlined",color:"error",onClick:()=>(e=>{const t=o.filter(((t,a)=>a!==e));d(t)})(t),fullWidth:!0,sx:{height:"100%"},children:"Remove"})})]},t))),(0,y.jsx)(E.A,{variant:"outlined",onClick:()=>{d([...o,{name:"",quantity:1}])},sx:{mt:1},children:"Add Another Item"})]}),(0,y.jsxs)(r.A,{sx:{mb:4},children:[(0,y.jsx)(s.A,{variant:"h6",gutterBottom:!0,children:"Contact Information"}),(0,y.jsxs)(l.Ay,{container:!0,spacing:2,children:[(0,y.jsx)(l.Ay,{item:!0,xs:12,sm:6,children:(0,y.jsx)(z.A,{fullWidth:!0,label:"Name",value:c.name,onChange:e=>h("name",e.target.value),required:!0})}),(0,y.jsx)(l.Ay,{item:!0,xs:12,sm:6,children:(0,y.jsx)(z.A,{fullWidth:!0,label:"Email",type:"email",value:c.email,onChange:e=>h("email",e.target.value),required:!0})}),(0,y.jsx)(l.Ay,{item:!0,xs:12,sm:6,children:(0,y.jsx)(z.A,{fullWidth:!0,label:"Phone",value:c.phone,onChange:e=>h("phone",e.target.value),required:!0})}),(0,y.jsx)(l.Ay,{item:!0,xs:12,children:(0,y.jsx)(z.A,{fullWidth:!0,label:"Shipping Address",multiline:!0,rows:2,value:c.address,onChange:e=>h("address",e.target.value),required:!0})}),(0,y.jsx)(l.Ay,{item:!0,xs:12,children:(0,y.jsx)(z.A,{fullWidth:!0,label:"Additional Notes",multiline:!0,rows:3,value:c.notes,onChange:e=>h("notes",e.target.value)})})]})]}),(0,y.jsx)(r.A,{sx:{textAlign:"center"},children:(0,y.jsx)(E.A,{type:"submit",variant:"contained",color:"primary",size:"large",disabled:t.submitting,sx:{px:6,py:1.5,fontSize:"1.1rem","&:hover":{transform:"translateY(-2px)",boxShadow:e.shadows[4]}},children:t.submitting?"Submitting...":"Submit Order"})})]}),(0,y.jsx)(H.A,{open:t.succeeded,autoHideDuration:6e3,onClose:()=>null,children:(0,y.jsx)(X.A,{severity:"success",sx:{width:"100%"},children:"Order submitted successfully! We will contact you soon."})})]})},J=[{id:1,name:"Vanilla Bean & Amber",description:"A warm, inviting blend of Madagascar vanilla bean and rich amber, creating a cozy atmosphere perfect for relaxation.",image:"/images/candles/vanilla-amber.jpg",price:"$28.99",burnTime:"45-50 hours",size:"9 oz"},{id:2,name:"Lavender Fields",description:"Transport yourself to the rolling lavender fields of Provence with this calming blend of fresh lavender and sweet herbs.",image:"/images/candles/lavender-fields.jpg",price:"$28.99",burnTime:"45-50 hours",size:"9 oz"},{id:3,name:"Sea Salt & Jasmine",description:"A fresh, floral combination of ocean breeze, sea salt, and delicate jasmine blooms. Perfect for creating a spa-like atmosphere.",image:"/images/candles/sea-salt-jasmine.jpg",price:"$28.99",burnTime:"45-50 hours",size:"9 oz"},{id:4,name:"Autumn Spice",description:"Warm cinnamon, nutmeg, and clove blend with vanilla to create the perfect cozy fall atmosphere.",image:"/images/candles/autumn-spice.jpg",price:"$28.99",burnTime:"45-50 hours",size:"9 oz"},{id:5,name:"Fresh Linen",description:"Clean and crisp notes of fresh cotton, warm sunshine, and gentle breeze. Like freshly dried linens on a spring day.",image:"/images/candles/fresh-linen.jpg",price:"$28.99",burnTime:"45-50 hours",size:"9 oz"},{id:6,name:"Eucalyptus Mint",description:"Refreshing blend of eucalyptus and spearmint, perfect for creating an invigorating and uplifting atmosphere.",image:"/images/candles/eucalyptus-mint.jpg",price:"$28.99",burnTime:"45-50 hours",size:"9 oz"}],Q=()=>{const e=(0,i.A)();(0,M.Zp)();return(0,y.jsxs)(r.A,{children:[(0,y.jsx)(r.A,{component:$.P.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},sx:{bgcolor:"background.paper",pt:8,pb:6,background:`linear-gradient(to bottom, ${e.palette.primary.main}20, ${e.palette.background.default})`},children:(0,y.jsxs)(o.A,{maxWidth:"lg",children:[(0,y.jsx)(s.A,{component:"h1",variant:"h2",align:"center",color:"primary",gutterBottom:!0,sx:{fontWeight:600,textShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:"Luxury Handcrafted Candles"}),(0,y.jsx)(s.A,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,sx:{mb:4,maxWidth:"800px",mx:"auto"},children:"Experience the perfect blend of aromatherapy and ambiance with our premium soy wax candles. Each candle is hand-poured with care to create a long-lasting, clean burn."})]})}),(0,y.jsxs)(o.A,{maxWidth:"lg",sx:{py:8},children:[(0,y.jsx)(l.Ay,{container:!0,spacing:4,children:J.map(((t,a)=>(0,y.jsx)(l.Ay,{item:!0,xs:12,sm:6,md:4,component:$.P.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*a},children:(0,y.jsxs)(d.A,{sx:{height:"100%",display:"flex",flexDirection:"column",transition:"all 0.2s ease-in-out","&:hover":{transform:"translateY(-4px)",boxShadow:e.shadows[4]}},children:[(0,y.jsx)(w,{component:"img",height:"300",image:t.image,alt:t.name,sx:{objectFit:"cover",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"}}),(0,y.jsxs)(S.A,{sx:{flexGrow:1},children:[(0,y.jsx)(s.A,{gutterBottom:!0,variant:"h5",component:"h2",children:t.name}),(0,y.jsx)(s.A,{variant:"body2",color:"text.secondary",paragraph:!0,children:t.description}),(0,y.jsxs)(r.A,{sx:{mt:2},children:[(0,y.jsxs)(s.A,{variant:"body2",color:"text.secondary",children:["Size: ",t.size]}),(0,y.jsxs)(s.A,{variant:"body2",color:"text.secondary",children:["Burn Time: ",t.burnTime]}),(0,y.jsx)(s.A,{variant:"h6",color:"primary",sx:{mt:1},children:t.price})]})]})]})},t.id)))}),(0,y.jsxs)(r.A,{sx:{mt:8,mb:6,textAlign:"center"},children:[(0,y.jsx)(s.A,{variant:"h4",color:"primary",gutterBottom:!0,children:"About Our Candles"}),(0,y.jsxs)(l.Ay,{container:!0,spacing:4,sx:{mt:2},children:[(0,y.jsxs)(l.Ay,{item:!0,xs:12,md:4,children:[(0,y.jsx)(s.A,{variant:"h6",gutterBottom:!0,children:"Premium Soy Wax"}),(0,y.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"Made with 100% natural soy wax for a clean, long-lasting burn"})]}),(0,y.jsxs)(l.Ay,{item:!0,xs:12,md:4,children:[(0,y.jsx)(s.A,{variant:"h6",gutterBottom:!0,children:"Hand-Poured"}),(0,y.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"Each candle is carefully crafted by hand in small batches"})]}),(0,y.jsxs)(l.Ay,{item:!0,xs:12,md:4,children:[(0,y.jsx)(s.A,{variant:"h6",gutterBottom:!0,children:"Premium Fragrances"}),(0,y.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"High-quality fragrance oils for the perfect scent throw"})]})]})]}),(0,y.jsxs)(r.A,{sx:{mt:8,textAlign:"center",p:6,borderRadius:2,bgcolor:"background.paper",boxShadow:1},children:[(0,y.jsx)(s.A,{variant:"h4",color:"primary",gutterBottom:!0,children:"Ready to Order?"}),(0,y.jsx)(s.A,{variant:"body1",color:"text.secondary",paragraph:!0,sx:{mb:4,maxWidth:"600px",mx:"auto"},children:"Fill out the order form below and we'll get back to you with confirmation and payment details."}),(0,y.jsx)(Y,{})]})]})]})}},7010:(e,t,a)=>{a.d(t,{Fo:()=>o,Nh:()=>i,qF:()=>r});var n=a(2);const i=()=>{const[e,t]=(0,n.mN)("xyzyljpv");return{state:e,handleSubmit:t}},r=()=>{const[e,t]=(0,n.mN)("xeoqvkzb");return{state:e,handleSubmit:t}},o=()=>{const[e,t]=(0,n.mN)("xkggpoqp");return{state:e,handleSubmit:t}}},6494:(e,t,a)=>{a.d(t,{A:()=>x});var n=a(8168),i=a(8587),r=a(5043),o=a(8387),s=a(8610),l=a(4535),d=a(8206),c=a(2532),m=a(2372);function u(e){return(0,m.Ay)("MuiCardContent",e)}(0,c.A)("MuiCardContent",["root"]);var p=a(579);const h=["className","component"],g=(0,l.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),x=r.forwardRef((function(e,t){const a=(0,d.b)({props:e,name:"MuiCardContent"}),{className:r,component:l="div"}=a,c=(0,i.A)(a,h),m=(0,n.A)({},a,{component:l}),x=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},u,t)})(m);return(0,p.jsx)(g,(0,n.A)({as:l,className:(0,o.A)(x.root,r),ownerState:m,ref:t},c))}))}}]);
//# sourceMappingURL=378.da0871ad.chunk.js.map