(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={item:"ContactItem_item__2warn",contact:"ContactItem_contact__2Ium8",button:"ContactItem_button__1gtqM"}},20:function(t,e,n){t.exports={text:"Filter_text__1O_8d",input:"Filter_input__1oQsS"}},25:function(t,e,n){t.exports={loader:"Loader_loader__2pgFE"}},32:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(14),s=n.n(r),o=(n(32),n(16)),i=n(22),u=n(6),l=Object(i.a)({reducerPath:"contactApi",baseQuery:Object(u.d)({baseUrl:"https://619952f49022ea0017a7ae2a.mockapi.io/api/v1"}),tagTypes:["Contacts"],endpoints:function(t){return{fetchContacts:t.query({query:function(){return"/contacts"},providesTags:["Contacts"]}),createContact:t.mutation({query:function(t){return{url:"/contacts",method:"POST",body:{name:t.name,number:t.number}}},invalidatesTags:["Contacts"]}),deleteContact:t.mutation({query:function(t){return{url:"contacts/".concat(t),method:"DELETE"}},invalidatesTags:["Contacts"]})}}}),d=l.useFetchContactsQuery,b=l.useCreateContactMutation,j=l.useDeleteContactMutation,m=n(10),O=n(9),h=n.n(O),p=n(2);function x(){var t=d().data,e=b(),n=Object(o.a)(e,2),a=n[0],c=n[1].isLoading;return Object(p.jsxs)("form",{id:"form",onSubmit:function(e){e.preventDefault();var n=e.currentTarget.elements.name.value,c=e.currentTarget.elements.number.value;t.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?Object(m.alert)({type:"warning",text:"Contact ".concat(n," is already in your contacts!")}):(a({name:n,number:c}),Object(m.alert)({type:"success",text:"Contact ".concat(n," is saved!")}),e.currentTarget.reset())},className:h.a.form,autoComplete:"off",children:[Object(p.jsxs)("label",{className:h.a.label,children:[Object(p.jsx)("span",{className:h.a.text,children:"Name"}),Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:h.a.input})]}),Object(p.jsxs)("label",{className:h.a.label,children:[Object(p.jsx)("span",{className:h.a.text,children:"Number"}),Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",className:h.a.input,required:!0})]}),Object(p.jsx)("button",{type:"submit",className:h.a.button,disabled:c,children:"Add contact"})]})}var f=n(4),_=n(1),C={changeFilter:Object(_.b)("contacts/changeFilter")},g=n(20),v=n.n(g);function y(){var t=Object(f.d)(),e=Object(f.e)((function(t){return t.contacts.filter}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:v.a.text,children:"Find contacts by name"}),Object(p.jsx)("input",{type:"text",name:"Find contact",onChange:function(e){return t(C.changeFilter(e.target.value))},value:e,className:v.a.input,autoComplete:"off"})]})}var N=n(13),F=n(17),w=n.n(F);function T(t){var e=t.id,n=t.name,a=t.number,c=j(),r=Object(o.a)(c,2),s=r[0],i=r[1].isLoading;return i&&Object(m.alert)({type:"warning",text:"Contact ".concat(n," was deleted!")}),Object(p.jsxs)("li",{className:w.a.item,children:[Object(p.jsxs)("p",{className:w.a.contact,children:[n,": ",a]}),Object(p.jsx)("button",{className:w.a.button,onClick:function(t){return s(e)},disabled:i,children:i?"Deleting...":"Delete"})]})}var L=n(24),k=n.n(L),q=n(25),A=n.n(q);function D(){return Object(p.jsx)("div",{className:A.a.loader,children:Object(p.jsx)(k.a,{type:"ThreeDots",color:"#000000",height:50,width:50,timeout:3e3})})}function E(){var t,e=d(),n=e.data,a=e.isFetching,c=Object(f.e)((function(t){return t.contacts.filter.toLowerCase()}));return n&&(t=n.filter((function(t){return t.name.toLowerCase().includes(c)}))),Object(p.jsxs)(p.Fragment,{children:[a&&Object(p.jsx)(D,{}),t&&Object(p.jsx)("ul",{children:t.map((function(t){return Object(p.jsx)(T,Object(N.a)({},t),t.id)}))})]})}function M(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"addForm",children:[Object(p.jsx)("h1",{className:"title",children:"Phonebook"}),Object(p.jsx)(x,{})]}),Object(p.jsx)("h2",{className:"title",children:"Contacts"}),Object(p.jsx)(y,{}),Object(p.jsx)(E,{})]})}var I,z=n(27),J=n(11),P=n(7),S=Object(_.d)("",Object(J.a)({},C.changeFilter,(function(t,e){return e.payload}))),B=Object(P.b)({filter:S}),Q=Object(_.a)({reducer:(I={},Object(J.a)(I,l.reducerPath,l.reducer),Object(J.a)(I,"contacts",B),I),middleware:function(t){return[].concat(Object(z.a)(t()),[l.middleware])},devTools:!1}),Z=Q;Object(u.e)(Q.dispatch);n(58);var K=n(26);n(59),n(60);m.defaultModules.set(K,{}),n(10).defaults.width="400px",s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(f.a,{store:Z,children:Object(p.jsx)(M,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={label:"Form_label__3ynJu",text:"Form_text__2REK3",button:"Form_button__3BaCt",input:"Form_input__1NnRK"}}},[[61,1,2]]]);
//# sourceMappingURL=main.3789c183.chunk.js.map