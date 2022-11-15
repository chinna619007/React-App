(this["webpackJsonpReact-E-commerce-Site"]=this["webpackJsonpReact-E-commerce-Site"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(9),i=a.n(s),l=(a(15),a(7)),o=a(1),c=a(2),u=a(4),m=a(3);function d(e){return"$"+Number(e.toFixed(1)).toLocaleString()}var p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("ul",{className:"products"},this.props.products.map((function(t){return n.a.createElement("li",{key:t._id},n.a.createElement("div",{className:"product"},n.a.createElement("a",{href:"#"+t._id},n.a.createElement("img",{src:t.image,alt:t.title}),n.a.createElement("p",null,t.title," ")),n.a.createElement("div",{className:"product-price"},n.a.createElement("div",null,d(t.price)),n.a.createElement("button",{onClick:function(){return e.props.addToCart(t)},className:"button primary"},"Add to Cart"))))}))))}}]),a}(r.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"filter"},n.a.createElement("div",{className:"filter-result"},this.props.count," Products"),n.a.createElement("div",{className:"filter-sort"},"Order","",n.a.createElement("select",{value:this.props.sort,onChange:this.props.sortProducts},n.a.createElement("option",null,"Latest "),n.a.createElement("option",{value:"lowest"},"Lowest"),n.a.createElement("option",{value:"highest"},"highest"))),n.a.createElement("div",{className:"filter-size"},"Filter","",n.a.createElement("select",{value:this.props.size,onChange:this.props.filterProducts},n.a.createElement("option",{value:""},"ALL"),n.a.createElement("option",{value:"XS"},"XS"),n.a.createElement("option",{value:"S"},"S"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L"),n.a.createElement("option",{value:"XL"},"XL"),n.a.createElement("option",{value:"XXL"},"XXL"))))}}]),a}(r.Component),v=a(6),f=a(5),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this)).handleInput=function(e){r.setState(Object(f.a)({},e.target.name,e.target.value))},r.createOrder=function(e){e.preventDefault();var t={name:r.state.name,email:r.state.email,address:r.state.address,cartItems:r.props.cartItems};r.props.createOrder(t)},r.state={name:"",email:"",address:"",showCheckout:!1},r}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.cartItems;return n.a.createElement("div",null,0===t.length?n.a.createElement("div",{className:"cart cart-header"},"Cart is empty"):n.a.createElement("div",{className:"cart cart-header"},"You have ",t.length," in the Cart ","  "),n.a.createElement("div",null,n.a.createElement("div",{className:"cart"},n.a.createElement("ul",{className:"cart-items"},t.map((function(t){return n.a.createElement("li",{key:t._id},n.a.createElement("div",null,n.a.createElement("img",{src:t.image,alt:t.title})),n.a.createElement("div",null," ",t.title),n.a.createElement("div",{className:"right"},d(t.price)," * ",t.count,n.a.createElement("button",{className:"button",onClick:function(){return e.props.removeFromCart(t)}},"Remove")))})))),0!==t.length&&n.a.createElement("div",null,n.a.createElement("div",{className:"cart"},n.a.createElement("div",{className:"total"},n.a.createElement("div",null,"total:"," ",d(t.reduce((function(e,t){return e+t.price*t.count}),0))),n.a.createElement("button",{onClick:function(){e.setState({showCheckout:!0})},className:"button primary"},"Proceed"))),this.state.showCheckout&&n.a.createElement("div",{className:"cart"},n.a.createElement("form",{onSubmit:this.createOrder},n.a.createElement("ul",{className:"form-container"},n.a.createElement("li",null,n.a.createElement("label",null,"Email"),n.a.createElement("input",{name:"email",type:"email",required:!0,onChange:this.handleInput})),n.a.createElement("li",null,n.a.createElement("label",null,"Name"),n.a.createElement("input",{name:"name ",type:"text",required:!0,onChange:this.handleInput})),n.a.createElement("li",null,n.a.createElement("label",null,"Address"),n.a.createElement("input",{name:"address",type:"text",required:!0,onChange:this.handleInput})),n.a.createElement("button",{className:"button primary",type:"submit"},"Checkout")))))))}}]),a}(r.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).createOrder=function(e){alert("push the data "+e.name)},e.sortProducts=function(t){console.log(t.target.value);var a=t.target.value;e.setState((function(t){return{sort:a,products:e.state.products.slice().sort((function(e,t){return"lowest"===a?e.price>t.price?1:-1:"highest"===a?e.price<t.price?1:-1:e._id<t._id?1:-1}))}}))},e.filterProducts=function(t){""===t.target.value?e.setState({size:t.target.value,products:v.products}):e.setState({size:t.target.value,products:v.products.filter((function(e){return e.availableSizes.indexOf(t.target.value)>=0}))})},e.addToCart=function(t){var a=e.state.cartItems.slice(),r=!1;a.forEach((function(e){e._id===t._id&&(e.count++,r=!0)})),r||a.push(Object(l.a)(Object(l.a)({},t),{},{count:1})),e.setState({cartItems:a}),localStorage.setItem("cartItems",JSON.stringify(a))},e.removeFromCart=function(t){console.log("i am working");var a=e.state.cartItems.slice();e.setState({cartItems:a.filter((function(e){return e._id!==t._id}))}),localStorage.setItem("cartItems",JSON.stringify(a.filter((function(e){return e._id!==t._id}))))},e.state={products:v.products,size:"",sort:"",cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]},e}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"grid-container"},n.a.createElement("header",null,n.a.createElement("a",{href:"/"},"Shopping Cart")),n.a.createElement("main",null,n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"main"},n.a.createElement(h,{count:this.state.products.length,size:this.state.size,sort:this.state.sort,filterProducts:this.filterProducts,sortProducts:this.sortProducts}),n.a.createElement(p,{products:this.state.products,addToCart:this.addToCart})),n.a.createElement("div",{className:"sidebar"}),n.a.createElement(E,{cartItems:this.state.cartItems,removeFromCart:this.removeFromCart,createOrder:this.createOrder}))),n.a.createElement("footer",null,"React E-commerce Site"))}}]),a}(n.a.Component);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('{"products":[{"_id":"dress1","image":"/images/dress1.jpg","title":"Midi sundress with shirring detail","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","L","XL","XXL"],"price":29.9},{"_id":"dress2","image":"/images/dress2.jpg","title":"Midi sundress with ruched front","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","M","L"],"price":18.9},{"_id":"dress3","image":"/images/dress3.jpg","title":"Midi dress in pink ditsy floral","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","S","M","L"],"price":14.9},{"_id":"dress4","image":"/images/dress4.jpg","title":"cami maxi dress in polka dot","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["XL"],"price":25.9},{"_id":"dress5","image":"/images/dress5.jpg","title":"Frill mini dress in yellow polka dot","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","XS","L","XL"],"price":10.9},{"_id":"dress6","image":"/images/dress6.jpg","title":"Midi tea dress in blue and red spot","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["S","XL","XXL"],"price":49.9}]}')}},[[10,1,2]]]);
//# sourceMappingURL=main.f763bcdd.chunk.js.map