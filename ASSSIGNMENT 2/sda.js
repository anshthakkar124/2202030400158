$(".carousel").owlCarousel({
    margin:2,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autopalyHoverPause:true,
    responsive:{
        300:{
            items:1,
            nav:false,
        },
    }
});
function fun(){
    alert("Thank you for using Foodie.And your Order deliver in 30 minutes.Have a good day")
}
// function fun2(){
//     fn=document.getElementById("name").value
//     ln=document.getElementById("name").value
//     m=document.getElementById("mob").value
//     e=document.getElementById("e1").value
//     p=document.getElementById("p1").value
//     pat_m=/^\d{10}$/;
//     pat_e=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
//     if(fn.length==0||ln.length==0||m.length==0||e.length==0||p.length==0){
//         alert("All information must be filled")
//     }
//     if(!pat_m.test(m)){
//         alert("mobile number must be in digit")
//     }
//     if(pat_e.test(e)){
//         alert("email must be in specifix syntax")
//     }
//     }

function fun1(){
    u=document.getElementById("d1").value;
    p=document.getElementById("d2").value;
    if(u.length==0 || p.length==0){
        alert("Username and password field must be filled")
    }
    else{
        alert("your login successfully")
    }  
}

