var input_box = document.getElementById("calculation");

function UserClickButton(input){
    var oldinput=input_box.value;
    var newinput=oldinput+""+input;
    input_box.value=newinput
    
}

function CalculateValue(){
    var input=input_box.value;
    var result=eval(input);
    input_box.value=result;
   
}

function ClearData(){
    input_box.value = "";
}