
const questions = [
    {
      question: "Kuka on tehnyt eniten maaleja jalkapallon MM-kisoissa?",
      a: "Ronaldo",
      b: "Pele",
      c: "Cristiano Ronaldo",
      d: "Miroslav Klose",
      rightAnswer : "d"
    },
    {
      question: "Mikä näistä on Metallican albumi?",
      a: "Ride The Lightning",
      b: "Steel",
      c: "Kill The Lights",
      d: "Piece Of Mind",
      rightAnswer: "a"
    },
    {
      question: "Mikä eläin on Crash Bandicoot pelisarjan päähahmo Crash?",
      a: "Koira",
      b: "Kettu",
      c: "Kissa",
      d: "Kameli",
      rightAnswer: "b"
    },
    {
      question: "Mikä oli Arnold Schwarzeneggerin esittämän Terminaattorin sarjanumero?",
      a: "T-1",
      b: "T-1000",
      c: "T-101",
      d: "T-800",
      rightAnswer: "d"
    },
    {
      question: "Mikä NHL joukkue voitti Stanley Cupin vuonna 2012?",
      a: "Los Angeles Kings",
      b: "Chicago Blackhawks",
      c: "Washington Capitals",
      d: "Boston Bruins",
      rightAnswer: "a"
    },
    {
      question: "Mikä on Metal Gear Solid pelisarjan päähahmo?",
      a: "Fatman",
      b: "Iroquois Pliskin",
      c: "Solid Snake",
      d: "Solidus Snake",
      rightAnswer: "c"
    },
    {
      question: "Kuka on God of War ensimmäisen God of War pelin alkaessa?",
      a: "Ares",
      b: "Kratos",
      c: "Zeus",
      d: "Liquid Snake",
      rightAnswer: "a"
    },
    {
      question: "Mikä on Borderlands pelisarjan puhuvan apurobotin nimi?",
      a: "R2D2",
      b: "Robo",
      c: "Grey Fox",
      d: "Claptrap",
      rightAnswer: "d"
    },
    {
      question: "Kuka ääninäyttelee Solid Snakea Metal Gear Solid pelisarjassa?",
      a: "David Hayter",
      b: "Hideo Kojima",
      c: "David Copperfield",
      d: "Dale Hunter",
      rightAnswer: "a"
    },
    {
      question: "Kuka on tehnyt eniten pisteitä NHL:ssä saksalaisista pelaajista?",
      a: "Uwe Krupp",
      b: "Marco Sturm",
      c: "Mikro Lüdemann",
      d: "Leon Draisaitl",
      rightAnswer: "d"
    },
    {
      question: "Mikä näistä olutmerkeistä on kotoisin Bayreuthista?",
      a: "Maisel's Weisse",
      b: "Krombacher",
      c: "Augustiner",
      d: "Bitburger",
      rightAnswer: "a"
    },
    {
      question: "Ketkä ovat Joe Gatto, Brian Quinn, Sal Vulcano ja James Murray?",
      a: "Metallica",
      b: "Impractical Jokers",
      c: "Trigger Happy TV",
      d: "Monty Python",
      rightAnswer: "b"
    },
    {
      question: "Mikä näistä on Dark Souls pelisarjan hahmo?",
      a: "Vilgerortz of Roggeveen",
      b: "Emhyr var Emreis",
      c: "Ludwig van Beethooven",
      d: "Siegmeyer of Catarina",
      rightAnswer: "d"
    },
    {
      question: "Mikä on Nirvanan Smells like Teen Spirit kappaleen 'Teen Spirit'?",
      a: "Olutmerkki",
      b: "Huulirasva",
      c: "Tavaratalo",
      d: "Huumaava aine",
      rightAnswer: "b"
    },
    {
      question: "Kuka näyttelee Amerikan presidenttiä elokuvassa Air Force One?",
      a: "Harrison Ford",
      b: "Al Pacino",
      c: "Ronald Reagan",
      d: "Anthony Hopkins",
      rightAnswer: "a"
    },
    {
      question: "Mikä on Arnold Schwarzeneggerin esittämän hahmon sukunimi elokuvassa Kindergarten Cop?",
      a: "Alias",
      b: "Rubik",
      c: "Kimble",
      d: "Uno",
      rightAnswer: "c"
    },
    {
      question: "Kuka on Fussball Gott?",
      a: "Bastian Schweinsteiger",
      b: "Gerd Müller",
      c: "Stefan Effenberg",
      d: "Michael Ballack",
      rightAnswer: "a"
    },
    {
      question: "Kuka voitti jalkapallon Mestarien liigan kaudella 2019-2020?",
        a: "Liverpool",
        b: "Real Madrid",
        c: "Bayern München",
        d: "Ajax",
        rightAnswer: "c"
    }
]
let shuffledQuestions = [];

function questionHandler() {
  while(shuffledQuestions.length <= 9) {
    const random = questions[Math.floor(Math.random() * questions.length)]
    if(!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random)
    }
  }
}

let questionNumber = 1;
let playerScore = 0;
let wrongGuesses = 0;
let indexNumber = 0;

function nextQuestion(index) {
  questionHandler()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.a;
    document.getElementById("option-two-label").innerHTML = currentQuestion.b;
    document.getElementById("option-three-label").innerHTML = currentQuestion.c;
    document.getElementById("option-four-label").innerHTML = currentQuestion.d;
}

function checkForAnswer () {
  const currentQuestion = shuffledQuestions[indexNumber]
  const currentQuestionAnswer = currentQuestion.rightAnswer
  const options = document.getElementsByName("option");
  let rightAnswer = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          correctOption = option.labels[0].id
      }
  })

    //checking to make sure a radio input has been checked or an option being chosen
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
  }

  options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongGuesses++ //adds 1 to wrong attempts
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            nextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "That's bad.."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Allright you know something"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Wow nice! you know a lot"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('rightPercentage').innerHTML = playerGrade
    document.getElementById('wrongAnswers').innerHTML = wrongAnswers
    document.getElementById('rightAnswers').innerHTML = playerScore
    //document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
