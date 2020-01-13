(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{33:function(e,a,t){e.exports=t(64)},38:function(e,a,t){},39:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(30),o=t.n(c),l=(t(38),t(9)),i=t(10),s=t(12),m=t(11),h=t(13),d=t(7),p=t(6),u=(t(39),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={brandName:"PokeDex"},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("span",{className:"navbar-brand"},this.state.brandName),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(d.b,{className:"navbar-item nav-link",to:"/"},"Home"),r.a.createElement(d.b,{className:"navbar-item nav-link",to:"/credits"},"Credits"))))}}]),a}(n.Component)),v=t(19),b=t(18),k=t.n(b),f=(t(63),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={pokemon:[{id:0,name:"",weight:0,img:"",hidden:!1}],limit:18,search:""},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,a,t){if(a.search!==this.state.search){for(var n=Object(v.a)(this.state.pokemon),r=this.state.pokemon.length-1;r>=0;r--){var c=this.state.pokemon[r].name;n[r].hidden=-1===c.indexOf(this.state.search)}this.setState({arr:n})}}},{key:"handleChange",value:function(e){this.setState({search:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Pokemon List"),r.a.createElement("form",{className:"search-form"},r.a.createElement("input",{type:"search",className:"search-form__input",onChange:this.handleChange.bind(this),value:this.state.search})),r.a.createElement("div",{className:"row mt-2"},this.state.pokemon.map((function(e,a){return r.a.createElement("div",{className:e.hidden?"d-none":"col-xl-2 col-lg-3 col-sm-4 col-6",key:a},r.a.createElement("div",{className:"card pokemon"},r.a.createElement("img",{className:"card-img-top pokemon__img",src:e.img,alt:"pokemon"}),r.a.createElement("div",{className:"card-body pokemon-details"},r.a.createElement("h5",{className:"card-title pokemon-details__name"},e.name),r.a.createElement("p",{className:"card-text pokemon-details__weight"},"weight: ",e.weight),r.a.createElement(d.b,{className:"btn btn-primary",to:"/pokemon/".concat(e.id)},"More Info"))))}))))}},{key:"getData",value:function(){var e=this;k.a.get("https://pokeapi.co/api/v2/pokemon/?limit=".concat(this.state.limit)).then((function(a){var t=a.data.results;e.clearData();for(var n=0;n<t.length;n++)k.a.get(t[n].url).then((function(a){var t=a.data;e.setState({pokemon:[].concat(Object(v.a)(e.state.pokemon),[{id:t.id,name:t.name,weight:t.weight,img:t.sprites.front_default}])})}))}))}},{key:"clearData",value:function(){this.setState({pokemon:[]})}}]),a}(n.Component)),g=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/credits"},r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"d-inline-block"},r.a.createElement("h1",null,"Credits"),r.a.createElement("a",{href:"https://www.dafont.com/pokemon.font",className:"h3 d-block",target:"_blank",rel:"noopener noreferrer"},"Title font"),r.a.createElement("a",{href:"https://pokeapi.co",className:"h3 d-block",target:"_blank",rel:"noopener noreferrer"},"API")))),r.a.createElement(p.a,{path:"/pokemon/:id"},r.a.createElement("h1",null,"Specific Pokemon")),r.a.createElement(p.a,{path:"/"},r.a.createElement(f,null)))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.4638740b.chunk.js.map