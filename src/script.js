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

        answer.innerText = ""
        
        showAnswer = false
        maskContent()
        moveCar(1000, 500)
    }else{
        let entree = document.getElementById("entree")
        let yesnoButtons = document.getElementById("yesno-buttons")
        let answerContainer = document.getElementById("answer-container")
        let answer = document.getElementById("answer")
        

        entree.style.display = "none"
        yesnoButtons.style.display = "none"

        answerContainer.style.display = "block"

        question = questions[questionId]
        if(question.type == "yesno"){
            if(yesnoSelection == question.answer){
                answer.innerText = "Bravo, tu connais la bonne réponse !"
            }else{
                answer.innerText = "Raté, voici la véritable réponse :"
            }
        }
        else if(question.type == "entry"){
            if(entree.value == question.answer){
                answer.innerText = "Bravo, tu a trouvé la valeur exacte !"
            }else if (question.answer * 0.9 < entree.value && entree.value  < question.answer* 1.1){
                answer.innerText = "Bravo, tu a presque trouvé !"
            }else{
                answer.innerText = "Raté, voici la véritable réponse :"
            }
        }
        showAnswer = true
    }
    
}

function maskContent(){
    let contentContainer = document.getElementById("content-container")
    contentContainer.classList.add("hide-child")
}
function unmaskContent(){
    let contentContainer = document.getElementById("content-container")
    contentContainer.classList.remove("hide-child")
}

showCanvas()