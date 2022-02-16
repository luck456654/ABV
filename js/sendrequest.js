let formrequest=document.querySelector(".header__write-us");
let buttonrequest=document.querySelector(".header__button");

buttonrequest.addEventListener("click",showformrequest)

function showformrequest(){
    formrequest.style.display="flex";
}