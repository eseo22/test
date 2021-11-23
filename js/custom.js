var next = document.querySelector(".next");
var list = document.querySelectorAll(".slide");
console.log(list);

// $(next).on("click", function(){

//     $(list).removeClass("on");
    

// })

setInterval(function(){
    $(list).addClass("on");
    
 },1000);