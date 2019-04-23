let playerScore = 0;
let cpuScore = 0;

function genRandomNumbers() {
  const num1 = Math.floor((Math.random() * 89) + 10);
  const num2 = Math.floor((Math.random() * 89) + 10);
  document.getElementById("num1").innerHTML = " " + num1;
  document.getElementById("num2").innerHTML = "+" + num2;
}

function submitAnswer() {
  const num1 = document.getElementById("num1").innerHTML;
  const num2 = document.getElementById("num2").innerHTML;
  const correctAnswer = parseInt(num1) + parseInt(num2);

  const userAnswer = document.getElementById("answer-input").value;
  if (correctAnswer === parseInt(userAnswer)) {
    document.getElementById("result").innerHTML = "Correct!";
  } else {
    document.getElementById("result").innerHTML = "Wrong!";
  }
}

function submitChoice(choice) {
  const cpu = rng();
  clearInterval(timer);
  const images = ["img/rock.jpg", "img/paper.jpg", "img/scissor.jpg"]
  document.getElementById("imageChoice").src = images[cpu];
  document.getElementById("playAgain").style.display = "inline-block";
  document.getElementById("gameResult").style.visibility = "visible";
  switch (choice) {
    case 0:
      // alert("You picked Rock");
      if (cpu == 0) {
        document.getElementById("gameResult").innerHTML = "Tie. No winner";
      }
      else if (cpu == 1) {
        cpuScore++;
        document.getElementById("gameResult").innerHTML = "Computer wins, Paper beats Rock";
      }
      else {
        playerScore++;
        document.getElementById("gameResult").innerHTML = "You win, Rock beast Scissors!";
      }
      break;
    case 1:
      // alert("You picked Paper");
      if (cpu == 0) {
        playerScore++;
        document.getElementById("gameResult").innerHTML = "You Win, Paper beats Rock!";
      }
      else if (cpu == 1) {
        document.getElementById("gameResult").innerHTML = "Tie. No winner";
      }
      else {
        cpuScore++;
        document.getElementById("gameResult").innerHTML = "Computer wins, Scissors beats Paper";
      }
      break;
    case 2:
      if (cpu == 0) {
        cpuScore++;
        document.getElementById("gameResult").innerHTML = "Computer Wins, Rock beast Scissors";
      }
      else if (cpu == 1) {
        playerScore++;
        document.getElementById("gameResult").innerHTML = "You win, Scissors beats Paper!";
      }
      else {
        document.getElementById("gameResult").innerHTML = "Tie. No winner";
      }
      break;
  }
  document.getElementById("cpuScore").innerHTML = cpuScore;
  document.getElementById("playerScore").innerHTML = playerScore;

}

function rng() {
  return Math.floor((Math.random() * 3));
}

function loopImages() {
  count = 0;
  timer = setInterval(changeImg, 200);
  document.getElementById("playAgain").style.display = "none";
  document.getElementById("gameResult").style.visibility = "hidden";
}

function changeImg() {
  const images = ["img/rock.jpg", "img/paper.jpg", "img/scissor.jpg"]
  count++;
  if (count === 3) { count = 0 };
  document.getElementById("imageChoice").src = images[count];

}


function main() {
  genRandomNumbers();
  rng();

}

function average() {
  const val1 = document.getElementById("answer-input1").value;
  const val2 = document.getElementById("answer-input2").value;
  const val3 = document.getElementById("answer-input3").value;
  const val4 = document.getElementById("answer-input4").value;
  const val5 = document.getElementById("answer-input5").value;
  const total = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5);
  const avg = total / 5;
  document.getElementById("answer").innerHTML = "The average is " + avg;
}


function sumOf() {
  console.log("Hello");
  const sumNum = document.getElementById("sumNum").value;
  let sum = 0
  if (sumNum <= 0) {
    document.getElementById("total").innerHTML = "Please enter a postive number";
  } else {
    for (i = 1; i <= sumNum; i++) {
      sum = sum + i;
    }
    console.log(sum);
    document.getElementById("total").innerHTML = "The sum of numbers 1-" + sumNum + " is " + sum;
  }
}
