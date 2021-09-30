const quizque=document.querySelector(".quizans");
const btncheck=document.querySelector("#check");
const btnclear=document.querySelector('#clear');
var error=document.querySelector("#error");

btnclear.addEventListener("click",function refresh(){
    window.location.reload();
});

const correctAnswers = [
    "90°",
    "180°",
    "0",
    "Equal",
    "45°",
    "Perimeter",
    "60°",
    
  ];
  




function calculateScore() {
   
    const formResults = new FormData(quizque);
    let score = 0,index = 0,n=0;

    
    for (let value of formResults.values()) {

    console.log(value,index);
    if (value === correctAnswers[index]) {
        score = score + 1;
      }
      index = index + 1;
      n=n+1;
    }

    if(n==7){
    error.style.display="block";
    error.style.color="green";
    error.innerText = "The score is " + score;

    }

    else{
        error.style.display="block";
    error.style.color="red";
    error.innerText = "Please provide all values " ;
    }

    
  }

  btncheck.addEventListener("click",calculateScore);
  