var btn = document.querySelector("button");
var img1 = document.querySelector(".imgOne");
var img2 = document.querySelector(".imgTwo");

btn.addEventListener("click", function(){
    // img1.src="https://plus.unsplash.com/premium_photo-1710118737259-f24bffd63006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D"

    // img2.src="https://images.unsplash.com/photo-1711116179442-cb55d4416793?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"

   var src1= img1.src;
   var src2 = img2.src;
   
   img1.src= src2;
   img2.src= src1;
})