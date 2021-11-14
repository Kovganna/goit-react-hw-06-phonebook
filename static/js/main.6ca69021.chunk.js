(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter__container:"Filter_filter__container__1NJjO",filter__input:"Filter_filter__input__20JXL"}},17:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},26:function(t,e,n){},27:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),i=n.n(r),o=(n(26),n(27),n(15)),s=n(3),u=function(t){return t.contacts.contactList},b=n(4),l=Object(b.b)("contact/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(b.d)(),name:e,number:n}}})),d=Object(b.b)("contact/delete"),_=Object(b.b)("contact/filter"),m=n(6),j=n.n(m),p=n(1);function O(){var t=Object(a.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),b=i[0],d=i[1],_=Object(s.c)(u),m=Object(s.b)();console.log(_);var O=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":d(a);break;default:return}},f=function(){c(""),d("")};return Object(p.jsx)("div",{className:j.a.contact__form,children:Object(p.jsxs)("form",{className:j.a.input__form,onSubmit:function(t){t.preventDefault(),_.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):m(l({name:n,number:b})),f()},children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{className:j.a.input__title,children:"Name"}),Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:j.a.input__name,value:n,onChange:O})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{className:j.a.input__title,children:"Number"}),Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:j.a.input__number,value:b,onChange:O})]}),Object(p.jsx)("button",{type:"submit",className:j.a.btn__add,children:"Add contact"})]})})}n(11),n(8);function f(){return Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(O,{}),Object(p.jsx)("h2",{children:"Contacts"})]})}var h,x=n(2),v=n(12),C=n(21),N=n(17),g=Object(b.c)(N,(h={},Object(v.a)(h,l,(function(t,e){var n=e.payload;return[].concat(Object(C.a)(t),[n])})),Object(v.a)(h,d,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),h)),y=Object(b.c)("",Object(v.a)({},_,(function(t,e){return e.payload}))),k=n(18),F=n.n(k),w=n(5),A=n(19),J={key:"contacts",version:1,storage:n.n(A).a,blacklist:["contactFilter"]},L=Object(x.b)({contactList:g,contactFilter:y}),S=Object(b.a)({reducer:{contacts:Object(w.g)(J,L)},middleware:function(t){return t({serializableCheck:{ignoredActions:[w.a,w.f,w.b,w.c,w.d,w.e]}}).concat(F.a)}}),z=Object(w.h)(S),E=n(20);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(E.a,{persistor:z,loading:null,children:Object(p.jsx)(s.a,{store:S,children:Object(p.jsx)(f,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={contact__form:"ContactForm_contact__form__EsFOx",input__number:"ContactForm_input__number__5vJmE",input__name:"ContactForm_input__name__2ovuN",input__title:"ContactForm_input__title__3lRHV",btn__add:"ContactForm_btn__add__3rVy7"}},8:function(t,e,n){t.exports={item:"ContactList_item__1bT_E"}}},[[38,1,2]]]);
//# sourceMappingURL=main.6ca69021.chunk.js.map