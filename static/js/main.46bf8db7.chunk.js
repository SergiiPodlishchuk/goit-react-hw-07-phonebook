(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{26:function(t,e,n){t.exports={Contact_form:"ContactForm_Contact_form__FZpGl"}},36:function(t,e,n){},39:function(t,e,n){t.exports=n(70)},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),u=n(3),s=n(15),i=n(16),l=n(20),m=n(18),f=n(71),b=n(17),p=n(10),C=n.n(p),d=n(21),h=n(13),v=n.n(h),O=n(1),j={fetchContactsRequest:Object(O.b)("contacts/fetchRequest"),fetchContactsSuccess:Object(O.b)("contacts/fetchSuccess"),fetchContactsError:Object(O.b)("contacts/fetchError"),addContactsRequest:Object(O.b)("contacts/addRequest"),addContactsSuccess:Object(O.b)("contacts/addSuccess"),addContactsError:Object(O.b)("contacts/addError"),removeContactsRequest:Object(O.b)("contacts/removeRequest"),removeContactsSuccess:Object(O.b)("contacts/removeSuccess"),removeContactsError:Object(O.b)("contacts/removeError"),changeFilter:Object(O.b)("contact/changeFilter")};v.a.defaults.baseURL="http://localhost:3004";var E,g,y={fetchContacts:function(){return function(){var t=Object(d.a)(C.a.mark((function t(e){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(j.fetchContactsRequest()),t.next=3,v.a.get("/contacts").then((function(t){var n=t.data;return e(j.fetchContactsSuccess(n))})).catch((function(t){return e(j.fetchContactsError(t))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t){var e=t.name,n=t.number;return function(){var t=Object(d.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(j.addContactsRequest()),t.next=3,v.a.post("/contacts",{name:e,number:n}).then((function(t){var e=t.data;return a(j.addContactsSuccess(e))})).catch((function(t){return a(j.addContactsError(t))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},removeContacts:function(t){return function(){var e=Object(d.a)(C.a.mark((function e(n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(j.removeContactsRequest()),e.next=3,v.a.delete("/contacts/".concat(t)).then((function(){return n(j.removeContactsSuccess(t))})).catch((function(t){return n(j.removeContactsError(t))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},N=n(8),S=function(t){return t.contacts.items},x=function(t){return t.contacts.filter},F={getLoading:function(t){return t.contacts.loading},getFilter:x,getVisibleContacts:Object(N.a)([S,x],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),getContacts:S,getContactByID:Object(N.a)([function(t,e){return e},S],(function(t,e){return e.find((function(e){return e.id===t}))}))},w=(n(67),Object(u.b)((function(t,e){return t.contacts.items.length>4?{isContact:!0,nameContact:10}:{isContact:!1}}),null)((function(t){var e=t.text;return c.a.createElement(f.a,{in:!0,appear:!0,timeout:500,classNames:"anim",unmountOnExit:!0},c.a.createElement("div",{className:"alert"},e))}))),k=n(26),R=n.n(k),_={nameContact:"",numberContact:""},q=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=_,t.inputName=function(e){var n=e.target;t.setState({nameContact:n.value})},t.inputNumber=function(e){var n=e.target;t.setState({numberContact:n.value})},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.nameContact,c=n.numberContact;(0,t.props.onAddContact)(a,c),t.setState(Object(b.a)({},_))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.nameContact,n=t.numberContact,a=this.props.itemsArray.map((function(t){return t.name.toLowerCase()})).includes(e.toLowerCase());return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(w,{text:"Contact already exist"}),c.a.createElement("form",{onSubmit:this.handleSubmit,className:R.a.Contact_form},c.a.createElement("label",null,"Name",c.a.createElement("input",{className:R.a.inputName,type:"text",value:e,onChange:this.inputName})),c.a.createElement("label",null,"Number",c.a.createElement("input",{placeholder:"XXX-XX-XX",type:"tel",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",value:n,onChange:this.inputNumber})),c.a.createElement("button",{type:"submit"},"ADD CONTACT")))}}]),n}(a.Component),L=Object(u.b)((function(t){return{itemsArray:F.getContacts(t)}}),(function(t){return{onAddContact:function(e,n){return t(y.addContact({name:e,number:n}))}}}))(q),D=n(72),A=(n(36),Object(u.b)((function(t,e){var n=e.id;return Object(b.a)({},F.getContactByID(t,n))}),(function(t,e){var n=e.id;return{onDeleteContact:function(){return t(y.removeContacts(n))}}}))((function(t){var e=t.name,n=t.number,a=t.onDeleteContact;return c.a.createElement("li",{className:"phone_Item"},c.a.createElement("span",{className:"phone_name"},e),c.a.createElement("span",{className:"phone_number"},n),c.a.createElement("button",{type:"button",onClick:a}))}))),X=Object(u.b)((function(t){return{contacts:F.getVisibleContacts(t)}}),null)((function(t){var e=t.contacts,n=0===e.length;return c.a.createElement(c.a.Fragment,null,n&&c.a.createElement(w,{text:"No have contact"}),c.a.createElement(D.a,{component:"ul",className:"contact_list"},e.map((function(t){var e=t.id;return c.a.createElement(f.a,{key:e,timeout:250,classNames:"list"},c.a.createElement(A,{id:e}))}))))})),B=(n(68),{inputFilter:j.changeFilter}),I=Object(u.b)((function(t){return F.getContacts(t).length>1?{value:F.getFilter(t),isContact:!0}:{value:F.getFilter(t)}}),B)((function(t){var e=t.value,n=t.inputFilter,a=t.isContact;return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(f.a,{in:!0,appear:!0,classNames:"find",timeout:500,unmountOnExit:!0},c.a.createElement("div",{className:"findContact"},c.a.createElement("p",null,"Find contacts by name or number"),c.a.createElement("input",{className:"inputName",type:"text",value:e,onChange:function(t){var e=t.target;return n(e.value)}}))))})),J=(n(69),function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return c.a.createElement("div",{className:"phoneBook_container"},c.a.createElement(f.a,{in:!0,appear:!0,classNames:"title_anim",timeout:500,unmountOnExit:!0},c.a.createElement("h1",{className:"title"},"Phonebook")),c.a.createElement(f.a,{in:!0,appear:!0,classNames:"form_fade",timeout:500,unmountOnExit:!0},c.a.createElement(L,null)),c.a.createElement(I,null),this.props.isLoadingContacts&&c.a.createElement("h1",null,"\u0433\u0440\u0443\u0437\u0438\u043c"),c.a.createElement(X,null))}}]),n}(a.Component)),T={onFetchContacts:y.fetchContacts},V=Object(u.b)((function(t){return{isLoadingContacts:F.getLoading(t)}}),T)(J),G=n(19),M=n(2),P=n(7),U=Object(O.c)([],(E={},Object(M.a)(E,j.fetchContactsSuccess,(function(t,e){return e.payload})),Object(M.a)(E,j.addContactsSuccess,(function(t,e){return[e.payload].concat(Object(G.a)(t))})),Object(M.a)(E,j.removeContactsSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),E)),Z=Object(O.c)("",Object(M.a)({},j.changeFilter,(function(t,e){return e.payload}))),z=Object(O.c)(!1,(g={},Object(M.a)(g,j.fetchContactsRequest,(function(){return!0})),Object(M.a)(g,j.fetchContactsSuccess,(function(){return!1})),Object(M.a)(g,j.fetchContactsError,(function(){return!1})),Object(M.a)(g,j.addContactsRequest,(function(){return!0})),Object(M.a)(g,j.addContactsSuccess,(function(){return!1})),Object(M.a)(g,j.addContactsError,(function(){return!1})),Object(M.a)(g,j.removeContactsRequest,(function(){return!0})),Object(M.a)(g,j.removeContactsSuccess,(function(){return!1})),Object(M.a)(g,j.removeContactsError,(function(){return!1})),g)),H=Object(P.c)({items:U,filter:Z,loading:z}),K=Object(O.d)(),Q=Object(O.a)({reducer:{contacts:H},middleware:Object(G.a)(K)});o.a.render(c.a.createElement(u.a,{store:Q},c.a.createElement(V,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.46bf8db7.chunk.js.map