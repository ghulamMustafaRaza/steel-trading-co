if (typeof(Storage) !== "undefined") {
    if(localStorage.wishList && localStorage.wishList!='undefined' && localStorage.wishList!='null'){
        var wishList = JSON.parse(localStorage.wishList);
    }
    else{
        var wishList = [];
        localStorage.wishList =  JSON.stringify(wishList);
    }  
}

//==================================

function addToWishList(obj, ind){
    var bul = true;
    for(i=0;i<wishList.length;i++){
        if(obj[ind].name == wishList[i].name){
            bul = false;            
        }
    }
    if (bul){
        wishList.push(obj[ind]);
        strfy();        
    }
    renderWishListChair();
}


//==================================

var nav = document.getElementById('navToAdd');
nav.innerHTML += '<a style="position:absolute; top: 50px; right:100px;" href="wishlist.html"><b id="wishlist" class="fa fa-shopping-bag" style="font-size:200%; color: #ffffff;margin-top: -62px;text-shadow: 0px 0px 1px black;" aria-hidden="true"><span style="margin-left:2px; color: #008b8b;font-size:50%">'+wishList.length+'</span></b></a>';

//==================================

function renderWishListChair(){
    document.getElementById('wishlist').innerHTML='<span style="margin-left:2px; color: #008b8b;font-size:50%">'+wishList.length+'</span>';
};

//==================================

    renderWishListChair()

//==================================

function addToWishList(obj, ind){
    var bul = true;
    for(i=0;i<wishList.length;i++){
        if(obj[ind].name == wishList[i].name){
            bul = false;            
        }
    }
    if (bul){
        wishList.push(obj[ind]);
        strfy();        
    }
    renderWishListChair();
}


//==================================

function renderWishList(){
    var parrent = document.getElementById('wishListItems');
        parrent.innerHTML='';
    
    if(wishList.length>0){
        for(i=0;i<wishList.length;i++){
            parrent.innerHTML+=`
<tr class="product">
    <th class="delet"><span class="cross" onclick="deleteWishlist(`+i+`)">X</span></th>
    <th class="productImg">
        <img src="`+wishList[i].img+`">
    </th>
    <th class="productName">
        <strong>`+wishList[i].name+`</strong>
    </th>
    <th class="productDiscription">
        `+wishList[i].discription+`
    </th>
    <th class="productControl">
        <button onclick="addToCart(wishList,`+i+`);deleteWishlist(`+i+`);" class="btn">
            Add To Cart
        </button>
    </th>
</tr>`
        }
    }else{
        parrent.innerHTML+=`<div class='massage'>You Have No Items On Your wish list</div>
        <div class="center">
            <h2>Go And Add Product To Your Wish list</h2>
            <a href="flat_product.html"><div class="btn">Flat Product</div></a>
            <a href="hexagon_product.html"><div class="btn">Hexagon Product</div></a>
            <a href="round_product.html"><div class="btn">Round Product</div></a>
        </div>`;

    }
}

//==================================

function deleteWishlist(ind){
    wishList.splice(ind,1);
    renderWishList();
    renderWishListChair();
    strfy();

}
