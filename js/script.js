let menu = document.querySelector("#navbar");
let mynav = document.querySelector(".menu");

let showcontactform = document.querySelector(".contact");
let myform = document.querySelector(".contact-form")

let formclose = document.querySelector("#form-close")




onclick = () =>{
    menu.classList.toggle("fa-times")
    mynav.classList.toggle("active")
}

showcontactform.onclick = () =>{
    myform.classList.toggle('active')
}
formclose.onclick = () =>{
    myform.classList.remove('active')
}


