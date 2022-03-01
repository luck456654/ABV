const form=document.querySelector(".header__form-search")
const icon=document.querySelector(".header__tel")
icon.addEventListener("click",showSearch)
let sost=0

function showSearch(){
    if(i==0){
    form.style="transform: translateY(0vw);"
    form.style.transition="transform 1s linear";
    i=1;
}
else{
    form.style="transform: translateY(-100vw);"
    form.style.transition="transform 1s linear";
    i=0;  
}
}
    

