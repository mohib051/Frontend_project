var h1 =document.createElement("h1"); //element is created,but it is in js file,not in html
h1.textContent="hii";
h1.classList.add("abcd");
// now,it will be visible in html file  --- kahaParRakhoge.appendChild();
document.querySelector("body").appendChild(h1);

var image = document.createElement("img");
image.src="https://images.unsplash.com/photo-1710880136880-e54ac22faf84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
image.alt="car";

document.querySelector("body").appendChild(image);