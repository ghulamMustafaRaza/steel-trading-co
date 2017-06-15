function renderRound(){
    var parrent = document.getElementById('roundProduct');
    console.log(roundProduct);
    console.log(roundProduct.length);
    for(i=0;i<roundProduct.length;i++){
      // alert('hi')
        parrent.innerHTML+=`
<div>
    <div class="th" >
        <h2>`+roundProduct[i].name+`</h2>
    </div>
    <div class="productContain" >
        <div class="inlineContain" style="width:40%">
            <img style="border-radius:50%;width:410px; margin-top:3px; box-shadow:2px 2px 2px black;border: 5px solid #DED1AF;" src="`+roundProduct[i].img+`" />
        </div>
        <div class="inlineContain" style="width:30%; left:40%;">
            <p style="height:360px; text-align:justify;">`+roundProduct[i].discription+`</p>
            <strong style="display:block;  font-size:30px; height:40px;">price:`+roundProduct[i].price+` rs/kg </strong>
        </div>
        <div class="inlineContain" style="width:30%;right:0px;">
            <button class="addToWishList btn " onclick="addToWishList(roundProduct, `+i+`)" id="add">Add To Wish List</button>
            <button class="addToCart btn" onclick="addToCart(roundProduct, `+i+`)" id="add">Add To Cart</button>
            <br /><br /><br />
        </div>
    </div>
</div>
        `;
    }
}
function renderSquare(){
    var parrent = document.getElementById('squareProduct');
    console.log(squareProduct);
    console.log(squareProduct.length);
    for(i=0;i<squareProduct.length;i++){
      // alert('hi')
        parrent.innerHTML+=`
<div>
    <div class="th" >
        <h2>`+squareProduct[i].name+`</h2>
    </div>
    <div class="productContain" >
        <div class="inlineContain" style="width:40%">
            <img style="border-radius:50%; width:410px; margin-top:3px; box-shadow:2px 2px 2px black;border: 5px solid #DED1AF;" src="`+squareProduct[i].img+`" />
        </div>
        <div class="inlineContain" style="width:30%; left:40%;">
            <p style="height:360px; text-align:justify;">`+squareProduct[i].discription+`</p>
            <strong style="display:block;  font-size:30px; height:40px;">price:`+squareProduct[i].price+` rs/kg </strong>
        </div>
        <div class="inlineContain" style="width:30%;right:0px;">
                <button class="addToWishList btn" onclick="addToWishList(squareProduct, `+i+`)" id="add">Add To Wish List</button>
                <button class="addToCart btn" onclick="addToCart(squareProduct, `+i+`)" id="add">Add To Cart</button>
            <br /><br /><br />
        </div>
    </div>
</div>
        `;
    }
}

function rendeHex(){
    var parrent = document.getElementById('HexagonProduct');
    console.log(HexagonProduct);
    console.log(HexagonProduct.length);
    for(i=0;i<HexagonProduct.length;i++){
      // alert('hi')
       parrent.innerHTML+=`
<div>
    <div class="th" >
        <h2>`+HexagonProduct[i].name+`</h2>
    </div>
    <div class="productContain" >
        <div class="inlineContain" style="width:40%">
            <img style="border-radius:50%; width:410px; margin-top:3px; box-shadow:2px 2px 2px black;border: 5px solid #DED1AF;" src="`+HexagonProduct[i].img+`" />
        </div>
        <div class="inlineContain" style="width:30%; left:40%;">
            <p style="height:360px; text-align:justify;">`+HexagonProduct[i].discription+`</p>
            <strong style="display:block;  font-size:30px; height:40px;">price:`+HexagonProduct[i].price+` rs/kg </strong>
        </div>
        <div class="inlineContain" style="width:30%;right:0px;">
            <a href="#">
                <button class="addToWishList btn" onclick="addToWishList(HexagonProduct, `+i+`)" id="add">Add To Wish List</button>
                <button class="addToCart btn" onclick="addToCart(HexagonProduct, `+i+`)" id="add">Add To Cart</button>
            </a>
            <br /><br /><br />
        </div>
    </div>
</div>
        `; 
    }
}