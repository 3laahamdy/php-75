$('.imgs').on('click',create)
function create(){
   $('section').show()
   $('a').show()
}
$('a').on('click',close)
function close(){
   $('section').hide()
   $('a').hide()
}
 



























var img = document.querySelector(".imegs");
var btns = document.querySelectorAll('button');
var images =["img/header.avif","img/hea.avif","img/head.avif","img/he.avif"]
for (let i of btns){
   i.addEventListener('click',toggleSlider)
    
    
}
var index = 0;
function toggleSlider(){
    
    if(this.id == "right"){
        if(index == images.length-1){
            index =0
        }else{
            index++;  
        }
    }else{
        if(index ==0){
            index = images.length-1;
        }else{
            index--; 
        } 
    }
    img.src=images[index];
}