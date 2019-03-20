let questionTime = 20
let resultTime = 8
let countDown
let currQuestion = 0

const quizQuestions = [
  {
    question: `Taylor was born in which year?`,
    answers: {
      a: `1994`,
      b: `1989`,
      c: `1990`,
      d: `1986`,
    },
    correctAnswer: `1989`
  },
  {
    question: `Which celebrity inspired Taylor to write her song, "All Too Well"?`,
    answers: {
      a: `Harry Styles`,
      b: `Joe Jonas`,
      c: `Jake Gyllenhaal`,
      d: `Calvin Harris`,
    },
    correctAnswer: `Jake Gyllenhaal`
  },
  {
    question: `Complete the following lyrics: "You got that James Dean daydream look in your eye, and I've got that ____ lip classic thing that you like"`,
    answers: {
      a: `blue`,
      b: `red`,
      c: `pink`,
      d: `black`,
    },
    correctAnswer: `red`
  },
  {
    question: `Which of these was Taylor's first pop album?`,
    answers: {
      a: `1989`,
      b: `Red`,
      c: `Reputation`,
      d: `Speak Now`,
    },
    correctAnswer: `1989`
  },
  {
    question: `Which is NOT a real title for a Taylor Swift song?`,
    answers: {
      a: `Style`,
      b: `State of Grace`,
      c: `Fearless`,
      d: `Wicked Games`,
    },
    correctAnswer: `Wicked Games`
  },
  {
    question: `The song "Getaway Car" is in which album?`,
    answers: {
      a: `Red`,
      b: `1989`,
      c: `Reputation`,
      d: `Fearless`,
    },
    correctAnswer: `Reputation`
  },
  {
    question: `In 2010, Taylor began selling her very own line of perfumes. What is the name of one perfume that she sold?`,
    answers: {
      a: `Wonderstruck`,
      b: `Enchantress`,
      c: `Princess`,
      d: `Graceful Red`,
    },
    correctAnswer: `Wonderstruck`
  },
  {
    question: `Which online streaming service is the "Reputation Stadium Tour" featured on?`,
    answers: {
      a: `Hulu`,
      b: `Apple Music`,
      c: `Netflix`,
      d: `YouTube Premium`,
    },
    correctAnswer: `Netflix`
  },
  {
    question: `Which celebrity is "King of My Heart" about?`,
    answers: {
      a: `Joe Alwyn`,
      b: `Jake Gyllenhaal`,
      c: `Tom Hiddleston`,
      d: `Harry Styles`,
    },
    correctAnswer: `Joe Alwyn`
  },
  {
    question: `The following are songs that Taylor has written for movies EXCEPT`,
    answers: {
      a: `Safe & Sound`,
      b: `Eyes Open`,
      c: `Sweeter Than Fiction`,
      d: `Getaway Car`,
    },
    correctAnswer: `Getaway Car`
  },
]


const startTriviaTimer = () => {
  document.querySelector(`.timer`).innerHTML = `Time Remaining: ${questionTime}`
  countDown = setInterval(function () {
    triviaTimer()
  }, 1000)
}

const triviaTimer = () => {
  document.querySelector(`.timer`).innerHTML = `Time Remaining: ${questionTime}`;
  questionTime--;
  if (questionTime <= 0) {
    clearInterval(countDown)
    questionTime = 20
    document.querySelector(`.results`).style.display = `block`
    document.querySelector(`.results`).innerHTML = `
      Time's up! The correct answer is: ${quizQuestions[currQuestion].correctAnswer}
      `
    document.querySelector(`.timer`).style.display = `none`
    document.querySelector(`.quiz-section`).style.display = `none`
    currQuestion++
    startResultTimer()
  }
}

const startResultTimer = () => {
  countDown = setInterval(function () {
    resultTimer()
  }, 1000)
}

const resultTimer = () => {
  resultTime--;
  if (resultTime <= 0) {
    clearInterval(countDown)
    resultTime = 10
    document.querySelector(`.quiz-section`).style.display = `block`
    displayQuestion()
    document.querySelector(`.results`).style.display = `none`
  }
}

const displayQuestion = () => {
  startTriviaTimer()
  document.querySelector(`.timer`).style.display = `block`
  document.querySelector(`#start`).style.display = `none`
  document.querySelector(`.header`).innerHTML = `${quizQuestions[currQuestion].question}`
  document.querySelector(`#q1`).innerHTML = `${quizQuestions[currQuestion].answers.a}`
  document.querySelector(`#q2`).innerHTML = `${quizQuestions[currQuestion].answers.b}`
  document.querySelector(`#q3`).innerHTML = `${quizQuestions[currQuestion].answers.c}`
  document.querySelector(`#q4`).innerHTML = `${quizQuestions[currQuestion].answers.d}`
}

document.addEventListener(`click`, function (event) {
  console.log(`click event listener is working`)
  if (event.target.className === `choices`)
    if (event.target.innerHTML === quizQuestions[currQuestion].correctAnswer) {
      document.querySelector(`.results`).style.display = `block`
      document.querySelector(`.results`).innerHTML = `
      You were right! The correct answer is: ${quizQuestions[currQuestion].correctAnswer}
      `
      document.querySelector(`.quiz-section`).style.display = `none`
      document.querySelector(`.timer`).style.display = `none`
      clearInterval(countDown)
      questionTime = 20
      currQuestion++
      startResultTimer()
    } else {
      document.querySelector(`.results`).style.display = `block`
      document.querySelector(`.results`).innerHTML = `
      Wrong! The correct answer is: ${quizQuestions[currQuestion].correctAnswer}
      `
      document.querySelector(`.quiz-section`).style.display = `none`
      document.querySelector(`.timer`).style.display = `none`
      clearInterval(countDown)
      questionTime = 20
      currQuestion++
      startResultTimer()
    }
  })

document.querySelector(`#start`).addEventListener(`click`, displayQuestion)





