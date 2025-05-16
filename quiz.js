const allQuestions = [
    {
        question: "x=2はx^2=4であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが必要条件でない"
    },
    {
        question: "x=0はx^2=0であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "x^2=4はx=2であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが十分条件でない"
    },
    {
        question: "x=1はx^3=1であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "x=-1はx^2=1であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが必要条件でない"
    },
    {
        question: "△ABCにおいてAB=ACは、△ABCが二等辺三角形であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが必要条件でない"
    },
    {
        question: "△ABCについて角A=90°は△ABCが直角三角形であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが必要条件でない"
    },
    {
        question: "x>0はx^2>0であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが必要条件でない"
    },
    {
        question: "y=2x+1は線形方程式であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "xが素数であることはxが偶数であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要条件でも十分条件でもない"
    },
    {
        question: "y=3x+2は1次関数であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "xが偶数であることはxが2で割り切れるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "y=mx+cの形で表される関数は線形方程式であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "x^2=-1は実数であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要条件でも十分条件でもない"
    },
    {
        question: "y=ax^2+bx+cの形で表される式は二次方程式であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "x>0はx^3>0であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "y=2x+3は線形方程式であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "xが偶数であることはxが4の倍数であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが十分条件でない"
    },
    {
        question: "x=1はx^2=1であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが必要条件でない"
    },
    {
        question: "y=mx+bの形で表される関数は1次関数であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "x=2はx^3=8であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "x^2=4はx=2であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが十分条件でない"
    },
    {
        question: "x=5はx^2=25であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが必要条件でない"
    },
    {
        question: "y=4x+1は線形方程式であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "x^2>0はx≠0であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが十分条件でない"
    },
    {
        question: "y=5x+2は1次関数であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "xが奇数であることはxが素数であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要条件でも十分条件でもない"
    },
    {
        question: "y=x+1は線形方程式であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "xが偶数であることはxが4で割り切れるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが十分条件でない"
    },
    {
        question: "y=ax+bの形で表される式は1次関数であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "x>0はx^2>0であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが必要条件でない"
    },
    {
        question: "y=7x+1は1次関数であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "x=3はx^2=9であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが必要条件でない"
    },
    {
        question: "x^2=4はx=-2であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要条件であるが十分条件でない"
    },
    {
        question: "x=0はx^3=0であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "x>1はx^2>1であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "十分条件であるが必要条件でない"
    },
    {
        question: "y=9x+1は線形方程式であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    },
    {
        question: "四角形ABCDにおいてAB=CDかつADとBCが平行であることは、四角形ABCDが平行であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要条件である"
    },
    
    {
        question: "x^2+y^2=2xyであることは、x=yであるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要条件である"
    },
    {
        question: "xが自然数であることはxが整数であるための",
        options: ["必要条件であるが十分条件でない", "十分条件であるが必要条件でない", "必要十分条件である", "必要条件でも十分条件でもない"],
        answer: "必要十分条件である"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let userAnswers = []; // ユーザーの回答を記録するための配列

function startQuiz() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("quizContainer").style.display = "block";
    selectedQuestions = getRandomQuestions(5); // ランダムで5問選ぶ
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = []; // クイズをリセットするときにクリア
    displayQuestion();
}

function getRandomQuestions(num) {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function displayQuestion() {
    const questionObj = selectedQuestions[currentQuestionIndex];
    document.getElementById("questionText").textContent = questionObj.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = '';

    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("optionButton");
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const questionObj = selectedQuestions[currentQuestionIndex];

    // ユーザーの回答を記録する
    userAnswers.push({
        question: questionObj.question,
        selectedAnswer: selectedOption,
        correctAnswer: questionObj.answer
    });

    if (selectedOption === questionObj.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const totalQuestions = selectedQuestions.length;

    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
    document.getElementById('header').style.display = 'none';
    
    // 各問題の結果を表示
    const resultHtml = userAnswers.map((answer) => 
        `<div>
            <p><strong>問題:</strong> ${answer.question}</p>
            <p><strong>結果:</strong> ${answer.selectedAnswer === answer.correctAnswer ? '⭕️' : '❌'}</p>
            <p><strong>あなたの解答:</strong> ${answer.selectedAnswer}</p>
            <p><strong>正答:</strong> ${answer.correctAnswer}</p>
        </div>`
    ).join('');

    document.getElementById('resultList').innerHTML = resultHtml;
    document.getElementById('score').innerText = `得点: ${score} / ${totalQuestions}`;
}

function restartQuiz() {
    document.getElementById("resultContainer").style.display = "none";
    startQuiz();
}
