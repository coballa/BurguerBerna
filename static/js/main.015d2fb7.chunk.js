(this.webpackJsonpburguer_berna=this.webpackJsonpburguer_berna||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Ensaladilla Rusa","descrip":"MUCHAS","symbol":"2,80\u20ac","keywords":""},{"title":"Bocas de Mar","descrip":"","symbol":"2,70\u20ac","keywords":""},{"title":"Pincho de Tortilla","descrip":"","symbol":"2,00\u20ac","keywords":""},{"title":"Olivas","descrip":"Rellenas de anchoas","symbol":"1,60\u20ac","keywords":""},{"title":"Almendras","descrip":"Marca Marcona","symbol":"1,60\u20ac","keywords":""},{"title":"Bolsa de Patatas","descrip":"","symbol":"1,30\u20ac","keywords":""},{"title":"Boquerones en Vinagre","descrip":"","symbol":"3,70\u20ac","keywords":""},{"title":"Jilda","descrip":"Boquerones con patatas","symbol":"4,50\u20ac","keywords":""},{"title":"Patatas Bravas","descrip":"Naturales","symbol":"4,00\u20ac","keywords":""},{"title":"Caracoles en Salsa","descrip":"","symbol":"5,00\u20ac","keywords":""},{"title":"Pulpo a la Gallega","descrip":"","symbol":"8,00\u20ac","keywords":""},{"title":"Muslitos de Mar","descrip":"5 Unidades","symbol":"7,50\u20ac","keywords":""},{"title":"Calamares","descrip":"A la Andaluza","symbol":"8,00\u20ac","keywords":""},{"title":"Zepelines de Merluza","descrip":"Casero, 5 Unidades","symbol":"8,50\u20ac","keywords":""},{"title":"Croquetas de Jam\xf3n","descrip":"Casero, 6 Unidades","symbol":"6,50\u20ac","keywords":""},{"title":"Nuggets de Pollo","descrip":"6 Unidades","symbol":"2,80\u20ac\u20ac","keywords":""},{"title":"Patatas Fritas","descrip":"","symbol":"1,80\u20ac","keywords":""},{"title":"Muslito de Mar","descrip":"Unidad individuales","symbol":"1,60\u20ac","keywords":""},{"title":"Tigres","descrip":"1 Unidad","symbol":"1,50\u20ac","keywords":""},{"title":"Zepelin de Merluza","descrip":"Casero, Unidades individuales","symbol":"1,90\u20ac","keywords":""},{"title":"Croqueta de Jam\xf3n","descrip":"Casero, Unidades individuales","symbol":"1,20\u20ac","keywords":""},{"title":"Ensalada de Rulo","descrip":"Queso Rulo de Cabra, Brotes tiernos de Lechuga Batavia Verde, Lechuga Batavia Roja, Lechuga Lollo Rosso, Brotes de Espinaca, R\xfacula, Tomate Cherry, Pasas,Nueces y Reducci\xf3n Pedro Xim\xe9nez","symbol":"8,50\u20ac","keywords":""},{"title":"","descrip":"","symbol":"\u20ac","keywords":""},{"title":"","descrip":"","symbol":"\u20ac","keywords":""},{"title":"","descrip":"","symbol":"\u20ac","keywords":""},{"title":"","descrip":"","symbol":"\u20ac","keywords":""},{"title":"","descrip":"","symbol":"\u20ac","keywords":""},{"title":"","descrip":"","symbol":"\u20ac","keywords":""},{"title":"","descrip":"","symbol":"\u20ac","keywords":""},{"title":"","descrip":"","symbol":"\u20ac","keywords":""},{"title":"","descrip":"","symbol":"\u20ac","keywords":""},{"title":"","descrip":"","symbol":"\u20ac","keywords":""}]')},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo_berna.7c5b7695.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),i=a(6),o=a.n(i),n=a(1),l=a(2),c=a(4),d=a(3),u=(a(14),function(e){Object(c.a)(r,e);var t=Object(d.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return s.a.createElement("header",{className:"component-header"},s.a.createElement("img",{src:a(15),width:"32",height:"32",alt:""}),"Buerguer Berna")}}]),r}(r.PureComponent)),p=(a(16),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).handleChange=function(t){e.props.textChange(t)},e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"component-search-input"},s.a.createElement("div",null,s.a.createElement("input",{onChange:this.handleChange})))}}]),a}(r.PureComponent)),m=a(7),y=a.n(m),b=(a(17),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"component-emoji-result-row copy-to-clipboard","data-clipboard-text":this.props.symbol},s.a.createElement("div",{className:"item"},s.a.createElement("div",{className:"title"},this.props.title),s.a.createElement("div",{className:"descrip"},this.props.descrip)),s.a.createElement("div",{className:"info"},this.props.symbol))}}]),a}(r.PureComponent)),h=(a(18),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.clipboard=new y.a(".copy-to-clipboard")}},{key:"componentWillUnmount",value:function(){this.clipboard.destroy()}},{key:"render",value:function(){return s.a.createElement("div",{className:"component-emoji-results"},this.props.emojiData.map((function(e){return s.a.createElement(b,{key:e.title,descrip:e.descrip,symbol:e.symbol,title:e.title})})))}}]),a}(r.PureComponent)),k=a(8);function w(e,t){return k.filter((function(t){return!!t.title.toLowerCase().includes(e.toLowerCase())||!!t.keywords.includes(e)})).slice(0,t)}var f=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleSearchChange=function(e){r.setState({filteredEmoji:w(e.target.value,20)})},r.state={filteredEmoji:w("",100)},r}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u,null),s.a.createElement(p,{textChange:this.handleSearchChange}),s.a.createElement(h,{emojiData:this.state.filteredEmoji}))}}]),a}(r.PureComponent);a(19),a(20);o.a.render(s.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.015d2fb7.chunk.js.map