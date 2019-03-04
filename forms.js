//add event listener to dom content loaded to add events to other buttons
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('quizSubmit').addEventListener('click',gradeQuiz);
    document.getElementById('questionnaire').addEventListener('submit',thankYou);
});

//function to grade quiz answers and calculate score and display it
function gradeQuiz(event){
    event.preventDefault();

    var score = 0;
    if(document.querySelector('input[name="howLong"]:checked').value == 1) {
        score += 25;
    }

    if(document.querySelector('input[name="ticks"]:checked').value == 1) {
        score += 25;
    }
    if(document.querySelector('input[name="whatTodo"]:checked').value == 1) {
        score += 25;
    }

    var checkedBoxes = [];
    checkedBoxes = document.getElementsByName('diseases');
    var count = 0;
    var i;
    for (i = 0; i < checkedBoxes.length; i++) {
        if(checkedBoxes[i].checked == true && checkedBoxes[i].value == 1) {
            count++;
        }
    }
    if(count == 2) {
        score += 25;
    }

    updateResults(score);
}

function thankYou() {
    var thanks = document.createElement('h2');
    thanks.textContent = "Thank you for your feedback!";
    document.getElementById('questionnaire').appendChild(thanks);
}

function updateResults(score) {
    document.getElementById('quizResults').textContent = "Your score: " + score + "%";
}
