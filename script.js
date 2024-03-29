let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");



sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
})


genBtn.addEventListener('click',()=>{
    
        passBox.value = generatePassword();
    })      

copyIcon.addEventListener('click', ()=>{
    if(passBox.value != '' || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.title = "Password Copied!"
    copyIcon.classList.toggle("fa-check");
}
})



let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 

function generatePassword(){

    let generatePass = "";
    let allChars = "";


    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return generatePass;
    }


    let i = 0;
    while(i < inputSlider.value){
        generatePass += allChars.charAt(Math.floor(Math.random() * allChars.length))
        i++;
    }

    return generatePass

}
