var btn =document.querySelector("button");
btn.style.textTransform="uppercase";
btn.style.backgroundColor="blue";
btn.style.color="white";

btn.addEventListener("click", function(){
    btn.textContent="downloading..";
    btn.style.backgroundColor="green";
})

document.querySelector("body")
    .addEventListener("mousemove", function(details){
    console.log(details);
})