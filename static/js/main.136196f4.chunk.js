(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},13:function(t,e,n){t.exports={filter__container:"Filter_filter__container__1NJjO",filter__input:"Filter_filter__input__20JXL"}},21:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(9),i=n.n(r),o=(n(21),n(3)),s=n(12),u=n(6),l=(n(28),n(32)),b=n(4),d=Object(b.b)("contact/add"),m=Object(b.b)("contact/delete"),j=Object(b.b)("contact/filter"),_=n(5),f=n.n(_),O=n(1);var p=Object(o.b)(null,(function(t){return{onnAdd:function(e){return t(d(e))}}}))((function(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(""),b=Object(u.a)(s,2),m=b[0],j=b[1],_=Object(o.c)(),p=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":i(c);break;case"number":j(c);break;default:return}},h=function(){i(""),j("")};return Object(O.jsx)("div",{className:f.a.contact__form,children:Object(O.jsxs)("form",{className:f.a.input__form,onSubmit:function(t){t.preventDefault();var n={id:Object(l.a)(),name:r,number:m};e(n),_(d(n)),h()},children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{className:f.a.input__title,children:"Name"}),Object(O.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:f.a.input__name,value:r,onChange:p})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{className:f.a.input__title,children:"Number"}),Object(O.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:f.a.input__number,value:m,onChange:p})]}),Object(O.jsx)("button",{type:"submit",className:f.a.btn__add,children:"Add contact"})]})})})),h=n(13),x=n.n(h),v=function(t){var e=t.filter,n=t.onChange;return Object(O.jsx)("div",{className:x.a.filter__container,children:Object(O.jsxs)("label",{className:x.a.filter__title,children:["Find contacts by name",Object(O.jsx)("input",{className:x.a.filter__input,type:"text",value:e,name:"name",onChange:n})]})})},C=n(8),N=n.n(C),g=Object(o.b)((function(t){return{contactsList:t.contacts}}),(function(t){return{onDelete:function(e){return t(m(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact;return Object(O.jsx)("div",{children:Object(O.jsx)("ul",{className:"contact-list",children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(O.jsxs)("li",{className:N.a.contact__item,children:[Object(O.jsxs)("p",{className:N.a.item,children:[e,":"]}),Object(O.jsx)("p",{className:N.a.item,children:c}),Object(O.jsx)("button",{type:"button",className:N.a.onClick__btn,onClick:function(){return n(a)},children:"Delete"},a)]},a)}))})})})),S=n(11);function y(){var t=Object(c.useState)(S),e=Object(u.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),l=i[0],b=i[1],d=Object(o.c)();Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&a(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(O.jsxs)("div",{className:"Container",children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(p,{onSubmit:function(t){if(n.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()})))return alert("".concat(t.name," is already in contacts."));a([].concat(Object(s.a)(n),[t]))}}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(v,{filter:l,onChange:function(t){b(t.target.value),d(j(t.target.value))}}),Object(O.jsx)(g,{contacts:function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),deleteContact:function(t){a(n.filter((function(e){return e.id!==t})))}})]})}var k=n(2),w=[{id:"",dataContacts:S}],F=Object(b.c)(w,{"contact/add":function(t,e){var n=e.payload;return[].concat(Object(s.a)(t),[n])},"contact/delete":function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n.id}))}}),J=Object(b.c)("",{"contact/filter":function(t,e){return e.payload}}),A=Object(k.b)({contacts:F,filter:J}),E=Object(b.a)({reducer:A});i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(o.a,{store:E,children:Object(O.jsx)(y,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={contact__form:"ContactForm_contact__form__EsFOx",input__number:"ContactForm_input__number__5vJmE",input__name:"ContactForm_input__name__2ovuN",input__title:"ContactForm_input__title__3lRHV",btn__add:"ContactForm_btn__add__3rVy7"}},8:function(t,e,n){t.exports={item:"ContactList_item__1bT_E"}}},[[30,1,2]]]);
//# sourceMappingURL=main.136196f4.chunk.js.map