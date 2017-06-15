// if (typeof(Storage) !== "undefined") {
//     if(localStorage.userName && localStorage.userName!='undefined' && localStorage.userName!='null'){
//          document.write('<div id="User"> User : '+localStorage.userName+'</div>')
//     }else {
//         localStorage.userName = prompt('what is your name');
//          document.write('<div id="User"> User : '+localStorage.userName+'</div>')        
//     }    
// }

function strfy(){
    localStorage.cart =  JSON.stringify(cart);    
    localStorage.wishList =  JSON.stringify(wishList);    
}
document.addEventListener('contextmenu', function(evt) { 
  evt.preventDefault();
}, false)