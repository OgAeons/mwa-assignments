document.addEventListener('DOMContentLoaded', function() {
    var submitButtons = document.querySelectorAll('.submitBtn');
  
    submitButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var correctAnswers = {
          q1: 'new-delhi',
          q2: 'earth',
          q3: 'javascript'
        };
  
        var userAnswers = {};
        var question = this.parentElement;
        var questionNumber = question.querySelector('input[type="radio"]:checked').name;
        var selectedOption = question.querySelector('input[name="' + questionNumber + '"]:checked');
  
        if (selectedOption) {
          userAnswers[questionNumber] = selectedOption.value;
        } else {
          userAnswers[questionNumber] = null;
        }
  
        var feedback = '';
  
        if (userAnswers[questionNumber] === correctAnswers[questionNumber]) {
          feedback = 'Correct!';
        } else {
          feedback = 'Incorrect!';
        }
  
        alert(feedback);
      });
    });
  });
  