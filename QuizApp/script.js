const quizData = [
  {
    question: "What does the '=== 'operator do in JavaScript?",

    a: "Compares two values for equality, but not for type",
    b: "Compares two values for equality, including their types",
    c: "Assigns a value to a variable",
    d: "Checks if a value is undefined",
    correct: "b",
  },
  {
    question: "Which keyword is used to declare variables in JavaScript?",

    a: "var",
    b: "let",
    c: "const",
    d: "dim",
    correct: "a",
  },
  {
    question: "What does 'NaN' stand for in JavaScript?",

    a: "New Accessible Notation",
    b: "Not a Number",
    c: "Null and Negative",
    d: "Non-Applicable Number",
    correct: "b",
  },
  {
    question:
      "Which of the following is a correct way to declare a function in JavaScript?",

    a: "function = myFunction() {}",
    b: "myFunction() = function() {}",
    c: "function myFunction() {}",
    d: "var myFunction = function() {}",

    correct: "c",
  },
  {
    question:
      "What is the output of the following code snippet in JavaScript?\n\n```javascript\nconsole.log(typeof []);\n```",

    a: "object",
    b: "array",
    c: "undefined",
    d: "function",

    correct: "a",
  },
  {
    question:
      "Which method is used to add new elements to the end of an array in JavaScript?",

    a: "push()",
    b: "add()",
    c: "append()",
    d: "addToEnd()",

    correct: "a",
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",

    a: "To refer to the current function",
    b: "To refer to the parent function",
    c: "To refer to the global object",
    d: "To refer to the current object",

    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly </h2>

            <button onclick ="location.reload()">Reload
            `;
    }
  }
});
