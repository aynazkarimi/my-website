// =========================
// Theme Toggle
// =========================

const themeBtn = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = themeBtn.querySelector(".icon");


// Load saved theme

if (localStorage.getItem("theme") === "dark") {

    body.classList.add("dark");
    themeIcon.textContent = "☀️";

}



themeBtn.addEventListener("click", () => {


    body.classList.toggle("dark");


    const darkMode =
    body.classList.contains("dark");



    localStorage.setItem(
        "theme",
        darkMode ? "dark" : "light"
    );



    themeIcon.textContent =
    darkMode ? "☀️" : "🌙";


});







// =========================
// Mobile Menu
// =========================


const menuBtn =
document.querySelector(".menu-btn");


const navLinks =
document.querySelector(".nav-links");




menuBtn.addEventListener("click", () => {


    navLinks.classList.toggle("active");


});





// Close menu after clicking link

document
.querySelectorAll(".nav-links a")
.forEach(link => {


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});




// Close menu when clicking outside

document.addEventListener("click",(e)=>{


    if(
        !menuBtn.contains(e.target)
        &&
        !navLinks.contains(e.target)
    ){

        navLinks.classList.remove("active");

    }


});








// =========================
// Scroll Animation
// =========================


const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("show");


    }


});


},
{

threshold:0.15

});



document
.querySelectorAll("section")
.forEach(section=>{


    observer.observe(section);


});








// =========================
// Typing Effect
// =========================


const roleText =
"توسعه‌دهنده وب | علاقه‌مند به هوش مصنوعی و امنیت سایبری";



const roleElement =
document.querySelector(".role");



let index = 0;



function typing(){


    if(index < roleText.length){


        roleElement.textContent +=
        roleText.charAt(index);


        index++;


        setTimeout(
            typing,
            80
        );


    }


}



// Clear text before start

if(roleElement){


    roleElement.textContent="";


    typing();


}







// =========================
// Smooth Navbar Shadow
// =========================


window.addEventListener(
"scroll",
()=>{


const navbar =
document.querySelector(".navbar");



if(window.scrollY > 50){


    navbar.style.boxShadow =
    "0 15px 40px rgba(139,92,246,.25)";


}

else{


    navbar.style.boxShadow =
    "0 20px 50px rgba(59,130,246,.15)";


}

emailjs.init("rExnQn1ZLt1eOuJMb");


document
.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();


    emailjs.sendForm(
        "service_h4xg24h",
        "template_592rs6f",
        this
    )
    .then(() => {

        alert("پیام شما با موفقیت ارسال شد 💜");

        this.reset();

    })
    .catch(() => {

        alert("ارسال پیام ناموفق بود!");

    });


});


});