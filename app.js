//var username= prompt("Give me usernme");
//welcomeMessage="Script is working.!" + username;
//alert(welcomeMessage);
var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
console.log(txtInput);
function clickHandler(){
        console.log("clicked!");
        console.log("input",txtInput.value);
};

btnTranslate.addEventListener("click",clickHandler)


