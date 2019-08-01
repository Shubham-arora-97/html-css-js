

var add_button = document.getElementById("addition");
var sub_button = document.getElementById("subtraction");
var mul_button = document.getElementById("multiplication");
var div_button = document.getElementById("division");

add_button.addEventListener('click', add);
sub_button.addEventListener("click", sub);
mul_button.addEventListener("click", mul);
div_button.addEventListener('click', div);

function add(){
    var num1=document.getElementById("1st_number").value;
    var num2=document.getElementById("2nd_number").value;
    document.getElementById("result").innerHTML=parseInt(num1)+parseInt(num2);
    console.log(parseInt(num1)+parseInt(num2));
}

function sub(num1,num2){
var num1=document.getElementById("1st_number").value;
    var num2=document.getElementById("2nd_number").value;
    document.getElementById("result").innerHTML=parseInt(num1)-parseInt(num2);
    console.log(parseInt(num1)-parseInt(num2));
}

function mul(){
    var num1=document.getElementById("1st_number").value;
    var num2=document.getElementById("2nd_number").value;
    document.getElementById("result").innerHTML=parseInt(num1)*parseInt(num2);
    console.log(parseInt(num1)*parseInt(num2));
}

function div(num1,num2){
    var num1=document.getElementById("1st_number").value;
    var num2=document.getElementById("2nd_number").value;
    document.getElementById("result").innerHTML=parseInt(num1)/parseInt(num2);
    console.log(parseInt(num1)/parseInt(num2));
}