
document.addEventListener('keydown', function (event) {
    const key = event.key;
     console.log("key is "+key);
    if (key.match(/[0-9+\-*/]|Enter|Backspace|Escape/)) {
       event.preventDefault(); // Prevent default action for certain keys
      if (key === 'Enter') {
        calculateResult();
      } else if (key === 'Backspace') {
        clearDisplay();
      } else if (key === 'Escape') {
        document.getElementById('display').value = '';
      } 
        else {
        appendToDisplay(key);
      }


    }
    else if(key.match(/[^0-9+\-*/]/)){
                 alertMsg();
                                }
    
  });

  function appendToDisplay(value) {
    document.getElementById('display').value += value; 
    
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  } 


  function calculateResult() {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (value) {
       document.getElementById('display').value = 'Error';
    }
  } 

function alertMessage(){
 var char=document.getElementById('display').value;
 console.log(char);
 if(char!=Number){
    alert("Only numbers are allowed");
 }
}

function alertMsg(){
alert("Only numbers are allowed");
}









