//Search bar

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    menu.classList.remove('active');
};

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    menu.classList.toggle('active');
    search.classList.remove('active');
};

//Hide Menu and Search Box on Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

//Sticky mavbar

window.addEventListener('scroll', function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Contact us form validation
function contact_message(){
    let name = document.forms["myForm"]["name_field"].value;
    let email = document.forms["myForm"]["email_field"].value;
    let subject = document.forms["myForm"]["subject_field"].value;
    let message = document.forms["myForm"]["message_field"].value;

    if (name == "") {
        alert("Enter Your Name");
        return false;
    } 
    else if(email == ""){
        alert("Enter Your Email");
        return false;
    }
    else if(subject == ""){
        alert("Enter Your Subject");
        return false;
    }
    else if (message == ""){
        alert("Enter Your Message");
        return false;
    }
    else{
        alert(name + " Your Message Recieved ");
        return false;
    }
}