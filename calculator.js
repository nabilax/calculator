$(document).ready(function(){
    $('#calculator-form').submit(function(e){
      e.preventDefault();
      
      // Retrieve user input
      var num1 = parseFloat($('#num1').val());
      var num2 = parseFloat($('#num2').val());
      var operation = $('#operation').val();
      var result = 0;
      
      // Perform calculation based on selected operation
      switch(operation) {
        case 'addition':
          result = num1 + num2;
          break;
        case 'subtraction':
          result = num1 - num2;
          break;
        case 'multiplication':
          result = num1 * num2;
          break;
        case 'division':
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            $('#result').html('<div class="alert alert-danger">Error: Division by zero</div>');
            return;
          }
          break;
        default:
          $('#result').html('<div class="alert alert-danger">Error: Invalid operation</div>');
          return;
      }
      
      // Display the result
      $('#result').html('<div class="alert alert-success">Result: ' + result + '</div>');
    });
  });