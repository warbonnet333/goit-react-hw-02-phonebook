(this.webpackJsonphomework_02_phonebook=this.webpackJsonphomework_02_phonebook||[]).push([[0],{17:function(e,t,n){e.exports={enter:"slide_enter__4A6p-",enterActive:"slide_enterActive__RGQRF",exit:"slide_exit__1GnLL",exitActive:"slide_exitActive__2LwhS"}},18:function(e,t,n){e.exports={title:"Form_title__2V9mT",container:"Form_container__3tQkK",form:"Form_form__1ik1C"}},21:function(e,t,n){e.exports={list__item:"Contact_list__item__G9sOe",icon:"Contact_icon__2NANC"}},26:function(e,t,n){e.exports={list:"List_list__3Of5u"}},29:function(e,t,n){e.exports={container:"Filter_container__5MOyF"}},30:function(e,t,n){e.exports={alert:"Alert_alert__1QPsL"}},31:function(e,t,n){e.exports={enter:"pop_enter__1Q5lr",enterActive:"pop_enterActive__1Qxdr",exit:"pop_exit__3lLug",exitActive:"pop_exitActive__lDCeO"}},32:function(e,t,n){e.exports={enter:"slideFromTop_enter__1iKOs",enterActive:"slideFromTop_enterActive__3lnQZ",exit:"slideFromTop_exit__2aqwB",exitActive:"slideFromTop_exitActive__-j83t"}},34:function(e,t,n){e.exports=n(47)},47:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),o=n.n(c),i=n(13),l=n.n(i),u=n(7),s=n(8),m=n(10),b=n(9),f=n(11),p=n(26),d=n.n(p),_=n(21),h=n.n(_),O=n(50),j=function(e){var t=e.name,n=e.number,a=e.onDelete;return o.a.createElement("li",{className:h.a.list__item},o.a.createElement("p",null,t),o.a.createElement("p",null,n),o.a.createElement("button",{type:"button",onClick:a},o.a.createElement(O.a,{className:h.a.icon})))},v=n(51),E=n(49),x=n(17),y=n.n(x),C=n(5),A=n(1),w=Object(A.b)("listReduser/addContact"),N=Object(A.b)("listReduser/deleteContact"),k=Object(A.b)("listReduser/addFromLocalStorage"),F=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},g=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.deleteContact,a=e.filter,r=F(t,a);return o.a.createElement(v.a,{component:"ul",className:d.a.list},r.map((function(e){var t=e.id,a=e.name,r=e.number;return o.a.createElement(E.a,{key:t,timeout:250,classNames:y.a},o.a.createElement(j,{name:a,number:r,onDelete:function(){return n(t)}}))})))}}]),t}(c.Component),S=Object(C.b)((function(e){return{items:e.contacts,filter:e.filter}}),(function(e){return{deleteContact:function(t){return e(N(t))}}}))(g),L=n(28),D=n(4),R=n(18),Q=n.n(R),T=function(e,t){return e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()&&t}))},J=Object(A.b)("alertReduser/switchAlert"),M=Object(A.b)("alertReduser/closeAlert"),q=n(44),G={name:"",number:""},I=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:"",isShown:!1},n.hendleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(D.a)({},a,r))},n.hendleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.number,c=n.props,o=c.contacts,i=c.addContact;T(o,a)?n.props.switchAlert(a):i({name:a,number:r,id:q()});n.setState((function(e){return Object(L.a)({},e,{},G)}))},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({isShown:!0})}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.isShown;return o.a.createElement("div",{className:Q.a.container},o.a.createElement(E.a,{in:a,timeout:500,classNames:y.a},o.a.createElement("h2",{className:Q.a.title},"Phonebook")),o.a.createElement("form",{onSubmit:this.hendleSubmit,className:Q.a.form},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.hendleChange,required:!0}),o.a.createElement("label",{htmlFor:"number"},"Number"),o.a.createElement("input",{type:"number",name:"number",value:n,onChange:this.hendleChange,required:!0}),o.a.createElement("button",{type:"submit"},"Add contact")))}}]),t}(c.Component),K=Object(C.b)((function(e){return{contacts:e.contacts}}),(function(e){return{addContact:function(t,n){return e(w(t,n))},switchAlert:function(t){return e(J(t))}}}))(I),B=n(29),P=n.n(B),U=Object(A.b)("filterReduser/fillFilter"),V=Object(C.b)((function(e){return{value:e.filter}}),(function(e){return{changeFilter:function(t){return e(U(t.target.value))}}}))((function(e){var t=e.value,n=e.changeFilter;return o.a.createElement("div",{className:P.a.container},o.a.createElement("label",{htmlFor:"find"},"Find contact by name"),o.a.createElement("input",{type:"text",name:"find",value:t,onChange:n}))})),Z=n(30),z=n.n(Z),H=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.onCloseAlert;setTimeout(e,3e3)}},{key:"render",value:function(){var e=this.props,t=e.existedName,n=e.onCloseAlert;return o.a.createElement("div",{className:z.a.alert},o.a.createElement("p",null,"".concat(t," is already in contacts")),o.a.createElement("button",{type:"button",onClick:n},"OK"))}}]),t}(c.Component),W=Object(C.b)((function(e){return{existedName:e.alert.existedName}}),(function(e){return{onCloseAlert:function(){return e(M())}}}))(H),X=n(31),Y=n.n(X),$=n(32),ee=n.n($),te=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.props.fetchFromLocal(JSON.parse(e))}},{key:"componentDidUpdate",value:function(e,t){e.contacts!==this.props.contacts&&localStorage.setItem("contacts",JSON.stringify(this.props.contacts))}},{key:"render",value:function(){var e=this.props,t=e.contacts,n=e.isShown,a=e.filter,r=!!(t.length>2||a);return o.a.createElement("div",null,o.a.createElement(E.a,{in:n,timeout:250,classNames:ee.a,unmountOnExit:!0},o.a.createElement(W,null)),o.a.createElement(K,null),o.a.createElement(E.a,{in:r,timeout:250,classNames:Y.a,unmountOnExit:!0},o.a.createElement(V,null)),o.a.createElement(S,null))}}]),t}(c.Component),ne=Object(C.b)((function(e){return{contacts:e.contacts,isShown:e.alert.showAlert,filter:e.filter}}),(function(e){return{fetchFromLocal:function(t){return e(k(t))}}}))(te),ae=n(19),re=Object(A.c)([],(a={},Object(D.a)(a,w,(function(e,t){return[].concat(Object(ae.a)(e),[t.payload])})),Object(D.a)(a,N,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),Object(D.a)(a,k,(function(e,t){return[].concat(Object(ae.a)(e),Object(ae.a)(t.payload))})),a)),ce=Object(A.c)({showAlert:!1},(r={},Object(D.a)(r,J,(function(e,t){return{showAlert:!0,existedName:t.payload}})),Object(D.a)(r,M,(function(e,t){return{showAlert:!1}})),r)),oe=Object(A.c)("",Object(D.a)({},U,(function(e,t){return t.payload}))),ie=Object(A.a)({reducer:{contacts:re,alert:ce,filter:oe}});l.a.render(o.a.createElement(C.a,{store:ie},o.a.createElement(ne,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6fa88210.chunk.js.map