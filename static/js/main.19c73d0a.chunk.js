(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{24:function(t,e,n){t.exports={Contact_form:"ContactForm_Contact_form__FZpGl"}},34:function(t,e,n){},37:function(t,e,n){t.exports=n(67)},64:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var a,c,r=n(0),o=n.n(r),u=n(9),s=n.n(u),i=n(3),l=n(13),m=n(14),f=n(18),b=n(16),C=n(68),d=n(15),p=n(19),h=n.n(p),O=n(1),v={fetchContactsRequest:Object(O.b)("contacts/fetchRequest"),fetchContactsSuccess:Object(O.b)("contacts/fetchSuccess"),fetchContactsError:Object(O.b)("contacts/fetchError"),addContactsRequest:Object(O.b)("contacts/addRequest"),addContactsSuccess:Object(O.b)("contacts/addSuccess"),addContactsError:Object(O.b)("contacts/addError"),removeContactsRequest:Object(O.b)("contacts/removeRequest"),removeContactsSuccess:Object(O.b)("contacts/removeSuccess"),removeContactsError:Object(O.b)("contacts/removeError"),changeFilter:Object(O.b)("contact/changeFilter")},E={fetchContacts:function(){return function(t){t(v.fetchContactsRequest()),h.a.get("http://localhost:3004/contacts").then((function(e){var n=e.data;return t(v.fetchContactsSuccess(n))})).catch((function(e){return t(v.fetchContactsError(e))}))}},addContact:function(t){var e=t.name,n=t.number;return function(t){t(v.addContactsRequest()),h.a.post("http://localhost:3004/contacts",{name:e,number:n}).then((function(e){var n=e.data;return t(v.addContactsSuccess(n))})).catch((function(e){return t(v.addContactsError(e))}))}},removeContacts:function(t){return function(e){e(v.removeContactsRequest()),h.a.delete("http://localhost:3004/contacts/".concat(t)).then((function(){return e(v.removeContactsSuccess(t))})).catch((function(t){return e(v.removeContactsError(t))}))}}},j=n(8),g=function(t){return t.contacts.items},N=function(t){return t.contacts.filter},y={getLoading:function(t){return t.contacts.loading},getFilter:N,getVisibleContacts:Object(j.a)([g,N],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),getContacts:g,getContactByID:Object(j.a)([function(t,e){return e},g],(function(t,e){return e.find((function(e){return e.id===t}))}))},S=(n(64),Object(i.b)((function(t,e){return t.contacts.items.length>4?{isContact:!0,nameContact:10}:{isContact:!1}}),null)((function(t){var e=t.text;return o.a.createElement(C.a,{in:!0,appear:!0,timeout:500,classNames:"anim",unmountOnExit:!0},o.a.createElement("div",{className:"alert"},e))}))),F=n(24),_=n.n(F),q={nameContact:"",numberContact:""},x=function(t){Object(f.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=q,t.inputName=function(e){var n=e.target;t.setState({nameContact:n.value})},t.inputNumber=function(e){var n=e.target;t.setState({numberContact:n.value})},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.nameContact,c=n.numberContact;(0,t.props.onAddContact)(a,c),t.setState(Object(d.a)({},q))},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.nameContact,n=t.numberContact,a=this.props.itemsArray.map((function(t){return t.name.toLowerCase()})).includes(e.toLowerCase());return o.a.createElement(o.a.Fragment,null,a&&o.a.createElement(S,{text:"Contact already exist"}),o.a.createElement("form",{onSubmit:this.handleSubmit,className:_.a.Contact_form},o.a.createElement("label",null,"Name",o.a.createElement("input",{className:_.a.inputName,type:"text",value:e,onChange:this.inputName})),o.a.createElement("label",null,"Number",o.a.createElement("input",{placeholder:"XXX-XX-XX",type:"tel",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",value:n,onChange:this.inputNumber})),o.a.createElement("button",{type:"submit"},"ADD CONTACT")))}}]),n}(r.Component),R=Object(i.b)((function(t){return{itemsArray:y.getContacts(t)}}),(function(t){return{onAddContact:function(e,n){return t(E.addContact({name:e,number:n}))}}}))(x),k=n(69),w=(n(34),Object(i.b)((function(t,e){var n=e.id;return Object(d.a)({},y.getContactByID(t,n))}),(function(t,e){var n=e.id;return{onDeleteContact:function(){return t(E.removeContacts(n))}}}))((function(t){var e=t.name,n=t.number,a=t.onDeleteContact;return o.a.createElement("li",{className:"phone_Item"},o.a.createElement("span",{className:"phone_name"},e),o.a.createElement("span",{className:"phone_number"},n),o.a.createElement("button",{type:"button",onClick:a}))}))),D=Object(i.b)((function(t){return{contacts:y.getVisibleContacts(t)}}),null)((function(t){var e=t.contacts,n=0===e.length;return o.a.createElement(o.a.Fragment,null,n&&o.a.createElement(S,{text:"No have contact"}),o.a.createElement(k.a,{component:"ul",className:"contact_list"},e.map((function(t){var e=t.id;return o.a.createElement(C.a,{key:e,timeout:250,classNames:"list"},o.a.createElement(w,{id:e}))}))))})),L=(n(65),{inputFilter:v.changeFilter}),A=Object(i.b)((function(t){return y.getContacts(t).length>1?{value:y.getFilter(t),isContact:!0}:{value:y.getFilter(t)}}),L)((function(t){var e=t.value,n=t.inputFilter,a=t.isContact;return o.a.createElement(o.a.Fragment,null,a&&o.a.createElement(C.a,{in:!0,appear:!0,classNames:"find",timeout:500,unmountOnExit:!0},o.a.createElement("div",{className:"findContact"},o.a.createElement("p",null,"Find contacts by name or number"),o.a.createElement("input",{className:"inputName",type:"text",value:e,onChange:function(t){var e=t.target;return n(e.value)}}))))})),X=(n(66),function(t){Object(f.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return o.a.createElement("div",{className:"phoneBook_container"},o.a.createElement(C.a,{in:!0,appear:!0,classNames:"title_anim",timeout:500,unmountOnExit:!0},o.a.createElement("h1",{className:"title"},"Phonebook")),o.a.createElement(C.a,{in:!0,appear:!0,classNames:"form_fade",timeout:500,unmountOnExit:!0},o.a.createElement(R,null)),o.a.createElement(A,null),this.props.isLoadingContacts&&o.a.createElement("h1",null,"\u0433\u0440\u0443\u0437\u0438\u043c"),o.a.createElement(D,null))}}]),n}(r.Component)),B={onFetchContacts:E.fetchContacts},I=Object(i.b)((function(t){return{isLoadingContacts:y.getLoading(t)}}),B)(X),J=n(17),T=n(2),V=n(7),G=Object(O.c)([],(a={},Object(T.a)(a,v.fetchContactsSuccess,(function(t,e){return e.payload})),Object(T.a)(a,v.addContactsSuccess,(function(t,e){return[e.payload].concat(Object(J.a)(t))})),Object(T.a)(a,v.removeContactsSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),a)),M=Object(O.c)("",Object(T.a)({},v.changeFilter,(function(t,e){return e.payload}))),P=Object(O.c)(!1,(c={},Object(T.a)(c,v.fetchContactsRequest,(function(){return!0})),Object(T.a)(c,v.fetchContactsSuccess,(function(){return!1})),Object(T.a)(c,v.fetchContactsError,(function(){return!1})),Object(T.a)(c,v.addContactsRequest,(function(){return!0})),Object(T.a)(c,v.addContactsSuccess,(function(){return!1})),Object(T.a)(c,v.addContactsError,(function(){return!1})),Object(T.a)(c,v.removeContactsRequest,(function(){return!0})),Object(T.a)(c,v.removeContactsSuccess,(function(){return!1})),Object(T.a)(c,v.removeContactsError,(function(){return!1})),c)),Z=Object(V.c)({items:G,filter:M,loading:P}),z=Object(O.d)(),H=Object(O.a)({reducer:{contacts:Z},middleware:Object(J.a)(z)});s.a.render(o.a.createElement(i.a,{store:H},o.a.createElement(I,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.19c73d0a.chunk.js.map