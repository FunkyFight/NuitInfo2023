let questions = undefined
let questionId = 0

let yesnoSelection = undefined

showAnswer = false

fetch('./questions.json')
    .then((response) => response.json())
    .then((json) => {
        questions = json.sort((a, b) => 0.5 - Math.random())
        setQuestion(questions[0])
    });

function showCanvas(){
    let canvasContainer = document.getElementById("canvas-container")
    let contentContainer = document.getElementById("content-container")

    canvasContainer.classList.remove("up")
    contentContainer.classList.remove("up")
}

function showContent(){
    let canvasContainer = document.getElementById("canvas-container")
    let contentContainer = document.getElementById("content-container")

    canvasContainer.classList.add("up")
    contentContainer.classList.add("up")
}

function entreeClick(){
    showContent()
}

function noClick(){
    document.getElementById("yesButton").classList.remove("yes-button-activated")
    document.getElementById("noButton").classList.add("no-button-activated")
    yesnoSelection = "no"
    showContent()
}

function yesClick(){
    document.getElementById("yesButton").classList.add("yes-button-activated")
    document.getElementById("noButton").classList.remove("no-button-activated")
    yesnoSelection = "yes"
    showContent()
}

let currentQuestionType = "entry"

function yesnoQuestion(){
    let yesnoButtons = document.getElementById("yesno-buttons")
    yesnoButtons.style.display = "flex"

    document.getElementById("yesButton").classList.remove("yes-button-activated")
    document.getElementById("noButton").classList.remove("no-button-activated")

    let entree = document.getElementById("entree")
    entree.style.display = "none"

    currentQuestionType = "yesno"
    yesnoSelection = undefined
}

function entryQuestion(){
    let yesnoButtons = document.getElementById("yesno-buttons")
    yesnoButtons.style.display = "none"

    let entree = document.getElementById("entree")
    entree.style.display = "flex"

    currentQuestionType = "entry"
}

function setQuestion(question){
    let questionText = document.getElementById("question")
    let answerContainer = document.getElementById("answer-container")

    questionText.innerText = question.question
    answerContainer.innerHTML = question.truth

    answerContainer.style.display = "none"

    
    if(question.type == "yesno"){
        yesnoQuestion()
    }
    else if (question.type == "entry"){
        entryQuestion()
    }
}

function continueClick(){
    if(showAnswer){
        showCanvas()
        questionId+=1
        questionId%=questions.length
        setQuestion(questions[questionId])
        
        showAnswer = false
    }else{
        let entree = document.getElementById("entree")
        let yesnoButtons = document.getElementById("yesno-buttons")
        let answerContainer = document.getElementById("answer-container")
        

        entree.style.display = "none"
        yesnoButtons.style.display = "none"
        answerContainer.style.display = "flex"


        showAnswer = true
    }
    
}


showCanvas()