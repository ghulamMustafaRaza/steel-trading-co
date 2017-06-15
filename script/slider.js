//================================================
//          import refrenses from html
//================================================
var slider              =   document.getElementById('slider');
var slidesContain       =   document.getElementById('slides-container');
var circle              =   document.getElementById('circle');
var slides              =   slidesContain.getElementsByClassName('slide');
var btn                 =   slider.getElementsByClassName('btn');
//================================================
//Making slides width, height = to slider width, height
//================================================
var bone                =   (slider.offsetWidth);

    
//================================================
//        Making circles in circle span
//================================================
circle.innerHTML = '';
for(i=0;i<slides.length;i++){
    if(i==0){
    circle.innerHTML += '<span class="btnD active" onclick="change(0,'+i+')"></span>'       
    }else{
    circle.innerHTML += '<span class="btnD" onclick="change(0,'+i+')"></span>'
    }
}
//================================================
//          set circles parrent width
//================================================
circle.style.width      =   slides.length*20+'px';
circle.style.left       =   ((bone-(slides.length*20))/2)+'px';
//================================================
//   import circleparrants child thos i create
//================================================
var circleChild         =   circle.children;

function sliderCalc(){
    //================================================
    //Making slides width, height = to slider width, height
    //================================================
    bone                =   (slider.offsetWidth);
    for(i=0;i<slides.length;i++){
        slides[i].style.width = bone+'px';
        // slides[i].style.height = sliderHeight+'px';
    }
    slider.style.height     =   slides[0].offsetHeight+'px';
    circle.style.left       =   ((bone-(slides.length*20))/2)+'px';
    for(i=0;i<btn.length;i++){
        btn[i].style.top       =   ((slides[0].offsetHeight-40)/2)+'px';;
    }
    //================================================
    //  set images containe and sliders child width
    //================================================
    slidesContain.style.width = (bone*Number(slides.length))+'px';
    //================================================
    //   declear a variable for position reminding
    //================================================
    // position = 0;
    
 
    slidesContain.style.transition = "left 0s linear"; 
    slidesContain.style.left = position*-bone+'px'  

}
//================================================
//   declear a variable for position reminding
//================================================
var position = 0;
sliderCalc();
addResizeListener(slider, sliderCalc)
//================================================
//        make function for change image
//================================================
function change(go,ind){
    //================================================
    //    set timeing of a slide under slide change
    //================================================
    slidesContain.style.transition = "left 0.5s linear";  
    //================================================
    //          make some calculation
    //================================================  
    var calc = slidesContain.style.width;
    calc = -(calc.slice(0,-2));
    //================================================
    //   check a condition check call right or not
    //================================================
    if(go==1){
        //================================================
        //-position if position is - left is - if left is - image is +
        //================================================
        position += 1;
        //================================================
        //checking the position is over from total images if so it can reset it
        //================================================
        if(position>=(slides.length)){
            // alert('hi')
            position = 0;
        }
        clearInterval(interval);
        interval = setInterval(changein,5000);  
    }
    //================================================
    // check condition if call is no right so else if call is left?
    //================================================
    else if(go==-1){
        //================================================
        //+ the position if position is + left is + if Left is + image is -
        //================================================
        position -= 1;
        //================================================
        // chaking the position is in over if over it reset it
        //================================================
        if(position<=0){
            // alert('hi')
            position = slides.length-1;
        }
        clearInterval(interval);
        interval = setInterval(changein,5000);  
    }
    //================================================
    //check condition than no right no left so call forom circle ?
    //================================================
    else if(go==0){
        position = ind;
        clearInterval(interval);
        interval = setInterval(changein,5000);  
    }
    //================================================
    //make changing slide image and change active circle
    //================================================
    slidesContain.style.left = position*-bone+'px'
    current = position;
    for(i=0;i<circleChild.length;i++){
        circleChild[i].className = 'btnD';
    }
    circleChild[current].className = 'btnD active';
    clearInterval(interval);
    interval = setInterval(changein,5000); 
}
//================================================
//      make a function for time interval
//================================================
function changein(){
    change(1);
}
//================================================
//              set time interval
//================================================
var interval;
interval = setInterval(changein,5000);