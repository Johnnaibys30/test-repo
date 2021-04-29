const display = document.querySelector(".display")
//get all the references to all the buttons
const allButtons = document.querySelectorAll("button")
console.log(allButtons)
//array for all the number buttons 
const allNumberBtns = document.querySelectorAll(".number")
console.log(allNumberBtns)
//array for all the opperators 
const allOppBtns=document.querySelectorAll(".operation")
console.log(allOppBtns)
//a variable for the clear button
const clearBtn = document.querySelector(".all-clear");
console.log(clearBtn)
const delBtn = document.querySelector(".lastentity-clear");
console.log(delBtn)

//a variable for the equals button
const equalsBtn = document.querySelector(".equals");
console.log(equalsBtn)
// add event listeners to the number buttons

for (let i=0; i<allNumberBtns.length; i++){
    allNumberBtns[i].addEventListener("click",(e)=>{
       display.innerText += e.target.innerText
    })
}
let oppButton = ""
let calculatorValue = ""
// make the numbers show in the screen 

// what happens when someone hits the + button and - button 
for (let i=0; i<allOppBtns.length; i++){
    allOppBtns[i].addEventListener("click",(e)=>{
       calculatorValue = display.innerText
       display.innerText = "" 
       oppButton = e.target
    })
}


//when the person clicks the equals button
equalsBtn.addEventListener("click",()=>{
    //get new value in display
    let answer = ""

    console.log(oppButton,oppButton.innerText)
    //calculator value opperator new value 
    if (oppButton.innerText == "+"){
        answer = +calculatorValue + +display.innerText 
         }
    if (oppButton.innerText == "-"){
        answer = calculatorValue - display.innerText
    }
    if (oppButton.innerText == "X"){
        answer = calculatorValue * display.innerText
    }
    if (oppButton.innerText == "/"){
        answer = calculatorValue / display.innerText
    }
    if (oppButton.innerText == "%"){
        answer = calculatorValue % display.innerText
    }
    
    
    //set the new value to display
    display.innerText = answer
    calculatorValue = "" 
    
})

clearBtn.addEventListener("click",()=>{
    display.innerText = ""
    claculatorValue = ""
} )

delBtn.addEventListener("click",()=>{
    display.innerText
})