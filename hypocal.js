const base=document.querySelector("#box-1");
const height=document.querySelector("#box-2");

const btncheck=document.querySelector('#check');
const btnclear=document.querySelector('#clear');
var error=document.querySelector("#error");

btnclear.addEventListener("click",function refresh(){
    window.location.reload();
});

btncheck.addEventListener("click",function calculatehypo(){

    if(base.value.length==0 || height.value.length==0 )
    {
        error.style.display="block";
        error.style.color="red";
        error.innerHTML="Please enter values . No blank cells";
       

    }

    else if(isNaN(base.value) || isNaN(height.value))
    {
        error.style.display="block";
        error.style.color="red";
        error.innerHTML="Please enter numerical values";
       

    }
    else if(parseInt(base.value) <=0 || parseInt(height.value)<=0 )
    {
        error.style.display="block";
        error.style.color="red";
        error.innerHTML="Please enter proper values";
       

    }

    else{
        var b=base.value;
        var h=height.value;
        var hypo=Math.sqrt((b*b)+(h*h));
        error.style.display="block";
        error.style.color="green";
        error.innerHTML="Length of Hypotenuse is "+hypo.toFixed(3);
       
    }

});