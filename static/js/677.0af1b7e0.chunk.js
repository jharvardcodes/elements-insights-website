"use strict";(self.webpackChunkelements_insights_website=self.webpackChunkelements_insights_website||[]).push([[677],{7677:(e,a,t)=>{t.r(a),t.d(a,{default:()=>M});var l=t(5043),n=t(5865),i=t(9413),o=t(8577),r=t(1962),s=t(6446),c=t(9070),m=t(1664),u=t(6374),d=t(8253),h=t(9252),x=t(3336),g=t(6839),v=t(5078),b=t(2299),p=t(1906),y=t(1637),f=t(794),j=t(4194),A=t(3673),k=t(3546),C=t(7010),S=t(579);const w={needs:[],employeeCount:1,projectsPerMonth:1,challenges:[],timeline:"",currentSoftware:"",socialMedia:{facebook:"",instagram:"",linkedin:"",twitter:"",website:""},budget:"",availability:"",contactName:"",contactEmail:"",contactPhone:"",additionalInfo:""},M=()=>{const[e,a]=l.useState(0),[t,M]=l.useState(w),{state:W,handleSubmit:P}=(0,C.Nh)(),[B,I]=l.useState({open:!1,message:"",severity:"success"}),N=[{label:"Needs",content:(0,S.jsxs)(A.P.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},children:[(0,S.jsx)(n.A,{variant:"h6",gutterBottom:!0,children:"What are your needs?"}),(0,S.jsx)(i.A,{children:[{label:"Abatements",value:"abatements"},{label:"Permits & Licensing",value:"permits-licensing"},{label:"Office Support",value:"office-support"}].map((e=>(0,S.jsx)(o.A,{control:(0,S.jsx)(r.A,{checked:t.needs.includes(e.value),onChange:a=>{const l=a.target.checked?[...t.needs,e.value]:t.needs.filter((a=>a!==e.value));M({...t,needs:l})}}),label:e.label},e.value)))}),(0,S.jsx)(n.A,{variant:"h6",gutterBottom:!0,sx:{mt:4},children:"How many employees do you have?"}),(0,S.jsx)(s.A,{sx:{px:{xs:3,sm:5},mt:4,mb:2},children:(0,S.jsx)(c.Ay,{value:t.employeeCount,onChange:(e,a)=>M({...t,employeeCount:a}),min:1,max:20,marks:[{value:1,label:"1"},{value:5,label:"5"},{value:10,label:"10"},{value:20,label:"20"}],sx:{"& .MuiSlider-markLabel":{fontSize:"1rem",fontWeight:500},"& .MuiSlider-mark":{backgroundColor:"#fff",height:8,width:1,"&.MuiSlider-markActive":{opacity:1,backgroundColor:"currentColor"}}}})}),(0,S.jsx)(n.A,{variant:"h6",gutterBottom:!0,sx:{mt:4},children:"How many projects do you have per month?"}),(0,S.jsx)(s.A,{sx:{px:{xs:3,sm:5},mt:4,mb:2},children:(0,S.jsx)(c.Ay,{value:t.projectsPerMonth,onChange:(e,a)=>M({...t,projectsPerMonth:a}),min:1,max:20,marks:[{value:1,label:"1"},{value:5,label:"5"},{value:10,label:"10"},{value:20,label:"20"}],sx:{"& .MuiSlider-markLabel":{fontSize:"1rem",fontWeight:500},"& .MuiSlider-mark":{backgroundColor:"#fff",height:8,width:1,"&.MuiSlider-markActive":{opacity:1,backgroundColor:"currentColor"}}}})})]})},{label:"Challenges",content:(0,S.jsxs)(A.P.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},children:[(0,S.jsx)(n.A,{variant:"h6",gutterBottom:!0,children:"What challenges are you currently facing?"}),(0,S.jsx)(n.A,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Select all that apply"}),(0,S.jsx)(i.A,{children:[{label:"Abatements",value:"abatements"},{label:"Permits",value:"permits"},{label:"Licensing",value:"licensing"},{label:"Employee Turnover",value:"employee-turnover"},{label:"Office Support",value:"office-support"},{label:"Eviction Filing/Court",value:"eviction"},{label:"Task Management",value:"task-management"}].map((e=>(0,S.jsx)(o.A,{control:(0,S.jsx)(r.A,{checked:t.challenges.includes(e.value),onChange:a=>{const l=a.target.checked?[...t.challenges,e.value]:t.challenges.filter((a=>a!==e.value));M({...t,challenges:l})}}),label:e.label},e.value)))}),(0,S.jsx)(n.A,{variant:"h6",gutterBottom:!0,sx:{mt:4},children:"What's your desired timeline for resolving these challenges?"}),(0,S.jsx)(m.A,{value:t.timeline,onChange:e=>M({...t,timeline:e.target.value}),children:[{label:"Immediate (within 1 month)",value:"immediate"},{label:"Short-term (1-3 months)",value:"short"},{label:"Medium-term (3-6 months)",value:"medium"},{label:"Long-term (6+ months)",value:"long"}].map((e=>(0,S.jsx)(o.A,{value:e.value,control:(0,S.jsx)(u.A,{}),label:e.label},e.value)))})]})},{label:"Software & Social Media",content:(0,S.jsxs)(A.P.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},children:[(0,S.jsx)(n.A,{variant:"h6",gutterBottom:!0,children:"What software are you currently using?"}),(0,S.jsx)(d.A,{fullWidth:!0,label:"Software",value:t.currentSoftware,onChange:e=>M({...t,currentSoftware:e.target.value}),margin:"normal"}),(0,S.jsx)(n.A,{variant:"h6",gutterBottom:!0,sx:{mt:4},children:"What are your social media profiles?"}),(0,S.jsxs)(s.A,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,S.jsx)(d.A,{fullWidth:!0,label:"Facebook",InputProps:{startAdornment:(0,S.jsx)(n.A,{color:"text.secondary",sx:{mr:1},children:"facebook.com/"})},value:t.socialMedia.facebook,onChange:e=>M({...t,socialMedia:{...t.socialMedia,facebook:e.target.value}}),placeholder:"your.page.name",margin:"normal"}),(0,S.jsx)(d.A,{fullWidth:!0,label:"Instagram",InputProps:{startAdornment:(0,S.jsx)(n.A,{color:"text.secondary",sx:{mr:1},children:"instagram.com/"})},value:t.socialMedia.instagram,onChange:e=>M({...t,socialMedia:{...t.socialMedia,instagram:e.target.value}}),placeholder:"your.handle",margin:"normal"}),(0,S.jsx)(d.A,{fullWidth:!0,label:"LinkedIn",InputProps:{startAdornment:(0,S.jsx)(n.A,{color:"text.secondary",sx:{mr:1},children:"linkedin.com/company/"})},value:t.socialMedia.linkedin,onChange:e=>M({...t,socialMedia:{...t.socialMedia,linkedin:e.target.value}}),placeholder:"your-company-name",margin:"normal"}),(0,S.jsx)(d.A,{fullWidth:!0,label:"Twitter/X",InputProps:{startAdornment:(0,S.jsx)(n.A,{color:"text.secondary",sx:{mr:1},children:"twitter.com/"})},value:t.socialMedia.twitter,onChange:e=>M({...t,socialMedia:{...t.socialMedia,twitter:e.target.value}}),placeholder:"your_handle",margin:"normal"}),(0,S.jsx)(d.A,{fullWidth:!0,label:"Website",InputProps:{startAdornment:(0,S.jsx)(n.A,{color:"text.secondary",sx:{mr:1},children:"https://"})},value:t.socialMedia.website,onChange:e=>M({...t,socialMedia:{...t.socialMedia,website:e.target.value}}),placeholder:"your-website.com",margin:"normal"})]})]})},{label:"Budget & Availability",content:(0,S.jsxs)(A.P.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},children:[(0,S.jsx)(n.A,{variant:"h6",gutterBottom:!0,children:"What's your estimated budget for professional services?"}),(0,S.jsx)(d.A,{fullWidth:!0,label:"Budget",value:t.budget,onChange:e=>M({...t,budget:e.target.value}),margin:"normal"}),(0,S.jsx)(n.A,{variant:"h6",gutterBottom:!0,sx:{mt:4},children:"What's your availability for a consultation?"}),(0,S.jsx)(d.A,{fullWidth:!0,label:"Availability",value:t.availability,onChange:e=>M({...t,availability:e.target.value}),margin:"normal"})]})},{label:"Contact Information",content:(0,S.jsxs)(A.P.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},children:[(0,S.jsx)(n.A,{variant:"h6",gutterBottom:!0,children:"Please provide your contact information"}),(0,S.jsx)(d.A,{fullWidth:!0,label:"Name",value:t.contactName,onChange:e=>M({...t,contactName:e.target.value}),margin:"normal",required:!0}),(0,S.jsx)(d.A,{fullWidth:!0,label:"Email",type:"email",value:t.contactEmail,onChange:e=>M({...t,contactEmail:e.target.value}),margin:"normal",required:!0}),(0,S.jsx)(d.A,{fullWidth:!0,label:"Phone",value:t.contactPhone,onChange:e=>M({...t,contactPhone:e.target.value}),margin:"normal",required:!0}),(0,S.jsx)(d.A,{fullWidth:!0,label:"Additional Information",multiline:!0,rows:4,value:t.additionalInfo,onChange:e=>M({...t,additionalInfo:e.target.value}),margin:"normal"})]})}];return(0,S.jsxs)(h.A,{maxWidth:"lg",sx:{py:4},children:[(0,S.jsxs)(x.A,{component:"form",onSubmit:async e=>{e.preventDefault();try{const e={...t,needs:t.needs.join(", "),challenges:t.challenges.join(", ")};await P(e),W.succeeded&&(I({open:!0,message:"Thank you! Your consultation request has been sent successfully.",severity:"success"}),M(w),a(0))}catch(l){I({open:!0,message:"Sorry, there was an error sending your request. Please try again.",severity:"error"})}},elevation:3,sx:{p:{xs:2,md:4}},children:[(0,S.jsx)(n.A,{variant:"h4",component:"h1",gutterBottom:!0,align:"center",sx:{fontSize:{xs:"1.75rem",sm:"2rem",md:"2.125rem"}},children:"Book a Consultation"}),(0,S.jsx)(n.A,{variant:"body1",color:"text.secondary",paragraph:!0,align:"center",sx:{px:{xs:0,sm:2}},children:"Let's understand your needs better to provide the most effective solutions for your property management challenges."}),(0,S.jsx)(g.A,{activeStep:e,sx:{my:{xs:2,sm:3,md:4},"& .MuiStepLabel-label":{fontSize:{xs:"0.75rem",sm:"0.875rem"}},"& .MuiSvgIcon-root":{width:{xs:24,sm:32},height:{xs:24,sm:32}}},alternativeLabel:!0,children:N.map((e=>(0,S.jsx)(v.A,{children:(0,S.jsx)(b.A,{children:e.label})},e.label)))}),(0,S.jsx)(s.A,{sx:{mt:4,minHeight:"300px",overflowX:"hidden"},children:(0,S.jsx)(k.N,{mode:"wait",children:N[e].content})}),(0,S.jsxs)(s.A,{sx:{display:"flex",justifyContent:"flex-end",mt:3,gap:2},children:[e>0&&(0,S.jsx)(p.A,{onClick:()=>{a((e=>e-1))},sx:{mr:1},children:"Back"}),e===N.length-1?(0,S.jsx)(p.A,{variant:"contained",type:"submit",disabled:W.submitting,startIcon:W.submitting?(0,S.jsx)(y.A,{size:20}):void 0,children:W.submitting?"Submitting...":"Submit"}):(0,S.jsx)(p.A,{variant:"contained",onClick:()=>{a((e=>e+1))},children:"Next"})]})]}),(0,S.jsx)(f.A,{open:B.open,autoHideDuration:6e3,onClose:()=>I({...B,open:!1}),children:(0,S.jsx)(j.A,{severity:B.severity,onClose:()=>I({...B,open:!1}),children:B.message})})]})}},7010:(e,a,t)=>{t.d(a,{Fo:()=>o,Nh:()=>n,qF:()=>i});var l=t(2);const n=()=>{const[e,a]=(0,l.mN)("xyzyljpv");return{state:e,handleSubmit:a}},i=()=>{const[e,a]=(0,l.mN)("xeoqvkzb");return{state:e,handleSubmit:a}},o=()=>{const[e,a]=(0,l.mN)("xkggpoqp");return{state:e,handleSubmit:a}}}}]);
//# sourceMappingURL=677.0af1b7e0.chunk.js.map