(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={form:"Form_form__2TM1N",label:"Form_label__15SAE",input:"Form_input__2ESfd",labelName:"Form_labelName__2L7Gh",button:"Form_button__243jh"}},14:function(t,e,n){t.exports={List:"ContactList_List__20gyh",ListItem:"ContactList_ListItem__vxGfb",button:"ContactList_button__1RuFy"}},23:function(t,e,n){t.exports={label:"Filter_label__3DcZT",labelName:"Filter_labelName__3VI7p",input:"Filter_input__2DoVp"}},37:function(t,e,n){t.exports={Container:"Container_Container__3tQ9A"}},39:function(t,e,n){t.exports={enter:"ContactListItem-fade_enter__3L9LC",enterActive:"ContactListItem-fade_enterActive__3juOu",exit:"ContactListItem-fade_exit__2OvWU",exitActive:"ContactListItem-fade_exitActive__1R0L4"}},40:function(t,e,n){t.exports={Notification:"Notification_Notification__2vzo1"}},70:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(12),r=n.n(o),i=n(19),s=n(20),u=n(22),l=n(21),b=n(37),f=n.n(b),d=n(1),j=function(t){var e=t.children;return Object(d.jsx)("div",{className:f.a.Container,children:e})},m=n(38),h=n(14),O=n.n(h),C=n(8),p=n(5),v={addContactRequest:Object(p.b)("contacts/addRequest"),addContactSuccess:Object(p.b)("contacts/addSuccess"),addContactError:Object(p.b)("contacts/addError"),fetchContactsRequest:Object(p.b)("contacts/fetchRequest"),fetchContactsSuccess:Object(p.b)("contacts/fetchSuccess"),fetchContactsError:Object(p.b)("contacts/fetchError"),removeContactRequest:Object(p.b)("contacts/removeRequest"),removeContactSuccess:Object(p.b)("contacts/removeSuccess"),removeContactError:Object(p.b)("contacts/removeError"),filterContacts:Object(p.b)("contacts/filter")},x=n(16),_=n.n(x);_.a.defaults.baseURL="http://localhost:2000";var g,N,L={addContact:function(t){var e=t.name,n=t.number;return function(t){t(v.addContactRequest()),_.a.post("/contacts",{name:e,number:n}).then((function(e){var n=e.data;t(v.addContactSuccess(n))})).catch((function(e){return t(v.addContactError())}))}},fetchContacts:function(){return function(t){t(v.fetchContactsRequest()),_.a.get("/contacts").then((function(e){var n=e.data;return t(v.fetchContactsSuccess(n))})).catch((function(e){return t(v.fetchContactsError(e))}))}},removeContact:function(t){return function(e){e(v.removeContactRequest()),_.a.delete("contacts/".concat(t)).then((function(){return e(v.removeContactSuccess(t))})).catch((function(t){return e(v.removeContactError(t))}))}}},S=n(18),y=function(t){return t.contacts.items},I=function(t){return t.contacts.filter},E=Object(S.a)([y,I],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),F={getContacts:y,getLoading:function(t){return t.contacts.loading},getFilter:I,getContactById:Object(S.a)([function(t,e){return e},y],(function(t,e){return e.find((function(e){return e.id===t}))})),getFilteredContacts:E},R=Object(C.b)((function(t,e){var n=F.getContactById(t,e.id);return Object(m.a)({},n)}),(function(t,e){return{onDeleteContact:function(){t(L.removeContact(e.id)),console.log(e.id)}}}))((function(t){var e=t.id,n=t.name,c=t.number,a=t.onDeleteContact;return Object(d.jsxs)("li",{className:O.a.ListItem,children:[Object(d.jsxs)("p",{children:[n," : ",c]}),Object(d.jsx)("button",{className:O.a.button,type:"button",onClick:a,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)})),q=n(78),A=n(77),k=n(39),w=n.n(k),V=Object(C.b)((function(t){return{contacts:F.getFilteredContacts(t)}}))((function(t){var e=t.contacts;return e.length>0&&Object(d.jsx)(q.a,{component:"ul",className:O.a.List,children:e.map((function(t){var e=t.id;return Object(d.jsx)(A.a,{timeout:250,classNames:w.a,children:Object(d.jsx)(R,{id:e})},e)}))})})),D=n(6),B=n(11),M=n.n(B),P=n(40),T=n.n(P),G=function(t){var e=t.message;return Object(d.jsx)("div",{className:T.a.Notification,children:Object(d.jsx)("p",{children:e})})},J=(n(70),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:"",notification:"",notificationIsVisible:!1},t.handleInputChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(D.a)({},c,a))},t.handleSubmit=function(e){var n=t.state,c=n.name,a=n.number,o=t.props.contacts;e.preventDefault(),""!==c?""!==a?o.some((function(t){return c.toLowerCase()===t.name.toLowerCase()}))?t.setState({notification:'Contact "'.concat(c,'" is already exist'),notificationIsVisible:!0}):o.some((function(t){return a===t.number}))?t.setState({notification:'Number "'.concat(a,'" is already exist'),notificationIsVisible:!0}):(t.props.onAddContact({name:c,number:a}),t.reset()):alert("Please, add a number"):alert("Please, give a name for new contact")},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.notification,c=e.notificationIsVisible;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(A.a,{in:c,timeout:3e3,classNames:"Notification-slideIn",unmountOnExit:!0,onEntered:function(){return t.setState({notificationIsVisible:!1})},children:Object(d.jsx)(G,{message:n})})," ",Object(d.jsxs)("form",{className:M.a.form,autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{className:M.a.label,children:[Object(d.jsx)("p",{className:M.a.labelName,children:"Name:*"}),Object(d.jsx)("input",{required:!0,className:M.a.input,type:"text",placeholder:"ex. Anastasia Boyko",value:this.state.name,name:"name",onChange:this.handleInputChange})]}),Object(d.jsxs)("label",{className:M.a.label,children:[Object(d.jsx)("p",{className:M.a.labelName,children:"Number:*"}),Object(d.jsx)("input",{required:!0,className:M.a.input,type:"number",placeholder:"ex. 0961179998",value:this.state.number,name:"number",onChange:this.handleInputChange})]}),Object(d.jsx)("button",{className:M.a.button,type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component)),U={onAddContact:L.addContact},z=Object(C.b)((function(t){return{contacts:F.getContacts(t)}}),U)(J),Q=n(23),W=n.n(Q),Z={onChange:v.filterContacts},H=Object(C.b)((function(t){return{value:F.getFilter(t)}}),Z)((function(t){var e=t.value,n=t.onChange;return Object(d.jsxs)("label",{className:W.a.label,children:[Object(d.jsx)("p",{className:W.a.labelName,children:"Find contact by name"}),Object(d.jsx)("input",{className:W.a.input,type:"text",placeholder:"Name",value:e,onChange:function(t){return n(t.target.value)}})]})})),K=(n(71),function(){return Object(d.jsx)(A.a,{in:!0,appear:!0,timeout:250,classNames:"AppName-slideIn",unmountOnExit:!0,children:Object(d.jsx)("h2",{children:"Phonebook"})})}),X=(n(72),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return Object(d.jsxs)(j,{children:[Object(d.jsx)(K,{}),Object(d.jsx)(z,{}),Object(d.jsx)(H,{}),Object(d.jsx)("h2",{children:"Contacts"}),this.props.isLoading&&Object(d.jsx)("h2",{children:"Loading..."}),Object(d.jsx)(V,{})]})}}]),n}(c.Component)),Y={onFetchContacts:L.fetchContacts},$=Object(C.b)((function(t){return{isLoadingContact:F.getLoading(t)}}),Y)(X),tt=(n(73),n(41)),et=n(42),nt=n(9),ct=Object(p.c)([],(g={},Object(D.a)(g,v.fetchContactsSuccess,(function(t,e){return e.payload})),Object(D.a)(g,v.addContactSuccess,(function(t,e){var n=e.payload;return[].concat(Object(et.a)(t),[n])})),Object(D.a)(g,v.removeContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),g)),at=Object(p.c)("",Object(D.a)({},v.filterContacts,(function(t,e){return e.payload}))),ot=Object(p.c)(!1,(N={},Object(D.a)(N,v.addContactRequest,(function(){return!0})),Object(D.a)(N,v.addContactSuccess,(function(){return!1})),Object(D.a)(N,v.addContactError,(function(){return!1})),Object(D.a)(N,v.fetchContactsRequest,(function(){return!0})),Object(D.a)(N,v.fetchContactsSuccess,(function(){return!1})),Object(D.a)(N,v.fetchContactsError,(function(){return!1})),Object(D.a)(N,v.removeContactRequest,(function(){return!0})),Object(D.a)(N,v.removeContactSuccess,(function(){return!1})),Object(D.a)(N,v.removeContactError,(function(){return!1})),N)),rt=Object(nt.b)({items:ct,loading:ot,filter:at}),it=Object(p.a)({reducer:{contacts:rt}});r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(tt.a,{children:Object(d.jsx)(C.a,{store:it,children:Object(d.jsx)($,{})})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.ca8085d2.chunk.js.map