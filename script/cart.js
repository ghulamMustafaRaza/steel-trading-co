if (typeof(Storage) !== "undefined") {
    if(localStorage.cart && localStorage.cart!='undefined' && localStorage.cart!='null'){
        var cart = JSON.parse(localStorage.cart);
    }
    else{
        var cart = [];
        localStorage.cart =  JSON.stringify(cart);
    }  
}
function addToCart(obj, ind){
    var bul = true;
    for(i=0;i<cart.length;i++){
        if(obj[ind].name == cart[i].name){
            cart[i].qty = Number(cart[i].qty)+1; 
            bul = false;
            strfy()               
        }
    }
    if (bul){
        cart.push(obj[ind]);
        strfy();        
    }
    renderCartChair();
}

var nav = document.getElementById('navToAdd');
nav.innerHTML += '<a style="position:absolute; top: 50px; right:40px;" href="cart.html"><c id="cartChair" class="fa fa-shopping-cart" style="font-size:200%; color: #ffffff;margin-top: -62px;text-shadow: 0px 0px 1px black;" aria-hidden="true"><span style="margin-left:2px; color: #008b8b;font-size:50%">'+cart.length+'</span></c></a>';
function renderCartChair(){
    nav.getElementsByTagName('c')[0].innerHTML='<span style="margin-left:2px; color: #008b8b;font-size:50%">'+cart.length+'</span>';
    
};
function randerCart(){
    var cartDiv = document.getElementById('cartItems');
    cartDiv.innerHTML = '';
    if(cart.length>0){
            cartDiv.innerHTML+=`                <tr>
                    <th class="heading">PRODUCT NAME</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                </tr>`
            var totalTotal=0;
            for(i=0;i<cart.length;i++){
                    cart[i].total=cart[i].price*cart[i].qty;
                    cartDiv.innerHTML+=`                <tr class="productCart">
                            <th class="heading"><span onclick='removeCart(cart, `+i+`)' class='cross'>X</span>`+cart[i].name+`</th>
                            <th class="price">`+cart[i].price+` per kg</th>
                            <th class="qty"><label for="qty"></label><input min="0" type="number" value="`+cart[i].qty+`" class="inpQty" name="qty" id="qty" onchange="calculateTotal(this,cart[`+i+`])"> Kgs</th>
                            <th class="subTotal">`+cart[i].total+`</th>
                        </tr>`;
                        totalTotal+=cart[i].total;
            }
            cartDiv.innerHTML+=`                <tr class="productCart">
                            <th class="heading"></th>
                            <th class="price"></th>
                            <th class="qty">Total</th>
                            <th class="total">`+totalTotal+`</th>
                        </tr>`;
            cartDiv.innerHTML+=`                <tr class="productCart">
                            <th colspan="4" class="total"><span style="float: right;"><a href="javaScript:void(0)" style="float:right;" onclick="showCartMassage();" ><div class="cartLink btn">Proceed To Cart</div></a><br/><span id="cartMassage"></span></span></th>
                        </tr>`;
            var number=document.getElementsByClassName('inpQty')
            for(i=0;i<number.length;i++){
                number[i].onkeydown = function(e) {
                    if(!((e.keyCode > 95 && e.keyCode < 106)
                    || (e.keyCode > 47 && e.keyCode < 58) 
                    || e.keyCode == 8)) {
                        return false;
                    }
                }
            }
            localStorage.cart =  JSON.stringify(cart);        
    }else{
        cartDiv.innerHTML+=`<div class='massage'>You Have No Items On Your Cart</div>
        <div class="center">
            <h2>Buy Our products</h2>
            <a href="flat_product.html"><div class="btn">Flat Product</div></a>
            <a href="hexagon_product.html"><div class="btn">Hexagon Product</div></a>
            <a href="round_product.html"><div class="btn">Round Product</div></a>
        </div>`;

    }
    strfy()    
    renderCartChair();
}
function showCartMassage(){
    var spn = document.getElementById('cartMassage');
    spn.className='warning';
    spn.innerHTML='This Is Demo App This is no Have Payment Account';
}
function removeCart(array, int){
    array.splice(int,1);
    randerCart();
}
function calculateTotal( val,obj){
    obj.qty=val.value;
    randerCart();
}