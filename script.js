var bar = document.getElementById('bar');
var close = document.getElementById('close');
var nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
   
}
if(close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
   
}


// function myFunction() {
//     var element = document.getElementById("bar");
//     element.classList.toggle(".active");
//  }

// function myfun(){
//     alert("hello world");
// }


// function myFun() {
//     var x = document.getElementById("active");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }