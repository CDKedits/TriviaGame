let remainingTime = 30
let countDown
let currentQ = 0
const quizQuestions = [
  {
    question: `Taylor was born in which year?`,
    answers: {
      a: `1994`,
      b: `1989`,
      c: `1990`,
      d: `1986`,
    },
    correctAnswer: `b`
  },
  {
    question: `Which celebrity inspired Taylor to write her song, "All Too Well"?`,
    answers: {
      a: `Harry Styles`,
      b: `Joe Jonas`,
      c: `Jake Gyllenhaal`,
      d: `Calvin Harris`,
    },
    correctAnswer: `c`
  },
  {
    question: `Complete the following lyrics: "You got that James Dean daydream look in your eye, and I've got that ____ lip classic thing that you like"`,
    answers: {
      a: `blue`,
      b: `red`,
      c: `pink`,
      d: `black`,
    },
    correctAnswer: `b`
  },
  {
    question: `Which of these was Taylor's first pop album?`,
    answers: {
      a: `1989`,
      b: `Red`,
      c: `Reputation`,
      d: `Speak Now`,
    },
    correctAnswer: `a`
  },
  {
    question: `Which is NOT a real title for a Taylor Swift song?`,
    answers: {
      a: `Style`,
      b: `State of Grace`,
      c: `Fearless`,
      d: `Wicked Games`,
    },
    correctAnswer: `d`
  },
  {
    question: `The song "Getaway Car" is in which album?`,
    answers: {
      a: `Red`,
      b: `1989`,
      c: `Reputation`,
      d: `Fearless`,
    },
    correctAnswer: `c`
  },
  {
    question: `In 2010, Taylor began selling her very own line of perfumes. What is the name of one perfume that she sold?`,
    answers: {
      a: `Wonderstruck`,
      b: `Enchantress`,
      c: `Princess`,
      d: `Graceful Red`,
    },
    correctAnswer: `a`
  },
  {
    question: `Which online streaming service is the "Reputation Stadium Tour" featured on?`,
    answers: {
      a: `Hulu`,
      b: `Apple Music`,
      c: `Netflix`,
      d: `YouTube Premium`,
    },
    correctAnswer: ``
  },
  {
    question: `Which celebrity is "King of My Heart" about?`,
    answers: {
      a: `Joe Alwyn`,
      b: `Jake Gyllenhaal`,
      c: `Tom Hiddleston`,
      d: `Harry Styles`,
    },
    correctAnswer: `a`
  },
  {
    question: `The following are songs that Taylor has written for movies EXCEPT`,
    answers: {
      a: `Safe & Sound`,
      b: `Eyes Open`,
      c: `Sweeter Than Fiction`,
      d: `Getaway Car`,
    },
    correctAnswer: `d`
  },
]

const displayQuestions = () => {
  for (i=0; i <  questions.length; i++) {
    
  }
}

const startTimer = () => {
  countDown = setInterval(function () {
    triviaTimer()
  }, 1000)
}

const triviaTimer = () => {
  document.querySelector(`.timer`).innerHTML = `Time Remaining: ${remainingTime}`;
  remainingTime--;
  if (remainingTime <= 0) {
    clearInterval(countDown)
  }
}

document.querySelector(`#start`).addEventListener(`click`, function(event) {
  currentQ = 0
  let Q1 = document.createElement(`div`)
  Q1.innerHTML = quizQuestions[0].question
  document.querySelector(`.questions`).append(Q1)
})

// const quest1 = () => {
//   startTriviaTimer()
//   document.querySelector(`.timer`).style.display = `show`
//   document.querySelector(`#start`).style.display = `none`
//   document.querySelector(`.questions`).innerHTML = `
//   <div class="quiz-sections">
//     <h1 id="question">Taylor was born in which year?</h2>
//     <h2 class="answers">1994</h2>
//     <h2 class = "answers" id="correct">1989</h2>
//     <h2 class="answers">1990</h2>
//     <h2 class="answers">1986</h2>
//   </div>
//   `
//   document.querySelector(`.questions`).addEventListener(`click`, e => {
//     console.log(event.target)
//     clearInterval(countDown)
//     document.querySelector(`.timer`).style.display = `none`
//     if (event.target.id === "correct") {
//       document.querySelector(`.questions`).innerHTML = `
//     <div class="answer-sections">
//     <h3>Yes, you were right!</h3>
//     <h3>The correct answer was: 1989</h3>
//     </div>
//     `
//     nextQuestion()
//     } else {
//       document.querySelector(`.questions`).innerHTML = `
//     <div class="answer-sections">
//     <h3>Wrong answer!</h3>
//     <h3>The correct answer was: 1989</h3>
//     </div>
//     `
//     nextQuestion()
//     }
//   })
// }