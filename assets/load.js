// Fetch Json
var questionObj = {};

fetch("../assets/json/fisrtJson.json").then(function (res){
    return res.json();
}).then(function (obj){
    ObjQuiz(obj)
}).catch( function(error){
     console.log('Semething went Wrong');
})

var question = document.querySelector(".question")
var answerList= document.querySelector(".answers")
function ObjQuiz(params) {
    // variables    
    console.log(params.questions[0]);
    answerList.forEach(e => {
         console.log(e.target);
    });


}




// Main setting

var userName = document.querySelector("#user-name")
var submit = document.querySelector("#submit")
let danger = document.querySelector("#danger")
let success = document.querySelector("#success")


submit.addEventListener("click", () =>{

  if(userName.value === ""){
        danger.style.display = "block"
        success.style.display = "none"
  }else{
        success.style.display = "block"
        danger.style.display = "none"
        localStorage.setItem("user", userName.value)
  }
})





let middle = document.querySelector(".middle-container")
let QuizBox = document.querySelector(".main-quiz")
var subject ;

var a = document.querySelector('.custom-select');
a.addEventListener('change', function(e) {
    var title = document.querySelector(".title")
      subject = e.target.value

      if(e.target.value  == 1) {
        title.textContent = "Java "
      }else{
        title.textContent = "C++ "
      }
      console.log(subject);
}, false);

var btnStart = document.querySelector("#btn-start")


btnStart.addEventListener("click", () => {

  if(localStorage.getItem("user") === ""){
    danger.style.display = "block"
  }else{
    danger.style.display = "none"
    middle.style.display = "none"
    QuizBox.style.display = "block"

  }
})




