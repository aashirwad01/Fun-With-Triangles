const side1=document.querySelector("#box-1");
const side2=document.querySelector("#box-2");
const side3=document.querySelector("#box-3");
const btncheck=document.querySelector('#check');
const btnclear=document.querySelector('#clear');
var error=document.querySelector("#error");

btnclear.addEventListener("click",function refresh(){
    window.location.reload();
});

function calculateArea(e) {
    // e.preventDefault();

    const side1Value = Number(side1.value);
    const side2Value = Number(side2.value);
    const side3Value = Number(side3.value);

    if(side1.value.length==0 || side2.value.length==0 || side3.value.length==0)
    {
        error.style.display="block";
        error.style.color="red";
        error.innerHTML="Please enter values . No blank cells";
       

    }

    else if(isNaN(side1.value) || isNaN(side2.value)|| isNaN(side3.value))
    {
        error.style.display="block";
        error.style.color="red";
        error.innerHTML="Please enter numerical values";
       

    }
    else if(side1.value <=0 || side2.value.length<=0 || side3.value.length<=0)
    {
        error.style.display="block";
        error.style.color="red";
        error.innerHTML="Enter valid side lengths";
       

    }
  
    else if (
      side1Value + side2Value > side3Value &&
      side2Value + side3Value > side1Value &&
      side1Value + side3Value > side2Value
    ) {
      const semiPerimeter =
        (side1Value + side2Value + side3Value) / 2;
  
      const result = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - side1Value) *
          (semiPerimeter - side2Value) *
          (semiPerimeter - side3Value)
      ).toFixed(4);
      error.style.display="block";
      error.style.color="green";
      error.innerText = `Area of a triangle using heron's formula is ${result} units`;
    } 
    else {
        error.style.display="block";
        error.style.color="red";
      error.innerText = "Triangle not possible. Enter Valid side lengths. ";
    }
  }

  check.addEventListener("click", calculateArea);
  