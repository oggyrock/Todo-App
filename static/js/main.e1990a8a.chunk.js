(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,function(e,t,l){e.exports=l(16)},,,,,function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){"use strict";l.r(t);var a=l(0),c=l.n(a),n=l(6),o=l.n(n),i=(l(13),l(14),l(15),l(7)),r=l(1),s=l(2);function d(e){var t=e.uneditedTitle,l=e.setUneditedTitle,a=e.todoList,n=e.setTodoList,o=e.todo,i=e.index,s=Object(r.a)(a);return c.a.createElement("li",{className:o.completed?"completed":void 0,onDoubleClick:function(e){var t=e.target;l(o.title),t.closest("li").className="editing",t.closest("li").lastChild.focus()}},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",checked:o.completed,onChange:function(){o.completed=!o.completed,n(Object(r.a)(s))}}),c.a.createElement("label",null,o.title),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){s.splice(i,1),n(Object(r.a)(s))}})),c.a.createElement("input",{type:"text",className:"edit",value:o.title,onChange:function(e){s[i].title=e.target.value,n(Object(r.a)(s))},onKeyDown:function(e){var l=e.target;"Enter"===e.key&&(e.target.value.trim()?(s[i].title=e.target.value.trim(),n(Object(r.a)(s)),l.closest("li").className=o.completed?"completed":""):(s.splice(i,1),n(Object(r.a)(s)))),"Escape"===e.key&&(s[i].title=t,n(Object(r.a)(s)),l.closest("li").className=o.completed?"completed":"")},onBlur:function(e){var t=e.target;t.value.trim()?(s[i].title=t.value.trim(),n(Object(r.a)(s)),t.closest("li").className=o.completed?"completed":""):(s.splice(i,1),n(Object(r.a)(s)))}}))}function u(e){var t=e.filteredList,l=e.setUneditedTitle,a=e.uneditedTitle,n=e.todoList,o=e.setTodoList;return c.a.createElement("ul",{className:"todo-list"},t.map((function(e,t){return c.a.createElement(d,{key:e.id,uneditedTitle:a,setUneditedTitle:l,todoList:n,setTodoList:o,todo:e,index:t})})))}function m(e){var t=e.todoList,l=e.setTodoList,a=e.filter,n=e.filters,o=e.setFilter;return c.a.createElement("footer",{className:"footer",hidden:!t.length},c.a.createElement("span",{className:"todo-count"},t.filter((function(e){return!e.completed})).length," ","item",1!==t.filter((function(e){return!e.completed})).length?"s ":" ","left"),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#/",className:a===n.all?"selected":"",onClick:function(){return o(n.all)}},"All")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/active",className:a===n.active?"selected":"",onClick:function(){return o(n.active)}},"Active")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/completed",className:a===n.completed?"selected":"",onClick:function(){return o(n.completed)}},"Completed"))),c.a.createElement("button",{type:"button",hidden:t.every((function(e){return!e.completed})),className:"clear-completed",onClick:function(){return l(Object(r.a)(t.filter((function(e){return!e.completed}))))}},"Clear completed"))}var p=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),l=t[0],n=t[1],o=Object(a.useState)(""),d=Object(s.a)(o,2),p=d[0],f=d[1],b=Object(a.useState)(!0),E=Object(s.a)(b,2),v=E[0],g=E[1],h={all:"All",active:"Active",completed:"Completed"},O=Object(a.useState)([]),j=Object(s.a)(O,2),N=j[0],k=j[1],y=Object(a.useState)(h.all),C=Object(s.a)(y,2),L=C[0],T=C[1],S=Object(a.useMemo)((function(){return N.filter((function(e){return L===h.completed?e.completed:L!==h.active||!e.completed}))})),x={id:+new Date,title:l.trim(),completed:!1};return Object(a.useEffect)((function(){return localStorage.list&&k(JSON.parse(localStorage.list))}),[]),Object(a.useEffect)((function(){localStorage.list=JSON.stringify(N),g(N.every((function(e){return e.completed})))}),[N]),c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos App"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),x.title&&(k([].concat(Object(r.a)(N),[x])),n(""),g(N.some((function(e){return!e.completed}))))}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:l,onChange:function(e){return n(e.target.value)}}))),c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:v,onChange:function(){g(!v),N.map((function(e,t){return N[t].completed=!v,Object(i.a)({},e)})),k(Object(r.a)(N))}}),c.a.createElement("label",{htmlFor:"toggle-all",hidden:!N.length},"Mark all as complete"),c.a.createElement(u,{filteredList:S,setUneditedTitle:f,uneditedTitle:p,todoList:N,setTodoList:k})),c.a.createElement(m,{todoList:N,setTodoList:k,filters:h,filter:L,setFilter:T}))};o.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.e1990a8a.chunk.js.map