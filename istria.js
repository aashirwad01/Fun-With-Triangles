const angle1=document.querySelector("#box-1");
const angle2=document.querySelector("#box-2");
const angle3=document.querySelector("#box-3");
const btncheck=document.querySelector('#check');
const btnclear=document.querySelector('#clear');
var error=document.querySelector("#error");

btnclear.addEventListener("click",function refresh(){
    window.location.reload();
});

btncheck.addEventListener("click",function checkangle(){

    if(angle1.value.length==0 || angle2.value.length==0 || angle3.value.length==0)
    {
        error.style.display="block";
        error.style.color="red";
        error.innerHTML="Please enter values . No blank cells";
       

    }

    else if(isNaN(angle1.value) || isNaN(angle2.value)|| isNaN(angle3.value))
    {
        error.style.display="block";
        error.style.color="red";
        error.innerHTML="Please enter numerical values";
       

    }
    else if(angle1.value <=0 || angle2.value<=0 || angle3.value<=0)
    {
        error.style.display="block";
        error.style.color="red";
        error.innerHTML="Please enter proper values";
       

    }
    else if(parseInt(angle1.value) ===180 || parseInt(angle2.value)===180 || parseInt(angle3.value)===180)
    {
        error.style.display="block";
        error.style.color="red";
        error.innerHTML="Please enter proper values";
       

    }

    else if(parseInt(angle1.value)+parseInt(angle2.value)+parseInt(angle3.value)!=180){
        error.style.display="block";
        error.style.color="blue";
        error.innerHTML="Not a Triangle";
        
    }
    else{
        error.style.display="block";
        error.style.color="green";
        error.innerHTML="You have found a Triangle";

    }




});