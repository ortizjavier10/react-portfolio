(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/javier.784f200c.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),i=(a(10),a(1));var m=function(){return l.a.createElement("section",{class:"page-section",id:"about"},l.a.createElement("h2",null,"About Me"),l.a.createElement("div",null,l.a.createElement("img",{class:"profile-picture",src:a(11),alt:"Javier Ortiz wearing a suit"}),l.a.createElement("p",null,"My name is Javier Ortiz, I'm 30, and I'm a Full-Stack Web Developer. 10 years of IT experience."),l.a.createElement("p",null,"Currently work as a Sr. Systems Admin for Airborne Maintenance and Engineering Services."),l.a.createElement("p",null,"If I'm not hanging out at the beach or kayaking in the springs I enjoy hanging out at home by the pool with my wife, \ud83d\ude38 Pernicus, and \ud83d\udc36 Riley.")))},o=a(4);var u=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),m=Object(i.a)(c,2),u=m[0],s=m[1],E=a.name,d=a.email,h=a.message,p=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);s(t?"":"Your email is invalid.")}else e.target.value.length?s(""):s("".concat(e.target.name," is required."))};return l.a.createElement("section",{className:"form-wrapper page-section"},l.a.createElement("h2",null,"Contact me"),l.a.createElement("div",{className:"form"},l.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),u||(r(Object(o.a)({},e.target.name,e.target.value)),console.log("Form",a))}},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Name:"),l.a.createElement("input",{type:"text",name:"name",defaultValue:E,onBlur:p})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email address:"),l.a.createElement("input",{type:"email",name:"email",defaultValue:d,onBlur:p})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"message"},"Message:"),l.a.createElement("textarea",{name:"message",rows:"5",defaultValue:h,onBlur:p})),u&&l.a.createElement("div",null,l.a.createElement("p",{className:"error-text"},u)),l.a.createElement("button",{"data-testid":"button",type:"submit"},"Submit"))))};var s=function(){return l.a.createElement("section",{class:"page-section",id:"work"},l.a.createElement("h2",null,"Projects"),l.a.createElement("div",{class:"grid-container"},l.a.createElement("a",{href:"https://nameless-river-82781.herokuapp.com/login",class:"grid-item minnow"},l.a.createElement("div",null,l.a.createElement("h3",null,"Minnow"),l.a.createElement("span",null,"JavaScript/Handlebard/MYSQL"))),l.a.createElement("a",{href:"https://codyrobbins99.github.io/project-gemini-forecast/index.html",class:"grid-item project-gemini"},l.a.createElement("div",null,l.a.createElement("h3",null,"Project Gemini"),l.a.createElement("span",null,"JavaScript/HTML/CSS"))),l.a.createElement("a",{href:"https://intense-island-01116.herokuapp.com/",class:"grid-item budget-tracker"},l.a.createElement("div",null,l.a.createElement("h3",null,"Budget-Tracker"),l.a.createElement("span",null,"JavaScript/HTML/CSS"))),l.a.createElement("a",{href:"https://ortizjavier10.github.io/run-buddy/",class:"grid-item run-buddy"},l.a.createElement("div",null,l.a.createElement("h3",null,"Run Buddy"),l.a.createElement("span",null,"HTML/CSS"))),l.a.createElement("a",{href:"https://ortizjavier10.github.io/horiseon-social-solution-services-website/",class:"grid-item horiseon"},l.a.createElement("div",null,l.a.createElement("h3",null,"Horiseon"),l.a.createElement("span",null,"HTML/CSS")))))};var E=function(){return l.a.createElement("section",{className:"resume-section page-section"},l.a.createElement("h2",null,"Resume"),l.a.createElement("div",null,l.a.createElement("p",null,"Download my ",l.a.createElement("a",{href:"https://drive.google.com/file/d/1IYfqmPb1yRYdyvRK4lhf7jhXD-O5F8Q1/view?usp=sharing"},"resume ")),l.a.createElement("h2",null,"Front-End"),l.a.createElement("ul",null,l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"jQuery"),l.a.createElement("li",null)),l.a.createElement("h2",null,"Back-End"),l.a.createElement("ul",null,l.a.createElement("li",null,"Nodejs"),l.a.createElement("li",null,"MongoDB"),l.a.createElement("li",null,"MySQL"),l.a.createElement("li",null,"Express"))))};var d=function(e){return l.a.createElement("header",null,l.a.createElement("li",null,l.a.createElement("h1",null,"Javier")),l.a.createElement("nav",null,["About","Contact","Portfolio","Resume"].map((function(t){return l.a.createElement("li",{key:t},l.a.createElement("a",{href:"#"+t,onClick:function(){return e.setCurrentTab(t)},className:".."},t))}))))};var h=function(){return l.a.createElement("footer",null,l.a.createElement("section",{className:"page-section contact",id:"contact"},l.a.createElement("div",null,l.a.createElement("address",{className:"address"},l.a.createElement("a",{class:"email",href:"mailto:ortiz.javier10@gmail.com"},"  Email "),l.a.createElement("a",{class:"github",href:"https://github.com/ortizjavier10"},"GitHub"),l.a.createElement("a",{class:"linkedin",href:"https://www.linkedin.com/in/javier-ortiz-7510b6132/"},"LinkedIn"),l.a.createElement("a",{class:"twitter",href:"https://twitter.com/JaviXavi"},"twitter")))))};var p=function(){var e=Object(n.useState)("About"),t=Object(i.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:".."},l.a.createElement(d,{currentTab:a,setCurrentTab:r}),l.a.createElement("div",null,function(){switch(a){case"About":return l.a.createElement(m,null);case"Contact":return l.a.createElement(u,null);case"Portfolio":return l.a.createElement(s,null);case"Resume":return l.a.createElement(E,null);default:return l.a.createElement(m,null)}}()),l.a.createElement("main",null),l.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.39811bcf.chunk.js.map